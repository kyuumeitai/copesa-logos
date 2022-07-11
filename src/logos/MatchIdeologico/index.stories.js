import React from 'react'

import { MatchIdeologico } from './MatchIdeologico'

export default {
  title: 'Logos/MatchIdeologico',
  component: MatchIdeologico,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <MatchIdeologico {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
