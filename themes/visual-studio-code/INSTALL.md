# Install (Visual Studio Code)

## Option A: Unpacked extension (quick local install)

1. Create extension folder: `~/.vscode/extensions/okash1n.hanabi-theme-vscode-0.2.0`.
2. Copy `package.json`, `hanabi-color-theme.json`, and `hanabi-light-color-theme.json` into that folder.
3. Reload VS Code (`Developer: Reload Window`).
4. Select theme: `Preferences: Color Theme` -> `Hanabi` (dark) or `Hanabi Light` (dark-palette alias).

## Option B: Build VSIX

1. In this directory, run: `npx @vscode/vsce package`.
2. Install `hanabi-theme-vscode-0.2.0.vsix` using `Extensions: Install from VSIX...`.
