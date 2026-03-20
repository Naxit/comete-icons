import { describe, expect, it } from "vitest";
import { getIconClass } from "./utils.js";

describe("getIconClass", () => {
  it("should prefix every color with the comete-icon class", () => {
    const cases: Array<{
      color: Parameters<typeof getIconClass>[0];
      expected: string;
    }> = [
      { color: "default", expected: "comete-icon--default" },
      { color: "disabled", expected: "comete-icon--disabled" },
      { color: "inverted", expected: "comete-icon--inverted" },
      { color: "on-warning", expected: "comete-icon--on-warning" },
      { color: "warning", expected: "comete-icon--warning" },
      { color: "critical", expected: "comete-icon--critical" },
      { color: "success", expected: "comete-icon--success" },
      { color: "brand", expected: "comete-icon--brand" },
      { color: "selected", expected: "comete-icon--selected" },
      { color: "information", expected: "comete-icon--information" },
      { color: "subtle", expected: "comete-icon--subtle" },
      { color: "subtlest", expected: "comete-icon--subtlest" },
      { color: "accent", expected: "comete-icon--accent" },
      { color: "day", expected: "comete-icon--day" },
      { color: "night", expected: "comete-icon--night" },
    ];

    for (const { color, expected } of cases) {
      expect(getIconClass(color)).toBe(expected);
    }
  });
});
