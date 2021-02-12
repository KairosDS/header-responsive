/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, expect } from "@open-wc/testing";
import "../kw-languages";

describe("KwLanguages", () => {
  it("should have the basic template", async () => {
    const el = await fixture(
      html`
        <kw-languages></kw-languages>
      `
    );
    const base = el.shadowRoot.querySelector(".kw-languages");

    expect(base).not.to.be.null;
    expect(el).dom.to.equalSnapshot();
  });
});
