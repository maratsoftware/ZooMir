<template>
  <div class="flex min-h-screen flex-col bg-slate-950 text-slate-100">
    <WidgetHeader />
    <main id="main-content" class="mx-auto w-full max-w-6xl flex-1 px-4 py-8" role="main" aria-label="Основное содержимое">
      <slot />
    </main>
    <WidgetFooter />
  </div>
</template>
