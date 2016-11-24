const request = require('superagent');
const Throttle = require('superagent-throttle');

const tokenUrl = 'https://www.idealista.ag/api/oauth/token';
const apiUrl = 'https://www.idealista.ag/api/3.5/es/search';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

let throttle = new Throttle({
  active: true,
  concurrent: 50,
  rate: 5000,
  ratePer: 100
});

const connect = (apiKey, secret, callback) => {
  request
    .post(tokenUrl)
    .set('grant_type', 'client_credentials')
    .set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8')
    .set('Authorization', 'Basic ' + new Buffer(apiKey + ":" + secret).toString("base64"))
    .accept('application/json')
    .query({grant_type: 'client_credentials' })
    .query({scope: 'read' })
    .end((err, res) => {
      if(err || !res.ok) {
        throw new Error(err + " - Error connecting - status: " + res.status + " body: " + res.body);
      } else {
        callback(res.body.access_token);
      }
    });
};

const search = (token, filters, callback) => {

  request
    .post(apiUrl)
    .use(throttle.plugin())
    .set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8')
    .set('Authorization', 'Bearer' + token)
    .type('form')
    .send(filters)
    .end((err, res) => {
      if(err || !res.ok) {
        throw new Error(err + " - Query Error - status: " + res.status ); //+ " body: " + res.body);
      } else {
        callback(res.body);
      }
    });
};

module.exports = {
  connect: connect,
  search: search
};
