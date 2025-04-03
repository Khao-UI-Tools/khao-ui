export const remoteControlCommands = ["visible", "hidden", "ready"];

export type RemoteControlCommand = (typeof remoteControlCommands)[number];
