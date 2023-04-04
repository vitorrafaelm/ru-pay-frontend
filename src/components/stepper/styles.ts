import { styled } from "@mui/system";
import {
  Stepper as MuiStepper,
  Step as MuiStep,
  StepLabel,
  StepConnector,
  Box,
} from "@mui/material";
import { withStyles } from "@mui/material";

interface ContainerProps {
  newWidth: number; 
}

export const Container = styled(Box)<ContainerProps>`
  width: ${({ newWidth }) => newWidth}rem;
  margin-bottom: 1rem;
`;

export const StapperContainer = styled(MuiStepper)``;

export const Step = styled(MuiStep)``;

export const Label = styled(StepLabel)`
  /* .MuiStepLabel-labelContainer {
    .Mui-completed {
      background-image: linear-gradient(
        202.17deg,
        #ff00d6 8.58%,
        #ff4d00 91.42%
      );

      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
    }

    .Mui-active {
      background-image: linear-gradient(
        202.17deg,
        #ff00d6 8.58%,
        #ff4d00 91.42%
      );

      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
    }
  }

  .MuiStepLabel-iconContainer {
    margin-top: 0.35rem;

    cursor: pointer;
    svg {
      background: #ccc;
      width: 12px;
      height: 12px;
      border-radius: 16px;
    }

    circle {
      display: none;
    }

    text {
      display: none;
    }

    .Mui-active {
      background: linear-gradient(202.17deg, #ff00d6 8.58%, #ff4d00 91.42%);
      height: 12px;
      border-radius: 16px;
      margin: 0;
    }

    .Mui-completed {
      path {
        display: none;
      }

      background: linear-gradient(202.17deg, #ff00d6 8.58%, #ff4d00 91.42%);
      height: 12px;
      border-radius: 16px;
      margin: 0;
    }
  } */
`;

export const QontoConnector = styled(StepConnector)``;