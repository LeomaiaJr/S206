/// <reference types="cypress" />

describe("User Interface Tests", () => {
  beforeEach(() => {
    // Common setup if needed
    cy.viewport(1280, 720); // Set viewport for consistent testing
  });

  it("should add and remove an element", () => {
    cy.visit("https://the-internet.herokuapp.com/add_remove_elements/");

    // Add detailed logging for better reporting
    cy.log("Clicking Add Element button");
    cy.contains("Add Element").click();

    cy.log("Verifying Delete button appears");
    cy.contains("Delete").should("be.visible");

    cy.log("Clicking Delete button");
    cy.contains("Delete").click();
  });

  it("should check all checkboxes", () => {
    cy.log("Visiting checkboxes page");
    cy.visit("https://the-internet.herokuapp.com/checkboxes");

    cy.log("Checking all unchecked boxes");
    cy.get('input[type="checkbox"]').each(($checkbox) => {
      if (!$checkbox.is(":checked")) {
        cy.wrap($checkbox).click();
      }
    });

    cy.log("Verifying all checkboxes are checked");
    cy.get('input[type="checkbox"]').should("be.checked");
  });

  it("should select option 2 from dropdown", () => {
    cy.log("Visiting dropdown page");
    cy.visit("https://the-internet.herokuapp.com/dropdown");

    cy.log("Selecting option 2");
    cy.get("#dropdown").select("2");

    cy.log("Verifying selection");
    cy.get("#dropdown").should("have.value", "2");
  });

  it("should check for A/B test variation", () => {
    cy.log("Visiting A/B test page");
    cy.visit("https://the-internet.herokuapp.com/abtest");

    cy.log("Verifying page content");
    cy.contains("Also known as split testing.").should("exist");
  });

  it("should login successfully with correct credentials", () => {
    cy.log("Visiting login page");
    cy.visit("https://the-internet.herokuapp.com/login");

    cy.log("Entering correct credentials");
    cy.get('input[name="username"]').type("tomsmith");
    cy.get('input[name="password"]').type("SuperSecretPassword!");

    cy.log("Submitting login form");
    cy.get('button[type="submit"]').click();

    cy.log("Verifying successful login");
    cy.get("#flash").should("contain", "You logged into a secure area!");
  });

  it("should fail login with incorrect credentials", () => {
    cy.log("Visiting login page");
    cy.visit("https://the-internet.herokuapp.com/login");

    cy.log("Entering incorrect credentials");
    cy.get('input[name="username"]').type("wronguser");
    cy.get('input[name="password"]').type("wrongpassword");

    cy.log("Submitting login form");
    cy.get('button[type="submit"]').click();

    cy.log("Verifying error message");
    cy.get("#flash").should("contain", "Your username is invalid!");
  });
});
