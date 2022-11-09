import React from 'react'

import { MatchProject } from './MatchProject'

export default {
  title: 'Logos/The Match Project',
  component: MatchProject,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <MatchProject {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
