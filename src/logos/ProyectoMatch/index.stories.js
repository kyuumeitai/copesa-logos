import React from 'react'

import { ProyectoMatch } from './ProyectoMatch'

export default {
  title: 'Logos/El Proyecto Match',
  component: ProyectoMatch,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <ProyectoMatch {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
