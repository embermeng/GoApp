import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Linking,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
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
/*
*   路由的使用：https://wix.github.io/react-native-navigation/docs/before-you-start/
* */
import Icon from "react-native-vector-icons/AntDesign";

const App = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>123test</Text>
        <Text style={styles.text}>123test</Text>
        <Text style={styles.text}>123test</Text>
        <Text style={styles.text}>123test!!!!!!</Text>
        <View>
          <Text>Icons用法：</Text>
          <Icon name="home" size={40} color="red"></Icon>
        </View>
        <View>
          <Button color="gray" title="跳转到外部页面" onPress={() => {
            Linking.openURL("https://www.baidu.com");
          }}></Button>
        </View>
        {/*<View>
        <Text>模拟按钮：</Text>
        <Text style={styles.button} onPress={() => {
          Linking.openURL("https://www.baidu.com");
        }}>跳转到外部页面</Text>
      </View>*/}
        {/*
      TouchableHighlight需要有onPress属性才能有效果，但TouchableOpacity不需要
    */}
        <TouchableHighlight activeOpacity={0.8} underlayColor="orange" style={styles.button} onPress={() => {
          console.log("123456");
        }}>
          <Text style={styles.textBtn}>跳转到外部页面</Text>
        </TouchableHighlight>
        <View style={{ width: "100%" }}>
          <Image source={require("./src/assets/intro1.png")} resizeMode="contain"
                 style={{ width: "100%", height: 1500 }}></Image>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: "#bfa",
  }, text: {
    color: "red", backgroundColor: "yellow",
  }, button: {
    backgroundColor: "pink", height: 50, width: 200, borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }, textBtn: {
    color: "black",
  },
});

export default App;
