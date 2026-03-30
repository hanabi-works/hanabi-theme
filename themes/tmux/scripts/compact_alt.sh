#!/usr/bin/env bash
# setting the locale, some users have issues with different locales, this forces the correct one
export LC_ALL=en_US.UTF-8

current_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source $current_dir/utils.sh

main()
{
  # get options
  min_width=$(get_tmux_option "@hanabi-compact-min-width" "140")

  # get current window with
  local window_width
  window_width=$(tmux display-message -p "#{window_width}")

  # determine whether narrow
  if [[ "$window_width" -lt "$min_width" ]]; then
    narrow=true
  else
    narrow=false
  fi

  # get whether narrow previously
  narrow_mode="$(tmux show-option -gqv '@hanabi-narrow-mode')"

  # if width changed, set global var and reload
  if [[ "$narrow" != "$narrow_mode" ]]; then
    tmux set -g @hanabi-narrow-mode $narrow
    tmux source-file "$(get_tmux_option "@hanabi-config-path" "$HOME/.config/tmux/tmux.conf")"
  fi

  # show widget info if verbose
  verbose=$(get_tmux_option "@hanabi-compact-alt-verbose" false)
  if $verbose; then
    echo "$window_width - $narrow"
  fi
  # storing the refresh rate in the variable RATE, default is 5
  RATE=$(get_tmux_option "@hanabi-refresh-rate" 5)
  sleep $RATE
}

#run main driver program
main
