const { should, expect } = require("chai");
const { describe } = require("mocha");

describe('Inventario OEM', ()=>{


    it.skip('Visita inventario OEM',()=>{
        cy.visit('https://rn9-oem-test.simplitec.io/inventory')
        cy.url().should('eq', 'https://rn9-oem-test.simplitec.io/inventory')
    })

    describe.skip('Navegador',()=>{


        describe('Clickea el logo Y redirecciona a inventario', ()=> {

            it('Clickea logo', () =>{
            cy.get('#svelte > div.flex.flex-col.min-h-screen > header > div:nth-child(1) > div').click()
          })

            it('Redirecciona a inventario', ()=>{
                cy.url().should('eq', 'https://rn9-oem-test.simplitec.io/inventory')
           })

        })


        describe('Clickea Vehículos Y redirecciona a inventario', ()=> {

            it('Clickea Vehículos', () =>{
            cy.get('.cursor-pointer').contains('Vehículos').click()
          })

            it('Redirecciona a inventario', ()=>{
                cy.url().should('eq', 'https://rn9-oem-test.simplitec.io/inventory')
           })

        })



        describe('Buscador de vehículos',() => {

            it('Ingresa información en el buscador reiteradas veces', () =>{
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


//Acá termina el navegador y empieza filtros

    describe('Filtros',()=>{ //ESTO NO FUNCIONA

        it('Recargo la página',()=>{
            cy.visit('https://rn9-oem-test.simplitec.io/inventory')
        })



            it('Ordenar por: precio más bajo / alto',()=>{         

                cy.get('.relative.inline-block.text-left').click()
                cy.contains('Precio más alto').click()   

            //Después de clickear el filtrado, selecciono de card 1 y 2 sus respectivos precios para comparar que el filtro funcionó

            //MAYOR A MENOR
                cy.get('.car-price.svelte-j2rv8n.bigCard').eq(0).invoke('text')
                .then((text)=>{ 
                    var fullText = text;
                    var pattern = /[0-9]+/g;
                    var precio1 = fullText.match(pattern);
                    precio1= precio1[0] + precio1[1] + precio1[2]; //acá los uno (aparecen como array)
                    console.log(precio1); //chequeo que esté unido
                    precio1=parseInt(precio1);

                        cy.get('.car-price.svelte-j2rv8n.bigCard').eq(1).invoke('text')
                    .then((text)=>{ 
                        var fullText = text;
                        var pattern = /[0-9]+/g;
                        var precio2 = fullText.match(pattern);
                        precio2= precio2[0] + precio2[1] + precio2[2]; //acá los uno (aparecen como array)
                        console.log(precio2); //chequeo que esté unido
                        precio2=parseInt(precio2);
                    
                        cy.wrap(precio1).should('be.greaterThan',precio2 ) //Comparo que sea mayor

                    })
                    
                
                    
                })

                

    

            //MENOR A MAYOR
                
                cy.get('.relative.inline-block.text-left').click()  
                cy.contains('Precio más bajo').click() 

                cy.get('.car-price.svelte-j2rv8n.bigCard').eq(0).invoke('text')
                .then((text)=>{ 
                    var fullText = text;
                    var pattern = /[0-9]+/g;
                    var precio1 = fullText.match(pattern);
                    precio1= precio1[0] + precio1[1] + precio1[2]; //acá los uno (aparecen como array)
                    console.log(precio1); //chequeo que esté unido
                    precio1=parseInt(precio1);

                        cy.get('.car-price.svelte-j2rv8n.bigCard').eq(1).invoke('text')
                    .then((text)=>{ 
                        var fullText = text;
                        var pattern = /[0-9]+/g;
                        var precio2 = fullText.match(pattern);
                        precio2= precio2[0] + precio2[1] + precio2[2]; //acá los uno (aparecen como array)
                        console.log(precio2); //chequeo que esté unido
                        precio2=parseInt(precio2);
                    
                        cy.wrap(precio1).should('be.lessThan',precio2 ) //Comparo que sea MENOR

                    })
                    
                
                    
                })

            


        })



        it.skip('Barra de precio: Precio sugerido al público', ()=>{
            cy.get('$accordion-body').parent().click()
        })

        it.skip('Filtro: Carrocería',()=>{
            cy.get('cursor-pointer.svelte-123ma4c').contains('Auto').check()
            
        })

        it.skip('Otros filtros',()=>{
            cy.get('cursor-pointer.svelte-123ma4c').contains('Auto').check()
            
        })

        it.skip('Reiniciar filtros',()=>{
            cy.get('cursor-pointer.svelte-123ma4c').contains('Auto').check()
            
        })

    })

    //FOOTER

    describe.skip('Footer',()=>{
        //Cypress no puede probar que se abra otra ventana

        beforeEach(()=> {          //vuelve a la página base antes de cada it para poder volver a landing y desde ahí ejecutar
            cy.visit('https://rn9-oem-test.simplitec.io/inventory') 
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


