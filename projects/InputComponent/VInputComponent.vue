<template>
  <div class="input">
    <div v-if="label.length > 0" class="label">{{ label }}</div>
    <input
      :class="componentClass"
      :type="type"
      :disabled="disabled"
      :value="value"
      :placeholder="placeholder"
      :style="widthStyle"
      @input="updateValue"
      @change="updateValue"
      @blur="$emit('blur')"
      @focus="$emit('focus')"
    >
    <transition name="slide">
      <p v-show="error" class="error">{{ error }}</p>
    </transition>
  </div>
</template>

<script>
// bg-red-100 border border-red-400 text-red-700 focus:border-red-400
import Plugin from './index'
export default {
  name: 'v-btn',
  props: {
    width: {
      type: Number,
      default: 200,
    },
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
      validate: val => {
        return (
          ['text', 'url', 'email', 'password', 'search'].indexOf(val) !== -1
        )
      },
    },
    error: {
      type: String,
      default: '',
    },
    rounded: {
      type: String,
      default: 'none',
      validator: value => {
        return ['none', 'small', 'full'].indexOf(value) > -1
      },
    },
    size: {
      type: String,
      default: 'small',
      validator: value => {
        return ['small', 'medium'].indexOf(value) > -1
      },
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Input Text',
    },
    outline: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    field: {
      type: Boolean,
      default: false,
    },
    full: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    document.documentElement.style.setProperty('--fontColor', Plugin.fontColor)
    document.documentElement.style.setProperty(
      '--fontWeight',
      Plugin.fontWeight
    )
  },
  computed: {
    widthStyle() {
      if (this.full) return ''
      return `width: ${this.width}px;`
    },
    componentClass() {
      let className = []
      switch (this.size) {
        case 'small':
          className.push('size-sm')
          break
        case 'medium':
          className.push('size-md')
          break
        default:
          break
      }

      switch (this.rounded) {
        case 'none':
          className.push('border-radius-none')
          break
        case 'small':
          className.push('border-radius-sm')
          break
        case 'full':
          className.push('border-radius-lg')
          break
        default:
          break
      }
      if (this.outline) className.push('input-outline')
      if (this.field) className.push('input-field')
      if (this.disabled) className.push('input-disabled')
      if (this.error.length > 0) className.push('input-error')
      if (this.full) className.push('w-full')
      return className
    },
  },
  watch: {
    value() {
      this.updateValue()
    },
  },
  methods: {
    updateValue(e) {
      this.$emit('input', e.target.value)
    },
  },
}
</script>

<style scoped lang="scss">
// Color
$lightGray: #ebebeb;
$fieldColor: #f4f2ef;

$blurPurple: #4352ff;
$blurPurple-hover: #3645ee;

$dark: #1e1e1e;
$dark-hover: #404040;

$gray: #e0e1e2;
$gray-hover: #5a5a5a;

// Font
$fontSize: 14px;
$fontColor: var(--fontColor);
$fontWeight: var(--fontWeight);

.input {
  .label {
    font-size: 14px;
    margin-bottom: 8px;
  }

  .error {
    color: #d93900 !important;
    margin-top: 12px;
    font-weight: bold;
    font-size: 14px;
  }

  input {
    outline: none;
    border: none;
    font-size: $fontSize;
    border-color: $lightGray;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    font-weight: $fontWeight;
    color: $fontColor;
    &:focus {
      border-bottom-color: #00ada0;
    }
  }

  .input-error {
    border-color: #ff595e !important;
    background-color: #fff8f6 !important;
  }

  .w-full {
    width: 100%;
  }
  .size-md {
    height: 52px;
    padding: 0px 20px;
  }
  .size-sm {
    height: 40px;
    padding: 0px 12px;
  }
  .border-radius-lg {
    border-radius: 50px;
  }
  .border-radius-sm {
    border-radius: 5px;
  }
  .border-radius-none {
    border-radius: 0px;
  }
  .input-disabled {
    cursor: not-allowed !important;
    opacity: 0.5;
  }
  .input-field {
    background-color: $fieldColor;
  }
  .input-outline {
    border: 1px solid $lightGray;
    &:focus {
      border-color: #00ada0;
    }
  }
}
</style>
