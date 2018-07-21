# JS-Utils

A utility to format string messages. It is influenced by Java's `MessageFormat` class and support most of its functionality.

## Usage

### String

```javascript
const text = 'I am {0}!!!';
const name = 'Groot';
console.info(MessageFormat.format(text, name)); // I am Groot!!!

// or

const text = 'I am {0}!!!I am {1}';
const name = 'Groot';
const state = 'hungry';
console.info(MessageFormat.format(text, name, state)); // I am Groot!!!I am hungry

// or

const text = 'I am {0}!!!I am {1}';
const name = 'Groot';
const state = 'hungry';
console.info(MessageFormat.format(text, [name, state])); // I am Groot!!!I am hungry
```
Date/Time

```javascript
const date = new Date();
console.info(MessageFormat.format('Current time: {0, time}', date)); // Current time: 16:32
console.info(MessageFormat.format('Today: {0, date}', date)); // Today: 21/07/2018
```
