[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Build Status](https://travis-ci.org/theatrejs/random.svg?branch=master)](https://travis-ci.org/theatrejs/random)
[![Coverage Status](https://coveralls.io/repos/github/theatrejs/random/badge.svg?branch=master)](https://coveralls.io/github/theatrejs/random?branch=master)

# random

In plain JavaScript, it is annoying to get a random item while keeping consistency in your code.

Example of a random item of an array :

```javascript
const array = ['rock', 'paper', 'scissors'];

// gets a random item of the given array
array[Math.floor(array.length * Math.random())];
```

## Overview

This random module simplifies things.

## Installation

Copy the content of [`sources/`](./sources) folder into your project.

Import the random module in order to use it in your application :

```javascript
import {random} from './my-path/random.js';
```

## Usage

To use this random module, you'll simply need to call it as a function.

###### Usage :

```javascript
// gets a random item of the given array
random(['rock', 'paper', 'scissors']);

// gets a random positive integer in [0, 3[
random(3);
```

###### Properties :

| property  | name   | type    | description                                  |
| --------- | ------ | ------- | -------------------------------------------- |
| parameter | `items`| `mixed` | a positive integer or an array of elements   |
| return    | `item` | `mixed` | a positive integer, an array item, or `null` |

## [Change Log](./CHANGELOG.md)

## [License](./LICENSE)
