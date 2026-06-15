# AI README — THE POST-PRIMAL LITURGY ENGINE CODEX

This file is a working context guide for future AI-assisted writing sessions involving The Post-Primal Liturgy / Engine Codex.

Use this document as the source of truth for:

- Codex structure
- Engine profile format
- folder and image conventions
- taxonomy rules
- tone and style
- technical maintenance rules
- known canon relationships
- Quartz / GitHub Pages gotchas

The live Codex is here:

txt https://programminginpoppyfields.github.io/engine-codex/ 

The site is a public Quartz archive of Engines, Drives, Engine Groups, unresolved entities, aftermath phenomena, variants, galleries, and related symbolic structures.

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

txt dark institutional archive field guide memorial plaque cosmic incident report museum wall text dry academic note haunted technical documentation public filing system for impossible things 

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

A Drive can use the same profile template as an Engine.

## Engine Group

A clustered structure: related Engines, Drives, or states that operate best as a set.

Some groups contain all member descriptions in a single page.

Some groups act as hubs, with member profiles nested inside.

## Unresolved Entity

A proto-Engine, fallen form, parasite, restricted phenomenon, shadow-form, or symbolic structure that failed to achieve stable Engine integrity.

Unresolved entities are not necessarily weaker than Engines.

They are less taxonomically clean.

## Fallen Proto-Engine

A structure that gathered symbolic density, persistence, and gravity, but failed to develop the dignity, witness, service, protection, or moral coherence required to become a true Engine.

Example:

txt THE WREATH-EATER 

---

# 4. Repository Structure

This is a Quartz site.

Primary content lives in:

txt content/ 

Main content structure:

txt content/   index.md    engines/     index.md     first/       index.md     unsung/       index.md     white-hole/       index.md     black-hole/       index.md     pink/       index.md     indigo/       index.md     turquoise/       index.md     signal/       index.md     broadcast/       index.md     ...    groups/     index.md     trinity-of-cognition/       index.md     particulate-finalities/       index.md       sand/         index.md       ash/         index.md       dust/         index.md     four-monoliths/       index.md    unresolved-entities/     index.md     clinger/       index.md     unbowed/       index.md     wreath-eater/       index.md    images/     first/       1.png       2.png       3.png     unsung/       1.png       2.png       3.png     signal/       1.png       2.png       s.png       m.png       l.png     ... 

Do not create new top-level content folders unless needed.

Normal Engines, Drives, and Aftermath Engines all live under:

txt content/engines/ 

Unresolved entities live under:

txt content/unresolved-entities/ 

Actual Engine Groups live under:

txt content/groups/ 

Loose families like material-engines, color-engines, aftermath-engines, and contemporary-engine are tags, not folders.

---

# 5. Markdown File Rule

Every entry should be an index.md inside its own folder.

Correct:

txt content/engines/pink/index.md content/engines/white-hole/index.md content/unresolved-entities/clinger/index.md content/groups/particulate-finalities/sand/index.md 

Avoid loose Markdown files like:

txt content/engines/pink.md content/engines/white-hole.md 

The folder/index format keeps URLs clean and Quartz-friendly.

---

# 6. URL Structure

Quartz turns this:

txt content/engines/pink/index.md 

into this:

txt /engine-codex/engines/pink/ 

Quartz turns this:

txt content/groups/particulate-finalities/sand/index.md 

into this:

txt /engine-codex/groups/particulate-finalities/sand/ 

Use short, lowercase, dash-separated folder names.

Good:

txt white-hole black-hole empty-apartment crimson-diamond second-death wreath-eater particulate-finalities 

Avoid:

txt White Hole white_hole THE WHITE HOLE ENGINE drive-of-the-second-death 

Folder names should be stable, simple slugs.

Full formal names belong in the page title.

---

# 7. Frontmatter Rules

Keep frontmatter minimal.

Use only:

md --- title: classification: tags: --- 

For Engines:

md --- title: THE ENGINE NAME classification: Engine tags:   - engine   - family-tag --- 

For Drives:

