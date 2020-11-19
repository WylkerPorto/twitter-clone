import React from 'react';
import Feed from '../Feed';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
        <Banner>
            <Avatar />
        </Banner>

        <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>
            <h1>Dragonester</h1>
            <h2>@LokoNoControle</h2>

            <p>Toda descrição tem um descritivo ;P</p>

            <ul>
                <li>
                    <LocationIcon />
                    Marília, São Paulo
                </li>
                <li>
                    <CakeIcon />
                    Nascido(a) em 11 de Dezembro de 1988
                </li>
            </ul>

            <Followage>
                <span>
                    seguindo <strong>90</strong>
                </span>
                <span>
                    <strong>100 </strong> seguidores
                </span>
            </Followage>
        </ProfileData>

        <Feed />
      </Container>
  );
}

export default ProfilePage;