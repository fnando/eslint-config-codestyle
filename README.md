# @fnando/eslint-config-codestyle

## Installation

```
$ yarn add -D @fnando/eslint-config-codestyle
```

You may need to install peer dependencies.

- React: `yarn add -D eslint-plugin-react eslint-plugin-react-hooks`
- TypeScript: `yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser`

## Usage

Add a section `eslintConfig` to your package.json (or create an equivalent file). Load the files you need; the follow example loads JavaScript, React, and TypeScript rules.

```
{
  "eslintConfig": {
    "env": {
      "browser": true
    },
    "extends": [
      "@fnando/codestyle/javascript",
      "@fnando/codestyle/react",
      "@fnando/codestyle/typescript"
    ]
  }
}
```

## License

Copyright (c) 2019 Nando Vieira

MIT License

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
