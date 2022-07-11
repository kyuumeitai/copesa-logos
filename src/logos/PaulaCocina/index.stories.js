import React from 'react'

import PaulaCocina from '.'

export default {
  title: 'Logos/Paula Cocina',
  component: PaulaCocina,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <PaulaCocina {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
