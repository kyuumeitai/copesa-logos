import React from "react";

import LaTerceraDomingo from ".";

export default {
  title: "Logos/La Tercera Domingo",
  component: LaTerceraDomingo,
  argTypes: {
    backgroundColor: { control: "color" }
  }
};

const Template = args => <LaTerceraDomingo {...args} />;

export const Common = Template.bind({});
Common.args = {
  schema: "common"
};

export const Light = Template.bind({});
Light.args = {
  schema: "light"
};
