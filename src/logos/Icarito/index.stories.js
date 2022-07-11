import React from 'react'

import Icarito from '.'

export default {
  title: 'Logos/Icarito',
  component: Icarito,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <Icarito {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
