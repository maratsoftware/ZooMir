<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <NuxtRouteAnnouncer />
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'ru' },
  titleTemplate: (title) => (title ? `${title}` : 'ZooMir — Корм для питомцев'),
  meta: [
    {
      name: 'description',
      content: 'Магазин кормов и лакомств для кошек и собак',
    },
  ],
})
</script>
