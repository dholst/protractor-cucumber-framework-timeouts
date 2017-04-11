let {defineSupportCode} = require('cucumber');

defineSupportCode(({setDefaultTimeout, Given}) => {
  setDefaultTimeout(20 * 1000);

  Given('something timesout', function() {
    return browser.sleep(10000).then(() => console.log('Waiting'));
  });
});
