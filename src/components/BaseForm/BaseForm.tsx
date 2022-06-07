import React from 'react'
import { createForm, Form } from '@formily/core'
import { FormProvider, createSchemaField, ISchemaFieldReactFactoryOptions, ISchema } from '@formily/react'
import { Input } from './form/Input'
import { FormControl } from './form/FormControl'

interface IBaseForm {
  form?: Form<any>
  other?: ISchemaFieldReactFactoryOptions
  schema: ISchema
}

export const form = createForm()

const SchemaField = createSchemaField({
  components: {
    Input,
    FormControl,
  },
})

export const BaseForm: React.FC<IBaseForm> = props => {
  return (
    <FormProvider form={form}>
      <SchemaField
        schema={props.schema}
        {...props.other}
      >{props.children}</SchemaField>
    </FormProvider>
);
}
