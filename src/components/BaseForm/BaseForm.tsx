import React from 'react'
import { createForm, Form } from '@formily/core'
import { FormProvider, createSchemaField, ISchemaFieldReactFactoryOptions, ISchema } from '@formily/react'
import { Input } from './form/Input'
import { FormControl } from './form/FormControl'
import { FormLayout } from './form/layouts/Layout'
import { FormNav } from './form/layouts/Nav'
import { FormBody } from './form/layouts/Body'
import { FormHeader } from './form/layouts/Header'
import { FormFooter } from './form/layouts/Footer'

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
    FormLayout,
    FormNav,
    FormBody,
    FormHeader,
    FormFooter,
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
