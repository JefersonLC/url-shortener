import { createContext } from 'react';
import { supabase } from '../supabase';
import { NewUrl, ProviderProps } from './UrlContext.d';

const newUrl = async (values: NewUrl) => {
  const response = await supabase.from('short-links').insert(values);
  return response;
};

export const UrlContext = createContext({ newUrl });

export default function UrlContextProvider(props: ProviderProps) {
  return (
    <UrlContext.Provider value={{ newUrl }}>
      {props.children}
    </UrlContext.Provider>
  );
}
