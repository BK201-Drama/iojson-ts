# Hello👋

### I'm BK201-Drama
- 👨‍💻A Frontend Novice
- 🌱`HTML & CSS & JS & React`
- 🔭Welcome to my blog：[bk201-drama.github.io](https://bk201-drama.github.io/)



# How to use?

## Install

```npm
npm install iojson-ts
```

## uninstall

```npm
npm uninstall iojson-ts
```



## example

| function   | data               | fileName                        | return       |
| ---------- | ------------------ | ------------------------------- | ------------ |
| exportJSON | a json format data | a string, name the exportd file | none         |
| importJSON | a json file        | none                            | Promise<any> |

```js
import { exportJSON, importJSON } from 'iojson-ts';

const testJSON = {
    a: 1
}

exportJSON(testJSON, "testName");
importJSON().then(data => {})
```





# Inspired by

[iojson - npm (npmjs.com)](https://www.npmjs.com/package/iojson)
