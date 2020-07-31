import styled from 'styled-components';

export const FoodsContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 32px;
  margin-top: -140px;

  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;

  @media(max-width: 1190px) {
    grid-template-columns: repeat(2,1fr);
  }

  @media(max-width: 850px) {
    grid-template-columns: inherit;
    display: flex;
    flex-direction: column;
  }
`;
