import React from 'react'

import Mouse from './Mouse'

export default {
  title: 'Logos/Mouse',
  component: Mouse,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <Mouse {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
