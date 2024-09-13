import React from 'react'; // Reactをインポート
import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../../src/components/Todo';

test('renders Todo component', () => {
  render(<Todo />);
  expect(screen.getByText('Todo App')).toBeInTheDocument();
});

test('can add a todo item', () => {
  render(<Todo />);
  
  const input = screen.getByPlaceholderText('Add a task');
  const button = screen.getByText('Add');
  
  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.click(button);
  
  expect(screen.getByText('New Task')).toBeInTheDocument();
});
