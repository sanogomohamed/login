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