import BaseButtonView from "../views/BaseButtonView";

describe("BaseButtonView", () => {
  it("should mount", () => {
    cy.mount(<BaseButtonView />);
  });

  it("label should exist and be exactly as supplied", () => {
    cy.mount(<BaseButtonView>Click me!</BaseButtonView>);
    cy.get("button").should("contains.text", "Click me!");
  });

  it("should be clickable when enabled", () => {
    cy.mount(<BaseButtonView>Click Me</BaseButtonView>);
    cy.get("button").click();
  });

  it("should not be clickable when disabled", () => {
    cy.mount(<BaseButtonView disabled> Cannot Click me </BaseButtonView>);
    cy.get("button").should("be.disabled");
  });
});
