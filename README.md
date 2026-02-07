# Hanabi Theme

An original high-contrast dark theme family for terminals and editors.

![Hanabi Theme Preview](./samples/image.png)

## Project Focus and Support Policy

This project is built first for the tools I personally use.
The main priority is making Hanabi easy to use from the Visual Studio Code side, including a smooth path for store distribution.

Support for other tools is best-effort.
If you open a clear issue with steps and environment details, I will try to handle it as time allows.
You can also contact me on X: [@okash1n](https://x.com/okash1n).

## Palette Preview

The project is built from a shared palette source.

![Hanabi Seed 35](./palette/hanabi-seed-35.svg)

- Palette source: `palette/hanabi-seed-35.json`
- Palette preview: `palette/hanabi-seed-35.svg`

## Supported Targets

| Target | Status | Directory |
| --- | --- | --- |
| Ghostty | Ready | `themes/ghostty` |
| iTerm2 | Ready | `themes/iterm2` |
| Terminal.app (macOS) | Ready | `themes/terminal-app` |
| [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=okash1n.hanabi-theme-vscode) | Ready | `themes/visual-studio-code` |
| Windows Terminal | Ready | `themes/windows-terminal` |
| Cursor | Ready | `themes/cursor` |
| Vim / Neovim | Ready | `themes/vim` |
| Zsh | Ready | `themes/zsh` |

## Install

Each target has its own installation guide.

- Ghostty: `themes/ghostty/INSTALL.md`
- iTerm2: `themes/iterm2/INSTALL.md`
- Terminal.app: `themes/terminal-app/INSTALL.md`
- Visual Studio Code: `themes/visual-studio-code/INSTALL.md`
- Windows Terminal: `themes/windows-terminal/INSTALL.md`
- Cursor: `themes/cursor/INSTALL.md`
- Vim / Neovim: `themes/vim/INSTALL.md`
- Zsh: `themes/zsh/INSTALL.md`

## Repository Layout

```text
.
├── assets
├── images
├── palette
├── samples
└── themes
    ├── cursor
    ├── ghostty
    ├── iterm2
    ├── terminal-app
    ├── vim
    ├── visual-studio-code
    ├── windows-terminal
    └── zsh
```

## Notes

- This repository is monorepo-first (no submodules).
- Theme files are generated and curated from a shared Hanabi palette model.

## License

MIT. See `LICENSE`.
