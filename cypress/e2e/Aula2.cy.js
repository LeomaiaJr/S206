/// <reference types="cypress" />

describe("User Registration, Authentication, and Account Management Tests", () => {
  it("Should successfully create a new user account", () => {
    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login"
    );
    cy.get(".btn-link").click();
    cy.get("#firstName").type("Usuario");
    cy.get("#Text1").type("Teste");
    cy.get("#username").type("teste");
    cy.get("#password").type("teste");
    cy.get(".btn-primary").click();
    cy.get(".ng-binding").should("contain.text", "Registration successful");
  });

  it("Should prevent user registration with missing information", () => {
    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login"
    );
    cy.get(".btn-link").click();
    cy.get("#firstName").type("Usuario");
    cy.get("#Text1").type("Teste");
    cy.get("#username").type("teste");
    cy.get(".btn-primary").should("be.disabled");
  });

  it("Should allow user to log in with valid credentials", () => {
    let infos = createTestUser();
    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login"
    );
    cy.get("#username").type(infos[0]);
    cy.get("#password").type(infos[1]);
    cy.get(".btn-primary").click();
    cy.get("h1.ng-binding").should("contain.text", infos[0]);
  });

  it("Should deny access after user account deletion", () => {
    let infos = createTestUser();
    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login"
    );
    cy.get("#username").type(infos[0]);
    cy.get("#password").type(infos[1]);
    cy.get(".btn-primary").click();
    cy.get("h1.ng-binding").should("contain.text", infos[0]);
    cy.get(".ng-binding > a").click();
    cy.get(".btn").click();
    cy.get("#username").type(infos[0]);
    cy.get("#password").type(infos[1]);
    cy.get(".btn-primary").click();
    cy.get(".ng-binding").should(
      "contain.text",
      "Username or password is incorrect"
    );
  });

  const createTestUser = () => {
    let hora = new Date().getHours().toString();
    let minuto = new Date().getMinutes().toString();
    let segundo = new Date().getSeconds().toString();
    let ID = hora + minuto + segundo + "ID";
    let Senha = hora + minuto + segundo + "Senha";

    let infos = [ID, Senha];

    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login"
    );
    cy.get(".btn-link").click();
    cy.get("#firstName").type(ID);
    cy.get("#Text1").type(ID);
    cy.get("#username").type(ID);
    cy.get("#password").type(Senha);
    cy.get(".btn-primary").click();
    cy.get(".ng-binding").should("contain.text", "Registration successful");
    return infos;
  };
});
