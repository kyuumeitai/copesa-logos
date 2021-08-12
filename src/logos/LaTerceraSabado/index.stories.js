import React from 'react'

import LaTerceraSabado from '.'

export default {
  title: 'Logos/LaTerceraSabado',
  component: LaTerceraSabado,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <LaTerceraSabado {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
