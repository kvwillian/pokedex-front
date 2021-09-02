import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { Card } from './Card';

describe('Card component', () => {
  fit('should render Card correctly', () => {
    const { getByText } = render(
      <Card
        img="http://www.serebii.net/pokemongo/pokemon/001.png"
        id="001"
        name="Bulbasaur"
        type1="Grass"
        type2="Poison"
      />
    )

    expect(getByText('Bulbasaur')).toBeInTheDocument();
    expect(getByText('001')).toBeInTheDocument();
    expect(getByText((content, element) => content.startsWith('Grass'))).toBeInTheDocument();
  });
})
