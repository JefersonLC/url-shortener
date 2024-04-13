<script setup lang="ts">
import { Toaster, toast } from 'vue-sonner'
import type { Database } from '../types/supabase'

const link = ref('')
const error = ref(false)

const supabase = useSupabaseClient<Database>()
const config = useRuntimeConfig()

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

const createShortLink = () => {
  error.value = false

  if (!link.value) {
    error.value = true
    toast.error('Required field! Put a valid link')
    return
  }

  if (!URL.canParse(link.value)) {
    error.value = true
    toast.error('Failed to construct!')
    return
  }

  if (!error.value) {
    const randomId = getRandomID()

    toast.promise(getShortLink({ id: randomId, url: link.value }), {
      loading: 'Processing...',
      success: ({ data }) => {
        const shortedLink = config.public.domainName + 'r/' + data?.id

        navigator.clipboard.writeText(shortedLink)

        return `Shortened link successfully! Copied to clipboard. [${shortedLink}]`
      },
      error: () => 'Unexpected error :('
    })
  }
}
</script>

<template>
  <Toaster position="top-center" theme="dark" richColors />
  <div
    class="group inline-flex gap-1 w-[300px] sm:w-[400px] md:w-[550px] bg-slate-800 rounded-full p-[2px] border-[3px] border-slate-600 text-slate-400 transition-colors delay-100 has-[:focus]:border-purple-600"
  >
    <span class="inline-block p-2">
      <LinkIcon />
    </span>
    <input
      v-model="link"
      autocomplete="off"
      class="placeholder:text-slate-400 bg-slate-800 p-1 flex-grow outline-none text-sm sm:text-base"
      type="text"
      name="url"
      id="url"
      placeholder="Enter the link here"
    />
    <button
      class="text-sm rounded-full px-3 bg-purple-600 hover:bg-purple-700 transition-colors delay-100 sm:text-base md:py-3 md:px-5"
      @click="createShortLink()"
    >
      <span class="text-white font-bold">Shorten Now!</span>
    </button>
  </div>
</template>
