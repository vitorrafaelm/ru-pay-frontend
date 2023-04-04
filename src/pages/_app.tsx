import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { CreateRegisterContextProvider } from '../contexts/register/index'; 
import { LoginContextProvider } from '../contexts/login/index'; 

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoginContextProvider>
      <CreateRegisterContextProvider>
        <Component {...pageProps} />
      </CreateRegisterContextProvider>
    </LoginContextProvider>
    
  );
}