md --- title: THE DRIVE NAME classification: Drive tags:   - drive   - family-tag --- 

For Engine Groups:

md --- title: THE GROUP NAME classification: Engine Group tags:   - engine-group   - group-tag --- 

For Unresolved Entities:

md --- title: THE ENTITY NAME classification: Unresolved Entity tags:   - unresolved-entity --- 

For Fallen Proto-Engines:

md --- title: THE ENTITY NAME classification: Fallen Proto-Engine tags:   - unresolved-entity   - fallen-proto-engine --- 

Do not put these in frontmatter:

txt aliases material_color status volume 

Aliases, Material / Color, Signal Profile, and Sound Signature belong in visible page sections.

---

# 8. Standard Engine / Drive Template

Use this for normal Engine or Drive pages.

md --- title: THE ENGINE NAME classification: Engine tags:   - engine   - relevant-family-tag ---  # THE ENGINE NAME  ![THE ENGINE NAME](/engine-codex/images/engine-name/1.png)  > One-line thesis.  ## Aliases  - ALIAS - Another Alias  ## Classification  **Engine**   **Specific Engine Family**  ## Material / Color  What the Engine appears to be made of.  Include physical material, color, texture, light behavior, symbolic matter, or atmospheric material.  ## Signal Profile  What the Engine broadcasts conceptually or emotionally.  This is not just color/material. It is the pressure, theme, dread, mercy, or psychic weather emitted by the Engine.  ## Sound Signature  What the Engine sounds like nearby.  Use concrete sonic imagery: hum, silence, static, pressure, scraping, chime, breath, room tone, etc.  ## Profile  Core explanatory bio.  This should define what the Engine is, what it does, and what condition it represents.  Keep paragraphs short.  Use line breaks for emphasis when useful.  ## Habitats  - Place or condition - Place or condition - Place or condition - Any field where the Engine tends to appear  ## Aftereffects  - Effect after contact - Emotional residue - Behavioral shift - Perceptual change  ## Relations / Linked Entries  - [[engines/example|THE EXAMPLE ENGINE]] — brief relationship note. - [[unresolved-entities/example|THE EXAMPLE ENTITY]] — brief relationship note.  ## Gallery  ![ENGINE gallery image 2](/engine-codex/images/engine-name/2.png)  ![ENGINE gallery image 3](/engine-codex/images/engine-name/3.png)  ## Special Notes  - Small eerie, funny, poignant, or archival note. - Another field observation. - Something that sounds like a tired curator wrote it at 2:13 a.m. 

---

# 9. Standard Engine Group Template

Use this for group pages.

md --- title: THE GROUP NAME classification: Engine Group tags:   - engine-group   - relevant-group-tag ---  # THE GROUP NAME  ![THE GROUP NAME](/engine-codex/images/group-name/1.png)  > One-line thesis.  ## Aliases  - Alias - Alias  ## Classification  **Engine Group**  ## Material / Color  Shared material, palette, state, or symbolic matter across the group.  ## Signal Profile  What the group broadcasts as a system.  ## Sound Signature  What the group sounds like as a combined field.  ## Profile  Explain the group and its organizing principle.  ## Members  - [[groups/group-name/member-name|THE MEMBER ENGINE]] - [[groups/group-name/member-name|THE MEMBER ENGINE]]  Or, if members do not get separate pages, describe each member inline:  ### MEMBER ONE  Description.  ### MEMBER TWO  Description.  ## Habitats  - Place - Place - Place  ## Aftereffects  - Effect - Effect - Effect  ## Relations / Linked Entries  No known relations currently listed.  ## Gallery  ![GROUP gallery image 2](/engine-codex/images/group-name/2.png)  ![GROUP gallery image 3](/engine-codex/images/group-name/3.png)  ## Special Notes  - Small field note. - Weird archive observation. 

---

# 10. Standard Page Section Order

Use this order for normal Engine / Drive pages:

md # THE ENGINE NAME  ![THE ENGINE NAME](/engine-codex/images/engine-name/1.png)  > One-line thesis.  ## Aliases  ## Classification  ## Material / Color  ## Signal Profile  ## Sound Signature  ## Profile  ## Habitats  ## Aftereffects  ## Relations / Linked Entries  ## Gallery  ## Special Notes 

