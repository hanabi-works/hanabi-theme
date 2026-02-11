# Hanabi Light Zsh Theme (Dracula-style dark alias)
# Generated from palette/hanabi-seed-35.json
#
# Note:
# - This file sets PROMPT/RPROMPT (it will override Powerlevel10k prompt).
# - If you use Powerlevel10k (p10k) and only want Hanabi colors, use `hanabi-light.p10k.zsh`.

autoload -Uz vcs_info
setopt PROMPT_SUBST

zstyle ':vcs_info:*' enable git
zstyle ':vcs_info:git:*' formats ' %F{#FF6FA0}(%b)%f'
zstyle ':vcs_info:git:*' actionformats ' %F{#FB6583}(%b|%a)%f'

function precmd() {
  vcs_info
}

PROMPT='%F{#82FA82}%n@%m%f %F{#6F90FF}%1~%f${vcs_info_msg_0_}
%F{#FFB65E}->%f '
RPROMPT='%F{#5C6E89}%*%f'
