import React from 'react'

import Paula from './Paula'

export default {
  title: 'Logos/Paula',
  component: Paula,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <Paula {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
