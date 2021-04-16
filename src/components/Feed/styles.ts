import styled from 'styled-components';

export const Container = styled.div`
  > div {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Tab = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-right: 10px;
  padding: 12px 0 15px;
  text-align: center;

  font-size: 15px;
  font-weight: bold;

  outline: 0;
  cursor: pointer;

  &:hover {
      background: var(--twitter-dark-hover);
    }

  &.active {
    color: var(--twitter);
    border-bottom: 2px solid var(--twitter);
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`;
