import { PostLineStep, step } from "../../testPost";
import { screen } from "@testing-library/react";

export const resourcedTestSteps: PostLineStep[] = [
  step(
    /The resource "([^"]+)" count should be (\d+)/,
    (line, [, resourceName, count]) => {
      var resource = screen.getByTestId(`resource-${resourceName}`);
      expect(resource).toHaveTextContent(new RegExp(`: ${count}/`));
    }
  ),
  step(
    /The resource "([^"]+)" maximum should be (\d+)/,
    (line, [, resourceName, maximum]) => {
      var resource = screen.getByTestId(`resource-${resourceName}`);
      expect(resource).toHaveTextContent(new RegExp(`/${maximum} `));
    }
  ),
  step(
    /The resource "([^"]+)" round increment should be (\d+)/,
    (line, [, resourceName, roundIncrement]) => {
      var resource = screen.getByTestId(`resource-${resourceName}`);
      expect(resource).toHaveTextContent(
        new RegExp(`\\(\\+${roundIncrement}\\)`)
      );
    }
  ),
  step(
    /There should be "([^_]+)" emoji/,
    (line, [, resourceName, maximum]) => {
      var entityListItem = screen.getAllByTestId("entity-list-item");
      var text = entityListItem[1].textContent
      expect(text).toContain("\ud83e\udd54");
    }
  ),
  step(
    /There should be no "([^_]+)" emoji/,
    (line, [, resourceName, roundIncrement]) => {
      var entityListItem = screen.getAllByTestId("entity-list-item");
      var text = entityListItem[1].textContent
      expect(text).not.toContain("\ud83e\udd54");
    }
  ),
];
