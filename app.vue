<script setup lang="ts">
//@ts-ignore
import type { Database } from './types/supabase'

useSeoMeta({
  title: 'Linksy • Shorten your long links ☺',
  author: 'https://github.com/JefersonLC',
  description:
    'Linksy is an efficient and easy-to-use URL shortening service that streamlines your online experience'
})

const supabase = useSupabaseClient<Database>()
const config = useRuntimeConfig()

async function getLinks() {
  return await supabase.from('short-links').select('*').order('visits', {
    ascending: false
  })
}

const { data: links } = await getLinks()
</script>

<template>
  <div class="min-h-screen bg-slate-900 select-none">
    <header class="p-8 flex items-center">
      <h1
        class="text-2xl md:text-3xl inline font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent"
      >
        Linksy
      </h1>
    </header>
    <main class="w-11/12 md:w-10/12 m-auto py-14 md:py-20">
      <section class="text-center">
        <h3 class="text-4xl md:text-5xl inline font-bold">
          <span
            class="bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent"
          >
            Shorten
          </span>
          <span class="text-red-500"> Your Long </span>
          <span
            class="bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent"
          >
            Links :)
          </span>
        </h3>
        <div class="mt-6 text-center">
          <p
            class="w-3/4 md:w-3/5 lg:w-[46.5%] inline-block text-slate-400 text-sm md:text-base"
          >
            Linksy is an efficient and easy-to-use URL shortening service that
            streamlines your online experience
          </p>
        </div>
      </section>
      <section
        class="mt-8 text-center flex flex-col justify-center items-center gap-4"
      >
        <LinkInput />
      </section>
      <section
        v-if="links && links.length"
        class="mt-10 overflow-x-scroll lg:overflow-hidden"
      >
        <table
          class="rounded-xl overflow-hidden text-xs border-separate border-spacing-y-1 text-slate-400 mx-auto md:text-sm"
        >
          <thead class="bg-slate-800 text-left">
            <tr class="text-slate-300 [&>th]:p-2 md:[&>th]:p-4">
              <th>Short Link</th>
              <th>Original Link</th>
              <th>Clicks</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody class="bg-slate-950 bg-opacity-20 text-left select-text">
            <tr
              v-for="link of links"
              class="[&>th]:p-2 [&>th]:font-medium md:[&>th]:p-4"
            >
              <th class="flex gap-2 items-center justify-between md:gap-3">
                {{ config.public.domainName + 'r/' + link.id }}
                <button
                  class="bg-slate-950 p-1 rounded-full text-slate-300 ring-1 ring-slate-300 hover:ring-slate-50 hover:text-slate-50"
                  @click="
                    copyToClipboard(config.public.domainName + 'r/' + link.id)
                  "
                >
                  <CopyIcon />
                </button>
              </th>
              <th>{{ link.url }}</th>
              <th>{{ link.visits }}</th>
              <th>{{ formatDate(link.created_at) }}</th>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  </div>
</template>
