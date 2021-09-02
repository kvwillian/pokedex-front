import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Dashboard } from './Dashboard';

describe('Dashboard component', () => {
  it('should render Dashboard correctly', () => {
    const { getByText } = render(
      <Dashboard />
    )

    expect(getByText('Pokédex')).toBeInTheDocument();
    expect(getByText('Name or Number')).toBeInTheDocument();
  });

  it('should search correctly some pokémon', () => {
    render(<Dashboard />);
    const input = screen.getByPlaceholderText('Busque por pokemon');

    act(() => {
      fireEvent.change(input, { target: { value: 'pikachu' } });
    })

    expect(input.value).toBe('pikachu');
  })
})
