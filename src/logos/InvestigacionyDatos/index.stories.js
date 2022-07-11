import React from 'react'

import InvestigacionyDatos from './InvestigacionyDatos'

export default {
  title: 'Logos/InvestigacionyDatos',
  component: InvestigacionyDatos,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <InvestigacionyDatos {...args} />

export const Common = Template.bind({})
Common.args = {
  schema: 'common',
}

export const Light = Template.bind({})
Light.args = {
  schema: 'light',
}
