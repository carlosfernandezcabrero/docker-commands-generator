<script>
  import '../app.css'
  import Header from '$components/header.svelte'
  import Footer from '$components/footer.svelte'
</script>

<svelte:head>
  <title>Docker Commands Generator</title>
</svelte:head>

<Header />

<main
  class="px-6 w-full max-w-3xl mx-auto flex flex-col gap-y-16 pb-24 mt-12 flex-1"
>
  <slot />
</main>

<Footer />
