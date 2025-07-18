<template>
  <aside class="hidden w-64 bg-gray-800 sm:block">
    <div class="py-4 text-1xl uppercase text-center tracking-widest bg-gray-900 border-b-2 border-gray-800 mb-8">
      <router-link to="/" class="text-white">Ny Fiangonako</router-link>
    </div>

    <nav class="text-sm text-gray-300">
      <ul class="flex flex-col">


        <router-link v-slot="{ isExactActive, href, navigate }" to="/" custom>
          <li class="px-4 cursor-pointer" :class="[isExactActive ? 'bg-gray-500 text-gray-800' : 'hover:bg-gray-700']">
            <a class="py-3 flex items-center" :href="href" @click="navigate">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Tableau de bord
            </a>
          </li>
        </router-link>

        <li>
          <Disclosure v-slot="{ open }" :default-open="isUserManagementActive">
            <DisclosureButton class="px-4 py-3 flex items-center w-full hover:bg-gray-700"
              :class="open ? 'bg-gray-700' : ''">
              <!-- Icône principale : Graphique en barres -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M11 17a1 1 0 001-1V8a1 1 0 10-2 0v8a1 1 0 001 1zm-4 0a1 1 0 001-1v-4a1 1 0 10-2 0v4a1 1 0 001 1zm8 0a1 1 0 001-1v-6a1 1 0 10-2 0v6a1 1 0 001 1zm4 2H5a2 2 0 01-2-2V5a2 2 0 012-2h2" />
              </svg>
              {{ $t('stat')}}
              <span class="ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" :class="open ? 'transform rotate-90' : ''">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </DisclosureButton>
            <DisclosurePanel>
              <ul>
                <!-- Églises / Quartiers -->
                <li class="px-8 hover:bg-gray-700">
                  <router-link :to="{ name: 'eglise' }" class="py-3 flex items-center">
                    <!-- Icône Église -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 7V3m0 0L6 7h12l-6-4zm-6 7v7a1 1 0 001 1h2m10-8v7a1 1 0 01-1 1h-2m-6 0h4" />
                    </svg>
                    {{ $t('eglise')}}
                  </router-link>
                </li>

                <!-- APF / Sections -->
                <li class="px-8 hover:bg-gray-700">
                  <router-link :to="{ name: 'apf' }" class="py-3 flex items-center">
                    <!-- Icône Collection / Dossiers -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 7h18M3 12h18M3 17h18" />
                    </svg>
                    {{ $t('apf')}}
                  </router-link>
                </li>

                <!-- Chrétiens / Fidèles -->
                <li class="px-8 hover:bg-gray-700">
                  <router-link :to="{ name: 'chretien' }" class="py-3 flex items-center">
                    <!-- Icône Utilisateur -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.779.73 6.879 1.979M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {{ $t('chretien')}}
                  </router-link>
                </li>

                <!-- Associations Religieuses -->
                <li class="px-8 hover:bg-gray-700">
                  <router-link :to="{ name: 'association' }" class="py-3 flex items-center">
                    <!-- Icône Groupes de personnes ou structure religieuse -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m5-4a4 4 0 100-8 4 4 0 000 8z" />
                    </svg>
                    {{ $t('association')}}
                  </router-link>
                </li>
              </ul>
            </DisclosurePanel>
          </Disclosure>
        </li>


        <li>
          <Disclosure v-slot="{ open }" :default-open="isUserManagementActive">
            <DisclosureButton class="px-4 py-3 flex items-center w-full hover:bg-gray-700"
              :class="open ? 'bg-gray-700' : ''">
              <!-- Icône principale : Main qui bénit (symbolique des sacrements) -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M7 10v10M14 10v10M10 4v16M20 10v6a2 2 0 01-2 2h-1M4 10v6a2 2 0 002 2h1" />
              </svg>
              {{ $t('sacrement')}}
              <span class="ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" :class="open ? 'transform rotate-90' : ''">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </DisclosureButton>
            <DisclosurePanel>
              <ul>
                <!-- Baptêmes -->
                <li class="px-8 hover:bg-gray-700">
                  <router-link :to="{ name: 'bapteme' }" class="py-3 flex items-center">
                    <!-- Icône Goutte d'eau -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 2C12 2 5 9 5 14a7 7 0 0014 0c0-5-7-12-7-12z" />
                    </svg>
                    {{ $t('bapteme')}}
                  </router-link>
                </li>

                <!-- Communions -->
                <li class="px-8 hover:bg-gray-700">
                  <router-link :to="{ name: 'communion' }" class="py-3 flex items-center">
                    <!-- Icône Calice -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 9h8l-1 5H9L8 9zM12 14v6m0 0H9m3 0h3" />
                    </svg>
                    {{ $t('communion')}}
                  </router-link>
                </li>

                <!-- Confirmations -->
                <li class="px-8 hover:bg-gray-700">
                  <router-link :to="{ name: 'confirmation' }" class="py-3 flex items-center">
                    <!-- Icône Feu (symbole de l'Esprit Saint) -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 3C9.613 5.053 7 9.058 7 13a5 5 0 0010 0c0-3.942-2.613-7.947-5-10z" />
                    </svg>
                    {{ $t('confirmation')}}
                  </router-link>
                </li>

                <!-- Mariages -->
                <li class="px-8 hover:bg-gray-700">
                  <router-link :to="{ name: 'mariage' }" class="py-3 flex items-center">
                    <!-- Icône Anneaux -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 12a5 5 0 11-4.546 2.914A5 5 0 0116.546 9.086 5.002 5.002 0 0012 12z" />
                    </svg>
                    {{ $t('mariage')}}
                  </router-link>
                </li>
              </ul>
            </DisclosurePanel>
          </Disclosure>
        </li>


        <li class="px-4 py-2 mt-2 text-xs uppercase tracking-wider text-gray-500 font-bold">{{ $t('rh')}}</li>

        <li class="px-4 cursor-pointer hover:bg-gray-700">
          <router-link :to="{ name: 'pretre' }" class="py-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.779.73 6.879 1.979M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {{ $t('pretre')}}
            <span class="ml-auto text-xs bg-gray-500 px-2 py-1 rounded-sm">16</span>
          </router-link>
        </li>


        <li class="px-4 cursor-pointer hover:bg-gray-700">
          <router-link :to="{ name: 'commite' }" class="py-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m5-4a4 4 0 100-8 4 4 0 000 8zm6 4a4 4 0 00-3-3.87" />
            </svg>
            {{ $t('comit')}}
          </router-link>
        </li>


        <li class="px-4 cursor-pointer hover:bg-gray-700">
          <router-link :to="{ name: 'religieux' }" class="py-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 6V4m0 2a9 9 0 00-9 9v4a1 1 0 001 1h3m14-5a9 9 0 00-9-9m0 0v2m0 16a9 9 0 009-9v-4a1 1 0 00-1-1h-3" />
            </svg>
            {{ $t('religieux')}}
          </router-link>
        </li>


        <li class="px-4 py-2 mt-2 text-xs uppercase tracking-wider text-gray-500 font-bold">{{ $t('finance')}}</li>

        <!-- REVENUS -->
        <li class="px-4 cursor-pointer hover:bg-gray-700">
          <router-link :to="{ name: 'card' }" class="py-2 flex items-center">
            <!-- Icône monnaie (pièce ou billet) -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2m0-4V4m0 8v8m4-12a4 4 0 00-8 0 4 4 0 008 0z" />
            </svg>
            {{ $t('revenu')}}
          </router-link>
        </li>

        <!-- RAPPORTS -->
        <li class="px-4 hover:bg-gray-700">
          <router-link :to="{ name: 'rapport' }" class="py-3 flex items-center">
            <!-- Icône de rapport : graphique ou document -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 0h6m2 0a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2h2" />
            </svg>
            {{ $t('rapport')}}
          </router-link>
        </li>

        <!-- DÉPENSES -->
        <li class="px-4 hover:bg-gray-700">
          <router-link :to="{ name: 'depense' }" class="py-3 flex items-center">
            <!-- Icône flèche vers le bas avec un dollar -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8c1.1 0 2 .9 2 2s-.9 2-2 2m0-4V4m0 8v8m-4-4l4 4 4-4" />
            </svg>
            {{ $t('depense')}}
          </router-link>
        </li>



        <li class="px-4 py-2 mt-2 text-xs uppercase tracking-wider text-gray-500 font-bold">{{ $t('activite')}}
        </li>

        <!-- ÉVÉNEMENTS -->
        <li class="px-4 cursor-pointer hover:bg-gray-700">
          <router-link :to="{ name: 'evenement' }" class="py-2 flex items-center">
            <!-- Icône de calendrier -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {{ $t('evenement')}}
          </router-link>
        </li>

        <!-- UTILISATEURS -->
        <li>
          <Disclosure v-slot="{ open }" :default-open="isUserManagementActive">
            <DisclosureButton class="px-4 py-3 flex items-center w-full hover:bg-gray-700"
              :class="open ? 'bg-gray-700' : ''">
              <!-- Icône de groupe d'utilisateurs -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {{ $t('Utilisateurs')}}
              <span class="ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" :class="open ? 'transform rotate-90' : ''">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </DisclosureButton>
            <DisclosurePanel>
              <ul>
                <!-- Les utilisateurs -->
                <router-link v-slot="{ isExactActive, href, navigate }" to="/users" custom>
                  <li class="px-8" :class="[isExactActive ? 'bg-gray-500 text-gray-800' : 'hover:bg-gray-700']">
                    <a class="py-3 flex items-center" :href="href" @click="navigate">
                      <!-- Icône utilisateur -->
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.779.73 6.879 1.979M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {{ $t('userlist')}}
                    </a>
                  </li>
                </router-link>

                <!-- Détail utilisateur -->
                <li class="px-8 hover:bg-gray-700">
                  <router-link :to="{ name: 'userdetail' }" class="py-3 flex items-center">
                    <!-- Icône d'information utilisateur -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 4a4 4 0 014 4v1m0 4h-4m0 4h4m-8-4h.01M12 20h.01" />
                    </svg>
                    {{ $t('userdetail')}}
                  </router-link>
                </li>

                <!-- Rôles -->
                <li class="px-8 hover:bg-gray-700">
                  <router-link :to="{ name: 'userrole' }" class="py-3 flex items-center">
                    <!-- Icône de badge ou clé -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9.75 9.75a4 4 0 105.5 5.5M15 15l4 4m0 0l2-2m-2 2l-2 2" />
                    </svg>
                    {{ $t('userrole')}}
                  </router-link>
                </li>

                <!-- Permissions -->
                <li class="px-8 hover:bg-gray-700">
                  <router-link :to="{ name: 'userpermission' }" class="py-3 flex items-center">
                    <!-- Icône de verrou / sécurité -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 11c1.104 0 2-.896 2-2V7a2 2 0 10-4 0v2c0 1.104.896 2 2 2zm6 0a2 2 0 012 2v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5a2 2 0 012-2h12z" />
                    </svg>
                    {{ $t('userpermission')}}
                  </router-link>
                </li>
              </ul>
            </DisclosurePanel>
          </Disclosure>
        </li>

        <!-- SE DÉCONNECTER -->
        <li class="px-4 cursor-pointer hover:bg-gray-700">
          <router-link :to="{ name: 'login' }" class="py-2 flex items-center">
            <!-- Icône de déconnexion -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" />
            </svg>
            {{ $t('deconnect')}}
          </router-link>
        </li>

      </ul>
    </nav>
  </aside>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  },

  setup() {
    const route = useRoute()
    const { locale } = useI18n()
    return {
      locale
    }

    const isUserManagementActive = computed(() => {
      const names = ['user-list', 'user-detail', 'roles', 'permissions']

      return names.includes(route.name)
    })

    const isUserActive = computed(() => {
      const names = ['user-list', 'user-detail']

      return names.includes(route.name)
    })

    return {
      route,
      isUserManagementActive,
      isUserActive,
    }
  },
}
</script>
