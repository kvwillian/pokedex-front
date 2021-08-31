import styled from 'styled-components';
import backgroundImg from '../../assets/container_bg.png'
import { shade } from 'polished'

export const Container = styled.div`
  margin: 0 auto;
  background: var(--background);
  background-image: url(${backgroundImg});
  min-height: 100vh;

  header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 80px;
    color: var(--title);

    h1 {
      font-weight: 300;
    }
  }

  `;

export const Form = styled.form`

background: var(--dark-bg);
color: #FFF;
padding: 10px;

.search-area {
  justify-content: flex-start;
  margin: 20px 20px;
  font-size: 10px;

  h1 {
    margin-bottom: 20px;
    padding: 10px;
  }

  .input-field {
    display: flex;
    align-items: center;
  }

  input {
    height: 55px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid;
  }

  button {
    width: 50px;
    height: 55px;
    background: var(--orange);
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#ee6b30')};
    }
  }
}
`;

export const CardContainer = styled.div`
  display: grid;


  margin: 0 auto;
  padding: 2rem;
  margin-left: 25px;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-gap: 1px;
`;


