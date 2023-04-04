import Image from 'next/image';
import { 
    NavContainer, 
    NavContent,  
    MenuContent, 
    MenuContainer,
    MenuItems,
    RegisterButton,
    HrLine, 
} from './styles'; 

import Logo from '../../assets/logo.svg';

export function LogoutNavbar(): JSX.Element {
    return (
        <NavContainer as="nav">
            <NavContent>
                <Image src={Logo} alt="Logo" width={200} />

                <MenuContent>
                    <MenuContainer>
                        <MenuItems>Home</MenuItems>
                        <MenuItems>Sobre</MenuItems>
                        <MenuItems>Parceiros</MenuItems>
                    </MenuContainer>
                    <HrLine as="hr" />
                    <RegisterButton>
                        Cadastrar
                    </RegisterButton>
                </MenuContent>
            </NavContent>
        </NavContainer>
    )
}