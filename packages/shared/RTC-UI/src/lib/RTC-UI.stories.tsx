import type { Meta, StoryObj } from "@storybook/react";
import { RTCUI } from "./RTC-UI";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof RTCUI> = {
  component: RTCUI,
  title: "RTCUI",
};
export default meta;
type Story = StoryObj<typeof RTCUI>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
};
