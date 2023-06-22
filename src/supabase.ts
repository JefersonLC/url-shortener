import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hcmkhlyxzreglnvuykao.supabase.co'
const supabaseKey: string = import.meta.env.VITE_SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)
