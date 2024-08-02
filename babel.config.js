// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    [
      "taro",
      {
        framework: "react",
        ts: false,
      },
    ],
  ],
  plugins: [
    [
      "import",
      {
        libraryName: "@nutui/nutui-react-taro",
        style: (name) => {
          const ignores = ["useConfig"];

          const component = name.split("/").pop();

          if (ignores.includes(component)) return false;

          return name;
        },
        customName: (name) => {
          const pkg = '@nutui/nutui-react-taro/dist/esm/'
          switch (name) {
            case "useConfig":
              return pkg + "ConfigProvider";

            default:
              return pkg + name
          }
        },
        camel2DashComponentName: false,
      },
      "nutui-react-taro",
    ],
  ],
};
