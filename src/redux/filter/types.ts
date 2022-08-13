export type sortType = {
    sortId: number;
    property: string;
    type: 'desc' | 'asc'
}

export interface initialStateFilter {
    categoryId: number;
    searchValue: string;
    sort: sortType;
    currentPage: number;
    pageCount: number;
}