# 📝 Guide de Publication - Blogue

Avec la nouvelle infrastructure Supabase, **tu n'as plus jamais besoin de toucher au code** pour publier un article. Le site a été conçu pour être "dynamique" : il va chercher le contenu directement dans ta base de données.

## Comment publier un nouvel article ?

Tout se passe sur ton interface [Supabase](https://supabase.com/dashboard).

1.  **Ouvre ton projet Supabase** et va dans l'onglet **Table Editor** (icône de tableau à gauche).
2.  Clique sur la table `blogues`.
3.  Clique sur le bouton **"Insert new row"** (Insérer une ligne).
4.  Remplis les champs suivants :

| Champ | Description | Exemple |
|-------|-------------|---------|
| `title` | Le titre de ton article | Comment j'ai lancé mon business |
| `slug` | L'URL de l'article (unique, sans espaces) | comment-j-ai-lance-mon-business |
| `description` | Un court résumé qui apparaît dans la liste | Découvrez les 3 étapes clés de mon lancement... |
| `published_at`| La date de publication | *Sélectionne la date du jour* |
| `image_url` | (Optionnel) Lien vers une image de couverture | https://mon-site.com/image.jpg |
| `content` | Le corps de ton article en **Markdown** | *Voir ci-dessous* |

5.  Clique sur **Save**.

🚀 **C'est tout !** Ton article est instantanément visible sur la page `/blogues`.

---

## ✍️ Rédiger en Markdown (Content)

Le site comprend désormais le format Markdown, exactement comme sur Notion ou Discord.
Tu peux copier-coller directement ton texte Markdown dans le champ `content`.

### Anti-sèche Markdown :

- **Titres** : `# Grand Titre`, `## Sous-titre`, `### Petit titre`
- **Gras** : `**texte en gras**`
- **Italique** : `*texte en italique*`
- **Listes** : `- élément 1` ou `1. élément 1`
- **Liens** : `[texte du lien](https://monsite.com)`
- **Citations** : `> Ceci est une citation`
- **Code** : `` `code` ``

Le site se chargera automatiquement de rendre tout ça magnifique avec une mise en page premium (typographie soignée, espacements, etc.).
