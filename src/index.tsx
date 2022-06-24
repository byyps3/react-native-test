import { ISchema } from '@formily/react';
import React from 'react';
import { BaseForm, form } from './components/BaseForm/BaseForm'
import { Button, Text } from "native-base";

export interface IIndex {
  schema?: ISchema
  navigation?: any
}

const Index = (props: IIndex) => {

  return (<>
    <BaseForm
      form={form}
      schema={props.schema || {
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
      }} />
      <Button onPress={() => props.navigation?.push('Home')}>Click Me</Button>
      </>
  );
};

export default Index;
