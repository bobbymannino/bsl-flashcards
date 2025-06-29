<script lang="ts">
  import Meta from "$lib/components/meta.svelte";
  import Button from "$lib/components/ui/button.svelte";
  import Container from "$lib/components/ui/container.svelte";
  import Link from "$lib/components/ui/link.svelte";
  import { generateRandomConversation } from "$lib/generators/conversations";

  let convo = $state(generateRandomConversation());

  function generate() {
    convo = generateRandomConversation();
  }
</script>

<Meta title="Conversations | BSL Flashcards" />

<Container class="grid gap-3 p-6">
  <div class="space-y-6">
    {#each convo as person, i (person)}
      <div class={["max-w-5/6 md:max-w-4/5", i % 2 && "ml-auto text-right"]}>
        {#each person as phrase (phrase)}
          <h2 class={["text-wrap", i % 2 ? "text-primary-900" : "text-primary-400"]}>
            {phrase}
          </h2>
        {/each}
      </div>
    {/each}
  </div>

  <hr />

  <div class="flex flex-wrap gap-1">
    <Button onclick={generate}>Re-generate</Button>

    <Link href="/">Flashcards</Link>
  </div>
</Container>
