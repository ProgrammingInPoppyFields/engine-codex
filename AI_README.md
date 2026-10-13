# AI README — THE POST-PRIMAL LITURGY ENGINE CODEX

This file is a working context guide for future AI-assisted writing sessions involving The Post-Primal Liturgy / Engine Codex.

Use this document for:

- Codex structure
- Engine profile format
- folder and image conventions
- taxonomy rules
- tone and style
- technical maintenance rules
- known canon relationships
- Quartz / GitHub Pages gotchas

`CLAUDE.md` holds the short-form repo rules. If this file and `CLAUDE.md` ever disagree, `CLAUDE.md` wins, and this file should be updated.

The live Codex is here:

```txt
https://programminginpoppyfields.github.io/engine-codex/
```

The site is a public Quartz archive of Engines, Drives, Engine Families, Engine Groups, unresolved entities, interactions, galleries, and related symbolic structures.

---

# 1. What This Project Is

The Post-Primal Liturgy is a mythos experiment and public archive.

It catalogs symbolic structures observed in modern life, cosmic scale, material pressure, signal, memory, grief, aftermath, transformation, endurance, and ordinary dread.

These entries are not gods.
They are not characters.
They are not metaphors alone.

They are recurring structures of meaning given:

- body
- material
- color
- signal
- sound
- habitat
- aftereffect
- relation
- visual form

The site should feel like an archive of phenomena that were discovered, not invented.

---

# 2. Core Tone

The writing should feel like:

```txt
dark institutional archive
field guide
memorial plaque
cosmic incident report
museum wall text
dry academic note
haunted technical documentation
public filing system for impossible things
```

Preferred qualities:

- dark
- cosmic
- precise
- emotionally intelligent
- readable
- minimal but evocative
- occasionally funny in a dry, eerie way
- melancholic without becoming overwrought
- grand without becoming fantasy-purple
- strange without becoming confusing

Avoid:

- RPG statblock language
- god/pantheon language unless explicitly requested
- overexplained lore dumps
- generic fantasy prose
- neon cyberpunk excess
- cute jokey tone
- too many tags
- too many unnecessary sections
- treating Engines like characters with personalities unless the entry itself supports that

The Codex should feel filed, not preached.

---

# 3. Core Taxonomy

## Engine

A major symbolic structure with a stable domain, material, signal, habitat, and aftereffect.

Engines are not characters, gods, or metaphors alone.

They are recurring structures of meaning given body.

## Drive

An Engine-like force defined more by movement, pressure, compulsion, transformation, or interior vector than by fixed architecture.

A Drive uses the same profile template as an Engine.

## Engine Family

A loose kinship of Engines that share a domain: color, material, emanation, aftermath, and so on.

A family page describes the concept and links to its members in the registry.

## Engine Group

A tighter cluster: related Engines that operate best as a set (a trio, a quartet, a trinity).

Group pages also live in `engine families/`. The difference is classification, not location.

## Unresolved Entity

A proto-Engine, fallen form, parasite, restricted phenomenon, shadow-form, or symbolic structure that failed to achieve stable Engine integrity.

Unresolved entities are not necessarily weaker than Engines.

They are less taxonomically clean.

## Fallen Proto-Engine

A structure that gathered symbolic density, persistence, and gravity, but failed to develop the dignity, witness, service, protection, or moral coherence required to become a true Engine.

Example:

```txt
THE WREATH-EATER
```

## Interaction

A page describing what happens when two (occasionally three) Engines meet.

---

# 4. Repository Structure

This is a Quartz site.

Primary content lives in `content/`:

```txt
content/
  index.md

  intro/
    index.md

  engine families/
    index.md
    aftermath-engines/index.md
    color-engines/index.md
    contemporary-engines/index.md
    emanation-engines/index.md
    first-engines/index.md
    material-engines/index.md
    molecular-engines/index.md
    particulate-trio/index.md
    quartet-of-mattering/index.md
    trinity-of-cognition/index.md

  engine registry/
    index.md
    abyssal/index.md
    black-hole/
      index.md
      the-black-hole-meditates.md
    first/index.md
    pink/index.md
    sand/index.md
    white-hole/index.md
    ...

  unresolved entities/
    index.md
    clinger/index.md
    hollow-marbles/index.md
    unbowed/index.md
    wreath-eater/index.md

  interactions/
    index.md
    black-hole-white-hole.md
    indigo-turquoise.md
    sand-dust.md
    ...

  images/
    1.jpg
    2.jpg
    ...
```

