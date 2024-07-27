import type { Meta, StoryObj } from '@storybook/react'
import Loading from '../components/global/loading'

const meta: Meta<typeof Loading> = {
  component: Loading,
  title: 'components/Loading'
}

export default meta

type Story = StoryObj<typeof Loading>

export const Default: Story = {
}