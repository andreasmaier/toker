// An example configuration file
exports.config = {
    // The address of a running selenium server.
    seleniumServerJar: '../../../../node_modules/protractor/selenium/selenium-server-standalone-2.44.0.jar',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Spec patterns are relative to the configuration file location passed
    // to proractor (in this example conf.js).
    // They may include glob patterns.
    //specs: ['exampleSpec.js'],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    }
};