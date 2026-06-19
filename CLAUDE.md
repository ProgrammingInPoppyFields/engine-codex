# ENGINE CODEX — REPO RULES

## Folder structure

- Top-level content folders: `intro/`, `engine families/`, `engine registry/`, `unresolved entities/`, `interactions/`
- Every entry gets its own folder with an `index.md` inside it
- No loose `.md` files at the top of a section (except `index.md` for the section itself)
- Interactions are the exception — they can be loose `.md` files inside `interactions/`
- Folder names are lowercase, dash-separated: `fiber-optic`, `black-hole`, `empty-apartment`
- Spaces are allowed in top-level section folders only: `engine families`, `engine registry`, `unresolved entities`

## Frontmatter

- Every page must have YAML frontmatter with `title`, `classification`, and `tags`
- Titles are short: `CARBIDE`, `BLACK HOLE`, `PINK` — no "THE" prefix, no "ENGINE"/"DRIVE" suffix
- Exception: family/group/index pages keep full names: `THE COLOR ENGINES`, `ENGINE REGISTRY`
- Classification describes what the page is: `Engine`, `Drive`, `Engine Family`, `Engine Group`, `Unresolved Entity`, `Interaction`, `Poem`, `Index`, `Introductory Text`
- Tags are taxonomy only — family/group membership, nothing else
- Pages with no family membership use `tags: []`
- No frontmatter fields for `aliases`, `status`, `material_color`, `volume`, `date`

## Tags

- Tags are lowercase, dash-separated
- Approved tags: `first-engines`, `color-engines`, `material-engines`, `emanation-engines`, `contemporary-engines`, `aftermath-engines`, `molecular-engines`, `trinity-of-cognition`, `quartet-of-mattering`, `particulate-trio`, `color-of-almost`
- No generic tags: `engine`, `drive`, `index`, `poem`, `interaction`, `resonance`, `unresolved-entity`
- An engine can belong to multiple families (e.g. GRAY has `color-engines` + `contemporary-engines`)

## Engine profile template

- Sections in order: title, image, thesis quote, Aliases, Classification, Material/Color, Signal Profile, Sound Signature, Profile, Habitats, Aftereffects, Relations/Linked Entries, Gallery, Special Notes
- Additional sections allowed only when they genuinely help the entry
- Do not add extra sections just to make a file feel important

## Aliases

- Aliases go in the body under `## Aliases`, never in frontmatter
- Include at least one alias using "Engine" and/or "Drive"
- 3–5 aliases is enough
- Style should sound like Codex designations, not RPG stat blocks

## Images

- All images live flat in `content/images/` — no subfolders
- Images are numbered sequentially: `1.jpg`, `2.jpg`, `3.jpg`, etc.
- Format: JPEG at 85% quality, max width 1600px
- New images must be compressed before committing: resize to 1600px max width, convert to JPEG 85% quality using `sips`
- Compression command: `sips --resampleWidth 1600 input.png && sips -s format jpeg -s formatOptions 85 input.png --out output.jpg`
- Header image goes right after the `# TITLE` heading
- Header image is never repeated in the Gallery section
- Use absolute paths: `/images/42.jpg`
- No relative paths, no `/engine-codex/` prefix

## Links

- Use Quartz wikilinks: `[[engine registry/gray|THE GRAY ENGINE]]`
- Link to the folder path, not the file: `[[engine registry/gray]]` not `[[engine registry/gray/index.md]]`
- For display labels, use whatever fits the sentence — formal titles in indexes, short names in prose
- If a page doesn't exist yet, list it as plain text under "Pending Entries" — don't create dead links

## Tone

- Dark institutional archive field guide
- Precise, cosmic, emotionally intelligent, readable
- Occasionally funny in a dry, eerie way
- Not RPG, not fantasy-purple, not cute, not preachy
- Special Notes should feel like marginalia — short, eerie, funny, or poignant
- The Codex should feel filed, not preached

## Engine families

- Family pages live in `engine families/`
- Family pages describe the group concept and link to individual registry entries
- Subgroups (e.g. The Blue Ladder, The Twin Transparencies) live as sections within family pages, not as separate folders
- Individual engines live in `engine registry/`, never nested inside family folders

## Unresolved entities

- Live in `unresolved entities/`
- Can use the same profile template as engines
- Should not be called true Engines unless canon says so
- `tags: []` — no taxonomy tags unless they belong to a named group

## Interactions

- Live in `interactions/`
- Filename format: `name1-name2.md` (dash-separated, no "the")
- Use `↔` in the title: `INDIGO ↔ TURQUOISE`
- Tag with the relevant family if clearly applicable, otherwise `tags: []`

## Git and deployment

- Commit with descriptive messages
- Author email: personal, not corporate
- GPG signing disabled for this repo
- Deploy workflow runs `node scripts/patch-graph.mjs` before build
- CI checks for `npm.apple.com` in `package-lock.json`
- `.npmrc` forces public registry: `registry=https://registry.npmjs.org/`

## What not to do

- Don't use numbered prefixes on folders (old convention, removed)
- Don't nest individual engines inside family folders
- Don't add tags for content type (engine, drive, poem, etc.)
- Don't put aliases in frontmatter
- Don't repeat the header image in the gallery
- Don't use relative image paths
- Don't invent relations just to fill the section
- Don't create more than 3–5 tags per page
- Don't overwrite the graph patch — the build script handles it
