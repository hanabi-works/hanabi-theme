# Hanabi Light Theme for Powerlevel10k (p10k) (Dracula-style dark alias)
#
# This file is a *color overlay* for an existing Powerlevel10k prompt config.
# It intentionally does NOT set PROMPT/RPROMPT so that your prompt layout and
# segments remain unchanged.
#
# Usage (recommended):
# - Source this file AFTER your ~/.p10k.zsh, so it can override colors.
#
# Example:
#   # ~/.p10k.zsh (at the end)
#   source ~/.config/zsh/hanabi-light.p10k.zsh
#
# Palette reference: palette/hanabi-seed-35.json

() {
  # Base palette
  local comment='#5C6E89'
  local cyan='#5CFFF0'
  local green='#82FA82'
  local orange='#FFB65E'
  local pink='#FF6FA0'
  local red='#FB6583'
  local blue='#6F90FF'

  # Multiline frame + filler
  typeset -g POWERLEVEL9K_MULTILINE_FIRST_PROMPT_PREFIX="%F{$comment}╭─"
  typeset -g POWERLEVEL9K_MULTILINE_NEWLINE_PROMPT_PREFIX="%F{$comment}├─"
  typeset -g POWERLEVEL9K_MULTILINE_LAST_PROMPT_PREFIX="%F{$comment}╰─"
  typeset -g POWERLEVEL9K_MULTILINE_FIRST_PROMPT_SUFFIX="%F{$comment}─╮"
  typeset -g POWERLEVEL9K_MULTILINE_NEWLINE_PROMPT_SUFFIX="%F{$comment}─┤"
  typeset -g POWERLEVEL9K_MULTILINE_LAST_PROMPT_SUFFIX="%F{$comment}─╯"
  typeset -g POWERLEVEL9K_RULER_FOREGROUND="$comment"
  typeset -g POWERLEVEL9K_MULTILINE_FIRST_PROMPT_GAP_FOREGROUND="$comment"

  # os_icon
  typeset -g POWERLEVEL9K_OS_ICON_FOREGROUND="$cyan"

  # prompt_char
  typeset -g POWERLEVEL9K_PROMPT_CHAR_OK_{VIINS,VICMD,VIVIS,VIOWR}_FOREGROUND="$green"
  typeset -g POWERLEVEL9K_PROMPT_CHAR_ERROR_{VIINS,VICMD,VIVIS,VIOWR}_FOREGROUND="$red"

  # dir
  typeset -g POWERLEVEL9K_DIR_FOREGROUND="$blue"
  typeset -g POWERLEVEL9K_DIR_SHORTENED_FOREGROUND="$comment"
  typeset -g POWERLEVEL9K_DIR_ANCHOR_FOREGROUND="$blue"

  # vcs
  typeset -g POWERLEVEL9K_VCS_VISUAL_IDENTIFIER_COLOR="$pink"
  typeset -g POWERLEVEL9K_VCS_LOADING_VISUAL_IDENTIFIER_COLOR="$comment"
  typeset -g POWERLEVEL9K_VCS_CLEAN_FOREGROUND="$pink"
  typeset -g POWERLEVEL9K_VCS_UNTRACKED_FOREGROUND="$pink"
  typeset -g POWERLEVEL9K_VCS_MODIFIED_FOREGROUND="$orange"

  # status / exec time / time
  typeset -g POWERLEVEL9K_STATUS_OK_PIPE_FOREGROUND="$green"
  typeset -g POWERLEVEL9K_STATUS_ERROR_SIGNAL_FOREGROUND="$red"
  typeset -g POWERLEVEL9K_STATUS_ERROR_PIPE_FOREGROUND="$red"
  typeset -g POWERLEVEL9K_COMMAND_EXECUTION_TIME_FOREGROUND="$comment"
  typeset -g POWERLEVEL9K_TIME_FOREGROUND="$comment"
}
