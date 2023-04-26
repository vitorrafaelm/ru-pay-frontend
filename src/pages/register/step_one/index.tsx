import { LogoutNavbar } from "@/components/logoutNavbar";
import { Stepper } from "@/components/stepper";
import { useRegister } from "@/contexts/register";

import {
  BoxForm,
  ButtonNextStep,
  ButtonPreviousStep,
  ButtonsContaier,
  Container,
  FormTitle,
  InputElement,
  StepsContainer,
  FormContainer,
} from "../../../styles/pageStyles/register/step_one/styles";

export default function RegisterStepOne(): JSX.Element {
  const { steps, setStep, register, formState } = useRegister();

  return (
    <main>
      <LogoutNavbar />

      <Container>
        <BoxForm>
          <FormTitle>Faça seu cadastro</FormTitle>
          <StepsContainer>
            <Stepper current={0} steps={steps} setStep={setStep} width={38} />
          </StepsContainer>

          <FormContainer>
            <InputElement
              id="outlined-basic"
              label="Nome do responsável"
              variant="outlined"
              {...register("responsableName")}
              required
            />
            <InputElement
              id="outlined-basic"
              label="Username"
              variant="outlined"
              {...register("username")}
              required
            />
            <InputElement
              id="outlined-basic"
              label="CPF do responsável"
              variant="outlined"
              {...register("responsable_cpf")}
            />
            <InputElement
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
              {...register("email")}
            />
            <InputElement
              id="outlined-basic"
              label="Senha"
              variant="outlined"
              {...register("password")}
            />
          </FormContainer>

          <ButtonsContaier>
            <ButtonNextStep onClick={() => setStep(1)}>Próximo</ButtonNextStep>
          </ButtonsContaier>
        </BoxForm>
      </Container>
    </main>
  );
}
