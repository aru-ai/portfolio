import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero heading with the developer name', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('John Lloyd Macalino');
});

test('renders the main navigation sections', () => {
  render(<App />);
  const nav = screen.getByRole('navigation', { name: /primary/i });
  ['Expertise', 'Experience', 'Projects', 'Contact'].forEach((label) => {
    expect(nav).toHaveTextContent(label);
  });
});
