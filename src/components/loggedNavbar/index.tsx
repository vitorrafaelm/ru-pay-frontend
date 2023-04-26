import Image from 'next/image';
import { HrLine, MenuContainer, MenuContent, MenuItems, NavContainer, NavContent, ProfilePicture } from './styles'; 

import Logo from '../../assets/logo.svg';

export function LoggedNavbar(): JSX.Element {
    return (
        <NavContainer>
          <NavContent>
            <Image src={Logo} alt="Logo" width={200} />

            <MenuContent>
                    <MenuContainer>
                        <MenuItems>Home</MenuItems>
                        <MenuItems>Perfil</MenuItems>
                        <MenuItems>Configurações</MenuItems>
                    </MenuContainer>
                    <HrLine as="hr" />
                    <ProfilePicture>
                        EM
                    </ProfilePicture>
                </MenuContent>
          </NavContent>
        </NavContainer>
    ) 
}