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


    it("Validar quando email for incorreto", () =>{

        // .as("email") é um alias(apelido) de email
        cy.get("#email").as("email").type("email.invalido")

        cy.get("#email.invalid").should("exist")

        // Para alias usar o @  
        cy.get("@email").clear().type("email.correto@SpeechGrammarList.com")

        // Validando que o elemento não existe no DOM
        cy.get("#email.invalid").should("not.exist")
    })


   // Preencher tudo 
    it("preencher o formulario e resetar", () => {

        cy.get("header h1").should("contain" ,"TICKETBOX");

        const firstName = "Samuca";
        const lastName = "Thaylada";
        const fullName = `${firstName} ${lastName}`;    

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);  
        cy.get("#email").type('samuca.thaylada@gmail.com');
        cy.get("#ticket-quantity").select("2");
        cy.get("#vip").check();
        cy.get("#social-media").check(); 
        cy.get("#requests").type('teste');
        cy.get(".agreement p").should("contain", `I, ${fullName}, wish to buy 2 VIP tickets.`);
        cy.get("#agree").click()
        cy.get("#signature").type( `${fullName}`);

        // validando se botão esta disponivel para click
        cy.get("button[type='submit']").as("btnentrar").should("not.be.disabled");

        // clicando no botao
        cy.get("button[type='reset'").click()

        // validando se botão esta desabilitado
        cy.get("@btnentrar").should("be.disabled")        
  
    });


    // Função customizada ()
    it.only("Preencher somente camoos obrigatórios do formulario de maneira customizada", () =>{

        const dadosPessoais = {
            firstName: " Debian",
            lastName: "Silva",
            email: "debian.silva@gmail.com"
        }

        // Chamando função e passando os dados. 
        cy.preencherCampos(dadosPessoais);

        cy.get("#agree").uncheck()
        cy.get("button[type='submit']").should("be.disabled");
    })

    }) // fechando describe

  
    
   