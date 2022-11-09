import React from 'react'

import { PiensaSinLimites } from './PiensaSinLimites'

export default {
  title: 'Logos/Piensa Sin Límites',
  component: PiensaSinLimites,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <PiensaSinLimites {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
