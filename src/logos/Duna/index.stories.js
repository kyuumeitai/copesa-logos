import React from 'react'

import Duna from '.'

export default {
  title: 'Logos/Duna',
  component: Duna,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <Duna {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
