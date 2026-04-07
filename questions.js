const ALLE_VRAGEN = [
  {
    thema: "Proportionaliteit",
    vraag: "Een opsporingsambtenaar houdt een verdachte aan. De verdachte verzet zich hevig tegen zijn aanhouding. Hij is dusdanig sterk dat fixeren en een armklem geen effect hebben. Om het verzet te doorbreken, ziet de opsporingsambtenaar geen andere mogelijkheid dan de verdachte een vuistslag in de buik te geven. Hierop staakt de verdachte zijn verzet en kan hij worden geboeid.\n\nIs het geven van de vuistslag in de buik van de verdachte proportioneel?",
    opties: [
      "Ja, er was geen andere mogelijkheid om het verzet van de verdachte te breken.",
      "Nee, het slaan van de verdachte in zijn buik is niet proportioneel.",
      "Nee, een vuistslag is nooit toegestaan als geweldsmiddel.",
      "Ja, maar alleen als er een waarschuwing is gegeven."
    ],
    juist: 0,
    uitleg: "De verdachte verzet zich hevig tegen zijn aanhouding (art. 180 Sr). Het fixeren en toepassen van armklemmen heeft niet geleid tot het onder controle brengen van de verdachte. Derhalve is het geven van een klap in de buikstreek van de verdachte, teneinde het verzet te breken, proportioneel.",
    artikel: "Art. 180 Sr / Art. 7 Politiewet"
  },
  {
    thema: "Subsidiariteit",
    vraag: "Een verdachte wordt aangehouden. De verdachte geeft aan niet te zullen meewerken. De opsporingsambtenaar waarschuwt hem voor de inzet van de wapenstok. Desondanks volgt de verdachte de gegeven aanwijzingen niet op. De opsporingsambtenaar slaat de verdachte daarop met zijn wapenstok op de arm.\n\nIs het slaan met de wapenstok voldoende subsidiair toegepast?",
    opties: [
      "Ja, de verdachte gaf aan niet te willen meewerken aan zijn aanhouding. Daarnaast was de inzet van de wapenstok toegestaan op grond van de Ambtsinstructie.",
      "Nee, de opsporingsambtenaar had eerst moeten proberen de verdachte aan te houden door middel van fysieke vaardigheden.",
      "Ja, want de verdachte was gewaarschuwd voor het gebruik van de wapenstok.",
      "Nee, de wapenstok mag nooit worden ingezet bij een aanhouding."
    ],
    juist: 1,
    uitleg: "De verdachte gaf aan niet te willen meewerken. De opsporingsambtenaar heeft gewaarschuwd voor het gebruik van de wapenstok en deze vervolgens daadwerkelijk ingezet toen de verdachte opnieuw weigerde mee te werken. De opsporingsambtenaar had echter eerst kunnen proberen de verdachte door middel van fysieke vaardigheden onder controle te krijgen. Derhalve is het geweld niet subsidiair toegepast.",
    artikel: "Art. 7 Politiewet / Ambtsinstructie"
  },
  {
    thema: "Doelmatigheid en gevaar",
    vraag: "Een verdachte bedreigt twee opsporingsambtenaren met de dood en rent vervolgens een trap op. De opsporingsambtenaren zetten de achtervolging in en trekken de verdachte van de trap af, waardoor deze valt. De verdachte breekt hierbij zijn arm.\n\nRechtvaardigt het beoogde doel het toegepaste geweld, mede gelet op de risico's en gevaren?",
    opties: [
      "Ja, de verdachte bedreigt de opsporingsambtenaren met de dood. In deze situatie is het gebruik van fysiek geweld het minst ingrijpende middel.",
      "Nee, het is redelijkerwijs aannemelijk dat het letsel tot gevolg kan hebben wanneer je een verdachte van een trap aftrekt.",
      "Ja, vluchtende verdachten mogen altijd fysiek worden gestopt.",
      "Nee, opsporingsambtenaren mogen nooit fysiek ingrijpen bij vluchten."
    ],
    juist: 1,
    uitleg: "De verdachte wordt weliswaar verdacht van bedreiging, maar de aard van dit delict is niet dermate ernstig dat de verdachte van een trap kan worden afgetrokken. Het beoogde doel, namelijk de aanhouding voor bedreiging, rechtvaardigt het toegepaste geweld, mede gelet op de risico's en gevaren (het van de trap vallen en het letsel - gebroken arm), niet.",
    artikel: "Art. 7 Politiewet"
  },
  {
    thema: "Rechtmatige uitoefening van bediening",
    vraag: "Twee opsporingsambtenaren zijn belast met het houden van toezicht op een kermis. Een man zoekt de confrontatie op en stelt zich uitdagend op door dicht voor de ambtenaren te gaan staan en hen te provoceren. Een van de opsporingsambtenaren geeft de man een duw om hem weg te krijgen, waardoor hij ten val komt.\n\nWas de opsporingsambtenaar bij deze geweldsaanwending in de rechtmatige uitoefening van zijn bediening?",
    opties: [
      "Ja, de opsporingsambtenaar was belast met het houden van toezicht op een kermis en in de rechtmatige uitoefening van zijn bediening.",
      "Nee, de man was niet als verdachte aangemerkt en ook niet gevorderd om weg te gaan. Derhalve was er geen sprake van een wettelijk voorschrift waarop de geweldsaanwending kon worden gebaseerd.",
      "Ja, provocerend gedrag rechtvaardigt altijd een geweldsaanwending.",
      "Nee, opsporingsambtenaren mogen nooit geweld gebruiken bij toezichttaken."
    ],
    juist: 1,
    uitleg: "Het feit dat de opsporingsambtenaar belast was met het houden van toezicht, betekent niet dat hij zich daarmee in de rechtmatige uitoefening van zijn bediening bevindt met betrekking tot een geweldsaanwending (art. 7 lid 1 Pw). Om geweld te mogen toepassen, moet een opsporingsambtenaar zich kunnen beroepen op een wettelijk voorschrift, zoals bij aanhouding (art. 53 Sv) of staande houding (art. 52 Sv). De persoon was mogelijk een APV-overtreding aan het begaan en had eerst kunnen worden gevorderd weg te gaan.",
    artikel: "Art. 7 lid 1 Politiewet / Art. 52-53 Sv",
    juridischAdvies: true
  },
  {
    thema: "Waarschuwingsplicht",
    vraag: "Een opsporingsambtenaar houdt een verdachte aan, die aangeeft niet te willen meewerken. De opsporingsambtenaar grijpt de verdachte direct vast en duwt hem met kracht tegen de muur. De verdachte biedt hiertegen verzet.\n\nHad de opsporingsambtenaar de verdachte eerst moeten waarschuwen voor het gebruik van geweld?",
    opties: [
      "Nee, de verdachte gaf aan niet te willen meewerken. Het is begrijpelijk dat de opsporingsambtenaar de verdachte daarom direct met kracht vastpakte en tegen de muur duwde.",
      "Ja, de opsporingsambtenaar had de verdachte eerst moeten waarschuwen voor het gebruik van geweld.",
      "Nee, een waarschuwing is alleen verplicht bij gebruik van de wapenstok.",
      "Ja, maar alleen als de verdachte ook daadwerkelijk vlucht."
    ],
    juist: 1,
    uitleg: "De verdachte werd aangehouden en gaf aan niet te zullen meewerken aan zijn aanhouding. Hij vluchtte niet en viel de opsporingsambtenaar niet aan. De opsporingsambtenaar had de gelegenheid om, alvorens hij de verdachte vastpakte en met kracht tegen de muur duwde, te waarschuwen voor het gebruik van geweld (art. 7 lid 1 Pw).",
    artikel: "Art. 7 lid 1 Politiewet"
  }
];
