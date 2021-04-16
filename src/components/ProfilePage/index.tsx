import React from 'react';

import Feed from '../Feed';

import { 
  Container, 
  Banner,
  Wallpaper,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Wallpaper src="https://pbs.twimg.com/profile_banners/1100836916/1618414609/600x200" />
        <Avatar src="https://avatars.githubusercontent.com/u/59484932?v=4" />
      </Banner>

      <ProfileData>
        <EditButton outlined>Edit Profile</EditButton>

        <h1>Marcos Paulo</h1>
        <h2>@marcos_paulo</h2>

        <p>
          Programador Front-end
        </p>

        <ul>
          <li>
            <LocationIcon />
            Minas Gerais, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 2 de Junho de 1998
          </li>
        </ul>

        <Followage>
          <span>
            Follwing <strong>94</strong>
          </span>
          <span>
            <strong>675</strong> Followers
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;