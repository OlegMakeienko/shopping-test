import Counter from "./Counter.jsx";
import React from "react";

describe('<Counter />', () => {
    beforeEach(() => {
        cy.mount(<Counter/>);
    })

    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
    })

    describe('det ska finnas och synas tre knappar: "+", "-", "random" ', () => {
        it('should have + button', () => {
            const plusButton = cy.get(".add-button").contains("+");
            plusButton.should("be.visible");})
        it('should have - button', () => {
            const minusButton = cy.get(".subtract-button").contains("-");
            minusButton.should("be.visible");})
        it('should have random button', () => {
            const randomButton = cy.get(".random-button").contains("Surprise me!");
            randomButton.should("be.visible");
        })
    })

    describe('0.2 användaren ska se talet 1 initialt (innan man klickat på någon knapp)', () => {
        it("should display 1 initially", () => {
            cy.get('.value').contains(1).should("be.visible");
        } )
    })

    describe('1 "+" button ', () => {
        let button;
        beforeEach(() => {
            button = cy.get(".add-button");
        })

        it('should display 2 after click on "+"', () => {
            button.click();
            cy.get(".value").contains(2).should("be.visible");
        })

        it('should increase value by 1 after every click on "+" ', () => {
            button.click();
            button.click();
            button.click();
            cy.get(".value").contains(4).should("be.visible");
        })
    })

    describe('2 "-" button ', () => {

        it('Should decrease value by 1 after every click on "-"', () => {
            cy.get(".add-button").click();
            cy.get(".subtract-button").click();
            cy.get(".subtract-button").click();
            cy.get(".value").contains(0).should("be.visible");
        })

        it('should decrease value only down to 0', () => {
            cy.get(".subtract-button").click();
            cy.get(".subtract-button").click();
            cy.get(".subtract-button").click();
            cy.get(".subtract-button").click();
            cy.get(".value").contains(0).should("be.visible");
        })
    })
})