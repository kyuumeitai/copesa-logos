import React from 'react'

import MtNews from './MtNews'

export default {
  title: 'Logos/MtNews',
  component: MtNews,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <MtNews {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
