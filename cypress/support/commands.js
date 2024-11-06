// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// Add the placeBid function as a custom command
// Cypress.Commands.add('placeBid', (targetCompanyName) => {
//     cy.get('section.bid-section-ipolist kendo-grid .k-table-tbody tr').each(($row) => {
//       cy.wait(3000)
//      // cy.wrap($row).find('td:nth-child(2) div label span').invoke('text').then((companyName) => {
//         //cy.wrap($row).find('/html/body/app-root/app-layout/app-maincontent/app-ipolist/section[1]/div/div[3]/div/kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr[1]/td[2]/div/label/span').invoke('text').then((companyName) => {
//        //  companyName = companyName.trim();
//         cy.wrap($row).find('td:nth-child(2) span.bid-right').invoke('text').then((smeTag) => {
//           smeTag = smeTag.trim();
//           cy.log('Checking company: ' + companyName);
          
//           if (smeTag === '( SME )') {
//             cy.log(companyName + ' is an SME. Skipping bid.');
//             return;
//           }
  
//           const bidButtonXPath = `//tr[normalize-space(td[2]/div/label/span[contains(text(), '${companyName}')])]/td[last()]/a[contains(@class, 'bid-btn')]`;
//           cy.log('Constructed XPath: ' + bidButtonXPath);
          
//           cy.xpath(bidButtonXPath).then(($btn) => {
//             if ($btn.length > 0) {
//               cy.wrap($btn).click();
//               cy.log('Clicked on Bid button for: ' + companyName);
//               return false;
//             } else {
//               cy.log('No Bid button found for: ' + companyName);
//             }
//           });
//         });
//       });
//     });
//   });
  
