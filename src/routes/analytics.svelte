<script lang="ts">
  import { dev } from "$app/environment";
</script>

<svelte:head>
  {#if !dev}
    <script
      defer
      src="https://analytics.bobman.dev/script.js"
      data-website-id="dafe9842-de3d-4488-b064-9a630836b1da"
    ></script>
  {/if}
</svelte:head>
