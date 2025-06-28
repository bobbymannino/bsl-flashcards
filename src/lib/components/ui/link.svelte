<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAnchorAttributes } from "svelte/elements";

  type Props = { children: Snippet } & HTMLAnchorAttributes;

  let { children, class: klass, ...props }: Props = $props();
</script>

<a
  class={[
    "flex items-center gap-1",
    "rounded-3xl shadow-lg",
    "text-primary-500 bg-white",
    "group/button p-3",
    "disabled:opacity-50",
    "hover:bg-primary-500 hover:text-white",
    klass,
  ]}
  {...props}
>
  {@render children()}
</a>
