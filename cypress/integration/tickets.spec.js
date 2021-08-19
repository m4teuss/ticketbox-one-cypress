describe(" Tickets", () => {

    // Acessando page
    beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"));


    it("Preencher campos do tipo texto", () => {

        const firstName = "Samuca"
        const lastName = "Thaylada"
        

        cy.get("#first-name").type(firstName)
        cy.get("#last-name").type(lastName)
        cy.get("#email").type('samuca.thaylada@gmail.com')
        cy.get("#requests").type('mc')
        cy.get("#signature").type( `${firstName} ${lastName}`)

    })


    it.only(" Selecionar opção 2 do select", () =>{
        cy.get("#ticket-quantity").select("2")  
    })



    // Validando Titulo
    it("Validar Titulo", () => {});
    })

  
    
   