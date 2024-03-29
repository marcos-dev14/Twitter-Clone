import styled, { css } from 'styled-components';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { BiHomeCircle, BiSearch, BiBell } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid var(--gray);
    border-right: 1px solid var(--gray);
  }
`;

export const Header = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  background: var(--primary);

  display: flex;
  align-items: center;

  text-align: left;

  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);

  > button {
    padding: 8px;
    border-radius: 50%;

    outline: 0;
    cursor: pointer;
    margin-right: 12px;

    &:hover{
      background: var(--twitter-dark-hover);
    }
  }
`;

export const  BackIcon = styled(HiArrowNarrowLeft)`
  width: 24px;
  height: 24px;

  fill: var(--twitter);
`;

export const  ProfileInfo = styled.div`
  margin-left: 17px;

  display: flex;
  flex-direction: column;

  > strong {
    font-size: 19px;
  }

  > span {
    font-size: 15px;
    color: var(--gray);
  }
`;

const iconsCss = css`
  width: 31px;
  height: 31px;

  cursor: pointer;

  fill: var(--gray);

  &:hover,
  &.active {
    fill: var(--twitter);
  }
`;

export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  background: var(--primary);
  width: 100%;
  border-top: 1px solid var(--outline);

  display: flex;
  justify-content: space-between;

  padding: 8px min(46px, max(10vw, 10px));

  @media (min-width: 500px) {
    display: none;
  }
`;

export const HomeIcon = styled(BiHomeCircle)`${iconsCss}`;

export const SearchIcon = styled(BiSearch)`${iconsCss}`;

export const BellIcon = styled(BiBell)`${iconsCss}`;

export const EmailIcon = styled(AiOutlineMail)`${iconsCss}`;

