/** @typedef {typeof __propDef.props}  InputProps */
/** @typedef {typeof __propDef.events}  InputEvents */
/** @typedef {typeof __propDef.slots}  InputSlots */
export default class Input extends SvelteComponentTyped<{
    inputId: any;
    searchable: any;
    disabled: any;
    multiple: any;
    inputValue: any;
    hasDropdownOpened: any;
    selectedOptions: any;
    isAndroid: any;
    focus?: () => any;
    inputMode?: string;
}, {
    focus: FocusEvent;
    blur: FocusEvent;
    paste: ClipboardEvent;
    change: Event;
    keydown: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
    get focus(): () => any;
}
export type InputProps = typeof __propDef.props;
export type InputEvents = typeof __propDef.events;
export type InputSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        inputId: any;
        searchable: any;
        disabled: any;
        multiple: any;
        inputValue: any;
        hasDropdownOpened: any;
        selectedOptions: any;
        isAndroid: any;
        focus?: () => any;
        inputMode?: string;
    };
    events: {
        focus: FocusEvent;
        blur: FocusEvent;
        paste: ClipboardEvent;
        change: Event;
        keydown: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
