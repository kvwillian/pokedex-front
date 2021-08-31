import styled from 'styled-components';

export const PokemonCard = styled.div`
  margin: 0 auto;
  margin-bottom: 10px;

  .card-figure {
    border-radius: 5px;
    width: 100%;
    display: block;
    position: relative;
    float: left;

    img {
      background: var(--image-bg);
      border-radius: 5px;
      width: 170px;
      object-fit: cover;
    }

  }
  p {
    color: var(--title);
    font-weight: 600;
  }

  .type {
    display: flex;
    justify-content: space-between;

    span {
      border-radius: 3px;
      line-height: 18px;
      margin: 0 1.5625% 0 0;
      width: 38.4375%;
      float: left;
      font-size: 11px;
      border: 1px solid black;
    }
  }
`;
