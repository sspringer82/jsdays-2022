# Localstorage

Baut das Model (model.js) so um, dass die Daten im LocalStorage vorgehalten werden.

Nutzt die folgenden Methoden:

- localstorate.setItem
- localstorate.getItem
- localstorate.removeItem
- Item (Objekt) schreiben: `localStorage.setItem(2, JSON.stringify({name: 'Klaus'}));`
- Alle Items auslesen: `Object.values(localStorage).map(element => JSON.parse(element))`