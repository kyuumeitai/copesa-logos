import React from "react";

import PiensaDigital from ".";

export default {
  title: "Logos/Piensa Digital",
  component: PiensaDigital,
  argTypes: {
    backgroundColor: { control: "color" }
  }
};

const Template = args => <PiensaDigital {...args} />;

export const Common = Template.bind({});
Common.args = {
  schema: "common"
};

export const Light = Template.bind({});
Light.args = {
  schema: "light"
};
