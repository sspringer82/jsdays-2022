# Mathetrainer

Erzeuge eine Funktion `getTask`, die Rechenaufgaben stellt. Der Rückgabewert dieser Funkion sieht wie folgt aus:

```
{
    op1: 3
    op2: 4
    result: 7
}
```

Die Funktion erhält als Parameter den Schwierigkeitsgrad:
* 1: beide Operanden sind einstellig
* 2: der erste Operand ist einstellig, der zweite zweistellig
* 3: beide Operanden sind zweistellig

Die Funktion `getTask` liegt in einer eigenen Datei.

Erzeuge 4 Aufgaben und lasse sie über Readline beantworen.

`Math.floor(Math.random() * 10)`=> Zufallszahl von 0 - 9