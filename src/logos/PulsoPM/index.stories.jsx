import React from 'react'

import { PulsoPM } from './PulsoPM'

export default {
  title: 'Logos/PulsoPM',
  component: PulsoPM,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <PulsoPM {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
