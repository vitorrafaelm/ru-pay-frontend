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
} from "../../../styles/pageStyles/register/step_two/styles";

export default function RegisterStepTwo(): JSX.Element {
  const { steps, setStep, register } = useRegister();

  return (
    <main>
      <LogoutNavbar />

      <Container>
        <BoxForm>
          <FormTitle>Faça seu cadastro</FormTitle>
          <StepsContainer>
            <Stepper current={1} steps={steps} setStep={setStep} width={38} />
          </StepsContainer>

          <FormContainer>
            <InputElement
              id="outlined-basic"
              label="Razão social"
              variant="outlined"
              {...register("socialReason")}
            />
            <InputElement
              id="outlined-basic"
              label="Nome Fantasia"
              variant="outlined"
              {...register("fantasyName")}
            />
            <InputElement 
              id="outlined-basic" 
              label="CNPJ" 
              variant="outlined" 
              {...register("cnpj")}
            />
          </FormContainer>

          <ButtonsContaier>
            <ButtonPreviousStep>Voltar</ButtonPreviousStep>
            <ButtonNextStep>Próximo</ButtonNextStep>
          </ButtonsContaier>
        </BoxForm>
      </Container>
    </main>
  );
}
