import React from "react";

import LaTercera from ".";

export default {
  title: "Logos/La Tercera",
  component: LaTercera,
  argTypes: {
    backgroundColor: { control: "color" }
  }
};

const Template = args => <LaTercera {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button"
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button"
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button"
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button"
};