Top-level section folders are fixed:

```txt
intro/
engine families/
engine registry/
unresolved entities/
interactions/
```

Do not create new top-level content folders unless the user asks.

Spaces are allowed in the top-level section folder names only.

Every individual Engine or Drive lives in `engine registry/`, never nested inside a family folder.

Do not use numbered prefixes on folders. That was an old convention and has been removed.

---

# 5. Markdown File Rule

Every entry is an `index.md` inside its own folder.

Correct:

```txt
content/engine registry/pink/index.md
content/engine registry/white-hole/index.md
content/unresolved entities/clinger/index.md
content/engine families/particulate-trio/index.md
```

Avoid loose Markdown files at the top of a section:

```txt
content/engine registry/pink.md
content/engine registry/white-hole.md
```

Two exceptions:

- Interactions can be loose `.md` files directly inside `interactions/`.
- Companion pieces (short stories, poems, dialogues) can sit as loose `.md` files inside the folder of the Engine they belong to, next to its `index.md`. Example: `engine registry/black-hole/the-first-small-thing.md`.

---

# 6. URL Structure

Quartz slugifies folder names, so spaces become dashes.

This:

```txt
content/engine registry/pink/index.md
```

becomes:

```txt
/engine-codex/engine-registry/pink/
```

This:

```txt
content/engine families/particulate-trio/index.md
```

becomes:

```txt
/engine-codex/engine-families/particulate-trio/
```

Use short, lowercase, dash-separated folder names for entries.

Good:

```txt
white-hole
black-hole
empty-apartment
fiber-optic
silicon-carbide
wreath-eater
particulate-trio
```

Avoid:

```txt
White Hole
white_hole
THE WHITE HOLE ENGINE
drive-of-the-second-death
```

Folder names should be stable, simple slugs.

Full formal names belong in the page's `# HEADING`.

---

# 7. Frontmatter Rules

Every page needs exactly three frontmatter fields:

```md
---
title:
classification:
tags:
---
```

## Titles

Titles are short. No "THE" prefix, no "ENGINE" / "DRIVE" suffix.

```txt
PINK
BLACK HOLE
CARBIDE
ABYSSAL
```

The full formal name goes in the `# HEADING` on the page itself:

```md
---
title: PINK
classification: Engine
tags:
  - color-engines
---

# THE PINK ENGINE
```

Exception: family, group, index, and unresolved entity pages keep their full names as titles:

```txt
THE COLOR ENGINES
THE PARTICULATE TRIO
ENGINE REGISTRY
THE WREATH-EATER
```

## Classification

Classification describes what the page is. Use one of:

```txt
Engine
Drive
Engine Family
Engine Group
Unresolved Entity
Interaction
Poem
Index
Introductory Text
```

## Tags

Tags are taxonomy only: family or group membership, nothing else.

Pages with no family membership use:

```md
tags: []
```

## Do not put these in frontmatter

```txt
aliases
material_color
status
volume
date
```

Aliases, Material / Color, Signal Profile, and Sound Signature belong in visible page sections.

---

# 8. Standard Engine / Drive Template

Use this for normal Engine or Drive pages.

