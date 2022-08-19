import { TipI } from "../data/TipI";
import { ContentI } from "../data/ContentI";

export type SaveTips = (tips: Array<TipI>) => void;
export type SaveContent = (content: Array<ContentI>) => void;
