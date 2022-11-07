import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DropBoxContainer } from "../DnD/DropBox/DropBoxContainer";
import { Header } from "../Header/Header";
import { Logo } from "../Logo/Logo";
import { SelectionItem } from "@components/DnD/DnD.types";
import styles from "./Container.module.scss";
import info from "../../assets/info.png";

import React from "react";

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
  {
    id: "4",
    name: "Delicate cat paws",
    icon: "cat-paws",
  },
  {
    id: "5",
    name: "Wool pancakes",
    icon: "wool-pancakes",
  },
  {
    id: "6",
    name: "Cat's minion",
    icon: "cats-minion",
  },
];

export const Container = () => {
  return (
    <div>
      <Header />
      <Logo />
      <div className={styles.infoContainer}>
        <img src={info} className={styles.icon} />
        <p>Drag and drop dishes between tables to change their arrangement.</p>
      </div>
      <DndProvider backend={HTML5Backend}>
        <DropBoxContainer selectionsData={MOCK_DATA} />
      </DndProvider>
    </div>
  );
};
