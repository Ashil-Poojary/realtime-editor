import React, { useEffect } from 'react'

import ReactCodeMirror from '@uiw/react-codemirror'

import { createTheme } from '@uiw/codemirror-themes';
import { javascript } from '@codemirror/lang-javascript';

import { tags as t } from '@lezer/highlight';

const Editor = () => {


  const myDarkTheme = createTheme({
    theme: 'dark',
    settings: {
      background: '#1E1E1E',           // Dark background color
      backgroundImage: '',             // No background image
      foreground: '#D4D4D4',           // Light foreground text color
      caret: '#AEAFAD',                // Caret color
      selection: '#264F78',            // Selection background
      selectionMatch: '#264F78',       // Selection match background
      gutterBackground: '#1E1E1E',     // Gutter background (same as main background)
      gutterForeground: '#858585',     // Gutter text color
      gutterBorder: '#2D2D2D',         // Gutter border color
      gutterActiveForeground: '#D4D4D4', // Active line number color
      lineHighlight: '#333333',        // Highlight current line
    },
    styles: [
      { tag: t.comment, color: '#6A9955' },       // Comments in a soft green
      { tag: t.definition(t.typeName), color: '#4EC9B0' }, // Type definitions in a turquoise
      { tag: t.typeName, color: '#4EC9B0' },      // Type names in turquoise
      { tag: t.tagName, color: '#569CD6' },       // HTML/JSX tag names in blue
      { tag: t.variableName, color: '#9CDCFE' },  // Variable names in light blue
      { tag: t.keyword, color: '#C586C0' },       // Keywords in a soft purple
      { tag: t.string, color: '#CE9178' },        // Strings in a warm orange
      { tag: t.number, color: '#B5CEA8' },        // Numbers in a pale green
      { tag: t.function(t.variableName), color: '#DCDCAA' }, // Functions in yellow
      { tag: t.className, color: '#4EC9B0' },     // Class names in turquoise
    ],
  });
  
  
  return (
    <ReactCodeMirror
    value="console.log('hello world!');"
      height="100vh"
      theme={myDarkTheme}
      extensions={[javascript({ jsx: true })]}
      onChange={(value, viewUpdate) => {
        console.log('value:', value);
      }}
    
    ></ReactCodeMirror>
  )
}

export default Editor