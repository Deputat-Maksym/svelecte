export default settings;
declare namespace settings {
    let disabled: boolean;
    let valueField: any;
    let labelField: any;
    let groupLabelField: string;
    let groupItemsField: string;
    let disabledField: string;
    let placeholder: string;
    let valueAsObject: boolean;
    let searchable: boolean;
    let clearable: boolean;
    let highlightFirstItem: boolean;
    let selectOnTab: any;
    let resetOnBlur: boolean;
    let resetOnSelect: boolean;
    let fetchResetOnBlur: boolean;
    let multiple: boolean;
    let closeAfterSelect: boolean;
    let max: number;
    let collapseSelection: boolean;
    let alwaysCollapsed: boolean;
    let creatable: boolean;
    let creatablePrefix: string;
    let keepCreated: boolean;
    let allowEditing: boolean;
    let delimiter: string;
    let fetchCallback: any;
    let minQuery: number;
    let lazyDropdown: boolean;
    let virtualList: boolean;
    let vlItemSize: any;
    let vlHeight: any;
    namespace i18n {
        export let empty: string;
        export let nomatch: string;
        export function max_1(num: any): string;
        export { max_1 as max };
        export let fetchBefore: string;
        export function fetchQuery(minQuery: any, inputLength: any): string;
        export let fetchInit: string;
        export let fetchEmpty: string;
        export function collapsedSelection(count: any): string;
        export function createRowLabel(value: any): string;
    }
    function collapseSelectionFn(selectionCount: any, selection: any): any;
}
