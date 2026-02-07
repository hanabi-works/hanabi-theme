# Install (Zsh)

## Notes

- `hanabi.zsh-theme` sets `PROMPT`/`RPROMPT` (it will replace Powerlevel10k prompt if you use it).
- If you use Powerlevel10k (p10k) and only want Hanabi colors, use `hanabi.p10k.zsh`.

## Oh My Zsh

1. Copy `hanabi.zsh-theme` to `~/.oh-my-zsh/custom/themes/`.
2. Set `ZSH_THEME="hanabi"` in `~/.zshrc`.
3. Reload shell: `source ~/.zshrc`.

## Plain Zsh

1. Copy `hanabi.zsh-theme` anywhere you keep shell config files.
2. Add `source /path/to/hanabi.zsh-theme` to `~/.zshrc`.
3. Reload shell.

## Powerlevel10k (p10k)

1. Copy `hanabi.p10k.zsh` to a stable location (example: `~/.config/zsh/hanabi.p10k.zsh`).
2. Source it **after** your `~/.p10k.zsh` (or at the end of `~/.p10k.zsh`):
   ```zsh
   source ~/.config/zsh/hanabi.p10k.zsh
   ```
3. Restart your shell.
