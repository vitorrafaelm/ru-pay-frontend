import { styled } from "@mui/system";
import {
  Box,
  Typography,
  TextField,
  Button
} from "@mui/material";

export const Container = styled(Box)`
  display: flex;
  justify-content: center;

  width: 100vw;
`; 

export const BoxForm = styled(Box)`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`; 

export const FormTitle = styled(Typography)`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;

  color: #000000;

  margin-top: 6rem;
`; 

export const StepsContainer = styled(Box)`
  margin-top: 2.5rem;

`; 

export const FormContainer = styled(Box)`
  display: flex;
  flex-direction: column;

  margin-top: 4rem;
`; 

export const InputElement = styled(TextField)`
  width: 350px;
  height: 56px;

  background: #FFFFFF;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);

  margin-bottom: 2rem;
`; 

export const ButtonsContaier = styled(Box)`
  display: flex;
  gap: 1rem;
`; 

export const ButtonNextStep = styled(Button)`
  width: 151px;
  height: 46px;

  background: #3776FF;
  border-radius: 3px;

  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  color: #FFFFFF;

  &:hover {
    background: #3776FF;
  }
`; 

export const ButtonPreviousStep = styled(Button)`
  width: 151px;
  height: 46px;

  background: #3776FF;
  border-radius: 3px;

  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  color: #FFFFFF;

  &:hover {
    background: #3776FF;
  }
`; 

