<h1 align="center">Semantic UI</h1>

<div align="center">

[React](https://facebook.github.io/react/) components created with as Semantic code for better readability and SEO.
*MAINLY FOR PERSONAL USE!*

[![npm package](https://img.shields.io/npm/v/@chrhb/semantic-ui/latest.svg)](https://www.npmjs.com/package/@chrhb/semantic-ui)
[![npm downloads](https://img.shields.io/npm/dm/@chrhb/semantic-ui.svg)](https://www.npmjs.com/package/@chrhb/semantic-ui)

</div>

## Installation

Semantic UI can be downloaded as an [npm package](https://www.npmjs.com/package/@chrhb/semantic-ui).

```sh
// Using npm
npm i @chrhb/semantic-ui
```

Be aware, that this again is mainly for personal use. You're welcome to download it and use it as you please, but proper maintenance and regular updates are not guaranteed.

## Usage

The following is a quick example on how to the package:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Hero } from '@chrhb/semantic-ui';

const App() => (
    <div className="site">
        <Hero title="Welcome to my website!">
            This is the descriptive content of the hero
            section, that will be displayed as sub-header for
            the title.
        </Hero>
    </div>
);

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

## Examples (Not implemented yet)

For a full use example, check out my website as [bohlbro.dk](https://bohlbro.dk) *not yet*

## Documentation (Not implemented yet either...)

For the full documentation, check out the [docs](https://bohlbro.dk/semantic-ui) *not yet*
