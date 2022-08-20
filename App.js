import React from "react";
import { Text, View, StyleSheet } from "react-native";
// https://reactnative.directory/?search=react-native-vector-icons
// 图标字体库 react-native-vector-icons 安装：npm install --save react-native-vector-icons
/*
*   图标字体库的使用：
*   1. 在 android/app/build.gradle 文件里添加：
*     apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
*   2. 引入某个图标字体库的组件：
*     import Icon from 'react-native-vector-icons/AntDesign'
*   3. 使用图标字体：<Icon name="home" size={40} color="red"/>
*   搜索图标的名字：https://oblador.github.io/react-native-vector-icons/
* */
import Icon from 'react-native-vector-icons/AntDesign'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>123test</Text>
      <Text style={styles.text}>123test</Text>
      <Text style={styles.text}>123test</Text>
      <Text style={styles.text}>123test!!!!!!</Text>
      <Icon name="home" size={40} color="red"></Icon>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bfa",
  },
  text: {
    color: "red",
    backgroundColor: "yellow",
  }
});

export default App;
