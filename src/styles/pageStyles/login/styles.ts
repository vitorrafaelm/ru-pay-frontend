import { styled } from "@mui/system";
import {
  Box,
  Typography,
  TextField,
  Button
} from "@mui/material";

export const LoginMainContainer = styled(Box)`
  width: 100vw;
`; 

export const LoginBoxContainer  = styled(Box)`
  display: flex;
  justify-content: center;
`; 

export const LoginBox  = styled(Box)`
   
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;

    margin-top: 8rem;
`; 

export const LoginTitle = styled(Typography)`
  width: 190px;
  height: 29px;

  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;

  margin-bottom: 68px;


  color: #000000;
`; 

export const InputItem  = styled(TextField)`
  width: 350px;
  height: 56px;

  background: #FFFFFF;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);

  margin-bottom: 2rem;
`; 

export const ButtonLogin = styled(Button)`
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
