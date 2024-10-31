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
            plusButton.should("be.visible");
            const minusButton = cy.get(".subtract-button").contains("-");
            minusButton.should("be.visible");
            const randomButton = cy.get(".random-button").contains("Surprise me!");
            randomButton.should("be.visible");
        })
    })
})