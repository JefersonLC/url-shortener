import { PostgrestSingleResponse } from '@supabase/supabase-js';

export interface NewUrl {
  id: string;
  url: string;
}
export interface ContextValues {
  newUrl: (values: NewUrl) => Promise<PostgrestSingleResponse<null>>;
}

export interface ProviderProps {
  children: ReactNode;
}
