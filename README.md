# Hello👋

<img align="right" src="https://raw.githubusercontent.com/BK201-Drama/picBed/main/avatar/avatar.jpeg" style="width: 150px; height: 150px">

### I'm BK201-Drama
- 👨‍💻A Frontend Novice
- 🌱`HTML & CSS & JS & React`
- 🔭Welcome to my blog：[bk201-drama.github.io](https://bk201-drama.github.io/)


### My contribution

<img align="left" src="https://github-readme-stats.vercel.app/api?username=BK201-Drama&show_icons=true" style="display: table;width: 55%">
<img align="right" src="https://github-readme-stats.vercel.app/api/top-langs/?username=BK201-Drama&layout=compact" style="display: table;width: 40%">



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
