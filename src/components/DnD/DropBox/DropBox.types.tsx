import {DragItem} from "@components/DnD/DragBox/DragBox.types";
import { DragBox } from "@components/DnD/DragBox/DragBox.types";

export enum ContainerNames {
    Container1 = 'Container1',
    Container2 = 'Container2',
    Container3 = 'Container3',
}

export type SelectionItem = DragBox & {
    container?: string
}

export type Selections = {
    [ContainerNames.Container1]: SelectionItem;
    [ContainerNames.Container2]: SelectionItem;
    [ContainerNames.Container3]: SelectionItem;
}

export type DropBoxcontainerProps = {
    selections: Selections
}

export type DropBoxProps = Readonly<{
    updateSelectionsOrder: (draggedItem: DragItem, hoverContainer: string) => void;
    selection: SelectionItem | null;
    container: string;
}>;