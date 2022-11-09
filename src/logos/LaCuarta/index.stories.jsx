import React from 'react'

import { LaCuarta } from './LaCuarta'

export default {
  title: 'Logos/La Cuarta',
  component: LaCuarta,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <LaCuarta {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}

export const Claim = Template.bind({})
Claim.args = {
  version: 'claim',
  orientation: 'vertical',
  schema: 'common',
}

export const Vertical = Template.bind({})
Vertical.args = {
  orientation: 'vertical',
  schema: 'common',
}

export const Horizontal = Template.bind({})
Horizontal.args = {
  orientation: 'horizontal',
  schema: 'common',
}

export const Comerciante = Template.bind({})
Comerciante.args = {
  version: 'comerciante',
  orientation: 'vertical',
  schema: 'common',
}

export const Constructor = Template.bind({})
Constructor.args = {
  version: 'constructor',
  orientation: 'vertical',
  schema: 'common',
}

export const Icon = Template.bind({})
Icon.args = {
  version: 'icon',
  schema: 'common',
}

export const Sello = Template.bind({})
Sello.args = {
  version: 'sello',
  schema: 'common',
}
