// .storybook/preview.js

import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from '../src/context/CartContext'
import { FavProvider } from '../src/context/FavContext'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      },
    },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <CartProvider>
          <FavProvider>
            <Story />
          </FavProvider>
        </CartProvider>
      </BrowserRouter>
    )
  ],
}

export default preview
