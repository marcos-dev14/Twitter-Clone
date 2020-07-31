import React from 'react';

import Feed from '../Feed';

import { 
    Container,
    Banner,
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
            <Avatar />
        </Banner>

        <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>

            <h1>Marcos Paulo</h1>
            <h2>@marcos_paulodev</h2>

            <p>
                Programador Web 
                <a href="https://github.com/marcos-dev14"> Github</a>
            </p>

            <ul>
                <li>
                    <LocationIcon />
                    Minas Gerais, Brasil
                </li>

                <li>
                    <CakeIcon />
                    Nascido(a) em 2 de junho de 1998
                </li>
            </ul>

            <Followage>
                <span>
                    seguindo <strong>94</strong>
                </span>

                <span>
                    <strong>672 </strong> seguidores
                </span>
            </Followage>
        </ProfileData>

        <Feed />
    </Container>
  );
}

export default ProfilePage;