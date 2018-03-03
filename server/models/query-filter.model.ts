import { Model, Document, DocumentQuery, Query } from "mongoose";

export type OrderType = "asc" | "desc";

export class Search {
    public key: string;
    public value: string;
}

export class Range {
    public key: string;
    public min: number;
    public max: number;
}

export class Select {
    public key: string;
    public value: boolean;
}

export class Filter<T> {
    public title: string;
    public filters: T[];
}

export class SelectFilter<T> extends Filter<T> {
    public type: string;
}

export class FilterGroup {

    public constructor() {
        this.page = 1;
        this.size = 20;
    }

    public page: number;
    public size: number;

    private _count: number;
    public get count(): number {
        return this._count;
    }

    public orderType: OrderType;
    public orderBy: string;

    private _search: Filter<Search>;
    public get search(): Filter<Search> {
        return this._search;
    }

    private _range: Filter<Range>;
    public get range(): Filter<Range> {
        return this._range;
    }

    private _select: Array<SelectFilter<Select>>;
    public get select(): Array<SelectFilter<Select>> {
        return this._select;
    }

    public generateQuery(filterGroup: FilterGroup, query: DocumentQuery<Document[], Document>):
        Promise<DocumentQuery<Document[], Document>> {
        if (!query || !filterGroup) {
            return new Promise<DocumentQuery<Document[], Document>>((resolve: Function, reject: Function) => {
                this.setTotalQueryCount(query)
                    .then(() => {
                        return resolve(query);
                    })
                    .catch((error: any) => {
                        return reject(error);
                    });
            });
        }

        if (filterGroup.search && filterGroup.search.filters) {
            filterGroup.search.filters.forEach((filter: Search) => {
                if (filter.value) {
                    query = query.where(filter.key).equals(new RegExp(filter.value, "ig"));
                }
            });
        }

        if (filterGroup.range && filterGroup.range.filters) {
            filterGroup.range.filters.forEach((filter: Range) => {
                if (Number.isInteger(filter.min) && Number.isInteger(filter.max)) {
                    query = query.where(filter.key).gte(filter.min);
                    query = query.where(filter.key).lte(filter.max);
                }
            });
        }

        if (filterGroup.select && filterGroup.select.length) {
            filterGroup.select.forEach((select: SelectFilter<Select>) => {
                if (select && select.filters.length) {
                    select.filters.forEach((filter: Select) => {
                        if (filter.value) {
                            query = query.where(select.title).equals(filter.key);
                        }
                    });
                }
            });
        }

        return new Promise<DocumentQuery<Document[], Document>>((resolve: Function, reject: Function) => {
            this.setTotalQueryCount(query)
                .then(() => {
                    query = query.skip((filterGroup.page - 1) * filterGroup.size)
                        .limit(filterGroup.size)
                        .sort(`${filterGroup.orderType === "asc" ? '' : '-'}${filterGroup.orderBy}`);
                    return resolve(query);
                })
                .catch((error: any) => {
                    return reject(error);
                });
        });
    }

    private setTotalQueryCount(query: DocumentQuery<Document[], Document>): Promise<void> {
        return query.count().then((response: number) => {
            this._count = response;
            return Promise.resolve();
        }).catch((error: any) => {
            return Promise.reject(error);
        });
    }
}