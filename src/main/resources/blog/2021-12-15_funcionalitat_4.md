---
writer: examen
coder: examen
---
# Funcionalitat 4

Escriu aquí el post de la funcionalitat descrita a l'enunciat.
No canviïs el nom del fitxer ni el títol del post.

## Upgradejar el Wood depot del vaixell
###Si el test comença de 0 asssegurar que existeix

 * Go to the next player "leonard"
 <!-- SNAPSHOT status=200 -->
 * Given that the "leonard" "city" "Capital" has resource "gold" count 5.
 * Go to the "leonard" "city" "Capital".
 * Go to the contained "building" "Builder".
 * Build the "Wood depot". 
 <!-- SNAPSHOT status=200 -->

### Posar un cost: ex, 5 wood

 * The resource "gold" count should be 0.
 * Given that the "leonard" "city" "Capital" has resource "wood" count 5. 
   
### Afegir el leveledComponent al Wood depot

 * Go to the contained "building" "Wood depot".
 * The _level_ number should be 1. 
   
### Crear el WoodDepotUpgrader

 * The resource modifier for "wood" maximum should be 5.
 * Upgrade the level.
 <!-- SNAPSHOT status=200 -->
 * The _level_ number should be 2.
 * The resource modifier for "wood" maximum should be 10.
 * Go back to the previous screen.
 * The resource "wood" maximum should be 15.
 * The resource "wood" count should be 0.

