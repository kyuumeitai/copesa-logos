import React from 'react'

import PulsoTrader from '.'

export default {
  title: 'Logos/Pulso Trader',
  component: PulsoTrader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <PulsoTrader {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
