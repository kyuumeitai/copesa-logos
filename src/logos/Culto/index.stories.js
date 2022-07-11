import React from 'react'

import { Culto } from './Culto'

export default {
  title: 'Logos/Culto',
  component: Culto,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <Culto {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
