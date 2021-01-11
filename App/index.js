import React, {useState} from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

import Row from './layot/Row'
import Button from "./components/Button";
import calculate from "./utils/calculate";

const styles = StyleSheet.create({
  layout: {
    justifyContent: "flex-end",
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
  },
  display: {
    color: 'white',
    fontWeight: '400',
    textAlign: 'right',
    fontSize: 80,
    marginRight: 15,
  },
});

function Calculator () {
  const [values, setValues] = useState({
    oldValue: null,
    dispValue: '0',
    memory: '0',
    symbol: null,
  })

  const onPress = (action) => (e) => {
    console.log(calculate(values, action))
    setValues({
      ...calculate(values, action)
    })
  }
  
  return (
    <View style={styles.layout}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Text style={styles.display}>
          {values.dispValue}
        </Text>
        <Row>
          <Button
            view='AC'
            capacity='1'
            variant='third'
            onPress={onPress('AC')}
          />
          <Button
            view='+/-'
            capacity='1'
            variant='third'
            onPress={onPress('+/-')}
          />
          <Button
            view='&#37;'
            capacity='1'
            variant='third'
            onPress={onPress('%')}
          />
          <Button
            view='&#247;'
            capacity='1'
            variant='second'
            onPress={onPress('/')}
          />
        </Row>
        <Row>
          <Button
            view='mc'
            capacity='1'
            variant='main'
            onPress={onPress('mc')}
          />
          <Button
            view='mr'
            capacity='1'
            variant='main'
            onPress={onPress('mr')}
          />
          <Button
            view='m-'
            capacity='1'
            variant='main'
            onPress={onPress('m-')}
          />
          <Button
            view='m+'
            capacity='1'
            variant='second'
            onPress={onPress('m+')}
          />
        </Row>
        <Row>
          <Button
            view='7'
            capacity='1'
            variant='main'
            onPress={onPress('7')}
          />
          <Button
            view='8'
            capacity='1'
            variant='main'
            onPress={onPress('8')}
          />
          <Button
            view='9'
            capacity='1'
            variant='main'
            onPress={onPress('9')}
          />
          <Button
            view='&#10005;'
            capacity='1'
            variant='second'
            onPress={onPress('*')}
          />
        </Row>
        <Row>
          <Button
            view='4'
            capacity='1'
            variant='main'
            onPress={onPress('4')}
          />
          <Button
            view='5'
            capacity='1'
            variant='main'
            onPress={onPress('5')}
          />
          <Button
            view='6'
            capacity='1'
            variant='main'
            onPress={onPress('6')}
          />
          <Button
            view='-'
            capacity='1'
            variant='second'
            onPress={onPress('-')}
          />
        </Row>
        <Row>
          <Button
            view='1'
            capacity='1'
            variant='main'
            onPress={onPress('1')}
          />
          <Button
            view='2'
            capacity='1'
            variant='main'
            onPress={onPress('2')}
          />
          <Button
            view='3'
            capacity='1'
            variant='main'
            onPress={onPress('3')}
          />
          <Button
            view='+'
            capacity='1'
            variant='second'
            onPress={onPress('+')}
          />
        </Row>
        <Row>
          <Button
            view='0'
            capacity='2'
            variant='main'
            onPress={onPress('0')}
          />
          <Button
            view=','
            capacity='1'
            variant='main'
            onPress={onPress(',')}
          />
          <Button
            view='='
            capacity='1'
            variant='second'
            onPress={onPress('=')}
          />
        </Row>
      </SafeAreaView>
    </View>
  );
}

export default Calculator
