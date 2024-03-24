import { serverSupabaseClient } from '#supabase/server'
import { Database } from '~/types/supabase'

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event)

  const id = getRouterParam(event, 'id')

  if (!id) {
    return await sendRedirect(event, 'http://localhost:3000', 200)
  }

  const { data } = await supabase
    .from('short-links')
    .select('*')
    .eq('id', id)
    .limit(1)
    .single()

  return data
    ? await sendRedirect(event, data.url, 200)
    : await sendRedirect(event, 'http://localhost:3000', 200)
})