Additional sections are allowed when they genuinely help the entry.

Examples:

md ## Contact Symptoms ## Behavior ## Failure Classification ## Scale Forms ## Members ## Relation to the Clinger ## Relation to UNBOWED 

Do not add extra sections just to make the file feel important.

---

# 11. Tags

Tags should be functional, not decorative.

Common tags:

txt engine drive engine-group unresolved-entity fallen-proto-engine existence-engines color-engines material-engines emanation-engines aftermath-engines contemporary-engine particulate-finalities four-monoliths restricted-entry 

Use lowercase dash-separated tags.

Avoid many tags per entry.

Usually 2–3 is enough.

Examples:

md tags:   - engine   - existence-engines 

md tags:   - drive   - color-engines 

md tags:   - engine   - material-engines 

md tags:   - engine   - emanation-engines   - contemporary-engine 

md tags:   - engine   - aftermath-engines 

md tags:   - engine-group   - particulate-finalities 

md tags:   - engine-group   - four-monoliths 

md tags:   - unresolved-entity 

md tags:   - unresolved-entity   - fallen-proto-engine 

---

# 12. Actual Group Pages

Loose families are tags only.

These do not need group pages unless the user explicitly asks:

txt existence-engines color-engines material-engines emanation-engines aftermath-engines contemporary-engine 

Actual group pages currently include:

txt content/groups/trinity-of-cognition/index.md content/groups/particulate-finalities/index.md content/groups/four-monoliths/index.md 

---

# 13. Particulate Finalities Structure

The Particulate Finalities have both a group-wide profile and individual member profiles.

Group page:

txt content/groups/particulate-finalities/index.md 

Individual member profiles:

txt content/groups/particulate-finalities/sand/index.md content/groups/particulate-finalities/ash/index.md content/groups/particulate-finalities/dust/index.md 

Image folder:

txt content/images/particulate-trio/ 

Group images:

txt content/images/particulate-trio/1.png content/images/particulate-trio/2.png content/images/particulate-trio/3.png 

Member image folders:

txt content/images/particulate-trio/sand/ content/images/particulate-trio/ash/ content/images/particulate-trio/dust/ 

Member image examples:

txt content/images/particulate-trio/sand/1.png content/images/particulate-trio/sand/2.png  content/images/particulate-trio/ash/1.png content/images/particulate-trio/ash/2.png  content/images/particulate-trio/dust/1.png content/images/particulate-trio/dust/2.png 

Use absolute image paths:

md ![THE SAND ENGINE](/engine-codex/images/particulate-trio/sand/1.png) 

---

# 14. Four Monoliths Structure

The Four Monoliths use one group page only.

No individual profile pages for Dark Matter, Antimatter, White Matter, or Gray Matter.

Group page:

txt content/groups/four-monoliths/index.md 

Images live under:

txt content/images/monoliths-of-mattering/ 

Example paths:

md ![THE FOUR MONOLITHS OF MATTER](/engine-codex/images/monoliths-of-mattering/1.png)  ![Dark Matter](/engine-codex/images/monoliths-of-mattering/2.png)  ![Antimatter](/engine-codex/images/monoliths-of-mattering/3.png)  ![White Matter](/engine-codex/images/monoliths-of-mattering/4.png)  ![Gray Matter](/engine-codex/images/monoliths-of-mattering/5.png) 

---

# 15. Aftermath Engines

Aftermath Engines live in the general engines folder:

txt content/engines/ 

They are not placed in a separate content/aftermath/ folder.

Known Aftermath entries:

txt content/engines/crimson-diamond/index.md content/engines/afteraction/index.md content/engines/second-death/index.md content/engines/oblivion/index.md content/engines/untested/index.md content/engines/isolation/index.md content/engines/indescribable/index.md 

They use:

md tags:   - engine   - aftermath-engines 

or, for Drives:

md tags:   - drive   - aftermath-engines 

---

