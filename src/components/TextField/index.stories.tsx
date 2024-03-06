import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import TextField, { TextFieldProps } from ".";
import { Email } from "@styled-icons/material-outlined";

export default {
  title: "Form/TextField",
  component: TextField,
  args: {
    label: "E-mail",
    name: "email",
    initialValue: "",
    placeholder: "john.cage@gmail.com"
  },
  argTypes: {
    onChange: { action: "changed" }
  }
} as Meta<TextFieldProps>;

export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "300px", padding: "15px" }}>
        <Story />
      </div>
    )
  ]
};

export const WithIcon: StoryObj = {
  args: {
    icon: <Email />,
    iconPosition: "left"
  },
  argTypes: {
    icon: { type: "" }
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "300px", padding: "15px" }}>
        <Story />
      </div>
    )
  ]
};

export const WithError: StoryObj = {
  args: {
    error: "Ops...something is wrong!",
    icon: <Email />
  },
  argTypes: {
    icon: { type: "" }
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "300px", padding: "15px" }}>
        <Story />
      </div>
    )
  ]
};
