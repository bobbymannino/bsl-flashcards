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
    d="M16.4997 15.5L8.49973 7.49997M14.7498 17.25L20.0856 11.9142C20.8666 11.1331 20.8666 9.86682 20.0855 9.08577L19.4997 8.49997H17.4997L17.4997 6.49997L14.914 3.91422C14.1329 3.13315 12.8666 3.13317 12.0855 3.91425L6.74971 9.2503C6.05951 9.94053 6.05981 11.0597 6.75038 11.7495C7.44093 12.4394 7.44124 13.5585 6.75106 14.2487L4.00018 16.9998C3.17169 17.8283 3.17183 19.1716 4.0005 20C4.82899 20.8282 6.17196 20.8281 7.00028 19.9997L9.7509 17.2489C10.4412 16.5586 11.5604 16.5588 12.2504 17.2494C12.9403 17.94 14.0596 17.9403 14.7498 17.25Z"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
