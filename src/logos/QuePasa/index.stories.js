import React from 'react'

import QuePasa from '.'

export default {
  title: 'Logos/Qué Pasa',
  component: QuePasa,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <QuePasa {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