```md
---
title: ENGINE NAME
classification: Engine
tags:
  - relevant-family-tag
---

# THE ENGINE NAME ENGINE

![THE ENGINE NAME ENGINE](/images/42.jpg)

> One-line thesis.

## Aliases

- ENGINE NAME
- The Engine Name Engine
- Another Designation

## Classification

**Engine**
**Specific Engine Family**

## Material / Color

What the Engine appears to be made of.

Include physical material, color, texture, light behavior, symbolic matter, or atmospheric material.

## Signal Profile

What the Engine broadcasts conceptually or emotionally.

This is not just color/material. It is the pressure, theme, dread, mercy, or psychic weather emitted by the Engine.

## Sound Signature

What the Engine sounds like nearby.

Use concrete sonic imagery: hum, silence, static, pressure, scraping, chime, breath, room tone, etc.

## Profile

Core explanatory bio.

This should define what the Engine is, what it does, and what condition it represents.

Keep paragraphs short.

Use line breaks for emphasis when useful.

## Habitats

- Place or condition
- Place or condition
- Any field where the Engine tends to appear

## Aftereffects

- Effect after contact
- Emotional residue
- Behavioral shift
- Perceptual change

## Relations / Linked Entries

- [[engine registry/example|THE EXAMPLE ENGINE]] — brief relationship note.
- [[unresolved entities/example|THE EXAMPLE ENTITY]] — brief relationship note.

## Gallery

![THE ENGINE NAME ENGINE](/images/43.jpg)

![THE ENGINE NAME ENGINE](/images/44.jpg)

## Special Notes

- Small eerie, funny, poignant, or archival note.
- Another field observation.
- Something that sounds like a tired curator wrote it at 2:13 a.m.
```

## Aliases

- Aliases go in the body under `## Aliases`, never in frontmatter.
- Include at least one alias using "Engine" and/or "Drive".
- 3–5 aliases is usually enough.
- They should sound like Codex designations, not RPG stat blocks.

---

# 9. Engine Family / Group Template

Use this for pages in `engine families/`.

```md
---
title: THE GROUP NAME
classification: Engine Group
tags:
  - group-tag
---

# THE GROUP NAME

![THE GROUP NAME](/images/42.jpg)

> One-line thesis.

## Profile

Explain the family or group and its organizing principle.

## Members

- [[engine registry/member-one|THE MEMBER ONE ENGINE]] — one-line role.
- [[engine registry/member-two|THE MEMBER TWO ENGINE]] — one-line role.

## Pending Entries

- MEMBER THREE — not yet filed.

## Gallery

![THE GROUP NAME](/images/43.jpg)

## Special Notes

- Small field note.
- Weird archive observation.
```

For a loose family, use `classification: Engine Family`.

Group pages can also use Material / Color, Signal Profile, Sound Signature, Habitats, and Aftereffects sections when the set behaves as one combined field.

Subgroups (for example The Blue Ladder or The Twin Transparencies) are sections inside the family page, not separate folders.

---

# 10. Standard Page Section Order

Use this order for normal Engine / Drive pages:

```md
# THE ENGINE NAME ENGINE

![THE ENGINE NAME ENGINE](/images/42.jpg)

> One-line thesis.

## Aliases
## Classification
## Material / Color
## Signal Profile
## Sound Signature
## Profile
## Habitats
## Aftereffects
## Relations / Linked Entries
## Gallery
## Special Notes
```

Additional sections are allowed when they genuinely help the entry.

Examples:

```md
## Contact Symptoms
## Behavior
## Failure Classification
## Scale Forms
## Relation to the Clinger
## Relation to UNBOWED
```

Do not add extra sections just to make the file feel important.

---

# 11. Tags

Tags should be functional, not decorative.

Approved taxonomy tags:

```txt
first-engines
color-engines
material-engines
emanation-engines
contemporary-engines
aftermath-engines
molecular-engines
primordial-engines
trinity-of-cognition
quartet-of-mattering
particulate-trio
color-of-almost
anomalous-entities
unverified-encounters
```

Use lowercase dash-separated tags.

Do not tag content type. These are not taxonomy tags:

```txt
engine
drive
index
interaction
resonance
unresolved-entity
```

An Engine can belong to several families. Usually 1–3 tags is enough, and never more than 5.

Examples:

```md
tags:
  - color-engines
  - contemporary-engines
  - color-of-almost
```

```md
tags:
  - material-engines
```

```md
tags:
  - particulate-trio
```

```md
tags: []
```

Note: companion pieces currently use `one-shot`, `poem`, and `dialogue` tags. `CLAUDE.md` lists `poem` as a forbidden generic tag, so this is unresolved. Ask before adding more.

---

# 12. Engine Families and Groups

Family and group pages live in `engine families/`:

