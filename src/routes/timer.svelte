<script lang="ts">
  import Button from "$lib/components/ui/button.svelte";

  type Props = {
    generate: () => void;
    currentWord: string;
    /** in ms */
    duration: number;
  };

  let { generate, currentWord, duration }: Props = $props();

  let disabled = $state(true);
  let interval: NodeJS.Timer | undefined = $state();

  function toggle() {
    disabled = !disabled;

    if (disabled) clearTimeout(interval);
    else interval = setTimeout(middle, currentWord.length * duration);
  }

  function middle() {
    generate();
    interval = setTimeout(middle, currentWord.length * duration);
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
  <span>Timer ({duration / 1000}s/character)</span>
</Button>
