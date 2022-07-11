import React from 'react'

import ElDeportivo from './ElDeportivo'

export default {
  title: 'Logos/El Deportivo',
  component: ElDeportivo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <ElDeportivo {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
