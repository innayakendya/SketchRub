// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SketchRub title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SketchRub/i);
    expect(titleElement).toBeInTheDocument();
});
