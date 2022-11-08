import React from "react";
import { useDrag } from "react-dnd";
import clsx from "clsx";

import { DragBoxProps, DragTypes } from "../DnD.types";

import styles from "./DragBox.module.scss";

export const DragBox: React.FC<DragBoxProps> = ({
  dragItem: { id, name, icon },
  index,
}) => {
  const [{ isDragging }, drag] = useDrag({
    type: DragTypes.Card,
    item: { type: DragTypes.Card, id, index, name, icon },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const image = require(`../../../assets/${icon}.png`);

  return (
    <div
      className={clsx(styles.container, {
        [styles.dragging]: isDragging,
      })}
      ref={drag}
      data-testid={name}
    >
      <img src={image} className={styles.icon} />
      <p className={styles.name}>{name}</p>
    </div>
  );
};
