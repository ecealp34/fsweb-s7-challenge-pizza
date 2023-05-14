describe("User-test", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/anasayfa");
        cy.get('#order-pizza').click();
    })

    it("İnput-test", () => {
        cy.get('#name-input').type("Position Absolute")
    })
    it("Malzeme-test", () => {
        cy.get('#lezzetler').select(["Pepperoni", "Sosis"])
    })
    it("Form-test", () => {
        cy.get('#pizza-form').submit()
    })
})