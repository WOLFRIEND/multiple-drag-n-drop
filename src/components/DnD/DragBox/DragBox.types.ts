import { SelectionItem } from "@components/DnD/DropBox/DropBox.types";

export type DragBox = {
  id: string;
  name: string;
  icon: string;
};

export type DragBoxProps = {
  dragItem: SelectionItem;
  index: number;
};

export enum DragTypes {
  Card = "card",
}

export type DragItem = DragBox & {
  index: number;
  type: string;
};
