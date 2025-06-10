<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";

  type Props = { children: Snippet } & HTMLAttributes<HTMLDivElement>;

  let { children, class: klass, ...props }: Props = $props();
</script>

<div class={["container mx-auto", klass]} {...props}>
  {@render children()}
</div>
