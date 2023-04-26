import { styled } from "@mui/system";
import {
  Box,
  Container as MuiContainer,
  MenuItem,
  Button,
} from "@mui/material";

export const NavContainer = styled(Box)`
  height: 5rem;
  width: 100vw;

  background: #fcfcfc;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);

  border-bottom: 1px solid grey;
`;

export const NavContent = styled(MuiContainer)`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100%;
`;

export const MenuContent = styled(Box)`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
`;

export const MenuContainer = styled(Box)`
  display: flex;
  width: 100%;

  justify-content: flex-end;
  align-items: center;
`;

export const MenuItems = styled(MenuItem)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 24px;

  color: #000000;

  border-radius: 4px;

  &:hover {
    color: #3776ff;
  }
`;

export const ProfilePicture = styled(Button)`
  width: 52px;
  height: 52px;

  background: #FFFFFF;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);

  border-radius: 150rem;

  font-weight: bold;

  &:hover {
    background: #FFFFFF;
  }
`;

export const HrLine = styled(Box)`
  width: 50px;
  transform: rotate(90deg);

  margin-right: 1rem;
  border: 1px solid #3776ff;
`;
