import * as React from "react"
import type {ToastOption} from "./Types";
import Sibling from "@react-native-pure/sibling"
import Toast from "./Toast"

const alone = () => {
    let last = null;
    return function (option: ToastOption) {
        if (last) {
            last();
        }
        const remove = Sibling.append(
            <Toast {...option} remove={() => remove()}/>
        );
        last = remove;
    };
};

export default {
    show: (option: ToastOption) => {
        const remove = Sibling.append(
            <Toast {...option} remove={() => remove()}/>
        );
    },
    /**
     * 单例模式，永远都只显示一个Toast
     */
    alone: alone()
}