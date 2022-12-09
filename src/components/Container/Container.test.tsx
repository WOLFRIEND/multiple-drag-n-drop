import React from "react";

import { loadFeature, defineFeature } from "jest-cucumber";
import { render, cleanup } from "@testing-library/react";

import { Container } from "./Container";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import {
  dragAndDropBehavior,
  dropBoxContainerAppearance,
  dropBoxContainerDataAppearance,
} from "./Container.definitions";

const feature = loadFeature("./Container.feature", {
  loadRelativePath: true,
});

defineFeature(feature, (test) => {
  describe("Check drag and drop behavior", () => {
    beforeAll(() => {
      render(
        <DndProvider backend={HTML5Backend}>
          <Container />
        </DndProvider>
      );
    });
    afterAll(() => {
      cleanup();
      jest.resetAllMocks();
    });
    dropBoxContainerAppearance(test);
    dropBoxContainerDataAppearance(test);
    dragAndDropBehavior(test);
  });
});
