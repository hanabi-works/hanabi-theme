# Config (tmux)

Hanabi for tmux ships as a standalone theme with bundled widgets.

## Quick start

```tmux
run-shell ~/.config/tmux/themes/hanabi/hanabi.tmux
```

## Popular presets

### Daily driver

```tmux
set -g @hanabi-show-powerline false
set -g @hanabi-show-left-icon "#h | #S"
set -g @hanabi-plugins "cwd git battery time"
```

### Powerline

```tmux
set -g @hanabi-show-powerline true
set -g @hanabi-show-edge-icons true
set -g @hanabi-show-left-icon "#h | #S"
set -g @hanabi-plugins "cwd git battery cpu-usage ram-usage time"
```

### Compact laptop

```tmux
set -g @hanabi-plugins "cwd git battery time"
set -g @hanabi-narrow-plugins "git battery time"
set -g @hanabi-show-empty-plugins false
```

## Widget names

Use these names inside `@hanabi-plugins` or `@hanabi-narrow-plugins`.

```text
attached-clients
battery
compact-alt
continuum
cpu-arch
cpu-usage
cwd
fossil
git
gpu-power-draw
gpu-ram-usage
gpu-usage
hg
krbtgt
kubernetes-context
libreview
mac-player
mpc
network
network-bandwidth
network-ping
network-public-ip
network-vpn
playerctl
ram-usage
spotify-tui
spr
ssh-session
synchronize-panes
sys-temp
terraform
time
tmux-ram-usage
uptime
custom:script-name
```
