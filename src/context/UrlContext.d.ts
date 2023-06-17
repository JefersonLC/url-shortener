import { PostgrestSingleResponse } from '@supabase/supabase-js';

export interface NewUrl {
  id: string;
  url: string;
}

export interface UrlData {
  id: string;
  url: string;
  created_at: string;
}

export interface ContextValues {
  newUrl: (values: NewUrl) => Promise<PostgrestSingleResponse<null>>;
  handleLoad: (state: boolean) => void;
  getUrl: <Interface>(id: string) => Promise<{
    status: number;
    data: Interface;
  }>;
  handleUrl: (newUrl: string) => void;
  url: string;
  isLoading: boolean;
}

export interface ProviderProps {
  children: ReactNode;
}
