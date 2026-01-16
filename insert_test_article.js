
import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error("Missing environment variables VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const articleContent = `Chaque année, le même constat. On passe des heures à chercher LE cadeau parfait. On compare, on hésite, on commande. Et pourtant, combien de ces cadeaux sont encore utilisés six mois plus tard ?

Selon une étude Statista de 2023, 62% des Français déclarent avoir reçu au moins un cadeau "inutile" à Noël. Un chiffre qui interpelle quand on sait que les dépenses moyennes par foyer dépassent les 300€ pour les fêtes.

Le problème n'est pas le budget. C'est l'intention.

## Ce que les cadeaux classiques ne peuvent pas offrir

Un mug personnalisé fait sourire. Un coffret bien-être se consomme en un week-end. Un objet connecté devient obsolète en deux ans.

Ces cadeaux ont leur place. Mais ils partagent une limite : ils s'usent, se consomment, se démodent.

Ce qui ne vieillit jamais, ce sont les souvenirs. Les histoires qu'on se raconte. Les parcours de vie qu'on transmet.

C'est exactement ce que proposent les cadeaux mémorables.

## Qu'est-ce qu'un cadeau mémorable ?

Un cadeau mémorable capture et préserve ce qui compte vraiment : les souvenirs, les parcours, les moments qui ont façonné une personne.

Contrairement aux cadeaux classiques, il ne perd pas de valeur avec le temps. Il en gagne. C'est le genre de présent qu'on ressort des années plus tard, qu'on transmet à ses enfants, qu'on relit avec émotion.

Quelques exemples concrets :

Les **albums photo commentés**. Pas un simple recueil d'images, mais une vraie narration des moments partagés.

Les **capsules temporelles**. Des objets et mots enfermés pour être redécouverts plus tard.

Les **biographies personnalisées**. Raconter l'histoire d'une vie dans un vrai livre.

## Pour qui ces cadeaux sont-ils particulièrement adaptés ?

**Les grands-parents.** Ils ont vécu des décennies d'histoire. Offrir un cadeau qui honore leur parcours, c'est leur dire que leur histoire compte.

**Les parents.** Souvent pris dans le quotidien, ils n'ont jamais le temps de se retourner sur leur chemin. Un cadeau mémorable les invite à cette pause.

**Les personnes qui partent à la retraite.** Après des années de travail, marquer ce passage avec quelque chose de significatif change tout.

**Ceux qui traversent une étape de vie.** Mariage, naissance, anniversaire marquant. Ces moments méritent plus qu'un chèque-cadeau.

## La biographie personnalisée : le cadeau mémorable ultime

Chez MyWai, nous avons développé un concept unique : la biographie personnalisée générée par intelligence artificielle.

Le principe est simple. À partir d'un questionnaire et d'échanges, nous créons un véritable livre qui raconte l'histoire de votre proche. Ses souvenirs d'enfance, ses moments marquants, ses valeurs, ses anecdotes.

Ce n'est pas un texte automatique froid. C'est une narration soignée, structurée en chapitres, qui transforme une vie en récit captivant.

Le genre de livre qu'on feuillette avec les petits-enfants. Qu'on relit les soirs de nostalgie. Qu'on garde précieusement dans sa bibliothèque.

### Pourquoi ça fonctionne comme cadeau de Noël

**C'est personnel.** Chaque biographie est unique, impossible à reproduire.

**C'est durable.** Un livre traverse les générations.

**C'est émotionnel.** Offrir son histoire à quelqu'un, c'est lui dire qu'elle compte.

**C'est surprenant.** Personne ne s'attend à recevoir le récit de sa propre vie.

## Le processus en 4 étapes

1. Vous lancer le 1er chapitre.
2. Votre proche répond à un questionnaire avec des questions simples sur sa vie, ses souvenirs, ses moments clés.
3. Notre IA rédige la biographie en structurant les réponses en un récit fluide et touchant.
4. Vous recevez le livre, prêt à être offert sous le sapin.

Le processus est simple. Le résultat est profond.

## Testez gratuitement avant de vous engager

Un cadeau comme celui-ci, il faut le voir pour y croire.

C'est pourquoi nous proposons de générer le premier chapitre gratuitement. Sans engagement, sans carte bancaire. Juste pour découvrir ce que pourrait donner l'histoire de votre proche.

En quelques minutes, vous aurez un aperçu concret de ce que MyWai peut créer.

👉 [**Générer le premier chapitre gratuitement**](https://app.my-w.ai/books/new)

## Ce Noël, offrez plus qu'un cadeau

Les fêtes de fin d'année sont l'occasion de montrer aux gens qu'ils comptent. Pas avec un énième objet qu'ils n'ont pas demandé. Avec quelque chose qui résonne vraiment.

Un cadeau mémorable dit : "Je te connais. Je t'écoute. Ton histoire m'importe."

C'est le plus beau message qu'on puisse transmettre.

---

*MyWai transforme les histoires de vie en biographies personnalisées. Parce que chaque parcours mérite d'être raconté.*

---

**Sources :**

- Statista, "Comportements d'achat des Français pour Noël 2023"
- Étude OpinionWay pour Cofidis, "Budget des fêtes de fin d'année 2023"`;

async function insertArticle() {
    console.log("Tentative d'insertion...");

    const { data, error } = await supabase
        .from("blogues")
        .insert([
            {
                title: "Ce Noël, offrez plus qu'un cadeau : un voyage dans le temps",
                slug: "cadeau-memorable-noel",
                description: "Pourquoi 62% des Français reçoivent des cadeaux inutiles et comment changer la donne avec un cadeau mémorable.",
                content: articleContent,
                published_at: new Date().toISOString(),
                image_url: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&q=80&w=2070"
            }
        ])
        .select();

    if (error) {
        console.error("Erreur :", error.message);
    } else {
        console.log("Succès ! Article inséré :", data[0].title);
    }
}

insertArticle();
