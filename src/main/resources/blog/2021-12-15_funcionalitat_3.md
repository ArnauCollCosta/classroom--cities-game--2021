---
writer: examen
coder: examen
---
# Funcionalitat 3

Escriu aquí el post de la funcionalitat descrita a l'enunciat.
No canviïs el nom del fitxer ni el títol del post.

Posar l’emoji patata 🥔 als llistats d’entitats on hi ha vaixells amb capacitat d’enmagatzemar patates

## Posar l’emoji patata 🥔
### Inicialitzar jugador

 * Go to the next player "leonard"
 <!-- SNAPSHOT status=200 -->

### Donar materials

 * Given that the "leonard" "city" "Capital" has resource "wood" count 4.
 * Given that the "leonard" "city" "Capital" has resource "potato" count 5.

### Als llistats d’entitats on hi ha vaixells amb capacitat d’enmagatzemar patates

 * The "potato" emoji is not in the "leonard" "city" "Capital".
 * The "potato" emoji is not in the "leonard" "ship" "Beagle".
 * Go to the "leonard" "ship" "Beagle"
 * The resource "potato" maximum should be 0.
 * Go to the contained "deck" "Builder".
 * Build the "Potato store".
 <!-- SNAPSHOT status=200 -->

### Comprovar que ha funcionat

 * There should contain the "deck" "Potato store".
 * The resource "wood" count should be 0.
 * The resource "potato" maximum should be 5.
 * Go to the Welcome screen
 * Go to the next player "leonard"
 <!-- SNAPSHOT status=200 -->
 * The "potato" emoji is not in the "leonard" "city" "Capital".
 * The "potato" emoji is in the "leonard" "ship" "Beagle".
