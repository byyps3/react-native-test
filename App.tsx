import React from 'react';
import { useColorScheme } from 'react-native';
import { BaseForm, form } from './src/components/BaseForm/BaseForm'
import { NativeBaseProvider } from 'native-base'

const App = () => {

  return (
    <NativeBaseProvider>
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
    </NativeBaseProvider>
  );
};

export default App;
