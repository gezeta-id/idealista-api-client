const apiClient = require('./apiClient.js');

const benchmark = (apiKey, secret, queries) => {
  console.log("Ready to Roll.\n");


  let counter = 0;
  let totalQueries = queries.reduce((t, q) => t + q.number, 0);

  let onResult = (result) => {
    counter++;
    if (!(counter % 50)) {
      console.log(counter + " queries run");
      // \t Last: " + result.elementList[0].propertyCode);
    }
    if (counter >= totalQueries) {
      console.log("All done: " + totalQueries + " queries run");
      process.exit(0);
    }
  };

  let onConnect = (token) => {
    console.log("Token Obtained. Now firing benchmark.");
    queries.forEach((query) => {
      for (var i=0; i<query.number; i++) {
        apiClient.search(token, query.filters, onResult);
      }
    });
  };

  apiClient.connect(apiKey, secret, onConnect);
};

module.exports = benchmark;
