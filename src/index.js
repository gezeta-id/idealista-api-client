const apiClient = require('./apiClient.js');
const conf = require('../conf/conf.js');
const benchmark = require('./benchmark.js');
const filtersFrom = require('./filters.js');
const cliargs = require('yargs').argv;

const apiKey = conf.api.key;
const secret = conf.api.secret;

const search = (key, secret, filters, callback) => {
  console.log("Obtaining token.\n");
  let onConnect = (token) => {
    console.log("Token Obtained.");
    apiClient.search(token, filters, callback);
  };
  apiClient.connect(key, secret, onConnect);
}

if (cliargs.mode == 'benchmark') {
  const queries = conf.benchmark.queries;
  benchmark(apiKey, secret, queries);
} else if (cliargs.namedquery) {
  if (!conf.manual[cliargs.namedquery]) {
    console.log("No query named '" + cliargs.namedquery +"' found. Please check conf/conf.js to define named queries");
  } else {
    search(apiKey, secret, conf.manual[cliargs.namedquery], (result) => {
      console.log("Results from the query:\n");
      console.log(result);
    });
  }
} else {
  try {
    var filters = filtersFrom(cliargs);
  } catch(e) {
    console.log("Please check the README.");
    process.exit(0);
  }

  search(apiKey, secret, filters, (result) => {
    console.log("Results from the query:\n");
    console.log(result);
  });
}