```txt
engine families/aftermath-engines/      Engine Family
engine families/color-engines/          Engine Family
engine families/contemporary-engines/   Engine Family
engine families/emanation-engines/      Engine Family
engine families/first-engines/          Engine Family
engine families/material-engines/       Engine Family
engine families/molecular-engines/      Engine Family
engine families/particulate-trio/       Engine Group
engine families/quartet-of-mattering/   Engine Group
engine families/trinity-of-cognition/   Engine Group
```

Members of a family or group always live in `engine registry/`, and the family page links to them.

For example, the Particulate Trio (THE PARTICULATE FINALITIES) is:

```txt
content/engine families/particulate-trio/index.md   group page
content/engine registry/sand/index.md               member
content/engine registry/ash/index.md                member
content/engine registry/dust/index.md               member
```

Each member is tagged `particulate-trio`.

If a family member has no page yet, list it as plain text under `## Pending Entries`. Do not create dead links.

---

# 13. Unresolved Entities

Unresolved entities live in:

```txt
content/unresolved entities/
```

Current entries:

```txt
content/unresolved entities/clinger/index.md
content/unresolved entities/hollow-marbles/index.md
content/unresolved entities/unbowed/index.md
content/unresolved entities/wreath-eater/index.md
```

They can use the same broad profile structure as Engines, but should not be called true Engines unless canon says so.

Use:

```md
---
title: THE WREATH-EATER
classification: Unresolved Entity
tags: []
---
```

No taxonomy tags unless the entity belongs to a named group.

Fallen proto-Engine status is stated in the page's `## Classification` section, not in tags.

---

# 14. Interactions

Interactions live in `content/interactions/` as loose `.md` files.

Filename format: `name1-name2.md`, dash-separated, no "the".

```txt
indigo-turquoise.md
black-hole-white-hole.md
graphite-diamond-dust.md
```

Use `↔` in the title:

```md
---
title: INDIGO ↔ TURQUOISE
classification: Interaction
tags: []
---
```

Tag with the relevant family if it clearly applies, otherwise use `tags: []`.

---

# 15. Image Folder Structure

All images live flat in:

```txt
content/images/
```

No subfolders.

Images are numbered sequentially across the whole site:

```txt
1.jpg
2.jpg
3.jpg
...
```

Numbers are global, not per-entry. To find the next free number:

```bash
ls content/images | sort -n | tail -1
```

The header image goes right after the `# HEADING`, before the thesis quote.

The header image is never repeated in the Gallery.

Correct:

```md
# THE PINK ENGINE

![THE PINK ENGINE](/images/165.jpg)

## Gallery

![THE PINK ENGINE](/images/166.jpg)
```

Incorrect:

```md
# THE PINK ENGINE

![THE PINK ENGINE](/images/165.jpg)

## Gallery

![THE PINK ENGINE](/images/165.jpg)
```

---

# 16. Image Path Rule

All image paths in Markdown are absolute from the site root, with no `/engine-codex/` prefix:

```md
![THE FIRST ENGINE](/images/42.jpg)
```

Incorrect:

```md
![THE FIRST ENGINE](../../images/42.jpg)
![THE FIRST ENGINE](../images/42.jpg)
![THE FIRST ENGINE](/engine-codex/images/42.jpg)
```

Quartz rewrites `/images/...` into the correct relative path at build time, so it works under the `/engine-codex/` project base path on GitHub Pages.

---

# 17. Image Format and Compression

New images must be compressed before committing:

- Format: JPEG at 85% quality
- Max width: 1600px
- Extension: lowercase `.jpg`

Use `sips`:

```bash
sips --resampleWidth 1600 input.png && sips -s format jpeg -s formatOptions 85 input.png --out output.jpg
```

GitHub Pages is case-sensitive. `42.jpg` and `42.JPG` are not the same file.

Some older images are still `.png`. Leave them alone unless the user asks to convert them.

---

# 18. Scale Form Images

Some Engines have several scale forms (for example local, network, and massive). Show them side by side in a `## Scale Forms` section:

