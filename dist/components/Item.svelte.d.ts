/** @typedef {typeof __propDef.props}  ItemProps */
/** @typedef {typeof __propDef.events}  ItemEvents */
/** @typedef {typeof __propDef.slots}  ItemSlots */
export default class Item extends SvelteComponentTyped<{
    inputValue: any;
    disableHighlight?: boolean;
    item?: {};
    index?: number;
    isSelected?: boolean;
    isDisabled?: boolean;
    isMultiple?: boolean;
    formatter?: any;
}, {
    mousedown: MouseEvent;
    select: Event;
    deselect: Event | FocusEvent | UIEvent | ClipboardEvent | ProgressEvent<EventTarget> | KeyboardEvent | AnimationEvent | MouseEvent | InputEvent | CompositionEvent | DragEvent | ErrorEvent | FormDataEvent | PointerEvent | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
    hover: Event | FocusEvent | UIEvent | ClipboardEvent | ProgressEvent<EventTarget> | KeyboardEvent | AnimationEvent | MouseEvent | InputEvent | CompositionEvent | DragEvent | ErrorEvent | FormDataEvent | PointerEvent | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ItemProps = typeof __propDef.props;
export type ItemEvents = typeof __propDef.events;
export type ItemSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        inputValue: any;
        disableHighlight?: boolean;
        item?: {};
        index?: number;
        isSelected?: boolean;
        isDisabled?: boolean;
        isMultiple?: boolean;
        formatter?: any;
    };
    events: {
        mousedown: MouseEvent;
        select: Event;
        deselect: Event | FocusEvent | UIEvent | ClipboardEvent | ProgressEvent<EventTarget> | KeyboardEvent | AnimationEvent | MouseEvent | InputEvent | CompositionEvent | DragEvent | ErrorEvent | FormDataEvent | PointerEvent | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
        hover: Event | FocusEvent | UIEvent | ClipboardEvent | ProgressEvent<EventTarget> | KeyboardEvent | AnimationEvent | MouseEvent | InputEvent | CompositionEvent | DragEvent | ErrorEvent | FormDataEvent | PointerEvent | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
