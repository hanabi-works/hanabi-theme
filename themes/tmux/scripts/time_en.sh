#!/usr/bin/env bash

weekday_num="$(date +%u 2>/dev/null || printf '1')"

case "$weekday_num" in
  1) weekday="Mon" ;;
  2) weekday="Tue" ;;
  3) weekday="Wed" ;;
  4) weekday="Thu" ;;
  5) weekday="Fri" ;;
  6) weekday="Sat" ;;
  7) weekday="Sun" ;;
  *) weekday="Mon" ;;
esac

date +"${weekday} %m/%d %H:%M %Z"
