<script lang="ts">
  import type { SVGAttributes } from "svelte/elements";

  let props: SVGAttributes<SVGElement> = $props();
</script>

<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <path
    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path d="M12 16V16.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
  <path
    d="M12 13C12 11.3608 14 11.9319 14 10C14 8.89543 13.1046 8 12 8C11.2597 8 10.6134 8.4022 10.2676 9"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
