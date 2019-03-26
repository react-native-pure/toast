import * as React from "react"
import renderer from 'react-test-renderer'
import WrapperComponent from "@react-native-pure/sibling/src/WrapperComponent"
import ToastUtils from "../src/ToastUtils"
import {Text} from "react-native"

test(`show toast`, (done) => {
    const onShown = jest.fn(() => {
        expect(onShown.mock.calls.length).toBe(1);
    });
    const onHidden = jest.fn(() => {
        expect(onHidden.mock.calls.length).toBe(1);
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
    setTimeout(() => {
        expect(component.toJSON()).toMatchSnapshot();
        done();
    }, 5 * 1000);
});

test(`show center toast`, (done) => {
    const component = renderer.create(
        <WrapperComponent></WrapperComponent>
    );
    ToastUtils.show({
        message: "message",
        position: "center"
    });
    expect(component.toJSON()).toMatchSnapshot();
    setTimeout(done, 5 * 1000);
});

test(`show bottom toast`, (done) => {
    const component = renderer.create(
        <WrapperComponent></WrapperComponent>
    );
    ToastUtils.show({
        message: "message",
        position: "bottom"
    });
    expect(component.toJSON()).toMatchSnapshot();
    setTimeout(done, 5 * 1000);
});

test(`show toast during 1s`, (done) => {
    const component = renderer.create(
        <WrapperComponent></WrapperComponent>
    );
    ToastUtils.show({
        message: "message",
        duration: 1000
    });
    expect(component.toJSON()).toMatchSnapshot();
    setTimeout(done, 5 * 1000);
});

test(`show icon toast`, (done) => {
    const component = renderer.create(
        <WrapperComponent></WrapperComponent>
    );
    ToastUtils.show({
        message: "message",
        renderIcon: () => <Text>Icon</Text>
    });
    expect(component.toJSON()).toMatchSnapshot();
    setTimeout(done, 5 * 1000);
});

test(`show icon toast that disable onPress`, (done) => {
    const component = renderer.create(
        <WrapperComponent></WrapperComponent>
    );
    ToastUtils.show({
        message: "message",
        hideOnPress: false
    });
    expect(component.toJSON()).toMatchSnapshot();
    setTimeout(done, 5 * 1000);
});

