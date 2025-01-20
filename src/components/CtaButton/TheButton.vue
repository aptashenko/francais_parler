<script setup lang="ts">
import {computed} from "vue";
import { RouterLink } from "vue-router";

interface Props {
  to?: string,
  href?: string
  variant: 'default' | 'inverse'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default'
})

const buttonComponent = computed(() => {
  if (props?.to) {
    return RouterLink
  } else if (props?.href) {
    return 'a'
  } else {
    return 'button'
  }
})

</script>

<template>
  <component
    :is="buttonComponent"
    v-bind="{to, href}"
    class="cta-button"
    :class="[props.variant]"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss">
@use "@/assets/styles/colors.scss" as colors;
.cta-button {
  display: block;
  text-decoration: none;
  border: 1px solid transparent;
  padding: 18px 24px;
  border-radius: 28px;
  width: fit-content;
  font-weight: 700;
  cursor: pointer;

  transition: all .25s ease;

  &.default {
    background: colors.$primary-200;
    color: #fff;

    &:hover {
      background: #fff;
      color: colors.$primary-200;
    }
  }

  &.inverse {
    background: #fff;
    color: colors.$primary-200;

    &:hover {
      background: colors.$primary-200;
      color: #fff;
    }
  }
}
</style>
