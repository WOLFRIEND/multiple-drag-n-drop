import React, { useState } from "react";
import { useDrop } from "react-dnd";
import clsx from "clsx";

import { DragBox } from "../DragBox/DragBox";
import { DropBoxProps } from "./DropBox.types";

import { DragItem, DragTypes } from "../DragBox/DragBox.types";
import styles from "./DropBox.module.scss";

export const DropBox: React.FC<DropBoxProps> = ({
  updateSelectionsOrder,
  selection,
  container,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const [_, drop] = useDrop({
    accept: [DragTypes.Card],
    drop(item: DragItem) {
      updateSelectionsOrder(item, container);
    },
    collect: (monitor) => {
      if (monitor.isOver()) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    },
  });

  return (
    <div
      className={clsx(styles.dropContainer, {
        [styles.hovered]: isHovered,
      })}
      ref={drop}
    >
      <DragBox dragItem={selection} container={selection.container || ""} />
    </div>
  );
};
