import {bool, str} from "rolls-agent/src/api/rolls/types/_python_types_";

export const display_name = "rolls Proof of Space";

export type chiapos_install_info = {
  display_name: typeof display_name,
  version: str,
  installed: bool,
};
