import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as Stories from '../stories/Menubar.stories'
import "@testing-library/jest-dom/vitest";

const { Default } = composeStories(Stories)

describe('Default', () => {
  test('some items are displayed', () => {
    render(<Default />)

    expect(
      screen.getByText('アイテム1')
    ).toBeInTheDocument()
  })
})
