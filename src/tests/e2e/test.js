describe('thready demo', function() {

    // Redirect to localhost
    before(browser => browser.navigateTo('http://localhost:8080/'));

    // Test following steps
    test('demo test thready', function(browser) {
        browser
            .waitForElementVisible('body')
            .assert.titleContains('forumvue')
            .assert.visible('button.btn.create.btn-primary')
            .click('button.btn.create.btn-primary')
            .assert.visible('input#title-input.form-control')
            .assert.visible('input#content-input.form-control')
            .assert.visible('button.btn.btn-primary')
            .setValue('input#title-input.form-control', 'Nightwatch Test')
            .setValue('input#content-input.form-control', 'Dies ist ein nightwatch Test')
    });
});