# 16. Unresolved Entities

Unresolved entities live in:

txt content/unresolved-entities/ 

Examples:

txt content/unresolved-entities/clinger/index.md content/unresolved-entities/unbowed/index.md content/unresolved-entities/wreath-eater/index.md 

Unresolved entities can still use the same broad profile structure, but should not be called true Engines unless canon says so.

Use:

md tags:   - unresolved-entity 

For WREATH-EATER specifically:

md tags:   - unresolved-entity   - fallen-proto-engine 

---

# 17. Image Folder Structure

Images live under:

txt content/images/ 

Each entry gets its own image folder using the same slug as its page folder whenever possible.

Examples:

txt content/images/pink/ content/images/white-hole/ content/images/crimson-diamond/ content/images/wreath-eater/ 

Normal image numbering:

txt 1.png = header / representative image 2.png = gallery image 1 3.png = gallery image 2 4.png = gallery image 3 

The header image should not be repeated in the gallery.

Correct:

md ![THE PINK DRIVE](/engine-codex/images/pink/1.png)  ## Gallery  ![PINK gallery image 2](/engine-codex/images/pink/2.png)  ![PINK gallery image 3](/engine-codex/images/pink/3.png) 

Incorrect:

md ![THE PINK DRIVE](/engine-codex/images/pink/1.png)  ## Gallery  ![PINK gallery image 1](/engine-codex/images/pink/1.png) 

---

# 18. Image Path Rule

Because this site is deployed as a GitHub Pages project site at:

txt https://programminginpoppyfields.github.io/engine-codex/ 

all image paths in Markdown should use:

txt /engine-codex/images/... 

Correct:

md ![THE FIRST ENGINE](/engine-codex/images/first/1.png) 

Incorrect:

md ![THE FIRST ENGINE](../../images/first/1.png) ![THE FIRST ENGINE](../images/first/1.png) ![THE FIRST ENGINE](/images/first/1.png) 

Why: relative paths can escape the /engine-codex/ base path on GitHub Pages and produce 404 errors like:

txt https://programminginpoppyfields.github.io/images/pink/2.png 

The correct deployed URL should be:

txt https://programminginpoppyfields.github.io/engine-codex/images/pink/2.png 

---

# 19. Image File Naming

Use lowercase file extensions:

txt 1.png 2.png 3.png 

Avoid uppercase extensions:

txt 1.PNG 2.JPG 

GitHub Pages is case-sensitive.

This means:

txt 2.png 

and:

txt 2.PNG 

are not the same file.

If an image is not loading, check:

bash ls content/images/<entry-name> 

Then confirm the Markdown path exactly matches the filename.

---

# 20. Special Image Structures

## SIGNAL and BROADCAST Scale Images

SIGNAL and BROADCAST each have three scale forms:

txt s.png = Local Scale m.png = Network Scale l.png = Massive Scale 

Signal:

txt content/images/signal/s.png content/images/signal/m.png content/images/signal/l.png 

Broadcast:

txt content/images/broadcast/s.png content/images/broadcast/m.png content/images/broadcast/l.png 

Use this section in their pages:

html ## Scale Forms  <div style="display: flex; gap: 1rem; align-items: flex-start;">   <div style="flex: 1;">     <img src="/engine-codex/images/signal/s.png" alt="SIGNAL small scale">     <p><strong>Local Scale</strong></p>   </div>   <div style="flex: 1;">     <img src="/engine-codex/images/signal/m.png" alt="SIGNAL medium scale">     <p><strong>Network Scale</strong></p>   </div>   <div style="flex: 1;">     <img src="/engine-codex/images/signal/l.png" alt="SIGNAL large scale">     <p><strong>Massive Scale</strong></p>   </div> </div> 

For Broadcast, replace signal with broadcast.

---

# 21. Favicon

The favicon should live at:

txt content/static/favicon.png 

Recommended size:

txt 512 x 512 px 

Recommended style:

txt black background white / bone-white simple symbol minimal detail high contrast 

Good favicon concepts:

txt thin white aperture small monolith broken halo diamond outline abstract Engine sigil 

