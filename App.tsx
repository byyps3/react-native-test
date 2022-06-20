import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
  useColorScheme,
  View,
} from 'react-native';
import { BaseForm, form } from './src/components/BaseForm/BaseForm'
import { NativeBaseProvider } from 'native-base'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const init = async () => {
    try {
      console.log(await form.submit())
    } catch (error) {
      
    }
  }

  return (
    <NativeBaseProvider>
    {/* <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        <View> */}
          <BaseForm
            form={form}
            schema={{
              type: "object",
              properties: {
                layout: {
                  type: 'void',
                  'x-component': 'FormLayout',
                  properties: {
                    nav: {
                      title: "姓名",
                      type: 'void',
                      'x-component': 'FormLayout.Nav',
                      'x-component-props': {
                        title: '111'
                      },
                    },
                    real_name: {
                      title: "姓名",
                      type: 'string',
                      required: true,
                      'x-decorator': 'FormControl',
                      'x-component': 'Input',
                    },
                    ccc: {
                      title: "ccc",
                      type: 'string',
                      required: true,
                      'x-decorator': 'FormControl',
                      'x-component': 'Input',
                    }
                  }
                }
              }
            }} />
        {/* </View>
        <Button
          title="登录"
          onPress={init}
        />
      </ScrollView>
    </SafeAreaView> */}
    </NativeBaseProvider>
  );
};

export default App;
