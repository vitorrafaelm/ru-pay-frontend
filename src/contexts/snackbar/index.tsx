import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface ContextProviderProps {
  children: ReactNode;
}

interface ToastProps {
  message: string;
  severity: "error" | "warning" | "info" | "success";
  additionalComponent?: ReactNode;
  shouldClose?: boolean;
  middle?: boolean;
}

interface SnackbarContextProps {
  isOpen: boolean;
  toast?: ToastProps;
  handleClose: () => void;
  openToast: (data: ToastProps) => void;
}

const SnackbarContext = createContext({} as SnackbarContextProps);

export function SnackbarContextProvider({
  children,
}: ContextProviderProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState<ToastProps>();

  const openToast = useCallback(
    ({ shouldClose = true, middle = false, ...data }: ToastProps) => {
      setToast({ shouldClose, middle, ...data });
      setIsOpen(true);
    },
    []
  );

  const handleClose = useCallback(() => setIsOpen(false), []);

  return (
    <SnackbarContext.Provider
      value={{
        isOpen,
        toast,
        openToast,
        handleClose,
      }}
    >
      {children}
    </SnackbarContext.Provider>
  );
}

export const useToast = () => useContext(SnackbarContext);