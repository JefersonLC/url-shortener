/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { createContext, useState } from 'react';
import { supabase } from '../supabase';
import { ContextValues, NewUrl, ProviderProps } from './UrlContext.d';

export const UrlContext = createContext<ContextValues>(null!);

export default function UrlContextProvider(props: ProviderProps) {
  const [url, setUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function getUrl<Interface>(id: string) {
    const { data, status } = await supabase
      .from('short-links')
      .select()
      .eq('id', id)
      .maybeSingle();
    return { status, data: data as Interface };
  }

  async function newUrl(values: NewUrl) {
    const response = await supabase.from('short-links').insert(values);
    return response;
  }

  function handleLoad(state: boolean) {
    setIsLoading(state);
  }

  function handleUrl(newUrl: string) {
    setUrl(newUrl);
  }

  return (
    <UrlContext.Provider
      value={{ newUrl, handleLoad, getUrl, url, isLoading, handleUrl }}
    >
      {props.children}
    </UrlContext.Provider>
  );
}
