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

export interface FormData {
  responsableName: string;
  username: string;
  responsable_cpf: string;
  email: string;
  password: string;

  socialReason: string;
  fantasyName: string;
  cnpj: string;

  university: string;
  code: string;
}

interface ContextProviderProps {
  children: ReactNode;
}

interface RegisterContextProps
  extends Omit<UseFormReturn<FormData>, "handleSubmit" | "trigger"> {
  onSubmit: () => void;
  steps: string[];
  setStep(step: number): Promise<void>;
  state: string;
}

interface Snackbar {
  error: boolean;
  message: string;
}

const createRegisterSchema = yup.object().shape({
  responsableName: yup.string().required("Nome é obrigatório"),
  username: yup.string().required("Username é obrigatório"),
  responsable_cpf: yup
    .string()
    .required("CPF é obrigatório"),
  email: yup
    .string()
    .email("Insira um e-mail válido")
    .required("Email obrigatório"),
  password: yup.string(),

  cnpj: yup
    .string()
    .required("CNPJ obrigatório"),
  socialReason: yup.string().required("Razão social é obrigatória"),
  fantasyName: yup.string().required("Nome fantasia é obrigatório"),

  university: yup.string().required("Nome da universidade é obrigatório"),
  code: yup.string().required("Nome da universidade é obrigatório"),
});

const RegisterContext = createContext({} as RegisterContextProps);

export function CreateRegisterContextProvider({
  children,
}: ContextProviderProps): JSX.Element {
  const router = useRouter();

  const { openToast } = useToast();

  const { watch, handleSubmit, trigger, ...form } = useForm<FormData>({
    resolver: yupResolver(createRegisterSchema),
    defaultValues: {
      responsableName: "",
      username: "",
      responsable_cpf: "",
      email: "",
      password: "",

      socialReason: "",
      fantasyName: "",
      cnpj: "",

      university: "",
      code: "",
    },
  });

  const state = watch("university");

  const onSubmit = handleSubmit(async (data: FormData) => {

    console.log(data); 

    try {
      const response = await api.post("/empresa/cadastrar", {
        login: data.username,
        senha: data.password,
        email: data.email,

        nomeResponsavel: data.responsableName,
        cpfResponsavel: data.responsable_cpf,

        razaoSocial: data.socialReason,
        nomeFantasia: data.fantasyName,
        cnpj: data.cnpj,

        universidade: data.cnpj,
        code: data.code
      });

      if (response.data && response.status == 201) {
        router.push("/register/sucess");
      }
    } catch (error: any) {
      const err = error as AxiosError;

      let message = "Error ao realizar cadastro, reveja suas informações";
    }
  });

  const steps = ["Dados  gerais", "Dados da empresa", "Universidade"];

  async function setStep(step: number): Promise<void> {
    if (step === 0) {
      router.push(`/register/step_one/`);
    } else if (step === 1) {
      router.push(`/register/step_two/`);
    } else if (step === 2) {
      router.push(`/register/step_three/`);
    }
  }

  return (
    <RegisterContext.Provider
      value={{
        onSubmit,
        steps,
        setStep,
        state,
        ...form,
        watch,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
}

export const useRegister = () => useContext(RegisterContext);
