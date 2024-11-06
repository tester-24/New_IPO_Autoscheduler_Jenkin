describe('Time-sensitive notification test', () => {
    it('should display notification after 1 hour', () => {
      // Set the clock to a specific date and time
      const now = new Date('2024-07-22T02:45:00Z');
      cy.clock(now);
  
      // Visit the page or perform actions that trigger time-dependent logic
      cy.visit('www.google.com');
  
      // Perform an action that triggers a notification after 1 hour
      cy.get('body').click()
  
      // Advance the clock by 1 hour (3600000 milliseconds)
      cy.tick(3600000);
  
      // Assert that the notification appears
      //cy.get('.notification').should('exist');
  
      // Restore the original system clock
      cy.clock().then(clock => {
        clock.restore();
      });
    });
  });
  