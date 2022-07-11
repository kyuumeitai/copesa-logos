import React from 'react'

import { MatchConstituyente } from './MatchConstituyente'

export default {
  title: 'Logos/MatchConstituyente',
  component: MatchConstituyente,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <MatchConstituyente {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
