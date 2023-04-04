import { LogoutNavbar } from "@/components/logoutNavbar";
import { useLogin } from "@/contexts/login";
import {
  LoginMainContainer,
  LoginBoxContainer,
  LoginBox,
  LoginTitle,
  InputItem,
  ButtonLogin,
} from "../../styles/pageStyles/login/styles";

export default function Login(): JSX.Element {
  const { register, onSubmit } = useLogin();

  return (
    <LoginMainContainer as="main">
      <LogoutNavbar />

      <LoginBoxContainer as="form" onSubmit={onSubmit}>
        <LoginBox>
          <LoginTitle>Entre no sistema</LoginTitle>

          <InputItem 
            id="outlined-basic" 
            label="E-mail" 
            variant="outlined" 
            {...register("email")}
          />
          <InputItem 
            id="outlined-basic" 
            label="Senha" 
            variant="outlined" 
            {...register("password")}
           />

          <ButtonLogin type="submit" >Entrar</ButtonLogin>
        </LoginBox>
      </LoginBoxContainer>
    </LoginMainContainer>
  );
}
