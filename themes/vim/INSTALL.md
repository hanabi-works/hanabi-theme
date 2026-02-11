# Install (Vim / Neovim)

## Vim

1. Create colors directory if missing: `mkdir -p ~/.vim/colors`.
2. Copy your preferred file:
   - `colors/hanabi.vim` -> `~/.vim/colors/hanabi.vim` (dark)
   - `colors/hanabi_light.vim` -> `~/.vim/colors/hanabi_light.vim` (dark-palette alias)
3. Add to `~/.vimrc`:
   ```vim
   set termguicolors
   colorscheme hanabi
   ```
   Use `colorscheme hanabi_light` for the alias variant.

## Neovim

1. Create colors directory if missing: `mkdir -p ~/.config/nvim/colors`.
2. Copy your preferred file:
   - `colors/hanabi.vim` -> `~/.config/nvim/colors/hanabi.vim` (dark)
   - `colors/hanabi_light.vim` -> `~/.config/nvim/colors/hanabi_light.vim` (dark-palette alias)
3. Add to `~/.config/nvim/init.lua` or `init.vim`:
   ```lua
   vim.o.termguicolors = true
   vim.cmd('colorscheme hanabi')
   ```
   Use `vim.cmd('colorscheme hanabi_light')` for the alias variant.
