<template>
  <header class="flex justify-between items-center bg-white dark:bg-gray-900 border-b-2 px-4 sm:justify-end sm:px-6">
    <!-- Menu Burger -->
    <button class="sm:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 dark:text-gray-200" fill="none"
        viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <div class="flex items-center gap-4">
      <!-- Bouton de thème -->
      <button @click="toggleTheme" class="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white">
        <svg v-if="theme === 'light'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 3v1m0 16v1m8.66-12.66l-.707.707M4.05 19.95l-.707-.707M21 12h-1M4 12H3m15.66 6.66l-.707-.707M4.05 4.05l-.707.707M12 5a7 7 0 110 14a7 7 0 010-14z" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
        </svg>
      </button>

      <!-- Sélecteur de langue -->
      <select v-model="language" @change="changeLanguage"
        class="text-sm text-gray-700 dark:text-gray-200 bg-transparent border-none outline-none">
        <option value="fr">Français</option>
        <option value="mg">Malagasy</option>
      </select>


      <!-- Menu utilisateur -->
      <Menu as="div" class="relative">
        <MenuButton
          class="flex items-center space-x-2 px-2 py-3 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none">
          <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            alt="Profil" />
          <span class="text-gray-700 dark:text-gray-200">Jean Dupont</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600 dark:text-gray-300" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </MenuButton>

        <transition enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95">
          <MenuItems
            class="origin-top-right absolute right-0 w-48 shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none">
            <div>
              <MenuItem v-slot="{ active }">
              <a href="#"
                :class="[active ? 'bg-gray-200 dark:bg-gray-600' : '', 'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200']">
                {{ $t('profile') }}
              </a>
              </MenuItem>
              <MenuItem v-slot="{ active }">
              <a href="#"
                :class="[active ? 'bg-gray-200 dark:bg-gray-600' : '', 'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200']">
                {{ $t('settings') }}
              </a>
              </MenuItem>
              

            </div>
            <MenuItem v-slot="{ active }">
              <router-link :to="{ name: 'login' }"
                :class="[active ? 'bg-gray-200 dark:bg-gray-600' : '', 'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200']">
                {{ $t('logout') }}
              </router-link>
              </MenuItem>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </header>
</template>


<script>
import { useI18n } from 'vue-i18n'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

export default {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  },
  setup() {
    const { locale } = useI18n()
    return {
      locale
    }
  },
  data() {
    return {
      theme: 'light',
      language: 'fr',
    }
  },
  mounted() {
    this.initTheme()
  },
  methods: {
    initTheme() {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.theme = 'dark'
        document.documentElement.classList.add('dark')
      }
    },
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
      document.documentElement.classList.toggle('dark')
    },
    changeLanguage() {
      this.locale = this.language
    },
  },
}
</script>

