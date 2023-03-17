import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Board from '../components/Board';

describe('Board', () => {
  test('renders the Board component', () => {
    render(<Board />);
    expect(screen.getByText('To do')).toBeInTheDocument();
  });

  test('loads the initial list data', () => {
    render(<Board />);
    expect(screen.getByText('Task 1')).toBeInTheDocument();
  });

  test('calls the move function when a card is moved', () => {
    const move = jest.fn();
    render(<Board />, { wrapper: ({ children }) => (
      <BoardContext.Provider value={{ list: data, move }}>
        { children }
      </BoardContext.Provider>
    )});
    const draggable = screen.getByText('Task 1');
    const droppable = screen.getByText('In progress');
    fireEvent.dragStart(draggable);
    fireEvent.dragEnter(droppable);
    fireEvent.dragOver(droppable);
    fireEvent.drop(droppable);
    expect(move).toHaveBeenCalledWith(0, 1, 0, 0);
  });

  test('updates the list when a card is moved', () => {
    render(<Board />, { wrapper: ({ children }) => (
      <BoardContext.Provider value={{ list: data, move }}>
        { children }
      </BoardContext.Provider>
    )});
    const draggable = screen.getByText('Task 1');
    const droppable = screen.getByText('In progress');
    fireEvent.dragStart(draggable);
    fireEvent.dragEnter(droppable);
    fireEvent.dragOver(droppable);
    fireEvent.drop(droppable);
    expect(screen.getByText('Task 1')).not.toBeInTheDocument();
    expect(screen.getByText('Task 1 moved')).toBeInTheDocument();
  });
});
