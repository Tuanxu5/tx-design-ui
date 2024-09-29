import { fn } from "@storybook/test";

import { Header } from "./Header";

export default {
  title: "Example/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
};

export const LoggedIn = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};

export const LoggedOut = {};
