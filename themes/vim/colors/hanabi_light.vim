" Hanabi Vim theme
" Generated from palette/hanabi-seed-35.json

if exists('syntax_on')
  syntax reset
endif

let g:colors_name = 'hanabi_light'
set background=dark

if has('termguicolors')
  set termguicolors
endif

let s:bg = '#21202C'
let s:fg = '#FCFCFA'
let s:selection = '#4A435D'
let s:comment = '#5C6E89'
let s:cyan = '#5CFFF0'
let s:green = '#82FA82'
let s:orange = '#FFB65E'
let s:pink = '#FF6FA0'
let s:purple = '#6F90FF'
let s:red = '#FB6583'
let s:yellow = '#FFF066'
let s:bg2 = '#333141'
let s:bg3 = '#302D43'

function! s:hi(group, fg, bg, attr)
  execute 'hi ' . a:group . ' guifg=' . a:fg . ' guibg=' . a:bg . ' gui=' . a:attr . ' cterm=' . a:attr
endfunction

call s:hi('Normal', s:fg, s:bg, 'NONE')
call s:hi('Comment', s:comment, 'NONE', 'italic')
call s:hi('Constant', s:orange, 'NONE', 'NONE')
call s:hi('String', s:green, 'NONE', 'NONE')
call s:hi('Character', s:green, 'NONE', 'NONE')
call s:hi('Number', s:orange, 'NONE', 'NONE')
call s:hi('Boolean', s:orange, 'NONE', 'NONE')
call s:hi('Float', s:orange, 'NONE', 'NONE')
call s:hi('Identifier', s:fg, 'NONE', 'NONE')
call s:hi('Function', s:cyan, 'NONE', 'NONE')
call s:hi('Statement', s:pink, 'NONE', 'NONE')
call s:hi('Conditional', s:pink, 'NONE', 'NONE')
call s:hi('Repeat', s:pink, 'NONE', 'NONE')
call s:hi('Label', s:purple, 'NONE', 'NONE')
call s:hi('Operator', s:comment, 'NONE', 'NONE')
call s:hi('Keyword', s:pink, 'NONE', 'NONE')
call s:hi('Exception', s:red, 'NONE', 'NONE')
call s:hi('PreProc', s:purple, 'NONE', 'NONE')
call s:hi('Include', s:pink, 'NONE', 'NONE')
call s:hi('Define', s:pink, 'NONE', 'NONE')
call s:hi('Macro', s:purple, 'NONE', 'NONE')
call s:hi('Type', s:purple, 'NONE', 'NONE')
call s:hi('StorageClass', s:purple, 'NONE', 'NONE')
call s:hi('Structure', s:purple, 'NONE', 'NONE')
call s:hi('Typedef', s:purple, 'NONE', 'NONE')
call s:hi('Special', s:cyan, 'NONE', 'NONE')
call s:hi('Underlined', s:cyan, 'NONE', 'underline')
call s:hi('Error', '#FAF9F9', s:red, 'bold')
call s:hi('Todo', s:yellow, s:bg2, 'bold')

call s:hi('LineNr', s:comment, s:bg, 'NONE')
call s:hi('CursorLineNr', s:orange, s:bg, 'bold')
call s:hi('CursorLine', 'NONE', s:bg2, 'NONE')
call s:hi('ColorColumn', 'NONE', s:bg2, 'NONE')
call s:hi('Visual', 'NONE', s:selection, 'NONE')
call s:hi('Search', s:bg, s:yellow, 'NONE')
call s:hi('IncSearch', s:bg, s:orange, 'bold')
call s:hi('MatchParen', s:yellow, s:bg3, 'bold')
call s:hi('Pmenu', s:fg, s:bg3, 'NONE')
call s:hi('PmenuSel', s:bg, s:cyan, 'NONE')
call s:hi('StatusLine', s:fg, s:bg2, 'bold')
call s:hi('StatusLineNC', s:comment, s:bg2, 'NONE')
call s:hi('VertSplit', s:bg2, s:bg2, 'NONE')
call s:hi('TabLine', s:comment, s:bg2, 'NONE')
call s:hi('TabLineSel', s:fg, s:bg3, 'bold')
call s:hi('TabLineFill', s:comment, s:bg2, 'NONE')

if has('nvim') || has('terminal')
  let g:terminal_ansi_colors = [
        \ '#20232E', '#FC6B74', '#87F879', '#FFE74A',
        \ '#6D92F7', '#E66B9A', '#4FFAF7', '#F8FFF4',
        \ '#667893', '#FEA8AC', '#B9FFAC', '#FFF79E',
        \ '#A3B9FF', '#F299BD', '#92FFF2', '#FFF6F6'
        \ ]
endif
