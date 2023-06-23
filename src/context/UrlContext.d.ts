import { PostgrestSingleResponse } from '@supabase/supabase-js'

export interface NewUrl {
  id: string
  url: string
}

export interface UrlData {
  id: string
  url: string
  created_at: string
}

export interface ContextValues {
  newUrl: (values: NewUrl) => Promise<PostgrestSingleResponse<null>>
  loadHandler: (state: boolean) => void
  getUrl: <Interface>(id: string) => Promise<{
    status: number
    data: Interface | null
  }>
  urlHandler: (newUrl: string) => void
  url: string
  isLoading: boolean
  errorHandler: () => void
  error: boolean
}

export interface ProviderProps {
  children: ReactNode
}
