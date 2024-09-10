import { StringBoolean } from "../../../common/types/StringBoolean";
import { TabSize } from "./TabSize";

export interface TabConfig {
  label: string;
  href: string;
  title?: string;
  active?: StringBoolean;
  size?: TabSize;
}
