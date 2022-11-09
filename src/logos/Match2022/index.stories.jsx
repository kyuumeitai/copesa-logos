import React from 'react'

import { Match2022 } from './Match2022'

export default {
  title: 'Logos/Match 2022',
  component: Match2022,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <Match2022 {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
