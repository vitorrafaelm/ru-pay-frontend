import { LogoutNavbar } from "@/components/logoutNavbar";
import { Stepper } from "@/components/stepper";
import { useRegister } from "@/contexts/register";

import {
  BoxForm,
  ButtonNextStep,
  ButtonPreviousStep,
  Container,
  FormTitle,
  InputElement,
  StepsContainer,
  FormContainer,
  ButtonsContaier,
} from "../../../styles/pageStyles/register/step_three/styles";

export default function RegisterStepThree(): JSX.Element {
  const { steps, setStep, register, onSubmit } = useRegister();

  return (
    <main>
      <LogoutNavbar />

      <Container>
        <BoxForm>
          <FormTitle>Faça seu cadastro</FormTitle>
          <StepsContainer>
            <Stepper current={2} steps={steps} setStep={setStep} width={38} />
          </StepsContainer>

          <FormContainer 
            as="form" onSubmit={onSubmit} 
            style={{ justifyContent: 'center', alignItems: 'center' }}
          >
            <InputElement
              id="outlined-basic"
              label="Universidade"
              variant="outlined"
              {...register("university")}
            />
            <InputElement
              id="outlined-basic"
              label="Código Fornecido"
              variant="outlined"
              {...register("code")}
              required
            />

            <ButtonsContaier>
              <ButtonPreviousStep onClick={() => setStep(1)}>Voltar</ButtonPreviousStep>
              <ButtonNextStep type="submit">Cadastrar</ButtonNextStep>
            </ButtonsContaier>
          </FormContainer>

        </BoxForm>
      </Container>
    </main>
  );
}