```html
## Scale Forms

<div style="display: flex; gap: 1rem; align-items: flex-start;">
  <div style="flex: 1;">
    <img src="/images/42.jpg" alt="ENGINE local scale">
    <p><strong>Local Scale</strong></p>
  </div>
  <div style="flex: 1;">
    <img src="/images/43.jpg" alt="ENGINE network scale">
    <p><strong>Network Scale</strong></p>
  </div>
  <div style="flex: 1;">
    <img src="/images/44.jpg" alt="ENGINE massive scale">
    <p><strong>Massive Scale</strong></p>
  </div>
</div>
```

SIGNAL and BROADCAST are meant to use this format when they are filed.

---

# 19. Favicon

The favicon lives at:

```txt
quartz/static/icon.png
```

Recommended size:

```txt
512 x 512 px
```

Recommended style:

```txt
black background
white / bone-white simple symbol
minimal detail
high contrast
```

Good favicon concepts:

```txt
thin white aperture
small monolith
broken halo
diamond outline
abstract Engine sigil
```

Avoid detailed images.

Favicons are tiny and details become soup.

Browsers cache favicons aggressively. If the favicon does not update, test in an incognito window.

---

# 20. Relations / Linked Entries Rules

Use Quartz wikilinks that point at the folder, not the file:

```md
- [[engine registry/black-hole|THE BLACK HOLE ENGINE]] — paired counterpart; receives what WHITE HOLE emits.
- [[unresolved entities/clinger|THE CLINGER]] — failed or unresolved adjacency.
- [[engine registry/dust|THE DUST ENGINE]] — sibling finality.
```

Correct: `[[engine registry/gray]]`
Incorrect: `[[engine registry/gray/index.md]]`

For display labels, use whatever fits: formal titles in indexes, short names in prose.

If a related entry does not have a page yet, write it as plain text, not a link.

If there are no known relations:

```md
No known relations currently listed.
```

Do not invent relations just to fill the section.

---

# 21. Gallery Rules

If there are gallery images:

```md
## Gallery

![THE ENGINE NAME ENGINE](/images/43.jpg)

![THE ENGINE NAME ENGINE](/images/44.jpg)
```

If there are no gallery images yet:

```md
## Gallery

No additional gallery images currently listed.
```

Never repeat the header image in the gallery.

---

# 22. Known Entry Relations

Entries marked *(pending)* do not have pages yet. Mention them as plain text, not links.

## FIRST

- linked to CLINGER
- linked to WREATH-EATER
- linked to UNSUNG

## UNSUNG

- linked to FIRST
- linked to UNBOWED

## WHITE HOLE

- linked to BLACK HOLE

## BLACK HOLE

- linked to WHITE HOLE

## INDIGO

- linked to PINK
- linked to TURQUOISE

## TURQUOISE

- linked to INDIGO
- linked to PINK

## PINK

- linked to INDIGO
- linked to TURQUOISE

## ISLAND

- linked to ISOLATION

## EMPTY APARTMENT

- linked to ISOLATION

## UV (ULTRAVIOLET)

- linked to UNSUNG

## SIGNAL *(pending)*

- linked to BROADCAST

## BROADCAST *(pending)*

- linked to SIGNAL

## CLINGER

- linked to FIRST
- linked to WREATH-EATER

## UNBOWED

- linked to UNSUNG
- may be linked to SECOND DEATH and OBLIVION if relevant

## WREATH-EATER

- linked to CLINGER
- linked to UNBOWED
- linked to FIRST

## CRIMSON DIAMOND *(pending)*

- linked to DIAMOND
- linked to UNTESTED

## AFTERACTION *(pending)*

- currently no known linked entries unless user specifies

## SECOND DEATH *(pending)*

- linked to UNSUNG
- linked to OBLIVION

## OBLIVION

- linked to DUST
- linked to SECOND DEATH

## UNTESTED *(pending)*

- linked to GLASS
- linked to CRIMSON DIAMOND

## ISOLATION

- linked to ISLAND
- may be linked to EMPTY APARTMENT if useful

## ABYSSAL

- possible relation to BLACK HOLE
- possible relation to ISOLATION
- contrast with WHITE HOLE
- associated with MIRA, a sentient deep-ocean Unit (no page)
- companion stories: THE FIRST SMALL THING and THE THIRD SMALL THING, filed under BLACK HOLE

