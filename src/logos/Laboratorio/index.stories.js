import React from "react";

import Laboratorio from ".";

export default {
  title: "Logos/Laboratorio",
  component: Laboratorio,
  argTypes: {
    backgroundColor: { control: "color" }
  }
};

const Template = args => <Laboratorio {...args} />;

export const Full = Template.bind({});
Full.args = {
  version: "full"
};

export const Circle = Template.bind({});
Circle.args = {
  version: "circle"
};

export const CircleSmall = Template.bind({});
CircleSmall.args = {
  version: "circle-small"
};

export const Small = Template.bind({});
Small.args = {
  version: "small"
};
