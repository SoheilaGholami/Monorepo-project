import type { Meta, StoryObj } from "@storybook/react";
import { HelloServer } from "./hello-server";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof HelloServer> = {
  component: HelloServer,
  title: "HelloServer",
};
export default meta;
type Story = StoryObj<typeof HelloServer>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to HelloServer!/gi)).toBeTruthy();
  },
};
