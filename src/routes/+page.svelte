<script lang="ts">
  import { browser } from "$app/environment";
  import Button from "$lib/components/ui/button.svelte";
  import Container from "$lib/components/ui/container.svelte";
  import { generateRandomDayOfWeek, generateRandomMonth } from "$lib/generators/dates";
  import { generateRandomInt } from "$lib/generators/numbers";
  import QuestionIcon from "$lib/icons/question-icon.svelte";
  import { persistentState } from "$lib/stores.svelte";
  import { getRandomElement } from "$lib/utils";
  import { scale } from "svelte/transition";
  import Meta from "./meta.svelte";
  import Onboarding from "./onboarding.svelte";

  let value = $state("BSL");
  let isIntsEnabled = $state(true);
  let isDaysOfWeekEnabled = $state(true);
  let isMonthsEnabled = $state(true);

  let doneOnboarding = persistentState("done-onboarding", false);

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

{#if browser && !doneOnboarding.value}
  <Onboarding close={() => (doneOnboarding.value = true)} />
{/if}

<Container class="grid gap-3 p-6">
  <div class="flex items-center justify-center">
    {#key value}
      <button in:scale title="Generate new flashcard" onclick={generate}>
        <h1 class="tabular-nums">
          {value}
        </h1>
      </button>
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

{#if doneOnboarding.value}
  <Button onclick={() => (doneOnboarding.value = false)} class="fixed right-2 bottom-2">
    <QuestionIcon />
  </Button>
{/if}
