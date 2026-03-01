export interface IndustryContent {
  name: string;
  title: string;
  subtitle: string;
  metaDescription: string;
  challenges: Array<{ icon: string; title: string; desc: string }>;
  solutions: string[];
  products: Array<{ icon: string; title: string; desc: string }>;
}

export interface Industry {
  slug: string;
  enSlug: string;
  icon: string;
  de: IndustryContent;
  en: IndustryContent;
}

export const industries: Industry[] = [
  {
    slug: 'gesundheitswesen',
    enSlug: 'healthcare',
    icon: 'FirstAid',
    de: {
      name: 'Gesundheitswesen',
      title: 'UniFi für das Gesundheitswesen',
      subtitle: 'Sichere, zuverlässige Netzwerklösungen für Arztpraxen, Kliniken und Spitäler.',
      metaDescription:
        'UniFi-Netzwerklösungen für das Gesundheitswesen: VLAN-Segmentierung, DSGVO-konforme Datentrennung und UniFi Protect für Praxen und Kliniken.',
      challenges: [
        {
          icon: 'Lock',
          title: 'Datensicherheit & Compliance',
          desc: 'Patientendaten erfordern strenge Netzwerktrennung und DSGVO-Konformität – Kompromisse sind nicht akzeptabel.',
        },
        {
          icon: 'WifiHigh',
          title: 'Lückenlose WLAN-Abdeckung',
          desc: 'Medizinische Geräte und mobile Pflegekräfte benötigen überall im Gebäude eine stabile, unterbrechungsfreie Verbindung.',
        },
        {
          icon: 'Bulb',
          title: 'Hohe Verfügbarkeit',
          desc: 'Im Gesundheitsbereich kann ein Netzwerkausfall schwerwiegende Folgen haben – Ausfallsicherheit ist nicht verhandelbar.',
        },
      ],
      solutions: [
        'Strikte VLAN-Segmentierung: Patienten-, Personal- und Medizingeräte-Netze sauber getrennt',
        'Redundante Access Points für lückenlose Abdeckung auf allen Etagen',
        'UniFi Protect für Eingang, Wartebereiche und Medikamentenlager',
        'Zentrales Management ohne eigene IT-Abteilung',
        'Gastnetz mit Captive Portal für Patienten und Besucher',
        'UniFi Access für Zugangskontrolle zu Medikamentenlagern und eingeschränkten Bereichen',
        'UniFi Drive für lokale, DSGVO-konforme Speicherung sensibler Patientendaten',
      ],
      products: [
        {
          icon: 'Globe',
          title: 'UniFi Network',
          desc: 'Sichere Segmentierung und professionelle WLAN-Abdeckung im gesamten Gebäude.',
        },
        {
          icon: 'Camera',
          title: 'UniFi Protect',
          desc: 'Videoüberwachung für Eingang, Wartebereiche und Lagerbereiche.',
        },
        {
          icon: 'Help',
          title: 'Support & Wartung',
          desc: 'Proaktives Monitoring und schnelle Reaktionszeiten für kritische Infrastruktur.',
        },
      ],
    },
    en: {
      name: 'Healthcare',
      title: 'UniFi for Healthcare',
      subtitle: 'Secure, reliable network solutions for medical practices, clinics and hospitals.',
      metaDescription:
        'UniFi network solutions for healthcare: VLAN segmentation, GDPR-compliant data separation and UniFi Protect for practices and clinics.',
      challenges: [
        {
          icon: 'Lock',
          title: 'Data Security & Compliance',
          desc: 'Patient data requires strict network separation and GDPR compliance – compromises are not acceptable.',
        },
        {
          icon: 'WifiHigh',
          title: 'Full WiFi Coverage',
          desc: 'Medical devices and mobile staff need a stable, uninterrupted connection throughout the entire building.',
        },
        {
          icon: 'Bulb',
          title: 'High Availability',
          desc: 'In healthcare, a network outage can have serious consequences – fault tolerance is non-negotiable.',
        },
      ],
      solutions: [
        'Strict VLAN segmentation: patient, staff and medical device networks cleanly separated',
        'Redundant access points for seamless coverage on all floors',
        'UniFi Protect for entrance, waiting areas and medication storage',
        'Central management without an in-house IT department',
        'Guest network with captive portal for patients and visitors',
        'UniFi Access for access control to medication stores and restricted areas',
        'UniFi Drive for local, GDPR-compliant storage of sensitive patient data',
      ],
      products: [
        {
          icon: 'Globe',
          title: 'UniFi Network',
          desc: 'Secure segmentation and professional WiFi coverage throughout the building.',
        },
        {
          icon: 'Camera',
          title: 'UniFi Protect',
          desc: 'Video surveillance for entrances, waiting areas and storage rooms.',
        },
        {
          icon: 'Help',
          title: 'Support & Maintenance',
          desc: 'Proactive monitoring and fast response times for critical infrastructure.',
        },
      ],
    },
  },
  {
    slug: 'hotellerie',
    enSlug: 'hospitality',
    icon: 'Building01',
    de: {
      name: 'Hotellerie',
      title: 'UniFi für Hotels und Gastronomie',
      subtitle: 'Erstklassige Gäste-WLAN-Erlebnisse und zuverlässige Betriebsinfrastruktur.',
      metaDescription:
        'UniFi für Hotels: Captive Portal, Voucher-System, lückenlose Zimmerabdeckung und UniFi Protect für Lobby und Aussenanlagen.',
      challenges: [
        {
          icon: 'Bell',
          title: 'Gäste-WLAN mit Mehrwert',
          desc: 'Gäste erwarten schnelles, stabiles WLAN in jedem Zimmer, der Lobby und im Aussenbereich.',
        },
        {
          icon: 'Lock',
          title: 'Trennung Gast / Betrieb',
          desc: 'PMS, POS und Buchungssysteme müssen strikt vom Gästenetz isoliert sein.',
        },
        {
          icon: 'MapPin',
          title: 'Weitläufige Gebäude',
          desc: 'Mehrgeschossige Hotels erfordern sorgfältige AP-Platzierung für nahtlose Coverage.',
        },
      ],
      solutions: [
        'UniFi Hotspot Manager mit Voucher-System und Branding-Möglichkeiten',
        'Separate SSIDs für Gäste, Personal und IoT-Geräte',
        'Wand-APs für diskrete Zimmerinstallation mit optimaler Signalqualität',
        'Integration mit PMS über eigene VLAN-Struktur',
        'Bandbreitenmanagement pro Nutzer und SSID',
        'UniFi Access für Gäste- und Mitarbeiterzutritt – Zimmer, Spa und Betriebsbereiche',
        'UniFi Talk als lokale Telefonanlage für Rezeption und interne Kommunikation',
      ],
      products: [
        {
          icon: 'Globe',
          title: 'UniFi Network',
          desc: 'Hotelweite WLAN-Abdeckung mit Captive Portal und Voucher-System.',
        },
        {
          icon: 'WifiHigh',
          title: 'UniFi Access Points',
          desc: 'Dezente In-Wall-APs für professionelle Zimmerausstattung.',
        },
        {
          icon: 'Camera',
          title: 'UniFi Protect',
          desc: 'Videoüberwachung für Lobby, Parkplatz und Aussenanlagen.',
        },
      ],
    },
    en: {
      name: 'Hospitality',
      title: 'UniFi for Hotels & Hospitality',
      subtitle: 'First-class guest WiFi experiences and reliable operational infrastructure.',
      metaDescription:
        'UniFi for hotels: captive portal, voucher system, full room coverage and UniFi Protect for lobby and outdoor areas.',
      challenges: [
        {
          icon: 'Bell',
          title: 'Guest WiFi with Added Value',
          desc: 'Guests expect fast, stable WiFi in every room, the lobby and outdoor areas.',
        },
        {
          icon: 'Lock',
          title: 'Separating Guest & Operations',
          desc: 'PMS, POS and booking systems must be strictly isolated from the guest network.',
        },
        {
          icon: 'MapPin',
          title: 'Large Buildings',
          desc: 'Multi-storey hotels require careful AP placement for seamless coverage.',
        },
      ],
      solutions: [
        'UniFi Hotspot Manager with voucher system and custom branding',
        'Separate SSIDs for guests, staff and IoT devices',
        'In-wall APs for discreet room installation with optimal signal quality',
        'PMS integration via dedicated VLAN structure',
        'Bandwidth management per user and SSID',
        'UniFi Access for guest and staff entry – rooms, spa and operational areas',
        'UniFi Talk as on-premise phone system for reception and internal communication',
      ],
      products: [
        {
          icon: 'Globe',
          title: 'UniFi Network',
          desc: 'Hotel-wide WiFi coverage with captive portal and voucher system.',
        },
        {
          icon: 'WifiHigh',
          title: 'UniFi Access Points',
          desc: 'Discreet in-wall APs for professional room installations.',
        },
        {
          icon: 'Camera',
          title: 'UniFi Protect',
          desc: 'Video surveillance for lobby, car park and outdoor facilities.',
        },
      ],
    },
  },
  {
    slug: 'kanzleien',
    enSlug: 'law-firms',
    icon: 'Book',
    de: {
      name: 'Kanzleien',
      title: 'UniFi für Kanzleien und Beratungsunternehmen',
      subtitle: 'Höchste Sicherheit und Vertraulichkeit für juristische Kanzleien und Beratungsunternehmen.',
      metaDescription:
        'UniFi-Netzwerklösungen für Anwaltskanzleien: Mandantendatenschutz, Site-to-Site VPN, Netzwerksegmentierung und dezente Videoüberwachung.',
      challenges: [
        {
          icon: 'Lock',
          title: 'Absolute Vertraulichkeit',
          desc: 'Mandantendaten und Kommunikation müssen höchsten Sicherheitsstandards genügen – ein Datenleck ist inakzeptabel.',
        },
        {
          icon: 'Building02',
          title: 'Mehrere Standorte',
          desc: 'Kanzleien mit mehreren Büros benötigen sichere, verlässliche Verbindungen zwischen den Standorten.',
        },
        {
          icon: 'Suitcase',
          title: 'Professionelles Umfeld',
          desc: 'Die IT-Infrastruktur muss zuverlässig, wartungsarm und dem seriösen Umfeld angemessen sein.',
        },
      ],
      solutions: [
        'VLAN-Segmentierung: Mandantennetz, Mitarbeiternetz und Druckernetz klar getrennt',
        'Site-to-Site VPN für sichere Verbindungen zwischen Kanzleistandorten',
        'UniFi Protect für diskreten Eingangsbereich und Archiv',
        'Gastnetzwerk mit Portal für Mandantenbesuche',
        'Einfaches zentrales Management – keine eigene IT-Abteilung nötig',
        'UniFi Access für Archiv- und Besprechungsräume – nur autorisiertes Personal erhält Zutritt',
        'UniFi Talk als lokale Telefonanlage ohne Cloud-Abhängigkeit – kompatibel mit Schweizer SIP-Anbietern',
        'UniFi Drive für lokale, DSGVO-konforme Ablage sensibler Mandantenakten',
      ],
      products: [
        {
          icon: 'Globe',
          title: 'UniFi Network',
          desc: 'Sichere Netzwerkinfrastruktur mit VLAN und VPN für höchste Vertraulichkeit.',
        },
        {
          icon: 'Camera',
          title: 'UniFi Protect',
          desc: 'Diskrete Videoüberwachung für Eingang und Archivbereiche.',
        },
        {
          icon: 'Settings',
          title: 'Installation & Beratung',
          desc: 'Professionelle Planung und saubere Umsetzung – passend zum Kanzleiumfeld.',
        },
      ],
    },
    en: {
      name: 'Law Firms',
      title: 'UniFi for Law Firms & Consultancies',
      subtitle: 'Maximum security and confidentiality for legal practices and consulting firms.',
      metaDescription:
        'UniFi network solutions for law firms: client data protection, site-to-site VPN, network segmentation and discreet video surveillance.',
      challenges: [
        {
          icon: 'Lock',
          title: 'Absolute Confidentiality',
          desc: 'Client data and communications must meet the highest security standards – a data breach is unacceptable.',
        },
        {
          icon: 'Building02',
          title: 'Multiple Locations',
          desc: 'Firms with several offices need secure, reliable connections between sites.',
        },
        {
          icon: 'Suitcase',
          title: 'Professional Environment',
          desc: 'The IT infrastructure must be reliable, low-maintenance and appropriate for a professional setting.',
        },
      ],
      solutions: [
        'VLAN segmentation: client network, staff network and printer network clearly separated',
        'Site-to-site VPN for secure connections between office locations',
        'UniFi Protect for discreet entrance and archive areas',
        'Guest network with portal for client visits',
        'Simple central management – no in-house IT team required',
        'UniFi Access for archive and meeting rooms – only authorised personnel gain entry',
        'UniFi Talk as on-premise phone system with no cloud dependency – compatible with Swiss SIP providers',
        'UniFi Drive for local, GDPR-compliant storage of sensitive client files',
      ],
      products: [
        {
          icon: 'Globe',
          title: 'UniFi Network',
          desc: 'Secure network infrastructure with VLAN and VPN for maximum confidentiality.',
        },
        {
          icon: 'Camera',
          title: 'UniFi Protect',
          desc: 'Discreet video surveillance for entrances and archive areas.',
        },
        {
          icon: 'Settings',
          title: 'Installation & Consulting',
          desc: 'Professional planning and clean implementation – suited to a legal environment.',
        },
      ],
    },
  },
  {
    slug: 'bueros',
    enSlug: 'offices',
    icon: 'Building02',
    de: {
      name: 'Büros',
      title: 'UniFi für Büros und Unternehmen',
      subtitle: 'Zuverlässige Netzwerkinfrastruktur für produktives Arbeiten in jedem Büro.',
      metaDescription:
        'UniFi für Büros: High-density WLAN für Grossraumbüros, stabile Videokonferenzen, Skalierbarkeit und einfaches Management.',
      challenges: [
        {
          icon: 'ChartBar',
          title: 'Viele gleichzeitige Nutzer',
          desc: 'Grossraumbüros mit Dutzenden Mitarbeitenden stellen hohe Anforderungen an das WLAN.',
        },
        {
          icon: 'Camera',
          title: 'Videokonferenzen ohne Aussetzer',
          desc: 'Hybrides Arbeiten und Videokonferenzen brauchen stabile, niedriglatenzte Verbindungen.',
        },
        {
          icon: 'TrendingUp',
          title: 'Wachstum mitdenken',
          desc: 'Eine wachsende Firma braucht eine Netzwerkinfrastruktur, die ohne grossen Aufwand mitwächst.',
        },
      ],
      solutions: [
        'High-density Access Points für Grossraumbüros und Meetingräume',
        'Managed Switches mit PoE für strukturierte Kabelinfrastruktur',
        'VLAN für Gäste, Mitarbeitende und Serverbereich',
        'UniFi Protect für Eingang, Serverraum und Treppenhaus',
        'Einfaches Management über die UniFi Network App',
        'UniFi Access für Eingang und Serverraum – Zutritt nur für autorisierte Mitarbeitende',
        'UniFi Talk als lokale VoIP-Telefonanlage für alle Mitarbeitenden',
        'UniFi Drive als lokaler Dateiserver für das gesamte Team',
      ],
      products: [
        {
          icon: 'Globe',
          title: 'UniFi Network',
          desc: 'Skalierbare Büronetz-Infrastruktur für wachsende Teams.',
        },
        {
          icon: 'Camera',
          title: 'UniFi Protect',
          desc: 'Zuverlässige Videoüberwachung für Bürogebäude und Eingangsbereiche.',
        },
        {
          icon: 'Help',
          title: 'Support & Wartung',
          desc: 'Kontinuierlicher Betrieb und schnelle Hilfe – auch ohne eigene IT.',
        },
      ],
    },
    en: {
      name: 'Offices',
      title: 'UniFi for Offices & Businesses',
      subtitle: 'Reliable network infrastructure for productive work in any office.',
      metaDescription:
        'UniFi for offices: high-density WiFi for open-plan offices, stable video conferencing, scalability and easy management.',
      challenges: [
        {
          icon: 'ChartBar',
          title: 'Many Simultaneous Users',
          desc: 'Open-plan offices with dozens of employees place high demands on WiFi performance.',
        },
        {
          icon: 'Camera',
          title: 'Video Calls Without Interruption',
          desc: 'Hybrid working and video conferencing require stable, low-latency connections.',
        },
        {
          icon: 'TrendingUp',
          title: 'Built to Scale',
          desc: 'A growing company needs a network infrastructure that expands without major effort.',
        },
      ],
      solutions: [
        'High-density access points for open-plan offices and meeting rooms',
        'Managed PoE switches for structured cabling infrastructure',
        'VLANs for guests, employees and server areas',
        'UniFi Protect for entrance, server room and stairwells',
        'Easy management via the UniFi Network App',
        'UniFi Access for entrance and server room – access restricted to authorised staff',
        'UniFi Talk as on-premise VoIP phone system for all employees',
        'UniFi Drive as a local file server for the entire team',
      ],
      products: [
        {
          icon: 'Globe',
          title: 'UniFi Network',
          desc: 'Scalable office network infrastructure for growing teams.',
        },
        {
          icon: 'Camera',
          title: 'UniFi Protect',
          desc: 'Reliable video surveillance for office buildings and entrance areas.',
        },
        {
          icon: 'Help',
          title: 'Support & Maintenance',
          desc: 'Continuous operation and fast assistance – even without in-house IT.',
        },
      ],
    },
  },
  {
    slug: 'lager-logistik',
    enSlug: 'warehousing-logistics',
    icon: 'Archive',
    de: {
      name: 'Lager & Logistik',
      title: 'UniFi für Lager und Logistik',
      subtitle: 'Robuste, weitreichende Netzwerklösungen für Lagerhallen, Depots und Logistikzentren.',
      metaDescription:
        'UniFi für Lager und Logistik: industrietaugliche Access Points, nahtloses Roaming für Scanner, WMS-Anbindung und Videoüberwachung.',
      challenges: [
        {
          icon: 'WifiHigh',
          title: 'Grosse Flächen und hohe Decken',
          desc: 'Lagerhallen erfordern leistungsstarke APs mit grosser Reichweite und robusten Montageoptionen.',
        },
        {
          icon: 'Mobile',
          title: 'Mobile Geräte und Scanner',
          desc: 'Barcode-Scanner, Handscanner und Tablets brauchen nahtloses Roaming ohne Verbindungsabbrüche.',
        },
        {
          icon: 'Settings',
          title: 'Raue Umgebung',
          desc: 'Staub, Temperaturschwankungen und mechanische Einflüsse stellen hohe Anforderungen an die Hardware.',
        },
      ],
      solutions: [
        'Industrietaugliche Outdoor/Indoor APs für grosse Hallen mit hohen Decken',
        'Nahtloses Roaming für mobile Scan-Geräte ohne Verbindungsabbrüche',
        'Managed Switches für strukturiertes Wired Backbone im gesamten Lager',
        'Zuverlässige Anbindung für Warehouse-Management-Systeme (WMS)',
        'UniFi Protect für Lagerein- und -ausgänge sowie Aussengelände',
        'UniFi Access für Tor- und Sicherheitszutritt – kontrollierter Zugang zu Hochregalen und Sicherheitsbereichen',
      ],
      products: [
        {
          icon: 'WifiHigh',
          title: 'UniFi Industrial APs',
          desc: 'Robuste Access Points für Lagerhallen, Aussenanlagen und raue Umgebungen.',
        },
        {
          icon: 'Globe',
          title: 'UniFi Network',
          desc: 'Managed Switches und Backbone-Infrastruktur für das gesamte Lager.',
        },
        {
          icon: 'Camera',
          title: 'UniFi Protect',
          desc: 'Umfassende Videoüberwachung für Lager, Tore und Aussengelände.',
        },
      ],
    },
    en: {
      name: 'Warehousing & Logistics',
      title: 'UniFi for Warehousing & Logistics',
      subtitle: 'Robust, wide-range network solutions for warehouses, depots and logistics centres.',
      metaDescription:
        'UniFi for warehousing and logistics: industrial-grade access points, seamless roaming for scanners, WMS connectivity and video surveillance.',
      challenges: [
        {
          icon: 'WifiHigh',
          title: 'Large Areas and High Ceilings',
          desc: 'Warehouses require powerful APs with long range and robust mounting options.',
        },
        {
          icon: 'Mobile',
          title: 'Mobile Devices and Scanners',
          desc: 'Barcode scanners, handheld devices and tablets need seamless roaming without dropped connections.',
        },
        {
          icon: 'Settings',
          title: 'Harsh Environments',
          desc: 'Dust, temperature fluctuations and mechanical stress place high demands on hardware.',
        },
      ],
      solutions: [
        'Industrial-grade indoor/outdoor APs for large halls with high ceilings',
        'Seamless roaming for mobile scanning devices without dropped connections',
        'Managed switches for structured wired backbone throughout the warehouse',
        'Reliable connectivity for warehouse management systems (WMS)',
        'UniFi Protect for warehouse entrances, exits and outdoor areas',
        'UniFi Access for gate and security entry – controlled access to high-rack areas and secure zones',
      ],
      products: [
        {
          icon: 'WifiHigh',
          title: 'UniFi Industrial APs',
          desc: 'Robust access points for warehouses, outdoor areas and harsh environments.',
        },
        {
          icon: 'Globe',
          title: 'UniFi Network',
          desc: 'Managed switches and backbone infrastructure for the entire warehouse.',
        },
        {
          icon: 'Camera',
          title: 'UniFi Protect',
          desc: 'Comprehensive video surveillance for warehouses, gates and outdoor areas.',
        },
      ],
    },
  },
  {
    slug: 'museen',
    enSlug: 'museums',
    icon: 'Building03',
    de: {
      name: 'Museen',
      title: 'UniFi für Museen und Kulturinstitutionen',
      subtitle: 'Diskrete, zuverlässige Netzwerkinfrastruktur für Ausstellungen, Besucher und Betrieb.',
      metaDescription:
        'UniFi für Museen: denkmalgerechte Installation, Besucher-WLAN mit Captive Portal, Schutz wertvoller Sammlungen mit UniFi Protect.',
      challenges: [
        {
          icon: 'Building03',
          title: 'Historische Gebäude',
          desc: 'Denkmalpflege und Architektur schränken Leitungsverlegung und AP-Platzierung ein.',
        },
        {
          icon: 'Star',
          title: 'Besuchererlebnis',
          desc: 'Interaktive Exponate, Audio-Guides und Multimedia-Stationen erfordern flächendeckendes, stabiles WLAN.',
        },
        {
          icon: 'Star',
          title: 'Schutz wertvoller Sammlungen',
          desc: 'Kunstwerke und Exponate müssen rund um die Uhr überwacht werden – diskret und zuverlässig.',
        },
      ],
      solutions: [
        'Dezente APs, die sich gestalterisch ins Ambiente fügen',
        'Besucher-WLAN mit individuellem Captive Portal und Museums-Branding',
        'UniFi Protect für Ausstellungsräume, Eingänge und Depots',
        'Stabile Verbindung für interaktive Medienstationen und Kassensysteme',
        'Separates Netz für Mitarbeitende und Sicherheitssysteme',
        'UniFi Access für Depots und Mitarbeiterbereiche – sensible Sammlungen bleiben geschützt',
      ],
      products: [
        {
          icon: 'Globe',
          title: 'UniFi Network',
          desc: 'Diskrete Netzwerklösung für anspruchsvolle, historische Gebäude.',
        },
        {
          icon: 'Camera',
          title: 'UniFi Protect',
          desc: 'Diskreter Kunstschutz, Einbruchserkennung und Besucherüberwachung.',
        },
        {
          icon: 'Settings',
          title: 'Installation & Beratung',
          desc: 'Denkmalgerechte Planung und Montage mit Rücksicht auf historische Substanz.',
        },
      ],
    },
    en: {
      name: 'Museums',
      title: 'UniFi for Museums & Cultural Institutions',
      subtitle: 'Discreet, reliable network infrastructure for exhibitions, visitors and operations.',
      metaDescription:
        'UniFi for museums: heritage-sensitive installation, visitor WiFi with captive portal, protection of valuable collections with UniFi Protect.',
      challenges: [
        {
          icon: 'Building03',
          title: 'Historic Buildings',
          desc: 'Listed buildings and architecture restrict cable routing and AP placement options.',
        },
        {
          icon: 'Star',
          title: 'Visitor Experience',
          desc: 'Interactive exhibits, audio guides and multimedia stations require comprehensive, stable WiFi.',
        },
        {
          icon: 'Star',
          title: 'Protecting Valuable Collections',
          desc: 'Artworks and exhibits must be monitored around the clock – discreetly and reliably.',
        },
      ],
      solutions: [
        'Discreet APs that blend into the aesthetic of the space',
        'Visitor WiFi with custom captive portal and museum branding',
        'UniFi Protect for exhibition rooms, entrances and storage areas',
        'Stable connectivity for interactive media stations and ticketing systems',
        'Separate network for staff and security systems',
        'UniFi Access for depots and staff-only areas – keeping sensitive collections protected',
      ],
      products: [
        {
          icon: 'Globe',
          title: 'UniFi Network',
          desc: 'Discreet network solution for demanding, historic buildings.',
        },
        {
          icon: 'Camera',
          title: 'UniFi Protect',
          desc: 'Discreet art protection, intrusion detection and visitor monitoring.',
        },
        {
          icon: 'Settings',
          title: 'Installation & Consulting',
          desc: 'Heritage-sensitive planning and installation with respect for historic fabric.',
        },
      ],
    },
  },
  {
    slug: 'werkstaetten',
    enSlug: 'workshops',
    icon: 'Settings',
    de: {
      name: 'Werkstätten',
      title: 'UniFi für Werkstätten und Produktionsbetriebe',
      subtitle: 'Robuste Netzwerklösungen für Handwerk, Produktion und industrielle Umgebungen.',
      metaDescription:
        'UniFi für Werkstätten: staub- und feuchtigkeitsresistente APs, IoT-VLAN für Maschinen, nahtloses Roaming und Videoüberwachung.',
      challenges: [
        {
          icon: 'WifiHigh',
          title: 'Staub und Feuchtigkeit',
          desc: 'Werkstätten sind raue Umgebungen, die robuste, schutzklassifizierte Hardware erfordern.',
        },
        {
          icon: 'DesktopTower',
          title: 'Maschinenanbindung',
          desc: 'CNC-Maschinen, IoT-Geräte und digitale Steuerungen brauchen zuverlässige Netzwerkverbindungen.',
        },
        {
          icon: 'Compass',
          title: 'Mobilität',
          desc: 'Mitarbeitende bewegen sich durch die gesamte Halle und brauchen unterbrechungsfreies WLAN.',
        },
      ],
      solutions: [
        'Schutzklassengerechte APs für staubige und feuchte Umgebungen',
        'IoT-VLAN für Maschinenanbindung, sicher getrennt vom Rest',
        'Nahtloses Roaming in der gesamten Werkhalle',
        'UniFi Protect für Eingang, Produktion und Lagerbereich',
        'Managed Switches für strukturiertes Wired Backbone',
      ],
      products: [
        {
          icon: 'WifiHigh',
          title: 'UniFi Industrial APs',
          desc: 'Für raue Umgebungen mit Staub und Feuchtigkeit ausgelegt.',
        },
        {
          icon: 'Globe',
          title: 'UniFi Network',
          desc: 'Segmentiertes Netz für Büro, Produktion und IoT-Geräte.',
        },
        {
          icon: 'Camera',
          title: 'UniFi Protect',
          desc: 'Zuverlässige Überwachung für Werkstatt, Eingang und Lager.',
        },
      ],
    },
    en: {
      name: 'Workshops',
      title: 'UniFi for Workshops & Production Facilities',
      subtitle: 'Robust network solutions for trades, production and industrial environments.',
      metaDescription:
        'UniFi for workshops: dust- and moisture-resistant APs, IoT VLAN for machines, seamless roaming and video surveillance.',
      challenges: [
        {
          icon: 'WifiHigh',
          title: 'Dust and Moisture',
          desc: 'Workshops are harsh environments that require robust, IP-rated hardware.',
        },
        {
          icon: 'DesktopTower',
          title: 'Machine Connectivity',
          desc: 'CNC machines, IoT devices and digital controllers need reliable network connections.',
        },
        {
          icon: 'Compass',
          title: 'Mobility',
          desc: 'Employees move throughout the entire hall and need uninterrupted WiFi coverage.',
        },
      ],
      solutions: [
        'IP-rated APs suitable for dusty and humid environments',
        'IoT VLAN for machine connectivity, securely separated from the rest',
        'Seamless roaming throughout the entire workshop floor',
        'UniFi Protect for entrance, production and storage areas',
        'Managed switches for structured wired backbone',
      ],
      products: [
        {
          icon: 'WifiHigh',
          title: 'UniFi Industrial APs',
          desc: 'Designed for harsh environments with dust and moisture.',
        },
        {
          icon: 'Globe',
          title: 'UniFi Network',
          desc: 'Segmented network for office, production and IoT devices.',
        },
        {
          icon: 'Camera',
          title: 'UniFi Protect',
          desc: 'Reliable monitoring for workshop, entrance and storage areas.',
        },
      ],
    },
  },
  {
    slug: 'salons',
    enSlug: 'salons',
    icon: 'EditPencil01',
    de: {
      name: 'Salons',
      title: 'UniFi für Salons und Studios',
      subtitle: 'Einfache, zuverlässige Netzwerklösungen für Friseursalons, Beauty-Studios und Wellnessbetriebe.',
      metaDescription:
        'UniFi für Salons: einfaches Setup, sicheres Kunden-WLAN, zuverlässige POS-Anbindung und UniFi Protect für Eingang und Kasse.',
      challenges: [
        {
          icon: 'Mobile',
          title: 'Kunden-WLAN',
          desc: 'Kunden erwarten gratis WLAN während ihres Besuchs – eine schlechte Verbindung hinterlässt keinen guten Eindruck.',
        },
        {
          icon: 'CreditCard01',
          title: 'Kassensystem (POS)',
          desc: 'Das Kassensystem muss jederzeit sicher und zuverlässig online sein – ohne Ausfälle.',
        },
        {
          icon: 'SearchMagnifyingGlass',
          title: 'Sicherheit',
          desc: 'Eine Kamera am Eingang und an der Kasse schützt vor Einbrüchen und gibt Sicherheit.',
        },
      ],
      solutions: [
        'Einfaches UniFi-Setup mit 1–2 APs – perfekt für kleinere Betriebe',
        'Separates Gäste-WLAN, sicher vom Kassennetz getrennt',
        'UniFi Protect für Eingang und Kassenbereich',
        'Cloud-Verwaltung ohne lokalen Server oder IT-Kenntnisse',
        'Schnelle Installation und unkomplizierte Bedienung',
      ],
      products: [
        {
          icon: 'Globe',
          title: 'UniFi Network',
          desc: 'Unkomplizierte Lösung für kleine Betriebe – schnell eingerichtet.',
        },
        {
          icon: 'Camera',
          title: 'UniFi Protect',
          desc: 'Schutz für Eingang und Kassenbereich, mobil abrufbar.',
        },
        {
          icon: 'Settings',
          title: 'Installation & Beratung',
          desc: 'Komplett-Setup in einem halben Tag – betriebsbereit von Anfang an.',
        },
      ],
    },
    en: {
      name: 'Salons',
      title: 'UniFi for Salons & Studios',
      subtitle: 'Simple, reliable network solutions for hair salons, beauty studios and wellness businesses.',
      metaDescription:
        'UniFi for salons: simple setup, secure customer WiFi, reliable POS connectivity and UniFi Protect for entrance and checkout.',
      challenges: [
        {
          icon: 'Mobile',
          title: 'Customer WiFi',
          desc: 'Customers expect free WiFi during their visit – a poor connection leaves a bad impression.',
        },
        {
          icon: 'CreditCard01',
          title: 'Point of Sale (POS)',
          desc: 'The checkout system must be securely and reliably online at all times – without outages.',
        },
        {
          icon: 'SearchMagnifyingGlass',
          title: 'Security',
          desc: 'A camera at the entrance and checkout deters intruders and provides peace of mind.',
        },
      ],
      solutions: [
        'Simple UniFi setup with 1–2 APs – perfect for smaller businesses',
        'Separate guest WiFi, securely isolated from the checkout network',
        'UniFi Protect for entrance and checkout areas',
        'Cloud management without a local server or IT skills',
        'Fast installation and straightforward operation',
      ],
      products: [
        {
          icon: 'Globe',
          title: 'UniFi Network',
          desc: 'Straightforward solution for small businesses – quick to set up.',
        },
        {
          icon: 'Camera',
          title: 'UniFi Protect',
          desc: 'Protection for entrance and checkout, accessible from your phone.',
        },
        {
          icon: 'Settings',
          title: 'Installation & Consulting',
          desc: 'Complete setup in half a day – ready to go from the start.',
        },
      ],
    },
  },
  {
    slug: 'retail',
    enSlug: 'retail',
    icon: 'ShoppingCart01',
    de: {
      name: 'Retail',
      title: 'UniFi für den Detailhandel',
      subtitle: 'Zuverlässige Netzwerkinfrastruktur für Läden, Filialen und Einkaufszentren.',
      metaDescription:
        'UniFi für Retail: hochverfügbares POS-Netz, Kundenwlan mit Portal, Filialvernetzung und Videoüberwachung für Eingang und Kasse.',
      challenges: [
        {
          icon: 'CreditCard01',
          title: 'Kassensysteme müssen laufen',
          desc: 'Ein Netzwerkausfall an der Kasse bedeutet direkt Umsatzverlust – 100% Verfügbarkeit ist Pflicht.',
        },
        {
          icon: 'Mobile',
          title: 'Kundenwlan und In-Store-Marketing',
          desc: 'Moderner Retail setzt auf Kunden-WLAN für Treueprogramme und digitale Kundenerlebnisse.',
        },
        {
          icon: 'Building01',
          title: 'Mehrere Filialen',
          desc: 'Ketten mit mehreren Standorten brauchen ein zentral verwaltetes, einheitliches Netz.',
        },
      ],
      solutions: [
        'Hochverfügbares, redundantes Netz für Kassensysteme (POS)',
        'UniFi Hotspot Portal für Kundennetz und Treueprogramm-Integration',
        'VLAN-Segmentierung: Kassennetz, Kundennetz und Backoffice getrennt',
        'Zentrale Verwaltung mehrerer Filialen aus einem einzigen Dashboard',
        'UniFi Protect für Eingang, Kasse und Lager',
        'UniFi Access für Backoffice und Lager – nur autorisiertes Personal erhält Zutritt',
      ],
      products: [
        {
          icon: 'Globe',
          title: 'UniFi Network',
          desc: 'Hochverfügbares Netz für Retail-Umgebungen – auch für Filialketten.',
        },
        {
          icon: 'Camera',
          title: 'UniFi Protect',
          desc: 'Videoüberwachung für Eingang, Kassenbereich und Lager.',
        },
        {
          icon: 'Help',
          title: 'Support & Wartung',
          desc: 'Schnelle Reaktion bei Ausfällen – damit der Verkauf weiterläuft.',
        },
      ],
    },
    en: {
      name: 'Retail',
      title: 'UniFi for Retail',
      subtitle: 'Reliable network infrastructure for shops, retail chains and shopping centres.',
      metaDescription:
        'UniFi for retail: highly available POS network, customer WiFi with portal, multi-site management and video surveillance for entrance and checkout.',
      challenges: [
        {
          icon: 'CreditCard01',
          title: 'POS Systems Must Stay Online',
          desc: 'A network outage at the checkout directly means lost revenue – 100% availability is a must.',
        },
        {
          icon: 'Mobile',
          title: 'Customer WiFi & In-Store Marketing',
          desc: 'Modern retail relies on customer WiFi for loyalty programmes and digital in-store experiences.',
        },
        {
          icon: 'Building01',
          title: 'Multiple Locations',
          desc: 'Retail chains need a centrally managed, consistent network across all sites.',
        },
      ],
      solutions: [
        'Highly available, redundant network for point-of-sale (POS) systems',
        'UniFi Hotspot Portal for customer WiFi and loyalty programme integration',
        'VLAN segmentation: POS network, customer WiFi and back office separated',
        'Central management of multiple locations from a single dashboard',
        'UniFi Protect for entrance, checkout and storage areas',
        'UniFi Access for back office and storage – only authorised staff gain entry',
      ],
      products: [
        {
          icon: 'Globe',
          title: 'UniFi Network',
          desc: 'Highly available network for retail environments – including multi-site chains.',
        },
        {
          icon: 'Camera',
          title: 'UniFi Protect',
          desc: 'Video surveillance for entrances, checkout areas and storage.',
        },
        {
          icon: 'Help',
          title: 'Support & Maintenance',
          desc: 'Fast response to outages – so sales keep running.',
        },
      ],
    },
  },
  {
    slug: 'bildungswesen',
    enSlug: 'education',
    icon: 'BookOpen',
    de: {
      name: 'Bildungswesen',
      title: 'UniFi für Schulen und Bildungsinstitutionen',
      subtitle: 'Leistungsstarke, sichere Netzwerke für Schulen, Gymnasien und Universitäten.',
      metaDescription:
        'UniFi für Bildungseinrichtungen: High-density WLAN, VLAN für Schüler/Lehrer/Verwaltung, Content-Filterung, BYOD-Management und Campus-Sicherheit.',
      challenges: [
        {
          icon: 'UsersGroup',
          title: 'Viele gleichzeitige Nutzer',
          desc: 'Hunderte Schülerinnen und Schüler mit eigenen Geräten stellen höchste Anforderungen an das Schul-WLAN.',
        },
        {
          icon: 'Lock',
          title: 'Netzwerktrennung und Inhaltskontrolle',
          desc: 'Schüler-, Lehrer- und Verwaltungsnetz müssen getrennt sein, mit angepasster Content-Filterung.',
        },
        {
          icon: 'TrendingUp',
          title: 'Skalierbarkeit',
          desc: 'Von der kleinen Primarschule bis zur grossen Universität muss die Lösung nahtlos mitwachsen.',
        },
      ],
      solutions: [
        'High-density Access Points für vollbesetzte Schulzimmer und Hörsäle',
        'Separate VLANs für Schüler, Lehrkräfte und Verwaltung',
        'DNS-basierte Content-Filterung im Schülernetz',
        'BYOD-Management mit sicheren Onboarding-Prozessen',
        'UniFi Protect für Schulgebäude, Eingänge und Aussenanlagen',
        'Skalierbar von einem Schulhaus bis zum gesamten Campus',
        'UniFi Access für Lehrerzimmer und Serverraum – nur autorisiertes Personal',
        'UniFi Drive als lokaler Schul-Dateiserver für sichere, DSGVO-konforme Datenverwaltung',
      ],
      products: [
        {
          icon: 'Globe',
          title: 'UniFi Network',
          desc: 'Hochdichte WLAN-Lösung für Bildungseinrichtungen jeder Grösse.',
        },
        {
          icon: 'Camera',
          title: 'UniFi Protect',
          desc: 'Sicherheit auf dem gesamten Campus – Eingänge, Gänge und Aussenanlagen.',
        },
        {
          icon: 'Help',
          title: 'Support & Wartung',
          desc: 'Verlässlicher Partner für Schulen – proaktiv und schnell bei Bedarf.',
        },
      ],
    },
    en: {
      name: 'Education',
      title: 'UniFi for Schools & Educational Institutions',
      subtitle: 'High-performance, secure networks for schools, colleges and universities.',
      metaDescription:
        'UniFi for education: high-density WiFi, VLANs for students/teachers/admin, content filtering, BYOD management and campus security.',
      challenges: [
        {
          icon: 'UsersGroup',
          title: 'Many Simultaneous Users',
          desc: 'Hundreds of students with their own devices place the highest demands on school WiFi.',
        },
        {
          icon: 'Lock',
          title: 'Network Separation & Content Filtering',
          desc: 'Student, teacher and admin networks must be separated, with appropriate content filtering.',
        },
        {
          icon: 'TrendingUp',
          title: 'Scalability',
          desc: 'From a small primary school to a large university, the solution must scale seamlessly.',
        },
      ],
      solutions: [
        'High-density access points for full classrooms and lecture halls',
        'Separate VLANs for students, teachers and administration',
        'DNS-based content filtering on the student network',
        'BYOD management with secure onboarding processes',
        'UniFi Protect for school buildings, entrances and outdoor areas',
        'Scalable from a single school to an entire campus',
        'UniFi Access for staff rooms and server rooms – authorised personnel only',
        'UniFi Drive as a local school file server for secure, GDPR-compliant data management',
      ],
      products: [
        {
          icon: 'Globe',
          title: 'UniFi Network',
          desc: 'High-density WiFi solution for educational institutions of any size.',
        },
        {
          icon: 'Camera',
          title: 'UniFi Protect',
          desc: 'Security across the entire campus – entrances, corridors and outdoor areas.',
        },
        {
          icon: 'Help',
          title: 'Support & Maintenance',
          desc: 'Reliable partner for schools – proactive and fast when needed.',
        },
      ],
    },
  },
];
