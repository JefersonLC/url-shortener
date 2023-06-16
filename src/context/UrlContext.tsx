/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { createContext } from 'react';
import { supabase } from '../supabase';
import { ContextValues, NewUrl, ProviderProps } from './UrlContext.d';

export const UrlContext = createContext<ContextValues>(null!);

export default function UrlContextProvider(props: ProviderProps) {
  async function newUrl(values: NewUrl) {
    const response = await supabase.from('short-links').insert(values);
    return response;
  }

  return (
    <UrlContext.Provider value={{ newUrl }}>
      {props.children}
    </UrlContext.Provider>
  );
}
