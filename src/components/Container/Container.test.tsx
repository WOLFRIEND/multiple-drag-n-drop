import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";

import { render, cleanup } from "@testing-library/react";

import { Container } from "./Container";
import { dropBoxAppearance } from "./Container.definitions";

const feature = loadFeature("./Container.feature", {
  loadRelativePath: true,
});

defineFeature(feature, (test) => {
  describe("Check drag and drop behavior", () => {
    beforeAll(() => {
      render(<div>Kok</div>);
    });
    afterAll(() => {
      cleanup();
      jest.resetAllMocks();
    });
    dropBoxAppearance(test);
  });
});
