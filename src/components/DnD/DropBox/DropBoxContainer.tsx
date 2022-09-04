import React, { useEffect, useState } from "react";

import { DropBox } from "./DropBox";
import {
  ContainerNames,
  Selections,
  DropBoxcontainerProps,
} from "./DropBox.types";
import { DragItem } from "@components/DnD/DragBox/DragBox.types";
import styles from "./DropBox.module.scss";
import { Table } from "../../Table/Table";

export const DropBoxContainer: React.FC<any> = ({ selectionsData }) => {
  const [selections, setSelections] = useState<Selections | null>(
    selectionsData
  );

  const updateSelectionsOrder = (
    draggedItem: DragItem,
    hoveredContainer: string
  ) => {
    const draggedItemContainer = draggedItem.container;

    const hoveredItem = selections[hoveredContainer as keyof Selections];

    draggedItem.container = hoveredContainer;

    if (hoveredItem) {
      hoveredItem.container = draggedItemContainer;
    }

    const newSelections = { ...selections };

    newSelections[draggedItem.container as keyof Selections] = draggedItem;
    if (hoveredItem) {
      newSelections[hoveredItem.container as keyof Selections] = hoveredItem;
    } else {
      newSelections[draggedItemContainer as keyof Selections] = null;
    }

    setSelections(newSelections);
  };

  return (
    <div className={styles.container}>
      <div className={styles.itemContainer}>
        <DropBox
          container={ContainerNames.Container1}
          selection={selections[ContainerNames.Container1]}
          updateSelectionsOrder={updateSelectionsOrder}
        />
        <Table />
      </div>

      <div className={styles.itemContainer}>
        <DropBox
          container={ContainerNames.Container2}
          selection={selections[ContainerNames.Container2]}
          updateSelectionsOrder={updateSelectionsOrder}
        />
        <Table />
      </div>

      <div className={styles.itemContainer}>
        <DropBox
          container={ContainerNames.Container3}
          selection={selections[ContainerNames.Container3]}
          updateSelectionsOrder={updateSelectionsOrder}
        />
        <Table />
      </div>
    </div>
  );
};
