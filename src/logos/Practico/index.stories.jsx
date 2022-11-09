import React from 'react'

import { Practico } from './Practico'

export default {
  title: 'Logos/Práctico',
  component: Practico,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <Practico {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
