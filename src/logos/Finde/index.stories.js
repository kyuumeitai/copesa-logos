import React from 'react'

import Finde from '.'

export default {
  title: 'Logos/Finde',
  component: Finde,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <Finde {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
