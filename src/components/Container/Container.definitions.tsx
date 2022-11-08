import { waitFor, screen, fireEvent, within } from "@testing-library/react";

export const dropBoxContainerAppearance = (test): void => {
  test("DropBoxContainer appearance", async ({ when, then }) => {
    when("I load the page", async () => {
      await waitFor(() => "pending");
    });

    then(/^I should see the '(.*)'$/, async (testId) => {
      await waitFor(() => {
        const dropBoxContainer = screen.getByTestId(testId);
        expect(dropBoxContainer).toBeInTheDocument();
      });
    });
  });
};

export const dropBoxContainerDataAppearance = (test): void => {
  test("DropBoxContainer data appearance", async ({ when, then }) => {
    when("I load the page", async () => {
      await waitFor(() => "pending");
    });

    then(/^I should see the '(.*)' dish$/, async (dishNameTestId) => {
      await waitFor(() => {
        const dishName = screen.getByText(dishNameTestId);
        expect(dishName).toBeInTheDocument();
      });
    });
  });
};

export const dragAndDropBehavior = (test): void => {
  test("Drag and drop behavior", async ({ when, then, and }) => {
    when(
      /^I drag the '(.*)' dish and drop it on the third table with the '(.*)' dish$/,
      async (firstDragBoxTestId) => {
        await waitFor(() => {
          const firstDragBox = screen.getByTestId(firstDragBoxTestId);
          const thirdDropBox = screen.getByTestId("drop box 2");
          fireEvent.dragStart(firstDragBox);
          fireEvent.dragEnter(thirdDropBox);
          fireEvent.dragOver(thirdDropBox);
          fireEvent.drop(thirdDropBox);
        });
      }
    );
    then(
      /^I should see that the first table contains '(.*)' dish$/,
      async (dishNameTestId) => {
        await waitFor(() => {
          const firstDropBox = screen.getByTestId("drop box 0");
          expect(
            within(firstDropBox).getByText(dishNameTestId)
          ).toBeInTheDocument();
        });
      }
    );
    and(
      /^I should see that the third table contains '(.*)' dish$/,
      async (dishNameTestId) => {
        await waitFor(() => {
          const thirdDropBox = screen.getByTestId("drop box 2");
          expect(
            within(thirdDropBox).getByText(dishNameTestId)
          ).toBeInTheDocument();
        });
      }
    );
  });
};
