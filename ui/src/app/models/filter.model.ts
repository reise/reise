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
        this.orderType = "asc";
    }

    public page: number | string;
    public size: number | string;
    public count: number | string;
    public orderType: OrderType;
    public orderBy: string;
    public search: Filter<Search>;
    public range: Filter<Range>;
    public select: Array<SelectFilter<Select>>;

    public static reset(filterGroup: FilterGroup): void {
        filterGroup.search.filters.forEach((filter: Search) => {
            filter.value = "";
        });
        filterGroup.range.filters.forEach((filter: Range) => {
            filter.min = null;
            filter.max = null;
        });
        filterGroup.select.forEach((selectFilter: SelectFilter<Select>) => {
            selectFilter.filters.forEach((filter: Select) => {
                filter.value = false;
            });
        });
    }

    public static isEmpty(filterGroup: FilterGroup): boolean {

        if (!filterGroup) {
            return true;
        }

        let isEmpty: boolean = true;

        isEmpty = isEmpty && (!filterGroup.search ||
            !filterGroup.search.filters ||
            filterGroup.search.filters.every((filter: Search) => {
                return !filter.value;
            }));

        isEmpty = isEmpty && (!filterGroup.range ||
            !filterGroup.range.filters ||
            filterGroup.range.filters.every((filter: Range) => {
                return !filter.min && !filter.max;
            }));

        if (filterGroup.select) {
            filterGroup.select.forEach((select: SelectFilter<Select>) => {
                isEmpty = isEmpty && (select.filters.every((filter: Select) => {
                    return !filter.value;
                }));
            })
        }
        return isEmpty;
    }
}