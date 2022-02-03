import { describe, expect, it } from "@jest/globals";
import { makeHTML } from "../makeHTML";

describe("html", () => {
  it("creates a html string", () => {
    const data = [1, 2, 3];
    const stats = {
      min: 1,
      max: 2,
      sum: 3,
      variance: 4,
      median: 5,
      mean: 6,
      stddev: 7,
    };

    const html = makeHTML(data, stats);

    const output = `
      <section>
        <p>: min: ${stats.min}</p>
        <p>: max: ${stats.max}</p>
        <p>: sum: ${stats.sum}</p>
        <p>: var: ${stats.variance}</p>
        <p>: med: ${stats.median}</p>
        <p>: mea: ${stats.mean}</p>
        <p>: std: ${stats.stddev}</p>
        ${data}
      </section>
    `;
    expect(html).toBe(output);
  });
});
