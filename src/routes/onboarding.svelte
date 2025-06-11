<script lang="ts">
  import { scale } from "svelte/transition";
  import Button from "$lib/components/ui/button.svelte";

  const points = [
    "Click on each generator at the bottom to enable or disable it",
    "Double click on a generator to enable only that one",
    "Click on the flashcard at the top to generate a new word",
  ];

  type Props = { close: () => void };

  let { close }: Props = $props();
</script>

<div
  transition:scale={{ start: 0.95 }}
  class="from-primary-100 to-primary-100 fixed inset-0 bg-gradient-to-br via-white"
>
  <div class="container mx-auto flex h-full flex-col justify-between p-6 md:h-auto lg:gap-12">
    <h1 class="text-center">Welcome to BSL Flashcards</h1>

    <ul class="list-inside list-disc space-y-1">
      {#each points as point (point)}
        <li class="text-primary-900 text-lg font-semibold">
          <span>{point}</span>
        </li>
      {/each}
    </ul>

    <Button class="justify-center text-lg font-bold" onclick={close}>Start</Button>
  </div>
</div>
