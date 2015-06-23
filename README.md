smart-static-redis-cache
=====================

[![Build Status](https://travis-ci.org/trenskow/smart-static-redis-cache.svg?branch=master)](https://travis-ci.org/trenskow/smart-static-redis-cache)

File system cache engine for [smart-static](https://github.com/trenskow/smart-static.js).

# How to Use

Usage:

    redisCache()
    redisCache(port)
    redisCache(port, host)

`port` defaults to 6379 and host to `127.0.0.1`.

## Example

    var http = require('http');

    var smartStatic = require('smart-static');
    var redisCache = require('smart-static-redis-cache');

    var server = http.createServer(smartStatic(serveDir, {
        cache: redisCache(6379, '127.0.0.1')
    ));

    server.listen(8000);

> Remark. It does not make sense to use caching without template engine plug-ins - as only template renderings are cached. See [smart-static](https://github.com/trenskow/smart-static) for available template plug-ins.

# License

MIT
