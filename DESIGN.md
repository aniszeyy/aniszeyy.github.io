# Direction de design

## Intention

Un **dossier éditorial de développeur** : papier chaud, encre noire, un seul vermillon, des filets fins, des numéros de section et des planches génératives pour chaque projet. Assez austère pour laisser les projets parler, assez composé pour ne pas ressembler à un template.

Le site est en clair uniquement : la palette et la typographie ont été pensées pour le papier, pas comme un thème clair par défaut.

## Tokens

| Rôle | Valeur | Usage |
|---|---|---|
| `--paper` | `#F5F1E8` | fond |
| `--paper-2` | `#EDE7D9` | planches projets |
| `--ink` | `#15140F` | texte, sections inversées |
| `--ink-soft` | `#3F3C33` | texte secondaire |
| `--muted` | `#6F6A5C` | labels, légendes |
| `--line` | `#D8D2C3` | filets 1 px |
| `--accent` | `#C03A0E` | vermillon, un seul accent |
| `--signal` | `#3F7D5C` | point « disponible » |

Rayon : **0 px** partout. Ombres : **aucune**. Filets : 1 px. Le contraste vient des aplats et de la typographie, pas des effets.

## Typographie

- **Fraunces** (300, axes SOFT/WONK, italique) — nom, titres, chiffres de planche.
- **IBM Plex Sans** (400/500/600) — texte courant.
- **JetBrains Mono** (400/500) — labels, métadonnées, tags.

Échelle : nom en `clamp(3.6rem, 15.5vw, 14rem)`, titres de section `clamp` 2.5→4.5rem, corps 15–17 px, labels 10–11 px avec `letter-spacing: 0.16em`.

## Composition & mouvement

- Grille 12 colonnes, gouttières de 2rem, conteneur 1440 px.
- Hero : nom en deux lignes décalées (pleine / contour, alignées à gauche puis à droite), métadonnées aux extrémités, marquee de stack en pied.
- Travaux : une pièce maîtresse pleine largeur (planche 3:1), puis une grille 2×2 ; les forks sont une table éditoriale.
- Planches projets : motif CSS déterministe (anneaux, grille, barres, points, hachures) coloré par langage, masqué en dégradé ; inversion encre au survol.
- Animations : entrée du nom en lignes masquées, révélations au scroll (IntersectionObserver), marquee en pause au survol. Aucune bibliothèque d'animation.

## Sources de design

Le plugin **UI/UX Design** (`dsh-ui-ux-pro-max`) n'est pas installé dans cette session DSH : sa base a été téléchargée et lue directement pour choisir et documenter la direction.

- Styles retenus : *Minimalist Monochrome* (#70) pour les filets, le zéro rayon et le grain ; *Bold Typography / Mobile Poster* (#78) pour le vermillon et la typographie éditoriale ; *Editorial Grid / Magazine* (#66) pour la composition.
- Typographie de départ : *Minimalist Monochrome Editorial* (serif + mono), adaptée à Fraunces pour éviter Playfair Display.
- Le skill **frontend-design** a guidé : police display distincte, accent unique, texture de papier, composition asymétrique, une seule orchestration d'entrée.
- **Ponytail** a guidé le périmètre : réutilisation du template fourni, zéro dépendance ajoutée, visuels en CSS plutôt qu'en images, suppression des composants shadcn inutilisés.

## Accessibilité

- Contrastes : encre/papier **16,4:1**, texte secondaire **4,8:1**, accent/papier **4,8:1**, papier/encre **16,4:1**, accent/encre **3,4:1** (réservé aux grands titres).
- Cibles tactiles ≥ 44 px (menu, filtres, liens de navigation).
- `focus-visible` vermillon sur tous les éléments interactifs, lien d'évitement, ordre de tabulation naturel.
- `prefers-reduced-motion` : animations et défilement doux désactivés.
- Icônes Lucide uniquement, jamais d'emoji structurel ; marquee `aria-hidden`.
- Aucun témoignage ou chiffre inventé : le contenu vient du profil GitHub et du README de l'auteur.

## Performance

- Build : ~232 kB JS (70 kB gzip), ~25 kB CSS (6 kB gzip), aucune image bitmap.
- Polices via Google Fonts (3 familles, `display=swap`).
- Rendu statique, pas de framework d'animation ni de composant lourd.
