import * as React from "react"
import type {ToastOption} from "./Types";
import Sibling from "@react-native-pure/sibling"
import Toast from "./Toast"

export default {
    show: (option: ToastOption) => {
        const remove = Sibling.append(
            <Toast {...option} remove={remove}/>
        );
    }
}