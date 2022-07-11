import React from 'react'

import LaTerceraSabado from './LaTerceraSabado'

export default {
  title: 'Logos/La Tercera Sábado',
  component: LaTerceraSabado,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <LaTerceraSabado {...args} />

export const Common = Template.bind({})
Common.args = {
  version: 'large',
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  version: 'large',
  schema: 'light',
}

export const CommonSmall = Template.bind({})
CommonSmall.args = {
  version: 'small',
  schema: 'common',
}

export const LightSmall = Template.bind({})
LightSmall.args = {
  version: 'small',
  schema: 'light',
}
