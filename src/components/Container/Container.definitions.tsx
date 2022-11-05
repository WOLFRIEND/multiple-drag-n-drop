import { DefineScenarioFunctionWithAliases } from "jest-cucumber/dist/src/feature-definition-creation";

import { waitFor, screen, fireEvent, within } from "@testing-library/react";

export const dropBoxAppearance = (test): void => {
  test("Drop box appearance", async ({ when, then }) => {
    when("I load the page", async () => {
      await waitFor(() => "pending");
    });

    then(/^I should see the '(.*)' container$/, async (testId) => {
      await waitFor(() => {
        screen.debug(undefined, 99999);
      });
    });
  });
};
