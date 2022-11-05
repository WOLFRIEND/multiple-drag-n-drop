import { DragItem } from "@components/DnD/DragBox/DragBox.types";
import { DragBox } from "@components/DnD/DragBox/DragBox.types";

export type SelectionItem = DragBox & {
  index?: number;
};

export type DropBoxContainerProps = {
  selectionsData: SelectionItem[];
};

export type DropBoxProps = Readonly<{
  updateSelectionsOrder: (dragIndex: number, hoverIndex: number) => void;
  selection: SelectionItem | null;
  index: number;
}>;
