import React from "react";

import LaTerceraAM from ".";

export default {
  title: "Logos/La Tercera AM",
  component: LaTerceraAM,
  argTypes: {
    backgroundColor: { control: "color" }
  }
};

const Template = args => <LaTerceraAM {...args} />;

export const Common = Template.bind({});
Common.args = {
  schema: "common"
};

export const Light = Template.bind({});
Light.args = {
  schema: "light"
};
