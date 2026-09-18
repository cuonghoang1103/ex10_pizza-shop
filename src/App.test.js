import { render, screen } from '@testing-library/react';
import App from './App';

test('hien thi thuc don pizza', () => {
  render(<App />);
  expect(screen.getByText('Thực đơn Pizza')).toBeInTheDocument();
});
