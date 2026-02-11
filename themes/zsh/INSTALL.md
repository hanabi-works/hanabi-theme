# Install (Zsh)

## Notes

- `hanabi.zsh-theme` and `hanabi-light.zsh-theme` set `PROMPT`/`RPROMPT` (they replace Powerlevel10k prompt if you use it).
- If you use Powerlevel10k (p10k) and only want Hanabi colors, use `hanabi.p10k.zsh` (dark) or `hanabi-light.p10k.zsh` (dark-palette alias).

## Oh My Zsh

1. Copy `hanabi.zsh-theme` to `~/.oh-my-zsh/custom/themes/`.
2. For alias mode, also copy `hanabi-light.zsh-theme`.
3. Set `ZSH_THEME="hanabi"` (dark) or `ZSH_THEME="hanabi-light"` (dark-palette alias) in `~/.zshrc`.
4. Reload shell: `source ~/.zshrc`.

## Plain Zsh

1. Copy `hanabi.zsh-theme` or `hanabi-light.zsh-theme` anywhere you keep shell config files.
2. Add `source /path/to/hanabi.zsh-theme` (dark) or `source /path/to/hanabi-light.zsh-theme` (dark-palette alias) to `~/.zshrc`.
3. Reload shell.

## Powerlevel10k (p10k)

1. Copy one overlay to a stable location:
   - dark: `hanabi.p10k.zsh`
   - alias: `hanabi-light.p10k.zsh` (same dark palette)
2. Source it **after** your `~/.p10k.zsh` (or at the end of `~/.p10k.zsh`):
   ```zsh
   source ~/.config/zsh/hanabi.p10k.zsh
   ```
   Use `source ~/.config/zsh/hanabi-light.p10k.zsh` for the alias variant.
3. Restart your shell.
