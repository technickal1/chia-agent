import {bool, str} from "rolls-agent/src/api/rolls/types/_python_types_";

export const display_name = "madMAx Plotter";

export type madmax_install_info = {
  display_name: typeof display_name,
  version?: str,
  installed: bool,
  can_install?: bool;
};
