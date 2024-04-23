import { useSupabaseClient } from '#imports'
import { type Database } from '~/types/supabase'

export default function () {
  const supabase = useSupabaseClient<Database>()

  const getLinks = async () => {
    return await supabase.from('short-links').select('*').order('visits', {
      ascending: false
    })
  }

  const getShortLink = async ({ id, url }: { id: string; url: string }) => {
    const res = await supabase.from('short-links').insert({
      id,
      url
    })

    if (res.status === 201) {
      const shortedLink = await supabase
        .from('short-links')
        .select('*')
        .eq('id', id)
        .limit(1)
        .single()

      return shortedLink
    }

    throw new Error('Unexpected error :(')
  }

  return { getLinks, getShortLink }
}