---

# 23. Important Canon Notes

## FIRST

Material: white marble or pale monumental stone with gold seams.

The gold streak is an homage to kintsugi.

The central hole is not damage, absence, or a missing piece.

It is an intentional aperture.

## UNSUNG

Material: limestone.

Limestone is common, ordinary, weathered, everywhere.

It is not marble.

That distinction matters.

## WHITE HOLE / BLACK HOLE

Both have material: anything and everything.

WHITE HOLE says:

```txt
Anything is possible.
```

BLACK HOLE says:

```txt
So be it.
```

WHITE HOLE emits.

BLACK HOLE receives.

## INDIGO / TURQUOISE

Both concern uncertainty, but differently.

INDIGO is uncertainty of category:

```txt
I cannot tell what this is.
```

TURQUOISE is uncertainty of choice:

```txt
I cannot tell what to choose.
```

## PINK

PINK is not cute.

PINK is vascular.

It concerns living transformation, flesh, blood, tenderness, repair, and embodied liminality.

## SIGNAL / BROADCAST *(pending)*

Both are contemporary Engines.

SIGNAL is presence seeking reception:

```txt
I am here.
```

BROADCAST is message sent outward:

```txt
Here is what I send.
```

Both have three scale forms: Local, Network, and Massive. See section 18.

## ABYSSAL

ABYSSAL is a provisional Primordial Engine.

Core thesis:

```txt
Something very large learned to be very gentle.
```

Its restraint is not proof of harmlessness.

Everything about it stays uncertain: material, color, voice, body, intention. The entry is written in the language of unverified reports, and should stay that way.

It is loosely inspired by folklore around the 1962 Bluegill Triple Prime nuclear test. The Codex treats this as fiction, not as a claim about the real event.

## WREATH-EATER

THE WREATH-EATER is not a true Engine.

It is a fallen proto-Engine / memorial parasite / final hunger form of the Clinger.

Core distinction:

```txt
The Clinger wants to be held.
The Wreath-Eater wants to be mourned.
```

Do not make it grand or lavish.

Its horror is not abundance.

Its horror is escalation.

It is pathetic, vile, and hungry.

It feeds on tribute, not flowers.

It envies the dead.

It does not understand soup.

## UNBOWED

UNBOWED is not an Engine.

It is an unresolved entity.

It is everything the Wreath-Eater failed to become.

UNBOWED stands with the dead without consuming tribute.

Core phrase:

```txt
UNBOWED is not healed. It is vertical.
```

## CLINGER

CLINGER is a failed beginning / failed FIRST adjacency.

It wants to be held.

It produces guilt around abandonment.

It is sad, heavy, pathetic, and difficult to put down.

---

# 24. Styling / Theme Files

Main theme config:

```txt
quartz.config.yaml
```

Custom CSS:

```txt
quartz/styles/custom.scss
```

Important Sass rule:

```txt
@use rules must come before any other CSS rules.
```

`custom.scss` starts with:

```scss
@use "./variables.scss" as *;
```

That line must stay at the very top.

Do not place `@import` above it.

If forcing fonts in `custom.scss`, put overrides after the `@use` line.

Do not overwrite the graph patch. The deploy workflow runs `node scripts/patch-graph.mjs` before building.

---

# 25. Font Rules

Current fonts (set in `quartz.config.yaml`):

```txt
Headers: Exo 2
Body:    IBM Plex Mono
Code:    IBM Plex Mono
```

Desired style:

```txt
Site title: sci-fi / epic / titleplate
Body: monochrome typewriter / archive terminal
Content headings: clean and readable, not too clunky
```

Avoid making every heading overly sci-fi.

Only the site title should receive the most dramatic sci-fi treatment.

Body text should stay readable.

---

# 26. Theme Rules

The website should stay:

```txt
Dark
Monochrome
Minimal
Archive-like
Institutional
Slightly funereal
```

Avoid:

```txt
bright accent colors
cheerful blue links
neon cyberpunk
fantasy parchment
busy backgrounds
colorful tags
```

