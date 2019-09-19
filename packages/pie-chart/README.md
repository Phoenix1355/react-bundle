<h1 align="center">Pie Chart SVG</h1>

<div align="center">

[React](https://facebook.github.io/react/) component that creates a pie chart from svgs.

*MAINLY FOR PERSONAL USE!*

[![npm package](https://img.shields.io/npm/v/@chrhb/pie-chart/latest.svg)](https://www.npmjs.com/package/@chrhb/pie-chart)
[![npm downloads](https://img.shields.io/npm/dm/@chrhb/pie-chart.svg)](https://www.npmjs.com/package/@chrhb/pie-chart)

</div>

## Installation

Pie chart can be downloaded as an [npm package](https://www.npmjs.com/package/@chrhb/pie-chart).

```sh
// Using npm
npm i @chrhb/pie-chart
```

Be aware, that this again is mainly for personal use. You're welcome to download it and use it as you please, but proper maintenance and regular updates are not guaranteed.

## Usage

The following is a quick example on how to the package:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Wrapper } from '@chrhb/pie-chart';

const App() => (
    <div className="site">
        <Wrapper>
            <p>Some pie-charty text</p>
        </Wrapper>
    </div>
);

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

## Examples

For a full use example, check out my website as [bohlbro.dk](https://play.bohlbro.dk/pie-chart) *(Not implemented yet)*

## Documentation

For the full documentation, check out the [docs](https://bohlbro.dk/pie-chart) *(Not implemented yet either...)*
