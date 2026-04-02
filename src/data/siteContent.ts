// NeuroFit Akademia - Complete Content
// Extracted from old WordPress site

export const siteContent = {
  name: "NeuroFit - Therapie und Trainingsakademie",
  tagline: "Biofeedback und Neurofeedback",
  
  hero: {
    title: "NeuroFit",
    subtitle: "Therapie und Trainingsakademie GmbH",
    description: "Wir gehen in unserer Behandlung immer der Frage nach: Wie lässt sich das Zusammenspiel von Körper und Geist positiv beeinflussen?",
    cta: "Kontakt aufnehmen",
    videoPoster: "https://neurofit-akademie.de/wp-content/uploads/2018/06/home-1.jpg"
  },
  
  philosophy: {
    title: "Philosophie",
    content: [
      "Die NeuroFit Therapie- und Trainings-Akademie wurde 2007 von den Dipl.-Psychologen Dr. Axel Kowalski und Dr. Andreas Krombholz gegründet. Das Konzept von NeuroFit basierte von Beginn an auf zwei Bausteinen: Ausbildung und Therapie.",
      "Neben der Therapie ist daher die Ausbildung zum Neurofeedbacktrainer/Therapeut ein wichtiger Bestandteil von NeuroFit. Die Ausbildung erfolgt in Abstimmung und Anlehnung an die Ausbildungskriterien der Deutschen Gesellschaft für Biofeedback (DGBfb e.V.).",
      "Die Kursinhalte und das vermittelte Wissen lassen sich grundsätzlich mit allen aktuell am Markt befindlichen Neurofeedbackgeräten in Therapie und Training anwenden.",
      "Für einen unproblematischen Einstieg in das Neurofeedback und für die Selbsterfahrung empfehlen wir die Verwendung eines mobilen EEGs der Firma NeuroSky.",
      "Wir sind stets an einem konstruktiven Erfahrungsaustausch mit niedergelassenen Medizinern, Ärzteverbänden, Krankenkassen und -versicherungen interessiert."
    ]
  },
  
  team: {
    title: "Unser Team",
    members: [
      {
        name: "Dr. Andreas Krombholz",
        role: "Dipl.-Psychologe",
        description: "Jahrelange Erfahrungen mit psychophysiologischen Techniken an den Universitäten Wuppertal und Tübingen"
      },
      {
        name: "Dr. Axel Kowalski", 
        role: "Dipl.-Psychologe",
        description: "Grundlegende Erforschung von Zusammenhängen von Körper und Geist"
      },
      {
        name: "Christina Erkeling-Köster",
        role: "Therapeutin",
        description: "Umfassende Ausbildung in Physiologie und Psychologie, seit 2014 in der Praxis Hagen"
      }
    ]
  },
  
  locations: [
    {
      name: "Praxis Kempen",
      address: "Königstraße 42, 47906 Kempen",
      phone: "02152-809 66 42",
      mobile: "0174-950 1404",
      email: "info@neurofit-akademie.de"
    },
    {
      name: "Praxis Hagen",
      address: "Bergischer Ring 50, 58095 Hagen",
      phone: "02331-7 87 54 48", 
      mobile: "0176-924 432 49",
      email: "info@neurofit-akademie.de"
    }
  ],
  
  services: [
    {
      title: "Therapie",
      description: "Biofeedback und Neurofeedback als wirksame Behandlungsmethoden",
      areas: ["ADHS", "Tinnitus", "Schmerz", "Sucht", "Neurologische Rehabilitation"]
    },
    {
      title: "Fortbildung",
      description: "Ausbildung zum Neurofeedback-Therapeut nach DGBfb-Kriterien",
      courses: ["Grundkurs 1-4", "Inhouse Seminare", "Supervision"]
    },
    {
      title: "Produkte",
      description: "Neurofeedback-Geräte und Service",
      products: ["Home of Attention", "BrainExpress", "TeamViewer Fernwartung"]
    }
  ],

  // Fortbildung page content
  fortbildung: {
    title: "Fortbildung",
    intro: "Das Konzept der Fort- und Weiterbildung setzt sich aus den unten aufgelisteten Bausteinen zusammen. Die Veranstaltungen können sowohl als Blockkurs, Wochenendkurs und/oder in kürzeren Seminar- und Praxisblöcken gelehrt werden.",
    courses: [
      {
        title: "Grundkurs 1",
        topics: [
          "Einführung/ Geschichte des Biofeedback / Neurofeedback",
          "Neuronale Grundlagen des EEG",
          "Neuronale Kommunikation",
          "Lokalisation von Hirnfunktionen",
          "Die EEG Ableitung",
          "10-20er System",
          "Operantes- / Klassisches Konditionieren",
          "Frequenzbandtraining und ADHS"
        ]
      },
      {
        title: "Grundkurs 2",
        topics: [
          "Langsame kortikale Potentiale (SCPs)",
          "SCPs und ADHS",
          "Quantitatives EEG (QEEG)",
          "Das EEG in der Neurologie",
          "Neurofeedback in der Forschung",
          "Neurofeedback Technik, Geräteübersicht, PC-Voraussetzungen"
        ]
      },
      {
        title: "Grundkurs 3",
        topics: [
          "Lernen (neuronale Prozesse, LTP)",
          "Frequenzbandtraining und Epilepsie",
          "SCPs und Epilepsie",
          "Biofeedback/Neurofeedback bei Migräne"
        ]
      },
      {
        title: "Grundkurs 4",
        topics: [
          "Neurofeedback bei Schmerz",
          "Neurofeedback und Biofeedback in der neurologischen Reha",
          "Peak-Performance",
          "Neurofeedback bei Suchterkrankung"
        ]
      }
    ],
    additionalCourses: [
      "Grundlagen der Biologischen Psychologie und Psychophysiologie",
      "Grundlagen der Klinischen Psychologie",
      "Grundlagen der Verhaltenstherapie",
      "Migräne",
      "Psychopharmakologie",
      "Praxisseminar",
      "Supervision (DGBfb)"
    ],
    brochureUrl: "https://neurofit-akademie.de/wp-content/uploads/2019/12/Fortbildung-zum-Neurofeedback-Therapeuten-2020.pdf"
  },

  // Network page content
  network: {
    title: "Netzwerk",
    intro: "Mit den folgenden Firmen, Personen und Institutionen kooperieren wir in Forschung und Lehre sowie in Fragen der Patientenversorgung:",
    partners: [
      { name: "Akademie für Neurofeedback", url: "http://www.akademie-neurofeedback.de/" },
      { name: "ADHS Deutschland e.V. Regionalgruppe Krefeld", url: "http://www.adhs-in-krefeld.de/" },
      { name: "Be-haviour, Dipl.-Pädagogin Andrea Leyk", url: "http://www.be-haviour.de/" },
      { name: "Biofeedbackzentrum Allgäu, Dipl.-Psych. Klaus Hug", url: "http://biofeedbackzentrum-allgäu.de/" },
      { name: "CURATA Seniorenzentrum, Dortmund-Körne", url: "http://www.curata-gmbh.de/" },
      { name: "Deutsche Gesellschaft für Biofeedback (DGBfb)", url: "http://www.dgbfb.de/" },
      { name: "Deutsche Gesellschaft für Neurogastroenterologie und Motilität", url: "http://www.neurogastro.de/" },
      { name: "Hazelnut Consulting", url: "http://www.hazelnutco.de/" },
      { name: "Dr. med. Christian Knobloch, Neurologe", url: "http://www.neuropraxis-herdecke.de/" },
      { name: "Kompetenznetzwerk ADHS Südwestfalen", url: "http://www.adhs-netzwerk.de/" },
      { name: "Lehrstuhl für Naturheilkunde Uni Duisburg-Essen", url: "http://www.uni-due.de/naturheilkunde/" },
      { name: "Mindfield, Neurofeedback Geräte", url: "http://www.mindfield.de/" },
      { name: "GeBeGe, Betriebliches Gesundheitsmanagement", url: "http://www.gebege.org/" },
      { name: "psyrecon, Dr. phil. Ralf Stürmer", url: "http://www.psyrecon.de/" },
      { name: "Reflecting for Forest - Mitarbeiter- und Organisationsentwicklung", url: "http://www.reflecting-forest.de/" },
      { name: "Schmerzzentrum Münster, Dr. med. Klaus Wrenger", url: "http://www.schmerztherapie-ms.de/" },
      { name: "Sozialpädiatrisches Zentrum Kaiserswerther Diakonie", url: "http://www.kaiserswerther-diakonie.de/" },
      { name: "Jörg Unkrig Personal Coaching", url: "http://www.unkrig-personalcoaching.de/" },
      { name: "Universitätsklinikum Tübingen", url: "http://www.medizin.uni-tuebingen.de/psychosomatik/" }
    ],
    products: [
      { name: "Home of Attention", url: "http://www.home-of-attention.com/", desc: "Mobiles EEG/Neurofeedback" },
      { name: "componentXtra", url: "http://www.componentxtra.com/", desc: "Programmierung" }
    ]
  },

  // Products page content
  produkte: {
    title: "Produkte & Service",
    intro: "NeuroFit bietet Ihnen eine neue Serviceleistung an, die Fernwartung und die Vermittlung von Lerninhalten (Webinar) / Supervision per TeamViewer.",
    services: [
      {
        title: "TeamViewer Quick Support",
        desc: "Für Fernwartung",
        url: "http://get.teamviewer.com/neurofit"
      },
      {
        title: "TeamViewer Quick Join",
        desc: "Für Webinare",
        url: "http://go.teamviewer.com/neurofit_webinar"
      }
    ],
    products: [
      { name: "Home of Attention", desc: "Mobiles EEG für Neurofeedback" },
      { name: "BrainExpress", desc: "Neurofeedback-System" }
    ]
  },

  // News page content
  news: {
    title: "News",
    intro: "Aktuelles aus der NeuroFit Welt",
    articles: [
      {
        date: "03.06.2021",
        title: "Wirkt tDCS in der Behandlung von Aufmerksamkeitsstörungen?",
        excerpt: "An der Uni Magdeburg findet zurzeit eine Forschungsprojekt statt, dass die Wirkung einer elektrischen Stimulation des Gehirns überprüft.",
        url: "https://idw-online.de/de/news770072"
      }
    ]
  }
};

export default siteContent;
