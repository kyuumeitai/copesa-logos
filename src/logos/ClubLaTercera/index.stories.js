import React from 'react'

import ClubLaTercera from '.'

export default {
  title: 'Logos/Club La Tercera',
  component: ClubLaTercera,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <ClubLaTercera {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
