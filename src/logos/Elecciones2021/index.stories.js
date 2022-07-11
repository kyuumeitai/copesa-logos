import React from 'react'

import Elecciones2021 from './Elecciones2021'

export default {
  title: 'Logos/Elecciones2021',
  component: Elecciones2021,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <Elecciones2021 {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
