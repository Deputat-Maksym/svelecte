/** @typedef {typeof __propDef.props}  ControlProps */
/** @typedef {typeof __propDef.events}  ControlEvents */
/** @typedef {typeof __propDef.slots}  ControlSlots */
export default class Control extends SvelteComponentTyped<{
    inputId: any;
    searchable: any;
    disabled: any;
    multiple: any;
    inputValue: any;
    hasDropdownOpened: any;
    selectedOptions: any;
    isAndroid: any;
    clearable: any;
    renderer: any;
    placeholder: any;
    resetOnBlur: any;
    collapseSelection: any;
    alwaysCollapsed: any;
    hasFocus: any;
    isFetchingData: any;
    dndzone: any;
    currentValueField: any;
    itemComponent: any;
    isIOS: any;
    isInvalid?: boolean;
    focusControl?: (event: any) => void;
}, {
    consider: Event | FocusEvent | UIEvent | ClipboardEvent | ProgressEvent<EventTarget> | KeyboardEvent | AnimationEvent | MouseEvent | InputEvent | CompositionEvent | DragEvent | ErrorEvent | FormDataEvent | PointerEvent | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
    finalize: Event | FocusEvent | UIEvent | ClipboardEvent | ProgressEvent<EventTarget> | KeyboardEvent | AnimationEvent | MouseEvent | InputEvent | CompositionEvent | DragEvent | ErrorEvent | FormDataEvent | PointerEvent | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
    deselect: any;
    keydown: CustomEvent<any>;
    paste: ClipboardEvent;
    blur: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    icon: {};
    'control-end': {};
}> {
    get focusControl(): (event: any) => void;
}
export type ControlProps = typeof __propDef.props;
export type ControlEvents = typeof __propDef.events;
export type ControlSlots = typeof __propDef.slots;
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
        clearable: any;
        renderer: any;
        placeholder: any;
        resetOnBlur: any;
        collapseSelection: any;
        alwaysCollapsed: any;
        hasFocus: any;
        isFetchingData: any;
        dndzone: any;
        currentValueField: any;
        itemComponent: any;
        isIOS: any;
        isInvalid?: boolean;
        focusControl?: (event: any) => void;
    };
    events: {
        consider: Event | FocusEvent | UIEvent | ClipboardEvent | ProgressEvent<EventTarget> | KeyboardEvent | AnimationEvent | MouseEvent | InputEvent | CompositionEvent | DragEvent | ErrorEvent | FormDataEvent | PointerEvent | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
        finalize: Event | FocusEvent | UIEvent | ClipboardEvent | ProgressEvent<EventTarget> | KeyboardEvent | AnimationEvent | MouseEvent | InputEvent | CompositionEvent | DragEvent | ErrorEvent | FormDataEvent | PointerEvent | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
        deselect: any;
        keydown: CustomEvent<any>;
        paste: ClipboardEvent;
        blur: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        icon: {};
        'control-end': {};
    };
};
export {};
