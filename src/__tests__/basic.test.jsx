import React from 'react';
import { render, screen } from '@testing-library/react';

test('renderiza un saludo simple', () => {
  render(<h1>Hola Dani!</h1>);
  expect(screen.getByText('Hola Dani!')).toBeInTheDocument();
});
