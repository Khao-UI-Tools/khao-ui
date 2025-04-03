import type { RemoteControlCommand } from "./RemoteControlCommand";

export type RemoteControlEventDetail = {
  channelId: string;
  command: RemoteControlCommand;
};
