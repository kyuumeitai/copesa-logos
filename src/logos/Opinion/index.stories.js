import React from 'react'

import Opinion from './Opinion'

export default {
  title: 'Logos/Opinion',
  component: Opinion,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <Opinion {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
