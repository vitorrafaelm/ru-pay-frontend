import { LogoutNavbar } from "@/components/logoutNavbar";
import { useRegister } from "@/contexts/register";

import {
  BoxForm,
  Container,
  FormTitle,
} from "../../../styles/pageStyles/register/step_two/styles";

export default function RegisterStepTwo(): JSX.Element {
  return (
    <main>
      <LogoutNavbar />

      <Container>
        <BoxForm>
          <FormTitle>Cadastro realizado com sucesso!</FormTitle>
        </BoxForm>
      </Container>
    </main>
  );
}
