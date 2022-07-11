import React from 'react'

import CronicaEstereo from './CronicaEstereo'

export default {
  title: 'Logos/Crónica Estéreo',
  component: CronicaEstereo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <CronicaEstereo {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
