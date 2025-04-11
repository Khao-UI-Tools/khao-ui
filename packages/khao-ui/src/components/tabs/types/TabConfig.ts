import { type StringBoolean } from "../../../common/types/StringBoolean";
import { type TabSize } from "./TabSize";

export interface TabConfig {
  label: string;
  href: string;
  title?: string;
  active?: StringBoolean;
  size?: TabSize;
}
