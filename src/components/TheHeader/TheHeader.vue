<script setup lang="ts">
import TheButton from "@/components/CtaButton/TheButton.vue";
import {useBurger} from "@/composables/useBurger.ts";
const { openMobileMenu, toggleMenu } = useBurger();
</script>

<template>
  <header class="header">
    <button class="burger" @click="toggleMenu">
      <span class="line1" />
      <span class="line2" />
      <span class="line3" />
    </button>
    <div class="header__container">
      <router-link to="/" class="header__logo">
        <img src="@/assets/images/logo.png" alt="logo" />
      </router-link>
      <nav class="header__nav">
        <router-link to="/about">
          {{ $t('global.header.menu.1') }}
        </router-link>
        <router-link to="/how-it-works">
          {{ $t('global.header.menu.2') }}
        </router-link>
        <router-link to="/current-sessions">
          {{ $t('global.header.menu.3') }}
        </router-link>
        <router-link to="/why">
          {{ $t('global.header.menu.4') }}
        </router-link>
      </nav>
      <TheButton to="/" variant="inverse">
        {{$t('global.header.cta')}}
      </TheButton>
    </div>
    <div v-if="openMobileMenu" class="header__container-mob">
      <router-link to="/" class="header__logo">
        <img src="@/assets/images/logo.png" alt="logo" />
      </router-link>
      <nav class="header__nav">
        <router-link to="/about">
          {{ $t('global.header.menu.1') }}
        </router-link>
        <router-link to="/how-it-works">
          {{ $t('global.header.menu.2') }}
        </router-link>
        <router-link to="/current-sessions">
          {{ $t('global.header.menu.3') }}
        </router-link>
        <router-link to="/why">
          {{ $t('global.header.menu.4') }}
        </router-link>
      </nav>
      <TheButton to="/" variant="inverse" class="header__cta">
        {{$t('global.header.cta')}}
      </TheButton>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use "@/assets/styles/colors.scss" as colors;

.header {
  padding: 16px 24px 0;
  @media (max-width: 478px) {
    padding: 0;
    height: 0;
  }

  &__container-mob {
    position: fixed;
    z-index: 10;
    display: flex;
    flex-direction: column;
    background: #fff;
    width: 100%;

    padding: 24px;
  }

  &__container {
    display: flex;
    align-items: center;
    padding: 24px 48px;
    background: colors.$background;
    width: 100%;
    border-radius: 40px 40px 0 0;

    @media (max-width: 478px) {
      display: none;
    }
  }

  &__cta {
    @media (max-width: 478px) {
      margin: 0 auto;
    }
  }

  &__nav {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 24px;

    @media (max-width: 478px) {
      flex-direction: column;
      gap: 8px;
    }

    & a {
      color: #666680;

      text-decoration: none;
      padding: 10px 16px;

      transition: all .2s ease;
      border-radius: 0px;

      &:hover {
        background: #666680;
        color: #fff;
        border-radius: 8px;
      }
    }
  }

  &__logo {
    width: 60px;
    height: 60px;

    transition: all .2s ease;

    &:hover {
      opacity: 0.5;
    }

    & img {
      width: 100%;
    }

    @media (max-width: 478px) {
      margin: 0 auto;
    }
  }
}

.burger {
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 20;

  background: transparent;
  border: none;
  width: 50px;
  height: 40px;

  display: none;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 478px) {
    display: flex;
  }

  & .line1 {
    display: block;
    background: #000;
    width: 100%;
    height:3px;
  }
  & .line2 {
    display: block;
    background: #000;
    width: 100%;
    height:3px;
  }
  & .line3 {
    display: block;
    background: #000;
    width: 100%;
    height:3px;
  }
}
</style>
