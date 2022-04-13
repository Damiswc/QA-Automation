const { expect } = require("chai")
const { it } = require("mocha")


describe('Landing Page_OEM_Desktop', () => {
    

    it('Carga Landing Page', ()=> {

    cy.visit('https://rn9-oem-test.simplitec.io/')

    })

//FALTA CHEQUEO DE CONTENIDO
//    it('Chequeo de contenido', ()=> {

//    cy.contains('Elegí un concesionario').click()

//    })


    describe('Navegador',()=>{


        describe('Clickea el logo Y redirecciona a inventario', ()=> {

            it('Clickea logo', () =>{
            cy.get('#svelte > div.flex.flex-col.min-h-screen > header > div:nth-child(1) > div').click()
          })

            it('Redirecciona a inventario', ()=>{
                cy.url().should('eq', 'https://rn9-oem-test.simplitec.io/inventory')
           })

        })


        describe('Buscador de vehículos',() => {

            it('Ingresa información en el buscador reiteradas veces', () =>{
                cy.visit('https://rn9-oem-test.simplitec.io/')
                cy.get('.input-search.py-1.border.svelte-ybihii').type('Hilux Cabina Doble')
                cy.get('.input-search.py-1.border.svelte-ybihii').clear()
                cy.get('.input-search.py-1.border.svelte-ybihii').type('++{´2129a99021 {!"$||||°!"')
                cy.get('.title-element.svelte-ybihii').contains('No hay coincidencias con tu búsqueda.').click()
                cy.get('.input-search.py-1.border.svelte-ybihii').clear()
                cy.get('.input-search.py-1.border.svelte-ybihii').type('Hilux Cabina Doble')
              })

              it('Selecciona un vehículo & Verifica & Abre el mapa', () =>{  //Solo chequeo que se abra el mapa, el funcionamiento del mapa va en otro archivo
                cy.get('.title-element.pl-2.svelte-ybihii').contains('Hilux Cabina Doble').click()
                cy.contains('Elegí un concesionario').click()
              })
            

        })


    })

    describe('Botón a inventario Y redireccionamiento',()=>{

        

        it('Clickea el botón', () =>{
            cy.visit('https://rn9-oem-test.simplitec.io/')
            cy.get('#svelte > div.flex.flex-col.min-h-screen > div > div.hero.bg-gray-500.text-white.svelte-1qoilg8 > div > div > div.mt-4gr.btn-primary').click()
        })

        it('Redirecciona a inventario', ()=>{
             cy.url().should('eq', 'https://rn9-oem-test.simplitec.io/inventory')
        })
        
    })



    describe('Footer',()=>{
        //Cypress no puede probar que se abra otra ventana

        beforeEach(()=> {          //vuelve a la página base antes de cada it para poder volver a landing y desde ahí ejecutar
            cy.visit('https://rn9-oem-test.simplitec.io/') 
            })
        

        it('Clickea en Sitio web principal', () =>{
            cy.contains('Sitio web principal').click()
        })

        it('Clickea en Políticas de cookies Y redirecciona', () =>{
            cy.contains('Políticas de cookies').click()
            cy.url().should('eq', 'https://rn9-oem-test.simplitec.io/cookie-policy')
        })

        it('Clickea en Defensa de las y los consumidores. Para reclamos ingrese aqui.', () =>{
            cy.contains('Defensa de las y los consumidores. Para reclamos ingrese aqui.').click()
        })

        it('Clickea en Términos de servicio y redirecciona', () =>{
            cy.contains('Términos de servicio').click()
            cy.url().should('eq', 'https://rn9-oem-test.simplitec.io/terms-of-service')
        })

        it('Clickea en Garantía', () =>{
            cy.contains('Garantía').click()
        })

        it('Clickea en © 2021 SimpliTEC is a registered trademark', () =>{
            cy.contains('© 2021 SimpliTEC is a registered trademark').click()
        })



    })


})

