import { styled } from "@mui/system";
import {
  Box,
  Container as MuiContainer,
  MenuItem,
  Button,
  Grid,
} from "@mui/material";

export const Container = styled(Box)`
  height: 5rem;
  width: 100vw;
`;

export const Content = styled(MuiContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100%;

  margin-top: 2rem;
  gap: 2rem;
`;

export const GridComponent = styled(Grid)``; 