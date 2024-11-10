CRUD avec Prisma et MySQL
Ce projet est une application CRUD (Create, Read, Update, Delete) utilisant **Prisma** comme ORM et **MySQL** comme base de données. 
L'application permet de gérer des données de manière efficace en utilisant des opérations CRUD basiques.
## Technologies Utilisées
- **Node.js** : Environnement d'exécution pour le développement backend.
- **Prisma** : ORM (Object-Relational Mapping) moderne pour simplifier l'interaction avec la base de données.
- **MySQL** : Système de gestion de base de données relationnelle pour stocker les informations.
- **Express** : Framework web léger pour créer une API REST.
## Installation et Configuration
1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/votre-utilisateur/crud-prisma-mysql.git
   cd crud-prisma-mysql
   ```
2. **Installer les dépendances** :
   ```bash
   npm install
   ```
3. **Configurer la base de données** :
   - Assurez-vous que MySQL est installé et en cours d'exécution sur votre machine.
   - Créez une base de données pour le projet.
   - Dans le fichier `.env`, configurez la variable `DATABASE_URL` avec les informations de connexion :
     ```dotenv
     DATABASE_URL="mysql://utilisateur:motdepasse@localhost:3306/nom_de_la_base"
     ```
4. **Initialiser Prisma** :
   - Générer le client Prisma et synchroniser le schéma :
     ```bash
     npx prisma generate
     npx prisma db push
     ```
5. **Lancer le serveur** :
   ```bash
   npm start
   ```
## Structure du Projet
- **/prisma/schema.prisma** : Définit le modèle de données utilisé par Prisma pour interagir avec MySQL.
- **/src/routes** : Contient les routes API pour chaque opération CRUD.
- **/src/controllers** : Logique de traitement pour chaque route CRUD.
## Utilisation de l'API
L'API dispose de plusieurs endpoints pour effectuer des opérations CRUD sur les données.
| Méthode | Endpoint           | Description                      |
| ------- | ------------------- | -------------------------------- |
| POST    | `/api/items`        | Créer un nouvel élément          |
| GET     | `/api/items`        | Récupérer la liste des éléments  |
| GET     | `/api/items/:id`    | Récupérer un élément spécifique  |
| PUT     | `/api/items/:id`    | Mettre à jour un élément         |
| DELETE  | `/api/items/:id`    | Supprimer un élément             |
### Exemples de Requêtes
- **Créer un élément** :
  ```http
  POST /api/items
  Content-Type: application/json
  {
    "name": "Nom de l'élément",
    "description": "Description de l'élément"
  }
  ```
- **Mettre à jour un élément** :
  ```http
  PUT /api/items/1
  Content-Type: application/json
  {
    "name": "Nom mis à jour",
    "description": "Description mise à jour"
  }
  ```
## Développement et Migration de Schéma
Prisma facilite la gestion des migrations de base de données :
- **Créer une migration** :
  ```bash
  npx prisma migrate dev --name nom_de_la_migration
  ```
## Contribution
Les contributions sont les bienvenues. Merci de créer une pull request ou d'ouvrir une issue pour toute suggestion.
