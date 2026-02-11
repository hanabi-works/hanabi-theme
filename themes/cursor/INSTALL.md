# Install (Cursor)

## Option A: Unpacked extension

1. Create extension folder: `~/.cursor/extensions/okash1n.hanabi-theme-cursor-0.2.0`.
2. Copy `package.json`, `hanabi-color-theme.json`, and `hanabi-light-color-theme.json` into that folder.
3. Restart Cursor.
4. Select theme: `Preferences: Color Theme` -> `Hanabi` (dark) or `Hanabi Light` (dark-palette alias).

## Option B: Build VSIX

1. In this directory, run: `npx @vscode/vsce package`.
2. In Cursor, run `Extensions: Install from VSIX...` and choose `hanabi-theme-cursor-0.2.0.vsix`.
