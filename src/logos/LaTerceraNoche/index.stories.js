import React from 'react'

import { LaTerceraNoche } from './LaTerceraNoche'

export default {
  title: 'Logos/La Tercera Noche',
  component: LaTerceraNoche,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <LaTerceraNoche {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
