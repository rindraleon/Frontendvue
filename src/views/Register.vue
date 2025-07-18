<template>
    <div id="registerPage" class="flex items-center justify-center min-h-screen w-full bg-cover bg-center bg-black bg-opacity-50 bg-blend-overlay" 
         style="background-image: url('https://images.unsplash.com/photo-1435527173128-983b87201f4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');">
      <div class="bg-gray-800 bg-opacity-95 p-8 rounded-xl shadow-lg w-11/12 max-w-2xl backdrop-blur border border-white/10">
        <h2 class="text-orange-500 text-center mb-6 text-3xl font-semibold flex items-center justify-center gap-2">
          <i class="ph ph-user-plus"></i> Inscription
        </h2>
  
        <form @submit.prevent="register">
          <!-- Image Upload -->
          <div class="relative mb-6">
            <input 
              type="file" 
              accept="image/*"
              @change="handleImageUpload"
              id="profileImage"
              class="absolute w-px h-px opacity-0 overflow-hidden -z-10"
            />
            <label for="profileImage" class="flex items-center gap-2 text-white cursor-pointer hover:text-orange-500">
              <i class="ph ph-image"></i>
              {{ imageLabel }}
            </label>
          </div>
  
          <!-- Row 1 -->
          <div class="flex gap-4 mb-4">
            <div class="flex items-center bg-gray-700/70 hover:bg-gray-700/90 rounded-md px-4 py-3 w-full">
              <i class="ph ph-user text-orange-500 mr-3"></i>
              <input 
                type="text" 
                placeholder="Nom" 
                v-model="form.firstName"
                class="bg-transparent w-full text-white placeholder-white/60 focus:outline-none"
                required
              />
            </div>
            <div class="flex items-center bg-gray-700/70 hover:bg-gray-700/90 rounded-md px-4 py-3 w-full">
              <i class="ph ph-user text-orange-500 mr-3"></i>
              <input 
                type="text" 
                placeholder="Prénom" 
                v-model="form.lastName"
                class="bg-transparent w-full text-white placeholder-white/60 focus:outline-none"
                required
              />
            </div>
          </div>
  
          <!-- Row 2 -->
          <div class="flex gap-4 mb-4">
            <div class="flex items-center bg-gray-700/70 hover:bg-gray-700/90 rounded-md px-4 py-3 w-full">
              <i class="ph ph-user text-orange-500 mr-3"></i>
              <input 
                type="text" 
                placeholder="Nom d'utilisateur" 
                v-model="form.username"
                class="bg-transparent w-full text-white placeholder-white/60 focus:outline-none"
                required
              />
            </div>
            <div class="flex items-center bg-gray-700/70 hover:bg-gray-700/90 rounded-md px-4 py-3 w-full">
              <i class="ph ph-envelope text-orange-500 mr-3"></i>
              <input 
                type="email" 
                placeholder="Email" 
                v-model="form.email"
                class="bg-transparent w-full text-white placeholder-white/60 focus:outline-none"
                required
              />
            </div>
          </div>
  
          <!-- Row 3 -->
          <div class="flex gap-4 mb-6">
            <div class="flex items-center bg-gray-700/70 hover:bg-gray-700/90 rounded-md px-4 py-3 w-full">
              <i class="ph ph-lock text-orange-500 mr-3"></i>
              <input 
                type="password" 
                placeholder="Mot de passe" 
                v-model="form.password"
                class="bg-transparent w-full text-white placeholder-white/60 focus:outline-none"
                required
              />
            </div>
            <div class="flex items-center bg-gray-700/70 hover:bg-gray-700/90 rounded-md px-4 py-3 w-full">
              <i class="ph ph-lock text-orange-500 mr-3"></i>
              <input 
                type="password" 
                placeholder="Confirmer mot de passe" 
                v-model="form.confirmPassword"
                class="bg-transparent w-full text-white placeholder-white/60 focus:outline-none"
                required
              />
            </div>
          </div>
  
          <button type="submit" class="w-full bg-orange-500 hover:bg-orange-600 transition transform hover:-translate-y-0.5 text-white font-semibold py-3 rounded-md flex items-center justify-center gap-2 text-lg">
            <i class="ph ph-user-plus"></i> S'inscrire
          </button>
        </form>
  
        <p class="text-center text-gray-300 text-sm mt-6">
          Vous avez déjà un compte ? 
          <a href="#" @click.prevent="showLogin" class="text-orange-500 hover:text-orange-400 underline font-medium">Se connecter</a>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RegisterPage',
    data() {
      return {
        form: {
          firstName: '',
          lastName: '',
          username: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
          profileImage: null
        },
        imageLabel: 'Choisir une photo de profil'
      }
    },
    methods: {
      register() {
        if (this.form.password !== this.form.confirmPassword) {
          alert('Les mots de passe ne correspondent pas');
          return;
        }
        console.log("Formulaire d'inscription soumis:", this.form);
      },
      showLogin() {
        this.$router.push('/login');
      },
      handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
          this.form.profileImage = file;
          this.imageLabel = file.name;
        }
      }
    }
  }
  </script>
  