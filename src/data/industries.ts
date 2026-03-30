export interface IndustryContent {
  name: string;
  title: string;
  subtitle: string;
  metaDescription: string;
  challenges: Array<{ icon: string; title: string; desc: string }>;
  solutions: string[];
  products: Array<{ icon: string; title: string; desc: string }>;
  typicalProject?: {
    title: string;
    situation: string;
    solution: string;
    result: string;
  };
  recommendedEquipment?: Array<{ product: string; quantity: string; purpose: string }>;
  faqs?: Array<{ question: string; answer: string }>;
}

export interface Industry {
  slug: string;
  enSlug: string;
  icon: string;
  relatedTags?: string[];
  de: IndustryContent;
  en: IndustryContent;
}

export const industries: Industry[] = [
  {
    slug: 'gesundheitswesen',
    enSlug: 'healthcare',
    icon: 'FirstAid',
    relatedTags: ['VLAN', 'DSGVO', 'Datenschutz', 'UniFi Protect', 'UniFi Access'],
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
      typicalProject: {
        title: 'Arztpraxis mit 5 Behandlungsräumen',
        situation: 'Eine Gemeinschaftspraxis in Zürich mit 3 Ärztinnen, 4 MPAs und 5 Behandlungsräumen hatte ein veraltetes Consumer-WLAN. Patientendaten liefen über dasselbe Netz wie das Gäste-WLAN – ein DSGVO-Risiko. Verbindungsabbrüche bei der Nutzung des Praxisinformationssystems (PIS) führten zu Frustration im Alltag.',
        solution: 'Digital Runners installierte ein UniFi Cloud Gateway Ultra als zentrale Firewall, einen Switch Pro 24 PoE für die strukturierte Verkabelung, sowie 4 U7 Pro Access Points – einen pro Behandlungsraum und einen im Empfangsbereich. Drei VLANs wurden eingerichtet: Medizingeräte, Personal und Gäste-WLAN. Zwei G5 Turret Ultra Kameras sichern den Eingang und das Medikamentenlager.',
        result: 'Die Praxis hat jetzt ein vollständig DSGVO-konformes Netzwerk mit stabiler WLAN-Abdeckung in jedem Raum. Das PIS läuft ohne Unterbrechungen, und Patienten nutzen ein sicheres, getrenntes Gäste-WLAN. Die Investition betrug ca. CHF 4’500 inklusive Installation.',
      },
      recommendedEquipment: [
        { product: 'UniFi Cloud Gateway Ultra', quantity: '1', purpose: 'Zentrale Firewall und VLAN-Management' },
        { product: 'UniFi Switch Pro 24 PoE', quantity: '1', purpose: 'PoE-Versorgung aller Access Points und Kameras' },
        { product: 'UniFi U7 Pro', quantity: '4', purpose: 'WLAN-Abdeckung in Behandlungsräumen und Empfang' },
        { product: 'UniFi G5 Turret Ultra', quantity: '2', purpose: 'Videoüberwachung Eingang und Medikamentenlager' },
        { product: 'UniFi Access Reader G2', quantity: '1', purpose: 'Zugangskontrolle Medikamentenlager' },
        { product: 'UniFi Access Hub', quantity: '1', purpose: 'Steuerung der Zutrittskontrolle' },
      ],
      faqs: [
        {
          question: 'Wie wird das WLAN in einer Arztpraxis DSGVO-konform abgesichert?',
          answer: 'Durch strikte VLAN-Segmentierung werden Patienten-, Personal- und Geräte-Netze voneinander getrennt. So können Patientendaten nicht über das Gäste-WLAN abgefangen werden. Zusätzlich sorgt WPA3-Verschlüsselung für sichere Verbindungen.',
        },
        {
          question: 'Brauche ich eine eigene IT-Abteilung für UniFi?',
          answer: 'Nein. UniFi lässt sich zentral über eine einfache Web-Oberfläche verwalten. Digital Runners übernimmt die Einrichtung und bietet laufenden Support, sodass keine eigene IT-Abteilung nötig ist.',
        },
        {
          question: 'Was passiert bei einem Netzwerkausfall in einer Klinik?',
          answer: 'Mit redundanten Access Points und automatischem Failover bleibt das Netzwerk auch beim Ausfall einzelner Komponenten verfügbar. Unser proaktives Monitoring erkennt Probleme, bevor sie sich auswirken.',
        },
        {
          question: 'Mit welchen Kosten muss eine Arztpraxis für ein UniFi-Netzwerk rechnen?',
          answer: 'Für eine typische Praxis mit 3–5 Behandlungsräumen liegt die Investition zwischen CHF 3’500 und CHF 6’000 inklusive Hardware und Installation. Laufende Kosten für Wartung und Support können optional als Servicevertrag dazugebucht werden.',
        },
        {
          question: 'Wie lange dauert die Installation in einer laufenden Praxis?',
          answer: 'In der Regel kann die komplette Installation an einem Wochenende oder ausserhalb der Sprechzeiten durchgeführt werden. Die Vorbereitung (Planung, Konfiguration) erfolgt vorab, sodass die Ausfallzeit auf ein Minimum reduziert wird.',
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
      typicalProject: {
        title: 'Medical Practice with 5 Treatment Rooms',
        situation: 'A group practice in Zurich with 3 doctors, 4 medical assistants and 5 treatment rooms had an outdated consumer WiFi setup. Patient data was running on the same network as guest WiFi -- a GDPR risk. Connection drops while using the practice information system (PIS) caused daily frustration.',
        solution: 'Digital Runners installed a UniFi Cloud Gateway Ultra as the central firewall, a Switch Pro 24 PoE for structured cabling, and 4 U7 Pro access points -- one per treatment room and one in the reception area. Three VLANs were configured: medical devices, staff and guest WiFi. Two G5 Turret Ultra cameras secure the entrance and medication storage.',
        result: 'The practice now has a fully GDPR-compliant network with stable WiFi coverage in every room. The PIS runs without interruptions, and patients use a secure, separated guest WiFi. The investment was approximately CHF 4,500 including installation.',
      },
      recommendedEquipment: [
        { product: 'UniFi Cloud Gateway Ultra', quantity: '1', purpose: 'Central firewall and VLAN management' },
        { product: 'UniFi Switch Pro 24 PoE', quantity: '1', purpose: 'PoE power for all access points and cameras' },
        { product: 'UniFi U7 Pro', quantity: '4', purpose: 'WiFi coverage in treatment rooms and reception' },
        { product: 'UniFi G5 Turret Ultra', quantity: '2', purpose: 'Video surveillance for entrance and medication storage' },
        { product: 'UniFi Access Reader G2', quantity: '1', purpose: 'Access control for medication storage' },
        { product: 'UniFi Access Hub', quantity: '1', purpose: 'Access control management' },
      ],
      faqs: [
        {
          question: 'How is WiFi in a medical practice secured in compliance with GDPR?',
          answer: 'Through strict VLAN segmentation, patient, staff and device networks are separated from each other. This prevents patient data from being intercepted via the guest WiFi. Additionally, WPA3 encryption ensures secure connections.',
        },
        {
          question: 'Do I need my own IT department for UniFi?',
          answer: 'No. UniFi can be managed centrally via a simple web interface. Digital Runners handles the setup and provides ongoing support, so no in-house IT department is needed.',
        },
        {
          question: 'What happens during a network outage in a clinic?',
          answer: 'With redundant access points and automatic failover, the network remains available even when individual components fail. Our proactive monitoring detects issues before they have an impact.',
        },
        {
          question: 'What are the costs for a UniFi network in a medical practice?',
          answer: 'For a typical practice with 3-5 treatment rooms, the investment ranges between CHF 3,500 and CHF 6,000 including hardware and installation. Ongoing maintenance and support costs can optionally be added as a service contract.',
        },
        {
          question: 'How long does installation take in an operating practice?',
          answer: 'Typically, the complete installation can be carried out over a weekend or outside consultation hours. Preparation (planning, configuration) is done in advance, minimising downtime.',
        },
      ],
    },
  },
  {
    slug: 'hotellerie',
    enSlug: 'hospitality',
    icon: 'Building01',
    relatedTags: ['WLAN', 'UniFi Protect', 'Videoüberwachung', 'UniFi Access'],
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
      typicalProject: {
        title: 'Boutique-Hotel mit 32 Zimmern in Luzern',
        situation: 'Ein Boutique-Hotel mit 32 Zimmern auf 4 Etagen in der Luzerner Altstadt hatte ständig Beschwerden über schlechtes WLAN. Die bestehende Lösung mit 3 Consumer-Routern konnte die Zimmergäste nicht zufriedenstellen. Zudem fehlte eine saubere Trennung zwischen Gäste-WLAN und dem Buchungssystem.',
        solution: 'Digital Runners rüstete das Hotel mit einem UniFi Dream Machine Pro Max, zwei Switch Pro 24 PoE und 34 U6 In-Wall Access Points aus – einen pro Zimmer plus je einen in Lobby und Restaurant. Ein Voucher-System wurde für das Gäste-WLAN eingerichtet, und das PMS erhielt ein eigenes VLAN. Vier G5 Bullet Kameras überwachen Eingang, Parkplatz und Hintereingang.',
        result: 'Die Gästezufriedenheit beim WLAN stieg von 2.8 auf 4.7 Sterne (Booking.com). Jedes Zimmer hat jetzt stabiles, schnelles WLAN. Das PMS ist komplett isoliert, und die Rezeption verwaltet Vouchers mit einem Klick. Gesamtinvestition: ca. CHF 18’000.',
      },
      recommendedEquipment: [
        { product: 'UniFi Dream Machine Pro Max', quantity: '1', purpose: 'Zentrales Gateway mit NVR-Funktion' },
        { product: 'UniFi Switch Pro 24 PoE', quantity: '2', purpose: 'PoE-Versorgung aller APs auf 4 Etagen' },
        { product: 'UniFi U6 In-Wall', quantity: '34', purpose: 'Diskrete WLAN-Abdeckung pro Zimmer und Gemeinschaftsbereich' },
        { product: 'UniFi G5 Bullet', quantity: '4', purpose: 'Aussenüberwachung Eingang, Parkplatz und Hintereingang' },
        { product: 'UniFi Access Reader G2', quantity: '2', purpose: 'Zugangskontrolle Personal- und Lagerbereich' },
        { product: 'UniFi PoE+ Switch Flex Mini', quantity: '4', purpose: 'Zusätzliche Ports in Rezeption und Backoffice' },
      ],
      faqs: [
        {
          question: 'Wie funktioniert ein Voucher-System für Gäste-WLAN im Hotel?',
          answer: 'Mit dem UniFi Hotspot Manager können an der Rezeption individuelle WLAN-Gutscheine mit Zeitlimit erstellt werden. Gäste erhalten bei Check-in einen Code und können sich über ein gebrandetes Portal einloggen. Der Zugang läuft automatisch ab.',
        },
        {
          question: 'Können Gäste auf das interne Hotelnetz zugreifen?',
          answer: 'Nein. Durch VLAN-Segmentierung sind Gästenetz und Betriebsnetz (PMS, POS, Buchungssystem) komplett voneinander getrennt. Gäste haben nur Internetzugang, keinen Zugriff auf interne Systeme.',
        },
        {
          question: 'Wie wird WLAN in allen Zimmern sichergestellt?',
          answer: 'Mit dezenten In-Wall Access Points, die pro Zimmer oder pro Flur montiert werden. So erreicht man optimale Signalqualität in jedem Zimmer, ohne sichtbare Kabel oder grosse Geräte.',
        },
        {
          question: 'Was kostet eine komplette WLAN-Aufrüstung für ein Hotel mit 30 Zimmern?',
          answer: 'Je nach Anforderungen liegt die Investition zwischen CHF 15’000 und CHF 25’000, inklusive In-Wall APs pro Zimmer, Switches, Gateway und Installation. Die laufenden Kosten beschränken sich auf Strom und optionalen Support.',
        },
        {
          question: 'Kann das Gäste-WLAN mit dem Hotel-Branding versehen werden?',
          answer: 'Ja. Das UniFi Captive Portal lässt sich vollständig an das Hotel-Design anpassen – mit Logo, Farben und Willkommensnachricht. Auch mehrsprachige Portale für internationale Gäste sind möglich.',
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
      typicalProject: {
        title: 'Boutique Hotel with 32 Rooms in Lucerne',
        situation: 'A boutique hotel with 32 rooms across 4 floors in Lucerne\'s old town had constant complaints about poor WiFi. The existing setup with 3 consumer routers could not satisfy guests. Additionally, there was no clean separation between guest WiFi and the booking system.',
        solution: 'Digital Runners equipped the hotel with a UniFi Dream Machine Pro Max, two Switch Pro 24 PoE units and 34 U6 In-Wall access points -- one per room plus one each in the lobby and restaurant. A voucher system was set up for guest WiFi, and the PMS received its own VLAN. Four G5 Bullet cameras monitor the entrance, car park and rear entrance.',
        result: 'Guest satisfaction with WiFi rose from 2.8 to 4.7 stars (Booking.com). Every room now has stable, fast WiFi. The PMS is completely isolated, and reception manages vouchers with a single click. Total investment: approximately CHF 18,000.',
      },
      recommendedEquipment: [
        { product: 'UniFi Dream Machine Pro Max', quantity: '1', purpose: 'Central gateway with NVR functionality' },
        { product: 'UniFi Switch Pro 24 PoE', quantity: '2', purpose: 'PoE power for all APs across 4 floors' },
        { product: 'UniFi U6 In-Wall', quantity: '34', purpose: 'Discreet per-room WiFi coverage and common areas' },
        { product: 'UniFi G5 Bullet', quantity: '4', purpose: 'Outdoor surveillance for entrance, car park and rear entrance' },
        { product: 'UniFi Access Reader G2', quantity: '2', purpose: 'Access control for staff and storage areas' },
        { product: 'UniFi PoE+ Switch Flex Mini', quantity: '4', purpose: 'Additional ports at reception and back office' },
      ],
      faqs: [
        {
          question: 'How does a voucher system for guest WiFi work in a hotel?',
          answer: 'With the UniFi Hotspot Manager, individual WiFi vouchers with time limits can be created at reception. Guests receive a code at check-in and log in via a branded portal. Access expires automatically.',
        },
        {
          question: 'Can guests access the internal hotel network?',
          answer: 'No. Through VLAN segmentation, the guest network and operational network (PMS, POS, booking system) are completely separated. Guests only have internet access, not access to internal systems.',
        },
        {
          question: 'How is WiFi ensured in every room?',
          answer: 'With discreet in-wall access points mounted per room or per corridor. This achieves optimal signal quality in every room without visible cables or large devices.',
        },
        {
          question: 'What does a complete WiFi upgrade cost for a hotel with 30 rooms?',
          answer: 'Depending on requirements, the investment ranges between CHF 15,000 and CHF 25,000, including in-wall APs per room, switches, gateway and installation. Ongoing costs are limited to electricity and optional support.',
        },
        {
          question: 'Can the guest WiFi portal be customised with hotel branding?',
          answer: 'Yes. The UniFi captive portal can be fully customised to match the hotel\'s design -- with logo, colours and welcome message. Multi-language portals for international guests are also possible.',
        },
      ],
    },
  },
  {
    slug: 'kanzleien',
    enSlug: 'law-firms',
    icon: 'Book',
    relatedTags: ['VLAN', 'DSGVO', 'Datenschutz', 'Netzwerksicherheit', 'UniFi Access'],
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
      typicalProject: {
        title: 'Anwaltskanzlei mit 8 Mitarbeitenden und 2 Standorten',
        situation: 'Eine mittelgrosse Anwaltskanzlei in Bern mit 8 Mitarbeitenden an zwei Standorten hatte keine sichere Verbindung zwischen den Büros. Mandantenakten wurden per E-Mail verschickt, und das WLAN war ein einfacher Consumer-Router ohne Netzwerktrennung. Ein Compliance-Audit hatte Handlungsbedarf aufgezeigt.',
        solution: 'Digital Runners richtete an beiden Standorten je ein UniFi Cloud Gateway Ultra mit Site-to-Site VPN ein. Zwei Switch Pro 24 PoE versorgen die kabelgebundenen Arbeitsplätze und 3 U7 Pro Access Points. Drei VLANs trennen Mandanten-, Mitarbeiter- und Druckernetze. Ein UNAS Pro dient als lokaler, verschlüsselter Dateiserver für Mandantenakten.',
        result: 'Die Kanzlei bestand das nächste Compliance-Audit problemlos. Beide Standorte sind sicher per VPN verbunden, und Mandantenakten werden lokal auf dem UNAS Pro gespeichert. Die Investition lag bei ca. CHF 5’800 für beide Standorte.',
      },
      recommendedEquipment: [
        { product: 'UniFi Cloud Gateway Ultra', quantity: '2', purpose: 'Gateway mit Site-to-Site VPN pro Standort' },
        { product: 'UniFi Switch Pro 24 PoE', quantity: '2', purpose: 'Strukturierte Verkabelung und PoE an beiden Standorten' },
        { product: 'UniFi U7 Pro', quantity: '3', purpose: 'WLAN-Abdeckung in Büros und Besprechungsräumen' },
        { product: 'UniFi G5 Turret Ultra', quantity: '2', purpose: 'Videoüberwachung Eingangsbereiche' },
        { product: 'UniFi UNAS Pro', quantity: '1', purpose: 'Lokaler Dateiserver für Mandantenakten' },
      ],
      faqs: [
        {
          question: 'Wie schützt UniFi Mandantendaten in einer Kanzlei?',
          answer: 'Durch VLAN-Segmentierung wird das Mandantennetz vom Mitarbeiter- und Druckernetz getrennt. Zusätzlich sorgt WPA3-Verschlüsselung und ein separates Gastnetz dafür, dass sensible Daten nicht abgefangen werden können.',
        },
        {
          question: 'Können mehrere Kanzleistandorte sicher vernetzt werden?',
          answer: 'Ja. UniFi unterstützt Site-to-Site VPN, womit mehrere Büros verschlüsselt über das Internet verbunden werden. So kann von jedem Standort sicher auf gemeinsame Ressourcen zugegriffen werden.',
        },
        {
          question: 'Ist UniFi für eine kleine Kanzlei mit 5 Mitarbeitenden geeignet?',
          answer: 'Absolut. UniFi skaliert von kleinen Büros bis zu grossen Kanzleien. Für eine kleine Kanzlei genügt oft ein Gateway, ein Switch und 1–2 Access Points – professionell, aber erschwinglich.',
        },
        {
          question: 'Wie sicher ist das Site-to-Site VPN zwischen zwei Kanzleistandorten?',
          answer: 'UniFi verwendet WireGuard oder IPsec für Site-to-Site VPN – beides sind bewährte, stark verschlüsselte Protokolle. Die Verbindung ist mindestens so sicher wie eine dedizierte Standleitung, aber deutlich günstiger.',
        },
        {
          question: 'Kann das Netzwerk ohne IT-Kenntnisse gewartet werden?',
          answer: 'Ja, für den täglichen Betrieb sind keine IT-Kenntnisse nötig. Digital Runners übernimmt die Ersteinrichtung und bietet einen optionalen Wartungsvertrag. Kleinere Anpassungen wie das Hinzufügen neuer Geräte sind über die intuitive UniFi-App möglich.',
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
      typicalProject: {
        title: 'Law Firm with 8 Employees and 2 Locations',
        situation: 'A mid-sized law firm in Bern with 8 employees across two locations had no secure connection between offices. Client files were being sent via email, and the WiFi was a simple consumer router with no network separation. A compliance audit had flagged the need for action.',
        solution: 'Digital Runners set up a UniFi Cloud Gateway Ultra with site-to-site VPN at each location. Two Switch Pro 24 PoE units supply the wired workstations and 3 U7 Pro access points. Three VLANs separate client, staff and printer networks. A UNAS Pro serves as a local, encrypted file server for client files.',
        result: 'The firm passed its next compliance audit without issues. Both locations are securely connected via VPN, and client files are stored locally on the UNAS Pro. The investment was approximately CHF 5,800 for both locations.',
      },
      recommendedEquipment: [
        { product: 'UniFi Cloud Gateway Ultra', quantity: '2', purpose: 'Gateway with site-to-site VPN per location' },
        { product: 'UniFi Switch Pro 24 PoE', quantity: '2', purpose: 'Structured cabling and PoE at both locations' },
        { product: 'UniFi U7 Pro', quantity: '3', purpose: 'WiFi coverage in offices and meeting rooms' },
        { product: 'UniFi G5 Turret Ultra', quantity: '2', purpose: 'Video surveillance for entrance areas' },
        { product: 'UniFi UNAS Pro', quantity: '1', purpose: 'Local file server for client records' },
      ],
      faqs: [
        {
          question: 'How does UniFi protect client data in a law firm?',
          answer: 'Through VLAN segmentation, the client network is separated from the staff and printer networks. Additionally, WPA3 encryption and a separate guest network ensure sensitive data cannot be intercepted.',
        },
        {
          question: 'Can multiple office locations be securely connected?',
          answer: 'Yes. UniFi supports site-to-site VPN, which connects multiple offices via encrypted tunnels over the internet. This allows secure access to shared resources from any location.',
        },
        {
          question: 'Is UniFi suitable for a small firm with 5 employees?',
          answer: 'Absolutely. UniFi scales from small offices to large firms. For a small practice, a gateway, a switch and 1–2 access points are often sufficient – professional yet affordable.',
        },
        {
          question: 'How secure is the site-to-site VPN between two office locations?',
          answer: 'UniFi uses WireGuard or IPsec for site-to-site VPN -- both are proven, strongly encrypted protocols. The connection is at least as secure as a dedicated leased line, but significantly more cost-effective.',
        },
        {
          question: 'Can the network be maintained without IT expertise?',
          answer: 'Yes, no IT expertise is needed for day-to-day operation. Digital Runners handles the initial setup and offers an optional maintenance contract. Minor adjustments such as adding new devices can be done via the intuitive UniFi app.',
        },
      ],
    },
  },
  {
    slug: 'bueros',
    enSlug: 'offices',
    icon: 'Building02',
    relatedTags: ['WLAN', 'Planung', 'WiFi', 'VLAN', 'UniFi Network'],
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
      typicalProject: {
        title: 'Startup-Büro mit 45 Arbeitsplätzen in Zürich',
        situation: 'Ein wachsendes Tech-Startup in Zürich-West hatte 45 Mitarbeitende auf einer offenen Bürofläche von 400 m². Das bestehende WLAN brach bei Video-Calls regelmässig zusammen, besonders wenn viele Mitarbeitende gleichzeitig in Meetings waren. Neue Mitarbeitende konnten nur umständlich ins Netz eingebunden werden.',
        solution: 'Digital Runners installierte ein UniFi Cloud Gateway Ultra, einen Switch Enterprise 48 PoE für das Backbone, und 4 U7 Pro Max Access Points für die High-Density-Umgebung. Drei VLANs trennen Mitarbeiter, Gäste und IoT-Geräte. Ein weiterer U7 Pro wurde im Meetingraum-Bereich platziert. QoS-Regeln priorisieren Video-Traffic.',
        result: 'Video-Calls laufen jetzt unterbrechungsfrei, auch bei Vollbesetzung. Neue Mitarbeitende werden in 2 Minuten über das Self-Service-Portal eingebunden. Das Netzwerk ist für bis zu 100 Arbeitsplätze ausgelegt. Investition: ca. CHF 5’200.',
      },
      recommendedEquipment: [
        { product: 'UniFi Cloud Gateway Ultra', quantity: '1', purpose: 'Zentrale Firewall, Routing und VLAN-Management' },
        { product: 'UniFi Switch Enterprise 48 PoE', quantity: '1', purpose: 'Backbone-Switch für alle Arbeitsplätze und APs' },
        { product: 'UniFi U7 Pro Max', quantity: '4', purpose: 'High-Density WLAN für Grossraumbüro' },
        { product: 'UniFi U7 Pro', quantity: '1', purpose: 'Dedizierter AP für Meetingraum-Zone' },
        { product: 'UniFi G5 Turret Ultra', quantity: '2', purpose: 'Videoüberwachung Eingang und Serverraum' },
        { product: 'UniFi Access Reader G2', quantity: '1', purpose: 'Zugangskontrolle Eingang' },
      ],
      faqs: [
        {
          question: 'Wie viele Geräte kann UniFi in einem Grossraumbüro gleichzeitig bedienen?',
          answer: 'Ein einzelner UniFi WiFi 7 Access Point kann über 300 gleichzeitige Verbindungen verwalten. Für Grossraumbüros empfehlen wir mehrere High-density APs, die Bandbreite und Last automatisch verteilen.',
        },
        {
          question: 'Funktionieren Videokonferenzen zuverlässig über UniFi WLAN?',
          answer: 'Ja. Durch Quality-of-Service (QoS) Regeln kann Videokonferenz-Traffic priorisiert werden. In Kombination mit WiFi 6 oder WiFi 7 sind niedrige Latenz und stabile Verbindungen gewährleistet.',
        },
        {
          question: 'Kann das Netzwerk mitwachsen, wenn wir mehr Mitarbeitende einstellen?',
          answer: 'UniFi ist modular aufgebaut. Neue Access Points, Switches oder sogar Standorte lassen sich jederzeit hinzufügen und zentral über ein Dashboard verwalten – ohne Komplettumbau.',
        },
        {
          question: 'Wie schnell ist die Installation in einem bestehenden Büro?',
          answer: 'Die meisten Büro-Installationen sind innerhalb von 1–2 Tagen abgeschlossen. Die Vorkonfiguration erfolgt bei uns im Büro, sodass vor Ort nur noch die Hardware montiert und das Netzwerk aktiviert werden muss.',
        },
        {
          question: 'Können Mitarbeitende im Home Office sicher auf das Firmennetz zugreifen?',
          answer: 'Ja. Über den integrierten VPN-Server im UniFi Gateway können Mitarbeitende von zu Hause oder unterwegs eine verschlüsselte Verbindung zum Firmennetz aufbauen – genau so, als wären sie im Büro.',
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
      typicalProject: {
        title: 'Startup Office with 45 Workstations in Zurich',
        situation: 'A growing tech startup in Zurich-West had 45 employees in an open-plan office of 400 m2. The existing WiFi regularly dropped during video calls, especially when many employees were in meetings simultaneously. Onboarding new employees to the network was cumbersome.',
        solution: 'Digital Runners installed a UniFi Cloud Gateway Ultra, a Switch Enterprise 48 PoE for the backbone, and 4 U7 Pro Max access points for the high-density environment. Three VLANs separate staff, guests and IoT devices. An additional U7 Pro was placed in the meeting room area. QoS rules prioritise video traffic.',
        result: 'Video calls now run without interruptions, even at full occupancy. New employees are onboarded in 2 minutes via the self-service portal. The network is designed for up to 100 workstations. Investment: approximately CHF 5,200.',
      },
      recommendedEquipment: [
        { product: 'UniFi Cloud Gateway Ultra', quantity: '1', purpose: 'Central firewall, routing and VLAN management' },
        { product: 'UniFi Switch Enterprise 48 PoE', quantity: '1', purpose: 'Backbone switch for all workstations and APs' },
        { product: 'UniFi U7 Pro Max', quantity: '4', purpose: 'High-density WiFi for open-plan office' },
        { product: 'UniFi U7 Pro', quantity: '1', purpose: 'Dedicated AP for meeting room zone' },
        { product: 'UniFi G5 Turret Ultra', quantity: '2', purpose: 'Video surveillance for entrance and server room' },
        { product: 'UniFi Access Reader G2', quantity: '1', purpose: 'Access control for entrance' },
      ],
      faqs: [
        {
          question: 'How many devices can UniFi handle simultaneously in an open-plan office?',
          answer: 'A single UniFi WiFi 7 access point can manage over 300 simultaneous connections. For open-plan offices, we recommend multiple high-density APs that automatically distribute bandwidth and load.',
        },
        {
          question: 'Do video conferences work reliably over UniFi WiFi?',
          answer: 'Yes. Quality-of-Service (QoS) rules allow video conferencing traffic to be prioritised. Combined with WiFi 6 or WiFi 7, low latency and stable connections are guaranteed.',
        },
        {
          question: 'Can the network grow as we hire more employees?',
          answer: 'UniFi is modular. New access points, switches or even locations can be added at any time and managed centrally from a single dashboard – without a complete overhaul.',
        },
        {
          question: 'How fast is installation in an existing office?',
          answer: 'Most office installations are completed within 1-2 days. Pre-configuration is done at our premises, so on-site work is limited to mounting hardware and activating the network.',
        },
        {
          question: 'Can employees securely access the company network from home?',
          answer: 'Yes. Via the integrated VPN server in the UniFi gateway, employees can establish an encrypted connection to the company network from home or on the go -- just as if they were in the office.',
        },
      ],
    },
  },
  {
    slug: 'lager-logistik',
    enSlug: 'warehousing-logistics',
    icon: 'Archive',
    relatedTags: ['WLAN', 'UniFi Protect', 'Outdoor', 'UniFi Access'],
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
      typicalProject: {
        title: 'Logistikzentrum mit 3’000 m² Lagerfläche bei Basel',
        situation: 'Ein Logistikunternehmen bei Basel betreibt eine 3’000 m² grosse Lagerhalle mit 12 Meter Deckenhöhe. 15 Mitarbeitende nutzen Handscanner für die Kommissionierung, doch das WLAN fiel regelmässig aus. Beim Wechsel zwischen Hallenbereichen verloren die Scanner die Verbindung, was zu Fehlbuchungen im WMS führte.',
        solution: 'Digital Runners installierte ein UniFi Cloud Gateway Ultra, zwei Switch Pro 24 PoE und 6 U7 Outdoor Access Points an der Hallendecke für maximale Reichweite. Fast Roaming (802.11r) wurde aktiviert, damit Scanner nahtlos zwischen APs wechseln. Das WMS erhielt ein eigenes VLAN. Vier G5 Bullet Kameras überwachen die Ladetore und das Aussengelände.',
        result: 'Die WLAN-Abdeckung ist jetzt lückenlos in der gesamten Halle. Die Handscanner arbeiten ohne Verbindungsabbrüche, und Fehlbuchungen sind um 95% zurückgegangen. Die Videoüberwachung schützt Waren und dokumentiert den Warenein- und -ausgang. Investition: ca. CHF 7’500.',
      },
      recommendedEquipment: [
        { product: 'UniFi Cloud Gateway Ultra', quantity: '1', purpose: 'Zentrale Firewall und VLAN-Management' },
        { product: 'UniFi Switch Pro 24 PoE', quantity: '2', purpose: 'PoE-Versorgung für APs und Kameras' },
        { product: 'UniFi U7 Outdoor', quantity: '6', purpose: 'Weitreichende WLAN-Abdeckung in hoher Lagerhalle' },
        { product: 'UniFi G5 Bullet', quantity: '4', purpose: 'Outdoor-Überwachung Ladetore und Aussengelände' },
        { product: 'UniFi Access Reader G2', quantity: '2', purpose: 'Zugangskontrolle Ladetore und Sicherheitsbereich' },
        { product: 'UniFi Access Hub', quantity: '1', purpose: 'Steuerung der Zutrittskontrolle' },
      ],
      faqs: [
        {
          question: 'Funktioniert UniFi WLAN auch in hohen Lagerhallen?',
          answer: 'Ja. Mit industrietauglichen Access Points, die für grosse Reichweiten und hohe Decken konzipiert sind, wird auch in 10–15 Meter hohen Hallen eine stabile Abdeckung erreicht.',
        },
        {
          question: 'Können Barcode-Scanner ohne Unterbrechung im ganzen Lager verwendet werden?',
          answer: 'Durch nahtloses Roaming (Fast Roaming / 802.11r) wechseln mobile Geräte automatisch zwischen Access Points, ohne die Verbindung zu verlieren. Das ist entscheidend für Scanner und Handhelds.',
        },
        {
          question: 'Wie wird das WMS (Warehouse Management System) angebunden?',
          answer: 'Das WMS wird über ein eigenes VLAN angebunden, getrennt vom allgemeinen Netz. So ist die Kommunikation zwischen WMS-Server und mobilen Scannern zuverlässig und sicher.',
        },
        {
          question: 'Was kostet eine WLAN-Aufrüstung für eine Lagerhalle?',
          answer: 'Für eine Lagerhalle mit 2’000–5’000 m² liegt die Investition typischerweise zwischen CHF 6’000 und CHF 12’000, je nach Deckenhöhe, Anzahl APs und gewünschter Kameraüberwachung. Ein Vor-Ort-Survey ist empfehlenswert.',
        },
        {
          question: 'Wie robust sind die Access Points gegenüber Staplern und Erschütterungen?',
          answer: 'Die APs werden an der Decke oder an Stahlträgern montiert, ausserhalb der Reichweite von Staplern. UniFi Outdoor-APs sind für raue Umgebungen ausgelegt und vertragen Temperaturschwankungen, Staub und Vibrationen problemlos.',
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
      typicalProject: {
        title: 'Logistics Centre with 3,000 m2 Warehouse Space near Basel',
        situation: 'A logistics company near Basel operates a 3,000 m2 warehouse with 12-metre ceilings. 15 employees use handheld scanners for order picking, but the WiFi regularly dropped out. When moving between hall sections, scanners lost their connection, leading to mis-bookings in the WMS.',
        solution: 'Digital Runners installed a UniFi Cloud Gateway Ultra, two Switch Pro 24 PoE units and 6 U7 Outdoor access points mounted on the ceiling for maximum range. Fast Roaming (802.11r) was enabled so scanners switch seamlessly between APs. The WMS received its own VLAN. Four G5 Bullet cameras monitor the loading docks and outdoor area.',
        result: 'WiFi coverage is now seamless throughout the entire hall. Handheld scanners work without connection drops, and mis-bookings have decreased by 95%. Video surveillance protects goods and documents incoming and outgoing shipments. Investment: approximately CHF 7,500.',
      },
      recommendedEquipment: [
        { product: 'UniFi Cloud Gateway Ultra', quantity: '1', purpose: 'Central firewall and VLAN management' },
        { product: 'UniFi Switch Pro 24 PoE', quantity: '2', purpose: 'PoE power for APs and cameras' },
        { product: 'UniFi U7 Outdoor', quantity: '6', purpose: 'Long-range WiFi coverage in tall warehouse' },
        { product: 'UniFi G5 Bullet', quantity: '4', purpose: 'Outdoor surveillance for loading docks and yard' },
        { product: 'UniFi Access Reader G2', quantity: '2', purpose: 'Access control for loading docks and secure area' },
        { product: 'UniFi Access Hub', quantity: '1', purpose: 'Access control management' },
      ],
      faqs: [
        {
          question: 'Does UniFi WiFi work in tall warehouse halls?',
          answer: 'Yes. With industrial-grade access points designed for long range and high ceilings, stable coverage is achieved even in halls 10–15 metres high.',
        },
        {
          question: 'Can barcode scanners be used without interruption throughout the warehouse?',
          answer: 'Through seamless roaming (Fast Roaming / 802.11r), mobile devices automatically switch between access points without losing the connection. This is critical for scanners and handhelds.',
        },
        {
          question: 'How is the WMS (Warehouse Management System) connected?',
          answer: 'The WMS is connected via its own VLAN, separated from the general network. This ensures communication between the WMS server and mobile scanners is reliable and secure.',
        },
        {
          question: 'What does a WiFi upgrade cost for a warehouse?',
          answer: 'For a warehouse of 2,000-5,000 m2, the investment typically ranges between CHF 6,000 and CHF 12,000, depending on ceiling height, number of APs and desired camera coverage. An on-site survey is recommended.',
        },
        {
          question: 'How robust are the access points against forklifts and vibrations?',
          answer: 'The APs are mounted on ceilings or steel beams, out of reach of forklifts. UniFi outdoor APs are designed for harsh environments and can easily withstand temperature fluctuations, dust and vibrations.',
        },
      ],
    },
  },
  {
    slug: 'museen',
    enSlug: 'museums',
    icon: 'Building03',
    relatedTags: ['UniFi Protect', 'WLAN', 'Videoüberwachung', 'UniFi Access'],
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
      typicalProject: {
        title: 'Regionalmuseum mit 6 Ausstellungsräumen in Winterthur',
        situation: 'Ein Regionalmuseum in einem denkmalgeschützten Gebäude in Winterthur mit 6 Ausstellungsräumen, einem Shop und einem Veranstaltungsraum hatte kein WLAN für Besucher und keine digitale Infrastruktur für interaktive Exponate. Die Denkmalpflege verbot sichtbare Kabel und grosse Wandmontagen.',
        solution: 'Digital Runners plante eine minimalinvasive Installation mit einem UniFi Cloud Gateway Ultra und 5 U7 Pro Access Points, die in bestehende Kabelkanäle und abgehängte Decken integriert wurden. Ein Besucher-WLAN mit Museums-Branding wurde eingerichtet. Drei UniFi AI Theta Kameras überwachen die wertvollsten Exponate mit KI-gestützter Bewegungserkennung.',
        result: 'Das Museum bietet jetzt interaktive Audio-Guides per Smartphone, ein gebrandetes Besucher-WLAN und lückenlose Überwachung der Sammlung. Die Denkmalpflege genehmigte die Installation ohne Auflagen. Investition: ca. CHF 6’200.',
      },
      recommendedEquipment: [
        { product: 'UniFi Cloud Gateway Ultra', quantity: '1', purpose: 'Zentrale Firewall und Netzwerkmanagement' },
        { product: 'UniFi Switch Pro 24 PoE', quantity: '1', purpose: 'PoE-Versorgung für APs und Kameras' },
        { product: 'UniFi U7 Pro', quantity: '5', purpose: 'Diskrete WLAN-Abdeckung in Ausstellungsräumen' },
        { product: 'UniFi AI Theta', quantity: '3', purpose: 'KI-gestützte Überwachung wertvoller Exponate' },
        { product: 'UniFi Access Reader G2', quantity: '2', purpose: 'Zugangskontrolle Depot und Mitarbeiterbereiche' },
      ],
      faqs: [
        {
          question: 'Kann WLAN in einem denkmalgeschützten Gebäude installiert werden?',
          answer: 'Ja. UniFi bietet dezente Access Points, die sich optisch ins Ambiente einfügen. Die Montage erfolgt ohne Eingriffe in die historische Substanz – z.B. über bestehende Kabelkanäle oder diskrete Aufputzmontage.',
        },
        {
          question: 'Wie wird das Besucher-WLAN vom Museumsnetz getrennt?',
          answer: 'Durch VLAN-Segmentierung erhalten Besucher ein eigenes Netz mit Captive Portal und Museums-Branding. Das interne Netz für Kassen, Sicherheitssysteme und Mitarbeitende bleibt vollständig isoliert.',
        },
        {
          question: 'Können Kunstwerke mit UniFi Protect überwacht werden?',
          answer: 'Ja. UniFi Protect Kameras bieten 24/7 Überwachung mit Bewegungserkennung und Benachrichtigungen. Die Kameras sind diskret und können in sensiblen Ausstellungsräumen montiert werden.',
        },
        {
          question: 'Welche Möglichkeiten bietet das Besucher-WLAN für das Museum?',
          answer: 'Über das Captive Portal können Besucher beim Anmelden Informationen zum aktuellen Programm sehen. Zudem ermöglicht das WLAN smartphone-basierte Audio-Guides, interaktive Exponate und digitale Wegführung – ohne zusätzliche Hardware.',
        },
        {
          question: 'Wie wird die Überwachung nachts und ausserhalb der Öffnungszeiten gehandhabt?',
          answer: 'UniFi Protect kann zeitbasierte Regeln erstellen: Während der Öffnungszeiten wird nur bei ungewöhnlichen Bewegungen gemeldet, nachts wird jede Bewegung als Alarm registriert. Push-Benachrichtigungen gehen direkt auf das Smartphone des Sicherheitsverantwortlichen.',
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
      typicalProject: {
        title: 'Regional Museum with 6 Exhibition Rooms in Winterthur',
        situation: 'A regional museum in a listed heritage building in Winterthur with 6 exhibition rooms, a shop and an event space had no visitor WiFi and no digital infrastructure for interactive exhibits. Heritage authorities prohibited visible cables and large wall mountings.',
        solution: 'Digital Runners planned a minimally invasive installation with a UniFi Cloud Gateway Ultra and 5 U7 Pro access points, integrated into existing cable ducts and suspended ceilings. A visitor WiFi with museum branding was set up. Three UniFi AI Theta cameras monitor the most valuable exhibits with AI-powered motion detection.',
        result: 'The museum now offers interactive smartphone-based audio guides, branded visitor WiFi and seamless surveillance of its collection. The heritage authority approved the installation without conditions. Investment: approximately CHF 6,200.',
      },
      recommendedEquipment: [
        { product: 'UniFi Cloud Gateway Ultra', quantity: '1', purpose: 'Central firewall and network management' },
        { product: 'UniFi Switch Pro 24 PoE', quantity: '1', purpose: 'PoE power for APs and cameras' },
        { product: 'UniFi U7 Pro', quantity: '5', purpose: 'Discreet WiFi coverage in exhibition rooms' },
        { product: 'UniFi AI Theta', quantity: '3', purpose: 'AI-powered surveillance of valuable exhibits' },
        { product: 'UniFi Access Reader G2', quantity: '2', purpose: 'Access control for depot and staff areas' },
      ],
      faqs: [
        {
          question: 'Can WiFi be installed in a listed heritage building?',
          answer: 'Yes. UniFi offers discreet access points that blend visually into the environment. Installation is carried out without interfering with the historic fabric – e.g. via existing cable ducts or discreet surface mounting.',
        },
        {
          question: 'How is visitor WiFi separated from the museum network?',
          answer: 'Through VLAN segmentation, visitors receive their own network with a captive portal and museum branding. The internal network for ticketing, security systems and staff remains fully isolated.',
        },
        {
          question: 'Can artworks be monitored with UniFi Protect?',
          answer: 'Yes. UniFi Protect cameras offer 24/7 surveillance with motion detection and notifications. The cameras are discreet and can be mounted in sensitive exhibition spaces.',
        },
        {
          question: 'What options does visitor WiFi offer for the museum?',
          answer: 'Via the captive portal, visitors can see information about the current programme when logging in. The WiFi also enables smartphone-based audio guides, interactive exhibits and digital wayfinding -- without additional hardware.',
        },
        {
          question: 'How is surveillance handled at night and outside opening hours?',
          answer: 'UniFi Protect can create time-based rules: during opening hours, only unusual movements trigger alerts, while at night every movement is registered as an alarm. Push notifications go directly to the security manager\'s smartphone.',
        },
      ],
    },
  },
  {
    slug: 'werkstaetten',
    enSlug: 'workshops',
    icon: 'Settings',
    relatedTags: ['WLAN', 'UniFi Protect', 'Outdoor', 'VLAN'],
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
      typicalProject: {
        title: 'Schreinerei mit 800 m² Werkstatt und Bürotrakt',
        situation: 'Eine Schreinerei in Aarau mit 12 Mitarbeitenden hatte eine 800 m² Werkstatt und einen angrenzenden Bürotrakt. In der Werkstatt gab es kein WLAN – digitale Zeichnungen mussten am Büro-PC angesehen und ausgedruckt werden. Die CNC-Fräse war nur per USB-Stick ansteuerbar, und eine Kameraüberwachung fehlte trotz wertvollem Maschinenpark.',
        solution: 'Digital Runners installierte ein UniFi Cloud Gateway Ultra, einen Switch Pro 24 PoE und 3 U7 Outdoor Access Points in der Werkstatt (staubresistent). Ein U7 Pro deckt den Bürotrakt ab. Ein IoT-VLAN verbindet die CNC-Fräse und den Laser-Cutter direkt mit dem Netzwerk. Zwei G5 Bullet Kameras überwachen den Eingang und die Werkstatt.',
        result: 'Mitarbeitende können Zeichnungen jetzt direkt am Tablet in der Werkstatt öffnen. Die CNC-Fräse empfängt Aufträge drahtlos, und der Betriebsleiter kann die Werkstatt per App überwachen. Investition: ca. CHF 4’800.',
      },
      recommendedEquipment: [
        { product: 'UniFi Cloud Gateway Ultra', quantity: '1', purpose: 'Zentrale Firewall und VLAN-Management' },
        { product: 'UniFi Switch Pro 24 PoE', quantity: '1', purpose: 'PoE-Versorgung für alle Geräte' },
        { product: 'UniFi U7 Outdoor', quantity: '3', purpose: 'Staubresistente WLAN-Abdeckung in der Werkstatt' },
        { product: 'UniFi U7 Pro', quantity: '1', purpose: 'WLAN-Abdeckung im Bürotrakt' },
        { product: 'UniFi G5 Bullet', quantity: '2', purpose: 'Videoüberwachung Eingang und Werkstatt' },
      ],
      faqs: [
        {
          question: 'Halten UniFi Access Points Staub und Feuchtigkeit aus?',
          answer: 'Ja. UniFi bietet industrietaugliche Access Points mit IP-Schutzklassen, die für staubige und feuchte Umgebungen konzipiert sind. Diese sind ideal für Werkstätten und Produktionshallen.',
        },
        {
          question: 'Wie werden CNC-Maschinen und IoT-Geräte sicher ins Netzwerk eingebunden?',
          answer: 'Über ein separates IoT-VLAN werden Maschinen und Steuerungsgeräte vom restlichen Netzwerk isoliert. So können sie zuverlässig kommunizieren, ohne ein Sicherheitsrisiko für andere Systeme darzustellen.',
        },
        {
          question: 'Funktioniert WLAN zuverlässig in einer grossen Werkhalle?',
          answer: 'Mit der richtigen Platzierung von Access Points und nahtlosem Roaming können Mitarbeitende sich frei durch die Halle bewegen, ohne Verbindungsabbrüche zu erleben.',
        },
        {
          question: 'Was kostet ein WLAN-Setup für eine mittelgrosse Werkstatt?',
          answer: 'Für eine Werkstatt mit 500–1’000 m² plus Bürobereich rechnen wir mit CHF 3’500 bis CHF 6’000, inklusive staubresistenter APs, Gateway, Switch und Installation. Ein Vor-Ort-Besuch klärt die genauen Anforderungen.',
        },
        {
          question: 'Können Maschinen automatisch Statusmeldungen senden?',
          answer: 'Ja. Über das IoT-VLAN können vernetzte Maschinen Statusmeldungen, Fehlermeldungen oder Produktionsdaten an ein zentrales System senden. Dies ermöglicht vorausschauende Wartung und reduziert Ausfallzeiten.',
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
      typicalProject: {
        title: 'Carpentry Workshop with 800 m2 Floor Space and Office Wing',
        situation: 'A carpentry workshop in Aarau with 12 employees had an 800 m2 workshop floor and an adjacent office wing. There was no WiFi in the workshop -- digital drawings had to be viewed on the office PC and printed out. The CNC router could only be controlled via USB stick, and there was no camera surveillance despite a valuable machine park.',
        solution: 'Digital Runners installed a UniFi Cloud Gateway Ultra, a Switch Pro 24 PoE and 3 U7 Outdoor access points in the workshop (dust-resistant). A U7 Pro covers the office wing. An IoT VLAN connects the CNC router and laser cutter directly to the network. Two G5 Bullet cameras monitor the entrance and workshop floor.',
        result: 'Employees can now open drawings directly on tablets in the workshop. The CNC router receives jobs wirelessly, and the operations manager can monitor the workshop via app. Investment: approximately CHF 4,800.',
      },
      recommendedEquipment: [
        { product: 'UniFi Cloud Gateway Ultra', quantity: '1', purpose: 'Central firewall and VLAN management' },
        { product: 'UniFi Switch Pro 24 PoE', quantity: '1', purpose: 'PoE power for all devices' },
        { product: 'UniFi U7 Outdoor', quantity: '3', purpose: 'Dust-resistant WiFi coverage in workshop' },
        { product: 'UniFi U7 Pro', quantity: '1', purpose: 'WiFi coverage in office wing' },
        { product: 'UniFi G5 Bullet', quantity: '2', purpose: 'Video surveillance for entrance and workshop' },
      ],
      faqs: [
        {
          question: 'Can UniFi access points withstand dust and moisture?',
          answer: 'Yes. UniFi offers industrial-grade access points with IP protection ratings designed for dusty and humid environments. These are ideal for workshops and production halls.',
        },
        {
          question: 'How are CNC machines and IoT devices securely integrated into the network?',
          answer: 'Via a separate IoT VLAN, machines and control devices are isolated from the rest of the network. This allows them to communicate reliably without posing a security risk to other systems.',
        },
        {
          question: 'Does WiFi work reliably in a large workshop hall?',
          answer: 'With proper placement of access points and seamless roaming, employees can move freely throughout the hall without experiencing connection drops.',
        },
        {
          question: 'What does a WiFi setup cost for a mid-sized workshop?',
          answer: 'For a workshop of 500-1,000 m2 plus office area, we estimate CHF 3,500 to CHF 6,000, including dust-resistant APs, gateway, switch and installation. An on-site visit clarifies the exact requirements.',
        },
        {
          question: 'Can machines automatically send status updates?',
          answer: 'Yes. Via the IoT VLAN, connected machines can send status updates, error messages or production data to a central system. This enables predictive maintenance and reduces downtime.',
        },
      ],
    },
  },
  {
    slug: 'salons',
    enSlug: 'salons',
    icon: 'EditPencil01',
    relatedTags: ['UniFi Protect', 'WLAN', 'UniFi Network', 'Hardware'],
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
      typicalProject: {
        title: 'Friseursalon mit 4 Bedienplätzen in St. Gallen',
        situation: 'Ein Friseursalon in St. Gallen mit 4 Bedienplätzen und 3 Mitarbeitenden hatte einen alten Router vom Internetanbieter. Das WLAN war langsam, und Kunden beschwerten sich. Das iPad-basierte Kassensystem fiel regelmässig aus, und es gab keine Überwachungskamera trotz Bargeldverkehr.',
        solution: 'Digital Runners installierte ein kompaktes Setup: Ein UniFi Cloud Gateway Ultra, ein PoE+ Switch Flex Mini und einen U7 Pro Access Point für den gesamten Salon. Das Kunden-WLAN wurde per VLAN vom Kassennetz getrennt. Eine G5 Turret Ultra Kamera überwacht den Eingangsbereich und die Kasse.',
        result: 'Kunden geniessen jetzt schnelles, stabiles WLAN. Das Kassensystem läuft ohne Ausfälle, und die Salonbesitzerin kann den Eingang per App von zu Hause überwachen. Die gesamte Installation dauerte 3 Stunden. Investition: ca. CHF 1’200.',
      },
      recommendedEquipment: [
        { product: 'UniFi Cloud Gateway Ultra', quantity: '1', purpose: 'Kompakte Firewall und Netzwerkmanagement' },
        { product: 'UniFi PoE+ Switch Flex Mini', quantity: '1', purpose: 'Kompakter Switch für AP und Kamera' },
        { product: 'UniFi U7 Pro', quantity: '1', purpose: 'WLAN-Abdeckung für den gesamten Salon' },
        { product: 'UniFi G5 Turret Ultra', quantity: '1', purpose: 'Videoüberwachung Eingang und Kassenbereich' },
      ],
      faqs: [
        {
          question: 'Was kostet ein UniFi-Setup für einen kleinen Salon?',
          answer: 'Ein Basis-Setup mit Gateway, Switch und einem Access Point ist bereits ab wenigen hundert Franken erhältlich. Digital Runners berät Sie zur optimalen Konfiguration für Ihr Budget.',
        },
        {
          question: 'Kann ich die Überwachungskameras vom Handy aus anschauen?',
          answer: 'Ja. Mit der UniFi Protect App können Sie jederzeit und von überall live auf Ihre Kameras zugreifen, Aufnahmen zurückspulen und Benachrichtigungen bei Bewegung erhalten.',
        },
        {
          question: 'Ist das Kunden-WLAN vom Kassensystem getrennt?',
          answer: 'Ja. Das Kunden-WLAN läuft auf einem separaten VLAN und hat keinen Zugriff auf das Kassensystem oder andere interne Geräte. So bleibt Ihr POS-System sicher.',
        },
        {
          question: 'Wie lange dauert die Installation in einem laufenden Salon?',
          answer: 'In der Regel ist die komplette Installation innerhalb von 2–4 Stunden erledigt – idealerweise am Montagvormittag oder an einem anderen ruhigen Zeitpunkt. Der Betrieb wird kaum unterbrochen.',
        },
        {
          question: 'Braucht ein kleiner Salon wirklich eine professionelle Netzwerklösung?',
          answer: 'Gerade kleine Betriebe profitieren von einem zuverlässigen Setup: Ein stabiles Kassensystem, zufriedene Kunden dank gutem WLAN und eine Kamera für die Sicherheit – all das für eine überschaubare Einmalinvestition ab ca. CHF 1’000.',
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
          desc: 'Complete setup in half a day -- ready to go from the start.',
        },
      ],
      typicalProject: {
        title: 'Hair Salon with 4 Styling Stations in St. Gallen',
        situation: 'A hair salon in St. Gallen with 4 styling stations and 3 employees had an old ISP-provided router. The WiFi was slow, and customers complained. The iPad-based POS system regularly went offline, and there was no security camera despite cash transactions.',
        solution: 'Digital Runners installed a compact setup: a UniFi Cloud Gateway Ultra, a PoE+ Switch Flex Mini and a U7 Pro access point for the entire salon. Customer WiFi was separated from the POS network via VLAN. A G5 Turret Ultra camera monitors the entrance and checkout area.',
        result: 'Customers now enjoy fast, stable WiFi. The POS system runs without outages, and the salon owner can monitor the entrance via app from home. The entire installation took 3 hours. Investment: approximately CHF 1,200.',
      },
      recommendedEquipment: [
        { product: 'UniFi Cloud Gateway Ultra', quantity: '1', purpose: 'Compact firewall and network management' },
        { product: 'UniFi PoE+ Switch Flex Mini', quantity: '1', purpose: 'Compact switch for AP and camera' },
        { product: 'UniFi U7 Pro', quantity: '1', purpose: 'WiFi coverage for the entire salon' },
        { product: 'UniFi G5 Turret Ultra', quantity: '1', purpose: 'Video surveillance for entrance and checkout' },
      ],
      faqs: [
        {
          question: 'How much does a UniFi setup cost for a small salon?',
          answer: 'A basic setup with gateway, switch and one access point is available from just a few hundred francs. Digital Runners advises you on the optimal configuration for your budget.',
        },
        {
          question: 'Can I view the surveillance cameras from my phone?',
          answer: 'Yes. With the UniFi Protect app, you can access your cameras live anytime and from anywhere, rewind recordings and receive motion notifications.',
        },
        {
          question: 'Is the customer WiFi separated from the POS system?',
          answer: 'Yes. Customer WiFi runs on a separate VLAN and has no access to the POS system or other internal devices. This keeps your checkout system secure.',
        },
        {
          question: 'How long does installation take in an operating salon?',
          answer: 'Typically, the complete installation is done within 2-4 hours -- ideally on a Monday morning or another quiet time. Business operations are barely interrupted.',
        },
        {
          question: 'Does a small salon really need a professional network solution?',
          answer: 'Small businesses benefit greatly from a reliable setup: a stable POS system, satisfied customers thanks to good WiFi and a camera for security -- all for a manageable one-time investment from approximately CHF 1,000.',
        },
      ],
    },
  },
  {
    slug: 'retail',
    enSlug: 'retail',
    icon: 'ShoppingCart01',
    relatedTags: ['Retail', 'UniFi Protect', 'VLAN', 'People Counting', 'AI'],
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
      typicalProject: {
        title: 'Modekette mit 3 Filialen in der Deutschschweiz',
        situation: 'Eine Schweizer Modekette mit 3 Filialen in Zürich, Basel und Bern hatte an jedem Standort unterschiedliche Netzwerklösungen. Die IT wurde von verschiedenen lokalen Anbietern betreut, was zu inkonsistenten Konfigurationen und häufigen Kassenproblemen führte. Ein einheitliches Kunden-WLAN mit Treueprogramm-Anbindung fehlte.',
        solution: 'Digital Runners standardisierte alle 3 Standorte mit je einem UniFi Cloud Gateway Ultra, einem Switch Pro 24 PoE und 2–3 U7 Pro Max Access Points. Drei VLANs trennen Kassennetz, Kunden-WLAN und Backoffice. Ein zentrales Dashboard ermöglicht die Verwaltung aller Filialen. UniFi AI Theta Kameras mit People Counting überwachen Eingänge und Verkaufsflächen.',
        result: 'Alle 3 Filialen laufen jetzt auf einer einheitlichen Plattform. Kassenausfälle gehören der Vergangenheit an, und das Kunden-WLAN mit Treueprogramm steigert die Kundenbindung. Die IT-Kosten sanken um 40%. Gesamtinvestition: ca. CHF 14’000 für alle 3 Standorte.',
      },
      recommendedEquipment: [
        { product: 'UniFi Cloud Gateway Ultra', quantity: '3', purpose: 'Ein Gateway pro Filiale' },
        { product: 'UniFi Switch Pro 24 PoE', quantity: '3', purpose: 'Strukturierte Verkabelung pro Standort' },
        { product: 'UniFi U7 Pro Max', quantity: '8', purpose: 'High-Density WLAN in Verkaufsflächen' },
        { product: 'UniFi AI Theta', quantity: '3', purpose: 'KI-Kamera mit People Counting pro Filiale' },
        { product: 'UniFi G5 Turret Ultra', quantity: '6', purpose: 'Videoüberwachung Kasse und Lager' },
        { product: 'UniFi Access Reader G2', quantity: '3', purpose: 'Zugangskontrolle Lager pro Filiale' },
      ],
      faqs: [
        {
          question: 'Was passiert, wenn das Netzwerk an der Kasse ausfällt?',
          answer: 'Mit redundanter Netzwerkarchitektur und automatischem Failover bleibt das Kassensystem auch bei einem Teilausfall online. Unser proaktives Monitoring erkennt Probleme, bevor sie den Betrieb beeinträchtigen.',
        },
        {
          question: 'Können mehrere Filialen zentral verwaltet werden?',
          answer: 'Ja. Über das UniFi Dashboard können alle Standorte zentral überwacht und konfiguriert werden – inklusive Updates, Netzwerkänderungen und Sicherheitseinstellungen.',
        },
        {
          question: 'Wie kann Kunden-WLAN für Marketing genutzt werden?',
          answer: 'Mit dem UniFi Hotspot Portal können Kunden sich über eine gebrandete Seite anmelden. Dort können Treueprogramme, Angebote oder Social-Media-Logins integriert werden.',
        },
        {
          question: 'Was kostet die Netzwerk-Standardisierung für eine kleine Filialkette?',
          answer: 'Für 3–5 Filialen liegt die Investition typischerweise zwischen CHF 12’000 und CHF 25’000, je nach Grösse der Verkaufsflächen und Anzahl der Kameras. Die langfristigen Einsparungen durch zentrale Verwaltung und weniger Ausfälle übersteigen die Investition meist innerhalb von 18 Monaten.',
        },
        {
          question: 'Kann UniFi die Kundenfrequenz in meinem Laden messen?',
          answer: 'Ja. Mit UniFi AI Theta Kameras und der integrierten People-Counting-Funktion können Sie die Besucherfrequenz pro Filiale, Tag und Stunde auswerten. Diese Daten helfen bei der Personalplanung und der Bewertung von Marketingmassnahmen.',
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
          desc: 'Fast response to outages -- so sales keep running.',
        },
      ],
      typicalProject: {
        title: 'Fashion Chain with 3 Stores in German-Speaking Switzerland',
        situation: 'A Swiss fashion chain with 3 stores in Zurich, Basel and Bern had different network solutions at each location. IT was managed by various local providers, leading to inconsistent configurations and frequent POS issues. A unified customer WiFi with loyalty programme integration was missing.',
        solution: 'Digital Runners standardised all 3 locations with a UniFi Cloud Gateway Ultra, a Switch Pro 24 PoE and 2-3 U7 Pro Max access points each. Three VLANs separate the POS network, customer WiFi and back office. A central dashboard enables management of all stores. UniFi AI Theta cameras with people counting monitor entrances and sales floors.',
        result: 'All 3 stores now run on a unified platform. POS outages are a thing of the past, and customer WiFi with loyalty programme integration boosts customer retention. IT costs dropped by 40%. Total investment: approximately CHF 14,000 for all 3 locations.',
      },
      recommendedEquipment: [
        { product: 'UniFi Cloud Gateway Ultra', quantity: '3', purpose: 'One gateway per store' },
        { product: 'UniFi Switch Pro 24 PoE', quantity: '3', purpose: 'Structured cabling per location' },
        { product: 'UniFi U7 Pro Max', quantity: '8', purpose: 'High-density WiFi across sales floors' },
        { product: 'UniFi AI Theta', quantity: '3', purpose: 'AI camera with people counting per store' },
        { product: 'UniFi G5 Turret Ultra', quantity: '6', purpose: 'Video surveillance for checkout and storage' },
        { product: 'UniFi Access Reader G2', quantity: '3', purpose: 'Access control for storage per store' },
      ],
      faqs: [
        {
          question: 'What happens if the network at the checkout fails?',
          answer: 'With redundant network architecture and automatic failover, the POS system stays online even during a partial outage. Our proactive monitoring detects problems before they affect operations.',
        },
        {
          question: 'Can multiple store locations be managed centrally?',
          answer: 'Yes. Via the UniFi Dashboard, all locations can be centrally monitored and configured – including updates, network changes and security settings.',
        },
        {
          question: 'How can customer WiFi be used for marketing?',
          answer: 'With the UniFi Hotspot Portal, customers log in via a branded page. Loyalty programmes, special offers or social media logins can be integrated there.',
        },
        {
          question: 'What does network standardisation cost for a small retail chain?',
          answer: 'For 3-5 stores, the investment typically ranges between CHF 12,000 and CHF 25,000, depending on sales floor sizes and number of cameras. The long-term savings from central management and fewer outages usually exceed the investment within 18 months.',
        },
        {
          question: 'Can UniFi measure customer footfall in my store?',
          answer: 'Yes. With UniFi AI Theta cameras and the integrated people counting feature, you can analyse visitor frequency per store, day and hour. This data helps with staff planning and evaluating marketing campaigns.',
        },
      ],
    },
  },
  {
    slug: 'bildungswesen',
    enSlug: 'education',
    icon: 'BookOpen',
    relatedTags: ['WLAN', 'VLAN', 'WiFi', 'UniFi Protect', 'DSGVO'],
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
      typicalProject: {
        title: 'Primarschule mit 12 Klassenzimmern und Turnhalle',
        situation: 'Eine Primarschule im Kanton Aargau mit 12 Klassenzimmern, einer Turnhalle und 280 Schülerinnen und Schülern hatte ein veraltetes WLAN-Netz, das nur in 4 Räumen funktionierte. Die 1:1-iPad-Initiative der Gemeinde erforderte flächendeckendes WLAN. Es gab keine Trennung zwischen Lehrer- und Schülernetz und keine Content-Filterung.',
        solution: 'Digital Runners installierte ein UniFi Enterprise Fortress Gateway für den gesamten Campus, zwei Switch Enterprise 48 PoE für die Stockwerke und 14 U7 Pro Max Access Points – einen pro Klassenzimmer plus je einen in Aula und Turnhalle. Drei VLANs trennen Schüler, Lehrkräfte und Verwaltung. DNS-basierte Content-Filterung schützt das Schülernetz. Vier G5 Bullet Kameras überwachen die Aussenbereiche.',
        result: 'Alle 280 iPads verbinden sich gleichzeitig ohne Probleme. Lehrkräfte haben ein separates, schnelles Netz, und die Verwaltung ist komplett isoliert. Die Content-Filterung blockiert ungeeignete Inhalte automatisch. Investition: ca. CHF 16’500, teilfinanziert durch die Gemeinde.',
      },
      recommendedEquipment: [
        { product: 'UniFi Enterprise Fortress Gateway', quantity: '1', purpose: 'Leistungsstarkes Gateway für den gesamten Schulcampus' },
        { product: 'UniFi Switch Enterprise 48 PoE', quantity: '2', purpose: 'PoE-Versorgung für APs und Kameras auf zwei Stockwerken' },
        { product: 'UniFi U7 Pro Max', quantity: '14', purpose: 'High-Density WLAN pro Klassenzimmer und Gemeinschaftsräume' },
        { product: 'UniFi G5 Bullet', quantity: '4', purpose: 'Outdoor-Überwachung Schulhof und Eingänge' },
        { product: 'UniFi Access Reader G2', quantity: '2', purpose: 'Zugangskontrolle Serverraum und Lehrerzimmer' },
        { product: 'UniFi UNAS Pro', quantity: '1', purpose: 'Lokaler Schul-Dateiserver für DSGVO-konforme Speicherung' },
      ],
      faqs: [
        {
          question: 'Wie wird verhindert, dass Schüler auf ungeeignete Inhalte zugreifen?',
          answer: 'Über DNS-basierte Content-Filterung im Schülernetz werden ungeeignete Websites blockiert. Die Filterregeln können pro Netzwerk (Schüler, Lehrer, Verwaltung) individuell konfiguriert werden.',
        },
        {
          question: 'Kann UniFi mit BYOD (Bring Your Own Device) umgehen?',
          answer: 'Ja. Über sichere Onboarding-Prozesse können Schüler und Lehrkräfte ihre eigenen Geräte verbinden. Separate VLANs stellen sicher, dass BYOD-Geräte keinen Zugriff auf das Verwaltungsnetz haben.',
        },
        {
          question: 'Skaliert UniFi von einer kleinen Schule bis zur Universität?',
          answer: 'Absolut. UniFi kann von einem einzelnen Schulhaus bis zu einem ganzen Campus mit Dutzenden Gebäuden skaliert werden – alles über ein zentrales Dashboard verwaltbar.',
        },
        {
          question: 'Was kostet eine WLAN-Aufrüstung für eine Schule mit 12 Klassenzimmern?',
          answer: 'Für eine typische Primarschule mit 12 Klassenzimmern liegt die Investition zwischen CHF 14’000 und CHF 20’000, inklusive Gateway, Switches, APs und Installation. Viele Gemeinden bieten Förderprogramme für die Digitalisierung von Schulen an.',
        },
        {
          question: 'Wie wird sichergestellt, dass 300 Geräte gleichzeitig funktionieren?',
          answer: 'UniFi U7 Pro Max Access Points sind für High-Density-Umgebungen konzipiert und können jeweils über 300 gleichzeitige Verbindungen verwalten. Pro Klassenzimmer wird ein dedizierter AP installiert, damit die Bandbreite optimal verteilt wird.',
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
          desc: 'Reliable partner for schools -- proactive and fast when needed.',
        },
      ],
      typicalProject: {
        title: 'Primary School with 12 Classrooms and Gymnasium',
        situation: 'A primary school in Canton Aargau with 12 classrooms, a gymnasium and 280 students had an outdated WiFi network that only worked in 4 rooms. The municipality\'s 1:1 iPad initiative required comprehensive WiFi coverage. There was no separation between teacher and student networks and no content filtering.',
        solution: 'Digital Runners installed a UniFi Enterprise Fortress Gateway for the entire campus, two Switch Enterprise 48 PoE units for the floors and 14 U7 Pro Max access points -- one per classroom plus one each in the assembly hall and gymnasium. Three VLANs separate students, teachers and administration. DNS-based content filtering protects the student network. Four G5 Bullet cameras monitor the outdoor areas.',
        result: 'All 280 iPads connect simultaneously without issues. Teachers have a separate, fast network, and administration is completely isolated. Content filtering blocks inappropriate content automatically. Investment: approximately CHF 16,500, partially funded by the municipality.',
      },
      recommendedEquipment: [
        { product: 'UniFi Enterprise Fortress Gateway', quantity: '1', purpose: 'High-performance gateway for the entire school campus' },
        { product: 'UniFi Switch Enterprise 48 PoE', quantity: '2', purpose: 'PoE power for APs and cameras across two floors' },
        { product: 'UniFi U7 Pro Max', quantity: '14', purpose: 'High-density WiFi per classroom and common areas' },
        { product: 'UniFi G5 Bullet', quantity: '4', purpose: 'Outdoor surveillance for schoolyard and entrances' },
        { product: 'UniFi Access Reader G2', quantity: '2', purpose: 'Access control for server room and staff room' },
        { product: 'UniFi UNAS Pro', quantity: '1', purpose: 'Local school file server for GDPR-compliant storage' },
      ],
      faqs: [
        {
          question: 'How do you prevent students from accessing inappropriate content?',
          answer: 'Via DNS-based content filtering on the student network, inappropriate websites are blocked. Filter rules can be configured individually per network (students, teachers, administration).',
        },
        {
          question: 'Can UniFi handle BYOD (Bring Your Own Device)?',
          answer: 'Yes. Through secure onboarding processes, students and teachers can connect their own devices. Separate VLANs ensure BYOD devices have no access to the administrative network.',
        },
        {
          question: 'Does UniFi scale from a small school to a university?',
          answer: 'Absolutely. UniFi can scale from a single school building to an entire campus with dozens of buildings -- all manageable from a single central dashboard.',
        },
        {
          question: 'What does a WiFi upgrade cost for a school with 12 classrooms?',
          answer: 'For a typical primary school with 12 classrooms, the investment ranges between CHF 14,000 and CHF 20,000, including gateway, switches, APs and installation. Many municipalities offer funding programmes for school digitalisation.',
        },
        {
          question: 'How do you ensure 300 devices work simultaneously?',
          answer: 'UniFi U7 Pro Max access points are designed for high-density environments and can each manage over 300 simultaneous connections. A dedicated AP is installed per classroom to ensure optimal bandwidth distribution.',
        },
      ],
    },
  },
];
