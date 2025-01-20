import {ref} from "vue";
const openMobileMenu = ref(false)

export function useBurger() {
  const toggleMenu = () => {
    openMobileMenu.value = !openMobileMenu.value
  }

  return {
    toggleMenu,
    openMobileMenu
  }
}
