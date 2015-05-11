var pg = require('pg');

// Perform a series of queries on a Postgres server
module.exports = function(connStr, queries, callback) {
  pg.connect(connStr, function(error, client, done) {
    if(error) return callback(error);

    var performNext = function(index) {
      if(index < queries.length) {
        client.query(queries[index], function(error, result) {
          if(error) {
            done();
            return callback(error);
          }
          performNext(++index);
        });
      } else {
        done();
        callback();
      }
    }

    performNext(0);
  });
}
