var name = "@brysonandrew/service-worker";
var version = "6.24.4";
var description = "Service Worker library";
var types = "/index.d.ts";
var main = "./index.ts";
var module = "./index.ts";
var exports = {
	".": {
		require: "./index.ts",
		"import": "./index.ts",
		"default": "./index.ts"
	},
	"./init": "./init.ts",
	"./main": "./main.ts"
};
var scripts = {
	format: "prettier .",
	lint: "tsc --build . & eslint . --fix --ext ts,tsx",
	test: "echo \"Error: no test specified\" && exit 1"
};
var author = "Andrew Bryson <andrewbryson12@gmail.com>";
var license = "MIT";
var repository = {
	type: "git",
	url: "git+https://github.com/brysonandrew/brysona.dev.git"
};
var sideEffects = false;
var keywords = [
	"react",
	"typescript"
];
var peerDependencies = {
	"@brysonandrew/config-types": "*",
	"@brysonandrew/media": "*"
};
var pkg = {
	name: name,
	version: version,
	description: description,
	types: types,
	main: main,
	module: module,
	exports: exports,
	scripts: scripts,
	author: author,
	license: license,
	repository: repository,
	sideEffects: sideEffects,
	keywords: keywords,
	peerDependencies: peerDependencies
};

const VERSION_NUMBER = pkg.version;
const CACHE_NAME = `v${VERSION_NUMBER}::${pkg.name}`;
const resolveCache = async () => caches.open(CACHE_NAME);
const matchRequest = async (cache, request) => cache.match(request);
const putRequest = async (cache, request, response) => request.method === 'GET'
    ? cache.put(request, response)
    : null;
const resolveRandomMedia = (records) => {
    const count = records.length;
    const indicies = [];
    const requiredCount = Math.min(count, 8);
    while (indicies.length < requiredCount) {
        const next = ~~(count * Math.random());
        if (!indicies.includes(next)) {
            indicies.push(next);
        }
    }
    const nextRecords = indicies.map((index) => records[index]);
    return nextRecords;
};
const sendMessage = async (message) => {
    const recipients = await self.clients.matchAll();
    recipients.forEach((client) => {
        client.postMessage(message);
    });
};
const precache = async (paths) => {
    const cache = await resolveCache();
    await cache.addAll(paths);
};
self.addEventListener('message', async (event) => {
    const data = event.data;
    if (data.type === 'init-screens') {
        const records = resolveRandomMedia(data.records);
        sendMessage({
            type: 'init-screens',
            records,
            from: 'MESSAGE',
        });
    }
    if (data.type === 'precache') {
        const paths = data.entries;
        await precache(paths);
    }
});
self.addEventListener('install', (event) => {
    const installHandlers = async () => {
        try {
            await precache(['/favicon.ico']);
        }
        catch (error) {
            console.error(error);
        }
    };
    event.waitUntil(installHandlers());
});
self.addEventListener('activate', (event) => {
    const deleteExpiredCaches = async () => {
        const names = await caches.keys();
        const deleteHandlers = names.reduce((a, cacheName) => {
            if (cacheName !== CACHE_NAME) {
                a.push(caches.delete(cacheName));
            }
            return a;
        }, []);
        await Promise.all(deleteHandlers);
    };
    const activateHandlers = async () => {
        try {
            await deleteExpiredCaches();
            self.clients.claim();
        }
        catch (error) {
            console.error(error);
        }
    };
    event.waitUntil(activateHandlers());
});
self.addEventListener('fetch', (event) => {
    const request = event.request;
    const acceptHeaders = request.headers.get('Accept');
    const isHtml = acceptHeaders?.includes('text/html') &&
        request.url.startsWith(location.origin);
    const cacheCopy = async () => {
        const cache = await resolveCache();
        let response = await fetch(request, {
            cache: 'no-store',
        });
        try {
            const copy = response.clone();
            putRequest(cache, request, copy);
        }
        catch (error) {
            const cachedResponse = await matchRequest(cache, request);
            if (cachedResponse) {
                response = cachedResponse;
            }
        }
        finally {
            return response;
        }
    };
    const staleWhileRevalidate = async () => {
        const cache = await resolveCache();
        const cachedResponse = await matchRequest(cache, request);
        const networkResponsePromise = fetch(request, {
            cache: 'no-store',
        });
        const updateCache = async () => {
            const networkResponse = await networkResponsePromise;
            const copy = networkResponse.clone();
            putRequest(cache, request, copy);
        };
        event.waitUntil(updateCache());
        return cachedResponse || networkResponsePromise;
    };
    const messageHandlers = async () => {
        if (isHtml) {
            return cacheCopy();
        }
        return staleWhileRevalidate();
    };
    try {
        event.respondWith(messageHandlers());
    }
    catch (error) {
        console.error(error);
    }
});
