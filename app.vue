<script setup lang="ts">
useSeoMeta({
  title: 'Linksy • Shorten your long links ☺',
  author: 'https://github.com/JefersonLC',
  description:
    'Linksy is an efficient and easy-to-use URL shortening service that streamlines your online experience'
})
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
      <MostVisitedLinks />
    </main>
  </div>
</template>

<style>
html,
section {
  scrollbar-width: none;
}
</style>
