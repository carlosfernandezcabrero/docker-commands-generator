<script>
  import '../app.css'
  import Header from '$components/common/header.svelte'
  import Footer from '$components/common/footer.svelte'
  import { Toaster } from 'svelte-french-toast'
</script>

<svelte:head>
  <title>Docker Commands Generator</title>
</svelte:head>

<Toaster />

<Header />

<main
  class="w-full max-w-3xl mx-auto flex flex-col gap-y-16 flex-1 pt-[55px] pb-[70px]"
>
  <slot />
</main>

<Footer />
