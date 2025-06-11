<script lang="ts">
  import Button from "$lib/components/ui/button.svelte";

  type Props = {
    generate: () => void;
    currentWord: string;
  };

  let { generate, currentWord }: Props = $props();

  let disabled = $state(true);
  let interval: NodeJS.Timer | undefined = $state();

  function toggle() {
    disabled = !disabled;

    if (disabled) clearTimeout(interval);
    else interval = setTimeout(middle, currentWord.length * 1000);
  }

  function middle() {
    generate();
    interval = setTimeout(middle, currentWord.length * 1000);
  }
</script>

<Button onclick={toggle} class="gap-2">
  <span
    class={[
      "size-2 rounded-full",
      disabled && "bg-gray-200",
      !disabled && "bg-primary-500 animate-pulse group-hover/button:bg-white",
    ]}
  ></span>
  <span>Timer (1s/character)</span>
</Button>
