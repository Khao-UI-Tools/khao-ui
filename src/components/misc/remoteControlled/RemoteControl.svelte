<svelte:options
  customElement={{
    tag: "khao-remote-control",
    shadow: "open",
  }}
/>

<script lang="ts">
  import { onMount } from "svelte";
  import { defaultChannelId, remoteControlEventName } from "./types/Costants";
  import { type Visibility } from "./types/Visibility";
  import type { RemoteControlEventDetail } from "./types/RemoteControllEventDetail";

  export let channelId: string = defaultChannelId;
  export let command: Visibility = "hidden";

  onMount(() => {
    const payload: RemoteControlEventDetail = {
      channelId: channelId,
      command: command,
    };

    const remoteControlEvent = new CustomEvent(remoteControlEventName, {
      detail: payload,
      bubbles: true,
      composed: true,
    });

    document.dispatchEvent(remoteControlEvent);
  });
</script>

<div></div>
