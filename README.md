# README

NE SURTOUT PAS AJOUTER DES FEATURES OU DES ROUTES (elles sont déjà presentent. demandez avant de le faire !)

Vous devez justes créer des actions (et des components) si nécessaire. Pour connecter à l'API il exite l'import 'helper/api' il contient API et Auth.

API comme ça :

```js
import { API } from '../../../helper/api';

API.get('/events').then(...);
API.post('/events').then(...);
API.put('/events/1'), { title: "toto" ...(etc }).then(...);
API.delete('/events/1').then(...);
```

Auth comme ceci :
```js
import { Auth } from '../../../helper/api';

Auth.user(email, password).then(...);
```

##AUTHENTIFICATION

username = toto@gmail.com
password = password

IL Y A la vérification du token pour l'authentification (login dans le front)
AUCUNE REQUETE NE SERA VALIDER SANS TOKEN (qui est par la suite enregistrer dans le navigateur)

SI BESOIN DE l'ENLEVER désactiver les middlewares dans api-fake !

```bash
json-server json-server.json --watch db.json
```