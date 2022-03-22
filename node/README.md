# Node.js

## Links
* Node: https://nodejs.org/
* Node Version Manager: https://github.com/nvm-sh/nvm
* Semver: https://semver.org/lang/de/
* Lizenzauswahl: https://choosealicense.com/
* Package.json fields: https://docs.npmjs.com/cli/v7/configuring-npm/package-json
* NPM Scripts: https://docs.npmjs.com/cli/v8/using-npm/scripts/
* Nodemon: https://nodemon.io/
* npmtrends: https://www.npmtrends.com/

## Debugger

1. `node --inspect-brk index.js`
2. Browser (Chrome oder ein anderer V8-Browser) öffnen
3. `chrome://inspect`
4. Auf inspect bei Remote Target klicken
5. Wenn keine Datei sichtbar ist mit CTRL+P bzw. CMD+P => index.js suchen
6. Debugger auf der Kommandozeile mit CTRL+C beenden

# Modulsystem
Um das ECMAScript Modulsystem nutzen zu können müssen wir:

* `"type": "module"` in die package.json
* Dateiendung .mjs
* `--input-type=module` beim Aufruf der Applikation