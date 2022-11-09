import React from 'react'

import { EducaLT } from './EducaLT'

export default {
  title: 'Logos/Educa LT',
  component: EducaLT,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <EducaLT {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
