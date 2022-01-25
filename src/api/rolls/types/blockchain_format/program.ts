import {str} from "rolls-agent/src/api/rolls/types/_python_types_";

export type SerializedProgram = str;

export type Program = unknown; // SExp + wrapper methods. In APIs, it is serialized to str.