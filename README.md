# najm ☆
Quran interface / Interface Coran

J'utilise l'API de quran.com pour récuperé les versets sous la forme de glyph : 

https://github.com/quran/quran.com-api


Et leurs police d'écriture pour transformer les glyphs en verset lisible : 

https://github.com/quran/quran.com-frontend-v2/tree/master/app/assets/fonts/quran_fonts/v2/woff2

Fonctions : getSurah(Numéro de la sourate), sert à obtenir toutes les pages de la sourate choisis avec son numéro.
Cette fonction est pour le moment disponible dans le fichier najm.js et doit être manipuler en changeant le code source.


Exemple de rendu avec la première page de la sourage 18 (Al-Kahf) :

![image](https://github.com/benstitousofiane/najm/assets/129552238/d36bf1fa-49e1-4198-9b46-98da3ce89a0f)


L'interface se repose principalement sur deux couleurs, une troisième est là pour de futures fonctionnalités, elle est pour le moment utiliser lorsque l'on surligne du text :

![image](https://github.com/benstitousofiane/najm/assets/129552238/792f352c-e1b8-4f66-b812-5ab2e70ddbbf)
