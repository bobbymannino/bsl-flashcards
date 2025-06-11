<script lang="ts">
  import { browser } from "$app/environment";
  import Button from "$lib/components/ui/button.svelte";
  import Container from "$lib/components/ui/container.svelte";
  import { generateRandomDayOfWeek, generateRandomMonth } from "$lib/generators/dates";
  import { generateRandomGbp, generateRandomInt } from "$lib/generators/numbers";
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
  let isGbpPoundEnabled = $state(true);
  let isGbpPenceEnabled = $state(true);
  let isGbpBothEnabled = $state(true);

  let doneOnboarding = persistentState("done-onboarding", false);

  function disableAllGenerators() {
    isIntsEnabled = false;
    isDaysOfWeekEnabled = false;
    isMonthsEnabled = false;
    isGbpPoundEnabled = false;
    isGbpPenceEnabled = false;
    isGbpBothEnabled = false;
  }

  function generate() {
    let generators = [];

    if (isIntsEnabled) generators.push(generateRandomInt);
    if (isDaysOfWeekEnabled) generators.push(generateRandomDayOfWeek);
    if (isMonthsEnabled) generators.push(generateRandomMonth);
    if (isGbpBothEnabled) generators.push(generateRandomGbp);
    if (isGbpPoundEnabled) generators.push([generateRandomGbp, "pound"]);
    if (isGbpPenceEnabled) generators.push([generateRandomGbp, "pence"]);

    const generator = getRandomElement(generators);
    if (!generator) {
      alert("No value generator");
      return;
    }

    if (Array.isArray(generator)) value = String(generator[0](...generator.slice(1)));
    else value = String(generator());
  }
</script>

<Meta />

{#if browser && !doneOnboarding.value}
  <Onboarding close={() => (doneOnboarding.value = true)} />
{/if}

<Container class="grid gap-3 p-6">
  <div class="flex min-h-[50vh] items-center justify-center md:min-h-60">
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
      title="Toggle numbers generator"
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
      title="Toggle days of week generator"
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
      title="Toggle months generator"
    >
      Months
    </Button>
    <Button
      ondblclick={() => {
        disableAllGenerators();
        isGbpBothEnabled = true;
      }}
      onclick={() => (isGbpBothEnabled = !isGbpBothEnabled)}
      class={isGbpBothEnabled ? null : "opacity-50"}
      title="Toggle currency (both) generator"
    >
      Currency (£25.63)
    </Button>
    <Button
      ondblclick={() => {
        disableAllGenerators();
        isGbpPoundEnabled = true;
      }}
      onclick={() => (isGbpPoundEnabled = !isGbpPoundEnabled)}
      class={isGbpPoundEnabled ? null : "opacity-50"}
      title="Toggle currency (pound) generator"
    >
      Currency (£25)
    </Button>
    <Button
      ondblclick={() => {
        disableAllGenerators();
        isGbpPenceEnabled = true;
      }}
      onclick={() => (isGbpPenceEnabled = !isGbpPenceEnabled)}
      class={isGbpPenceEnabled ? null : "opacity-50"}
      title="Toggle currency (pence) generator"
    >
      Currency (63p)
    </Button>
  </div>
</Container>

{#if doneOnboarding.value}
  <Button
    onclick={() => (doneOnboarding.value = false)}
    class="fixed right-2 bottom-2"
    title="Show welcome screen"
  >
    <QuestionIcon />
  </Button>
{/if}
