import React from 'react'

import { LaTercera } from './LaTercera'

export default {
  title: 'Logos/La Tercera',
  component: LaTercera,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <LaTercera {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}

export const Isotype = Template.bind({})
Isotype.args = {
  version: 'isotype',
  schema: 'common',
}

export const IsotypeLight = Template.bind({})
IsotypeLight.args = {
  version: 'isotype',
  schema: 'light',
}
