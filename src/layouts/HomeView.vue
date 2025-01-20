<script setup lang="ts">
import ReviewMessage from "@/components/ReviewMessage/ReviewMessage.vue";
</script>

<template>
  <main class="main-page">
    <div class="main-page__container">
      <div class="main-page__text">
        <RouterView />
      </div>
      <div class="main-page__img-side">
        <div class="main-page__img-container">
          <img src="../assets/images/french_woman.jpg" alt="woman" class="main-page__img">
        </div>
        <ReviewMessage
          photo="review_grandma"
          class="main-page__reviews-1"
        >
          <template #name>
            Ганна
          </template>
          <template #text>
            <span v-html="$t('global.reviews.1')" />
          </template>
        </ReviewMessage>
        <ReviewMessage
          photo="review_man"
          class="main-page__reviews-2"
        >
          <template #name>
            Артем
          </template>
          <template #text>
            <span v-html="$t('global.reviews.2')" />
          </template>
        </ReviewMessage>
        <ReviewMessage
          photo="review_woman"
          class="main-page__reviews-3"
        >
          <template #name>
            Олена
          </template>
          <template #text>
            <span v-html="$t('global.reviews.3')" />
          </template>
        </ReviewMessage>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/colors" as colors;

.main-page {
  padding: 0 24px 16px;
  flex: 1;

  @media (max-width: 478px) {
    padding: 60px 14px 24px;
  }

  &__container {
    background: colors.$background;
    padding: 24px 48px;
    border-radius: 0 0 40px 40px;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 478px) {
      display: block;
      padding: 24px 16px;
      border-radius: 40px;
    }
  }

  &__img-side {
    position: relative;
    display: grid;
    place-items: baseline;
  }

  &__img-container {
    position: relative;
    z-index: 2;
    width: 70%;
    margin: 24px auto 0;
    transform: rotate(10deg);

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      transform: rotate(-20deg);
      content: '';
      background: #FFD6B0;
      width: 100%;
      height: 100%;
      border-radius: 24px;
      opacity: 0.5;
    }
  }

  &__img {
    display: block;
    width: 100%;
    border-radius: 24px;
  }

  &__reviews-1 {
    position: absolute;
    top: 0;
    left: -60px;
    z-index: 3;
    transform: rotate(-15deg);
    opacity: 0;
    animation: fadeIn1 1s ease-out forwards;
    animation-delay: 0s;

    @media (max-width: 478px) {
      position: static;
      transform: rotate(0);
      width: 100%;
    }
  }
  &__reviews-2 {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 3;
    transform: rotate(10deg);

    opacity: 0;
    animation: fadeIn2 1s ease-out forwards;
    animation-delay: 1s;

    @media (max-width: 478px) {
      position: static;
      transform: rotate(0);
      width: 100%;
    }
  }
  &__reviews-3 {
    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: 3;
    transform: translateX(-50%);

    opacity: 0;
    animation: fadeIn3 1s ease-out forwards;
    animation-delay: 2s;

    @media (max-width: 478px) {
      position: static;
      transform: translateX(0);
      width: 100%;
    }
  }
}

@keyframes fadeIn1 {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotate(-15deg);
  }
}

@keyframes fadeIn2 {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotate(10deg);
  }
}

@keyframes fadeIn3 {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
