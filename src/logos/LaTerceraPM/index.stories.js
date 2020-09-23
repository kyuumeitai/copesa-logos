import React from "react";

import LaTerceraPM from ".";

export default {
  title: "Logos/La Tercera PM",
  component: LaTerceraPM,
  argTypes: {
    backgroundColor: { control: "color" }
  }
};

const Template = args => <LaTerceraPM {...args} />;

export const Common = Template.bind({});
Common.args = {
  schema: "common"
};

export const Light = Template.bind({});
Light.args = {
  schema: "light"
};
