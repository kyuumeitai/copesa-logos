import React from 'react'

import Glamorama from '.'

export default {
  title: 'Logos/Glamorama',
  component: Glamorama,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <Glamorama {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
