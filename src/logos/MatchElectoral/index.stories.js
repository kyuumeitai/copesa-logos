import React from 'react'

import { MatchElectoral } from './MatchElectoral'

export default {
  title: 'Logos/MatchElectoral',
  component: MatchElectoral,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <MatchElectoral {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
