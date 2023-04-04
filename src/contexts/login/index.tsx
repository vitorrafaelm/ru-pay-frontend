import { useRouter } from "next/router";
import * as yup from "yup";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { api } from "../../services/api";;
import { useToast } from "../snackbar";
import { yupResolver } from "@hookform/resolvers/yup";
import { useValidationsBR } from "validations-br";
import { AxiosError } from "axios";
import { setCookie } from "nookies";

export interface LoginFormData {
  email: string;
  password: string;
}

interface ContextProviderProps {
  children: ReactNode;
}

interface LoginContextProps
  extends Omit<UseFormReturn<LoginFormData>, "handleSubmit" | "trigger"> {
  onSubmit: () => void;
}

interface Snackbar {
  error: boolean;
  message: string;
}

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Insira um e-mail válido")
    .required("Email obrigatório"),
  password: yup.string(),
});

const LoginContext = createContext({} as LoginContextProps);

export function LoginContextProvider({
  children,
}: ContextProviderProps): JSX.Element {
  const router = useRouter();

  const { openToast } = useToast();

  const { watch, handleSubmit, trigger, ...form } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(async (data: LoginFormData) => {

    console.log(data); 

    // try {
    //   const response = await api.post("", {
        
    //   });

    //   if (response.data && response.status == 201) {
    //     openToast({
    //       severity: "success",
    //       message: "Cadastro finalizado com sucesso!",
    //     });

    //     const { token } = response.data;

    //     setCookie(undefined, "token.auth", token, {
    //       maxAge: 60 * 60 * 1, // 24 horas
    //       path: "/",
    //     });

    //     api.defaults.headers["Authorization"] = `Bearer ${token}`;

    //     router.push("/home");
    //   }
    // } catch (error: any) {
    //   const err = error as AxiosError;

    //   let message = "Error ao realizar cadastro, reveja suas informações";

    //   openToast({
    //     severity: "error",
    //     message,
    //   });
    // }
  });

  return (
    <LoginContext.Provider
      value={{
        onSubmit,
        ...form,
        watch
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export const useLogin = () => useContext(LoginContext);
