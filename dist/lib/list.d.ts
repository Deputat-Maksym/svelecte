export function initSelection(initialValue: any, valueAsObject: any, config: any): any;
export function flatList(options: any, config: any): any;
export function getFilterProps(object: any): string[];
export function filterList(options: any, inputValue: any, excludeSelected: any, sifterSearchField: any, sifterSortField: any, config: any): any;
export function indexList(options: any, includeCreateRow: any, config: any): {
    map: any;
    first: number;
    last: number;
    hasCreateRow: boolean;
    next(curr: any, prevOnUndefined: any): any;
    prev(curr: any): any;
};
