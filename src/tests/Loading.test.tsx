import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as Stories from '../stories/Loading.stories'
import "@testing-library/jest-dom/vitest";

const { Default } = composeStories(Stories)

describe('Default', () => {
  test('Loading should render properly', () => {
    render(<Default />)

    expect(
      screen.getByText('Loading...')
    ).toBeInTheDocument()
  })
})