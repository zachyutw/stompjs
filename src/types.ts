import {Message} from "./message";
import {Frame} from "./frame";

export type debugFnType = (...message: any[]) => void;

export type messageCallbackType = (message: Message) => void;
export type frameCallbackType = (receipt: Frame) => void;
export type closeEventCallbackType = (evt: CloseEvent) => void;
