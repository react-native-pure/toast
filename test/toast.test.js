import * as React from "react"
import renderer from 'react-test-renderer'
import WrapperComponent from "@react-native-pure/sibling/src/WrapperComponent"
import ToastUtils from "../src/ToastUtils"
import {Text, View} from "react-native"

test(`show toast`, (done) => {
    const onShown = jest.fn();
    const onHidden = jest.fn(() => {
        expect(component.toJSON()).toMatchSnapshot();
        expect(onShown.mock.calls.length).toBe(1);
        expect(onHidden.mock.calls.length).toBe(1);
        done();
    });
    const component = renderer.create(
        <WrapperComponent></WrapperComponent>
    );
    ToastUtils.show({
        message: "message",
        onShown,
        onHidden
    });
    expect(component.toJSON()).toMatchSnapshot();
});

test(`show center toast`, () => {
    const component = renderer.create(
        <WrapperComponent></WrapperComponent>
    );
    ToastUtils.show({
        message: "message",
        position: "center"
    });
    expect(component.toJSON()).toMatchSnapshot();
    component.unmount();
});

test(`show bottom toast`, () => {
    const component = renderer.create(
        <WrapperComponent></WrapperComponent>
    );
    ToastUtils.show({
        message: "message",
        position: "bottom"
    });
    expect(component.toJSON()).toMatchSnapshot();
    component.unmount();
});

test(`show toast during 1s`, () => {
    const component = renderer.create(
        <WrapperComponent></WrapperComponent>
    );
    ToastUtils.show({
        message: "message",
        duration: 1000
    });
    expect(component.toJSON()).toMatchSnapshot();
    component.unmount();
});

test(`disable onPress`, () => {
    const component = renderer.create(
        <WrapperComponent></WrapperComponent>
    );
    ToastUtils.show({
        message: "message",
        hideOnPress: false
    });
    expect(component.toJSON()).toMatchSnapshot();
    component.unmount();
});

test(`custom renderMessage`, () => {
    const component = renderer.create(
        <WrapperComponent></WrapperComponent>
    );
    ToastUtils.show({
        message: "abc",
        renderMessage: (message, style) => {
            return (
                <View style={{borderRadius: 4}}>
                    <Text style={style}>{message}</Text>
                </View>
            )
        }
    });

    expect(component.toJSON()).toMatchSnapshot();
    component.unmount();
});

test(`message is Object`, () => {
    const component = renderer.create(
        <WrapperComponent></WrapperComponent>
    );
    ToastUtils.show({
        message: {
            m1: "hello",
            m2: "world"
        },
        renderMessage: ({m1, m2}, style) => {
            return (
                <View style={{borderRadius: 4}}>
                    <Text style={style}>{m1},{m2}</Text>
                </View>
            )
        }
    });

    expect(component.toJSON()).toMatchSnapshot();
    component.unmount();
})

