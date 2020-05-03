# passval
Send and Get Object Values in ES6

An easy way to save and passing values in deffrent components.

# Installation

```sh
$ npm install passval
```

## ES6

```
import { setVal, getVal } from 'passval';
```

## Usage and Example


- Save value

```
var name = "John Doe";
setVal("username", name);
```

- Get value

```
getVal("username"); // Output John Doe
```

- You can get this value from any components in ES6.
