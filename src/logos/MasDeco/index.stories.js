import React from 'react'

import MasDeco from './MasDeco'

export default {
  title: 'Logos/Más Deco',
  component: MasDeco,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <MasDeco {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
