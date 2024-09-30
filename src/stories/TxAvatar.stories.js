import { fn } from "@storybook/addon-actions";
import React from "react";
import { SvgIcon } from "../assets/icons";
import { TxAvatar } from "../components";
import { urlImageAvatar } from "../utils/string";

const TxAvatarStory = {
  title: "tx-design-ui/TxAvatar",
  component: TxAvatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
  },
  args: {
    onClick: fn,
  },
};
export default TxAvatarStory;

export const PreviewAvatar = {
  render: args => (
    <div className="flex-center">
      <TxAvatar>T</TxAvatar>
    </div>
  ),
  args: {
    onClick: () => {},
  },
};

export const Size = {
  render: args => (
    <div className="flex-center">
      <TxAvatar size={56}>T</TxAvatar>
      <TxAvatar size={48}>T</TxAvatar>
      <TxAvatar size="large">T</TxAvatar>
      <TxAvatar size="medium">T</TxAvatar>
      <TxAvatar size="small">T</TxAvatar>
    </div>
  ),
  args: {
    onClick: () => {},
  },
};

export const Shape = {
  render: args => (
    <div className="flex-center">
      <TxAvatar>T</TxAvatar>
      <TxAvatar shape="square">T</TxAvatar>
    </div>
  ),
  args: {
    onClick: () => {},
  },
};

export const Icon = {
  render: args => (
    <div className="flex-center">
      <TxAvatar icon={<SvgIcon.IconCursor04 />} />
      <TxAvatar icon={<SvgIcon.IconCursor04 />} shape="square" />
    </div>
  ),
  args: {
    onClick: () => {},
  },
};

export const Url = {
  render: args => (
    <div className="flex-center">
      <TxAvatar url={urlImageAvatar} size={40} />
      <TxAvatar url={urlImageAvatar} shape="square" size={40} />
    </div>
  ),
  args: {
    onClick: () => {},
  },
};

export const Badge = {
  render: args => (
    <div className="flex-center">
      <TxAvatar badge={1}>T</TxAvatar>
      <TxAvatar badge={1} shape="square">
        T
      </TxAvatar>
      <TxAvatar badge="dot">T</TxAvatar>
      <TxAvatar badge="dot" shape="square">
        T
      </TxAvatar>
    </div>
  ),
  args: {
    onClick: () => {},
  },
};

export const Group = {
  render: args => (
    <div className="flex-column">
      <TxAvatar.Group>
        <TxAvatar>T</TxAvatar>
        <TxAvatar>U</TxAvatar>
        <TxAvatar>A</TxAvatar>
        <TxAvatar>N</TxAvatar>
      </TxAvatar.Group>
      <TxAvatar.Group max={2}>
        <TxAvatar>T</TxAvatar>
        <TxAvatar>U</TxAvatar>
        <TxAvatar>A</TxAvatar>
        <TxAvatar>N</TxAvatar>
      </TxAvatar.Group>
    </div>
  ),
  args: {
    onClick: () => {},
  },
};
