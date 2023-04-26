import { styled } from "@mui/system";
import {
  Box,
  Container as MuiContainer,
  MenuItem,
  Button,
  TextField,
} from "@mui/material";

export const InputContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0rem 1rem;

  width: 100%;
  height: 50px;
  background: #FFFFFF;
  border: 1px solid #3776FF;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`; 

export const Input = styled(TextField)`
  display: flex;  
  justify-content: center;
  width: 100%;
  height: 100%;

  border: none;
`; 