import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: #000;
  background-color: var(--secondary);
  &:disabled {
    filter: brightness(20%);
    cursor: not-allowed;
  }
  &:last-child {
    margin-right: 0;
  }
  & i {
    width: 40px;
    height: 40px;
  }
`;

export const Button1 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 16px;
  line-height: 19px;
  font-weight: 700;
  color: #000;
  background-color: var(--secondary);
  margin-right: 12px;
  &:disabled {
    filter: brightness(20%);
    cursor: not-allowed;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const Button2 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-size: 16px;
  line-height: 19px;
  font-weight: 700;
  color: #000;
  background-color: var(--secondary);
  margin-right: 12px;
  &:disabled {
    filter: brightness(20%);
    cursor: not-allowed;
  }

  &:last-child {
    margin-right: 0;
  }
`;
