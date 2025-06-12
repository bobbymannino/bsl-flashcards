<script lang="ts">
  import Button from "$lib/components/ui/button.svelte";
  import BrushIcon from "$lib/icons/brush-icon.svelte";
  import { persistentState } from "$lib/stores.svelte";
  import { onMount } from "svelte";
  import "../app.css";
  import Analytics from "./analytics.svelte";

  let { children } = $props();

  let theme = persistentState("theme", "primary");

  const themes = ["primary", "blue", "green", "purple", "gray"];
  let themeIndex = 0;

  function shuffleTheme() {
    themeIndex += 1;
    if (themeIndex >= themes.length) themeIndex = 0;
    theme.value = themes[themeIndex];
    document.body.dataset.theme = theme.value;
  }

  onMount(() => {
    document.body.dataset.theme = theme.value;
  });
</script>

<Analytics />
<main>
  {@render children()}

  <Button title="Shuffle theme" onclick={shuffleTheme} class="fixed bottom-2 left-2">
    <BrushIcon />
  </Button>
</main>
