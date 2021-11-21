# FrameworkMediNicolasGuillaume
Membres : Medi DEMIRDELEN Guillaume GOUY Nicolas BACA  


#Introduction
Notre framework est destiné à implémenter l'architecture "Pipes-filters" facilement.  
Il repose sur deux technlogies : nodeJs ainsi que JSON.  
Dans le but de garantir une configuration de projet cohérente, il intègre l'outil de lignes de commandes ppft.  

#Getting started
Le développeur a deux tâches à réaliser afin de monter son application.
Définir des filtres dans le dossier /filters.
Définir l'exécution de ces derniers dans le fichier config-filters.json 


Prenons l'exemple d'un développeur voulant automatiser la conversion d'une ressource de la lowerCase à la higherCase.  

Première étape : créer le projet:dans le trerminal:  
ppft new 

Vous allez devoir créer des fichiers:  
ppft add_filter

Définisser 3 filtres , un prenant en paramètre un fichier dans votre système.Un second convertissant la ressources puis un troisième définissant la destination de la ressources.  
![image](https://github.com/guillaume8080/FrameworkMediNicolasGuillaume/blob/main/ressourcesReadMe/read.png)  

![image](https://github.com/guillaume8080/FrameworkMediNicolasGuillaume/blob/main/ressourcesReadMe/set.png)  

![image](https://github.com/guillaume8080/FrameworkMediNicolasGuillaume/blob/main/ressourcesReadMe/writeFile.png)  



Rendez-vous dans le fichier de conf :  
config-filters.json   

Vous allez devoir définir l'enchaînement des filtres définis plus haut:  
![image](https://github.com/guillaume8080/FrameworkMediNicolasGuillaume/blob/main/ressourcesReadMe/write.js.png)

Vous n'avez plus qu'à lancer l'application :  
node app.js

#API

Les deux types de fichiers à définir reposent sur des nomenclatures particulières:  
Les filters.js sont des modules nodeJs devant retourner une fonction.Cela s'implémente de la façon suivante:  
![image](https://github.com/guillaume8080/FrameworkMediNicolasGuillaume/blob/main/ressourcesReadMe/retourFonction.png)  

Quant au fichier de conf config-filters.json, il repose sur le principe du document JSON : imbrication, etc...  
Il doit absolument contenir un attribut objet steps. Chaque step définit doit être composé d'un id,d'un attribut filter, d'un attribut de type arry params. Il peut éventuellement contenir un attribut params définissant la step suivante à exécuter.

#Errors

affichage : `Le dossier filters n'existe pas.`  &#8594;  Cela implique que le dossier contenant les filtres n'existe pas. Vous avez mal créé votre projet.  
affichage : `Le fichier ${config} n'existe pas` &#8594;  Cela implique que le fichier définissant les étapes à implémenter n'esxiste pas. Vous avez mal créé votre projet.  
affichage : `{votreFichier} n'est pas un fichier js` &#8594;  Cela implique l'extension de votre fichier n'est pas correcte. Relancer la commande  
affichage :  `{votreFichier} n'a pas de fonction`  &#8594;  Cela implique que le return de votre filter ne renvoie pas une fonction.  
affichage : `Le fichier config-filters.json n'a pas de steps`  &#8594; Cela implique que votre frameWork n'a rien à exécuter, définniser au moins un filtre.  
affichage : `Le filtre numéro ${step} n'a pas de nom filter` &#8594; Cela implique que votre fichier de conf est mal défini.  

#Tools :

La commande ppft fait guise de gestionnaire de projet. Voici les commandes afin de parémétrer votre application:  

![image](https://github.com/guillaume8080/FrameworkMediNicolasGuillaume/blob/main/ressourcesReadMe/ppft.png)  



