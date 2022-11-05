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
