/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, expect } from "@open-wc/testing";
import "../header-responsive";

describe("HeaderResponsive", () => {
  it("should have the basic template", async () => {
    const el = await fixture(
      html`
        <header-responsive></header-responsive>
      `
    );
    const base = el.shadowRoot.querySelector(".header-responsive");
    expect(base).not.to.be.null;
  
  });

  it("should have the basic template with slots", async () => {
    const el = await fixture(
      html`
        <header-responsive>
          <div slot="logo"></div>
          <div slot="second"></div>
          <div slot="third"></div>
        </header-responsive>
      `
    );
    const base = el.shadowRoot.querySelector(".header-responsive");
    const slots = el.shadowRoot.querySelectorAll('slot')
    expect(base).not.to.be.null;
    expect(slots[0].name).to.equal('logo')
    expect(slots[1].name).to.equal('second')
    expect(slots[2].name).to.equal('third')
  
  });

  it("should have the basic template with slots", async () => {
    const el = await fixture(
      html`
        <header-responsive>
          <div slot="second"></div>
        </header-responsive>
      `
    );
    const base = el.shadowRoot.querySelector(".header-responsive");
    const slots = el.shadowRoot.querySelectorAll('slot')
    expect(base).not.to.be.null;
    expect(slots[0].name).not.to.equal('logo')
  
  });
});
