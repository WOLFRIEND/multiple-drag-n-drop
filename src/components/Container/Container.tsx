import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DropBoxContainer } from "../DnD/DropBox/DropBoxContainer";
import { Header } from "../Header/Header";
import { Logo } from "../Logo/Logo";
import { SelectionItem } from "@components/DnD/DnD.types";

const MOCK_DATA: SelectionItem[] = [
  {
    id: "1",
    name: "Stir-Fried Cat",
    icon: "stir-fried-cat",
  },
  {
    id: "2",
    name: "Whisker Omelet",
    icon: "whisker-omelet",
  },
  {
    id: "3",
    name: "Cat tails",
    icon: "cat-tails",
  },
];

export const Container = () => {
  return (
    <div>
      <Header />
      <Logo />
      <DndProvider backend={HTML5Backend}>
        <DropBoxContainer selectionsData={MOCK_DATA} />
      </DndProvider>
    </div>
  );
};
