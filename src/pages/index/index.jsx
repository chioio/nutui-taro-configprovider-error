import React from "react";
import { View } from "@tarojs/components";
import { Button, ConfigProvider, useConfig } from "@nutui/nutui-react-taro";
import "./index.less";

function Index() {
  return (
    <ConfigProvider theme={{ nutuiButtonPrimary: "#ff0000" }}>
      <View className="nutui-react-demo">
        <View className="index">欢迎使用 NutUI React 开发 Taro 多端项目。</View>
        <View className="index">
          <Button type="primary" className="btn">
            NutUI React Button
          </Button>
        </View>
        <Demo />
      </View>
    </ConfigProvider>
  );
}

function Demo() {
  const { theme } = useConfig();

  return <View>{JSON.stringify(theme)}</View>;
}
export default Index;
