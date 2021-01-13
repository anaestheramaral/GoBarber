import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 100%;
  height: 56px;
  margin-top: 24px;

  background: #ff9000;
  border: none;
  border-radius: 10px;
  color: #312e38;
  padding: 0 16px;
  font-weight: 500;
  transition: background 0.15s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
