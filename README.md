## node-postgres simple load test

This test provides a structure for running queries repeatedly while measuring the
application's memory usage as well as measuring response times on an array of live
queries (provided by [`pg-live-select` package](https://github.com/numtel/pg-live-select)).

A reading of `index.js` is recommended to understand the operations performed. The following commands can be used to get the application running on your machine:

```bash
$ npm install

# Configure database connection string (CONN_STR)
$ vim index.js

# Start the application with the following command: (Output file is optional)
$ node index.js out.json
```

Press `ctrl+c` to exit and display memory usage graphs.

If an output file is specified, it may be viewed using `index.html`.

### License

MIT
