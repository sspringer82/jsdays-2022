# Daten abfragen

Bringt die Applikation so zum laufen, dass sie alle Datensätze des Models ausliefert.

Erstellt eine Route, um nur einen Datensatz auszuliefern

z.B. /users/1 => gibt den User mit der Id 1 zurück

* Route: .get('/:id', (req, res) => ...)
* Zugriff: req.params.id 