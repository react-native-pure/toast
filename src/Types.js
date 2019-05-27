import {ToastAnimation, ToastDuration, ToastPosition} from "./Enums";

export type ToastOption = {
    message: string,
    position?: $Values<typeof ToastPosition>,
    duration?: $Values<typeof ToastDuration>
    // renderIcon?: () => React.Element,
    styles?: {
        message: any,
        container: any
    },
    hideOnPress?: boolean,
    animation?: $Values<typeof ToastAnimation>,
    onShow?: Function,
    onShown?: Function,
    onHide?: Function,
    onHidden?: Function
};