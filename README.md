donot-cache-redis
=================

[![Build Status](https://travis-ci.org/donotjs/donot-cache-redis.svg?branch=master)](https://travis-ci.org/donotjs/donot-cache-redis)

Redis cache engine for [donot](https://github.com/donotjs/donot).

# How to Use

Usage:

    new RedisCache()
    new RedisCache(port)
    new RedisCache(port, host)

`port` defaults to 6379 and host to `127.0.0.1`.

## Example

    var http = require('http'),
        donot = require('donot'),
        RedisCache = require('donot-cache-redis');

    var server = http.createServer(donot(__dirname + '/public', {
        cache: new RedisCache(6379, '127.0.0.1')
    }));

    server.listen(8000);

> Remark. It does not make sense to use caching without one or more engine plug-ins - as only an engine's output is cached. See [donot](https://github.com/donotjs/donot) for available engine plug-ins.

# License

MIT
