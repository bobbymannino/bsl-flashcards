<script lang="ts">
  type Props = {
    /** @default "BSL Flashcards" */
    title?: string;
  };

  let { title = "BSL Flashcards" }: Props = $props();
</script>

<svelte:head>
  <title>{title}</title>
  <meta property="og:title" content={title} />
  <meta name="twitter:title" content={title} />
</svelte:head>
