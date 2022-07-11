import React from 'react'

import FactChecking from '.'

export default {
  title: 'Logos/Fact Checking',
  component: FactChecking,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <FactChecking {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
