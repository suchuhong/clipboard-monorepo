import type { Meta, StoryObj } from "@storybook/react";
import { CopyOnClick } from "../src/index";

const meta = {
  title: "react-clipboard-lite/CopyOnClick",
  component: CopyOnClick,
  args: { text: "HELLO-123" },
} satisfies Meta<typeof CopyOnClick>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <CopyOnClick {...args}>
      <code>{args.text}</code>
    </CopyOnClick>
  ),
};
