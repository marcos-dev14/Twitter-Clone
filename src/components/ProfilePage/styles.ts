import styled, { css } from 'styled-components';
import { HiLocationMarker } from 'react-icons/hi';
import { BiCake } from 'react-icons/bi';

import Button from '../Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow: auto;

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: min(33vw, 199px);

  position: relative;
`;

export const Wallpaper = styled.img`
  flex-shrink: 0;
  
  width: 100%;
  height: min(33vw, 199px);

  position: relative;
`;


export const Avatar = styled.img`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3.75px solid var(--primary);
  border-radius: 50%;

  position: absolute;
  bottom: -60px;
  left: 15px;

`;

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;

  display: flex;
  flex-direction: column;

  position: relative;

  > h1 {
    font-size: 19px;
    font-weight: bold;
  }
  > h2 {
    font-size: 15px;
    font-weight: normal;

    color: var(--gray);
  }
  > p {
    font-size: 15px;
    margin-top: 11px;
  }
  > ul {
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;

    > li {
      display: flex;
      align-items: center;

      > svg {
        fill: var(--gray);
        margin-right: 5px;
      }
    }
  } 
`;

const iconsCss = css`
  width: 20px;
  height: 20px;
  
  color: var(--gray);
`;

export const LocationIcon = styled(HiLocationMarker)`${iconsCss}`;

export const CakeIcon = styled(BiCake)`${iconsCss}`;

export const Followage = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: var(--gray);

    & + span {
      margin-left: 20px;
    }
  }
`;

export const EditButton = styled(Button)`
  position: absolute;
  top: 2vw;
  right: 7px;

  padding: 4px 16px;
  font-size: 13px;

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`;

