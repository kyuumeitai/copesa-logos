import React from 'react'

import { Pulso } from './Pulso'

export default {
  title: 'Logos/Pulso',
  component: Pulso,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <Pulso {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
