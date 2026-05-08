# Portfolio — Zoubairou Chouaibou Gargue

Portfolio personnel statique (HTML / CSS / JS), prêt à déployer sur Vercel.

## 📁 Structure du dossier
```
portfolio/
├── index.html      # Page principale
├── styles.css      # Styles
├── script.js       # Interactions
├── vercel.json     # Config Vercel
├── images/         # ← À CRÉER : tes visuels
│   ├── ed/         # Visuels Elites Du Digital
│   ├── liqaverse/  # Visuels LiqaVerse
│   ├── tecna/      # Visuels UFR-TECNA
│   ├── divers/     # Autres affiches
│   └── videos/     # Vidéos (.mp4)
└── CV.pdf          # ← À AJOUTER : ton CV en PDF
```

---

## 🗂 Comment ajouter tes visuels

Chaque emplacement dans le portfolio a un **`data-tag`** unique qui indique quelle image y aller. Voici la liste complète :

### Projet 1 — Elites Du Digital (ED)
- `logo-ed` : ton logo ED
- `charte-ed` : extrait de la charte graphique
- `visuel-ed-1`, `visuel-ed-2`, `visuel-ed-3` : 3 affiches
- `carr-ed-1` à `carr-ed-4` : slides du carrousel Insta
- `video-ed-1`, `video-ed-2` : 2 vidéos

### Projet 2 — LiqaVerse
- `logo-liqa` : logo
- `charte-liqa` : pages de la charte
- `visuel-liqa-1` à `visuel-liqa-3` : 3 visuels
- `liqa-c1-s1` à `liqa-c1-s4` : Carrousel 1 (4 slides)
- `liqa-c2-s1` à `liqa-c2-s4` : Carrousel 2 (4 slides)
- `liqa-c3-s1` à `liqa-c3-s4` : Carrousel 3 (4 slides)
- `video-liqa-1`, `video-liqa-2` : 2 vidéos

### Projet 3 — UFR-TECNA
- `logo-tecna`, `logo-tecna-decline` : logo et déclinaisons
- `js-1`, `js-2`, `js-3` : visuels Journée Scientifique
- `qp-1`, `qp-2`, `qp-3` : 3 affiches Quinzaine Professionnelle
- `tecna-c1-s1` à `tecna-c1-s3` : carrousel TECNA
- `video-tecna-1`, `video-tecna-2` : vidéos (si tu en as)

### Section Divers
- `divers-1` à `divers-6` : autres affiches

---

## ✏️ Comment remplacer un placeholder par ton image

Dans `index.html`, **trouve le bloc** correspondant au tag (ex: `data-tag="logo-ed"`) :

```html
<!-- AVANT -->
<div class="placeholder placeholder-large" data-tag="logo-ed">
    <span>📐 Logo ED — image à insérer</span>
</div>
```

**Remplace-le par :**
```html
<!-- APRÈS (image) -->
<div class="placeholder placeholder-large" style="background: url('images/ed/logo.png') center/cover;">
</div>
```

**Pour une vidéo :**
```html
<!-- APRÈS (vidéo locale) -->
<video class="placeholder placeholder-video" controls>
  <source src="images/videos/liqa-1.mp4" type="video/mp4">
</video>

<!-- OU vidéo YouTube/Vimeo -->
<iframe class="placeholder placeholder-video"
        src="https://www.youtube.com/embed/TON_ID"
        frameborder="0" allowfullscreen></iframe>
```

---

## 🚀 Déployer sur Vercel (gratuit, en 2 minutes)

### Méthode A — Drag & drop (la plus rapide)
1. Va sur [vercel.com](https://vercel.com), crée un compte gratuit (avec ton email)
2. Clique sur **Add New → Project**
3. Glisse-dépose le dossier `portfolio` complet sur la page
4. Vercel déploie automatiquement → tu reçois une URL `zoubairou-portfolio.vercel.app`

### Méthode B — Via GitHub (recommandé pour les mises à jour)
1. Crée un compte sur [github.com](https://github.com)
2. Crée un repository public nommé `portfolio`
3. Upload tous les fichiers du dossier `portfolio/` dedans
4. Sur Vercel : **Add New → Project → Import** ton repo `portfolio`
5. Clique **Deploy**
6. À chaque modification poussée sur GitHub → Vercel redéploie automatiquement.

### Méthode C — CLI Vercel
```bash
npm install -g vercel
cd portfolio
vercel
```

---

## ✅ Checklist avant envoi aux recruteurs

- [ ] Ajouter ta photo de profil dans la section "À propos" (remplacer le placeholder par une `<img>`)
- [ ] Insérer tes vrais visuels pour les 3 projets ED / LiqaVerse / TECNA
- [ ] Insérer tes vidéos (locales ou YouTube embed)
- [ ] Ajouter ton CV au format PDF (le bouton "Télécharger mon CV" pointe sur `CV.pdf`)
- [ ] Ajouter tes liens LinkedIn et Behance dans la section Contact
- [ ] Tester le site sur mobile
- [ ] Déployer sur Vercel
- [ ] Mettre l'URL Vercel sur ton CV et tes profils Insta

---

## 🎨 Modifier les couleurs

Dans `styles.css`, tout en haut, dans `:root` :
```css
--primary: #1E3A5F;     /* bleu principal */
--accent: #E07A5F;      /* terracotta accent */
--c-ed: #FF6B6B;        /* couleur du projet ED */
--c-liqa: #6B5B95;      /* couleur du projet LiqaVerse */
--c-tecna: #2A9D8F;     /* couleur du projet TECNA */
```
