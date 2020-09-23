import React from "react";

import Interactivo from ".";

export default {
  title: "Logos/Interactivo",
  component: Interactivo,
  argTypes: {
    backgroundColor: { control: "color" }
  }
};

const Template = args => <Interactivo {...args} />;

export const Common = Template.bind({});
Common.args = {
  schema: "common"
};

export const Light = Template.bind({});
Light.args = {
  schema: "light"
};
