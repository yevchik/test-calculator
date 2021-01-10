import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

// import Button from "./components/Button";
// import calculate from "./util/calculate";

const styles = StyleSheet.create({
});

function Calculator () {
  
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Text style={styles.value}>
        </Text>
      </SafeAreaView>
    </View>
  );
}

export default Calculator
