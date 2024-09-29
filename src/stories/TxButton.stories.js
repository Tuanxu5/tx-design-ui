import { fn } from "@storybook/addon-actions";
import React from "react";
import { SvgIcon } from "../assets/icons";
import TxButton from "../components/tx-button/tx-button";

export default {
  title: "tx-design-ui/TxButton",
  component: TxButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
  args: {
    label: "Click me",
    onClick: fn,
  },
};

export const PreviewTexButton = {
  render: args => (
    <div className="flex-center">
      <TxButton {...args} label="Primary" />
    </div>
  ),
  args: {
    onClick: () => {},
  },
};

export const Type = {
  render: args => (
    <div className="flex-center">
      <TxButton {...args} label="Primary" />
      <TxButton {...args} type="secondary" label="Secondary" />
      <TxButton {...args} type="dashed" label="Dashed" />
      <TxButton {...args} type="filled" label="Filled" />
      <TxButton {...args} type="text" label="Text" />
      <TxButton {...args} type="link" label="Link" />
    </div>
  ),
  args: {
    onClick: () => {},
  },
};

export const Disabled = {
  render: args => (
    <div className="flex-center">
      <TxButton {...args} disabled />
      <TxButton {...args} type="secondary" label="Secondary" disabled />
      <TxButton {...args} type="dashed" label="Dashed" disabled />
      <TxButton {...args} type="filled" label="Filled" disabled />
      <TxButton {...args} type="text" label="Text" disabled />
      <TxButton {...args} type="link" label="Link" disabled />
    </div>
  ),
  args: {
    onClick: () => {},
  },
};

export const Loading = {
  render: args => (
    <div className="flex-center">
      <TxButton {...args} loading />
      <TxButton {...args} type="secondary" label="Secondary" loading />
      <TxButton {...args} type="dashed" label="Dashed" loading />
      <TxButton {...args} type="filled" label="Filled" loading />
      <TxButton {...args} type="text" label="Text" loading />
      <TxButton {...args} type="link" label="Link" loading />
    </div>
  ),
  args: {
    onClick: () => {
      console.log(123123);
    },
  },
};

export const Danger = {
  render: args => (
    <div className="flex-center">
      <TxButton {...args} label="Primary" danger />
      <TxButton {...args} type="secondary" label="Secondary" danger />
      <TxButton {...args} type="dashed" label="Dashed" danger />
      <TxButton {...args} type="filled" label="Filled" danger />
      <TxButton {...args} type="text" label="Text" danger />
      <TxButton {...args} type="link" label="Link" danger />
    </div>
  ),
  args: {
    onClick: () => {},
  },
};

export const Size = {
  render: args => (
    <div className="flex-center">
      <TxButton {...args} label="Large" size="large" />
      <TxButton {...args} label="Medium" size="medium" />
      <TxButton {...args} label="Small" size="small" />
    </div>
  ),
  args: {
    onClick: () => {},
  },
};

export const Icon = {
  render: args => (
    <div className="flex-center">
      <TxButton {...args} label="Icon" prefix=<SvgIcon.IconCursor04 /> />
      <TxButton {...args} label=<SvgIcon.IconCursor04 /> />
      <TxButton {...args} label="Icon" suffix=<SvgIcon.IconCursor04 /> />
    </div>
  ),
  args: {
    onClick: () => {},
  },
};

export const Shape = {
  render: args => (
    <div className="flex-center">
      <TxButton {...args} label="Default" />
      <TxButton {...args} label=<SvgIcon.IconCursor04 /> shape="circle" />
      <TxButton {...args} label="Circle" shape="circle" />
    </div>
  ),
  args: {
    onClick: () => {},
  },
};

export const GradientBackground = {
  render: args => {
    const gradientBackground = {
      degree: 135,
      colors: ["#6253e1", "#04befe"],
    };
    return (
      <div className="flex-center">
        <TxButton {...args} label="Default" gradientBackground={gradientBackground} />
      </div>
    );
  },
  args: {
    onClick: () => {},
  },
};
