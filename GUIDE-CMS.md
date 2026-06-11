# Guide d'activation — Netlify CMS
## Evoluciona · Interface d'administration

---

## Ce que tu vas obtenir

Une interface accessible sur **ton-site.netlify.app/admin**  
→ Ajouter / modifier / supprimer des actualités  
→ Gérer les offres d'emploi  
→ Modifier les services  
→ Changer les images  
→ Le tout sans toucher au code  

---

## Étape 1 — Mettre le site sur GitHub (5 min)

Netlify CMS a besoin de GitHub pour stocker les fichiers de contenu.

1. Crée un compte sur **github.com** (gratuit)
2. Crée un nouveau dépôt : **New repository** → nom : `evoluciona-site` → Public → **Create**
3. Télécharge **GitHub Desktop** sur desktop.github.com
4. Dans GitHub Desktop : **Add existing repository** → sélectionne le dossier `evoluciona-output`
5. **Publish repository** → sélectionne ton dépôt `evoluciona-site`

---

## Étape 2 — Connecter Netlify à GitHub (3 min)

1. Va sur **netlify.com** → connecte-toi
2. **Add new site** → **Import an existing project**
3. Choisis **GitHub** → sélectionne `evoluciona-site`
4. Laisse les paramètres par défaut → **Deploy site**

Ton site est maintenant déployé depuis GitHub. Chaque modification sur GitHub → site mis à jour automatiquement.

---

## Étape 3 — Activer Netlify Identity (2 min)

C'est ce qui protège ton interface /admin avec un mot de passe.

1. Dans ton tableau de bord Netlify → **Site configuration**
2. Menu **Identity** → **Enable Identity**
3. Scroll vers le bas → **Registration** → sélectionne **Invite only**  
   *(seules les personnes que tu invites peuvent accéder à l'admin)*
4. Clique **Save**

---

## Étape 4 — Activer Git Gateway (1 min)

C'est ce qui permet au CMS d'écrire dans tes fichiers GitHub.

1. Toujours dans **Site configuration**
2. Menu **Identity** → **Services** → **Git Gateway**
3. Clique **Enable Git Gateway**

---

## Étape 5 — Créer ton compte admin (2 min)

1. Dans **Identity** → **Invite users**
2. Entre ton adresse email → **Send invite**
3. Ouvre l'email reçu → clique le lien → crée ton mot de passe

---

## C'est prêt ✓

Accède à l'interface admin :  
**https://ton-site.netlify.app/admin**

Tu verras :
- **Actualités** → Créer / modifier / supprimer des articles
- **Offres d'emploi** → Gérer toutes les offres
- **Services** → Modifier les descriptions et images
- **Paramètres** → Email, téléphone, adresse

---

## Ajouter une actualité — exemple concret

1. Va sur `/admin`
2. Clique **Actualités** → **Nouvel article**
3. Remplis : Titre, Catégorie, Date, Image, Extrait
4. Clique **Publier**
5. Le site se met à jour automatiquement en 30 secondes

---

## Modifier une image

1. Dans n'importe quel formulaire, clique sur le champ image
2. **Choose an image** → **Upload** → sélectionne ton fichier
3. L'image est uploadée dans `assets/images/` automatiquement

---

## Inviter un client à gérer son contenu

1. Netlify → **Identity** → **Invite users**
2. Entre l'email du client
3. Il reçoit un email, crée son mot de passe, accède à `/admin`

Aucune intervention technique de ta part requise.

---

## Structure des fichiers générés

Quand tu publies un article via le CMS, Netlify crée automatiquement :
```
_actualites/
└── mon-article.md    ← contenu de l'article

assets/images/
└── mon-image.jpg     ← image uploadée
```

---

*Guide créé avec Claude · Evoluciona 2024*
