# Obsidian Installation

## Local install (desktop)

1. Open your vault folder.
2. Ensure `.obsidian/themes` exists.
3. Create a folder named `Hanabi` under `.obsidian/themes`.
4. Copy these files from this repository root into that folder:
   - `manifest.json`
   - `theme.css`
5. In Obsidian, open **Settings -> Appearance -> Themes** and select **Hanabi**.
6. Choose your base scheme:
   - **Dark** for Hanabi dark mode
   - **Light** for Hanabi dark-palette alias mode

## Development workflow

For iterative edits, symlink the repo root into your vault theme directory so edits in this repo are reflected immediately.

```bash
ln -s /path/to/hanabi-theme /path/to/your-vault/.obsidian/themes/Hanabi
```

Then in Obsidian:

1. Enable **Settings -> Appearance -> CSS snippets -> Reload snippets** if needed.
2. Toggle away and back to the Hanabi theme when you want to force refresh.
