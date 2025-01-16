import { remoteControlEventName } from "../types/Costants";
import type { RemoteControlCommand } from "../types/RemoteControlCommand";
import type { RemoteControlEventDetail } from "../types/RemoteControlEventDetail";

const dispatchRemoteControlEvent = (
  channelId: string,
  command: RemoteControlCommand
) => {
  const payload: RemoteControlEventDetail = {
    channelId: channelId,
    command: command,
  };

  const remoteControlEvent = new CustomEvent(remoteControlEventName, {
    detail: payload,
    bubbles: true,
    composed: true,
  });

  console.log("dispatchRemoteControlEvent", remoteControlEvent);

  document.dispatchEvent(remoteControlEvent);
};

export default dispatchRemoteControlEvent;