The archive does not offer daytime.

---

# 27. Quartz / GitHub Pages Notes

The site is built with Quartz and deployed to GitHub Pages.

Public URL:

```txt
https://programminginpoppyfields.github.io/engine-codex/
```

Standard update loop:

```bash
git add .
git commit -m "Describe what changed"
git push origin main
```

Use descriptive commit messages, not just "Update codex".

Deployment is handled by GitHub Actions in:

```txt
.github/workflows/deploy.yml
```

The deploy workflow:

- runs on pushes to `main`
- fails if `package-lock.json` contains `npm.apple.com` URLs
- runs `node scripts/patch-graph.mjs` before building
- deploys to GitHub Pages, not Cloudflare

`.npmrc` forces the public registry:

```txt
registry=https://registry.npmjs.org/
```

---

# 28. Local Development

Preview locally:

```bash
npx quartz build --serve
```

Then open the local preview URL shown in the terminal.

If the local build works, commit and push:

```bash
git add .
git commit -m "Describe what changed"
git push origin main
```

---

# 29. Troubleshooting Image 404s

Check for paths that break the rule in section 16:

```bash
grep -rn "](\.\./\|](/engine-codex/images\|src=\"\.\./" content
```

Ideally, it prints nothing.

If an image 404s on the live site but not locally, it was probably never committed (see section 30).

---

# 30. Troubleshooting Missing Images

Check whether the file exists:

```bash
ls content/images/42.jpg
```

Check filename case:

```txt
42.jpg is not 42.JPG
```

Check whether the file was committed:

```bash
git status
git ls-files content/images/42.jpg
```

Then push:

```bash
git add content/images
git commit -m "Add images"
git push origin main
```

---

# 31. Troubleshooting Fonts / CSS

If fonts do not update:

1. Check `quartz.config.yaml`.
2. Check `quartz/styles/custom.scss`.
3. Run a local build.
4. Hard refresh the browser.

Use:

```txt
Cmd + Shift + R
```

Do not place a Google `@import` above the Sass `@use` line.

---

# 32. Recommended AI Behavior

When asked to create new entries:

1. Use the standard template.
2. Output each profile as its own separate Markdown code block.
3. Put the intended file path above each block.
4. Use flat absolute `/images/N.jpg` paths.
5. Use only approved tags, and short titles.
6. Do not repeat the header image in the gallery.
7. If gallery images are unknown, write: No additional gallery images currently listed.
8. Preserve known canon relationships.
9. Keep the tone dark, precise, and readable.
10. Special Notes should be short, eerie, funny, or poignant, not a second full essay.

When asked to revise entries:

1. Preserve the Codex structure unless the user says otherwise.
2. Keep frontmatter minimal.
3. Update links and image paths.
4. Respect existing taxonomy decisions.
5. Avoid overcomplicating the folder structure.

When asked to list Engines from an uploaded volume:

1. Skim the uploaded file.
2. List only top-level Engines, Drives, Families, Groups, or Entities.
3. Do not invent missing entries.
4. Distinguish between actual family/group pages and loose tags.
5. Ask or infer folder placement based on the rules above.

---

# 33. Response Format for Future AI Sessions

When writing Codex entries, output each profile as its own separate copy-pasteable Markdown block.

Include the intended file path above each block.

Example:

```txt
## content/engine registry/example/index.md
```

Then the Markdown block.

Do not combine many profiles into one giant block unless the user explicitly asks.

When writing many entries, keep consistency over cleverness.

When unsure about a relation, either omit it or write:

```md
No known relations currently listed.
```

Do not invent excessive tags.

Do not overfill Special Notes.

Special Notes should feel like marginalia, not a second essay.

---

# 34. Final Maintenance Principle

Every Codex entry should answer:

```txt
What is it?
What is it made of?
What does it emit?
What does it sound like?
Where does it appear?
What does it leave behind?
What is it related to?
What weird little thing should the archive remember?
```

If an entry does that clearly, it belongs.

A true Engine bears meaning.

A Drive moves pressure.

A Group arranges related forces.

An unresolved entity wants meaning without always being able to bear it.

The Codex records the difference.
