# toast

A Toast component of pure javascript

## Install

```
$ npm install --save @react-native-pure/toast
```

## Simple Usage

```
import Toast from "@react-native-pure/toast"

Toast.show({
    message:"hello toast!"
});

```

## Toast

- `show` **(option:[ToastOption](#toastoption))=>void**

### ToastOption

- `message` **string**
- `position?` **"top"|"center"|"bottom"**  默认是`top`
- `duration?` **number** 默认是2000
- `renderIcon?` **()=>React.Element**
- `styles?`
    - `message` **any** 消息的样式
    - `container` **any** 容器的样式
- `hideOnPress?` **boolean** 点击是否隐藏,默认是`true`
- `animation?` **"none"|"fade"** 默认是`none`
- `onShow?` **Function** 有动画的时候才执行
- `onShown?` **Function** 动画执行完或者没有动画时执行
- `onHide?` **Function** 有动画的时候才执行
- `onHidden?` **Function** 动画执行完或者没有动画时执行
