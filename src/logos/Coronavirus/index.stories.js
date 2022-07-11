import React from 'react'

import Coronavirus from '.'

export default {
  title: 'Logos/Coronavirus',
  component: Coronavirus,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <Coronavirus {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
