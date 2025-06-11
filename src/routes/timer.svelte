<script lang="ts" module>
  let current: HTMLButtonElement | undefined;
</script>

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

  function toggle(e: MouseEvent & { currentTarget: HTMLButtonElement }) {
    disabled = !disabled;

    if (disabled) {
      current = e.currentTarget;
      clearTimeout(interval);
    } else {
      if (e.currentTarget != current) current?.click();
      current = e.currentTarget;
      interval = setTimeout(middle, currentWord.length * duration);
    }
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
