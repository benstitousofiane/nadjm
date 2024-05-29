# najm ☆
Quran interface / Interface Coran (Execution du programme, voir tout en bas)

30/05/2023 nouveautés :

- Page principale : choisissez une sourate depuis la page principale

![image](https://github.com/benstitousofiane/najm/assets/129552238/0fe1f9cb-928c-485d-aa5e-c05ddc648caa)

- URL : on peut naviguer entre les différente sourates via l'URL, exemple : /2 pour la sourate n°2

![image](https://github.com/benstitousofiane/najm/assets/129552238/bc14ab76-3c25-4fee-a627-9d6d72bfdea1)


- Animation : Chargement des sourates avec une étoile qui tourne

![image](https://github.com/benstitousofiane/najm/assets/129552238/6793f897-61c2-4b3e-b55e-56173070cc81)

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


Dépendences Node.js : express, ejs

# Executer le programme :

```git clone https://github.com/benstitousofiane/najm```

```cd najm```

```npm install express ejs --save```

```node index.js```
