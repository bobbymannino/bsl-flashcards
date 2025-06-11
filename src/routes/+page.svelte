<script lang="ts">
  import { browser } from "$app/environment";
  import Button from "$lib/components/ui/button.svelte";
  import Container from "$lib/components/ui/container.svelte";
  import { generateRandomDayOfWeek, generateRandomMonth } from "$lib/generators/dates";
  import { generateRandomName } from "$lib/generators/names";
  import { generateRandomGbp, generateRandomInt } from "$lib/generators/numbers";
  import QuestionIcon from "$lib/icons/question-icon.svelte";
  import { persistentState } from "$lib/stores.svelte";
  import { getRandomElement } from "$lib/utils";
  import { fade, scale } from "svelte/transition";
  import Meta from "./meta.svelte";
  import Onboarding from "./onboarding.svelte";
  import Timer from "./timer.svelte";

  type GeneratorKey = keyof typeof generators;

  let value = $state("BSL");
  let generators = $state({
    ints: generateRandomInt,
    daysOfWeek: generateRandomDayOfWeek,
    months: generateRandomMonth,
    gbpBoth: generateRandomGbp,
    gbpPound: [generateRandomGbp, "pound"],
    gbpPence: [generateRandomGbp, "pence"],
    names: generateRandomName,
  });
  let enabledGenerators = $state<GeneratorKey[]>([
    "ints",
    "daysOfWeek",
    "gbpBoth",
    "gbpPence",
    "gbpPound",
    "months",
    "names",
  ]);

  type GeneratorButton = [GeneratorKey, string];
  const generatorButtons: GeneratorButton[] = [
    ["ints", "Numbers (0-100)"],
    ["months", "Months"],
    ["daysOfWeek", "Days of the week"],
    ["gbpBoth", "GBP (£25.95)"],
    ["gbpPound", "GBP (£25)"],
    ["gbpPence", "GBP (95p)"],
    ["names", "Names"],
  ];

  let doneOnboarding = persistentState("done-onboarding", false);

  function exclusive(generator: GeneratorKey) {
    enabledGenerators = [generator];
  }

  function toggle(generator: GeneratorKey) {
    enabledGenerators = enabledGenerators.includes(generator)
      ? enabledGenerators.filter((g) => g !== generator)
      : [...enabledGenerators, generator];
  }

  function generate() {
    const generatorKey = getRandomElement(enabledGenerators);
    if (!generatorKey) return (value = "BSL");

    const generator = generators[generatorKey];

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
  <ul class="flex flex-wrap gap-2">
    {#each generatorButtons as [key, title] (key)}
      {@const isEnabled = enabledGenerators.includes(key)}
      <li>
        <Button
          ondblclick={() => exclusive(key)}
          onclick={() => toggle(key)}
          title="Toggle {title} generator"
          class={isEnabled ? null : "opacity-50"}
        >
          {title}
        </Button>
      </li>
    {/each}
  </ul>
</Container>

{#if doneOnboarding.value}
  <div class="fixed right-0 bottom-0 left-0 flex justify-between p-2" transition:fade>
    <div>
      <Timer {generate} currentWord={value} />
    </div>

    <Button onclick={() => (doneOnboarding.value = false)} title="Show welcome screen">
      <QuestionIcon />
    </Button>
  </div>
{/if}