Avoid detailed images.

Favicons are tiny and details become soup.

Browsers cache favicons aggressively. If the favicon does not update, test in an incognito window or directly open:

txt https://programminginpoppyfields.github.io/engine-codex/favicon.png 

---

# 22. Relations / Linked Entries Rules

Use Quartz wikilinks.

Examples:

md - [[engines/black-hole|THE BLACK HOLE ENGINE]] — paired counterpart; receives what WHITE HOLE emits. - [[unresolved-entities/clinger|THE CLINGER]] — failed or unresolved adjacency. - [[groups/particulate-finalities/dust|THE DUST ENGINE]] — sibling finality. 

If there are no known relations:

md No known relations currently listed. 

Do not invent relations just to fill the section.

---

# 23. Gallery Rules

If there are gallery images:

md ## Gallery  ![ENGINE gallery image 2](/engine-codex/images/engine-name/2.png)  ![ENGINE gallery image 3](/engine-codex/images/engine-name/3.png) 

If there are no gallery images yet:

md ## Gallery  No additional gallery images currently listed. 

Never repeat 1.png in the gallery.

---

# 24. Known Entry Relations

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

## ULTRAVIOLET

- linked to UNSUNG

## SIGNAL

- linked to BROADCAST

## BROADCAST

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

## CRIMSON DIAMOND

- linked to DIAMOND
- linked to UNTESTED

## AFTERACTION

- currently no known linked entries unless user specifies

## SECOND DEATH

- linked to UNSUNG
- linked to OBLIVION

## OBLIVION

- linked to DUST
- linked to SECOND DEATH

## UNTESTED

- linked to GLASS
- linked to CRIMSON DIAMOND

## ISOLATION

- linked to ISLAND
- may be linked to EMPTY APARTMENT if useful

---

# 25. Important Canon Notes

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

txt Anything is possible. 

BLACK HOLE says:

txt So be it. 

WHITE HOLE emits.

BLACK HOLE receives.

## INDIGO / TURQUOISE

Both concern uncertainty, but differently.

INDIGO is uncertainty of category:

txt I cannot tell what this is. 

TURQUOISE is uncertainty of choice:

txt I cannot tell what to choose. 

## PINK

PINK is not cute.

PINK is vascular.

It concerns living transformation, flesh, blood, tenderness, repair, and embodied liminality.

## SIGNAL / BROADCAST

Both are contemporary Engines.

SIGNAL is presence seeking reception:

txt I am here. 

BROADCAST is message sent outward:

txt Here is what I send. 

Both have three scale forms:

txt s.png = Local Scale m.png = Network Scale l.png = Massive Scale 

## WREATH-EATER

THE WREATH-EATER is not a true Engine.

It is a fallen proto-Engine / memorial parasite / final hunger form of the Clinger.

Core distinction:

txt The Clinger wants to be held. The Wreath-Eater wants to be mourned. 

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

txt UNBOWED is not healed. It is vertical. 

## CLINGER

CLINGER is a failed beginning / failed FIRST adjacency.

It wants to be held.

It produces guilt around abandonment.

It is sad, heavy, pathetic, and difficult to put down.

---

# 26. Styling / Theme Files

Main theme config:

txt quartz.config.yaml 

Custom CSS:

txt quartz/styles/custom.scss 

Important Sass rule:

txt @use rules must come before any other CSS rules. 

If custom.scss has:

scss @use "./variables.scss" as *; 

that line must stay at the very top.

Do not place @import above it.

If forcing fonts in custom.scss, put overrides after the @use line.

---

# 27. Font Rules

Current desired style:

txt Site title: sci-fi / epic / titleplate Body: monochrome typewriter / archive terminal Content headings: clean and readable, not too clunky 

Avoid making every heading overly sci-fi.

Only the site title should receive the most dramatic sci-fi treatment.

Body text should stay readable.

---

# 28. Theme Rules

The website should stay:

txt Dark Monochrome Minimal Archive-like Institutional Slightly funereal 

Avoid:

