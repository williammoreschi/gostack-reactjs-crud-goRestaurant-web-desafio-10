import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: #c72828;
  padding: 30px 0;

  header {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      div {
        button {
          font-weight: 600;
          border-radius: 8px;
          border: 0;
          background: #39b100;
          color: #fff;
          transition: 0.4s;

          display: flex;
          flex-direction: row;
          align-items: center;

          .text {
            padding: 16px 24px;
          }

          .icon {
            display: flex;
            padding: 16px 16px;
            background: #41c900;
            border-radius: 0 8px 8px 0;
            margin: 0 auto;
            transition: 0.4s;
          }

          &:hover{
            background-color: ${shade(0.2, '#39b100')};

            .icon {
              background-color: ${shade(0.2, '#41c900')};
            }
          }
        }
      }
    }

    @media(max-width: 580px) {
      flex-direction:column;
      padding-bottom: 110px;
      nav {
        margin-top:30px;
      }
    }
    @media(max-width: 380px) {
      img{ width: 100%; }
    }
  }
`;
