import { ISchema } from '@formily/react';
import React from 'react';
import { BaseForm, form } from './components/BaseForm/BaseForm'
import { Button } from "native-base";
import { useRoute } from '@react-navigation/native';

export interface IIndex {
  schema?: ISchema
  navigation?: any
}

const Index = (props: IIndex) => {
  const route = useRoute();

  return (<>
    <BaseForm
      form={form}
      schema={(route?.params as any)?.schema||{}} />
      <Button onPress={() => props.navigation?.push('Home', {
        schema: {
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
                    title: '111',
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
        }
      })}>Click Me</Button>
      </>
  );
};

export default Index;
