import * as React from "react"
import {Animated, StyleSheet, Text, TouchableWithoutFeedback} from "react-native"
import type {ToastOption} from "./Types";
import {ToastAnimation, ToastDuration, ToastPosition} from "./Enums";

const styles = StyleSheet.create({
    toast: {
        position: "absolute",
        left: 0,
        right: 0,
        justifyContent: "center",
        alignItems: "center"
    },
    message: {
        backgroundColor: "black",
        color: "white"
    }
});

type Props = ToastOption & {
    remove: Function
}

type State = {
    opacity: Animated.Value
};

export default class Toast extends React.PureComponent<Props, State> {
    static defaultProps = {
        position: ToastPosition.top,
        duration: ToastDuration.Short,
        hideOnPress: true,
        animation: ToastAnimation.Fade
    };
    timer = null;
    state = {
        opacity: new Animated.Value(0)
    };

    render() {
        let toastStyle = {};
        if (this.props.position === ToastPosition.top) {
            toastStyle.top = 20;
        }
        else if (this.props.position === ToastPosition.bottom) {
            toastStyle.bottom = 20;
        }
        else if (this.props.position === ToastPosition.center) {
            toastStyle.top = "50%";
            toastStyle.transfrom = [{translateY: "-50%"}];
        }
        const content = (
            <Animated.View style={[styles.toast, toastStyle, {opacity: this.state.opacity}]}>
                {this.props.renderIcon && this.props.renderIcon()}
                <Text
                    style={[styles.message, this.props.styles ? this.props.styles.message : null]}>{this.props.message}</Text>
            </Animated.View>
        );
        if (this.props.hideOnPress) {
            return (
                <TouchableWithoutFeedback onPress={() => this.props.remove()}>
                    {content}
                </TouchableWithoutFeedback>
            );
        }
        return content;
    }

    componentDidMount() {
        this.props.onShow && this.props.onShow();
        Animated.timing(this.state.opacity, {
            toValue: 1
        }).start(() => {
            this.timer = setTimeout(() => {
                this.props.onHide && this.props.onHide();
                Animated.timing(this.state.opacity, {
                    toValue: 0
                }).start(() => {
                    this.props.onHidden && this.props.onHidden();
                    this.props.remove();
                })
            }, this.props.duration);
            this.props.onShown && this.props.onShown();
        });
    }

    componentWillUnmount() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }
}
