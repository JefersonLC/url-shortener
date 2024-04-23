<script setup lang="ts">
const config = useRuntimeConfig()
const { getLinks } = useSupabase()

const { data: links } = await getLinks()
</script>

<template>
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
</template>
