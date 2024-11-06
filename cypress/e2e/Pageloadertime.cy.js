/// <reference types="cypress"/> 
describe('IPO ',function(){


    it('checks image load times', () => {
        cy.window().then((win) => {
            const startTime = Date.now(); // Capture start time
            cy.visit('https://strike.jainam.in');
    
            // Wait for the page to load (adjust timeout as needed)
            const endTime = Date.now(); // Capture end time
            const loadTime = (endTime - startTime); // Calculate load time
            
            cy.log(`Home page load time: ${loadTime} seconds`);
            console.log(`Home page load time: ${loadTime} seconds`);
    
            // Optionally, log a warning if load time exceeds a threshold
            if (loadTime > 1) { // Adjust threshold as needed (2 seconds in this example)
                console.warn(`Home page load time exceeded threshold! (${loadTime}ms)`);
            }
    
 
    
      });
    })
})