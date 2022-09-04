import { DropBoxContainer } from "../DnD/DropBox/DropBoxContainer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Header } from "../Header/Header";
import { Logo } from "../Logo/Logo";

const MOCK_DATA = {
  Container1: {
    id: 1,
    name: "Stir-Fried Cat",
    icon: "stir-fried-cat",
    container: "Container1",
  },
  Container2: {
    id: 2,
    name: "Whisker Omelet",
    icon: "whisker-omelet",
    container: "Container2",
  },
  Container3: {
    id: 3,
    name: "Cat tails",
    icon: "cat-tails",
    container: "Container3",
  },
};

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
