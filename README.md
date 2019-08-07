# vue-js-input

## Github Example ( In src folder )

https://github.com/1997roylee/vue-js-input

## Npm

https://www.npmjs.com/package/@roylee1997/vue-js-input

## Command

For Install npm

```sh
$ npm i @roylee1997/vue-js-input
```

Run Project

```sh
$ npm install
$ npm run serve
```

## Example

Setup:

```sh
import VInputComponent from '../projects/InputComponent/index.js'
Vue.use(VInputComponent)
```

Usage:

```sh
<v-input
    outline
    :value="Value"
    @input="updateValue"
    @focus="onFocus"
    @blur="onBlur"
    size="small"
></v-input>
```

## Props

| Prop        | Type     | Comment                                           |
| ----------- | -------- | ------------------------------------------------- |
| width       | Number   | default 200px                                     |
| value       | String   | binding value                                     |
| type        | String   | 'text', 'url', 'email', 'password', 'search'      |
| error       | String   | display error messages                            |
| rounded     | String   | border radius of Input, ['none', 'small', 'full'] |
| size        | String   | size of Input, ['small', 'medium']                |
| label       | String   | label text                                        |
| placeholder | String   | placeholder of Input                              |
| outline     | Function | outline style                                     |
| disabled    | Function | disabled                                          |
| field       | Function | field style                                       |
| full        | Function | full width style                                  |
| @input      | Function | Input event                                       |
| @focus      | Function | Focus event                                       |
| @blur       | Function | Blur event                                        |
