<script lang="ts">
  import Button from "$lib/components/ui/button.svelte";
  import Container from "$lib/components/ui/container.svelte";
  import Link from "$lib/components/ui/link.svelte";
  import {
    generateRandomDate,
    generateRandomDayOfWeek,
    generateRandomMonth,
  } from "$lib/generators/dates";
  import { generateRandomName } from "$lib/generators/names";
  import { generateRandomGbp, generateRandomInt } from "$lib/generators/numbers";
  import {
    generateRandomFarewell,
    generateRandomGreeting,
    generateRandomManner,
  } from "$lib/generators/words";
  import { getRandomElement } from "$lib/utils";
  import { scale } from "svelte/transition";
  import Timer from "./timer.svelte";
  import Meta from "$lib/components/meta.svelte";

  type DotPrefix<T> = {
    [P in keyof T]: {
      [C in keyof T[P]]: `${P & string}.${C & string}`;
    }[keyof T[P]];
  }[keyof T];

  type GeneratorCategory = keyof typeof generators;
  type GeneratorKey = DotPrefix<typeof generators>;

  const generators = {
    Numbers: {
      ints: generateRandomInt,
    },
    Dates: {
      daysOfWeek: generateRandomDayOfWeek,
      months: generateRandomMonth,
      date: generateRandomDate,
    },
    Currency: {
      gbpBoth: generateRandomGbp,
      gbpPound: [generateRandomGbp, "pound"],
      gbpPence: [generateRandomGbp, "pence"],
    },
    General: {
      names: generateRandomName,
      manners: generateRandomManner,
      greetings: generateRandomGreeting,
      farewells: generateRandomFarewell,
    },
  };

  let value = $state("BSL");
  let enabledGenerators = $state<GeneratorKey[]>([
    "Numbers.ints",
    "Dates.daysOfWeek",
    "Dates.months",
    "Dates.date",
    "Currency.gbpBoth",
    "Currency.gbpPence",
    "Currency.gbpPound",
    "General.names",
    "General.manners",
    "General.farewells",
    "General.greetings",
  ]);

  type GeneratorButton = [GeneratorKey, string];
  const generatorButtons: Record<GeneratorCategory, GeneratorButton[]> = {
    Numbers: [["Numbers.ints", "Numbers (0-100)"]],
    Dates: [
      ["Dates.daysOfWeek", "Days of the week"],
      ["Dates.months", "Months"],
      ["Dates.date", "Date"],
    ],
    Currency: [
      ["Currency.gbpBoth", "GBP (£25.95)"],
      ["Currency.gbpPound", "GBP (£25)"],
      ["Currency.gbpPence", "GBP (95p)"],
    ],
    General: [
      ["General.names", "Names"],
      ["General.greetings", "Greetings"],
      ["General.farewells", "Farewells"],
      ["General.manners", "Manners"],
    ],
  };

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

    const generator = generators[generatorKey.split(".")[0]][generatorKey.split(".")[1]];

    if (Array.isArray(generator)) value = String(generator[0](...generator.slice(1)));
    else value = String(generator());
  }
</script>

<Meta />

<Container class="grid gap-3 p-6">
  <div class="flex min-h-[50vh] items-center justify-center md:min-h-72">
    {#key value}
      <button in:scale title="Generate new flashcard" onclick={generate}>
        <h1 class="tabular-nums">
          {value}
        </h1>
      </button>
    {/key}
  </div>

  {#each Object.entries(generatorButtons) as [category, buttons] (category)}
    <hr />

    <ul class="flex flex-wrap gap-2" aria-label="{category} generator list">
      {#each buttons as [key, title] (key)}
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
  {/each}

  <hr />

  <ul class="flex flex-wrap gap-1" aria-label="Timer list">
    <li>
      <Timer {generate} currentWord={value} duration={1000} />
    </li>
    <li>
      <Timer {generate} currentWord={value} duration={1500} />
    </li>
    <li>
      <Timer {generate} currentWord={value} duration={2000} />
    </li>
  </ul>

  <hr />

  <Link href="/conversations" class="w-fit">Conversations</Link>
</Container>