txt bright accent colors cheerful blue links neon cyberpunk fantasy parchment busy backgrounds colorful tags 

The archive does not offer daytime.

---

# 29. Quartz / GitHub Pages Notes

The site is built with Quartz and deployed to GitHub Pages.

Public URL:

txt https://programminginpoppyfields.github.io/engine-codex/ 

Standard update loop:

bash git add . git commit -m "Update codex" git push origin main 

Deployment is handled by GitHub Actions.

If deployment does not start, check:

txt .github/workflows/deploy.yml 

The deploy workflow should target:

txt main 

and deploy to GitHub Pages, not Cloudflare.

---

# 30. Local Development

Preview locally:

bash npx quartz build --serve 

Then open the local preview URL shown in terminal.

If the local build works, commit and push:

bash git add . git commit -m "Update codex" git push origin main 

---

# 31. Troubleshooting Image 404s

If the browser console shows:

txt GET https://programminginpoppyfields.github.io/images/pink/2.png 404 

then the image path is wrong.

It is missing:

txt /engine-codex/ 

Correct path:

txt https://programminginpoppyfields.github.io/engine-codex/images/pink/2.png 

Fix Markdown paths to:

md /engine-codex/images/pink/2.png 

Run this to check for bad paths:

bash grep -R "\.\./.*images\|](/images\|src=\"/images" content 

Ideally, it prints nothing.

---

# 32. Troubleshooting Missing Images

Check whether the file exists:

bash ls content/images/<entry-name> 

Check filename case:

txt 2.png is not 2.PNG 

Check whether the file was committed:

bash git status git ls-files content/images/<entry-name> 

Then push:

bash git add content/images git commit -m "Add images" git push origin main 

---

# 33. Troubleshooting Fonts / CSS

If fonts do not update:

1. Check quartz.config.yaml.
2. Check quartz/styles/custom.scss.
3. Run local build.
4. Hard refresh browser.

Use:

txt Cmd + Shift + R 

Do not place Google @import above Sass @use.

If custom.scss starts with:

scss @use "./variables.scss" as *; 

that line must remain first.

---

# 34. Recommended AI Behavior

When asked to create new entries:

1. Use the standard template.
2. Output each profile as its own separate Markdown code block.
3. Put the intended file path above each block.
4. Use absolute /engine-codex/images/... paths.
5. Do not invent too many tags.
6. Do not repeat header image in gallery.
7. If gallery images are unknown, say No additional gallery images currently listed.
8. Preserve known canon relationships.
9. Keep the tone dark, precise, and readable.
10. Special Notes should be short, eerie, funny, or poignant — not a second full essay.

When asked to revise entries:

1. Preserve the Codex structure unless user says otherwise.
2. Keep frontmatter minimal.
3. Update links and image paths.
4. Respect existing taxonomy decisions.
5. Avoid overcomplicating folder structure.

When asked to list Engines from an uploaded volume:

1. Skim the uploaded file.
2. List only top-level Engines, Drives, Groups, or Entities.
3. Do not invent missing entries.
4. Distinguish between actual group pages and loose tags.
5. Ask or infer folder placement based on existing rules.

---

# 35. Response Format for Future AI Sessions

When writing Codex entries, output each profile as its own separate copy-pasteable Markdown block.

Include the intended file path above each block.

Example:

txt ## content/engines/example/index.md 

Then the Markdown block.

Do not combine many profiles into one giant block unless the user explicitly asks.

When writing many entries, keep consistency over cleverness.

When unsure about a relation, either omit it or write:

md No known relations currently listed. 

Do not invent excessive tags.

Do not overfill Special Notes.

Special Notes should feel like marginalia, not a second essay.

---

# 36. Final Maintenance Principle

Every Codex entry should answer:

txt What is it? What is it made of? What does it emit? What does it sound like? Where does it appear? What does it leave behind? What is it related to? What weird little thing should the archive remember? 

If an entry does that clearly, it belongs.

A true Engine bears meaning.

A Drive moves pressure.

A Group arranges related forces.

An unresolved entity wants meaning without always being able to bear it.

The Codex records the difference.