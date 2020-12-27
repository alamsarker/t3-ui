describe('Play Tic Tac Toe', function() {
  before(browser => browser.url(browser.launchUrl));
    test('Test T3 UI', function (browser) {
      browser
        .waitForElementVisible('body')
        .assert.titleContains('Tic Tac Toe')
				.assert.containsText('#nw-next-player', 'Next Player: X')
				.click('#nw-box-0', function(){
					this.assert.containsText('#nw-next-player', 'Next Player: O')
				})
				.click('#nw-box-3', function(){
					this.assert.containsText('#nw-next-player', 'Next Player: X')
				})
				.click('#nw-box-1', function(){
					this.assert.containsText('#nw-next-player', 'Next Player: O')
				})
				.click('#nw-box-4', function(){
					this.assert.containsText('#nw-next-player', 'Next Player: X')
				})
				.click('#nw-box-2', function(){
					this.assert.containsText('#nw-result', 'Winner is: X')
				})				
    });
  
    after(browser => browser.end());
});
  