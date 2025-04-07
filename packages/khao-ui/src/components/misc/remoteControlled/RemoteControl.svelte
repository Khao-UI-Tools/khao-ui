<svelte:options
  customElement={{
    tag: "khao-remote-control",
    shadow: "open",
  }}
/>

<script lang="ts">
  import { onMount } from "svelte";
  import { defaultChannelId, remoteControlEventName } from "./types/Costants";
  import type { RemoteControlEventDetail } from "./types/RemoteControlEventDetail";
  import type { RemoteControlCommand } from "./types/RemoteControlCommand";
  import dispatchRemoteControllEvent from "./utils/dispatchRemoteControlEvent";

  export let channelId: string = defaultChannelId;
  export let command: RemoteControlCommand = "hidden";

  onMount(() => {
    document.addEventListener(
      remoteControlEventName,
      (event: CustomEventInit<RemoteControlEventDetail>) => {
        const payload = event.detail;
        if (payload?.channelId == channelId) {
          if (payload.command == "ready") {
            dispatchRemoteControllEvent(channelId, command);
          }
        }
      }
    );
  });
</script>

<div class="container" aria-hidden="true"></div>

<style>
  .container {
    display: none;
  }
</style>
