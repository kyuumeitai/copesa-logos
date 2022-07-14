import React from 'react'

import { LaTerceraDomingo } from './LaTerceraDomingo'

export default {
  title: 'Logos/La Tercera Domingo',
  component: LaTerceraDomingo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <LaTerceraDomingo {...args} />

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
