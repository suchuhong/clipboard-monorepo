import type { Meta, StoryObj } from "@storybook/react";
import { CopyButton } from "../src/index";

const meta = {
  title: "react-clipboard-lite/CopyButton",
  component: CopyButton,
  args: { text: "npm i @such/react-clipboard-lite" },
} satisfies Meta<typeof CopyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = { args: {} };
export const CustomLabel: Story = { args: { children: "复制到剪贴板" } };
