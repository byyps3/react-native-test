import React from 'react'
import { createForm, Form } from '@formily/core'
import { FormProvider, createSchemaField, ISchemaFieldReactFactoryOptions, ISchema } from '@formily/react'
import { InputRef } from './form/StringRef'

interface IBaseForm {
  form?: Form<any>
  other?: ISchemaFieldReactFactoryOptions
  schema: ISchema
}

export const form = createForm()

const SchemaField = createSchemaField({
  components: {
    InputRef,
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
