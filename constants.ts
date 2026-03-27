

import { Video, Palette, Image as ImageIcon, Bot, Globe, Zap, ShieldCheck, DollarSign, Headset, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

// Import des médias pour qu'ils soient inclus dans le build
import videoIaFemme from './video ia femme.mp4';
import cooImage from './coo.jpg';
import montageVideoImo from './montagevideo imo.mp4';
import autreVideo from './autre.mp4';
import videoShort from './video short.mp4';
import logo1Png from './logo1.png';
import cartePng from './carte.png';
import affichePng from './affiche.png';
import youtube1Png from './youtube1.png';
import miniaturebusinessPng from './miniaturebusiness.png';
import coverPng from './cover.png';
import iaImagePng from './ia image.png';
import videoiaMp4 from './videoIA.MP4';
import chatbotPng from './chatbot.png';

// ✍️ MODIFIEZ LES DONNÉES DE VOTRE AGENCE ICI
export const AGENCY_DATA = {
  name: "Junior Goat", // Nom de votre agence
  founder: "Junior", // Votre nom
  
  // 🖼️ LOGO DE L'AGENCE
  logo: {
    text: "JUNIOR GOAT", // Texte du logo
    image: null, 
  },

  phone: "+2250708105701", // 📞 Votre numéro WhatsApp
  email: "Akaassafouajoseph@gmail.com", // 📧 Votre adresse email
  location: "Abidjan, Côte d'Ivoire", // 📍 Votre localisation
  
  // 🧭 NAVIGATION
  nav: {
    links: [
      { name: 'Accueil', href: '#home' },
      { name: 'À propos', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Contact', href: '#contact' },
    ],
    cta: "CONTACT"
  },

  // 🏠 SECTION ACCUEIL (HERO)
  hero: {
    badge: "GOAT OF DIGITAL CREATION",
    title: {
      line1: "TRANSFORMER",
      line2: "L'IMPOSSIBLE EN",
      line3: "RÉALITÉ."
    },
    description: "Nous transformons vos idées en réalités visuelles percutantes. Montage vidéo, design graphique, miniatures et solutions IA sur mesure.",
    ctaPrimary: "LANCER LE PROJET",
    ctaSecondary: "NOS SERVICES"
  },

  // 👤 SECTION À PROPOS
  about: {
    founderName: "Junior",
    aka: "GOAT Junior",
    title: "L'Origine du GOAT Junior",
    bio: "Passionné par l'innovation technologique et la création visuelle, j'ai fondé cette agence pour offrir aux créateurs et entreprises des solutions digitales de haute qualité, alliant créativité et performance.",
    profileImage: {
      url: videoIaFemme
    },
    storyImage: {
      url: cooImage
    },
    
    story: "Tout a commencé avec une simple passion pour le montage et le design. Autodidacte et déterminé, j'ai passé des nuits entières à perfectionner mon art. Mon surnom, 'GOAT', vient de ma philosophie : transformer des idées complexes en visuels fluides, harmonieux et percutants.",
    mission: "Accompagner nos clients dans leur croissance digitale en fournissant des services créatifs d'excellence.",
    vision: "Devenir la référence de l'accompagnement créatif et technologique en Afrique de l'Ouest.",
  },

  // 🛠️ VOS SERVICES
  services_section: {
    badge: "Expertise & Domination",
    title: "NOS ARMES DE CRÉATION.",
    description: "Des solutions digitales brutales pour ceux qui ne se contentent pas de la moyenne. Cliquez pour voir le niveau.",
    modal: {
      concept: "Le Concept",
      arsenal: "L'Arsenal",
      portfolio: "CRÉATIONS",
      testimonials: "AVIS DES ÉLITES",
      footer_text: "NE SOYEZ PAS UN SPECTATEUR. SOYEZ LE GOAT.",
      cta: "COMMANDER MAINTENANT"
    }
  },

  services: [
    {
      id: "video",
      title: "Montage Vidéo",
      description: "Des montages dynamiques et professionnels pour vos réseaux sociaux, publicités ou contenus YouTube.",
      icon: Video,
      features: ["Colorimétrie avancée", "Sound Design", "Sous-titres dynamiques", "Format Réels/TikTok/Shorts"],
      whatsappMessage: "Bonjour, je suis intéressé par le montage vidéo",
      color: "blue",
      portfolio: [
        { type: 'video', url: montageVideoImo, title: 'Montage Publicitaire' },
        { type: 'video', url: autreVideo, title: 'Vlog YouTube' },
        { type: 'video', url: videoShort, title: 'Short' },
      ],
      testimonials: [
        { name: "Marc K.", role: "YouTuber", text: "Un travail exceptionnel, mes vues ont doublé grâce à la qualité du montage !" },
        { name: "Sarah L.", role: "Social Media Manager", text: "Junior comprend parfaitement l'audience. Rapide et efficace." }
      ]
    },
    {
      id: "design",
      title: "Design Graphique",
      description: "Identité visuelle, logos et supports de communication qui marquent les esprits.",
      icon: Palette,
      features: ["Logotypes", "Chartes graphiques", "Affiches & Flyers", "Posts réseaux sociaux"],
      whatsappMessage: "Bonjour, je veux un design graphique",
      color: "emerald",
      portfolio: [
        { type: 'image', url: logo1.png, title: 'Logo Tech' },
        { type: 'image', url: cartePng, title: 'Charte Graphique' },
        { type: 'image', url: affichePng, title: 'Affiche' },
      ],
      testimonials: [
        { name: "Jean M.", role: "CEO Startup", text: "Notre nouveau logo fait l'unanimité. Très pro." },
        { name: "Awa B.", role: "Entrepreneure", text: "Des designs qui sortent vraiment du lot. Je recommande !" }
      ]
    },
    {
      id: "thumbnails",
      title: "Création de Miniatures",
      description: "Miniatures YouTube haute performance conçues pour maximiser votre taux de clic (CTR).",
      icon: ImageIcon,
      features: ["Analyse de niche", "Design psychologique", "Retouche photo", "Tests A/B"],
      whatsappMessage: "Bonjour, je souhaite commander des miniatures",
      color: "amber",
      portfolio: [
        { type: 'image', url: youtube1Png, title: 'Miniature Youtube' },
        { type: 'image', url: miniaturebusinessPng, title: 'Miniature Business' },
        { type: 'image', url: coverPng, title: 'Cover' },
      ],
      testimonials: [
        { name: "Kevin G.", role: "Gamer", text: "Mon CTR est passé de 3% à 12% en une semaine !" },
        { name: "Inès T.", role: "Coach", text: "La miniature m’a été d’une grande aide. Merci Junior." }
      ]
    },
    {
      id: "ai",
      title: "Assistance IA",
      description: "Intégrez l'intelligence artificielle dans vos processus pour gagner en productivité.",
      icon: Bot,
      features: ["Automatisation", "Génération d'images IA", "Video IA", "Consulting IA"],
      whatsappMessage: "Bonjour, je suis intéressé par l'assistance IA",
      color: "purple",
      portfolio: [
        { type: 'image', url: iaImagePng, title: 'Génération Image' },
        { type: 'video', url: videoiaMp4, title: 'Video IA' },
        { type: 'image', url: chatbotPng, title: 'Chatbot Personnalisé' },
      ],
      testimonials: [
        { name: "Paul D.", role: "Directeur Marketing", text: "L'IA nous a fait gagner 10h par semaine sur nos tâches répétitives." },
        { name: "Léa V.", role: "Freelance", text: "Des conseils précieux pour utiliser les bons outils IA." }
      ]
    },
    {
      id: "web",
      title: "Création de Site Web",
      description: "Conception de sites web modernes, rapides et optimisés pour convertir vos visiteurs en clients.",
      icon: Globe,
      features: ["Design Responsive", "Optimisation SEO", "Interface intuitive", "Vitesse de chargement"],
      whatsappMessage: "Bonjour, je souhaite créer un site web",
      color: "red",
      portfolio: [],
      testimonials: [
        { name: "Thomas R.", role: "E-commerçant", text: "Mon nouveau site est incroyable, les clients adorent la fluidité." },
        { name: "Julie A.", role: "Coach", text: "Un site qui me ressemble enfin. Très satisfaite du résultat." }
      ]
    }
  ],

  // ✨ VOS AVANTAGES
  advantages_section: {
    badge: "Pourquoi nous ?",
    title: "LA SUPRÉMATIE DIGITALE."
  },

  advantages: [
    { title: "Rapidité", description: "Délais de livraison optimisés sans compromis sur la qualité.", icon: Zap },
    { title: "Qualité Premium", description: "Un rendu professionnel répondant aux standards internationaux.", icon: ShieldCheck },
    { title: "Prix Compétitifs", description: "Des tarifs adaptés à vos besoins et à votre budget.", icon: DollarSign },
    { title: "Support 24/7", description: "Une équipe à votre écoute pour vous accompagner à chaque étape.", icon: Headset }
  ],

  // 📞 SECTION CONTACT
  contact_section: {
    badge: "Contact",
    title: "ENTRER DANS L'ARÈNE.",
    description: "Prêt à dominer votre marché ? Envoyez-nous un message ou passez nous voir. Le GOAT vous attend.",
    labels: {
      name: "Nom Complet",
      email: "Email",
      subject: "Sujet",
      message: "Message",
      phone: "Téléphone",
      location: "Localisation"
    },
    placeholders: {
      name: "Junior Aka",
      email: "Junioraka@example.com",
      subject: "Mon projet agent IA",
      message: "Dites-nous tout..."
    },
    button: {
      idle: "Envoyer le Message",
      sending: "Envoi en cours...",
      sent: "Message envoyé !"
    },
    whatsapp_text: "Ou contactez-nous directement via",
    whatsapp_label: "WhatsApp Business"
  },

  // 🚀 SECTION CTA (BAS DE PAGE)
  cta_section: {
    title: "PRÊT À DEVENIR LE PROCHAIN GOAT ?",
    description: "Ne laissez pas votre vision mourir dans l'ombre. Propulsez votre business au sommet avec Junior Goat.",
    button: "DISCUTER SUR WHATSAPP",
    bg_text: "JUNIOR"
  },

  // 🔗 VOS RÉSEAUX SOCIAUX
  socials: [
    { name: "WhatsApp", icon: MessageCircle, url: "https://wa.me/2250708105701" },
    { name: "LinkedIn", icon: Linkedin, url: "#" },
    { name: "Email", icon: Mail, url: "mailto:contact@juniorGoat.ci" }
  ]
};
