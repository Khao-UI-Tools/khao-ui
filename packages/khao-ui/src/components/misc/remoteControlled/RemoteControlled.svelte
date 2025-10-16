<svelte:options
  customElement={{
    tag: "khao-remote-controlled",
    shadow: "open",
  }}
/>

<script lang="ts">
  import { onMount } from "svelte";
  import { defaultChannelId, remoteControlEventName } from "./types/Costants";
  import { type Visibility, visibilityOptions } from "./types/Visibility";
  import type { RemoteControlEventDetail } from "./types/RemoteControlEventDetail";
  import dispatchRemoteControllEvent from "./utils/dispatchRemoteControlEvent";

  let {
    visibility = $bindable("hidden" as Visibility),
    channelId = defaultChannelId
  }: {
    visibility?: Visibility;
    channelId?: string
  } = $props();

  onMount(() => {
    document.addEventListener(
      remoteControlEventName,
      (event: CustomEventInit<RemoteControlEventDetail>) => {
        const payload = event.detail;

        if (payload?.channelId == channelId) {
          if (visibilityOptions.includes(payload.command)) {
            visibility = payload.command;
          }
        }
      }
    );

    dispatchRemoteControllEvent(channelId, "ready");
  });
</script>

<div>
  {#if visibility === "visible"}
    <slot></slot>
  {/if}
</div>
