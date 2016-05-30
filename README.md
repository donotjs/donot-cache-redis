donot-cache-redis
=================

[![Build Status](https://travis-ci.org/donotjs/donot-cache-redis.svg?branch=master)](https://travis-ci.org/donotjs/donot-cache-redis)

Redis cache engine for [donot](https://github.com/donotjs/donot).

# How to Use

Usage:

    redisCache()
    redisCache(port)
    redisCache(port, host)

`port` defaults to 6379 and host to `127.0.0.1`.

## Example

    var http = require('http'),
        donot = require('donot'),
        redisCache = require('donot-cache-redis');

    var server = http.createServer(donot({
        cache: redisCache(6379, '127.0.0.1')
    }));

    server.listen(8000);

> Remark. It does not make sense to use caching without template engine plug-ins - as only template renderings are cached. See [donot](https://github.com/donotjs/donot) for available template plug-ins.

# License

MIT
