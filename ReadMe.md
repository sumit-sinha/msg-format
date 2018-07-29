# Message Format [![Build Status](https://travis-ci.org/sumit-sinha/msg-format.png)](https://travis-ci.org/sumit-sinha/msg-format/)

A utility to format string messages. It is influenced by Java's `MessageFormat` class and support most of its functionality.

## Usage

Install the package using `npm` as shown below

```
npm install --save msg-format
```

You can import the `MessageFormat` class and use it as shown below

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
### Date/Time

```javascript
const date = new Date();
console.info(MessageFormat.format('Current time: {0, time}', date)); // Current time: 16:32
console.info(MessageFormat.format('Today: {0, date}', date)); // Today: 21/07/2018
```

### Localization
```javascript
import { MessageFormat, MessageLocale } from 'msg-format';

const date = new Date();
console.info(MessageFormat.format('Today is: {0, date, EEEE}', date)); // Today is: Sunday
console.info(MessageFormat.formatWithLocale('Aujourd\'hui est {0, date, EEEE}. Bonjour {1}', MessageLocale.fr_FR, date, 'John Doe')); // Aujourd'hui est Dimanche. Bonjour John Doe
```

## MessageLocale

Below is the table with all the supported locale in this library. You can get all the mentioned values from `MessageLocale` object.

| Language  | Code |
| --- | --- |
| English | en_GB |
| French | fr_FR |
| German | de_DE |
| Simplified Chinese | zh_CN |
| Russian | ru_RU |
| Arabic | ar_SA |
| Japanese | ja_JP |
