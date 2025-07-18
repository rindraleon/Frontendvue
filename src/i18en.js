import { createI18n } from 'vue-i18n'

const messages = {
  fr: {
    profile: "Mon profil",
    settings: "Paramètres",
    logout: "Se déconnecter",
    toggle_theme: "Changer le thème",
    language: "Langue",
    user: "Jean Dupont",
    Utilisateurs:"Utilisateurs",
    deconnect:"Se deconnecter",
    stat:"Statistiques",
    eglise:"Eglises / Quartiers",
    apf:"APF / Sections",
    chretien:"Chétiens / Fidèles",
    association:"Association spirituelle",
    sacrement:"Sacrements",
    bapteme:"Baptemes",
    communion:"Première Communions",
    confirmation:"Confirmations",
    mariage:"Mariages",
    rh:"Ressources humaines",
    pretre:"Pretres",
    comit:"Comités",
    religieux:"Religieux",
    finance:"Finances et Budgets",
    revenu:"Revenus",
    rapport:"Rapport budgetaire",
    depense:"Dépense",
    activite:"Activités et utilisateurs",
    evenement:"Evenements",
    userlist:"Listes des utilisateurs",
    userdetail:"Detail de l'utilisateur",
    userrole:"Rôles",
    userpermission:"Droit d'accés",


  },
  mg: {
    profile: "Mombamomba ahy",
    settings: "Toerana",
    logout: "Hivoaka",
    toggle_theme: "Hanova lohahevitra",
    language: "Fiteny",
    user: "Jean Dupont",
    Utilisateurs:"Mpampiasa",
    deconnect:"Hivoaka",
    stat:"Atotan'isa",
    eglise:"Eglizy / Kartie",
    apf:"APF",
    chretien:"Kristianina",
    association:"Fikambanana masina",
    sacrement:"Sakramenta",
    bapteme:"Batemy",
    communion:"Kominio voalohany",
    confirmation:"Fankaherezana",
    mariage:"Mariazy",
    rh:"Sokajin'olona",
    pretre:"Pretra",
    comit:"Kaomitim-piangonana",
    religieux:"Relijiozy",
    finance:"Vola sy tetibola",
    revenu:"Vola miditra",
    rapport:"Tati-bola",
    depense:"Fandaniana",
    activite:"Zava-misy sy mpampiasa",
    evenement:"Fandaharam-potoana",
    userlist:"Lisitra ny mpampiasa",
    userdetail:"Mombamomba ny mpampiasa",
    userrole:"Andraikitra",
    userpermission:"Fahazoan-dalana",
  }
}

const i18n = createI18n({
  locale: 'fr',        // Langue par défaut
  fallbackLocale: 'fr',
  legacy: false,       // pour composition API
  globalInjection: true,
  messages,
})

export default i18n
