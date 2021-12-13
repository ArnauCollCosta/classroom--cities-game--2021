---
writer: examen
coder: examen
---
# Funcionalitat 5

Escriu aquí el post de la funcionalitat descrita a l'enunciat.
No canviïs el nom del fitxer ni el títol del post.

## Upgradejar el Potato Plantation de City
###Si el test comença de 0 asssegurar que existeix

 * Go to the next player "leonard"
 <!-- SNAPSHOT status=200 -->
 * Given that the "leonard" "city" "Capital" has resource "banana" count 5.
 * Go to the "leonard" "city" "Capital".
 * Go to the contained "building" "Builder".
 * Build the "Potato plantation". 
 <!-- SNAPSHOT status=200 -->

### Posar un cost: ex, 5 potato

 * The resource "banana" count should be 0.
 * Given that the "leonard" "city" "Capital" has resource "potato" count 5.
 * The resource "potato" round increment should be 1.
   
### Afegir el leveledComponent al Potato plantation

 * Go to the contained "building" "Potato plantation".
 * The _level_ number should be 1.
 * The resource modifier for "potato" round increment should be 1
   
### Crear el PotatoPlantationUpgrader

 * Upgrade the level.
 <!-- SNAPSHOT status=200 -->
 * The _level_ number should be 2.
 * The resource modifier for "potato" round increment should be 3
 * Go back to the previous screen.
 * The resource "potato" round increment should be 3.
 * The resource "potato" count should be 0.

