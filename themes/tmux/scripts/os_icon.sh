#!/usr/bin/env bash

case "$(uname -s 2>/dev/null)" in
  Darwin)
    printf ''
    ;;
  Linux)
    printf ''
    ;;
  FreeBSD)
    printf '󰣠'
    ;;
  *)
    printf '◉'
    ;;
esac
