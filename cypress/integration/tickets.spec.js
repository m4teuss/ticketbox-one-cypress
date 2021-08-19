

describe(" Projeto Tickets", () => {

    // beforeEach: Antes de tudo acesse a page
    beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"));

    // CY.GET("ELEMENTO").TYPE("VALOR A SER DIGITADO")
    it("Preencher campos do tipo texto", () => {
        const firstName = "Samuca"
        const lastName = "Thaylada"    

        cy.get("#first-name").type(firstName)
        cy.get("#last-name").type(lastName)
        cy.get("#email").type('samuca.thaylada@gmail.com')
        cy.get("#requests").type('mc')
        cy.get("#signature").type( `${firstName} ${lastName}`)
    })

    // CY.GET("ELEMENTO").SELECT("VALOR A SER SELECIONADO")
    it("Selecionar opção 2 do select", () =>{
        cy.get("#ticket-quantity").select("2")  
    })

    // CY.GET("ELEMENTO").CHECK()    
    it("Selecionar 'vip' no ticket type", () =>{
        cy.get("#vip").check();
    })

    // CY.GET("ELEMENTO").CHECK()
    // CY.GET("ELEMENTO").UNCHECK()
    it(" Selecionar os 3 checksboxes e remover o Friend", () =>{
        cy.get("#friend").check()
        cy.get("#publication").check()
        cy.get("#social-media").check()  
        cy.get("#friend").uncheck() 
    })


    // Validando Titulo  CY.GET().SHOULD("CONTAIN", "TEXTO A SER VERIFICADO")
    it("Validar Titulo", () => {
        cy.get("header h1").should("contain" ,"TICKETBOX")

    })


    it.only("Validar quando email for incorreto", () =>{

        // .as("email") é um alias(apelido) de email
        cy.get("#email").as("email").type("email.invalido")

        cy.get("#email.invalid").should("exist")

        // Para alias usar o @  
        cy.get("@email").clear().type("email.correto@SpeechGrammarList.com")

        // Validando que o elemento não existe no DOM
        cy.get("#email.invalid").should("not.exist")

       


    })


    }) // fechando describe

  
    
   