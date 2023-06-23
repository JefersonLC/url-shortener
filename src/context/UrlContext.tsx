/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { createContext, useState } from 'react'
import { supabase } from '../supabase'
import { ContextValues, NewUrl, ProviderProps } from './UrlContext.d'

export const UrlContext = createContext<ContextValues>(null!)

export default function UrlContextProvider(props: ProviderProps) {
  const [url, setUrl] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  async function getUrl<Interface>(id: string) {
    const { data, status } = await supabase
      .from('short-links')
      .select()
      .eq('id', id)
      .maybeSingle()
    return { status, data: data as Interface | null }
  }

  async function newUrl(values: NewUrl) {
    const response = await supabase.from('short-links').insert(values)
    return response
  }

  function loadHandler(state: boolean) {
    setIsLoading(state)
  }

  function urlHandler(newUrl: string) {
    setUrl(newUrl)
  }

  function errorHandler() {
    setError(true)

    setTimeout(() => {
      setError(false)
    }, 4500)
  }

  return (
    <UrlContext.Provider
      value={{
        newUrl,
        loadHandler,
        getUrl,
        url,
        isLoading,
        urlHandler,
        errorHandler,
        error,
      }}
    >
      {props.children}
    </UrlContext.Provider>
  )
}
