import { stepClasses } from "@mui/material";
import {
  Container,
  StapperContainer,
  Step,
  Label,
  QontoConnector,
  
} from "./styles";

interface StepperProps {
  current: number;
  steps: string[];
  setStep: (index: number) => void;
  width: number;
}

export function Stepper({
  current,
  steps,
  setStep,
  width,
}: StepperProps): JSX.Element {
  return (
    <Container newWidth={width}>
      <StapperContainer
        alternativeLabel
        activeStep={current}
        connector={<QontoConnector />}
      >
        {steps.map((step: string, index: number) => (
          <Step key={index} onClick={() => setStep(index)}>
            <Label>{step}</Label>
          </Step>
        ))}
      </StapperContainer>
    </Container>
  );
}