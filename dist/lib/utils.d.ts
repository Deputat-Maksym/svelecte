export function isOutOfViewport(elem: any): false | {
    top: boolean;
    left: boolean;
    bottom: boolean;
    right: boolean;
    any: boolean;
};
export function fetchRemote(url: any): (query: any, parentValue: any, cb: any) => Promise<any>;
export function debounce(fn: any, delay: any): (...args: any[]) => void;
export function highlightSearch(item: any, isSelected: any, $inputValue: any, formatter: any, disableHighlight: any): any;
/**
 * Automatic setter for 'valueField' or 'labelField' when they are not set
 */
export function fieldInit(type: any, options: any, config: any): string;
/**
 * Detect Mac device
 *
 * @returns {bool}
 */
export function iOS(): bool;
/**
 * Detects if on android device
 *
 * @returns {bool}
 */
export function android(): bool;
/**
 * Formatter of newly created items. When `''` is returned, it means new option cannot be created.
 *
 * @param {string} val
 * @param {array} options
 * @returns {string}
 */
export function defaultCreateFilter(val: string, options: any[]): string;
/**
 * Default create function
 *
 * @param {string} inputValue
 * @param {string} creatablePrefix
 * @returns {object} newly created option
 */
export function defaultCreateTransform(inputValue: string, creatablePrefix: string, valueField: any, labelField: any): object;
export let xhr: any;
