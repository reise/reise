"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Search {
}
exports.Search = Search;
class Range {
}
exports.Range = Range;
class Select {
}
exports.Select = Select;
class Filter {
}
exports.Filter = Filter;
class SelectFilter extends Filter {
}
exports.SelectFilter = SelectFilter;
class FilterGroup {
    constructor() {
        this.page = 1;
        this.size = 20;
    }
    get count() {
        return this._count;
    }
    get search() {
        return this._search;
    }
    get range() {
        return this._range;
    }
    get select() {
        return this._select;
    }
    static generateResultQuery(filterGroup, query) {
        return FilterGroup._generateQuery(filterGroup, query);
    }
    static generateCountQuery(filterGroup, query) {
        return FilterGroup._generateQuery(filterGroup, query, true);
    }
    static _generateQuery(filterGroup, query, countQuery = false) {
        if (!query || !filterGroup || !filterGroup.page) {
            return query;
        }
        if (filterGroup.search && filterGroup.search.filters) {
            filterGroup.search.filters.forEach((filter) => {
                if (filter.value) {
                    query = query.where(filter.key).equals(new RegExp(filter.value, "ig"));
                }
            });
        }
        if (filterGroup.range && filterGroup.range.filters) {
            filterGroup.range.filters.forEach((filter) => {
                if (Number.isInteger(filter.min) && Number.isInteger(filter.max)) {
                    query = query.where(filter.key).gte(filter.min);
                    query = query.where(filter.key).lte(filter.max);
                }
            });
        }
        if (filterGroup.select && filterGroup.select.length) {
            filterGroup.select.forEach((select) => {
                if (select && select.filters.length) {
                    select.filters.forEach((filter) => {
                        if (filter.value) {
                            query = query.where(select.title).equals(filter.key);
                        }
                    });
                }
            });
        }
        if (countQuery) {
            return query;
        }
        if (filterGroup.page && filterGroup.size) {
            query = query
                .skip((filterGroup.page - 1) * filterGroup.size)
                .limit(parseInt(filterGroup.size.toString()));
        }
        if (filterGroup.orderBy && filterGroup.orderType) {
            query = query.sort(`${filterGroup.orderType === "asc" ? '' : '-'}${filterGroup.orderBy}`);
        }
        return query;
    }
}
exports.FilterGroup = FilterGroup;
//# sourceMappingURL=query-filter.model.js.map