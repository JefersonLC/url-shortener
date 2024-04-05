import { serverSupabaseClient } from '#supabase/server'
import { Database } from '~/types/supabase'

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event)
  const config = useRuntimeConfig()

  const id = getRouterParam(event, 'id')
  const domain = config.public.domainName

  if (!id) {
    return await sendRedirect(event, domain, 200)
  }

  const { data } = await supabase
    .from('short-links')
    .select('*')
    .eq('id', id)
    .limit(1)
    .single()

  const addVisit = async (data: {
    created_at: string
    id: string
    url: string
    visits: number
  }) => {
    await supabase
      .from('short-links')
      .update({
        visits: data.visits + 1
      })
      .eq('id', id)

    await sendRedirect(event, data.url, 200)
  }
  return data ? await addVisit(data) : await sendRedirect(event, domain, 200)
})
