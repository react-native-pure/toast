import * as React from "react"
import renderer from 'react-test-renderer'
import WrapperComponent from "@react-native-pure/sibling/src/WrapperComponent"
import ToastUtils from "../src/ToastUtils"

test(`show toast`, () => {
    const component = renderer.create(
        <WrapperComponent></WrapperComponent>
    );
    ToastUtils.show({
        message: "abc"
    });
    expect(component.toJSON()).toMatchSnapshot();
});

