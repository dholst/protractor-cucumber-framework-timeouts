module.exports.config = {
  framework: 'custom',
  frameworkPath: 'node_modules/protractor-cucumber-framework',

  cucumberOpts: {
    require: ['features/step-definitions/**/*.js'],
    strict: true
  },

  capabilities: {
    browserName: 'chrome',
    specs: 'features/**/*.feature'
  }
};
