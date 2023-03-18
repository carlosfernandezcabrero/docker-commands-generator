<script>
  import '../app.css'
  import Header from '$components/header.svelte'
  import Footer from '$components/footer.svelte'
</script>

<svelte:head>
  <title>Docker Commands Generator</title>
</svelte:head>

<Header />
<slot />
<Footer />
