import React from "react";

import MtOnline from ".";

export default {
  title: "Logos/MtOnline",
  component: MtOnline,
  argTypes: {
    backgroundColor: { control: "color" }
  }
};

const Template = args => <MtOnline {...args} />;

export const Common = Template.bind({});
Common.args = {
  schema: "common"
};

export const Light = Template.bind({});
Light.args = {
  schema: "light"
};
