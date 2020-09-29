import React from "react";

import LaCuarta from ".";

export default {
  title: "Logos/LaCuarta",
  component: LaCuarta,
  argTypes: {
    backgroundColor: { control: "color" }
  }
};

const Template = args => <LaCuarta {...args} />;

export const Common = Template.bind({});
Common.args = {
  schema: "common"
};

export const Light = Template.bind({});
Light.args = {
  schema: "light"
};
