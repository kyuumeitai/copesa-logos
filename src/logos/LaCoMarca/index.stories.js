import React from "react";

import LaCoMarca from ".";

export default {
  title: "Logos/LaCoMarca",
  component: LaCoMarca,
  argTypes: {
    backgroundColor: { control: "color" }
  }
};

const Template = args => <LaCoMarca {...args} />;

export const Common = Template.bind({});
Common.args = {
  schema: "common",
  claim: false
};

export const Light = Template.bind({});
Light.args = {
  schema: "light",
  claim: false
};

export const CommonClaim = Template.bind({});
CommonClaim.args = {
  schema: "common",
  claim: true
};

export const LightClaim = Template.bind({});
LightClaim.args = {
  schema: "light",
  claim: true
};

