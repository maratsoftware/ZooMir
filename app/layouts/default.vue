<template>
  <div class="flex min-h-screen flex-col bg-slate-900 text-slate-100">
    <WidgetHeader />
    <main class="mx-auto w-full max-w-6xl flex-1 px-4 py-6">
      <slot />
    </main>
    <WidgetFooter />
  </div>
</template>
