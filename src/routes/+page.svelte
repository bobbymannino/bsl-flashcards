<script lang="ts">
  import Button from "$lib/components/ui/button.svelte";
  import Container from "$lib/components/ui/container.svelte";
  import { generateRandomInt } from "$lib/generators/numbers";
  import RefreshIcon from "$lib/icons/refresh-icon.svelte";
  import { getRandomElement } from "$lib/utils";

  let value = $state("BSL");
  let isIntsEnabled = $state(true);

  function generate() {
    let generators = [];

    if (isIntsEnabled) generators.push(generateRandomInt);

    const generator = getRandomElement(generators);
    console.log("1", generator);
    if (!generator) {
      alert("No value generator");
      return;
    }

    value = String(generator());
  }
</script>

<Container class="grid gap-3 p-6">
  <div class="flex items-center justify-center">
    <span class="text-primary-500 text-[5rem] font-black tabular-nums">{value}</span>
  </div>
  <div class="flex justify-center">
    <Button onclick={generate}>
      <RefreshIcon class="transition-transform duration-500 group-hover/button:-rotate-360" />
    </Button>
  </div>
  <div class="flex flex-wrap gap-1">
    <Button
      onclick={() => (isIntsEnabled = !isIntsEnabled)}
      class={isIntsEnabled ? null : "opacity-50"}
    >
      Numbers (0-100)
    </Button>
  </div>
</Container>
