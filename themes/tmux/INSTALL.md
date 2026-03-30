# Install (tmux)

1. Copy the full `themes/tmux/` directory to a stable location such as `~/.config/tmux/themes/hanabi/`.
2. Add one Hanabi entrypoint to your `.tmux.conf`:
   ```tmux
   run-shell ~/.config/tmux/themes/hanabi/hanabi.tmux
   ```
   Use `run-shell ~/.config/tmux/themes/hanabi/hanabi-light.tmux` for the alias variant.
3. Optional: add a common preset before the entrypoint:
   ```tmux
   set -g @hanabi-show-left-icon shortname
   set -g @hanabi-plugins "cwd git battery time"
   ```
4. Reload tmux:
   ```bash
   tmux source-file ~/.tmux.conf
   ```

More examples are in `CONFIG.md`.
