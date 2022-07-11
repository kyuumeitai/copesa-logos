import React from 'react'

import { CandidatosElectorales } from './CandidatosElectorales'

export default {
  title: 'Logos/CandidatosElectorales',
  component: CandidatosElectorales,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <CandidatosElectorales {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
