<h1 align="center">Glitch</h1>

<div align="center">

[React](https://facebook.github.io/react/) components wrappers that adds glitch animation effect.

*MAINLY FOR PERSONAL USE!*

[![npm package](https://img.shields.io/npm/v/@chrhb/glitch/latest.svg)](https://www.npmjs.com/package/@chrhb/glitch)
[![npm downloads](https://img.shields.io/npm/dm/@chrhb/glitch.svg)](https://www.npmjs.com/package/@chrhb/glitch)

</div>

## Installation

Glitch can be downloaded as an [npm package](https://www.npmjs.com/package/@chrhb/glitch).

```sh
// Using npm
npm i @chrhb/glitch
```

Be aware, that this again is mainly for personal use. You're welcome to download it and use it as you please, but proper maintenance and regular updates are not guaranteed.

## Usage

The following is a quick example on how to the package:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Wrapper } from '@chrhb/glitch';

const App() => (
    <div className="site">
        <Wrapper>
            <p>Some glitchy text</p>
        </Wrapper>
    </div>
);

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

## Examples

For a full use example, check out my website as [bohlbro.dk](https://play.bohlbro.dk/glitch) *(Not implemented yet)*

## Documentation

For the full documentation, check out the [docs](https://bohlbro.dk/glitch) *(Not implemented yet either...)*
