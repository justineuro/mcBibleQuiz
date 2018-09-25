/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
console.log(x = 1);
x = [
  {
    A: 'In the beginning'
  },
  {
    B: 'Let there be Light'
  },
  {
    C: 'WHen yet there was nothing'
  },
  {
    D: 'The Lord God said'
  }
];
console.log(x['A']);
console.log(creation = [
  ['The Book of Genesis opens with the Hebrew word ‘bereshit’, what is this word’s translation into English?',
  [
    {
      A: 'In the beginning'
    },
    {
      B: 'Let there be Light'
    },
    {
      C: 'WHen yet there was nothing'
    },
    {
      D: 'The Lord God said'
    }
  ],
  {
    A: '(Gn 1:1)'
  }
  ]
]);
console.log(creation[0][1][0]);

/*
Exception: SyntaxError: missing ) after argument list
@Scratchpad/1:46
*/