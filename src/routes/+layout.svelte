<script lang="ts">
  import "../app.css";
  import Analytics from "./analytics.svelte";

  let { children } = $props();
</script>

<Analytics />
{@render children()}
