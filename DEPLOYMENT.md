# Configuration d'hébergement statique pour MyWai

Ce projet génère maintenant des fichiers HTML statiques pour chaque page, facilitant l'hébergement sur différentes plateformes.

## Fichiers générés

### Pages HTML
- `index.html` - Page d'accueil
- `cgu.html` - Conditions générales d'utilisation
- `mentions-legales.html` - Mentions légales
- `404.html` - Page d'erreur 404

### Fichiers de configuration
- `_redirects` - Configuration pour Netlify
- `vercel.json` - Configuration pour Vercel
- `.htaccess` - Configuration pour Apache

## Scripts de build

### Build standard
```bash
npm run build
```

### Test du déploiement
```bash
npm run test:deployment
```

## Déploiement

### Netlify
1. Télécharger le contenu du dossier `dist/`
2. Le fichier `_redirects` sera automatiquement pris en compte

### Vercel
1. Télécharger le contenu du dossier `dist/`
2. Le fichier `vercel.json` sera automatiquement pris en compte

### Apache (hébergement traditionnel)
1. Télécharger le contenu du dossier `dist/`
2. Le fichier `.htaccess` sera automatiquement pris en compte

### Autres plateformes
Pour d'autres plateformes d'hébergement, vous pouvez configurer les redirections manuellement :
- `/cgu` → `/cgu.html`
- `/mentions-legales` → `/mentions-legales.html`
- Toutes les autres routes → `/index.html`

## Comment ça fonctionne

1. **Pages dédiées** : Chaque page a son propre fichier HTML avec des métadonnées SEO optimisées
2. **SPA Routing** : Les fichiers HTML chargent la même application React, mais avec un script de redirection qui ajuste l'URL
3. **Fallback** : Toutes les routes non reconnues sont redirigées vers `index.html` pour préserver le fonctionnement SPA

## Avantages

- ✅ SEO optimisé avec des métadonnées spécifiques à chaque page
- ✅ Compatible avec tous les services d'hébergement statique
- ✅ Préserve le fonctionnement de l'application React
- ✅ URLs propres sans `.html`
- ✅ Gestion des erreurs 404

## Structure des URLs

- `https://monsite.com/` → Page d'accueil
- `https://monsite.com/cgu` → Conditions générales
- `https://monsite.com/mentions-legales` → Mentions légales
- `https://monsite.com/404` → Page d'erreur
