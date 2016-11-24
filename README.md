# idealista-api-client

This is an example NodeJS client for the idealista.com API, done for a friendly internal competition.

It uses SuperAgent, which does all the hard work :)

DISCLAIMER
==========

This project requires a modern version of node (tested with current 6.6). It may work on older versions by using --harmony

It may not. I haven't tested it with older versions.

**Also: You need a real idealista API key to use this. The one included doesn't really work**. You can register and request a key [here](http://developers.idealista.com/access-request).


USAGE
=====

Run with:

```
./benchmark.sh
```

or

```
benchmark.bat
```

or

```
npm run-script benchmark
```

Benchmark queries are declared in conf/conf.js

MANUAL QUERIES
==============

You can run manual queries by setting filters in the command line. An example is given in `npm script-run main`. It works as follows:

```
node src/index.js --locationId=0-EU-ES-28-07 --propertyType=homes --operation=sale
```

NAMED QUERIES
=============

You can run named queries by setting filters in conf/conf.js and then using the argument `namedquery`, as:

```
node src/index.js --namedquery=madrid
```

STATUS
======

Not all filters are implemented. This is just a small example to get started.

Also, there aren't really any tests. I know, I know. I care. A lot. I promise. But there aren't tests right now.

