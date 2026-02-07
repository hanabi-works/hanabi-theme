# Install (Vim / Neovim)

## Vim

1. Create colors directory if missing: `mkdir -p ~/.vim/colors`.
2. Copy `colors/hanabi.vim` to `~/.vim/colors/hanabi.vim`.
3. Add to `~/.vimrc`:
   ```vim
   set termguicolors
   colorscheme hanabi
   ```

## Neovim

1. Create colors directory if missing: `mkdir -p ~/.config/nvim/colors`.
2. Copy `colors/hanabi.vim` to `~/.config/nvim/colors/hanabi.vim`.
3. Add to `~/.config/nvim/init.lua` or `init.vim`:
   ```lua
   vim.o.termguicolors = true
   vim.cmd('colorscheme hanabi')
   ```
