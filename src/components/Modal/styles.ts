import styled from 'styled-components';
import { shade } from 'polished';
import ReactModal from 'react-modal';
export const Container = styled(ReactModal)`
  position: relative;
  transition: all 0.4s linear;
  width: 736px;

  @media (max-width: 776px) {
    width: calc(94% - 20px);
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  right: -20px;
  top: -20px;
  border: none;
  background: #c72828;
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: 0.4s;

  svg{
    color:#fff;
    font-size:25px;
  }

  &:hover{
    background-color: ${shade(0.2, '#c72828')};
  }
`
