import { fn } from "@storybook/addon-actions";
import React from "react";
import { SvgIcon } from "../assets/icons";
import { TxButton } from "../components";

const TxButtonStory = {
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

export default TxButtonStory;

export const PreviewButton = {
  render: args => (
    <div className="flex-center">
      <TxButton label="Primary" />
    </div>
  ),
  args: {
    onClick: () => {},
  },
};

export const Type = {
  render: args => (
    <div className="flex-center">
      <TxButton label="Primary" />
      <TxButton type="secondary" label="Secondary" />
      <TxButton type="dashed" label="Dashed" />
      <TxButton type="filled" label="Filled" />
      <TxButton type="text" label="Text" />
      <TxButton type="link" label="Link" />
    </div>
  ),
  args: {
    onClick: () => {},
  },
};

export const Disabled = {
  render: args => (
    <div className="flex-center">
      <TxButton disabled />
      <TxButton type="secondary" label="Secondary" disabled />
      <TxButton type="dashed" label="Dashed" disabled />
      <TxButton type="filled" label="Filled" disabled />
      <TxButton type="text" label="Text" disabled />
      <TxButton type="link" label="Link" disabled />
    </div>
  ),
  args: {
    onClick: () => {},
  },
};

export const Loading = {
  render: args => (
    <div className="flex-center">
      <TxButton loading />
      <TxButton type="secondary" label="Secondary" loading />
      <TxButton type="dashed" label="Dashed" loading />
      <TxButton type="filled" label="Filled" loading />
      <TxButton type="text" label="Text" loading />
      <TxButton type="link" label="Link" loading />
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
      <TxButton label="Primary" danger />
      <TxButton type="secondary" label="Secondary" danger />
      <TxButton type="dashed" label="Dashed" danger />
      <TxButton type="filled" label="Filled" danger />
      <TxButton type="text" label="Text" danger />
      <TxButton type="link" label="Link" danger />
    </div>
  ),
  args: {
    onClick: () => {},
  },
};

export const Size = {
  render: args => (
    <div className="flex-center">
      <TxButton label="Large" size="large" />
      <TxButton label="Medium" size="medium" />
      <TxButton label="Small" size="small" />
    </div>
  ),
  args: {
    onClick: () => {},
  },
};

export const Icon = {
  render: args => (
    <div className="flex-center">
      <TxButton label="Icon" prefix={<SvgIcon.IconCursor04 />} />
      <TxButton label={<SvgIcon.IconCursor04 />} />
      <TxButton label="Icon" suffix={<SvgIcon.IconCursor04 />} />
    </div>
  ),
  args: {
    onClick: () => {},
  },
};

export const Shape = {
  render: args => (
    <div className="flex-center">
      <TxButton label="Default" />
      <TxButton label={<SvgIcon.IconCursor04 />} shape="circle" />
      <TxButton label="Circle" shape="circle" />
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
        <TxButton label="Default" gradientBackground={gradientBackground} />
      </div>
    );
  },
  args: {
    onClick: () => {},
  },
};
