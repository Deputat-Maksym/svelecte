/** @typedef {typeof __propDef.props}  DropdownProps */
/** @typedef {typeof __propDef.events}  DropdownEvents */
/** @typedef {typeof __propDef.slots}  DropdownSlots */
export default class Dropdown extends SvelteComponentTyped<{
    multiple: any;
    inputValue: any;
    hasDropdownOpened: any;
    renderer: any;
    itemComponent: any;
    lazyDropdown: any;
    creatable: any;
    disableHighlight: any;
    alreadyCreated: any;
    virtualList: any;
    vlItemSize: any;
    vlHeight: any;
    listIndex: any;
    listMessage: any;
    disabledField: any;
    createLabel: any;
    metaKey: any;
    maxReached?: boolean;
    dropdownIndex?: number;
    items?: any[];
    selection?: any;
    scrollIntoView?: (params: any) => void;
    getDimensions?: () => any[];
}, {
    mousedown: MouseEvent;
    deselect: any;
    hover: CustomEvent<any>;
    select: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
    get scrollIntoView(): (params: any) => void;
    get getDimensions(): () => any[];
}
export type DropdownProps = typeof __propDef.props;
export type DropdownEvents = typeof __propDef.events;
export type DropdownSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        multiple: any;
        inputValue: any;
        hasDropdownOpened: any;
        renderer: any;
        itemComponent: any;
        lazyDropdown: any;
        creatable: any;
        disableHighlight: any;
        alreadyCreated: any;
        virtualList: any;
        vlItemSize: any;
        vlHeight: any;
        listIndex: any;
        listMessage: any;
        disabledField: any;
        createLabel: any;
        metaKey: any;
        maxReached?: boolean;
        dropdownIndex?: number;
        items?: any[];
        selection?: any;
        scrollIntoView?: (params: any) => void;
        getDimensions?: () => any[];
    };
    events: {
        mousedown: MouseEvent;
        deselect: any;
        hover: CustomEvent<any>;
        select: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
