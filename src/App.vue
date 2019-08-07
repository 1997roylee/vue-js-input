<template>
  <div id="app">
    <div class="pt-4">
      <h4>Default Style</h4>
      <div class="flex">
        <div class="mr-4">
          <v-input size="small"></v-input>
        </div>
        <div class="mr-4">
          <v-input size="medium"></v-input>
        </div>
      </div>
    </div>

    <div class="pt-4">
      <h4>Error Style</h4>
      <div class="flex">
        <div class="mr-4">
          <v-input error="Error 404" size="small"></v-input>
        </div>
        <div class="mr-4">
          <v-input error="Error 404" size="medium"></v-input>
        </div>
        <div class="mr-4">
          <v-input error="Error 404" outline size="small"></v-input>
        </div>
        <div class="mr-4">
          <v-input error="Error 404" outline size="medium"></v-input>
        </div>
      </div>
    </div>

    <div class="pt-4">
      <h4>Event</h4>
      <div class="flex">
        <div class="mr-4">
          <v-input
            outline
            :value="Value"
            @input="updateValue"
            @focus="onFocus"
            @blur="onBlur"
            size="small"
          ></v-input>
        </div>
        <div class="mr-4 flex">
          <div>
            <button class="mr-4" @click="triggerError">Trigger Error</button>
          </div>
          <v-input :error="error" outline size="small"></v-input>
        </div>
      </div>
    </div>

    <div class="pt-4">
      <h4>Radius</h4>
      <div class="flex">
        <div class="mr-4">
          <v-input rounded="none"></v-input>
        </div>
        <div class="mr-4">
          <v-input rounded="small" outline></v-input>
        </div>
        <div class="mr-4">
          <v-input rounded="full" outline></v-input>
        </div>
      </div>
    </div>

    <div class="pt-4">
      <h4>Width</h4>
      <div class="flex">
        <div class="mr-4">
          <v-input field :width="400"></v-input>
        </div>
        <div class="mr-4" style="width: 400px;">
          <v-input field full></v-input>
        </div>
      </div>
    </div>

    <div class="pt-4">
      <h4>Field Style</h4>
      <div class="flex">
        <div class="mr-4">
          <v-input field size="small"></v-input>
        </div>
        <div class="mr-4">
          <v-input field size="medium"></v-input>
        </div>
      </div>
    </div>

    <div class="pt-4">
      <h4>Outline Style</h4>
      <div class="flex">
        <div class="mr-4">
          <v-input ize="small" outline></v-input>
        </div>
        <div class="mr-4">
          <v-input size="medium" outline></v-input>
        </div>
      </div>
    </div>

    <div class="pt-4">
      <h4>Disabled</h4>
      <div class="flex">
        <div class="mr-4">
          <v-input ize="small" disabled outline></v-input>
        </div>
        <div class="mr-4">
          <v-input size="medium" disabled outline></v-input>
        </div>
      </div>
    </div>

    <div class="pt-4">
      <h4>Label</h4>
      <div class="flex">
        <div class="mr-4">
          <v-input label="Hello" outline size="small"></v-input>
        </div>
        <div class="mr-4">
          <v-input label="Hello" outline size="medium"></v-input>
        </div>
      </div>
    </div>

    <div class="pt-4">
      <h4>Placeholder</h4>
      <div class="flex">
        <div class="mr-4">
          <v-input placeholder="Hello" outline size="small"></v-input>
        </div>
        <div class="mr-4">
          <v-input placeholder="Hello" outline size="medium"></v-input>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      Value: 'abc',
      error: '',
    }
  },
  created() {
    this.$VInput.setColor('black')
    this.$VInput.setFontWeight(300)
  },
  methods: {
    updateValue(e) {
      console.log(e)
    },
    onFocus() {
      console.log('focus')
    },
    onBlur() {
      console.log('blur')
    },
    triggerError() {
      this.error = 'Trigger Successful'
    },
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}
body,
html {
  font-family: 'Lato', sans-serif !important;
}
.flex {
  display: flex;
}
.pt-4 {
  padding-top: 16px;
}
.mr-4 {
  margin-right: 16px;
}
</style>
