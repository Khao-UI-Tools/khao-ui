<svelte:options customElement="khao-map-marker-pin" />

<script lang="ts">
  export let color: string;
  export let iconName: string;
</script>

<div style="background-color: {color}" class="pin">
  {#if iconName === "close"}
    <svg class="icon" viewBox="0 -960 960 960"
      ><path
        d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z"
      /></svg
    >
  {/if}
  {#if iconName === "restaurant"}
    <svg class="icon" viewBox="0 -960 960 960"
      ><path
        d="M300-96v-389q-47-12-77.5-50.1T192-624v-240h72v240h36v-240h72v240h36v-240h72v240q0 50.8-30.5 88.9Q419-497 372-485v389h-72Zm396 0v-336H576v-240q0-79.68 56.16-135.84T768-864v768h-72Z"
      /></svg
    >
  {/if}
  {#if iconName === "shopping_cart"}
    <svg class="icon" viewBox="0 -960 960 960"
      ><path
        d="M263.79-96Q234-96 213-117.21t-21-51Q192-198 213.21-219t51-21Q294-240 315-218.79t21 51Q336-138 314.79-117t-51 21Zm432 0Q666-96 645-117.21t-21-51Q624-198 645.21-219t51-21Q726-240 747-218.79t21 51Q768-138 746.79-117t-51 21ZM222-768h570q14 0 20.5 11t1.5 23L702.63-476.14Q694-456 676.5-444T637-432H317l-42 72h493v72H276q-43 0-63.5-36.15-20.5-36.16.5-71.85l52-90-131-306H48v-72h133l41 96Z"
      /></svg
    >
  {/if}
</div>

<style>
  :host {
    display: block;
  }

  .pin {
    width: 30px;
    height: 30px;
    border-radius: 50% 50% 50% 0;
    position: relative;
    transform: rotate(-45deg);
    left: 50%;
    top: 50%;
  }

  .pin::before {
    content: "";
    width: 24px;
    height: 24px;
    margin: 3px 0 0 3px;
    position: absolute;
    background: #fff;
    border-radius: 50%;
  }

  .icon {
    position: absolute;
    width: 20px;
    height: 20px;
    fill: #000000;
    top: 0.3rem;
    left: 0.3rem;
    transform: rotate(45deg);
    text-align: center;
  }
</style>
