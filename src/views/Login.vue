<template>
  <div class="fixed inset-0 w-full h-screen overflow-hidden">
    <!-- Landing Page -->
    <div :class="['h-full w-full bg-cover bg-center bg-no-repeat relative transition-all duration-300', showLogin ? 'blur-sm' : '']"
         style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1435527173128-983b87201f4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')">
      <!-- Header -->
      <header class="text-center mb-8 pt-10">
        <h1 class="text-4xl text-white font-bold drop-shadow-md">Paroisse Saint François d'Assise</h1>
        <h2 class="text-2xl text-white drop-shadow-md">Tsararivotra Ambalavao</h2>
        <div class="text-yellow-400 text-5xl mt-2">
          <i class="ph ph-cross"></i>
        </div>
      </header>

      <!-- Main Content -->
      <main class="flex flex-col items-center gap-12 px-4">
        <section class="text-center max-w-2xl">
          <p class="text-lg italic text-white drop-shadow">"Commencez par faire ce qui est nécessaire, puis ce qui est possible, et soudain vous accomplissez l'impossible."</p>
          <p class="text-yellow-400">Saint François d'Assise</p>
        </section>

        <section class="flex flex-wrap justify-center gap-6 w-full px-4">
          <div class="w-80 p-6 text-center bg-white/10 backdrop-blur rounded-xl transform transition hover:-translate-y-2">
            <i class="ph ph-church text-yellow-400 text-4xl mb-4"></i>
            <h3 class="text-white text-xl font-semibold mb-2">Messes Dominicales</h3>
            <p class="text-white">Dimanche : 7h30 à 9h30</p>
          </div>
          <div class="w-80 p-6 text-center bg-white/10 backdrop-blur rounded-xl transform transition hover:-translate-y-2">
            <i class="ph ph-hand-pray text-yellow-400 text-4xl mb-4"></i>
            <h3 class="text-white text-xl font-semibold mb-2">Adoration Eucharistique</h3>
            <p class="text-white">Vendredi premier du mois : 06h00 à 07h00</p>
          </div>
          <div class="w-80 p-6 text-center bg-white/10 backdrop-blur rounded-xl transform transition hover:-translate-y-2">
            <i class="ph ph-users text-yellow-400 text-4xl mb-4"></i>
            <h3 class="text-white text-xl font-semibold mb-2">Activités Paroissiales</h3>
            <p class="text-white">Catéchisme, Chorale, Jeunesse</p>
          </div>
        </section>

        <button @click="showLogin = true" class="flex items-center gap-2 bg-yellow-400 text-gray-900 font-bold text-lg py-3 px-6 rounded-full hover:bg-yellow-300 transform transition hover:scale-105">
          <i class="ph ph-sign-in"></i> Plus d'informations
        </button>
      </main>

      <footer class="text-center text-sm text-white opacity-80 mt-10 pb-4">
        <p>© 2025 Paroisse Saint François d'Assise Tsararivotra Ambalavao</p>
        <p>Developpé par Rindra Léon</p>
      </footer>
    </div>

    <!-- Login Overlay -->
    <transition name="fade">
      <div v-if="showLogin" class="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
        <div class="relative bg-gray-800 text-white p-8 rounded-xl shadow-lg w-96 max-w-full">
          <button @click="showLogin = false" class="absolute top-4 right-4 text-white text-2xl">
            <i class="ph ph-x"></i>
          </button>
          <h2 class="text-orange-400 text-center text-2xl font-semibold mb-6">
            <i class="ph ph-sign-in"></i> Connexion
          </h2>
          <form @submit.prevent="login" class="space-y-4">
            <div class="flex items-center bg-gray-700 rounded-lg px-4 py-2">
              <i class="ph ph-user mr-2"></i>
              <input v-model="username" type="text" placeholder="Nom d'utilisateur" required class="w-full bg-transparent outline-none text-white placeholder-gray-300" />
            </div>
            <div class="flex items-center bg-gray-700 rounded-lg px-4 py-2">
              <i class="ph ph-lock mr-2"></i>
              <input v-model="password" type="password" placeholder="Mot de passe" required class="w-full bg-transparent outline-none text-white placeholder-gray-300" />
            </div>
            <button type="submit" class="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-medium">
              <i class="ph ph-sign-in mr-1"></i> Se connecter
            </button>
          </form>
          <p class="text-center text-sm text-gray-300 mt-4">
            Pas encore de compte ?
            <a href="#" @click.prevent="showRegister" class="text-orange-300 hover:underline">S'inscrire</a>
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ChurchLandingPage',
  data() {
    return {
      showLogin: false,
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      console.log('Tentative de connexion avec:', this.username, this.password);
    },
    showRegister() {
      this.$router.push('/register');
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
