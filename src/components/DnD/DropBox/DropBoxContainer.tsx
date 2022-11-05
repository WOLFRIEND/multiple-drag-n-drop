import React, { useState } from "react";

import { DropBox } from "./DropBox";
import { DropBoxContainerProps, SelectionItem } from "./DropBox.types";
import styles from "./DropBox.module.scss";
import { Table } from "../../Table/Table";

export const DropBoxContainer: React.FC<DropBoxContainerProps> = ({
  selectionsData,
}) => {
  const [selections, setSelections] = useState<SelectionItem[] | []>(
    selectionsData
  );

  const updateSelectionsOrder = (dragIndex: number, hoverIndex: number) => {
    const dragItem = selections[dragIndex];
    const dropItem = selections[hoverIndex];
    const newArray = [...selections];

    newArray.splice(dragIndex, 1, dropItem);
    newArray.splice(hoverIndex, 1, dragItem);

    setSelections(newArray);
  };

  return (
    <div className={styles.container}>
      {selections.map((item, index) => {
        return (
          <div className={styles.itemContainer}>
            <DropBox
              key={index}
              index={index}
              selection={selections[index]}
              updateSelectionsOrder={updateSelectionsOrder}
            />
            <Table />
          </div>
        );
      })}
    </div>
  );
};
