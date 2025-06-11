<script lang="ts">
  import Button from "$lib/components/ui/button.svelte";
  import Container from "$lib/components/ui/container.svelte";
  import { generateRandomDayOfWeek, generateRandomMonth } from "$lib/generators/dates";
  import { generateRandomInt } from "$lib/generators/numbers";
  import { getRandomElement } from "$lib/utils";
  import { scale } from "svelte/transition";
  import Meta from "./meta.svelte";

  let value = $state("BSL");
  let isIntsEnabled = $state(true);
  let isDaysOfWeekEnabled = $state(true);
  let isMonthsEnabled = $state(true);

  function disableAllGenerators() {
    isIntsEnabled = false;
    isDaysOfWeekEnabled = false;
    isMonthsEnabled = false;
  }

  function generate() {
    let generators = [];

    if (isIntsEnabled) generators.push(generateRandomInt);
    if (isDaysOfWeekEnabled) generators.push(generateRandomDayOfWeek);
    if (isMonthsEnabled) generators.push(generateRandomMonth);

    const generator = getRandomElement(generators);
    if (!generator) {
      alert("No value generator");
      return;
    }

    value = String(generator());
  }
</script>

<Meta />

<Container class="grid gap-3 p-6">
  <div class="flex items-center justify-center">
    {#key value}
      <button
        in:scale
        onclick={generate}
        class="text-primary-500 text-[5rem] font-black tabular-nums">{value}</button
      >
    {/key}
  </div>
  <div class="flex flex-wrap gap-2">
    <Button
      ondblclick={() => {
        disableAllGenerators();
        isIntsEnabled = true;
      }}
      onclick={() => (isIntsEnabled = !isIntsEnabled)}
      class={isIntsEnabled ? null : "opacity-50"}
    >
      Numbers (0-100)
    </Button>
    <Button
      ondblclick={() => {
        disableAllGenerators();
        isDaysOfWeekEnabled = true;
      }}
      onclick={() => (isDaysOfWeekEnabled = !isDaysOfWeekEnabled)}
      class={isDaysOfWeekEnabled ? null : "opacity-50"}
    >
      Days of Week
    </Button>
    <Button
      ondblclick={() => {
        disableAllGenerators();
        isMonthsEnabled = true;
      }}
      onclick={() => (isMonthsEnabled = !isMonthsEnabled)}
      class={isMonthsEnabled ? null : "opacity-50"}
    >
      Months
    </Button>
  </div>
</Container>
