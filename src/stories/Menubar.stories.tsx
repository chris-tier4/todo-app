import type { Meta, StoryObj } from '@storybook/react'
// import Menubar from '../components/ui/Menubar'
import { Menubar } from '@radix-ui/react-menubar'

const meta: Meta<typeof Menubar> = {
  component: Menubar,
  title: 'components/Menubar'
}

export default meta

type Story = StoryObj<typeof Menubar>

export const Default: Story = {
    render: () => (
      <Menubar>
        <div role="menuitem">アイテム1</div>
        <div role="menuitem">アイテム2</div>
        <div role="menuitem">アイテム3</div>
      </Menubar>
    ),
}
