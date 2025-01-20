<template>
  <component :is="icon" class="fill-current" />
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

interface Props {
  name: string
}

const props = defineProps<Props>();

const icon = defineAsyncComponent(() =>
  import(`./icons/${props.name}.vue`)
);
</script>
