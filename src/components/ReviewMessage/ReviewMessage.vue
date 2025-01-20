<script setup lang="ts">
import {computed} from "vue";

interface Props {
  photo: string
}

const props = defineProps<Props>();

const imageSrc = computed(() => {
  return new URL(`../../assets/images/reviews/${props.photo}.webp`, import.meta.url).href
})
</script>
<template>
  <div class="review-message">
    <div class="review-message__img">
      <img :src="imageSrc" alt="Review Image" />
    </div>
    <div class="review-message__text">
      <h3 class="review-message__name">
        <slot name="name" />
      </h3>
      <h3 class="review-message__text">
        <slot name="text" />
      </h3>
    </div>
  </div>
</template>
<style scoped lang="scss">
.review-message {
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 19px;
  padding: 18px 24px;
  gap: 14px;
  box-shadow: -2px 4px 45px rgba(0, 0, 0, 0.13);

  &__img {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;

    & img {
      width: 100%;
    }
  }

  &__name {
    font-size: 16px;
    margin-bottom: 4px;
  }

  &__text {
    font-size: 12px;
    font-weight: 400;
  }
}
</style>
