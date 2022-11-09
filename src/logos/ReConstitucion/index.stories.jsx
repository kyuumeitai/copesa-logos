import React from 'react'

import { ReConstitucion } from './ReConstitucion'

export default {
  title: 'Logos/Re:Constitución',
  component: ReConstitucion,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <ReConstitucion {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
