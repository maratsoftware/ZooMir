<template>
  <footer class="mt-auto border-t border-zinc-700/80 bg-zinc-900">
    <div class="mx-auto max-w-6xl px-4 py-10">
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <section aria-labelledby="footer-brand">
          <h2 id="footer-brand" class="text-lg font-semibold text-white">
            ZooMir
          </h2>
          <p class="mt-2 text-sm text-zinc-400">
            Корм и лакомства для кошек и собак. Качество и забота о питомцах с 2010 года.
          </p>
        </section>
        <section aria-labelledby="footer-cats">
          <h2 id="footer-cats" class="text-sm font-medium uppercase tracking-wider text-zinc-500">
            Для кошек
          </h2>
          <p class="mt-2 text-sm text-zinc-400">
            Сухие и влажные корма, лакомства, паучи для котят и взрослых кошек.
          </p>
        </section>
        <section aria-labelledby="footer-dogs">
          <h2 id="footer-dogs" class="text-sm font-medium uppercase tracking-wider text-zinc-500">
            Для собак
          </h2>
          <p class="mt-2 text-sm text-zinc-400">
            Корма для щенков и взрослых собак, лакомства и уход за зубами.
          </p>
        </section>
        <section aria-labelledby="footer-contact">
          <h2 id="footer-contact" class="text-sm font-medium uppercase tracking-wider text-zinc-500">
            Контакты
          </h2>
          <p class="mt-2 text-sm text-zinc-400">
            8 (800) 123-45-67<br>
            Ежедневно с 9:00 до 21:00
          </p>
        </section>
      </div>
      <p class="mt-10 border-t border-zinc-700/80 pt-6 text-center text-sm text-zinc-500">
        © {{ new Date().getFullYear() }} ZooMir. Все права защищены.
      </p>
    </div>
  </footer>
</template>
