<script>
  import Footer from '$components/common/footer.svelte'
  import Header from '$components/common/header.svelte'
  import { Toaster } from 'svelte-french-toast'
  import '../app.css'
  import og from '../og'

  const metas = Object.entries(og)
</script>

<svelte:head>
  {#each metas as [key, value]}
    <meta property={key} content={value} />
  {/each}
</svelte:head>

<Toaster />

<Header />

<main
  class="w-full max-w-3xl mx-auto flex flex-col gap-y-16 flex-1 pt-[55px] pb-[70px]"
>
  <slot />
</main>

<Footer />
