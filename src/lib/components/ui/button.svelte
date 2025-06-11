<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";

  type Props = { children: Snippet } & HTMLButtonAttributes;

  let { children, class: klass, ...props }: Props = $props();
</script>

<button
  class={[
    "flex items-center gap-1",
    "rounded-3xl shadow-lg",
    "text-primary-500 bg-white",
    "group/button p-3",
    "disabled:opacity-50",
    "not-disabled:hover:bg-primary-500 not-disabled:hover:text-white",
    klass,
  ]}
  {...props}
>
  {@render children()}
</button>
