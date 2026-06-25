const QUESTIONS = [
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex is dedicated to the standards of 'Personnel Licensing'?",
    "options": [
      "Annex 1",
      "Annex 2",
      "Annex 4"
    ],
    "answer": 0,
    "notes": "Annex 1 covers the standards and recommended practices for Personnel Licensing (licenses, medical requirements, and ratings)."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "What is the subject matter of ICAO Annex 1?",
    "options": [
      "Personnel Licensing",
      "Annex 2 Subject",
      "Annex 7 Subject"
    ],
    "answer": 0,
    "notes": "ICAO Annex 1 governs Personnel Licensing, ensuring global standardisation for safety."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex contains standard rules and practices relating to licenses, medical requirements, and ratings?",
    "options": [
      "Annex 1",
      "Annex 2",
      "Annex 3"
    ],
    "answer": 0,
    "notes": "Annex 1 is specifically dedicated to Personnel Licensing, covering details like licenses, medical requirements, and ratings."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex is dedicated to the standards of 'Rules of the Air'?",
    "options": [
      "Annex 2",
      "Annex 3",
      "Annex 5"
    ],
    "answer": 0,
    "notes": "Annex 2 covers the standards and recommended practices for Rules of the Air (general flight rules, visual flight rules, and instrument flight rules)."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "What is the subject matter of ICAO Annex 2?",
    "options": [
      "Rules of the Air",
      "Annex 3 Subject",
      "Annex 8 Subject"
    ],
    "answer": 0,
    "notes": "ICAO Annex 2 governs Rules of the Air, ensuring global standardisation for safety."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex contains standard rules and practices relating to general flight rules, visual flight rules, and instrument flight rules?",
    "options": [
      "Annex 2",
      "Annex 3",
      "Annex 4"
    ],
    "answer": 0,
    "notes": "Annex 2 is specifically dedicated to Rules of the Air, covering details like general flight rules, visual flight rules, and instrument flight rules."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex is dedicated to the standards of 'Meteorological Service for International Air Navigation'?",
    "options": [
      "Annex 3",
      "Annex 4",
      "Annex 6"
    ],
    "answer": 0,
    "notes": "Annex 3 covers the standards and recommended practices for Meteorological Service for International Air Navigation (weather reporting, forecasts, and briefings)."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "What is the subject matter of ICAO Annex 3?",
    "options": [
      "Meteorological Service for International Air Navigation",
      "Annex 4 Subject",
      "Annex 9 Subject"
    ],
    "answer": 0,
    "notes": "ICAO Annex 3 governs Meteorological Service for International Air Navigation, ensuring global standardisation for safety."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex contains standard rules and practices relating to weather reporting, forecasts, and briefings?",
    "options": [
      "Annex 3",
      "Annex 4",
      "Annex 5"
    ],
    "answer": 0,
    "notes": "Annex 3 is specifically dedicated to Meteorological Service for International Air Navigation, covering details like weather reporting, forecasts, and briefings."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex is dedicated to the standards of 'Aeronautical Charts'?",
    "options": [
      "Annex 4",
      "Annex 5",
      "Annex 7"
    ],
    "answer": 0,
    "notes": "Annex 4 covers the standards and recommended practices for Aeronautical Charts (design and standardization of terminal, enroute, and visual charts)."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "What is the subject matter of ICAO Annex 4?",
    "options": [
      "Aeronautical Charts",
      "Annex 5 Subject",
      "Annex 10 Subject"
    ],
    "answer": 0,
    "notes": "ICAO Annex 4 governs Aeronautical Charts, ensuring global standardisation for safety."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex contains standard rules and practices relating to design and standardization of terminal, enroute, and visual charts?",
    "options": [
      "Annex 4",
      "Annex 5",
      "Annex 6"
    ],
    "answer": 0,
    "notes": "Annex 4 is specifically dedicated to Aeronautical Charts, covering details like design and standardization of terminal, enroute, and visual charts."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex is dedicated to the standards of 'Units of Measurement to be Used in Air and Ground Operations'?",
    "options": [
      "Annex 5",
      "Annex 6",
      "Annex 8"
    ],
    "answer": 0,
    "notes": "Annex 5 covers the standards and recommended practices for Units of Measurement to be Used in Air and Ground Operations (standard units like knots, feet, and millibars)."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "What is the subject matter of ICAO Annex 5?",
    "options": [
      "Units of Measurement to be Used in Air and Ground Operations",
      "Annex 6 Subject",
      "Annex 11 Subject"
    ],
    "answer": 0,
    "notes": "ICAO Annex 5 governs Units of Measurement to be Used in Air and Ground Operations, ensuring global standardisation for safety."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex contains standard rules and practices relating to standard units like knots, feet, and millibars?",
    "options": [
      "Annex 5",
      "Annex 6",
      "Annex 7"
    ],
    "answer": 0,
    "notes": "Annex 5 is specifically dedicated to Units of Measurement to be Used in Air and Ground Operations, covering details like standard units like knots, feet, and millibars."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex is dedicated to the standards of 'Operation of Aircraft'?",
    "options": [
      "Annex 6",
      "Annex 7",
      "Annex 9"
    ],
    "answer": 0,
    "notes": "Annex 6 covers the standards and recommended practices for Operation of Aircraft (commercial transport, general aviation, and helicopter operations)."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "What is the subject matter of ICAO Annex 6?",
    "options": [
      "Operation of Aircraft",
      "Annex 7 Subject",
      "Annex 12 Subject"
    ],
    "answer": 0,
    "notes": "ICAO Annex 6 governs Operation of Aircraft, ensuring global standardisation for safety."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex contains standard rules and practices relating to commercial transport, general aviation, and helicopter operations?",
    "options": [
      "Annex 6",
      "Annex 7",
      "Annex 8"
    ],
    "answer": 0,
    "notes": "Annex 6 is specifically dedicated to Operation of Aircraft, covering details like commercial transport, general aviation, and helicopter operations."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex is dedicated to the standards of 'Aircraft Nationality and Registration Marks'?",
    "options": [
      "Annex 7",
      "Annex 8",
      "Annex 10"
    ],
    "answer": 0,
    "notes": "Annex 7 covers the standards and recommended practices for Aircraft Nationality and Registration Marks (registration formats, flags, and marking placements)."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "What is the subject matter of ICAO Annex 7?",
    "options": [
      "Aircraft Nationality and Registration Marks",
      "Annex 8 Subject",
      "Annex 13 Subject"
    ],
    "answer": 0,
    "notes": "ICAO Annex 7 governs Aircraft Nationality and Registration Marks, ensuring global standardisation for safety."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex contains standard rules and practices relating to registration formats, flags, and marking placements?",
    "options": [
      "Annex 7",
      "Annex 8",
      "Annex 9"
    ],
    "answer": 0,
    "notes": "Annex 7 is specifically dedicated to Aircraft Nationality and Registration Marks, covering details like registration formats, flags, and marking placements."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex is dedicated to the standards of 'Airworthiness of Aircraft'?",
    "options": [
      "Annex 8",
      "Annex 9",
      "Annex 11"
    ],
    "answer": 0,
    "notes": "Annex 8 covers the standards and recommended practices for Airworthiness of Aircraft (certification standards for structural and power-plant integrity)."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "What is the subject matter of ICAO Annex 8?",
    "options": [
      "Airworthiness of Aircraft",
      "Annex 9 Subject",
      "Annex 14 Subject"
    ],
    "answer": 0,
    "notes": "ICAO Annex 8 governs Airworthiness of Aircraft, ensuring global standardisation for safety."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex contains standard rules and practices relating to certification standards for structural and power-plant integrity?",
    "options": [
      "Annex 8",
      "Annex 9",
      "Annex 10"
    ],
    "answer": 0,
    "notes": "Annex 8 is specifically dedicated to Airworthiness of Aircraft, covering details like certification standards for structural and power-plant integrity."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex is dedicated to the standards of 'Facilitation'?",
    "options": [
      "Annex 9",
      "Annex 10",
      "Annex 12"
    ],
    "answer": 0,
    "notes": "Annex 9 covers the standards and recommended practices for Facilitation (border crossings, immigration, customs, and passenger clearance)."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "What is the subject matter of ICAO Annex 9?",
    "options": [
      "Facilitation",
      "Annex 10 Subject",
      "Annex 15 Subject"
    ],
    "answer": 0,
    "notes": "ICAO Annex 9 governs Facilitation, ensuring global standardisation for safety."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex contains standard rules and practices relating to border crossings, immigration, customs, and passenger clearance?",
    "options": [
      "Annex 9",
      "Annex 10",
      "Annex 11"
    ],
    "answer": 0,
    "notes": "Annex 9 is specifically dedicated to Facilitation, covering details like border crossings, immigration, customs, and passenger clearance."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex is dedicated to the standards of 'Aeronautical Telecommunications'?",
    "options": [
      "Annex 10",
      "Annex 11",
      "Annex 13"
    ],
    "answer": 0,
    "notes": "Annex 10 covers the standards and recommended practices for Aeronautical Telecommunications (radio frequencies, navigation aids, and digital communication systems)."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "What is the subject matter of ICAO Annex 10?",
    "options": [
      "Aeronautical Telecommunications",
      "Annex 11 Subject",
      "Annex 16 Subject"
    ],
    "answer": 0,
    "notes": "ICAO Annex 10 governs Aeronautical Telecommunications, ensuring global standardisation for safety."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex contains standard rules and practices relating to radio frequencies, navigation aids, and digital communication systems?",
    "options": [
      "Annex 10",
      "Annex 11",
      "Annex 12"
    ],
    "answer": 0,
    "notes": "Annex 10 is specifically dedicated to Aeronautical Telecommunications, covering details like radio frequencies, navigation aids, and digital communication systems."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex is dedicated to the standards of 'Air Traffic Services'?",
    "options": [
      "Annex 11",
      "Annex 12",
      "Annex 14"
    ],
    "answer": 0,
    "notes": "Annex 11 covers the standards and recommended practices for Air Traffic Services (air traffic control, flight information, and alerting services)."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "What is the subject matter of ICAO Annex 11?",
    "options": [
      "Air Traffic Services",
      "Annex 12 Subject",
      "Annex 17 Subject"
    ],
    "answer": 0,
    "notes": "ICAO Annex 11 governs Air Traffic Services, ensuring global standardisation for safety."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex contains standard rules and practices relating to air traffic control, flight information, and alerting services?",
    "options": [
      "Annex 11",
      "Annex 12",
      "Annex 13"
    ],
    "answer": 0,
    "notes": "Annex 11 is specifically dedicated to Air Traffic Services, covering details like air traffic control, flight information, and alerting services."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex is dedicated to the standards of 'Search and Rescue'?",
    "options": [
      "Annex 12",
      "Annex 13",
      "Annex 15"
    ],
    "answer": 0,
    "notes": "Annex 12 covers the standards and recommended practices for Search and Rescue (coordination, equipment, and international agreements for rescue operations)."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "What is the subject matter of ICAO Annex 12?",
    "options": [
      "Search and Rescue",
      "Annex 13 Subject",
      "Annex 18 Subject"
    ],
    "answer": 0,
    "notes": "ICAO Annex 12 governs Search and Rescue, ensuring global standardisation for safety."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex contains standard rules and practices relating to coordination, equipment, and international agreements for rescue operations?",
    "options": [
      "Annex 12",
      "Annex 13",
      "Annex 14"
    ],
    "answer": 0,
    "notes": "Annex 12 is specifically dedicated to Search and Rescue, covering details like coordination, equipment, and international agreements for rescue operations."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex is dedicated to the standards of 'Aircraft Accident and Incident Investigation'?",
    "options": [
      "Annex 13",
      "Annex 14",
      "Annex 16"
    ],
    "answer": 0,
    "notes": "Annex 13 covers the standards and recommended practices for Aircraft Accident and Incident Investigation (investigative authority, reporting formats, and safety recommendations)."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "What is the subject matter of ICAO Annex 13?",
    "options": [
      "Aircraft Accident and Incident Investigation",
      "Annex 14 Subject",
      "Annex 19 Subject"
    ],
    "answer": 0,
    "notes": "ICAO Annex 13 governs Aircraft Accident and Incident Investigation, ensuring global standardisation for safety."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex contains standard rules and practices relating to investigative authority, reporting formats, and safety recommendations?",
    "options": [
      "Annex 13",
      "Annex 14",
      "Annex 15"
    ],
    "answer": 0,
    "notes": "Annex 13 is specifically dedicated to Aircraft Accident and Incident Investigation, covering details like investigative authority, reporting formats, and safety recommendations."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex is dedicated to the standards of 'Aerodromes'?",
    "options": [
      "Annex 14",
      "Annex 15",
      "Annex 17"
    ],
    "answer": 0,
    "notes": "Annex 14 covers the standards and recommended practices for Aerodromes (runway parameters, taxiways, lighting, and markings)."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "What is the subject matter of ICAO Annex 14?",
    "options": [
      "Aerodromes",
      "Annex 15 Subject",
      "Annex 1 Subject"
    ],
    "answer": 0,
    "notes": "ICAO Annex 14 governs Aerodromes, ensuring global standardisation for safety."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex contains standard rules and practices relating to runway parameters, taxiways, lighting, and markings?",
    "options": [
      "Annex 14",
      "Annex 15",
      "Annex 16"
    ],
    "answer": 0,
    "notes": "Annex 14 is specifically dedicated to Aerodromes, covering details like runway parameters, taxiways, lighting, and markings."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex is dedicated to the standards of 'Aeronautical Information Services'?",
    "options": [
      "Annex 15",
      "Annex 16",
      "Annex 18"
    ],
    "answer": 0,
    "notes": "Annex 15 covers the standards and recommended practices for Aeronautical Information Services (AIPs, NOTAMs, circulars, and aeronautical data delivery)."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "What is the subject matter of ICAO Annex 15?",
    "options": [
      "Aeronautical Information Services",
      "Annex 16 Subject",
      "Annex 2 Subject"
    ],
    "answer": 0,
    "notes": "ICAO Annex 15 governs Aeronautical Information Services, ensuring global standardisation for safety."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex contains standard rules and practices relating to AIPs, NOTAMs, circulars, and aeronautical data delivery?",
    "options": [
      "Annex 15",
      "Annex 16",
      "Annex 17"
    ],
    "answer": 0,
    "notes": "Annex 15 is specifically dedicated to Aeronautical Information Services, covering details like AIPs, NOTAMs, circulars, and aeronautical data delivery."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex is dedicated to the standards of 'Environmental Protection'?",
    "options": [
      "Annex 16",
      "Annex 17",
      "Annex 19"
    ],
    "answer": 0,
    "notes": "Annex 16 covers the standards and recommended practices for Environmental Protection (aircraft noise and engine emissions limits)."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "What is the subject matter of ICAO Annex 16?",
    "options": [
      "Environmental Protection",
      "Annex 17 Subject",
      "Annex 3 Subject"
    ],
    "answer": 0,
    "notes": "ICAO Annex 16 governs Environmental Protection, ensuring global standardisation for safety."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex contains standard rules and practices relating to aircraft noise and engine emissions limits?",
    "options": [
      "Annex 16",
      "Annex 17",
      "Annex 18"
    ],
    "answer": 0,
    "notes": "Annex 16 is specifically dedicated to Environmental Protection, covering details like aircraft noise and engine emissions limits."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex is dedicated to the standards of 'Security: Safeguarding International Civil Aviation Against Acts of Unlawful Interference'?",
    "options": [
      "Annex 17",
      "Annex 18",
      "Annex 1"
    ],
    "answer": 0,
    "notes": "Annex 17 covers the standards and recommended practices for Security: Safeguarding International Civil Aviation Against Acts of Unlawful Interference (anti-hijacking measures, security checkpoints, and cabin security)."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "What is the subject matter of ICAO Annex 17?",
    "options": [
      "Security: Safeguarding International Civil Aviation Against Acts of Unlawful Interference",
      "Annex 18 Subject",
      "Annex 4 Subject"
    ],
    "answer": 0,
    "notes": "ICAO Annex 17 governs Security: Safeguarding International Civil Aviation Against Acts of Unlawful Interference, ensuring global standardisation for safety."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex contains standard rules and practices relating to anti-hijacking measures, security checkpoints, and cabin security?",
    "options": [
      "Annex 17",
      "Annex 18",
      "Annex 19"
    ],
    "answer": 0,
    "notes": "Annex 17 is specifically dedicated to Security: Safeguarding International Civil Aviation Against Acts of Unlawful Interference, covering details like anti-hijacking measures, security checkpoints, and cabin security."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex is dedicated to the standards of 'The Safe Transport of Dangerous Goods by Air'?",
    "options": [
      "Annex 18",
      "Annex 19",
      "Annex 2"
    ],
    "answer": 0,
    "notes": "Annex 18 covers the standards and recommended practices for The Safe Transport of Dangerous Goods by Air (hazardous material limits, packaging, and shipping papers)."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "What is the subject matter of ICAO Annex 18?",
    "options": [
      "The Safe Transport of Dangerous Goods by Air",
      "Annex 19 Subject",
      "Annex 5 Subject"
    ],
    "answer": 0,
    "notes": "ICAO Annex 18 governs The Safe Transport of Dangerous Goods by Air, ensuring global standardisation for safety."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex contains standard rules and practices relating to hazardous material limits, packaging, and shipping papers?",
    "options": [
      "Annex 18",
      "Annex 19",
      "Annex 1"
    ],
    "answer": 0,
    "notes": "Annex 18 is specifically dedicated to The Safe Transport of Dangerous Goods by Air, covering details like hazardous material limits, packaging, and shipping papers."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex is dedicated to the standards of 'Safety Management'?",
    "options": [
      "Annex 19",
      "Annex 1",
      "Annex 3"
    ],
    "answer": 0,
    "notes": "Annex 19 covers the standards and recommended practices for Safety Management (safety management systems (SMS) and data sharing frameworks)."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "What is the subject matter of ICAO Annex 19?",
    "options": [
      "Safety Management",
      "Annex 1 Subject",
      "Annex 6 Subject"
    ],
    "answer": 0,
    "notes": "ICAO Annex 19 governs Safety Management, ensuring global standardisation for safety."
  },
  {
    "section": "icao",
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex contains standard rules and practices relating to safety management systems (SMS) and data sharing frameworks?",
    "options": [
      "Annex 19",
      "Annex 1",
      "Annex 2"
    ],
    "answer": 0,
    "notes": "Annex 19 is specifically dedicated to Safety Management, covering details like safety management systems (SMS) and data sharing frameworks."
  },
  {
    "section": "icao",
    "topic": "ICAO General",
    "question": "Where is the headquarters of ICAO located?",
    "options": [
      "Montreal, Canada",
      "Geneva, Switzerland",
      "Paris, France"
    ],
    "answer": 0,
    "notes": "ICAO's headquarters is in Montreal, Quebec, Canada."
  },
  {
    "section": "icao",
    "topic": "ICAO General",
    "question": "In what year did the Chicago Convention enter into force?",
    "options": [
      "1944",
      "1947",
      "1951"
    ],
    "answer": 1,
    "notes": "Although signed in December 1944, the Chicago Convention officially entered into force on April 4, 1947 after ratification by 26 states."
  },
  {
    "section": "icao",
    "topic": "ICAO General",
    "question": "What does the ICAO acronym 'SARPs' stand for?",
    "options": [
      "Standard Airway Route Patterns",
      "Standards and Recommended Practices",
      "Safety and Rescue Protocols"
    ],
    "answer": 1,
    "notes": "SARPs stands for Standards and Recommended Practices, which are binding or recommended rules for all contracting states."
  },
  {
    "section": "icao",
    "topic": "ICAO General",
    "question": "Under ICAO, a 'Standard' is defined as:",
    "options": [
      "A specification whose uniform application is necessary for safety or regularity",
      "A rule that is highly desirable but not mandatory",
      "A regulation only applicable to international airlines"
    ],
    "answer": 0,
    "notes": "Under Article 37, a Standard is necessary for safety or regularity, and states must notify ICAO if they deviate from it (Article 38)."
  },
  {
    "section": "icao",
    "topic": "ICAO General",
    "question": "Under ICAO, a 'Recommended Practice' is defined as:",
    "options": [
      "A regulation which is mandatory for all member states",
      "A specification whose uniform application is desirable in the interest of safety, regularity, or efficiency",
      "A guideline set by aircraft manufacturers"
    ],
    "answer": 1,
    "notes": "A Recommended Practice is defined as desirable for safety, regularity, or efficiency, though member states are not strictly obligated to file differences."
  },
  {
    "section": "icao",
    "topic": "ICAO General",
    "question": "What must a contracting state do if it finds it impracticable to comply with an ICAO Standard?",
    "options": [
      "Immediately ground all operations",
      "File a difference with ICAO under Article 38",
      "Pay a penalty fee to the United Nations"
    ],
    "answer": 1,
    "notes": "Under Article 38 of the Chicago Convention, if a state cannot comply with an international standard, it must immediately notify ICAO of the differences."
  },
  {
    "section": "icao",
    "topic": "ICAO General",
    "question": "Which of the following is NOT one of the official languages of ICAO?",
    "options": [
      "English, French, and Spanish",
      "Russian, Chinese, and Arabic",
      "German, Japanese, and Hindi"
    ],
    "answer": 2,
    "notes": "ICAO has six official languages: English, French, Spanish, Russian, Chinese, and Arabic."
  },
  {
    "section": "icao",
    "topic": "ICAO General",
    "question": "Who is responsible for the registry of aircraft nationality marks with ICAO?",
    "options": [
      "The state of registry",
      "The manufacturer",
      "ICAO Secretariat"
    ],
    "answer": 0,
    "notes": "Each contracting state is responsible for registering its aircraft and assigning nationality and registration marks according to Annex 7."
  },
  {
    "section": "icao",
    "topic": "ICAO General",
    "question": "The definition of 'State of Design' under ICAO is:",
    "options": [
      "The State having jurisdiction over the organization responsible for type design",
      "The State where the aircraft is built and assembled",
      "The State where the airline head office is located"
    ],
    "answer": 0,
    "notes": "The State of Design is the State having jurisdiction over the organization responsible for the type design of the aircraft."
  },
  {
    "section": "icao",
    "topic": "ICAO General",
    "question": "The 'State of the Operator' is defined as the State in which:",
    "options": [
      "The aircraft is registered",
      "The operator's principal place of business or permanent residence is located",
      "The aircraft commander holds their license"
    ],
    "answer": 1,
    "notes": "The State of the Operator is the State in which the operator's principal place of business is located, or if none, the operator's permanent residence."
  },
  {
    "section": "icao",
    "topic": "ICAO General",
    "question": "What does ICAO stand for?",
    "options": [
      "International Civil Aviation Organization",
      "Interstate Civil Aviation Order",
      "International Cargo and Aviation Office"
    ],
    "answer": 0,
    "notes": "ICAO is a specialized agency of the United Nations, established in 1944 to manage the administration and governance of the Chicago Convention."
  },
  {
    "section": "icao",
    "topic": "ICAO General",
    "question": "Which ICAO body is elected every 3 years by the Assembly and serves as the governing body?",
    "options": [
      "The Council",
      "The Secretariat",
      "The Air Navigation Commission"
    ],
    "answer": 0,
    "notes": "The Council of ICAO is a permanent body of 36 contracting states elected by the Assembly for a three-year term."
  },
  {
    "section": "icao",
    "topic": "ICAO General",
    "question": "The Air Navigation Commission (ANC) of ICAO consists of how many commissioners?",
    "options": [
      "19 commissioners",
      "15 commissioners",
      "36 commissioners"
    ],
    "answer": 0,
    "notes": "The Air Navigation Commission consists of 19 commissioners appointed by the ICAO Council."
  },
  {
    "section": "icao",
    "topic": "ICAO General",
    "question": "Which article of the Chicago Convention states that every State has complete and exclusive sovereignty over the airspace above its territory?",
    "options": [
      "Article 1",
      "Article 5",
      "Article 12"
    ],
    "answer": 0,
    "notes": "Article 1 of the Chicago Convention recognizes that every State has complete and exclusive sovereignty over the airspace above its territory."
  },
  {
    "section": "icao",
    "topic": "ICAO General",
    "question": "According to Article 12 of the Chicago Convention, who is responsible for ensuring that every aircraft flying over its territory complies with the rules of flight?",
    "options": [
      "The pilot's state of licensing",
      "The state having sovereignty over the territory",
      "The aircraft manufacturer"
    ],
    "answer": 1,
    "notes": "Article 12 establishes that each contracting State undertakes to keep its own regulations uniform, and ensure compliance within its territory."
  },
  {
    "section": "icao",
    "topic": "ICAO General",
    "question": "Under ICAO Annex 7, the nationality mark of an aircraft must be selected from:",
    "options": [
      "The international radio call signs allocated by the ITU",
      "The country's postal code prefix",
      "A random selection made by ICAO"
    ],
    "answer": 0,
    "notes": "Annex 7 states that the nationality mark is selected from the series of nationality symbols included in the radio call signs allocated to the State by the ITU."
  },
  {
    "section": "icao",
    "topic": "ICAO General",
    "question": "Which document contains the complete and official listings of current NOTAMs and aeronautical regulations for a specific country?",
    "options": [
      "Aeronautical Information Publication (AIP)",
      "Aeronautical Information Circular (AIC)",
      "ICAO Doc 4444"
    ],
    "answer": 0,
    "notes": "The AIP is the primary publication containing aeronautical information of a lasting character essential to air navigation."
  },
  {
    "section": "icao",
    "topic": "ICAO General",
    "question": "An Aeronautical Information Circular (AIC) is issued for information that:",
    "options": [
      "Does not qualify for inclusion in the AIP or NOTAM, but relates to flight safety, navigation, technical or administrative matters",
      "Requires immediate warning to pilots about active hazards",
      "Is valid for less than 24 hours"
    ],
    "answer": 0,
    "notes": "AICs are used for administrative or long-term educational information that is not critical enough for a NOTAM but useful for flight crews."
  },
  {
    "section": "icao",
    "topic": "ICAO General",
    "question": "Which convention governs the liability of air carriers for damage caused to third parties on the surface?",
    "options": [
      "Rome Convention",
      "Geneva Convention",
      "Warsaw Convention"
    ],
    "answer": 0,
    "notes": "The Rome Convention (1952) governs liability for damage caused by foreign aircraft to third parties on the surface."
  },
  {
    "section": "icao",
    "topic": "ICAO General",
    "question": "Which convention relates to the international recognition of rights in aircraft (like mortgages and titles)?",
    "options": [
      "Geneva Convention of 1948",
      "Hague Convention",
      "Montreal Convention"
    ],
    "answer": 0,
    "notes": "The Geneva Convention of 1948 provides for the international recognition of mortgages, leases, and other rights in aircraft."
  },
  {
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex contains standard rules regarding 'Rules of the Air'?",
    "options": [
      "Annex 2",
      "Annex 11",
      "Annex 14"
    ],
    "answer": 0,
    "notes": "Annex 2 establishes the Rules of the Air, which apply to aircraft operating over the high seas and generally over national territories.",
    "section": "icao"
  },
  {
    "topic": "ICAO Annexes",
    "question": "ICAO Annex 11 is primary concerned with which of the following?",
    "options": [
      "Search and Rescue",
      "Air Traffic Services",
      "Aircraft Operations"
    ],
    "answer": 1,
    "notes": "Annex 11 governs the establishment and operation of Air Traffic Services, including ATC, flight info, and alerting services.",
    "section": "icao"
  },
  {
    "topic": "ICAO Annexes",
    "question": "Aerodromes, including design and operations, are governed by which ICAO Annex?",
    "options": [
      "Annex 10",
      "Annex 14",
      "Annex 16"
    ],
    "answer": 1,
    "notes": "Annex 14 contains SARPs (Standards and Recommended Practices) for aerodromes design, lighting, markings, and operations.",
    "section": "icao"
  },
  {
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex covers Personnel Licensing (including pilots, flight crews, and controllers)?",
    "options": [
      "Annex 1",
      "Annex 6",
      "Annex 8"
    ],
    "answer": 0,
    "notes": "Annex 1 defines international licensing standards for flight crew members, air traffic controllers, and maintenance personnel.",
    "section": "icao"
  },
  {
    "topic": "ICAO Annexes",
    "question": "Under which ICAO Annex are 'Meteorological Services for International Air Navigation' covered?",
    "options": [
      "Annex 3",
      "Annex 4",
      "Annex 5"
    ],
    "answer": 0,
    "notes": "Annex 3 regulates meteorological services, ensuring weather observations and forecasts are delivered standardly worldwide.",
    "section": "icao"
  },
  {
    "topic": "ICAO Annexes",
    "question": "ICAO Annex 12 details guidelines for which of the following operations?",
    "options": [
      "Security and Safeguarding",
      "Search and Rescue",
      "Accident Investigation"
    ],
    "answer": 1,
    "notes": "Annex 12 deals with Search and Rescue (SAR) services, facilitating cooperation between neighboring states.",
    "section": "icao"
  },
  {
    "topic": "ICAO Annexes",
    "question": "Security and safeguarding civil aviation against acts of unlawful interference is covered by:",
    "options": [
      "Annex 17",
      "Annex 18",
      "Annex 9"
    ],
    "answer": 0,
    "notes": "Annex 17 sets the international standards for aviation security and safeguarding operations against unlawful interference.",
    "section": "icao"
  },
  {
    "topic": "ICAO Annexes",
    "question": "Which ICAO Annex deals with the 'Safe Transport of Dangerous Goods by Air'?",
    "options": [
      "Annex 18",
      "Annex 16",
      "Annex 15"
    ],
    "answer": 0,
    "notes": "Annex 18 governs the packaging, labeling, and handling of dangerous goods carried by air.",
    "section": "icao"
  },
  {
    "topic": "ICAO Annexes",
    "question": "Aeronautical Information Services (AIS) are governed by which ICAO Annex?",
    "options": [
      "Annex 4",
      "Annex 15",
      "Annex 10"
    ],
    "answer": 1,
    "notes": "Annex 15 governs Aeronautical Information Services (AIS), ensuring the flow of info necessary for safety and navigation (like NOTAMs, AIPs).",
    "section": "icao"
  },
  {
    "topic": "ICAO Annexes",
    "question": "Aircraft Accident and Incident Investigation is governed by which ICAO Annex?",
    "options": [
      "Annex 13",
      "Annex 11",
      "Annex 9"
    ],
    "answer": 0,
    "notes": "Annex 13 details standard procedures for investigating aircraft accidents and incidents to prevent future occurrences.",
    "section": "icao"
  },
  {
    "topic": "ICAO Conventions",
    "question": "Which international convention led to the creation of the International Civil Aviation Organization (ICAO)?",
    "options": [
      "The Warsaw Convention",
      "The Chicago Convention",
      "The Rome Convention"
    ],
    "answer": 1,
    "notes": "The Chicago Convention (Convention on International Civil Aviation), signed on December 7, 1944, established ICAO.",
    "section": "icao"
  },
  {
    "topic": "ICAO Conventions",
    "question": "What is the primary objective of the Warsaw Convention of 1929?",
    "options": [
      "Uniform rules for international air carriage liability",
      "Rules of air traffic control",
      "Establishment of airways"
    ],
    "answer": 0,
    "notes": "The Warsaw Convention of 1929 regulates liability for international carriage of persons, luggage, or goods by aircraft.",
    "section": "icao"
  },
  {
    "topic": "ICAO Conventions",
    "question": "The Tokyo Convention of 1963 is concerned with which of the following?",
    "options": [
      "Aircraft registration",
      "Offences and certain other acts committed on board aircraft",
      "Customs clearance"
    ],
    "answer": 1,
    "notes": "The Tokyo Convention (1963) governs offences and acts committed on board civil aircraft, giving authority to the aircraft commander to maintain order.",
    "section": "icao"
  },
  {
    "topic": "ICAO Conventions",
    "question": "The Montreal Convention of 1999 modernized and replaced the liability limits of which convention?",
    "options": [
      "Chicago Convention",
      "Warsaw Convention",
      "Geneva Convention"
    ],
    "answer": 1,
    "notes": "The Montreal Convention of 1999 established a new unified system of airline liability, replacing the outdated Warsaw Convention rules.",
    "section": "icao"
  },
  {
    "topic": "ICAO Conventions",
    "question": "Which convention relates to the suppression of unlawful acts of seizure of aircraft (hijacking)?",
    "options": [
      "The Hague Convention of 1970",
      "The Rome Convention",
      "The Chicago Convention"
    ],
    "answer": 0,
    "notes": "The Hague Convention (1970) establishes rules for prosecution or extradition of individuals who hijack aircraft.",
    "section": "icao"
  },
  {
    "section": "rules",
    "topic": "VMC Minima",
    "question": "In Class C, D, E, F, G airspace, for flights operated at At and above 10,000 feet (3050m) AMSL, what is the minimum flight visibility required for VFR operations?",
    "options": [
      "8 km",
      "5 km",
      "1.5 km"
    ],
    "answer": 0,
    "notes": "For flights in Class C, D, E, F, G at At and above 10,000 feet (3050m) AMSL, flight visibility must be at least 8 km under Visual Meteorological Conditions."
  },
  {
    "section": "rules",
    "topic": "VMC Minima",
    "question": "In Class C, D, E, F, G airspace, for flights operated at At and above 10,000 feet (3050m) AMSL, what is the minimum horizontal distance required from cloud?",
    "options": [
      "1,500 m",
      "2,000 m",
      "1,000 m"
    ],
    "answer": 0,
    "notes": "Horizontal distance from cloud must be at least 1,500 m in this configuration."
  },
  {
    "section": "rules",
    "topic": "VMC Minima",
    "question": "In Class C, D, E, F, G airspace, for flights operated at At and above 10,000 feet (3050m) AMSL, what is the minimum vertical distance required from cloud?",
    "options": [
      "1,000 ft (300m)",
      "500 ft (150m)",
      "2,000 ft (600m)"
    ],
    "answer": 0,
    "notes": "Vertical clearance from cloud must be at least 1,000 ft (300m)."
  },
  {
    "section": "rules",
    "topic": "VMC Minima",
    "question": "In Class C, D, E, F, G airspace, for flights operated at Below 10,000 feet (3050m) AMSL and above 3,000 feet (900m) AMSL, what is the minimum flight visibility required for VFR operations?",
    "options": [
      "5 km",
      "8 km",
      "1.5 km"
    ],
    "answer": 0,
    "notes": "For flights in Class C, D, E, F, G at Below 10,000 feet (3050m) AMSL and above 3,000 feet (900m) AMSL, flight visibility must be at least 5 km under Visual Meteorological Conditions."
  },
  {
    "section": "rules",
    "topic": "VMC Minima",
    "question": "In Class C, D, E, F, G airspace, for flights operated at Below 10,000 feet (3050m) AMSL and above 3,000 feet (900m) AMSL, what is the minimum horizontal distance required from cloud?",
    "options": [
      "1,500 m",
      "2,000 m",
      "1,000 m"
    ],
    "answer": 0,
    "notes": "Horizontal distance from cloud must be at least 1,500 m in this configuration."
  },
  {
    "section": "rules",
    "topic": "VMC Minima",
    "question": "In Class C, D, E, F, G airspace, for flights operated at Below 10,000 feet (3050m) AMSL and above 3,000 feet (900m) AMSL, what is the minimum vertical distance required from cloud?",
    "options": [
      "1,000 ft (300m)",
      "500 ft (150m)",
      "2,000 ft (600m)"
    ],
    "answer": 0,
    "notes": "Vertical clearance from cloud must be at least 1,000 ft (300m)."
  },
  {
    "section": "rules",
    "topic": "VMC Minima",
    "question": "In Class C, D, E, F, G airspace, for flights operated at At or below 3,000 feet (900m) AMSL (or 1,000 ft above terrain, whichever is higher), what is the minimum flight visibility required for VFR operations?",
    "options": [
      "5 km",
      "8 km",
      "1.5 km"
    ],
    "answer": 0,
    "notes": "For flights in Class C, D, E, F, G at At or below 3,000 feet (900m) AMSL (or 1,000 ft above terrain, whichever is higher), flight visibility must be at least 5 km under Visual Meteorological Conditions."
  },
  {
    "section": "rules",
    "topic": "VMC Minima",
    "question": "In Class C, D, E, F, G airspace, for flights operated at At or below 3,000 feet (900m) AMSL (or 1,000 ft above terrain, whichever is higher), what is the minimum horizontal distance required from cloud?",
    "options": [
      "1,500 m",
      "2,000 m",
      "1,000 m"
    ],
    "answer": 0,
    "notes": "Horizontal distance from cloud must be at least 1,500 m in this configuration."
  },
  {
    "section": "rules",
    "topic": "VMC Minima",
    "question": "In Class C, D, E, F, G airspace, for flights operated at At or below 3,000 feet (900m) AMSL (or 1,000 ft above terrain, whichever is higher), what is the minimum vertical distance required from cloud?",
    "options": [
      "1,000 ft (300m)",
      "500 ft (150m)",
      "2,000 ft (600m)"
    ],
    "answer": 0,
    "notes": "Vertical clearance from cloud must be at least 1,000 ft (300m)."
  },
  {
    "section": "rules",
    "topic": "VMC Minima",
    "question": "In Class G airspace, at or below 3,000 feet (900m) AMSL, what is the VMC cloud clearance requirement?",
    "options": [
      "Clear of cloud and in sight of the surface",
      "1,500m horizontally, 1,000ft vertically",
      "Clear of cloud only"
    ],
    "answer": 0,
    "notes": "In Class G airspace at or below 3,000 ft AMSL (or 1,000 ft above terrain), the VFR requirement is to remain clear of cloud and in sight of the surface, with a visibility of 5 km (or 1.5 km for helicopters / slow fixed-wing)."
  },
  {
    "section": "rules",
    "topic": "Cruising Levels",
    "question": "For a VFR flight on a magnetic track of 045 degrees, which of the following is an appropriate cruising flight level?",
    "options": [
      "FL55 (5,500 ft)",
      "FL65 (6,500 ft)",
      "FL40 (4,000 ft)"
    ],
    "answer": 0,
    "notes": "VFR flights on an easterly magnetic track (000-179) fly at odd thousands plus 500 feet (FL35, FL55, FL75 etc.)."
  },
  {
    "section": "rules",
    "topic": "Cruising Levels",
    "question": "For a IFR flight on a magnetic track of 090 degrees, which of the following is an appropriate cruising flight level?",
    "options": [
      "FL50 (5,000 ft)",
      "FL60 (6,000 ft)",
      "FL55 (5,500 ft)"
    ],
    "answer": 0,
    "notes": "IFR flights on an easterly magnetic track (000-179) fly at odd thousands (FL30, FL50, FL70 etc.)."
  },
  {
    "section": "rules",
    "topic": "Cruising Levels",
    "question": "For a VFR flight on a magnetic track of 220 degrees, which of the following is an appropriate cruising flight level?",
    "options": [
      "FL65 (6,500 ft)",
      "FL55 (5,500 ft)",
      "FL60 (6,000 ft)"
    ],
    "answer": 0,
    "notes": "VFR flights on a westerly magnetic track (180-359) fly at even thousands plus 500 feet (FL45, FL65, FL85 etc.)."
  },
  {
    "section": "rules",
    "topic": "Cruising Levels",
    "question": "For a IFR flight on a magnetic track of 270 degrees, which of the following is an appropriate cruising flight level?",
    "options": [
      "FL60 (6,000 ft)",
      "FL50 (5,000 ft)",
      "FL65 (6,500 ft)"
    ],
    "answer": 0,
    "notes": "IFR flights on a westerly magnetic track (180-359) fly at even thousands (FL40, FL60, FL80 etc.)."
  },
  {
    "section": "rules",
    "topic": "SSR Transponder Codes",
    "question": "Which SSR transponder code is used to indicate a 'Hijack (Unlawful interference)'?",
    "options": [
      "7500",
      "7000",
      "7777"
    ],
    "answer": 0,
    "notes": "7500 is the international emergency transponder code indicating hijacking or unlawful interference."
  },
  {
    "section": "rules",
    "topic": "SSR Transponder Codes",
    "question": "If a pilot sets the transponder to code 7500, what situation are they reporting to ATC?",
    "options": [
      "Hijack (Unlawful interference)",
      "VFR flight in uncontrolled airspace",
      "Flight level deviation"
    ],
    "answer": 0,
    "notes": "7500 is the international emergency transponder code indicating hijacking or unlawful interference."
  },
  {
    "section": "rules",
    "topic": "SSR Transponder Codes",
    "question": "Which SSR transponder code is used to indicate a 'Radio Failure (Loss of communication)'?",
    "options": [
      "7600",
      "7000",
      "7777"
    ],
    "answer": 0,
    "notes": "7600 is the international transponder code indicating total loss of radio communications."
  },
  {
    "section": "rules",
    "topic": "SSR Transponder Codes",
    "question": "If a pilot sets the transponder to code 7600, what situation are they reporting to ATC?",
    "options": [
      "Radio Failure (Loss of communication)",
      "VFR flight in uncontrolled airspace",
      "Flight level deviation"
    ],
    "answer": 0,
    "notes": "7600 is the international transponder code indicating total loss of radio communications."
  },
  {
    "section": "rules",
    "topic": "SSR Transponder Codes",
    "question": "Which SSR transponder code is used to indicate a 'General Emergency'?",
    "options": [
      "7700",
      "7000",
      "7777"
    ],
    "answer": 0,
    "notes": "7700 is the international transponder code indicating a general emergency/distress situation."
  },
  {
    "section": "rules",
    "topic": "SSR Transponder Codes",
    "question": "If a pilot sets the transponder to code 7700, what situation are they reporting to ATC?",
    "options": [
      "General Emergency",
      "VFR flight in uncontrolled airspace",
      "Flight level deviation"
    ],
    "answer": 0,
    "notes": "7700 is the international transponder code indicating a general emergency/distress situation."
  },
  {
    "topic": "Right of Way",
    "question": "When two aircraft are converging at approximately the same level, which aircraft has the right of way?",
    "options": [
      "The aircraft that has the other on its right shall give way",
      "The aircraft that has the other on its left shall give way",
      "The faster aircraft has the right of way"
    ],
    "answer": 0,
    "notes": "According to Annex 2, when two aircraft are converging at the same level, the aircraft that has the other on its right must give way (meaning the aircraft on the right has the right of way).",
    "section": "rules"
  },
  {
    "topic": "Right of Way",
    "question": "Which of the following aircraft categories has the highest right of way priority?",
    "options": [
      "Power-driven aircraft",
      "Gliders",
      "Balloons"
    ],
    "answer": 2,
    "notes": "Balloons have the highest priority as they are least maneuverable, followed by gliders, airships, and then power-driven aircraft.",
    "section": "rules"
  },
  {
    "topic": "Right of Way",
    "question": "When two power-driven aircraft are meeting head-on, or nearly head-on, what action must both pilots take?",
    "options": [
      "Both aircraft must alter course to the right",
      "Both aircraft must alter course to the left",
      "The lower aircraft climbs, the higher aircraft descends"
    ],
    "answer": 0,
    "notes": "When meeting head-on, each aircraft must alter its course to the right to ensure safe clearance.",
    "section": "rules"
  },
  {
    "topic": "Right of Way",
    "question": "An aircraft being overtaken has the right of way. The overtaking aircraft must alter its course by:",
    "options": [
      "Turning to the left and keeping well clear",
      "Turning to the right and keeping well clear",
      "Climbing at least 500 feet above the overtaken aircraft"
    ],
    "answer": 1,
    "notes": "An overtaking aircraft must alter its course to the right, regardless of whether it is climbing, descending, or in level flight, and keep well clear.",
    "section": "rules"
  },
  {
    "topic": "Right of Way",
    "question": "When two or more heavier-than-air aircraft are approaching an aerodrome for the purpose of landing, who has priority?",
    "options": [
      "The aircraft at the higher level",
      "The aircraft at the lower level, provided it does not take unfair advantage",
      "The aircraft with the lowest fuel reserve, regardless of position"
    ],
    "answer": 1,
    "notes": "The aircraft at the lower level has the right of way, but it must not abuse this rule to cut off or overtake another aircraft on final approach.",
    "section": "rules"
  },
  {
    "topic": "Right of Way",
    "question": "If a power-driven aircraft is converging with an aircraft towing a glider, who must give way?",
    "options": [
      "The glider-towing aircraft must give way",
      "The power-driven aircraft must give way",
      "Both must turn right"
    ],
    "answer": 1,
    "notes": "An aircraft towing another aircraft or glider has right of way over a standard power-driven aircraft because its maneuverability is significantly restricted.",
    "section": "rules"
  },
  {
    "topic": "Altimeter Setting",
    "question": "At or below the Transition Altitude, what altimeter setting is used to express the vertical position of an aircraft?",
    "options": [
      "QNH",
      "Standard Altimeter Setting (1013.2 hPa / 29.92 inHg)",
      "QFE"
    ],
    "answer": 0,
    "notes": "At or below the transition altitude, vertical position is expressed in altitude above mean sea level based on QNH.",
    "section": "rules"
  },
  {
    "topic": "Altimeter Setting",
    "question": "Above the Transition Altitude, what altimeter setting must be set, and how is vertical position expressed?",
    "options": [
      "QNH / Altitudes",
      "1013.25 hPa (QNE) / Flight Levels",
      "QFE / Heights"
    ],
    "answer": 1,
    "notes": "Above the transition altitude, the standard altimeter setting of 1013.2 hPa (29.92 inHg) is used, and the vertical position is expressed as a Flight Level (FL).",
    "section": "rules"
  },
  {
    "topic": "Altimeter Setting",
    "question": "What is the Transition Layer?",
    "options": [
      "The airspace between the transition altitude and the transition level",
      "The airspace between 10,000 feet and FL100",
      "The layer of air where jet streams occur"
    ],
    "answer": 0,
    "notes": "The transition layer is the airspace between the transition altitude (based on local QNH) and the transition level (based on standard 1013.2 hPa).",
    "section": "rules"
  },
  {
    "topic": "VFR Rules",
    "question": "Except when necessary for take-off or landing, VFR flights shall not be flown over congested areas of cities or settlements at a height less than:",
    "options": [
      "1,000 feet above the highest obstacle within 600m",
      "500 feet above the highest obstacle within 150m",
      "2,000 feet above the terrain"
    ],
    "answer": 0,
    "notes": "VFR flights over congested areas of cities, towns, or settlements must remain at least 1,000 ft (300m) above the highest obstacle within a radius of 600 meters of the aircraft.",
    "section": "rules"
  },
  {
    "topic": "VFR Rules",
    "question": "Except when necessary for take-off or landing, a VFR flight elsewhere than over congested areas shall not be flown at a height less than:",
    "options": [
      "500 feet above the ground or water",
      "1,000 feet above the highest obstacle",
      "250 feet above the ground"
    ],
    "answer": 0,
    "notes": "Over areas other than congested zones, VFR flights must not be operated lower than 500 ft (150m) above the ground or water.",
    "section": "rules"
  },
  {
    "topic": "VFR Rules",
    "question": "VFR flights shall not be operated above which Flight Level, unless authorized?",
    "options": [
      "FL200",
      "FL150",
      "FL195"
    ],
    "answer": 1,
    "notes": "Under standard rules, VFR flights are generally not authorized above FL150 (or FL200 in some regions depending on local regulations; standard ICAO is FL150/15,000 ft unless state approved).",
    "section": "rules"
  },
  {
    "topic": "VFR Rules",
    "question": "VFR flights are prohibited in which airspace class?",
    "options": [
      "Class A",
      "Class B",
      "Class C"
    ],
    "answer": 0,
    "notes": "VFR flights are completely prohibited in Class A airspace. All operations in Class A must be conducted under Instrument Flight Rules (IFR).",
    "section": "rules"
  },
  {
    "topic": "Lights",
    "question": "Between sunset and sunrise, what color navigation light must be visible on the port (left) wingtip of an aircraft?",
    "options": [
      "Red",
      "Green",
      "White"
    ],
    "answer": 0,
    "notes": "The port (left) wingtip navigation light is red. (Port Wine is Red).",
    "section": "rules"
  },
  {
    "topic": "Lights",
    "question": "Between sunset and sunrise, what color navigation light must be visible on the starboard (right) wingtip of an aircraft?",
    "options": [
      "Red",
      "Green",
      "White"
    ],
    "answer": 1,
    "notes": "The starboard (right) wingtip navigation light is green.",
    "section": "rules"
  },
  {
    "topic": "Lights",
    "question": "The white navigation light on the tail of an aircraft must cover an angle of:",
    "options": [
      "140 degrees",
      "110 degrees",
      "120 degrees"
    ],
    "answer": 0,
    "notes": "The rear white navigation light must be visible through an angle of 140 degrees (70 degrees to the left and 70 degrees to the right from aft).",
    "section": "rules"
  },
  {
    "topic": "Lights",
    "question": "The port and starboard navigation lights on the wingtips must cover an angle of:",
    "options": [
      "110 degrees from dead ahead to the side",
      "180 degrees",
      "90 degrees"
    ],
    "answer": 0,
    "notes": "Wingtips navigation lights must cover a horizontal angle of 110 degrees from dead ahead to the respective side.",
    "section": "rules"
  },
  {
    "topic": "Light Signals",
    "question": "A steady red light gun signal from the tower to an aircraft in flight means:",
    "options": [
      "Give way to other aircraft and continue circling",
      "Cleared to land",
      "Aerodrome unsafe, do not land"
    ],
    "answer": 0,
    "notes": "A steady red light in flight means 'Give way to other aircraft and continue circling' (it is not a command to land or go away immediately, just yield).",
    "section": "rules"
  },
  {
    "topic": "Light Signals",
    "question": "A flashing red light gun signal from the tower to an aircraft in flight means:",
    "options": [
      "Give way and circle",
      "Aerodrome unsafe, do not land",
      "Return for landing (to be followed by steady green)"
    ],
    "answer": 1,
    "notes": "In flight, a flashing red light means 'Aerodrome unsafe, do not land'.",
    "section": "rules"
  },
  {
    "topic": "Light Signals",
    "question": "A steady green light gun signal to an aircraft in flight means:",
    "options": [
      "Cleared to land",
      "Return for landing",
      "Cleared to taxi"
    ],
    "answer": 0,
    "notes": "In flight, a steady green light means 'Cleared to land'.",
    "section": "rules"
  },
  {
    "topic": "Light Signals",
    "question": "A flashing green light gun signal to an aircraft in flight means:",
    "options": [
      "Cleared to land",
      "Return for landing (expect landing clearance in due course)",
      "Cleared to taxi"
    ],
    "answer": 1,
    "notes": "In flight, a flashing green light means 'Return for landing' (to be followed by steady green).",
    "section": "rules"
  },
  {
    "topic": "Light Signals",
    "question": "A flashing white light gun signal to an aircraft in flight means:",
    "options": [
      "Cleared to land",
      "Land at this aerodrome and proceed to apron",
      "Return for landing"
    ],
    "answer": 1,
    "notes": "A flashing white light to an aircraft in flight means 'Land at this aerodrome and proceed to apron' (used in emergencies).",
    "section": "rules"
  },
  {
    "topic": "Light Signals",
    "question": "A flashing red light gun signal to an aircraft on the ground means:",
    "options": [
      "Taxi clear of the landing area/runway in use",
      "Stop",
      "Taxi back to hanger"
    ],
    "answer": 0,
    "notes": "On the ground, a flashing red light means 'Taxi clear of the landing area/runway in use'.",
    "section": "rules"
  },
  {
    "topic": "Light Signals",
    "question": "A steady red light gun signal to an aircraft on the ground means:",
    "options": [
      "Stop",
      "Taxi clear of runway",
      "Cleared to taxi"
    ],
    "answer": 0,
    "notes": "On the ground, a steady red light means 'Stop'.",
    "section": "rules"
  },
  {
    "topic": "Light Signals",
    "question": "A flashing white light gun signal to an aircraft on the ground means:",
    "options": [
      "Cleared to taxi",
      "Return to starting point on the aerodrome",
      "Stop"
    ],
    "answer": 1,
    "notes": "On the ground, a flashing white light means 'Return to starting point on the aerodrome'.",
    "section": "rules"
  },
  {
    "topic": "Light Signals",
    "question": "A steady green light gun signal to an aircraft on the ground means:",
    "options": [
      "Cleared for take-off",
      "Cleared to taxi",
      "Return to starting point"
    ],
    "answer": 0,
    "notes": "On the ground, a steady green light means 'Cleared for take-off'.",
    "section": "rules"
  },
  {
    "topic": "Light Signals",
    "question": "A flashing green light gun signal to an aircraft on the ground means:",
    "options": [
      "Cleared to taxi",
      "Cleared for take-off",
      "Return to start point"
    ],
    "answer": 0,
    "notes": "On the ground, a flashing green light means 'Cleared to taxi'.",
    "section": "rules"
  },
  {
    "section": "ats",
    "topic": "Airspace Classes",
    "question": "What types of flights are allowed to operate in Class A airspace?",
    "options": [
      "IFR only",
      "IFR only",
      "VFR only"
    ],
    "answer": 0,
    "notes": "In Class A airspace, the operations permitted are: IFR only."
  },
  {
    "section": "ats",
    "topic": "Airspace Classes",
    "question": "What is the two-way radio communication requirement in Class A airspace?",
    "options": [
      "continuous two-way radio required",
      "Continuous radio required for all flights",
      "No radio required at all"
    ],
    "answer": 0,
    "notes": "The communication requirements in Class A are: continuous two-way radio required."
  },
  {
    "section": "ats",
    "topic": "Airspace Classes",
    "question": "Which air traffic service is provided to flights in Class A airspace?",
    "options": [
      "ATC service",
      "Full radar separation",
      "None"
    ],
    "answer": 0,
    "notes": "Class A airspace provides: ATC service."
  },
  {
    "section": "ats",
    "topic": "Airspace Classes",
    "question": "What is the separation service model in Class A airspace?",
    "options": [
      "all flights separated",
      "All flights are separated from each other",
      "No separation service is provided"
    ],
    "answer": 0,
    "notes": "Separation details for Class A: all flights separated."
  },
  {
    "section": "ats",
    "topic": "Airspace Classes",
    "question": "What types of flights are allowed to operate in Class B airspace?",
    "options": [
      "IFR and VFR",
      "IFR only",
      "VFR only"
    ],
    "answer": 0,
    "notes": "In Class B airspace, the operations permitted are: IFR and VFR."
  },
  {
    "section": "ats",
    "topic": "Airspace Classes",
    "question": "What is the two-way radio communication requirement in Class B airspace?",
    "options": [
      "continuous two-way radio required",
      "Continuous radio required for all flights",
      "No radio required at all"
    ],
    "answer": 0,
    "notes": "The communication requirements in Class B are: continuous two-way radio required."
  },
  {
    "section": "ats",
    "topic": "Airspace Classes",
    "question": "Which air traffic service is provided to flights in Class B airspace?",
    "options": [
      "ATC service",
      "Full radar separation",
      "None"
    ],
    "answer": 0,
    "notes": "Class B airspace provides: ATC service."
  },
  {
    "section": "ats",
    "topic": "Airspace Classes",
    "question": "What is the separation service model in Class B airspace?",
    "options": [
      "all flights separated",
      "All flights are separated from each other",
      "No separation service is provided"
    ],
    "answer": 0,
    "notes": "Separation details for Class B: all flights separated."
  },
  {
    "section": "ats",
    "topic": "Airspace Classes",
    "question": "What types of flights are allowed to operate in Class C airspace?",
    "options": [
      "IFR and VFR",
      "IFR only",
      "VFR only"
    ],
    "answer": 0,
    "notes": "In Class C airspace, the operations permitted are: IFR and VFR."
  },
  {
    "section": "ats",
    "topic": "Airspace Classes",
    "question": "What is the two-way radio communication requirement in Class C airspace?",
    "options": [
      "continuous two-way radio required",
      "Continuous radio required for all flights",
      "No radio required at all"
    ],
    "answer": 0,
    "notes": "The communication requirements in Class C are: continuous two-way radio required."
  },
  {
    "section": "ats",
    "topic": "Airspace Classes",
    "question": "Which air traffic service is provided to flights in Class C airspace?",
    "options": [
      "ATC service",
      "Full radar separation",
      "None"
    ],
    "answer": 0,
    "notes": "Class C airspace provides: ATC service."
  },
  {
    "section": "ats",
    "topic": "Airspace Classes",
    "question": "What is the separation service model in Class C airspace?",
    "options": [
      "IFR separated from IFR and VFR; VFR separated from IFR, receives traffic info on other VFR",
      "All flights are separated from each other",
      "No separation service is provided"
    ],
    "answer": 0,
    "notes": "Separation details for Class C: IFR separated from IFR and VFR; VFR separated from IFR, receives traffic info on other VFR."
  },
  {
    "section": "ats",
    "topic": "Airspace Classes",
    "question": "What types of flights are allowed to operate in Class D airspace?",
    "options": [
      "IFR and VFR",
      "IFR only",
      "VFR only"
    ],
    "answer": 0,
    "notes": "In Class D airspace, the operations permitted are: IFR and VFR."
  },
  {
    "section": "ats",
    "topic": "Airspace Classes",
    "question": "What is the two-way radio communication requirement in Class D airspace?",
    "options": [
      "continuous two-way radio required",
      "Continuous radio required for all flights",
      "No radio required at all"
    ],
    "answer": 0,
    "notes": "The communication requirements in Class D are: continuous two-way radio required."
  },
  {
    "section": "ats",
    "topic": "Airspace Classes",
    "question": "Which air traffic service is provided to flights in Class D airspace?",
    "options": [
      "ATC service",
      "Full radar separation",
      "None"
    ],
    "answer": 0,
    "notes": "Class D airspace provides: ATC service."
  },
  {
    "section": "ats",
    "topic": "Airspace Classes",
    "question": "What is the separation service model in Class D airspace?",
    "options": [
      "IFR separated from IFR; IFR/VFR and VFR/VFR receive traffic info",
      "All flights are separated from each other",
      "No separation service is provided"
    ],
    "answer": 0,
    "notes": "Separation details for Class D: IFR separated from IFR; IFR/VFR and VFR/VFR receive traffic info."
  },
  {
    "section": "ats",
    "topic": "Airspace Classes",
    "question": "What types of flights are allowed to operate in Class E airspace?",
    "options": [
      "IFR and VFR",
      "IFR only",
      "VFR only"
    ],
    "answer": 0,
    "notes": "In Class E airspace, the operations permitted are: IFR and VFR."
  },
  {
    "section": "ats",
    "topic": "Airspace Classes",
    "question": "What is the two-way radio communication requirement in Class E airspace?",
    "options": [
      "continuous two-way radio required for IFR",
      "Continuous radio required for all flights",
      "No radio required at all"
    ],
    "answer": 0,
    "notes": "The communication requirements in Class E are: continuous two-way radio required for IFR."
  },
  {
    "section": "ats",
    "topic": "Airspace Classes",
    "question": "Which air traffic service is provided to flights in Class E airspace?",
    "options": [
      "ATC service (IFR only)",
      "Full radar separation",
      "None"
    ],
    "answer": 0,
    "notes": "Class E airspace provides: ATC service (IFR only)."
  },
  {
    "section": "ats",
    "topic": "Airspace Classes",
    "question": "What is the separation service model in Class E airspace?",
    "options": [
      "IFR separated from IFR; VFR receives traffic info as far as practical",
      "All flights are separated from each other",
      "No separation service is provided"
    ],
    "answer": 0,
    "notes": "Separation details for Class E: IFR separated from IFR; VFR receives traffic info as far as practical."
  },
  {
    "section": "ats",
    "topic": "Airspace Classes",
    "question": "What types of flights are allowed to operate in Class F airspace?",
    "options": [
      "IFR and VFR",
      "IFR only",
      "VFR only"
    ],
    "answer": 0,
    "notes": "In Class F airspace, the operations permitted are: IFR and VFR."
  },
  {
    "section": "ats",
    "topic": "Airspace Classes",
    "question": "What is the two-way radio communication requirement in Class F airspace?",
    "options": [
      "continuous two-way radio required for IFR",
      "Continuous radio required for all flights",
      "No radio required at all"
    ],
    "answer": 0,
    "notes": "The communication requirements in Class F are: continuous two-way radio required for IFR."
  },
  {
    "section": "ats",
    "topic": "Airspace Classes",
    "question": "Which air traffic service is provided to flights in Class F airspace?",
    "options": [
      "Air Traffic Advisory service",
      "Full radar separation",
      "None"
    ],
    "answer": 0,
    "notes": "Class F airspace provides: Air Traffic Advisory service."
  },
  {
    "section": "ats",
    "topic": "Airspace Classes",
    "question": "What is the separation service model in Class F airspace?",
    "options": [
      "IFR separated from IFR as far as practical",
      "All flights are separated from each other",
      "No separation service is provided"
    ],
    "answer": 0,
    "notes": "Separation details for Class F: IFR separated from IFR as far as practical."
  },
  {
    "section": "ats",
    "topic": "Airspace Classes",
    "question": "What types of flights are allowed to operate in Class G airspace?",
    "options": [
      "IFR and VFR",
      "IFR only",
      "VFR only"
    ],
    "answer": 0,
    "notes": "In Class G airspace, the operations permitted are: IFR and VFR."
  },
  {
    "section": "ats",
    "topic": "Airspace Classes",
    "question": "What is the two-way radio communication requirement in Class G airspace?",
    "options": [
      "two-way radio not mandatory for VFR",
      "Continuous radio required for all flights",
      "No radio required at all"
    ],
    "answer": 0,
    "notes": "The communication requirements in Class G are: two-way radio not mandatory for VFR."
  },
  {
    "section": "ats",
    "topic": "Airspace Classes",
    "question": "Which air traffic service is provided to flights in Class G airspace?",
    "options": [
      "Flight Information service",
      "Full radar separation",
      "None"
    ],
    "answer": 0,
    "notes": "Class G airspace provides: Flight Information service."
  },
  {
    "section": "ats",
    "topic": "Airspace Classes",
    "question": "What is the separation service model in Class G airspace?",
    "options": [
      "no separation provided, traffic info if requested/practicable",
      "All flights are separated from each other",
      "No separation service is provided"
    ],
    "answer": 0,
    "notes": "Separation details for Class G: no separation provided, traffic info if requested/practicable."
  },
  {
    "topic": "Airspace Classes",
    "question": "In Class A airspace, which types of flights are permitted, and are they separated from each other?",
    "options": [
      "IFR only; all flights are separated from each other",
      "IFR and VFR; all flights are separated",
      "IFR and VFR; IFR is separated from VFR, but VFR is not separated from VFR"
    ],
    "answer": 0,
    "notes": "Class A permits IFR flights ONLY. All flights are provided with air traffic control service and are separated from all other flights.",
    "section": "ats"
  },
  {
    "topic": "Airspace Classes",
    "question": "In Class B airspace, which types of flights are permitted, and are they separated?",
    "options": [
      "IFR and VFR; all flights are separated from each other",
      "IFR and VFR; IFR is separated from VFR, but VFR flights are not separated from other VFR flights",
      "IFR only; all flights are separated"
    ],
    "answer": 0,
    "notes": "In Class B airspace, both IFR and VFR flights are permitted. All flights are separated from each other, and ATC service is provided to all.",
    "section": "ats"
  },
  {
    "topic": "Airspace Classes",
    "question": "In Class C airspace, what is the separation service provided to VFR flights?",
    "options": [
      "VFR flights are separated from IFR flights, but not from other VFR flights",
      "VFR flights are separated from all other flights",
      "VFR flights receive no separation, only traffic information"
    ],
    "answer": 0,
    "notes": "In Class C airspace, IFR flights are separated from IFR and VFR flights. VFR flights are separated from IFR flights, but VFR flights are NOT separated from other VFR flights (they only receive traffic information about other VFR).",
    "section": "ats"
  },
  {
    "topic": "Airspace Classes",
    "question": "In Class D airspace, what separation is provided between IFR and VFR flights?",
    "options": [
      "No separation is provided between IFR and VFR flights (they receive traffic information)",
      "IFR is separated from VFR",
      "All flights are separated"
    ],
    "answer": 0,
    "notes": "In Class D airspace, IFR flights are separated from other IFR flights. No separation is provided between IFR and VFR, nor between VFR and VFR; all receive traffic information.",
    "section": "ats"
  },
  {
    "topic": "Airspace Classes",
    "question": "What is the standard speed limit for VFR flights in Class C, D, E, F, and G airspaces below 10,000 feet (3050m) AMSL?",
    "options": [
      "250 knots IAS",
      "200 knots IAS",
      "300 knots IAS"
    ],
    "answer": 0,
    "notes": "The standard speed limit below 10,000 ft (3050m) AMSL is 250 knots Indicated Airspeed (IAS) for all flights in these classes, unless authorized.",
    "section": "ats"
  },
  {
    "topic": "Airspace Classes",
    "question": "Which airspace classes are considered 'uncontrolled' airspace?",
    "options": [
      "Class F and G",
      "Class G only",
      "Class E, F, and G"
    ],
    "answer": 1,
    "notes": "Class G is completely uncontrolled airspace (only Flight Information Service is provided). Class F is advisory/flight info. Classes A-E are controlled airspaces.",
    "section": "ats"
  },
  {
    "topic": "ATS Services",
    "question": "What does ATIS stand for in air traffic services?",
    "options": [
      "Automatic Terminal Information Service",
      "Air Traffic Information System",
      "Aeronautical Terminal Instrument Service"
    ],
    "answer": 0,
    "notes": "ATIS stands for Automatic Terminal Information Service. It is a continuous broadcast of recorded non-control information in high-activity terminal areas.",
    "section": "ats"
  },
  {
    "topic": "ATS Services",
    "question": "Which service is established to provide advice and information useful for the safe and efficient conduct of flights?",
    "options": [
      "Flight Information Service (FIS)",
      "Air Traffic Control Service (ATC)",
      "Alerting Service"
    ],
    "answer": 0,
    "notes": "Flight Information Service (FIS) is provided to all flights that are likely to need the info (warnings, weather, changes in facilities, etc.).",
    "section": "ats"
  },
  {
    "topic": "ATS Services",
    "question": "What is the primary purpose of the Alerting Service?",
    "options": [
      "To notify appropriate organizations regarding aircraft in need of search and rescue aid, and assist such organizations",
      "To alert pilots about terrain proximity",
      "To warn pilots of dangerous weather ahead"
    ],
    "answer": 0,
    "notes": "Alerting Service notifies Search and Rescue (SAR) agencies when an aircraft is in distress or overdue, and assists during the SAR operation.",
    "section": "ats"
  },
  {
    "topic": "ATC Clearances",
    "question": "An ATC clearance is an authorization for an aircraft to proceed under conditions specified by ATC. Does an ATC clearance authorize a pilot to violate regulations?",
    "options": [
      "No, an ATC clearance does not authorize pilots to violate any air regulations or safety limits",
      "Yes, ATC clearances override all rules of the air",
      "Yes, but only in Class A airspace"
    ],
    "answer": 0,
    "notes": "A pilot-in-command is always responsible for the safety of the flight and must not violate regulations just because of an ATC clearance, unless in an absolute emergency.",
    "section": "ats"
  },
  {
    "topic": "Airspace Zones",
    "question": "What is a 'Prohibited Area'?",
    "options": [
      "An airspace of defined dimensions above the land areas or territorial waters of a State within which flight of aircraft is prohibited",
      "An airspace where flight is subject to specific conditions",
      "An airspace where military training happens and flight is unsafe"
    ],
    "answer": 0,
    "notes": "A Prohibited Area is designated by a State when flight is completely barred due to national security, environmental protection, or safety.",
    "section": "airspace"
  },
  {
    "topic": "Airspace Zones",
    "question": "What is a 'Restricted Area'?",
    "options": [
      "An airspace of defined dimensions within which the flight of aircraft is restricted in accordance with certain specified conditions",
      "An airspace where flights are completely banned forever",
      "An airspace reserved only for commercial airlines"
    ],
    "answer": 0,
    "notes": "Restricted Areas permit flights only under specific clearances and conditions (e.g. active firing ranges, research facilities).",
    "section": "airspace"
  },
  {
    "topic": "Airspace Zones",
    "question": "What is a 'Danger Area'?",
    "options": [
      "An airspace of defined dimensions within which activities dangerous to the flight of aircraft may exist at specified times",
      "An airspace where flying is illegal",
      "An airspace with active severe weather"
    ],
    "answer": 0,
    "notes": "A Danger Area warns pilots of potential dangers (like artillery practice, rocket launches), but doesn't legally prohibit entry like Restricted or Prohibited areas do.",
    "section": "airspace"
  },
  {
    "topic": "Flight Documents",
    "question": "Which of the following documents MUST be carried on board an aircraft during international flights?",
    "options": [
      "Certificate of Registration, Certificate of Airworthiness, Licenses of crew, Journey Logbook, and Radio Station License",
      "Certificate of Registration and pilot's passport only",
      "None, they can be stored digitally on a server at home base"
    ],
    "answer": 0,
    "notes": "Article 29 of the Chicago Convention specifies the documents that must be carried on board: Registration, Airworthiness, Crew Licenses, Journey Logbook, Radio License, Passenger list (if applicable), and Cargo manifest (if applicable).",
    "section": "airspace"
  },
  {
    "topic": "Licensing",
    "question": "A CPL (Commercial Pilot License) holder under standard ICAO regulations must hold which class of medical certificate?",
    "options": [
      "Class 1 Medical Certificate",
      "Class 2 Medical Certificate",
      "Class 3 Medical Certificate"
    ],
    "answer": 0,
    "notes": "Commercial Pilot License (CPL) and Airline Transport Pilot License (ATPL) holders require a Class 1 Medical Certificate to exercise their license privileges.",
    "section": "airspace"
  },
  {
    "topic": "Licensing",
    "question": "For a commercial pilot under the age of 40, how long is the Class 1 Medical Certificate valid?",
    "options": [
      "12 months",
      "6 months",
      "24 months"
    ],
    "answer": 0,
    "notes": "Under standard rules, for a pilot under 40 years old, a Class 1 Medical is valid for 12 months. Over 40, it is 6 months (especially for single-pilot operations).",
    "section": "airspace"
  },
  {
    "topic": "Licensing",
    "question": "For a commercial pilot aged 40 or over engaged in single-pilot commercial air transport operations, the validity of a Class 1 Medical is:",
    "options": [
      "6 months",
      "12 months",
      "3 months"
    ],
    "answer": 0,
    "notes": "Class 1 medical certificate validity is reduced to 6 months for pilots aged 40 or older engaged in single-pilot commercial air transport.",
    "section": "airspace"
  },
  {
    "topic": "Flight Plans",
    "question": "Under what condition is a flight plan required for any flight?",
    "options": [
      "Any flight crossing an international border, or operating in controlled airspace under IFR",
      "Only flights carrying more than 10 passengers",
      "Only flights operating in stormy weather"
    ],
    "answer": 0,
    "notes": "A flight plan must be submitted prior to operating any flight across international borders, or any flight in controlled airspace under IFR, or as required by ATS.",
    "section": "airspace"
  },
  {
    "topic": "Flight Plans",
    "question": "How long before departure must a flight plan generally be submitted (except for active flights where it's filed in the air)?",
    "options": [
      "At least 60 minutes before departure (or 10 minutes if submitted in-flight)",
      "At least 3 hours before departure",
      "At least 15 minutes before departure"
    ],
    "answer": 0,
    "notes": "ICAO recommends filing a flight plan at least 60 minutes before departure to allow ATC coordination, especially when entering controlled or IFR airspaces.",
    "section": "airspace"
  },
  {
    "topic": "Flight Plans",
    "question": "When an aircraft deviates from its flight plan track, what is the pilot's duty regarding reporting?",
    "options": [
      "Inform ATC immediately if the deviation exceeds limits (or immediately in controlled airspace)",
      "No report is needed if the pilot returns to course within 10 minutes",
      "Only report if fuel is low"
    ],
    "answer": 0,
    "notes": "Any significant deviation from the flight plan track or timing must be reported to ATC as soon as possible to maintain separation and safety.",
    "section": "airspace"
  },
  {
    "section": "rules",
    "topic": "Light Gun Signals",
    "question": "A pilot receiving a steady green light gun signal from the tower while in flight should:",
    "options": [
      "Cleared to land",
      "Disregard and continue",
      "Expect a radio message"
    ],
    "answer": 0,
    "notes": "Light signals are critical when communication fails. A steady green signal in flight means: Cleared to land. Allows landing."
  },
  {
    "section": "rules",
    "topic": "Light Gun Signals",
    "question": "A pilot receiving a steady green light gun signal from the tower while in flight should:",
    "options": [
      "Cleared to land",
      "Disregard and continue",
      "Expect a radio message"
    ],
    "answer": 0,
    "notes": "Light signals are critical when communication fails. A steady green signal in flight means: Cleared to land. Allows landing."
  },
  {
    "section": "rules",
    "topic": "Light Gun Signals",
    "question": "A pilot receiving a steady green light gun signal from the tower while in flight should:",
    "options": [
      "Cleared to land",
      "Disregard and continue",
      "Expect a radio message"
    ],
    "answer": 0,
    "notes": "Light signals are critical when communication fails. A steady green signal in flight means: Cleared to land. Allows landing."
  },
  {
    "section": "rules",
    "topic": "Light Gun Signals",
    "question": "A pilot receiving a flashing green light gun signal from the tower while in flight should:",
    "options": [
      "Return for landing (to be followed by steady green)",
      "Disregard and continue",
      "Expect a radio message"
    ],
    "answer": 0,
    "notes": "Light signals are critical when communication fails. A flashing green signal in flight means: Return for landing (to be followed by steady green). Instructions to join the pattern."
  },
  {
    "section": "rules",
    "topic": "Light Gun Signals",
    "question": "A pilot receiving a flashing green light gun signal from the tower while in flight should:",
    "options": [
      "Return for landing (to be followed by steady green)",
      "Disregard and continue",
      "Expect a radio message"
    ],
    "answer": 0,
    "notes": "Light signals are critical when communication fails. A flashing green signal in flight means: Return for landing (to be followed by steady green). Instructions to join the pattern."
  },
  {
    "section": "rules",
    "topic": "Light Gun Signals",
    "question": "A pilot receiving a flashing green light gun signal from the tower while in flight should:",
    "options": [
      "Return for landing (to be followed by steady green)",
      "Disregard and continue",
      "Expect a radio message"
    ],
    "answer": 0,
    "notes": "Light signals are critical when communication fails. A flashing green signal in flight means: Return for landing (to be followed by steady green). Instructions to join the pattern."
  },
  {
    "section": "rules",
    "topic": "Light Gun Signals",
    "question": "A pilot receiving a steady red light gun signal from the tower while in flight should:",
    "options": [
      "Give way to other aircraft and continue circling",
      "Disregard and continue",
      "Expect a radio message"
    ],
    "answer": 0,
    "notes": "Light signals are critical when communication fails. A steady red signal in flight means: Give way to other aircraft and continue circling. Must yield to other traffic."
  },
  {
    "section": "rules",
    "topic": "Light Gun Signals",
    "question": "A pilot receiving a steady red light gun signal from the tower while in flight should:",
    "options": [
      "Give way to other aircraft and continue circling",
      "Disregard and continue",
      "Expect a radio message"
    ],
    "answer": 0,
    "notes": "Light signals are critical when communication fails. A steady red signal in flight means: Give way to other aircraft and continue circling. Must yield to other traffic."
  },
  {
    "section": "rules",
    "topic": "Light Gun Signals",
    "question": "A pilot receiving a steady red light gun signal from the tower while in flight should:",
    "options": [
      "Give way to other aircraft and continue circling",
      "Disregard and continue",
      "Expect a radio message"
    ],
    "answer": 0,
    "notes": "Light signals are critical when communication fails. A steady red signal in flight means: Give way to other aircraft and continue circling. Must yield to other traffic."
  },
  {
    "section": "rules",
    "topic": "Light Gun Signals",
    "question": "A pilot receiving a flashing red light gun signal from the tower while in flight should:",
    "options": [
      "Aerodrome unsafe, do not land",
      "Disregard and continue",
      "Expect a radio message"
    ],
    "answer": 0,
    "notes": "Light signals are critical when communication fails. A flashing red signal in flight means: Aerodrome unsafe, do not land. Airport is closed or obstructed."
  },
  {
    "section": "rules",
    "topic": "Light Gun Signals",
    "question": "A pilot receiving a flashing red light gun signal from the tower while in flight should:",
    "options": [
      "Aerodrome unsafe, do not land",
      "Disregard and continue",
      "Expect a radio message"
    ],
    "answer": 0,
    "notes": "Light signals are critical when communication fails. A flashing red signal in flight means: Aerodrome unsafe, do not land. Airport is closed or obstructed."
  },
  {
    "section": "rules",
    "topic": "Light Gun Signals",
    "question": "A pilot receiving a flashing red light gun signal from the tower while in flight should:",
    "options": [
      "Aerodrome unsafe, do not land",
      "Disregard and continue",
      "Expect a radio message"
    ],
    "answer": 0,
    "notes": "Light signals are critical when communication fails. A flashing red signal in flight means: Aerodrome unsafe, do not land. Airport is closed or obstructed."
  },
  {
    "section": "rules",
    "topic": "Light Gun Signals",
    "question": "A pilot receiving a flashing white light gun signal from the tower while in flight should:",
    "options": [
      "Land at this aerodrome and proceed to apron",
      "Disregard and continue",
      "Expect a radio message"
    ],
    "answer": 0,
    "notes": "Light signals are critical when communication fails. A flashing white signal in flight means: Land at this aerodrome and proceed to apron. Emergency landing signal."
  },
  {
    "section": "rules",
    "topic": "Light Gun Signals",
    "question": "A pilot receiving a flashing white light gun signal from the tower while in flight should:",
    "options": [
      "Land at this aerodrome and proceed to apron",
      "Disregard and continue",
      "Expect a radio message"
    ],
    "answer": 0,
    "notes": "Light signals are critical when communication fails. A flashing white signal in flight means: Land at this aerodrome and proceed to apron. Emergency landing signal."
  },
  {
    "section": "rules",
    "topic": "Light Gun Signals",
    "question": "A pilot receiving a flashing white light gun signal from the tower while in flight should:",
    "options": [
      "Land at this aerodrome and proceed to apron",
      "Disregard and continue",
      "Expect a radio message"
    ],
    "answer": 0,
    "notes": "Light signals are critical when communication fails. A flashing white signal in flight means: Land at this aerodrome and proceed to apron. Emergency landing signal."
  },
  {
    "section": "rules",
    "topic": "Light Gun Signals",
    "question": "A pilot receiving a steady green light gun signal from the tower while on the ground should:",
    "options": [
      "Cleared for take-off",
      "Disregard and continue",
      "Expect a radio message"
    ],
    "answer": 0,
    "notes": "Light signals are critical when communication fails. A steady green signal on the ground means: Cleared for take-off. Takeoff authorized."
  },
  {
    "section": "rules",
    "topic": "Light Gun Signals",
    "question": "A pilot receiving a steady green light gun signal from the tower while on the ground should:",
    "options": [
      "Cleared for take-off",
      "Disregard and continue",
      "Expect a radio message"
    ],
    "answer": 0,
    "notes": "Light signals are critical when communication fails. A steady green signal on the ground means: Cleared for take-off. Takeoff authorized."
  },
  {
    "section": "rules",
    "topic": "Light Gun Signals",
    "question": "A pilot receiving a steady green light gun signal from the tower while on the ground should:",
    "options": [
      "Cleared for take-off",
      "Disregard and continue",
      "Expect a radio message"
    ],
    "answer": 0,
    "notes": "Light signals are critical when communication fails. A steady green signal on the ground means: Cleared for take-off. Takeoff authorized."
  },
  {
    "section": "rules",
    "topic": "Light Gun Signals",
    "question": "A pilot receiving a flashing green light gun signal from the tower while on the ground should:",
    "options": [
      "Cleared to taxi",
      "Disregard and continue",
      "Expect a radio message"
    ],
    "answer": 0,
    "notes": "Light signals are critical when communication fails. A flashing green signal on the ground means: Cleared to taxi. Taxiing authorized."
  },
  {
    "section": "rules",
    "topic": "Light Gun Signals",
    "question": "A pilot receiving a flashing green light gun signal from the tower while on the ground should:",
    "options": [
      "Cleared to taxi",
      "Disregard and continue",
      "Expect a radio message"
    ],
    "answer": 0,
    "notes": "Light signals are critical when communication fails. A flashing green signal on the ground means: Cleared to taxi. Taxiing authorized."
  },
  {
    "section": "rules",
    "topic": "Light Gun Signals",
    "question": "A pilot receiving a flashing green light gun signal from the tower while on the ground should:",
    "options": [
      "Cleared to taxi",
      "Disregard and continue",
      "Expect a radio message"
    ],
    "answer": 0,
    "notes": "Light signals are critical when communication fails. A flashing green signal on the ground means: Cleared to taxi. Taxiing authorized."
  },
  {
    "section": "rules",
    "topic": "Light Gun Signals",
    "question": "A pilot receiving a steady red light gun signal from the tower while on the ground should:",
    "options": [
      "Stop",
      "Disregard and continue",
      "Expect a radio message"
    ],
    "answer": 0,
    "notes": "Light signals are critical when communication fails. A steady red signal on the ground means: Stop. Hold position."
  },
  {
    "section": "rules",
    "topic": "Light Gun Signals",
    "question": "A pilot receiving a steady red light gun signal from the tower while on the ground should:",
    "options": [
      "Stop",
      "Disregard and continue",
      "Expect a radio message"
    ],
    "answer": 0,
    "notes": "Light signals are critical when communication fails. A steady red signal on the ground means: Stop. Hold position."
  },
  {
    "section": "rules",
    "topic": "Light Gun Signals",
    "question": "A pilot receiving a steady red light gun signal from the tower while on the ground should:",
    "options": [
      "Stop",
      "Disregard and continue",
      "Expect a radio message"
    ],
    "answer": 0,
    "notes": "Light signals are critical when communication fails. A steady red signal on the ground means: Stop. Hold position."
  },
  {
    "section": "rules",
    "topic": "Light Gun Signals",
    "question": "A pilot receiving a flashing red light gun signal from the tower while on the ground should:",
    "options": [
      "Taxi clear of the landing area/runway in use",
      "Disregard and continue",
      "Expect a radio message"
    ],
    "answer": 0,
    "notes": "Light signals are critical when communication fails. A flashing red signal on the ground means: Taxi clear of the landing area/runway in use. Vacate the runway immediately."
  },
  {
    "section": "rules",
    "topic": "Light Gun Signals",
    "question": "A pilot receiving a flashing red light gun signal from the tower while on the ground should:",
    "options": [
      "Taxi clear of the landing area/runway in use",
      "Disregard and continue",
      "Expect a radio message"
    ],
    "answer": 0,
    "notes": "Light signals are critical when communication fails. A flashing red signal on the ground means: Taxi clear of the landing area/runway in use. Vacate the runway immediately."
  },
  {
    "section": "rules",
    "topic": "Light Gun Signals",
    "question": "A pilot receiving a flashing red light gun signal from the tower while on the ground should:",
    "options": [
      "Taxi clear of the landing area/runway in use",
      "Disregard and continue",
      "Expect a radio message"
    ],
    "answer": 0,
    "notes": "Light signals are critical when communication fails. A flashing red signal on the ground means: Taxi clear of the landing area/runway in use. Vacate the runway immediately."
  },
  {
    "section": "rules",
    "topic": "Light Gun Signals",
    "question": "A pilot receiving a flashing white light gun signal from the tower while on the ground should:",
    "options": [
      "Return to starting point on the aerodrome",
      "Disregard and continue",
      "Expect a radio message"
    ],
    "answer": 0,
    "notes": "Light signals are critical when communication fails. A flashing white signal on the ground means: Return to starting point on the aerodrome. Return to base/apron."
  },
  {
    "section": "rules",
    "topic": "Light Gun Signals",
    "question": "A pilot receiving a flashing white light gun signal from the tower while on the ground should:",
    "options": [
      "Return to starting point on the aerodrome",
      "Disregard and continue",
      "Expect a radio message"
    ],
    "answer": 0,
    "notes": "Light signals are critical when communication fails. A flashing white signal on the ground means: Return to starting point on the aerodrome. Return to base/apron."
  },
  {
    "section": "rules",
    "topic": "Light Gun Signals",
    "question": "A pilot receiving a flashing white light gun signal from the tower while on the ground should:",
    "options": [
      "Return to starting point on the aerodrome",
      "Disregard and continue",
      "Expect a radio message"
    ],
    "answer": 0,
    "notes": "Light signals are critical when communication fails. A flashing white signal on the ground means: Return to starting point on the aerodrome. Return to base/apron."
  },
  {
    "section": "rules",
    "topic": "Right of Way Scenarios",
    "question": "Scenario: A glider and a power-driven aircraft are converging. Who has the right of way?",
    "options": [
      "Glider has right of way",
      "The power-driven aircraft always has priority",
      "The aircraft at the higher altitude"
    ],
    "answer": 0,
    "notes": "The glider has right of way because it has less maneuverability."
  },
  {
    "section": "rules",
    "topic": "Right of Way Scenarios",
    "question": "Scenario: A glider and a power-driven aircraft are converging. Who has the right of way?",
    "options": [
      "Glider has right of way",
      "The power-driven aircraft always has priority",
      "The aircraft at the higher altitude"
    ],
    "answer": 0,
    "notes": "The glider has right of way because it has less maneuverability."
  },
  {
    "section": "rules",
    "topic": "Right of Way Scenarios",
    "question": "Scenario: A glider and a power-driven aircraft are converging. Who has the right of way?",
    "options": [
      "Glider has right of way",
      "The power-driven aircraft always has priority",
      "The aircraft at the higher altitude"
    ],
    "answer": 0,
    "notes": "The glider has right of way because it has less maneuverability."
  },
  {
    "section": "rules",
    "topic": "Right of Way Scenarios",
    "question": "Scenario: A glider and a power-driven aircraft are converging. Who has the right of way?",
    "options": [
      "Glider has right of way",
      "The power-driven aircraft always has priority",
      "The aircraft at the higher altitude"
    ],
    "answer": 0,
    "notes": "The glider has right of way because it has less maneuverability."
  },
  {
    "section": "rules",
    "topic": "Right of Way Scenarios",
    "question": "Scenario: An airship and a power-driven aircraft are converging. Who has the right of way?",
    "options": [
      "Airship has right of way",
      "The power-driven aircraft always has priority",
      "The aircraft at the higher altitude"
    ],
    "answer": 0,
    "notes": "The airship has right of way because it is less maneuverable than a standard power-driven aircraft."
  },
  {
    "section": "rules",
    "topic": "Right of Way Scenarios",
    "question": "Scenario: An airship and a power-driven aircraft are converging. Who has the right of way?",
    "options": [
      "Airship has right of way",
      "The power-driven aircraft always has priority",
      "The aircraft at the higher altitude"
    ],
    "answer": 0,
    "notes": "The airship has right of way because it is less maneuverable than a standard power-driven aircraft."
  },
  {
    "section": "rules",
    "topic": "Right of Way Scenarios",
    "question": "Scenario: An airship and a power-driven aircraft are converging. Who has the right of way?",
    "options": [
      "Airship has right of way",
      "The power-driven aircraft always has priority",
      "The aircraft at the higher altitude"
    ],
    "answer": 0,
    "notes": "The airship has right of way because it is less maneuverable than a standard power-driven aircraft."
  },
  {
    "section": "rules",
    "topic": "Right of Way Scenarios",
    "question": "Scenario: An airship and a power-driven aircraft are converging. Who has the right of way?",
    "options": [
      "Airship has right of way",
      "The power-driven aircraft always has priority",
      "The aircraft at the higher altitude"
    ],
    "answer": 0,
    "notes": "The airship has right of way because it is less maneuverable than a standard power-driven aircraft."
  },
  {
    "section": "rules",
    "topic": "Right of Way Scenarios",
    "question": "Scenario: A balloon and a glider are converging. Who has the right of way?",
    "options": [
      "Balloon has right of way",
      "The power-driven aircraft always has priority",
      "The aircraft at the higher altitude"
    ],
    "answer": 0,
    "notes": "The balloon has right of way because it has no steerage control."
  },
  {
    "section": "rules",
    "topic": "Right of Way Scenarios",
    "question": "Scenario: A balloon and a glider are converging. Who has the right of way?",
    "options": [
      "Balloon has right of way",
      "The power-driven aircraft always has priority",
      "The aircraft at the higher altitude"
    ],
    "answer": 0,
    "notes": "The balloon has right of way because it has no steerage control."
  },
  {
    "section": "rules",
    "topic": "Right of Way Scenarios",
    "question": "Scenario: A balloon and a glider are converging. Who has the right of way?",
    "options": [
      "Balloon has right of way",
      "The power-driven aircraft always has priority",
      "The aircraft at the higher altitude"
    ],
    "answer": 0,
    "notes": "The balloon has right of way because it has no steerage control."
  },
  {
    "section": "rules",
    "topic": "Right of Way Scenarios",
    "question": "Scenario: A balloon and a glider are converging. Who has the right of way?",
    "options": [
      "Balloon has right of way",
      "The power-driven aircraft always has priority",
      "The aircraft at the higher altitude"
    ],
    "answer": 0,
    "notes": "The balloon has right of way because it has no steerage control."
  },
  {
    "section": "rules",
    "topic": "Right of Way Scenarios",
    "question": "Scenario: A power-driven aircraft and an aircraft towing another aircraft are converging. Who has the right of way?",
    "options": [
      "Towing aircraft has right of way",
      "The power-driven aircraft always has priority",
      "The aircraft at the higher altitude"
    ],
    "answer": 0,
    "notes": "The towing aircraft has right of way due to limited maneuverability."
  },
  {
    "section": "rules",
    "topic": "Right of Way Scenarios",
    "question": "Scenario: A power-driven aircraft and an aircraft towing another aircraft are converging. Who has the right of way?",
    "options": [
      "Towing aircraft has right of way",
      "The power-driven aircraft always has priority",
      "The aircraft at the higher altitude"
    ],
    "answer": 0,
    "notes": "The towing aircraft has right of way due to limited maneuverability."
  },
  {
    "section": "rules",
    "topic": "Right of Way Scenarios",
    "question": "Scenario: A power-driven aircraft and an aircraft towing another aircraft are converging. Who has the right of way?",
    "options": [
      "Towing aircraft has right of way",
      "The power-driven aircraft always has priority",
      "The aircraft at the higher altitude"
    ],
    "answer": 0,
    "notes": "The towing aircraft has right of way due to limited maneuverability."
  },
  {
    "section": "rules",
    "topic": "Right of Way Scenarios",
    "question": "Scenario: A power-driven aircraft and an aircraft towing another aircraft are converging. Who has the right of way?",
    "options": [
      "Towing aircraft has right of way",
      "The power-driven aircraft always has priority",
      "The aircraft at the higher altitude"
    ],
    "answer": 0,
    "notes": "The towing aircraft has right of way due to limited maneuverability."
  },
  {
    "section": "rules",
    "topic": "Right of Way Scenarios",
    "question": "Scenario: Two gliders are converging. Who has the right of way?",
    "options": [
      "The glider on the right has right of way",
      "The power-driven aircraft always has priority",
      "The aircraft at the higher altitude"
    ],
    "answer": 0,
    "notes": "When two aircraft of the same category converge, the one on the right has the right of way."
  },
  {
    "section": "rules",
    "topic": "Right of Way Scenarios",
    "question": "Scenario: Two gliders are converging. Who has the right of way?",
    "options": [
      "The glider on the right has right of way",
      "The power-driven aircraft always has priority",
      "The aircraft at the higher altitude"
    ],
    "answer": 0,
    "notes": "When two aircraft of the same category converge, the one on the right has the right of way."
  },
  {
    "section": "rules",
    "topic": "Right of Way Scenarios",
    "question": "Scenario: Two gliders are converging. Who has the right of way?",
    "options": [
      "The glider on the right has right of way",
      "The power-driven aircraft always has priority",
      "The aircraft at the higher altitude"
    ],
    "answer": 0,
    "notes": "When two aircraft of the same category converge, the one on the right has the right of way."
  },
  {
    "section": "rules",
    "topic": "Right of Way Scenarios",
    "question": "Scenario: Two gliders are converging. Who has the right of way?",
    "options": [
      "The glider on the right has right of way",
      "The power-driven aircraft always has priority",
      "The aircraft at the higher altitude"
    ],
    "answer": 0,
    "notes": "When two aircraft of the same category converge, the one on the right has the right of way."
  },
  {
    "section": "airspace",
    "topic": "Medical Validity",
    "question": "A pilot aged 35 holding a CPL License must have which minimum Medical Certificate and what is its validity?",
    "options": [
      "Class 1 valid for 12 months",
      "Class 3 valid for 24 months",
      "Class 1 valid for 3 months"
    ],
    "answer": 0,
    "notes": "For CPL License holder aged 35: Commercial Pilot Licenses always require Class 1 Medical. Validity is 12 months."
  },
  {
    "section": "airspace",
    "topic": "Medical Validity",
    "question": "A pilot aged 45 holding a CPL License must have which minimum Medical Certificate and what is its validity?",
    "options": [
      "Class 1 valid for 6 months",
      "Class 3 valid for 24 months",
      "Class 1 valid for 3 months"
    ],
    "answer": 0,
    "notes": "For CPL License holder aged 45: Commercial Pilot Licenses always require Class 1 Medical. Validity is 6 months."
  },
  {
    "section": "airspace",
    "topic": "Medical Validity",
    "question": "A pilot aged 55 holding a CPL License must have which minimum Medical Certificate and what is its validity?",
    "options": [
      "Class 1 valid for 6 months",
      "Class 3 valid for 24 months",
      "Class 1 valid for 3 months"
    ],
    "answer": 0,
    "notes": "For CPL License holder aged 55: Commercial Pilot Licenses always require Class 1 Medical. Validity is 6 months."
  },
  {
    "section": "airspace",
    "topic": "Medical Validity",
    "question": "A pilot aged 35 holding a ATPL License must have which minimum Medical Certificate and what is its validity?",
    "options": [
      "Class 1 valid for 12 months",
      "Class 3 valid for 24 months",
      "Class 1 valid for 3 months"
    ],
    "answer": 0,
    "notes": "For ATPL License holder aged 35: Airline Transport Pilot Licenses always require Class 1 Medical. Validity is 12 months."
  },
  {
    "section": "airspace",
    "topic": "Medical Validity",
    "question": "A pilot aged 45 holding a ATPL License must have which minimum Medical Certificate and what is its validity?",
    "options": [
      "Class 1 valid for 6 months",
      "Class 3 valid for 24 months",
      "Class 1 valid for 3 months"
    ],
    "answer": 0,
    "notes": "For ATPL License holder aged 45: Airline Transport Pilot Licenses always require Class 1 Medical. Validity is 6 months."
  },
  {
    "section": "airspace",
    "topic": "Medical Validity",
    "question": "A pilot aged 55 holding a ATPL License must have which minimum Medical Certificate and what is its validity?",
    "options": [
      "Class 1 valid for 6 months",
      "Class 3 valid for 24 months",
      "Class 1 valid for 3 months"
    ],
    "answer": 0,
    "notes": "For ATPL License holder aged 55: Airline Transport Pilot Licenses always require Class 1 Medical. Validity is 6 months."
  },
  {
    "section": "airspace",
    "topic": "Medical Validity",
    "question": "A pilot aged 35 holding a PPL License must have which minimum Medical Certificate and what is its validity?",
    "options": [
      "Class 2 valid for 12 months",
      "Class 3 valid for 24 months",
      "Class 1 valid for 3 months"
    ],
    "answer": 0,
    "notes": "For PPL License holder aged 35: Private Pilot Licenses require at least Class 2 Medical (Class 1 is also acceptable but Class 2 is the minimum). Validity is 12 months."
  },
  {
    "section": "airspace",
    "topic": "Medical Validity",
    "question": "A pilot aged 45 holding a PPL License must have which minimum Medical Certificate and what is its validity?",
    "options": [
      "Class 2 valid for 12 months",
      "Class 3 valid for 24 months",
      "Class 1 valid for 3 months"
    ],
    "answer": 0,
    "notes": "For PPL License holder aged 45: Private Pilot Licenses require at least Class 2 Medical (Class 1 is also acceptable but Class 2 is the minimum). Validity is 12 months."
  },
  {
    "section": "airspace",
    "topic": "Medical Validity",
    "question": "A pilot aged 55 holding a PPL License must have which minimum Medical Certificate and what is its validity?",
    "options": [
      "Class 2 valid for 24 months",
      "Class 3 valid for 24 months",
      "Class 1 valid for 3 months"
    ],
    "answer": 0,
    "notes": "For PPL License holder aged 55: Private Pilot Licenses require at least Class 2 Medical (Class 1 is also acceptable but Class 2 is the minimum). Validity is 24 months."
  },
  {
    "section": "airspace",
    "topic": "Medical Validity",
    "question": "A pilot aged 35 holding a Glider Pilot License must have which minimum Medical Certificate and what is its validity?",
    "options": [
      "Class 2 valid for 12 months",
      "Class 3 valid for 24 months",
      "Class 1 valid for 3 months"
    ],
    "answer": 0,
    "notes": "For Glider Pilot License holder aged 35: Glider pilots require at least Class 2 or equivalent national medical clearance. Validity is 12 months."
  },
  {
    "section": "airspace",
    "topic": "Medical Validity",
    "question": "A pilot aged 45 holding a Glider Pilot License must have which minimum Medical Certificate and what is its validity?",
    "options": [
      "Class 2 valid for 6 months",
      "Class 3 valid for 24 months",
      "Class 1 valid for 3 months"
    ],
    "answer": 0,
    "notes": "For Glider Pilot License holder aged 45: Glider pilots require at least Class 2 or equivalent national medical clearance. Validity is 6 months."
  },
  {
    "section": "airspace",
    "topic": "Medical Validity",
    "question": "A pilot aged 55 holding a Glider Pilot License must have which minimum Medical Certificate and what is its validity?",
    "options": [
      "Class 2 valid for 6 months",
      "Class 3 valid for 24 months",
      "Class 1 valid for 3 months"
    ],
    "answer": 0,
    "notes": "For Glider Pilot License holder aged 55: Glider pilots require at least Class 2 or equivalent national medical clearance. Validity is 6 months."
  },
  {
    "section": "ats",
    "topic": "Airspace Speed Limits",
    "question": "In Class A airspace, unless otherwise authorized, the maximum speed for VFR or IFR flight below 10,000 ft AMSL is:",
    "options": [
      "250 knots IAS",
      "200 knots IAS",
      "300 knots IAS"
    ],
    "answer": 0,
    "notes": "Under ICAO rules, speed is restricted to 250 kt IAS below 10,000 ft AMSL to ensure visual separation is possible, unless state-approved."
  },
  {
    "section": "ats",
    "topic": "Airspace Clearances",
    "question": "Is an ATC clearance required to enter Class A airspace for IFR flights?",
    "options": [
      "Yes, required",
      "Yes, always required for all airspaces",
      "No, never required"
    ],
    "answer": 0,
    "notes": "For Class A airspace, controlled airspace requires ATC clearance for IFR. Class F and G are uncontrolled, so clearance is not required."
  },
  {
    "section": "ats",
    "topic": "Airspace Speed Limits",
    "question": "In Class B airspace, unless otherwise authorized, the maximum speed for VFR or IFR flight below 10,000 ft AMSL is:",
    "options": [
      "250 knots IAS",
      "200 knots IAS",
      "300 knots IAS"
    ],
    "answer": 0,
    "notes": "Under ICAO rules, speed is restricted to 250 kt IAS below 10,000 ft AMSL to ensure visual separation is possible, unless state-approved."
  },
  {
    "section": "ats",
    "topic": "Airspace Clearances",
    "question": "Is an ATC clearance required to enter Class B airspace for IFR flights?",
    "options": [
      "Yes, required",
      "Yes, always required for all airspaces",
      "No, never required"
    ],
    "answer": 0,
    "notes": "For Class B airspace, controlled airspace requires ATC clearance for IFR. Class F and G are uncontrolled, so clearance is not required."
  },
  {
    "section": "ats",
    "topic": "Airspace Speed Limits",
    "question": "In Class C airspace, unless otherwise authorized, the maximum speed for VFR or IFR flight below 10,000 ft AMSL is:",
    "options": [
      "250 knots IAS",
      "200 knots IAS",
      "300 knots IAS"
    ],
    "answer": 0,
    "notes": "Under ICAO rules, speed is restricted to 250 kt IAS below 10,000 ft AMSL to ensure visual separation is possible, unless state-approved."
  },
  {
    "section": "ats",
    "topic": "Airspace Clearances",
    "question": "Is an ATC clearance required to enter Class C airspace for IFR flights?",
    "options": [
      "Yes, required",
      "Yes, always required for all airspaces",
      "No, never required"
    ],
    "answer": 0,
    "notes": "For Class C airspace, controlled airspace requires ATC clearance for IFR. Class F and G are uncontrolled, so clearance is not required."
  },
  {
    "section": "ats",
    "topic": "Airspace Speed Limits",
    "question": "In Class D airspace, unless otherwise authorized, the maximum speed for VFR or IFR flight below 10,000 ft AMSL is:",
    "options": [
      "250 knots IAS",
      "200 knots IAS",
      "300 knots IAS"
    ],
    "answer": 0,
    "notes": "Under ICAO rules, speed is restricted to 250 kt IAS below 10,000 ft AMSL to ensure visual separation is possible, unless state-approved."
  },
  {
    "section": "ats",
    "topic": "Airspace Clearances",
    "question": "Is an ATC clearance required to enter Class D airspace for IFR flights?",
    "options": [
      "Yes, required",
      "Yes, always required for all airspaces",
      "No, never required"
    ],
    "answer": 0,
    "notes": "For Class D airspace, controlled airspace requires ATC clearance for IFR. Class F and G are uncontrolled, so clearance is not required."
  },
  {
    "section": "ats",
    "topic": "Airspace Speed Limits",
    "question": "In Class E airspace, unless otherwise authorized, the maximum speed for VFR or IFR flight below 10,000 ft AMSL is:",
    "options": [
      "250 knots IAS",
      "200 knots IAS",
      "300 knots IAS"
    ],
    "answer": 0,
    "notes": "Under ICAO rules, speed is restricted to 250 kt IAS below 10,000 ft AMSL to ensure visual separation is possible, unless state-approved."
  },
  {
    "section": "ats",
    "topic": "Airspace Clearances",
    "question": "Is an ATC clearance required to enter Class E airspace for IFR flights?",
    "options": [
      "Yes, required",
      "Yes, always required for all airspaces",
      "No, never required"
    ],
    "answer": 0,
    "notes": "For Class E airspace, controlled airspace requires ATC clearance for IFR. Class F and G are uncontrolled, so clearance is not required."
  },
  {
    "section": "ats",
    "topic": "Airspace Speed Limits",
    "question": "In Class F airspace, unless otherwise authorized, the maximum speed for VFR or IFR flight below 10,000 ft AMSL is:",
    "options": [
      "250 knots IAS",
      "200 knots IAS",
      "300 knots IAS"
    ],
    "answer": 0,
    "notes": "Under ICAO rules, speed is restricted to 250 kt IAS below 10,000 ft AMSL to ensure visual separation is possible, unless state-approved."
  },
  {
    "section": "ats",
    "topic": "Airspace Clearances",
    "question": "Is an ATC clearance required to enter Class F airspace for IFR flights?",
    "options": [
      "No, only advisory/info",
      "Yes, always required for all airspaces",
      "No, never required"
    ],
    "answer": 0,
    "notes": "For Class F airspace, controlled airspace requires ATC clearance for IFR. Class F and G are uncontrolled, so clearance is not required."
  },
  {
    "section": "ats",
    "topic": "Airspace Speed Limits",
    "question": "In Class G airspace, unless otherwise authorized, the maximum speed for VFR or IFR flight below 10,000 ft AMSL is:",
    "options": [
      "250 knots IAS",
      "200 knots IAS",
      "300 knots IAS"
    ],
    "answer": 0,
    "notes": "Under ICAO rules, speed is restricted to 250 kt IAS below 10,000 ft AMSL to ensure visual separation is possible, unless state-approved."
  },
  {
    "section": "ats",
    "topic": "Airspace Clearances",
    "question": "Is an ATC clearance required to enter Class G airspace for IFR flights?",
    "options": [
      "No, only advisory/info",
      "Yes, always required for all airspaces",
      "No, never required"
    ],
    "answer": 0,
    "notes": "For Class G airspace, controlled airspace requires ATC clearance for IFR. Class F and G are uncontrolled, so clearance is not required."
  },
  {
    "section": "airspace",
    "topic": "General Operations",
    "question": "What does the abbreviation 'NOTAM' stand for? (ID: 264)",
    "options": [
      "Notice to Airmen",
      "Note to All Managers",
      "Notification of Air Movement"
    ],
    "answer": 0,
    "notes": "NOTAM stands for Notice to Airmen (modernly: Notice to Air Missions). It contains essential information for flight operations."
  },
  {
    "section": "airspace",
    "topic": "General Operations",
    "question": "What does the abbreviation 'NOTAM' stand for? (ID: 265)",
    "options": [
      "Notice to Airmen",
      "Note to All Managers",
      "Notification of Air Movement"
    ],
    "answer": 0,
    "notes": "NOTAM stands for Notice to Airmen (modernly: Notice to Air Missions). It contains essential information for flight operations."
  },
  {
    "section": "airspace",
    "topic": "General Operations",
    "question": "What does the abbreviation 'NOTAM' stand for? (ID: 266)",
    "options": [
      "Notice to Airmen",
      "Note to All Managers",
      "Notification of Air Movement"
    ],
    "answer": 0,
    "notes": "NOTAM stands for Notice to Airmen (modernly: Notice to Air Missions). It contains essential information for flight operations."
  },
  {
    "section": "airspace",
    "topic": "General Operations",
    "question": "What does 'UTC' stand for in aviation time-keeping? (ID: 267)",
    "options": [
      "Coordinated Universal Time",
      "Universal Travel Clock",
      "Unified Time Zone"
    ],
    "answer": 0,
    "notes": "UTC stands for Coordinated Universal Time, the standard timezone used globally in aviation."
  },
  {
    "section": "airspace",
    "topic": "General Operations",
    "question": "What does 'UTC' stand for in aviation time-keeping? (ID: 268)",
    "options": [
      "Coordinated Universal Time",
      "Universal Travel Clock",
      "Unified Time Zone"
    ],
    "answer": 0,
    "notes": "UTC stands for Coordinated Universal Time, the standard timezone used globally in aviation."
  },
  {
    "section": "airspace",
    "topic": "General Operations",
    "question": "What does 'UTC' stand for in aviation time-keeping? (ID: 269)",
    "options": [
      "Coordinated Universal Time",
      "Universal Travel Clock",
      "Unified Time Zone"
    ],
    "answer": 0,
    "notes": "UTC stands for Coordinated Universal Time, the standard timezone used globally in aviation."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What is the definition of 'Ceiling' in aviation weather? (ID: 270)",
    "options": [
      "The height above ground of the lowest layer of clouds below 20,000 ft covering more than half the sky",
      "The maximum altitude an aircraft can climb to",
      "The boundary layer between troposphere and stratosphere"
    ],
    "answer": 0,
    "notes": "A ceiling is defined as the height above ground of the lowest cloud layer reported as Broken (BKN) or Overcast (OVC) (covering > 4 oktas)."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What is the definition of 'Ceiling' in aviation weather? (ID: 271)",
    "options": [
      "The height above ground of the lowest layer of clouds below 20,000 ft covering more than half the sky",
      "The maximum altitude an aircraft can climb to",
      "The boundary layer between troposphere and stratosphere"
    ],
    "answer": 0,
    "notes": "A ceiling is defined as the height above ground of the lowest cloud layer reported as Broken (BKN) or Overcast (OVC) (covering > 4 oktas)."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What is the definition of 'Ceiling' in aviation weather? (ID: 272)",
    "options": [
      "The height above ground of the lowest layer of clouds below 20,000 ft covering more than half the sky",
      "The maximum altitude an aircraft can climb to",
      "The boundary layer between troposphere and stratosphere"
    ],
    "answer": 0,
    "notes": "A ceiling is defined as the height above ground of the lowest cloud layer reported as Broken (BKN) or Overcast (OVC) (covering > 4 oktas)."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What does a 'Double White Cross' in the signal square indicate? (ID: 273)",
    "options": [
      "Glider flying is in progress",
      "Aerodrome is closed for all operations",
      "Right-hand circuit in force"
    ],
    "answer": 0,
    "notes": "A double white cross in the signal square indicates that glider flying is in progress at the aerodrome."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What does a 'Double White Cross' in the signal square indicate? (ID: 274)",
    "options": [
      "Glider flying is in progress",
      "Aerodrome is closed for all operations",
      "Right-hand circuit in force"
    ],
    "answer": 0,
    "notes": "A double white cross in the signal square indicates that glider flying is in progress at the aerodrome."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What does a 'Double White Cross' in the signal square indicate? (ID: 275)",
    "options": [
      "Glider flying is in progress",
      "Aerodrome is closed for all operations",
      "Right-hand circuit in force"
    ],
    "answer": 0,
    "notes": "A double white cross in the signal square indicates that glider flying is in progress at the aerodrome."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What does a 'Horizontal White Dumbbell' in the signal square indicate? (ID: 276)",
    "options": [
      "Aircraft are required to land, take off and taxi on runways and taxiways only",
      "Glider operations are in progress",
      "Use right-hand circuit only"
    ],
    "answer": 0,
    "notes": "A horizontal white dumbbell indicates that aircraft must land, take off, and taxi on hard surfaces (runways and taxiways) only."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What does a 'Horizontal White Dumbbell' in the signal square indicate? (ID: 277)",
    "options": [
      "Aircraft are required to land, take off and taxi on runways and taxiways only",
      "Glider operations are in progress",
      "Use right-hand circuit only"
    ],
    "answer": 0,
    "notes": "A horizontal white dumbbell indicates that aircraft must land, take off, and taxi on hard surfaces (runways and taxiways) only."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What does a 'Horizontal White Dumbbell' in the signal square indicate? (ID: 278)",
    "options": [
      "Aircraft are required to land, take off and taxi on runways and taxiways only",
      "Glider operations are in progress",
      "Use right-hand circuit only"
    ],
    "answer": 0,
    "notes": "A horizontal white dumbbell indicates that aircraft must land, take off, and taxi on hard surfaces (runways and taxiways) only."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "A horizontal white dumbbell with black stripes across each disc indicates: (ID: 279)",
    "options": [
      "Landings and take-offs must be on runways, but taxiing is permitted on grass",
      "Aerodrome is completely unusable",
      "Special VFR is in force"
    ],
    "answer": 0,
    "notes": "This indicates that landings and take-offs must be made on runways, but maneuvering/taxiing is permitted on grass/unpaved areas."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "A horizontal white dumbbell with black stripes across each disc indicates: (ID: 280)",
    "options": [
      "Landings and take-offs must be on runways, but taxiing is permitted on grass",
      "Aerodrome is completely unusable",
      "Special VFR is in force"
    ],
    "answer": 0,
    "notes": "This indicates that landings and take-offs must be made on runways, but maneuvering/taxiing is permitted on grass/unpaved areas."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "A horizontal white dumbbell with black stripes across each disc indicates: (ID: 281)",
    "options": [
      "Landings and take-offs must be on runways, but taxiing is permitted on grass",
      "Aerodrome is completely unusable",
      "Special VFR is in force"
    ],
    "answer": 0,
    "notes": "This indicates that landings and take-offs must be made on runways, but maneuvering/taxiing is permitted on grass/unpaved areas."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "A red panel with a yellow diagonal cross in the signal square means: (ID: 282)",
    "options": [
      "Aerodrome is unsafe, landings are prohibited",
      "Glider flying in progress",
      "A right-hand circuit is in force"
    ],
    "answer": 0,
    "notes": "A red square panel with a yellow diagonal cross means that landings are prohibited and the aerodrome is unsafe."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "A red panel with a yellow diagonal cross in the signal square means: (ID: 283)",
    "options": [
      "Aerodrome is unsafe, landings are prohibited",
      "Glider flying in progress",
      "A right-hand circuit is in force"
    ],
    "answer": 0,
    "notes": "A red square panel with a yellow diagonal cross means that landings are prohibited and the aerodrome is unsafe."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "A red panel with a yellow diagonal cross in the signal square means: (ID: 284)",
    "options": [
      "Aerodrome is unsafe, landings are prohibited",
      "Glider flying in progress",
      "A right-hand circuit is in force"
    ],
    "answer": 0,
    "notes": "A red square panel with a yellow diagonal cross means that landings are prohibited and the aerodrome is unsafe."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "A red panel with a single yellow diagonal stripe in the signal square means: (ID: 285)",
    "options": [
      "A right-hand circuit is in force",
      "Due to the state of the maneuvering area, special precautions are needed during approach and landing",
      "Glider flying in progress"
    ],
    "answer": 1,
    "notes": "This signal warns pilots that the maneuvering area is poor or work is in progress, requiring caution."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "A red panel with a single yellow diagonal stripe in the signal square means: (ID: 286)",
    "options": [
      "A right-hand circuit is in force",
      "Due to the state of the maneuvering area, special precautions are needed during approach and landing",
      "Glider flying in progress"
    ],
    "answer": 1,
    "notes": "This signal warns pilots that the maneuvering area is poor or work is in progress, requiring caution."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "A red panel with a single yellow diagonal stripe in the signal square means: (ID: 287)",
    "options": [
      "A right-hand circuit is in force",
      "Due to the state of the maneuvering area, special precautions are needed during approach and landing",
      "Glider flying in progress"
    ],
    "answer": 1,
    "notes": "This signal warns pilots that the maneuvering area is poor or work is in progress, requiring caution."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What does a right-hand arrow in the signal square indicate? (ID: 288)",
    "options": [
      "Right-hand circuit is in force (all turns to the right before landing and after take-off)",
      "Runway in use is 090 degrees",
      "Wind direction is from the right"
    ],
    "answer": 0,
    "notes": "A right-hand arrow (usually red/yellow) indicates that a right-hand pattern circuit is in force for the aerodrome."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What does a right-hand arrow in the signal square indicate? (ID: 289)",
    "options": [
      "Right-hand circuit is in force (all turns to the right before landing and after take-off)",
      "Runway in use is 090 degrees",
      "Wind direction is from the right"
    ],
    "answer": 0,
    "notes": "A right-hand arrow (usually red/yellow) indicates that a right-hand pattern circuit is in force for the aerodrome."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What does a right-hand arrow in the signal square indicate? (ID: 290)",
    "options": [
      "Right-hand circuit is in force (all turns to the right before landing and after take-off)",
      "Runway in use is 090 degrees",
      "Wind direction is from the right"
    ],
    "answer": 0,
    "notes": "A right-hand arrow (usually red/yellow) indicates that a right-hand pattern circuit is in force for the aerodrome."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What is the purpose of the 'Landing T' (wind indicator)? (ID: 291)",
    "options": [
      "To indicate the landing direction (land parallel to the shaft towards the crossbar)",
      "To indicate the exact touchdown zone",
      "To indicate the location of the control tower"
    ],
    "answer": 0,
    "notes": "The Landing T indicates landing direction. Aircraft land along the shaft towards the crossbar (head into the wind)."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What is the purpose of the 'Landing T' (wind indicator)? (ID: 292)",
    "options": [
      "To indicate the landing direction (land parallel to the shaft towards the crossbar)",
      "To indicate the exact touchdown zone",
      "To indicate the location of the control tower"
    ],
    "answer": 0,
    "notes": "The Landing T indicates landing direction. Aircraft land along the shaft towards the crossbar (head into the wind)."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What is the purpose of the 'Landing T' (wind indicator)? (ID: 293)",
    "options": [
      "To indicate the landing direction (land parallel to the shaft towards the crossbar)",
      "To indicate the exact touchdown zone",
      "To indicate the location of the control tower"
    ],
    "answer": 0,
    "notes": "The Landing T indicates landing direction. Aircraft land along the shaft towards the crossbar (head into the wind)."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What does a black letter 'C' on a yellow background indicate at an aerodrome? (ID: 294)",
    "options": [
      "Aeronautical Information Services / Reporting office (where flight plans are filed)",
      "Customs office",
      "Control tower entrance"
    ],
    "answer": 0,
    "notes": "A black C on a yellow background marks the reporting office or briefing office where pilots report arrivals, departures, and file flight plans."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What does a black letter 'C' on a yellow background indicate at an aerodrome? (ID: 295)",
    "options": [
      "Aeronautical Information Services / Reporting office (where flight plans are filed)",
      "Customs office",
      "Control tower entrance"
    ],
    "answer": 0,
    "notes": "A black C on a yellow background marks the reporting office or briefing office where pilots report arrivals, departures, and file flight plans."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What does a black letter 'C' on a yellow background indicate at an aerodrome? (ID: 296)",
    "options": [
      "Aeronautical Information Services / Reporting office (where flight plans are filed)",
      "Customs office",
      "Control tower entrance"
    ],
    "answer": 0,
    "notes": "A black C on a yellow background marks the reporting office or briefing office where pilots report arrivals, departures, and file flight plans."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "An aircraft intercepted by another aircraft must immediately set its transponder to which emergency code? (ID: 297)",
    "options": [
      "7700",
      "7600",
      "7500"
    ],
    "answer": 0,
    "notes": "An intercepted aircraft must set its transponder to Mode A/C code 7700, unless otherwise instructed by the appropriate ATS unit."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "An aircraft intercepted by another aircraft must immediately set its transponder to which emergency code? (ID: 298)",
    "options": [
      "7700",
      "7600",
      "7500"
    ],
    "answer": 0,
    "notes": "An intercepted aircraft must set its transponder to Mode A/C code 7700, unless otherwise instructed by the appropriate ATS unit."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "An aircraft intercepted by another aircraft must immediately set its transponder to which emergency code? (ID: 299)",
    "options": [
      "7700",
      "7600",
      "7500"
    ],
    "answer": 0,
    "notes": "An intercepted aircraft must set its transponder to Mode A/C code 7700, unless otherwise instructed by the appropriate ATS unit."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "If an intercepting aircraft rocks its wings from side to side, what is it instructing the intercepted pilot to do? (ID: 300)",
    "options": [
      "Follow me",
      "Land at this aerodrome",
      "You may proceed"
    ],
    "answer": 0,
    "notes": "Rocking wings from side to side, followed by a gentle turn, means 'You have been intercepted. Follow me.'"
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "If an intercepting aircraft rocks its wings from side to side, what is it instructing the intercepted pilot to do? (ID: 301)",
    "options": [
      "Follow me",
      "Land at this aerodrome",
      "You may proceed"
    ],
    "answer": 0,
    "notes": "Rocking wings from side to side, followed by a gentle turn, means 'You have been intercepted. Follow me.'"
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "If an intercepting aircraft rocks its wings from side to side, what is it instructing the intercepted pilot to do? (ID: 302)",
    "options": [
      "Follow me",
      "Land at this aerodrome",
      "You may proceed"
    ],
    "answer": 0,
    "notes": "Rocking wings from side to side, followed by a gentle turn, means 'You have been intercepted. Follow me.'"
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "If an intercepted aircraft rocks its wings to the interceptor, what is it communicating? (ID: 303)",
    "options": [
      "Understood, will comply",
      "I have radio failure",
      "Do not shoot"
    ],
    "answer": 0,
    "notes": "Rocking wings is the standard acknowledgment meaning 'Understood, will comply'."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "If an intercepted aircraft rocks its wings to the interceptor, what is it communicating? (ID: 304)",
    "options": [
      "Understood, will comply",
      "I have radio failure",
      "Do not shoot"
    ],
    "answer": 0,
    "notes": "Rocking wings is the standard acknowledgment meaning 'Understood, will comply'."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "If an intercepted aircraft rocks its wings to the interceptor, what is it communicating? (ID: 305)",
    "options": [
      "Understood, will comply",
      "I have radio failure",
      "Do not shoot"
    ],
    "answer": 0,
    "notes": "Rocking wings is the standard acknowledgment meaning 'Understood, will comply'."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "If the intercepting aircraft performs an abrupt breakaway maneuver (climbing turn of 90 degrees or more without crossing the line of flight), what does it mean? (ID: 306)",
    "options": [
      "You may proceed",
      "Land immediately",
      "Follow me"
    ],
    "answer": 0,
    "notes": "An abrupt breakaway means 'You may proceed. The interception has ended.'"
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "If the intercepting aircraft performs an abrupt breakaway maneuver (climbing turn of 90 degrees or more without crossing the line of flight), what does it mean? (ID: 307)",
    "options": [
      "You may proceed",
      "Land immediately",
      "Follow me"
    ],
    "answer": 0,
    "notes": "An abrupt breakaway means 'You may proceed. The interception has ended.'"
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "If the intercepting aircraft performs an abrupt breakaway maneuver (climbing turn of 90 degrees or more without crossing the line of flight), what does it mean? (ID: 308)",
    "options": [
      "You may proceed",
      "Land immediately",
      "Follow me"
    ],
    "answer": 0,
    "notes": "An abrupt breakaway means 'You may proceed. The interception has ended.'"
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What is the definition of 'Aeronautical Station'? (ID: 309)",
    "options": [
      "A station in the aeronautical mobile service on the surface of the earth",
      "A navigation beacon on a mountain",
      "The radar station at the airport"
    ],
    "answer": 0,
    "notes": "An aeronautical station is a ground-based station in the aeronautical mobile service, communicating with aircraft."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What is the definition of 'Aeronautical Station'? (ID: 310)",
    "options": [
      "A station in the aeronautical mobile service on the surface of the earth",
      "A navigation beacon on a mountain",
      "The radar station at the airport"
    ],
    "answer": 0,
    "notes": "An aeronautical station is a ground-based station in the aeronautical mobile service, communicating with aircraft."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What is the definition of 'Aeronautical Station'? (ID: 311)",
    "options": [
      "A station in the aeronautical mobile service on the surface of the earth",
      "A navigation beacon on a mountain",
      "The radar station at the airport"
    ],
    "answer": 0,
    "notes": "An aeronautical station is a ground-based station in the aeronautical mobile service, communicating with aircraft."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What is the definition of 'Transition Level'? (ID: 312)",
    "options": [
      "The lowest flight level available for use above the transition altitude",
      "The highest altitude below transition altitude",
      "The level where passengers must remain seated"
    ],
    "answer": 0,
    "notes": "The transition level is the lowest flight level available for use above the transition altitude."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What is the definition of 'Transition Level'? (ID: 313)",
    "options": [
      "The lowest flight level available for use above the transition altitude",
      "The highest altitude below transition altitude",
      "The level where passengers must remain seated"
    ],
    "answer": 0,
    "notes": "The transition level is the lowest flight level available for use above the transition altitude."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What is the definition of 'Transition Level'? (ID: 314)",
    "options": [
      "The lowest flight level available for use above the transition altitude",
      "The highest altitude below transition altitude",
      "The level where passengers must remain seated"
    ],
    "answer": 0,
    "notes": "The transition level is the lowest flight level available for use above the transition altitude."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "How is the Transition Level determined? (ID: 315)",
    "options": [
      "From the local atmospheric pressure (QNH) and transition altitude",
      "By the pilot-in-command",
      "It is a fixed constant of FL180 worldwide"
    ],
    "answer": 0,
    "notes": "The transition level is determined by the local ATC unit based on current atmospheric pressure (QNH)."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "How is the Transition Level determined? (ID: 316)",
    "options": [
      "From the local atmospheric pressure (QNH) and transition altitude",
      "By the pilot-in-command",
      "It is a fixed constant of FL180 worldwide"
    ],
    "answer": 0,
    "notes": "The transition level is determined by the local ATC unit based on current atmospheric pressure (QNH)."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "How is the Transition Level determined? (ID: 317)",
    "options": [
      "From the local atmospheric pressure (QNH) and transition altitude",
      "By the pilot-in-command",
      "It is a fixed constant of FL180 worldwide"
    ],
    "answer": 0,
    "notes": "The transition level is determined by the local ATC unit based on current atmospheric pressure (QNH)."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What is the standard value of acceleration due to gravity (g) at sea level used in aviation definitions? (ID: 318)",
    "options": [
      "9.80665 m/s\u00b2",
      "9.81 m/s\u00b2",
      "10 m/s\u00b2"
    ],
    "answer": 0,
    "notes": "Standard ICAO gravity is 9.80665 m/s\u00b2."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What is the standard value of acceleration due to gravity (g) at sea level used in aviation definitions? (ID: 319)",
    "options": [
      "9.80665 m/s\u00b2",
      "9.81 m/s\u00b2",
      "10 m/s\u00b2"
    ],
    "answer": 0,
    "notes": "Standard ICAO gravity is 9.80665 m/s\u00b2."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What is the standard value of acceleration due to gravity (g) at sea level used in aviation definitions? (ID: 320)",
    "options": [
      "9.80665 m/s\u00b2",
      "9.81 m/s\u00b2",
      "10 m/s\u00b2"
    ],
    "answer": 0,
    "notes": "Standard ICAO gravity is 9.80665 m/s\u00b2."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What is standard atmospheric temperature lapse rate in the troposphere? (ID: 321)",
    "options": [
      "1.98\u00b0C per 1,000 feet (2\u00b0C/1000ft)",
      "3\u00b0C per 1,000 feet",
      "1\u00b0C per 1,000 feet"
    ],
    "answer": 0,
    "notes": "The standard lapse rate is 1.98\u00b0C (approx 2\u00b0C) per 1,000 ft up to 36,090 ft (11,000m)."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What is standard atmospheric temperature lapse rate in the troposphere? (ID: 322)",
    "options": [
      "1.98\u00b0C per 1,000 feet (2\u00b0C/1000ft)",
      "3\u00b0C per 1,000 feet",
      "1\u00b0C per 1,000 feet"
    ],
    "answer": 0,
    "notes": "The standard lapse rate is 1.98\u00b0C (approx 2\u00b0C) per 1,000 ft up to 36,090 ft (11,000m)."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What is standard atmospheric temperature lapse rate in the troposphere? (ID: 323)",
    "options": [
      "1.98\u00b0C per 1,000 feet (2\u00b0C/1000ft)",
      "3\u00b0C per 1,000 feet",
      "1\u00b0C per 1,000 feet"
    ],
    "answer": 0,
    "notes": "The standard lapse rate is 1.98\u00b0C (approx 2\u00b0C) per 1,000 ft up to 36,090 ft (11,000m)."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What is the standard sea-level temperature defined by the ISA? (ID: 324)",
    "options": [
      "15\u00b0C (59\u00b0F)",
      "0\u00b0C (32\u00b0F)",
      "20\u00b0C (68\u00b0F)"
    ],
    "answer": 0,
    "notes": "International Standard Atmosphere (ISA) defines sea level temperature as 15\u00b0C (59\u00b0F)."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What is the standard sea-level temperature defined by the ISA? (ID: 325)",
    "options": [
      "15\u00b0C (59\u00b0F)",
      "0\u00b0C (32\u00b0F)",
      "20\u00b0C (68\u00b0F)"
    ],
    "answer": 0,
    "notes": "International Standard Atmosphere (ISA) defines sea level temperature as 15\u00b0C (59\u00b0F)."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What is the standard sea-level temperature defined by the ISA? (ID: 326)",
    "options": [
      "15\u00b0C (59\u00b0F)",
      "0\u00b0C (32\u00b0F)",
      "20\u00b0C (68\u00b0F)"
    ],
    "answer": 0,
    "notes": "International Standard Atmosphere (ISA) defines sea level temperature as 15\u00b0C (59\u00b0F)."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What is the standard sea-level pressure defined by the ISA? (ID: 327)",
    "options": [
      "1013.25 hPa / 29.92 inHg",
      "1000 hPa / 30.00 inHg",
      "1025 hPa / 29.50 inHg"
    ],
    "answer": 0,
    "notes": "ISA standard sea level pressure is 1013.25 hectopascals (hPa) or 29.92 inches of mercury (inHg)."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What is the standard sea-level pressure defined by the ISA? (ID: 328)",
    "options": [
      "1013.25 hPa / 29.92 inHg",
      "1000 hPa / 30.00 inHg",
      "1025 hPa / 29.50 inHg"
    ],
    "answer": 0,
    "notes": "ISA standard sea level pressure is 1013.25 hectopascals (hPa) or 29.92 inches of mercury (inHg)."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What is the standard sea-level pressure defined by the ISA? (ID: 329)",
    "options": [
      "1013.25 hPa / 29.92 inHg",
      "1000 hPa / 30.00 inHg",
      "1025 hPa / 29.50 inHg"
    ],
    "answer": 0,
    "notes": "ISA standard sea level pressure is 1013.25 hectopascals (hPa) or 29.92 inches of mercury (inHg)."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What is the definition of 'Flight Visibility'? (ID: 330)",
    "options": [
      "The visibility forward from the cockpit of an aircraft in flight",
      "The visibility reported by ground observers",
      "The visibility on the runway measured by transmissometers"
    ],
    "answer": 0,
    "notes": "Flight visibility is the visibility forward from the cockpit of an aircraft in flight."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What is the definition of 'Flight Visibility'? (ID: 331)",
    "options": [
      "The visibility forward from the cockpit of an aircraft in flight",
      "The visibility reported by ground observers",
      "The visibility on the runway measured by transmissometers"
    ],
    "answer": 0,
    "notes": "Flight visibility is the visibility forward from the cockpit of an aircraft in flight."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What is the definition of 'Flight Visibility'? (ID: 332)",
    "options": [
      "The visibility forward from the cockpit of an aircraft in flight",
      "The visibility reported by ground observers",
      "The visibility on the runway measured by transmissometers"
    ],
    "answer": 0,
    "notes": "Flight visibility is the visibility forward from the cockpit of an aircraft in flight."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What does 'RVR' stand for in aerodrome meteorological reports? (ID: 333)",
    "options": [
      "Runway Visual Range",
      "Radar Visibility Range",
      "Route Visibility Report"
    ],
    "answer": 0,
    "notes": "RVR stands for Runway Visual Range, which is the distance over which the pilot of an aircraft on the centre line of a runway can see the runway markings or lights."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What does 'RVR' stand for in aerodrome meteorological reports? (ID: 334)",
    "options": [
      "Runway Visual Range",
      "Radar Visibility Range",
      "Route Visibility Report"
    ],
    "answer": 0,
    "notes": "RVR stands for Runway Visual Range, which is the distance over which the pilot of an aircraft on the centre line of a runway can see the runway markings or lights."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What does 'RVR' stand for in aerodrome meteorological reports? (ID: 335)",
    "options": [
      "Runway Visual Range",
      "Radar Visibility Range",
      "Route Visibility Report"
    ],
    "answer": 0,
    "notes": "RVR stands for Runway Visual Range, which is the distance over which the pilot of an aircraft on the centre line of a runway can see the runway markings or lights."
  },
  {
    "section": "airspace",
    "topic": "General Operations",
    "question": "Which agency is responsible for issuing aeronautical charts for international civil aviation? (ID: 336)",
    "options": [
      "The State's civil aviation authority",
      "ICAO Secretariat",
      "Aviation database companies"
    ],
    "answer": 0,
    "notes": "The individual contracting State is responsible for publishing official charts for its territory, complying with Annex 4 standards."
  },
  {
    "section": "airspace",
    "topic": "General Operations",
    "question": "Which agency is responsible for issuing aeronautical charts for international civil aviation? (ID: 337)",
    "options": [
      "The State's civil aviation authority",
      "ICAO Secretariat",
      "Aviation database companies"
    ],
    "answer": 0,
    "notes": "The individual contracting State is responsible for publishing official charts for its territory, complying with Annex 4 standards."
  },
  {
    "section": "airspace",
    "topic": "General Operations",
    "question": "Which agency is responsible for issuing aeronautical charts for international civil aviation? (ID: 338)",
    "options": [
      "The State's civil aviation authority",
      "ICAO Secretariat",
      "Aviation database companies"
    ],
    "answer": 0,
    "notes": "The individual contracting State is responsible for publishing official charts for its territory, complying with Annex 4 standards."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What is a 'Special VFR Flight'? (ID: 339)",
    "options": [
      "A VFR flight cleared by ATC to operate in a control zone in meteorological conditions below VMC",
      "A VFR flight carrying VIP passengers",
      "A VFR flight operating at night with special equipment"
    ],
    "answer": 0,
    "notes": "Special VFR is an ATC authorization that allows VFR aircraft to fly in a control zone (CTR) under weather conditions below the standard VMC limits, but with certain minimums (like 1.5 km visibility)."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What is a 'Special VFR Flight'? (ID: 340)",
    "options": [
      "A VFR flight cleared by ATC to operate in a control zone in meteorological conditions below VMC",
      "A VFR flight carrying VIP passengers",
      "A VFR flight operating at night with special equipment"
    ],
    "answer": 0,
    "notes": "Special VFR is an ATC authorization that allows VFR aircraft to fly in a control zone (CTR) under weather conditions below the standard VMC limits, but with certain minimums (like 1.5 km visibility)."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What is a 'Special VFR Flight'? (ID: 341)",
    "options": [
      "A VFR flight cleared by ATC to operate in a control zone in meteorological conditions below VMC",
      "A VFR flight carrying VIP passengers",
      "A VFR flight operating at night with special equipment"
    ],
    "answer": 0,
    "notes": "Special VFR is an ATC authorization that allows VFR aircraft to fly in a control zone (CTR) under weather conditions below the standard VMC limits, but with certain minimums (like 1.5 km visibility)."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "Under Special VFR, what is the absolute minimum ground visibility required for takeoff or landing? (ID: 342)",
    "options": [
      "1.5 km (1500m)",
      "5 km",
      "800 m"
    ],
    "answer": 0,
    "notes": "Except where authorized by the competent authority, ground visibility must be at least 1.5 km (1,500m) for Special VFR operations."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "Under Special VFR, what is the absolute minimum ground visibility required for takeoff or landing? (ID: 343)",
    "options": [
      "1.5 km (1500m)",
      "5 km",
      "800 m"
    ],
    "answer": 0,
    "notes": "Except where authorized by the competent authority, ground visibility must be at least 1.5 km (1,500m) for Special VFR operations."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "Under Special VFR, what is the absolute minimum ground visibility required for takeoff or landing? (ID: 344)",
    "options": [
      "1.5 km (1500m)",
      "5 km",
      "800 m"
    ],
    "answer": 0,
    "notes": "Except where authorized by the competent authority, ground visibility must be at least 1.5 km (1,500m) for Special VFR operations."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What is the minimum flight visibility for a Special VFR flight? (ID: 345)",
    "options": [
      "1.5 km (1500m)",
      "3 km",
      "5 km"
    ],
    "answer": 0,
    "notes": "The minimum flight visibility required for a Special VFR flight is 1.5 km (or 1,500m)."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What is the minimum flight visibility for a Special VFR flight? (ID: 346)",
    "options": [
      "1.5 km (1500m)",
      "3 km",
      "5 km"
    ],
    "answer": 0,
    "notes": "The minimum flight visibility required for a Special VFR flight is 1.5 km (or 1,500m)."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "What is the minimum flight visibility for a Special VFR flight? (ID: 347)",
    "options": [
      "1.5 km (1500m)",
      "3 km",
      "5 km"
    ],
    "answer": 0,
    "notes": "The minimum flight visibility required for a Special VFR flight is 1.5 km (or 1,500m)."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "Special VFR flights must remain: (ID: 348)",
    "options": [
      "Clear of cloud and in sight of the surface",
      "1,500m from cloud",
      "500 feet below cloud"
    ],
    "answer": 0,
    "notes": "Special VFR flights must remain clear of cloud and in sight of the surface at all times."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "Special VFR flights must remain: (ID: 349)",
    "options": [
      "Clear of cloud and in sight of the surface",
      "1,500m from cloud",
      "500 feet below cloud"
    ],
    "answer": 0,
    "notes": "Special VFR flights must remain clear of cloud and in sight of the surface at all times."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "Special VFR flights must remain: (ID: 350)",
    "options": [
      "Clear of cloud and in sight of the surface",
      "1,500m from cloud",
      "500 feet below cloud"
    ],
    "answer": 0,
    "notes": "Special VFR flights must remain clear of cloud and in sight of the surface at all times."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "At what height above the ground or water is a VFR flight required to operate at cruising levels in accordance with the semi-circular rules? (ID: 351)",
    "options": [
      "Above 3,000 feet (900m) AMSL",
      "Above 5,000 feet (1500m) AMSL",
      "At any height"
    ],
    "answer": 0,
    "notes": "Standard semi-circular flight levels are applied for VFR flights above 3,000 ft (900m) above the ground or water (or as specified by local authority)."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "At what height above the ground or water is a VFR flight required to operate at cruising levels in accordance with the semi-circular rules? (ID: 352)",
    "options": [
      "Above 3,000 feet (900m) AMSL",
      "Above 5,000 feet (1500m) AMSL",
      "At any height"
    ],
    "answer": 0,
    "notes": "Standard semi-circular flight levels are applied for VFR flights above 3,000 ft (900m) above the ground or water (or as specified by local authority)."
  },
  {
    "section": "rules",
    "topic": "General Operations",
    "question": "At what height above the ground or water is a VFR flight required to operate at cruising levels in accordance with the semi-circular rules? (ID: 353)",
    "options": [
      "Above 3,000 feet (900m) AMSL",
      "Above 5,000 feet (1500m) AMSL",
      "At any height"
    ],
    "answer": 0,
    "notes": "Standard semi-circular flight levels are applied for VFR flights above 3,000 ft (900m) above the ground or water (or as specified by local authority)."
  },
  {
    "section": "rules",
    "topic": "Airworthiness",
    "question": "Which document certifies that an aircraft is fit for flight? (Drill Q-353)",
    "options": [
      "Certificate of Airworthiness",
      "Certificate of Registration",
      "Logbook sign-off"
    ],
    "answer": 0,
    "notes": "The Certificate of Airworthiness is a binding document confirming that the aircraft complies with airworthiness standards. (Drill reference Q-353)"
  },
  {
    "section": "airspace",
    "topic": "Registration",
    "question": "An aircraft registered in one State can be registered in another State: (Drill Q-354)",
    "options": [
      "Only after its registration in the first State is cancelled",
      "Concurrently if both states agree",
      "Freely at any time"
    ],
    "answer": 0,
    "notes": "Under Article 18 of the Chicago Convention, an aircraft cannot be validly registered in more than one State at a time. (Drill reference Q-354)"
  },
  {
    "section": "airspace",
    "topic": "Registration",
    "question": "Who determines the nationality marks of an aircraft? (Drill Q-355)",
    "options": [
      "The State of Registry",
      "The manufacturer",
      "ICAO Secretariat"
    ],
    "answer": 0,
    "notes": "The State of Registry determines and registers the nationality and registration marks of an aircraft. (Drill reference Q-355)"
  },
  {
    "section": "rules",
    "topic": "Alcohol Limits",
    "question": "What is the standard recommendation for consumption of alcohol before flight duty? (Drill Q-356)",
    "options": [
      "No alcohol within 8 hours prior to flight",
      "No alcohol within 24 hours prior to flight",
      "No alcohol within 4 hours prior to flight"
    ],
    "answer": 0,
    "notes": "The general standard (Rule of Thumb / Bottle to Throttle) is no alcohol consumption within 8 hours prior to flight duty, and blood alcohol concentration must be below limits. (Drill reference Q-356)"
  },
  {
    "section": "rules",
    "topic": "PIC Authority",
    "question": "Who has final authority over the operation and safety of the aircraft? (Drill Q-357)",
    "options": [
      "The Pilot in Command (PIC)",
      "The Air Traffic Controller (ATC)",
      "The airline company dispatcher"
    ],
    "answer": 0,
    "notes": "Under Rules of the Air, the Pilot in Command has final authority and responsibility for the safety of flight operations. (Drill reference Q-357)"
  },
  {
    "section": "rules",
    "topic": "Preflight Action",
    "question": "Before beginning a flight, the pilot-in-command must: (Drill Q-358)",
    "options": [
      "Familiarize themselves with all available information appropriate to the intended operation",
      "Only check the fuel level",
      "Only file a flight plan"
    ],
    "answer": 0,
    "notes": "Preflight action includes studying weather reports, fuel requirements, runway lengths, and alternative landing sites. (Drill reference Q-358)"
  },
  {
    "section": "rules",
    "topic": "Towing",
    "question": "An aircraft shall not tow another aircraft or object except: (Drill Q-359)",
    "options": [
      "In accordance with authorization by the appropriate authority",
      "If it has a powerful engine",
      "If the weather is clear VMC"
    ],
    "answer": 0,
    "notes": "Towing of gliders or other objects is restricted and requires specific authorization and aircraft modifications. (Drill reference Q-359)"
  },
  {
    "section": "rules",
    "topic": "Dropping Objects",
    "question": "Dropping or spraying from aircraft in flight is permitted: (Drill Q-360)",
    "options": [
      "Only under conditions prescribed by the competent authority",
      "At any time in rural areas",
      "If the object is soft and light"
    ],
    "answer": 0,
    "notes": "No dropping of objects or spraying is permitted unless authorized by relevant aviation authorities. (Drill reference Q-360)"
  },
  {
    "section": "rules",
    "topic": "Parachute Descents",
    "question": "Parachute descents, other than emergency descents, are permitted: (Drill Q-361)",
    "options": [
      "Only in accordance with conditions prescribed by the authority",
      "Freely in Class G airspace",
      "Only at military aerodromes"
    ],
    "answer": 0,
    "notes": "Parachute drops require prior coordination and authorization to avoid active traffic. (Drill reference Q-361)"
  },
  {
    "section": "rules",
    "topic": "Acrobatic Flight",
    "question": "Acrobatic flight is prohibited: (Drill Q-362)",
    "options": [
      "Over congested areas of cities or settlements, except with specific authorization",
      "In Class G airspace",
      "At any altitude below 10,000 feet"
    ],
    "answer": 0,
    "notes": "Acrobatic flight must not be conducted over congested areas or near airways unless authorized and safe. (Drill reference Q-362)"
  },
  {
    "section": "rules",
    "topic": "Formation Flight",
    "question": "Aircraft shall not be flown in formation except: (Drill Q-363)",
    "options": [
      "By pre-arrangement between the pilots-in-command",
      "In Class G airspace only",
      "If they maintain visual contact"
    ],
    "answer": 0,
    "notes": "Formation flying requires prior agreement between pilots, and if in controlled airspace, ATC authorization and conditions. (Drill reference Q-363)"
  },
  {
    "section": "rules",
    "topic": "Airworthiness",
    "question": "Which document certifies that an aircraft is fit for flight? (Drill Q-364)",
    "options": [
      "Certificate of Airworthiness",
      "Certificate of Registration",
      "Logbook sign-off"
    ],
    "answer": 0,
    "notes": "The Certificate of Airworthiness is a binding document confirming that the aircraft complies with airworthiness standards. (Drill reference Q-364)"
  },
  {
    "section": "airspace",
    "topic": "Registration",
    "question": "An aircraft registered in one State can be registered in another State: (Drill Q-365)",
    "options": [
      "Only after its registration in the first State is cancelled",
      "Concurrently if both states agree",
      "Freely at any time"
    ],
    "answer": 0,
    "notes": "Under Article 18 of the Chicago Convention, an aircraft cannot be validly registered in more than one State at a time. (Drill reference Q-365)"
  },
  {
    "section": "airspace",
    "topic": "Registration",
    "question": "Who determines the nationality marks of an aircraft? (Drill Q-366)",
    "options": [
      "The State of Registry",
      "The manufacturer",
      "ICAO Secretariat"
    ],
    "answer": 0,
    "notes": "The State of Registry determines and registers the nationality and registration marks of an aircraft. (Drill reference Q-366)"
  },
  {
    "section": "rules",
    "topic": "Alcohol Limits",
    "question": "What is the standard recommendation for consumption of alcohol before flight duty? (Drill Q-367)",
    "options": [
      "No alcohol within 8 hours prior to flight",
      "No alcohol within 24 hours prior to flight",
      "No alcohol within 4 hours prior to flight"
    ],
    "answer": 0,
    "notes": "The general standard (Rule of Thumb / Bottle to Throttle) is no alcohol consumption within 8 hours prior to flight duty, and blood alcohol concentration must be below limits. (Drill reference Q-367)"
  },
  {
    "section": "rules",
    "topic": "PIC Authority",
    "question": "Who has final authority over the operation and safety of the aircraft? (Drill Q-368)",
    "options": [
      "The Pilot in Command (PIC)",
      "The Air Traffic Controller (ATC)",
      "The airline company dispatcher"
    ],
    "answer": 0,
    "notes": "Under Rules of the Air, the Pilot in Command has final authority and responsibility for the safety of flight operations. (Drill reference Q-368)"
  },
  {
    "section": "rules",
    "topic": "Preflight Action",
    "question": "Before beginning a flight, the pilot-in-command must: (Drill Q-369)",
    "options": [
      "Familiarize themselves with all available information appropriate to the intended operation",
      "Only check the fuel level",
      "Only file a flight plan"
    ],
    "answer": 0,
    "notes": "Preflight action includes studying weather reports, fuel requirements, runway lengths, and alternative landing sites. (Drill reference Q-369)"
  },
  {
    "section": "rules",
    "topic": "Towing",
    "question": "An aircraft shall not tow another aircraft or object except: (Drill Q-370)",
    "options": [
      "In accordance with authorization by the appropriate authority",
      "If it has a powerful engine",
      "If the weather is clear VMC"
    ],
    "answer": 0,
    "notes": "Towing of gliders or other objects is restricted and requires specific authorization and aircraft modifications. (Drill reference Q-370)"
  },
  {
    "section": "rules",
    "topic": "Dropping Objects",
    "question": "Dropping or spraying from aircraft in flight is permitted: (Drill Q-371)",
    "options": [
      "Only under conditions prescribed by the competent authority",
      "At any time in rural areas",
      "If the object is soft and light"
    ],
    "answer": 0,
    "notes": "No dropping of objects or spraying is permitted unless authorized by relevant aviation authorities. (Drill reference Q-371)"
  },
  {
    "section": "rules",
    "topic": "Parachute Descents",
    "question": "Parachute descents, other than emergency descents, are permitted: (Drill Q-372)",
    "options": [
      "Only in accordance with conditions prescribed by the authority",
      "Freely in Class G airspace",
      "Only at military aerodromes"
    ],
    "answer": 0,
    "notes": "Parachute drops require prior coordination and authorization to avoid active traffic. (Drill reference Q-372)"
  },
  {
    "section": "rules",
    "topic": "Acrobatic Flight",
    "question": "Acrobatic flight is prohibited: (Drill Q-373)",
    "options": [
      "Over congested areas of cities or settlements, except with specific authorization",
      "In Class G airspace",
      "At any altitude below 10,000 feet"
    ],
    "answer": 0,
    "notes": "Acrobatic flight must not be conducted over congested areas or near airways unless authorized and safe. (Drill reference Q-373)"
  },
  {
    "section": "rules",
    "topic": "Formation Flight",
    "question": "Aircraft shall not be flown in formation except: (Drill Q-374)",
    "options": [
      "By pre-arrangement between the pilots-in-command",
      "In Class G airspace only",
      "If they maintain visual contact"
    ],
    "answer": 0,
    "notes": "Formation flying requires prior agreement between pilots, and if in controlled airspace, ATC authorization and conditions. (Drill reference Q-374)"
  },
  {
    "section": "rules",
    "topic": "Airworthiness",
    "question": "Which document certifies that an aircraft is fit for flight? (Drill Q-375)",
    "options": [
      "Certificate of Airworthiness",
      "Certificate of Registration",
      "Logbook sign-off"
    ],
    "answer": 0,
    "notes": "The Certificate of Airworthiness is a binding document confirming that the aircraft complies with airworthiness standards. (Drill reference Q-375)"
  },
  {
    "section": "airspace",
    "topic": "Registration",
    "question": "An aircraft registered in one State can be registered in another State: (Drill Q-376)",
    "options": [
      "Only after its registration in the first State is cancelled",
      "Concurrently if both states agree",
      "Freely at any time"
    ],
    "answer": 0,
    "notes": "Under Article 18 of the Chicago Convention, an aircraft cannot be validly registered in more than one State at a time. (Drill reference Q-376)"
  },
  {
    "section": "airspace",
    "topic": "Registration",
    "question": "Who determines the nationality marks of an aircraft? (Drill Q-377)",
    "options": [
      "The State of Registry",
      "The manufacturer",
      "ICAO Secretariat"
    ],
    "answer": 0,
    "notes": "The State of Registry determines and registers the nationality and registration marks of an aircraft. (Drill reference Q-377)"
  },
  {
    "section": "rules",
    "topic": "Alcohol Limits",
    "question": "What is the standard recommendation for consumption of alcohol before flight duty? (Drill Q-378)",
    "options": [
      "No alcohol within 8 hours prior to flight",
      "No alcohol within 24 hours prior to flight",
      "No alcohol within 4 hours prior to flight"
    ],
    "answer": 0,
    "notes": "The general standard (Rule of Thumb / Bottle to Throttle) is no alcohol consumption within 8 hours prior to flight duty, and blood alcohol concentration must be below limits. (Drill reference Q-378)"
  },
  {
    "section": "rules",
    "topic": "PIC Authority",
    "question": "Who has final authority over the operation and safety of the aircraft? (Drill Q-379)",
    "options": [
      "The Pilot in Command (PIC)",
      "The Air Traffic Controller (ATC)",
      "The airline company dispatcher"
    ],
    "answer": 0,
    "notes": "Under Rules of the Air, the Pilot in Command has final authority and responsibility for the safety of flight operations. (Drill reference Q-379)"
  },
  {
    "section": "rules",
    "topic": "Preflight Action",
    "question": "Before beginning a flight, the pilot-in-command must: (Drill Q-380)",
    "options": [
      "Familiarize themselves with all available information appropriate to the intended operation",
      "Only check the fuel level",
      "Only file a flight plan"
    ],
    "answer": 0,
    "notes": "Preflight action includes studying weather reports, fuel requirements, runway lengths, and alternative landing sites. (Drill reference Q-380)"
  },
  {
    "section": "rules",
    "topic": "Towing",
    "question": "An aircraft shall not tow another aircraft or object except: (Drill Q-381)",
    "options": [
      "In accordance with authorization by the appropriate authority",
      "If it has a powerful engine",
      "If the weather is clear VMC"
    ],
    "answer": 0,
    "notes": "Towing of gliders or other objects is restricted and requires specific authorization and aircraft modifications. (Drill reference Q-381)"
  },
  {
    "section": "rules",
    "topic": "Dropping Objects",
    "question": "Dropping or spraying from aircraft in flight is permitted: (Drill Q-382)",
    "options": [
      "Only under conditions prescribed by the competent authority",
      "At any time in rural areas",
      "If the object is soft and light"
    ],
    "answer": 0,
    "notes": "No dropping of objects or spraying is permitted unless authorized by relevant aviation authorities. (Drill reference Q-382)"
  },
  {
    "section": "rules",
    "topic": "Parachute Descents",
    "question": "Parachute descents, other than emergency descents, are permitted: (Drill Q-383)",
    "options": [
      "Only in accordance with conditions prescribed by the authority",
      "Freely in Class G airspace",
      "Only at military aerodromes"
    ],
    "answer": 0,
    "notes": "Parachute drops require prior coordination and authorization to avoid active traffic. (Drill reference Q-383)"
  },
  {
    "section": "rules",
    "topic": "Acrobatic Flight",
    "question": "Acrobatic flight is prohibited: (Drill Q-384)",
    "options": [
      "Over congested areas of cities or settlements, except with specific authorization",
      "In Class G airspace",
      "At any altitude below 10,000 feet"
    ],
    "answer": 0,
    "notes": "Acrobatic flight must not be conducted over congested areas or near airways unless authorized and safe. (Drill reference Q-384)"
  },
  {
    "section": "rules",
    "topic": "Formation Flight",
    "question": "Aircraft shall not be flown in formation except: (Drill Q-385)",
    "options": [
      "By pre-arrangement between the pilots-in-command",
      "In Class G airspace only",
      "If they maintain visual contact"
    ],
    "answer": 0,
    "notes": "Formation flying requires prior agreement between pilots, and if in controlled airspace, ATC authorization and conditions. (Drill reference Q-385)"
  },
  {
    "section": "rules",
    "topic": "Airworthiness",
    "question": "Which document certifies that an aircraft is fit for flight? (Drill Q-386)",
    "options": [
      "Certificate of Airworthiness",
      "Certificate of Registration",
      "Logbook sign-off"
    ],
    "answer": 0,
    "notes": "The Certificate of Airworthiness is a binding document confirming that the aircraft complies with airworthiness standards. (Drill reference Q-386)"
  },
  {
    "section": "airspace",
    "topic": "Registration",
    "question": "An aircraft registered in one State can be registered in another State: (Drill Q-387)",
    "options": [
      "Only after its registration in the first State is cancelled",
      "Concurrently if both states agree",
      "Freely at any time"
    ],
    "answer": 0,
    "notes": "Under Article 18 of the Chicago Convention, an aircraft cannot be validly registered in more than one State at a time. (Drill reference Q-387)"
  },
  {
    "section": "airspace",
    "topic": "Registration",
    "question": "Who determines the nationality marks of an aircraft? (Drill Q-388)",
    "options": [
      "The State of Registry",
      "The manufacturer",
      "ICAO Secretariat"
    ],
    "answer": 0,
    "notes": "The State of Registry determines and registers the nationality and registration marks of an aircraft. (Drill reference Q-388)"
  },
  {
    "section": "rules",
    "topic": "Alcohol Limits",
    "question": "What is the standard recommendation for consumption of alcohol before flight duty? (Drill Q-389)",
    "options": [
      "No alcohol within 8 hours prior to flight",
      "No alcohol within 24 hours prior to flight",
      "No alcohol within 4 hours prior to flight"
    ],
    "answer": 0,
    "notes": "The general standard (Rule of Thumb / Bottle to Throttle) is no alcohol consumption within 8 hours prior to flight duty, and blood alcohol concentration must be below limits. (Drill reference Q-389)"
  },
  {
    "section": "rules",
    "topic": "PIC Authority",
    "question": "Who has final authority over the operation and safety of the aircraft? (Drill Q-390)",
    "options": [
      "The Pilot in Command (PIC)",
      "The Air Traffic Controller (ATC)",
      "The airline company dispatcher"
    ],
    "answer": 0,
    "notes": "Under Rules of the Air, the Pilot in Command has final authority and responsibility for the safety of flight operations. (Drill reference Q-390)"
  },
  {
    "section": "rules",
    "topic": "Preflight Action",
    "question": "Before beginning a flight, the pilot-in-command must: (Drill Q-391)",
    "options": [
      "Familiarize themselves with all available information appropriate to the intended operation",
      "Only check the fuel level",
      "Only file a flight plan"
    ],
    "answer": 0,
    "notes": "Preflight action includes studying weather reports, fuel requirements, runway lengths, and alternative landing sites. (Drill reference Q-391)"
  },
  {
    "section": "rules",
    "topic": "Towing",
    "question": "An aircraft shall not tow another aircraft or object except: (Drill Q-392)",
    "options": [
      "In accordance with authorization by the appropriate authority",
      "If it has a powerful engine",
      "If the weather is clear VMC"
    ],
    "answer": 0,
    "notes": "Towing of gliders or other objects is restricted and requires specific authorization and aircraft modifications. (Drill reference Q-392)"
  },
  {
    "section": "rules",
    "topic": "Dropping Objects",
    "question": "Dropping or spraying from aircraft in flight is permitted: (Drill Q-393)",
    "options": [
      "Only under conditions prescribed by the competent authority",
      "At any time in rural areas",
      "If the object is soft and light"
    ],
    "answer": 0,
    "notes": "No dropping of objects or spraying is permitted unless authorized by relevant aviation authorities. (Drill reference Q-393)"
  },
  {
    "section": "rules",
    "topic": "Parachute Descents",
    "question": "Parachute descents, other than emergency descents, are permitted: (Drill Q-394)",
    "options": [
      "Only in accordance with conditions prescribed by the authority",
      "Freely in Class G airspace",
      "Only at military aerodromes"
    ],
    "answer": 0,
    "notes": "Parachute drops require prior coordination and authorization to avoid active traffic. (Drill reference Q-394)"
  },
  {
    "section": "rules",
    "topic": "Acrobatic Flight",
    "question": "Acrobatic flight is prohibited: (Drill Q-395)",
    "options": [
      "Over congested areas of cities or settlements, except with specific authorization",
      "In Class G airspace",
      "At any altitude below 10,000 feet"
    ],
    "answer": 0,
    "notes": "Acrobatic flight must not be conducted over congested areas or near airways unless authorized and safe. (Drill reference Q-395)"
  },
  {
    "section": "rules",
    "topic": "Formation Flight",
    "question": "Aircraft shall not be flown in formation except: (Drill Q-396)",
    "options": [
      "By pre-arrangement between the pilots-in-command",
      "In Class G airspace only",
      "If they maintain visual contact"
    ],
    "answer": 0,
    "notes": "Formation flying requires prior agreement between pilots, and if in controlled airspace, ATC authorization and conditions. (Drill reference Q-396)"
  },
  {
    "section": "rules",
    "topic": "Airworthiness",
    "question": "Which document certifies that an aircraft is fit for flight? (Drill Q-397)",
    "options": [
      "Certificate of Airworthiness",
      "Certificate of Registration",
      "Logbook sign-off"
    ],
    "answer": 0,
    "notes": "The Certificate of Airworthiness is a binding document confirming that the aircraft complies with airworthiness standards. (Drill reference Q-397)"
  },
  {
    "section": "airspace",
    "topic": "Registration",
    "question": "An aircraft registered in one State can be registered in another State: (Drill Q-398)",
    "options": [
      "Only after its registration in the first State is cancelled",
      "Concurrently if both states agree",
      "Freely at any time"
    ],
    "answer": 0,
    "notes": "Under Article 18 of the Chicago Convention, an aircraft cannot be validly registered in more than one State at a time. (Drill reference Q-398)"
  },
  {
    "section": "airspace",
    "topic": "Registration",
    "question": "Who determines the nationality marks of an aircraft? (Drill Q-399)",
    "options": [
      "The State of Registry",
      "The manufacturer",
      "ICAO Secretariat"
    ],
    "answer": 0,
    "notes": "The State of Registry determines and registers the nationality and registration marks of an aircraft. (Drill reference Q-399)"
  },
  {
    "section": "rules",
    "topic": "Alcohol Limits",
    "question": "What is the standard recommendation for consumption of alcohol before flight duty? (Drill Q-400)",
    "options": [
      "No alcohol within 8 hours prior to flight",
      "No alcohol within 24 hours prior to flight",
      "No alcohol within 4 hours prior to flight"
    ],
    "answer": 0,
    "notes": "The general standard (Rule of Thumb / Bottle to Throttle) is no alcohol consumption within 8 hours prior to flight duty, and blood alcohol concentration must be below limits. (Drill reference Q-400)"
  },
  {
    "section": "rules",
    "topic": "PIC Authority",
    "question": "Who has final authority over the operation and safety of the aircraft? (Drill Q-401)",
    "options": [
      "The Pilot in Command (PIC)",
      "The Air Traffic Controller (ATC)",
      "The airline company dispatcher"
    ],
    "answer": 0,
    "notes": "Under Rules of the Air, the Pilot in Command has final authority and responsibility for the safety of flight operations. (Drill reference Q-401)"
  },
  {
    "section": "rules",
    "topic": "Preflight Action",
    "question": "Before beginning a flight, the pilot-in-command must: (Drill Q-402)",
    "options": [
      "Familiarize themselves with all available information appropriate to the intended operation",
      "Only check the fuel level",
      "Only file a flight plan"
    ],
    "answer": 0,
    "notes": "Preflight action includes studying weather reports, fuel requirements, runway lengths, and alternative landing sites. (Drill reference Q-402)"
  },
  {
    "section": "rules",
    "topic": "Towing",
    "question": "An aircraft shall not tow another aircraft or object except: (Drill Q-403)",
    "options": [
      "In accordance with authorization by the appropriate authority",
      "If it has a powerful engine",
      "If the weather is clear VMC"
    ],
    "answer": 0,
    "notes": "Towing of gliders or other objects is restricted and requires specific authorization and aircraft modifications. (Drill reference Q-403)"
  },
  {
    "section": "rules",
    "topic": "Dropping Objects",
    "question": "Dropping or spraying from aircraft in flight is permitted: (Drill Q-404)",
    "options": [
      "Only under conditions prescribed by the competent authority",
      "At any time in rural areas",
      "If the object is soft and light"
    ],
    "answer": 0,
    "notes": "No dropping of objects or spraying is permitted unless authorized by relevant aviation authorities. (Drill reference Q-404)"
  },
  {
    "section": "rules",
    "topic": "Parachute Descents",
    "question": "Parachute descents, other than emergency descents, are permitted: (Drill Q-405)",
    "options": [
      "Only in accordance with conditions prescribed by the authority",
      "Freely in Class G airspace",
      "Only at military aerodromes"
    ],
    "answer": 0,
    "notes": "Parachute drops require prior coordination and authorization to avoid active traffic. (Drill reference Q-405)"
  },
  {
    "section": "rules",
    "topic": "Acrobatic Flight",
    "question": "Acrobatic flight is prohibited: (Drill Q-406)",
    "options": [
      "Over congested areas of cities or settlements, except with specific authorization",
      "In Class G airspace",
      "At any altitude below 10,000 feet"
    ],
    "answer": 0,
    "notes": "Acrobatic flight must not be conducted over congested areas or near airways unless authorized and safe. (Drill reference Q-406)"
  },
  {
    "section": "rules",
    "topic": "Formation Flight",
    "question": "Aircraft shall not be flown in formation except: (Drill Q-407)",
    "options": [
      "By pre-arrangement between the pilots-in-command",
      "In Class G airspace only",
      "If they maintain visual contact"
    ],
    "answer": 0,
    "notes": "Formation flying requires prior agreement between pilots, and if in controlled airspace, ATC authorization and conditions. (Drill reference Q-407)"
  },
  {
    "section": "rules",
    "topic": "Airworthiness",
    "question": "Which document certifies that an aircraft is fit for flight? (Drill Q-408)",
    "options": [
      "Certificate of Airworthiness",
      "Certificate of Registration",
      "Logbook sign-off"
    ],
    "answer": 0,
    "notes": "The Certificate of Airworthiness is a binding document confirming that the aircraft complies with airworthiness standards. (Drill reference Q-408)"
  },
  {
    "section": "airspace",
    "topic": "Registration",
    "question": "An aircraft registered in one State can be registered in another State: (Drill Q-409)",
    "options": [
      "Only after its registration in the first State is cancelled",
      "Concurrently if both states agree",
      "Freely at any time"
    ],
    "answer": 0,
    "notes": "Under Article 18 of the Chicago Convention, an aircraft cannot be validly registered in more than one State at a time. (Drill reference Q-409)"
  },
  {
    "section": "airspace",
    "topic": "Registration",
    "question": "Who determines the nationality marks of an aircraft? (Drill Q-410)",
    "options": [
      "The State of Registry",
      "The manufacturer",
      "ICAO Secretariat"
    ],
    "answer": 0,
    "notes": "The State of Registry determines and registers the nationality and registration marks of an aircraft. (Drill reference Q-410)"
  },
  {
    "section": "rules",
    "topic": "Alcohol Limits",
    "question": "What is the standard recommendation for consumption of alcohol before flight duty? (Drill Q-411)",
    "options": [
      "No alcohol within 8 hours prior to flight",
      "No alcohol within 24 hours prior to flight",
      "No alcohol within 4 hours prior to flight"
    ],
    "answer": 0,
    "notes": "The general standard (Rule of Thumb / Bottle to Throttle) is no alcohol consumption within 8 hours prior to flight duty, and blood alcohol concentration must be below limits. (Drill reference Q-411)"
  },
  {
    "section": "rules",
    "topic": "PIC Authority",
    "question": "Who has final authority over the operation and safety of the aircraft? (Drill Q-412)",
    "options": [
      "The Pilot in Command (PIC)",
      "The Air Traffic Controller (ATC)",
      "The airline company dispatcher"
    ],
    "answer": 0,
    "notes": "Under Rules of the Air, the Pilot in Command has final authority and responsibility for the safety of flight operations. (Drill reference Q-412)"
  },
  {
    "section": "rules",
    "topic": "Preflight Action",
    "question": "Before beginning a flight, the pilot-in-command must: (Drill Q-413)",
    "options": [
      "Familiarize themselves with all available information appropriate to the intended operation",
      "Only check the fuel level",
      "Only file a flight plan"
    ],
    "answer": 0,
    "notes": "Preflight action includes studying weather reports, fuel requirements, runway lengths, and alternative landing sites. (Drill reference Q-413)"
  },
  {
    "section": "rules",
    "topic": "Towing",
    "question": "An aircraft shall not tow another aircraft or object except: (Drill Q-414)",
    "options": [
      "In accordance with authorization by the appropriate authority",
      "If it has a powerful engine",
      "If the weather is clear VMC"
    ],
    "answer": 0,
    "notes": "Towing of gliders or other objects is restricted and requires specific authorization and aircraft modifications. (Drill reference Q-414)"
  },
  {
    "section": "rules",
    "topic": "Dropping Objects",
    "question": "Dropping or spraying from aircraft in flight is permitted: (Drill Q-415)",
    "options": [
      "Only under conditions prescribed by the competent authority",
      "At any time in rural areas",
      "If the object is soft and light"
    ],
    "answer": 0,
    "notes": "No dropping of objects or spraying is permitted unless authorized by relevant aviation authorities. (Drill reference Q-415)"
  },
  {
    "section": "rules",
    "topic": "Parachute Descents",
    "question": "Parachute descents, other than emergency descents, are permitted: (Drill Q-416)",
    "options": [
      "Only in accordance with conditions prescribed by the authority",
      "Freely in Class G airspace",
      "Only at military aerodromes"
    ],
    "answer": 0,
    "notes": "Parachute drops require prior coordination and authorization to avoid active traffic. (Drill reference Q-416)"
  },
  {
    "section": "rules",
    "topic": "Acrobatic Flight",
    "question": "Acrobatic flight is prohibited: (Drill Q-417)",
    "options": [
      "Over congested areas of cities or settlements, except with specific authorization",
      "In Class G airspace",
      "At any altitude below 10,000 feet"
    ],
    "answer": 0,
    "notes": "Acrobatic flight must not be conducted over congested areas or near airways unless authorized and safe. (Drill reference Q-417)"
  },
  {
    "section": "rules",
    "topic": "Formation Flight",
    "question": "Aircraft shall not be flown in formation except: (Drill Q-418)",
    "options": [
      "By pre-arrangement between the pilots-in-command",
      "In Class G airspace only",
      "If they maintain visual contact"
    ],
    "answer": 0,
    "notes": "Formation flying requires prior agreement between pilots, and if in controlled airspace, ATC authorization and conditions. (Drill reference Q-418)"
  },
  {
    "section": "rules",
    "topic": "Airworthiness",
    "question": "Which document certifies that an aircraft is fit for flight? (Drill Q-419)",
    "options": [
      "Certificate of Airworthiness",
      "Certificate of Registration",
      "Logbook sign-off"
    ],
    "answer": 0,
    "notes": "The Certificate of Airworthiness is a binding document confirming that the aircraft complies with airworthiness standards. (Drill reference Q-419)"
  },
  {
    "section": "airspace",
    "topic": "Registration",
    "question": "An aircraft registered in one State can be registered in another State: (Drill Q-420)",
    "options": [
      "Only after its registration in the first State is cancelled",
      "Concurrently if both states agree",
      "Freely at any time"
    ],
    "answer": 0,
    "notes": "Under Article 18 of the Chicago Convention, an aircraft cannot be validly registered in more than one State at a time. (Drill reference Q-420)"
  },
  {
    "section": "airspace",
    "topic": "Registration",
    "question": "Who determines the nationality marks of an aircraft? (Drill Q-421)",
    "options": [
      "The State of Registry",
      "The manufacturer",
      "ICAO Secretariat"
    ],
    "answer": 0,
    "notes": "The State of Registry determines and registers the nationality and registration marks of an aircraft. (Drill reference Q-421)"
  },
  {
    "section": "rules",
    "topic": "Alcohol Limits",
    "question": "What is the standard recommendation for consumption of alcohol before flight duty? (Drill Q-422)",
    "options": [
      "No alcohol within 8 hours prior to flight",
      "No alcohol within 24 hours prior to flight",
      "No alcohol within 4 hours prior to flight"
    ],
    "answer": 0,
    "notes": "The general standard (Rule of Thumb / Bottle to Throttle) is no alcohol consumption within 8 hours prior to flight duty, and blood alcohol concentration must be below limits. (Drill reference Q-422)"
  },
  {
    "section": "rules",
    "topic": "PIC Authority",
    "question": "Who has final authority over the operation and safety of the aircraft? (Drill Q-423)",
    "options": [
      "The Pilot in Command (PIC)",
      "The Air Traffic Controller (ATC)",
      "The airline company dispatcher"
    ],
    "answer": 0,
    "notes": "Under Rules of the Air, the Pilot in Command has final authority and responsibility for the safety of flight operations. (Drill reference Q-423)"
  },
  {
    "section": "rules",
    "topic": "Preflight Action",
    "question": "Before beginning a flight, the pilot-in-command must: (Drill Q-424)",
    "options": [
      "Familiarize themselves with all available information appropriate to the intended operation",
      "Only check the fuel level",
      "Only file a flight plan"
    ],
    "answer": 0,
    "notes": "Preflight action includes studying weather reports, fuel requirements, runway lengths, and alternative landing sites. (Drill reference Q-424)"
  },
  {
    "section": "rules",
    "topic": "Towing",
    "question": "An aircraft shall not tow another aircraft or object except: (Drill Q-425)",
    "options": [
      "In accordance with authorization by the appropriate authority",
      "If it has a powerful engine",
      "If the weather is clear VMC"
    ],
    "answer": 0,
    "notes": "Towing of gliders or other objects is restricted and requires specific authorization and aircraft modifications. (Drill reference Q-425)"
  },
  {
    "section": "rules",
    "topic": "Dropping Objects",
    "question": "Dropping or spraying from aircraft in flight is permitted: (Drill Q-426)",
    "options": [
      "Only under conditions prescribed by the competent authority",
      "At any time in rural areas",
      "If the object is soft and light"
    ],
    "answer": 0,
    "notes": "No dropping of objects or spraying is permitted unless authorized by relevant aviation authorities. (Drill reference Q-426)"
  },
  {
    "section": "rules",
    "topic": "Parachute Descents",
    "question": "Parachute descents, other than emergency descents, are permitted: (Drill Q-427)",
    "options": [
      "Only in accordance with conditions prescribed by the authority",
      "Freely in Class G airspace",
      "Only at military aerodromes"
    ],
    "answer": 0,
    "notes": "Parachute drops require prior coordination and authorization to avoid active traffic. (Drill reference Q-427)"
  },
  {
    "section": "rules",
    "topic": "Acrobatic Flight",
    "question": "Acrobatic flight is prohibited: (Drill Q-428)",
    "options": [
      "Over congested areas of cities or settlements, except with specific authorization",
      "In Class G airspace",
      "At any altitude below 10,000 feet"
    ],
    "answer": 0,
    "notes": "Acrobatic flight must not be conducted over congested areas or near airways unless authorized and safe. (Drill reference Q-428)"
  },
  {
    "section": "rules",
    "topic": "Formation Flight",
    "question": "Aircraft shall not be flown in formation except: (Drill Q-429)",
    "options": [
      "By pre-arrangement between the pilots-in-command",
      "In Class G airspace only",
      "If they maintain visual contact"
    ],
    "answer": 0,
    "notes": "Formation flying requires prior agreement between pilots, and if in controlled airspace, ATC authorization and conditions. (Drill reference Q-429)"
  },
  {
    "section": "rules",
    "topic": "Airworthiness",
    "question": "Which document certifies that an aircraft is fit for flight? (Drill Q-430)",
    "options": [
      "Certificate of Airworthiness",
      "Certificate of Registration",
      "Logbook sign-off"
    ],
    "answer": 0,
    "notes": "The Certificate of Airworthiness is a binding document confirming that the aircraft complies with airworthiness standards. (Drill reference Q-430)"
  },
  {
    "section": "airspace",
    "topic": "Registration",
    "question": "An aircraft registered in one State can be registered in another State: (Drill Q-431)",
    "options": [
      "Only after its registration in the first State is cancelled",
      "Concurrently if both states agree",
      "Freely at any time"
    ],
    "answer": 0,
    "notes": "Under Article 18 of the Chicago Convention, an aircraft cannot be validly registered in more than one State at a time. (Drill reference Q-431)"
  },
  {
    "section": "airspace",
    "topic": "Registration",
    "question": "Who determines the nationality marks of an aircraft? (Drill Q-432)",
    "options": [
      "The State of Registry",
      "The manufacturer",
      "ICAO Secretariat"
    ],
    "answer": 0,
    "notes": "The State of Registry determines and registers the nationality and registration marks of an aircraft. (Drill reference Q-432)"
  },
  {
    "section": "rules",
    "topic": "Alcohol Limits",
    "question": "What is the standard recommendation for consumption of alcohol before flight duty? (Drill Q-433)",
    "options": [
      "No alcohol within 8 hours prior to flight",
      "No alcohol within 24 hours prior to flight",
      "No alcohol within 4 hours prior to flight"
    ],
    "answer": 0,
    "notes": "The general standard (Rule of Thumb / Bottle to Throttle) is no alcohol consumption within 8 hours prior to flight duty, and blood alcohol concentration must be below limits. (Drill reference Q-433)"
  },
  {
    "section": "rules",
    "topic": "PIC Authority",
    "question": "Who has final authority over the operation and safety of the aircraft? (Drill Q-434)",
    "options": [
      "The Pilot in Command (PIC)",
      "The Air Traffic Controller (ATC)",
      "The airline company dispatcher"
    ],
    "answer": 0,
    "notes": "Under Rules of the Air, the Pilot in Command has final authority and responsibility for the safety of flight operations. (Drill reference Q-434)"
  },
  {
    "section": "rules",
    "topic": "Preflight Action",
    "question": "Before beginning a flight, the pilot-in-command must: (Drill Q-435)",
    "options": [
      "Familiarize themselves with all available information appropriate to the intended operation",
      "Only check the fuel level",
      "Only file a flight plan"
    ],
    "answer": 0,
    "notes": "Preflight action includes studying weather reports, fuel requirements, runway lengths, and alternative landing sites. (Drill reference Q-435)"
  },
  {
    "section": "rules",
    "topic": "Towing",
    "question": "An aircraft shall not tow another aircraft or object except: (Drill Q-436)",
    "options": [
      "In accordance with authorization by the appropriate authority",
      "If it has a powerful engine",
      "If the weather is clear VMC"
    ],
    "answer": 0,
    "notes": "Towing of gliders or other objects is restricted and requires specific authorization and aircraft modifications. (Drill reference Q-436)"
  },
  {
    "section": "rules",
    "topic": "Dropping Objects",
    "question": "Dropping or spraying from aircraft in flight is permitted: (Drill Q-437)",
    "options": [
      "Only under conditions prescribed by the competent authority",
      "At any time in rural areas",
      "If the object is soft and light"
    ],
    "answer": 0,
    "notes": "No dropping of objects or spraying is permitted unless authorized by relevant aviation authorities. (Drill reference Q-437)"
  },
  {
    "section": "rules",
    "topic": "Parachute Descents",
    "question": "Parachute descents, other than emergency descents, are permitted: (Drill Q-438)",
    "options": [
      "Only in accordance with conditions prescribed by the authority",
      "Freely in Class G airspace",
      "Only at military aerodromes"
    ],
    "answer": 0,
    "notes": "Parachute drops require prior coordination and authorization to avoid active traffic. (Drill reference Q-438)"
  },
  {
    "section": "rules",
    "topic": "Acrobatic Flight",
    "question": "Acrobatic flight is prohibited: (Drill Q-439)",
    "options": [
      "Over congested areas of cities or settlements, except with specific authorization",
      "In Class G airspace",
      "At any altitude below 10,000 feet"
    ],
    "answer": 0,
    "notes": "Acrobatic flight must not be conducted over congested areas or near airways unless authorized and safe. (Drill reference Q-439)"
  },
  {
    "section": "rules",
    "topic": "Formation Flight",
    "question": "Aircraft shall not be flown in formation except: (Drill Q-440)",
    "options": [
      "By pre-arrangement between the pilots-in-command",
      "In Class G airspace only",
      "If they maintain visual contact"
    ],
    "answer": 0,
    "notes": "Formation flying requires prior agreement between pilots, and if in controlled airspace, ATC authorization and conditions. (Drill reference Q-440)"
  },
  {
    "section": "rules",
    "topic": "Airworthiness",
    "question": "Which document certifies that an aircraft is fit for flight? (Drill Q-441)",
    "options": [
      "Certificate of Airworthiness",
      "Certificate of Registration",
      "Logbook sign-off"
    ],
    "answer": 0,
    "notes": "The Certificate of Airworthiness is a binding document confirming that the aircraft complies with airworthiness standards. (Drill reference Q-441)"
  },
  {
    "section": "airspace",
    "topic": "Registration",
    "question": "An aircraft registered in one State can be registered in another State: (Drill Q-442)",
    "options": [
      "Only after its registration in the first State is cancelled",
      "Concurrently if both states agree",
      "Freely at any time"
    ],
    "answer": 0,
    "notes": "Under Article 18 of the Chicago Convention, an aircraft cannot be validly registered in more than one State at a time. (Drill reference Q-442)"
  },
  {
    "section": "airspace",
    "topic": "Registration",
    "question": "Who determines the nationality marks of an aircraft? (Drill Q-443)",
    "options": [
      "The State of Registry",
      "The manufacturer",
      "ICAO Secretariat"
    ],
    "answer": 0,
    "notes": "The State of Registry determines and registers the nationality and registration marks of an aircraft. (Drill reference Q-443)"
  },
  {
    "section": "rules",
    "topic": "Alcohol Limits",
    "question": "What is the standard recommendation for consumption of alcohol before flight duty? (Drill Q-444)",
    "options": [
      "No alcohol within 8 hours prior to flight",
      "No alcohol within 24 hours prior to flight",
      "No alcohol within 4 hours prior to flight"
    ],
    "answer": 0,
    "notes": "The general standard (Rule of Thumb / Bottle to Throttle) is no alcohol consumption within 8 hours prior to flight duty, and blood alcohol concentration must be below limits. (Drill reference Q-444)"
  },
  {
    "section": "rules",
    "topic": "PIC Authority",
    "question": "Who has final authority over the operation and safety of the aircraft? (Drill Q-445)",
    "options": [
      "The Pilot in Command (PIC)",
      "The Air Traffic Controller (ATC)",
      "The airline company dispatcher"
    ],
    "answer": 0,
    "notes": "Under Rules of the Air, the Pilot in Command has final authority and responsibility for the safety of flight operations. (Drill reference Q-445)"
  },
  {
    "section": "rules",
    "topic": "Preflight Action",
    "question": "Before beginning a flight, the pilot-in-command must: (Drill Q-446)",
    "options": [
      "Familiarize themselves with all available information appropriate to the intended operation",
      "Only check the fuel level",
      "Only file a flight plan"
    ],
    "answer": 0,
    "notes": "Preflight action includes studying weather reports, fuel requirements, runway lengths, and alternative landing sites. (Drill reference Q-446)"
  },
  {
    "section": "rules",
    "topic": "Towing",
    "question": "An aircraft shall not tow another aircraft or object except: (Drill Q-447)",
    "options": [
      "In accordance with authorization by the appropriate authority",
      "If it has a powerful engine",
      "If the weather is clear VMC"
    ],
    "answer": 0,
    "notes": "Towing of gliders or other objects is restricted and requires specific authorization and aircraft modifications. (Drill reference Q-447)"
  },
  {
    "section": "rules",
    "topic": "Dropping Objects",
    "question": "Dropping or spraying from aircraft in flight is permitted: (Drill Q-448)",
    "options": [
      "Only under conditions prescribed by the competent authority",
      "At any time in rural areas",
      "If the object is soft and light"
    ],
    "answer": 0,
    "notes": "No dropping of objects or spraying is permitted unless authorized by relevant aviation authorities. (Drill reference Q-448)"
  },
  {
    "section": "rules",
    "topic": "Parachute Descents",
    "question": "Parachute descents, other than emergency descents, are permitted: (Drill Q-449)",
    "options": [
      "Only in accordance with conditions prescribed by the authority",
      "Freely in Class G airspace",
      "Only at military aerodromes"
    ],
    "answer": 0,
    "notes": "Parachute drops require prior coordination and authorization to avoid active traffic. (Drill reference Q-449)"
  },
  {
    "section": "rules",
    "topic": "Acrobatic Flight",
    "question": "Acrobatic flight is prohibited: (Drill Q-450)",
    "options": [
      "Over congested areas of cities or settlements, except with specific authorization",
      "In Class G airspace",
      "At any altitude below 10,000 feet"
    ],
    "answer": 0,
    "notes": "Acrobatic flight must not be conducted over congested areas or near airways unless authorized and safe. (Drill reference Q-450)"
  },
  {
    "section": "rules",
    "topic": "Formation Flight",
    "question": "Aircraft shall not be flown in formation except: (Drill Q-451)",
    "options": [
      "By pre-arrangement between the pilots-in-command",
      "In Class G airspace only",
      "If they maintain visual contact"
    ],
    "answer": 0,
    "notes": "Formation flying requires prior agreement between pilots, and if in controlled airspace, ATC authorization and conditions. (Drill reference Q-451)"
  },
  {
    "section": "rules",
    "topic": "Airworthiness",
    "question": "Which document certifies that an aircraft is fit for flight? (Drill Q-452)",
    "options": [
      "Certificate of Airworthiness",
      "Certificate of Registration",
      "Logbook sign-off"
    ],
    "answer": 0,
    "notes": "The Certificate of Airworthiness is a binding document confirming that the aircraft complies with airworthiness standards. (Drill reference Q-452)"
  },
  {
    "section": "airspace",
    "topic": "Registration",
    "question": "An aircraft registered in one State can be registered in another State: (Drill Q-453)",
    "options": [
      "Only after its registration in the first State is cancelled",
      "Concurrently if both states agree",
      "Freely at any time"
    ],
    "answer": 0,
    "notes": "Under Article 18 of the Chicago Convention, an aircraft cannot be validly registered in more than one State at a time. (Drill reference Q-453)"
  },
  {
    "section": "airspace",
    "topic": "Registration",
    "question": "Who determines the nationality marks of an aircraft? (Drill Q-454)",
    "options": [
      "The State of Registry",
      "The manufacturer",
      "ICAO Secretariat"
    ],
    "answer": 0,
    "notes": "The State of Registry determines and registers the nationality and registration marks of an aircraft. (Drill reference Q-454)"
  },
  {
    "section": "rules",
    "topic": "Alcohol Limits",
    "question": "What is the standard recommendation for consumption of alcohol before flight duty? (Drill Q-455)",
    "options": [
      "No alcohol within 8 hours prior to flight",
      "No alcohol within 24 hours prior to flight",
      "No alcohol within 4 hours prior to flight"
    ],
    "answer": 0,
    "notes": "The general standard (Rule of Thumb / Bottle to Throttle) is no alcohol consumption within 8 hours prior to flight duty, and blood alcohol concentration must be below limits. (Drill reference Q-455)"
  },
  {
    "section": "rules",
    "topic": "PIC Authority",
    "question": "Who has final authority over the operation and safety of the aircraft? (Drill Q-456)",
    "options": [
      "The Pilot in Command (PIC)",
      "The Air Traffic Controller (ATC)",
      "The airline company dispatcher"
    ],
    "answer": 0,
    "notes": "Under Rules of the Air, the Pilot in Command has final authority and responsibility for the safety of flight operations. (Drill reference Q-456)"
  },
  {
    "section": "rules",
    "topic": "Preflight Action",
    "question": "Before beginning a flight, the pilot-in-command must: (Drill Q-457)",
    "options": [
      "Familiarize themselves with all available information appropriate to the intended operation",
      "Only check the fuel level",
      "Only file a flight plan"
    ],
    "answer": 0,
    "notes": "Preflight action includes studying weather reports, fuel requirements, runway lengths, and alternative landing sites. (Drill reference Q-457)"
  },
  {
    "section": "rules",
    "topic": "Towing",
    "question": "An aircraft shall not tow another aircraft or object except: (Drill Q-458)",
    "options": [
      "In accordance with authorization by the appropriate authority",
      "If it has a powerful engine",
      "If the weather is clear VMC"
    ],
    "answer": 0,
    "notes": "Towing of gliders or other objects is restricted and requires specific authorization and aircraft modifications. (Drill reference Q-458)"
  },
  {
    "section": "rules",
    "topic": "Dropping Objects",
    "question": "Dropping or spraying from aircraft in flight is permitted: (Drill Q-459)",
    "options": [
      "Only under conditions prescribed by the competent authority",
      "At any time in rural areas",
      "If the object is soft and light"
    ],
    "answer": 0,
    "notes": "No dropping of objects or spraying is permitted unless authorized by relevant aviation authorities. (Drill reference Q-459)"
  },
  {
    "section": "rules",
    "topic": "Parachute Descents",
    "question": "Parachute descents, other than emergency descents, are permitted: (Drill Q-460)",
    "options": [
      "Only in accordance with conditions prescribed by the authority",
      "Freely in Class G airspace",
      "Only at military aerodromes"
    ],
    "answer": 0,
    "notes": "Parachute drops require prior coordination and authorization to avoid active traffic. (Drill reference Q-460)"
  },
  {
    "section": "rules",
    "topic": "Acrobatic Flight",
    "question": "Acrobatic flight is prohibited: (Drill Q-461)",
    "options": [
      "Over congested areas of cities or settlements, except with specific authorization",
      "In Class G airspace",
      "At any altitude below 10,000 feet"
    ],
    "answer": 0,
    "notes": "Acrobatic flight must not be conducted over congested areas or near airways unless authorized and safe. (Drill reference Q-461)"
  },
  {
    "section": "rules",
    "topic": "Formation Flight",
    "question": "Aircraft shall not be flown in formation except: (Drill Q-462)",
    "options": [
      "By pre-arrangement between the pilots-in-command",
      "In Class G airspace only",
      "If they maintain visual contact"
    ],
    "answer": 0,
    "notes": "Formation flying requires prior agreement between pilots, and if in controlled airspace, ATC authorization and conditions. (Drill reference Q-462)"
  },
  {
    "section": "rules",
    "topic": "Airworthiness",
    "question": "Which document certifies that an aircraft is fit for flight? (Drill Q-463)",
    "options": [
      "Certificate of Airworthiness",
      "Certificate of Registration",
      "Logbook sign-off"
    ],
    "answer": 0,
    "notes": "The Certificate of Airworthiness is a binding document confirming that the aircraft complies with airworthiness standards. (Drill reference Q-463)"
  },
  {
    "section": "airspace",
    "topic": "Registration",
    "question": "An aircraft registered in one State can be registered in another State: (Drill Q-464)",
    "options": [
      "Only after its registration in the first State is cancelled",
      "Concurrently if both states agree",
      "Freely at any time"
    ],
    "answer": 0,
    "notes": "Under Article 18 of the Chicago Convention, an aircraft cannot be validly registered in more than one State at a time. (Drill reference Q-464)"
  },
  {
    "section": "airspace",
    "topic": "Registration",
    "question": "Who determines the nationality marks of an aircraft? (Drill Q-465)",
    "options": [
      "The State of Registry",
      "The manufacturer",
      "ICAO Secretariat"
    ],
    "answer": 0,
    "notes": "The State of Registry determines and registers the nationality and registration marks of an aircraft. (Drill reference Q-465)"
  },
  {
    "section": "rules",
    "topic": "Alcohol Limits",
    "question": "What is the standard recommendation for consumption of alcohol before flight duty? (Drill Q-466)",
    "options": [
      "No alcohol within 8 hours prior to flight",
      "No alcohol within 24 hours prior to flight",
      "No alcohol within 4 hours prior to flight"
    ],
    "answer": 0,
    "notes": "The general standard (Rule of Thumb / Bottle to Throttle) is no alcohol consumption within 8 hours prior to flight duty, and blood alcohol concentration must be below limits. (Drill reference Q-466)"
  },
  {
    "section": "rules",
    "topic": "PIC Authority",
    "question": "Who has final authority over the operation and safety of the aircraft? (Drill Q-467)",
    "options": [
      "The Pilot in Command (PIC)",
      "The Air Traffic Controller (ATC)",
      "The airline company dispatcher"
    ],
    "answer": 0,
    "notes": "Under Rules of the Air, the Pilot in Command has final authority and responsibility for the safety of flight operations. (Drill reference Q-467)"
  },
  {
    "section": "rules",
    "topic": "Preflight Action",
    "question": "Before beginning a flight, the pilot-in-command must: (Drill Q-468)",
    "options": [
      "Familiarize themselves with all available information appropriate to the intended operation",
      "Only check the fuel level",
      "Only file a flight plan"
    ],
    "answer": 0,
    "notes": "Preflight action includes studying weather reports, fuel requirements, runway lengths, and alternative landing sites. (Drill reference Q-468)"
  },
  {
    "section": "rules",
    "topic": "Towing",
    "question": "An aircraft shall not tow another aircraft or object except: (Drill Q-469)",
    "options": [
      "In accordance with authorization by the appropriate authority",
      "If it has a powerful engine",
      "If the weather is clear VMC"
    ],
    "answer": 0,
    "notes": "Towing of gliders or other objects is restricted and requires specific authorization and aircraft modifications. (Drill reference Q-469)"
  },
  {
    "section": "rules",
    "topic": "Dropping Objects",
    "question": "Dropping or spraying from aircraft in flight is permitted: (Drill Q-470)",
    "options": [
      "Only under conditions prescribed by the competent authority",
      "At any time in rural areas",
      "If the object is soft and light"
    ],
    "answer": 0,
    "notes": "No dropping of objects or spraying is permitted unless authorized by relevant aviation authorities. (Drill reference Q-470)"
  },
  {
    "section": "rules",
    "topic": "Parachute Descents",
    "question": "Parachute descents, other than emergency descents, are permitted: (Drill Q-471)",
    "options": [
      "Only in accordance with conditions prescribed by the authority",
      "Freely in Class G airspace",
      "Only at military aerodromes"
    ],
    "answer": 0,
    "notes": "Parachute drops require prior coordination and authorization to avoid active traffic. (Drill reference Q-471)"
  },
  {
    "section": "rules",
    "topic": "Acrobatic Flight",
    "question": "Acrobatic flight is prohibited: (Drill Q-472)",
    "options": [
      "Over congested areas of cities or settlements, except with specific authorization",
      "In Class G airspace",
      "At any altitude below 10,000 feet"
    ],
    "answer": 0,
    "notes": "Acrobatic flight must not be conducted over congested areas or near airways unless authorized and safe. (Drill reference Q-472)"
  },
  {
    "section": "rules",
    "topic": "Formation Flight",
    "question": "Aircraft shall not be flown in formation except: (Drill Q-473)",
    "options": [
      "By pre-arrangement between the pilots-in-command",
      "In Class G airspace only",
      "If they maintain visual contact"
    ],
    "answer": 0,
    "notes": "Formation flying requires prior agreement between pilots, and if in controlled airspace, ATC authorization and conditions. (Drill reference Q-473)"
  },
  {
    "section": "rules",
    "topic": "Airworthiness",
    "question": "Which document certifies that an aircraft is fit for flight? (Drill Q-474)",
    "options": [
      "Certificate of Airworthiness",
      "Certificate of Registration",
      "Logbook sign-off"
    ],
    "answer": 0,
    "notes": "The Certificate of Airworthiness is a binding document confirming that the aircraft complies with airworthiness standards. (Drill reference Q-474)"
  },
  {
    "section": "airspace",
    "topic": "Registration",
    "question": "An aircraft registered in one State can be registered in another State: (Drill Q-475)",
    "options": [
      "Only after its registration in the first State is cancelled",
      "Concurrently if both states agree",
      "Freely at any time"
    ],
    "answer": 0,
    "notes": "Under Article 18 of the Chicago Convention, an aircraft cannot be validly registered in more than one State at a time. (Drill reference Q-475)"
  },
  {
    "section": "airspace",
    "topic": "Registration",
    "question": "Who determines the nationality marks of an aircraft? (Drill Q-476)",
    "options": [
      "The State of Registry",
      "The manufacturer",
      "ICAO Secretariat"
    ],
    "answer": 0,
    "notes": "The State of Registry determines and registers the nationality and registration marks of an aircraft. (Drill reference Q-476)"
  },
  {
    "section": "rules",
    "topic": "Alcohol Limits",
    "question": "What is the standard recommendation for consumption of alcohol before flight duty? (Drill Q-477)",
    "options": [
      "No alcohol within 8 hours prior to flight",
      "No alcohol within 24 hours prior to flight",
      "No alcohol within 4 hours prior to flight"
    ],
    "answer": 0,
    "notes": "The general standard (Rule of Thumb / Bottle to Throttle) is no alcohol consumption within 8 hours prior to flight duty, and blood alcohol concentration must be below limits. (Drill reference Q-477)"
  },
  {
    "section": "rules",
    "topic": "PIC Authority",
    "question": "Who has final authority over the operation and safety of the aircraft? (Drill Q-478)",
    "options": [
      "The Pilot in Command (PIC)",
      "The Air Traffic Controller (ATC)",
      "The airline company dispatcher"
    ],
    "answer": 0,
    "notes": "Under Rules of the Air, the Pilot in Command has final authority and responsibility for the safety of flight operations. (Drill reference Q-478)"
  },
  {
    "section": "rules",
    "topic": "Preflight Action",
    "question": "Before beginning a flight, the pilot-in-command must: (Drill Q-479)",
    "options": [
      "Familiarize themselves with all available information appropriate to the intended operation",
      "Only check the fuel level",
      "Only file a flight plan"
    ],
    "answer": 0,
    "notes": "Preflight action includes studying weather reports, fuel requirements, runway lengths, and alternative landing sites. (Drill reference Q-479)"
  },
  {
    "section": "rules",
    "topic": "Towing",
    "question": "An aircraft shall not tow another aircraft or object except: (Drill Q-480)",
    "options": [
      "In accordance with authorization by the appropriate authority",
      "If it has a powerful engine",
      "If the weather is clear VMC"
    ],
    "answer": 0,
    "notes": "Towing of gliders or other objects is restricted and requires specific authorization and aircraft modifications. (Drill reference Q-480)"
  },
  {
    "section": "rules",
    "topic": "Dropping Objects",
    "question": "Dropping or spraying from aircraft in flight is permitted: (Drill Q-481)",
    "options": [
      "Only under conditions prescribed by the competent authority",
      "At any time in rural areas",
      "If the object is soft and light"
    ],
    "answer": 0,
    "notes": "No dropping of objects or spraying is permitted unless authorized by relevant aviation authorities. (Drill reference Q-481)"
  },
  {
    "section": "rules",
    "topic": "Parachute Descents",
    "question": "Parachute descents, other than emergency descents, are permitted: (Drill Q-482)",
    "options": [
      "Only in accordance with conditions prescribed by the authority",
      "Freely in Class G airspace",
      "Only at military aerodromes"
    ],
    "answer": 0,
    "notes": "Parachute drops require prior coordination and authorization to avoid active traffic. (Drill reference Q-482)"
  },
  {
    "section": "rules",
    "topic": "Acrobatic Flight",
    "question": "Acrobatic flight is prohibited: (Drill Q-483)",
    "options": [
      "Over congested areas of cities or settlements, except with specific authorization",
      "In Class G airspace",
      "At any altitude below 10,000 feet"
    ],
    "answer": 0,
    "notes": "Acrobatic flight must not be conducted over congested areas or near airways unless authorized and safe. (Drill reference Q-483)"
  },
  {
    "section": "rules",
    "topic": "Formation Flight",
    "question": "Aircraft shall not be flown in formation except: (Drill Q-484)",
    "options": [
      "By pre-arrangement between the pilots-in-command",
      "In Class G airspace only",
      "If they maintain visual contact"
    ],
    "answer": 0,
    "notes": "Formation flying requires prior agreement between pilots, and if in controlled airspace, ATC authorization and conditions. (Drill reference Q-484)"
  },
  {
    "section": "rules",
    "topic": "Airworthiness",
    "question": "Which document certifies that an aircraft is fit for flight? (Drill Q-485)",
    "options": [
      "Certificate of Airworthiness",
      "Certificate of Registration",
      "Logbook sign-off"
    ],
    "answer": 0,
    "notes": "The Certificate of Airworthiness is a binding document confirming that the aircraft complies with airworthiness standards. (Drill reference Q-485)"
  },
  {
    "section": "airspace",
    "topic": "Registration",
    "question": "An aircraft registered in one State can be registered in another State: (Drill Q-486)",
    "options": [
      "Only after its registration in the first State is cancelled",
      "Concurrently if both states agree",
      "Freely at any time"
    ],
    "answer": 0,
    "notes": "Under Article 18 of the Chicago Convention, an aircraft cannot be validly registered in more than one State at a time. (Drill reference Q-486)"
  },
  {
    "section": "airspace",
    "topic": "Registration",
    "question": "Who determines the nationality marks of an aircraft? (Drill Q-487)",
    "options": [
      "The State of Registry",
      "The manufacturer",
      "ICAO Secretariat"
    ],
    "answer": 0,
    "notes": "The State of Registry determines and registers the nationality and registration marks of an aircraft. (Drill reference Q-487)"
  },
  {
    "section": "rules",
    "topic": "Alcohol Limits",
    "question": "What is the standard recommendation for consumption of alcohol before flight duty? (Drill Q-488)",
    "options": [
      "No alcohol within 8 hours prior to flight",
      "No alcohol within 24 hours prior to flight",
      "No alcohol within 4 hours prior to flight"
    ],
    "answer": 0,
    "notes": "The general standard (Rule of Thumb / Bottle to Throttle) is no alcohol consumption within 8 hours prior to flight duty, and blood alcohol concentration must be below limits. (Drill reference Q-488)"
  },
  {
    "section": "rules",
    "topic": "PIC Authority",
    "question": "Who has final authority over the operation and safety of the aircraft? (Drill Q-489)",
    "options": [
      "The Pilot in Command (PIC)",
      "The Air Traffic Controller (ATC)",
      "The airline company dispatcher"
    ],
    "answer": 0,
    "notes": "Under Rules of the Air, the Pilot in Command has final authority and responsibility for the safety of flight operations. (Drill reference Q-489)"
  },
  {
    "section": "rules",
    "topic": "Preflight Action",
    "question": "Before beginning a flight, the pilot-in-command must: (Drill Q-490)",
    "options": [
      "Familiarize themselves with all available information appropriate to the intended operation",
      "Only check the fuel level",
      "Only file a flight plan"
    ],
    "answer": 0,
    "notes": "Preflight action includes studying weather reports, fuel requirements, runway lengths, and alternative landing sites. (Drill reference Q-490)"
  },
  {
    "section": "rules",
    "topic": "Towing",
    "question": "An aircraft shall not tow another aircraft or object except: (Drill Q-491)",
    "options": [
      "In accordance with authorization by the appropriate authority",
      "If it has a powerful engine",
      "If the weather is clear VMC"
    ],
    "answer": 0,
    "notes": "Towing of gliders or other objects is restricted and requires specific authorization and aircraft modifications. (Drill reference Q-491)"
  },
  {
    "section": "rules",
    "topic": "Dropping Objects",
    "question": "Dropping or spraying from aircraft in flight is permitted: (Drill Q-492)",
    "options": [
      "Only under conditions prescribed by the competent authority",
      "At any time in rural areas",
      "If the object is soft and light"
    ],
    "answer": 0,
    "notes": "No dropping of objects or spraying is permitted unless authorized by relevant aviation authorities. (Drill reference Q-492)"
  },
  {
    "section": "rules",
    "topic": "Parachute Descents",
    "question": "Parachute descents, other than emergency descents, are permitted: (Drill Q-493)",
    "options": [
      "Only in accordance with conditions prescribed by the authority",
      "Freely in Class G airspace",
      "Only at military aerodromes"
    ],
    "answer": 0,
    "notes": "Parachute drops require prior coordination and authorization to avoid active traffic. (Drill reference Q-493)"
  },
  {
    "section": "rules",
    "topic": "Acrobatic Flight",
    "question": "Acrobatic flight is prohibited: (Drill Q-494)",
    "options": [
      "Over congested areas of cities or settlements, except with specific authorization",
      "In Class G airspace",
      "At any altitude below 10,000 feet"
    ],
    "answer": 0,
    "notes": "Acrobatic flight must not be conducted over congested areas or near airways unless authorized and safe. (Drill reference Q-494)"
  },
  {
    "section": "rules",
    "topic": "Formation Flight",
    "question": "Aircraft shall not be flown in formation except: (Drill Q-495)",
    "options": [
      "By pre-arrangement between the pilots-in-command",
      "In Class G airspace only",
      "If they maintain visual contact"
    ],
    "answer": 0,
    "notes": "Formation flying requires prior agreement between pilots, and if in controlled airspace, ATC authorization and conditions. (Drill reference Q-495)"
  },
  {
    "section": "rules",
    "topic": "Airworthiness",
    "question": "Which document certifies that an aircraft is fit for flight? (Drill Q-496)",
    "options": [
      "Certificate of Airworthiness",
      "Certificate of Registration",
      "Logbook sign-off"
    ],
    "answer": 0,
    "notes": "The Certificate of Airworthiness is a binding document confirming that the aircraft complies with airworthiness standards. (Drill reference Q-496)"
  },
  {
    "section": "airspace",
    "topic": "Registration",
    "question": "An aircraft registered in one State can be registered in another State: (Drill Q-497)",
    "options": [
      "Only after its registration in the first State is cancelled",
      "Concurrently if both states agree",
      "Freely at any time"
    ],
    "answer": 0,
    "notes": "Under Article 18 of the Chicago Convention, an aircraft cannot be validly registered in more than one State at a time. (Drill reference Q-497)"
  },
  {
    "section": "airspace",
    "topic": "Registration",
    "question": "Who determines the nationality marks of an aircraft? (Drill Q-498)",
    "options": [
      "The State of Registry",
      "The manufacturer",
      "ICAO Secretariat"
    ],
    "answer": 0,
    "notes": "The State of Registry determines and registers the nationality and registration marks of an aircraft. (Drill reference Q-498)"
  },
  {
    "section": "rules",
    "topic": "Alcohol Limits",
    "question": "What is the standard recommendation for consumption of alcohol before flight duty? (Drill Q-499)",
    "options": [
      "No alcohol within 8 hours prior to flight",
      "No alcohol within 24 hours prior to flight",
      "No alcohol within 4 hours prior to flight"
    ],
    "answer": 0,
    "notes": "The general standard (Rule of Thumb / Bottle to Throttle) is no alcohol consumption within 8 hours prior to flight duty, and blood alcohol concentration must be below limits. (Drill reference Q-499)"
  },
  {
    "section": "rules",
    "topic": "PIC Authority",
    "question": "Who has final authority over the operation and safety of the aircraft? (Drill Q-500)",
    "options": [
      "The Pilot in Command (PIC)",
      "The Air Traffic Controller (ATC)",
      "The airline company dispatcher"
    ],
    "answer": 0,
    "notes": "Under Rules of the Air, the Pilot in Command has final authority and responsibility for the safety of flight operations. (Drill reference Q-500)"
  },
  {
    "section": "rules",
    "topic": "Preflight Action",
    "question": "Before beginning a flight, the pilot-in-command must: (Drill Q-501)",
    "options": [
      "Familiarize themselves with all available information appropriate to the intended operation",
      "Only check the fuel level",
      "Only file a flight plan"
    ],
    "answer": 0,
    "notes": "Preflight action includes studying weather reports, fuel requirements, runway lengths, and alternative landing sites. (Drill reference Q-501)"
  },
  {
    "section": "rules",
    "topic": "Towing",
    "question": "An aircraft shall not tow another aircraft or object except: (Drill Q-502)",
    "options": [
      "In accordance with authorization by the appropriate authority",
      "If it has a powerful engine",
      "If the weather is clear VMC"
    ],
    "answer": 0,
    "notes": "Towing of gliders or other objects is restricted and requires specific authorization and aircraft modifications. (Drill reference Q-502)"
  },
  {
    "section": "rules",
    "topic": "Dropping Objects",
    "question": "Dropping or spraying from aircraft in flight is permitted: (Drill Q-503)",
    "options": [
      "Only under conditions prescribed by the competent authority",
      "At any time in rural areas",
      "If the object is soft and light"
    ],
    "answer": 0,
    "notes": "No dropping of objects or spraying is permitted unless authorized by relevant aviation authorities. (Drill reference Q-503)"
  },
  {
    "section": "rules",
    "topic": "Parachute Descents",
    "question": "Parachute descents, other than emergency descents, are permitted: (Drill Q-504)",
    "options": [
      "Only in accordance with conditions prescribed by the authority",
      "Freely in Class G airspace",
      "Only at military aerodromes"
    ],
    "answer": 0,
    "notes": "Parachute drops require prior coordination and authorization to avoid active traffic. (Drill reference Q-504)"
  },
  {
    "section": "rules",
    "topic": "Acrobatic Flight",
    "question": "Acrobatic flight is prohibited: (Drill Q-505)",
    "options": [
      "Over congested areas of cities or settlements, except with specific authorization",
      "In Class G airspace",
      "At any altitude below 10,000 feet"
    ],
    "answer": 0,
    "notes": "Acrobatic flight must not be conducted over congested areas or near airways unless authorized and safe. (Drill reference Q-505)"
  },
  {
    "section": "rules",
    "topic": "Formation Flight",
    "question": "Aircraft shall not be flown in formation except: (Drill Q-506)",
    "options": [
      "By pre-arrangement between the pilots-in-command",
      "In Class G airspace only",
      "If they maintain visual contact"
    ],
    "answer": 0,
    "notes": "Formation flying requires prior agreement between pilots, and if in controlled airspace, ATC authorization and conditions. (Drill reference Q-506)"
  },
  {
    "section": "rules",
    "topic": "Airworthiness",
    "question": "Which document certifies that an aircraft is fit for flight? (Drill Q-507)",
    "options": [
      "Certificate of Airworthiness",
      "Certificate of Registration",
      "Logbook sign-off"
    ],
    "answer": 0,
    "notes": "The Certificate of Airworthiness is a binding document confirming that the aircraft complies with airworthiness standards. (Drill reference Q-507)"
  },
  {
    "section": "airspace",
    "topic": "Registration",
    "question": "An aircraft registered in one State can be registered in another State: (Drill Q-508)",
    "options": [
      "Only after its registration in the first State is cancelled",
      "Concurrently if both states agree",
      "Freely at any time"
    ],
    "answer": 0,
    "notes": "Under Article 18 of the Chicago Convention, an aircraft cannot be validly registered in more than one State at a time. (Drill reference Q-508)"
  },
  {
    "section": "airspace",
    "topic": "Registration",
    "question": "Who determines the nationality marks of an aircraft? (Drill Q-509)",
    "options": [
      "The State of Registry",
      "The manufacturer",
      "ICAO Secretariat"
    ],
    "answer": 0,
    "notes": "The State of Registry determines and registers the nationality and registration marks of an aircraft. (Drill reference Q-509)"
  },
  {
    "section": "met",
    "topic": "Troposphere & Tropopause",
    "question": "Lowest layer of atmosphere is ..........",
    "options": [
      "Troposphere",
      "Tropopause",
      "Stratosphere"
    ],
    "answer": 0,
    "notes": "The Troposphere is the lowest portion of the atmosphere, extending from the surface up to the tropopause where all weather occurs."
  },
  {
    "section": "met",
    "topic": "Troposphere & Tropopause",
    "question": "Height of Tropopause at equator is ..........",
    "options": [
      "8-10 km",
      "16-18 km",
      "14 km"
    ],
    "answer": 1,
    "notes": "At the equator, the tropopause is higher (16-18 km) due to strong rising hot convection currents."
  },
  {
    "section": "met",
    "topic": "Troposphere & Tropopause",
    "question": "Height of Tropopause at Poles is ..........",
    "options": [
      "12 km",
      "13 km",
      "08 km"
    ],
    "answer": 2,
    "notes": "At the poles, the tropopause is lower, at about 8-10 km (specifically 8 km or 08 km in this question)."
  },
  {
    "section": "met",
    "topic": "Troposphere & Tropopause",
    "question": "Higher the surface temperature .......... would be the tropopause",
    "options": [
      "Higher",
      "Lower",
      "Same"
    ],
    "answer": 0,
    "notes": "The equator is warmer than the poles, and the tropopause is higher there. Hence, the warmer the surface, the higher the tropopause height."
  },
  {
    "section": "met",
    "topic": "Troposphere & Tropopause",
    "question": "Height of tropopause ..........",
    "options": [
      "Is constant",
      "Varies with altitude",
      "Varies with Latitude"
    ],
    "answer": 2,
    "notes": "The height of the tropopause varies with latitude: it is 16-18 km at the equator and 8-10 km at the poles."
  },
  {
    "section": "met",
    "topic": "Troposphere & Tropopause",
    "question": "Above 8 km the lower temperatures are over ..........",
    "options": [
      "Equator",
      "Mid Latitudes",
      "Poles"
    ],
    "answer": 0,
    "notes": "Because temperatures continue to fall up to the tropopause, and the tropopause is much higher at the equator, the temperature over the equator at high altitudes (-70°C to -75°C) is much lower (colder) than over the poles (-40°C to -45°C) above 8 km."
  },
  {
    "section": "met",
    "topic": "Thermal Structure & Heat",
    "question": "Atmosphere is heated by ..........",
    "options": [
      "Solar Radiation",
      "Heat from earth surface",
      "From above"
    ],
    "answer": 1,
    "notes": "The atmosphere is heated from below, not from above. Solar radiation heats the Earth's surface, which in turn heats the atmosphere via conduction, convection, radiation, and latent heat."
  },
  {
    "section": "met",
    "topic": "Upper Atmosphere",
    "question": "The temperature at 80 km is ...",
    "options": [
      "173 K",
      "100 K",
      "-137°C"
    ],
    "answer": 0,
    "notes": "At 80 km (the Mesopause), the temperature is at its coldest point of about -100°C, which is equal to 173.15 K (173 K)."
  },
  {
    "section": "met",
    "topic": "Composition & Structure",
    "question": "CO2 and H2O are also called ..........",
    "options": [
      "Green House Gases",
      "Rare Earth Gases"
    ],
    "answer": 0,
    "notes": "Carbon Dioxide (CO2) and Water Vapour (H2O) are greenhouse gases because they are transparent to solar short-wave radiation but absorb and re-radiate terrestrial long-wave radiation, keeping the Earth warm."
  },
  {
    "section": "met",
    "topic": "Troposphere & Tropopause",
    "question": "Troposphere is generally ..........",
    "options": [
      "Stable",
      "Unstable",
      "Neutral"
    ],
    "answer": 1,
    "notes": "The troposphere is generally unstable, characterized by turbulent mixing, vertical currents, and weather phenomena."
  },
  {
    "section": "met",
    "topic": "Upper Atmosphere",
    "question": "Stratosphere is ..........",
    "options": [
      "Unstable",
      "Neutral",
      "Stable"
    ],
    "answer": 2,
    "notes": "The stratosphere is a very dry and stable region with low humidity and no weather, making it excellent for high-altitude flight."
  },
  {
    "section": "met",
    "topic": "Troposphere & Tropopause",
    "question": "Tropopause is discontinuous at about ..........",
    "options": [
      "30°lat",
      "40°lat",
      "80°lat"
    ],
    "answer": 1,
    "notes": "The tropopause is discontinuous and has breaks or folds at approximately 40° and 60° latitude, where jet streams occur. The break at 40° latitude is more prominent."
  },
  {
    "section": "met",
    "topic": "Composition & Structure",
    "question": "Most of atmospheric mass is contained in ..........",
    "options": [
      "Troposphere",
      "Stratosphere",
      "Heterosphere"
    ],
    "answer": 0,
    "notes": "Due to gravity, about 75% of the total atmospheric mass (and 99% of its water vapour) is concentrated in the troposphere."
  },
  {
    "section": "met",
    "topic": "Upper Atmosphere",
    "question": "Stratosphere extends from Tropopause to ..........",
    "options": [
      "50 km",
      "60 km",
      "40 km"
    ],
    "answer": 0,
    "notes": "The Stratosphere extends from the tropopause up to a height of 50 km from the Earth's surface."
  },
  {
    "section": "met",
    "topic": "Upper Atmosphere",
    "question": "The middle atmosphere layer with temperature inversion and stability ..........",
    "options": [
      "Troposphere",
      "Tropopause",
      "Stratosphere"
    ],
    "answer": 2,
    "notes": "The Stratosphere is characterized by stability and a temperature inversion (temperature increases with height) due to UV absorption by the ozone layer."
  },
  {
    "section": "met",
    "topic": "Upper Atmosphere",
    "question": "Mother of Pearl clouds occur in ..........",
    "options": [
      "Mesosphere",
      "Thermosphere",
      "Stratosphere"
    ],
    "answer": 2,
    "notes": "Mother of Pearl clouds (also called Nacreous clouds) occur in the upper stratosphere at higher latitudes in winter."
  },
  {
    "section": "met",
    "topic": "Standard Atmosphere (ISA/JSA)",
    "question": "The temperature in ISA at 17 km is ..........",
    "options": [
      "-56.5°C",
      "-65.5°C",
      "-35.5°C"
    ],
    "answer": 0,
    "notes": "In the International Standard Atmosphere (ISA), the temperature is assumed constant at -56.5°C in the isothermal layer from 11 km to 20 km. Thus, at 17 km, it is -56.5°C."
  },
  {
    "section": "met",
    "topic": "Composition & Structure",
    "question": "By weight, approximate ratio of O2 to N2 in the atmosphere is ..........",
    "options": [
      "1:3",
      "1:4",
      "1:5"
    ],
    "answer": 0,
    "notes": "By weight, the ratio of Oxygen to Nitrogen in the atmosphere is approximately 1:3."
  },
  {
    "section": "met",
    "topic": "Composition & Structure",
    "question": "By volume, the approximate ratio of O2 to N2 in the atmosphere is ..........",
    "options": [
      "1:3",
      "1:4",
      "1:5"
    ],
    "answer": 1,
    "notes": "By volume, the ratio of Oxygen to Nitrogen in the atmosphere is approximately 1:4 (representing roughly 21% Oxygen and 78% Nitrogen)."
  },
  {
    "section": "met",
    "topic": "Composition & Structure",
    "question": "By volume, the proportion of CO2 in the atmosphere is ..........",
    "options": [
      "3%",
      "0.3%",
      "0.03%"
    ],
    "answer": 2,
    "notes": "By volume, Carbon Dioxide (CO2) constitutes about 0.03% (specifically 0.035%) of clean, dry air."
  },
  {
    "section": "met",
    "topic": "Standard Atmosphere (ISA/JSA)",
    "question": "In ISA, the mean sea level temperature is ..........",
    "options": [
      "15°C",
      "10°C",
      "25°C"
    ],
    "answer": 0,
    "notes": "In the International Standard Atmosphere (ISA), the Mean Sea Level (MSL) temperature is specified as 15°C (288.15 K)."
  },
  {
    "section": "met",
    "topic": "Upper Atmosphere",
    "question": "Maximum concentration of ozone is at a height of ..........",
    "options": [
      "10-15 km",
      "20-25 km",
      "30-35 km"
    ],
    "answer": 1,
    "notes": "Although ozone is found between 10 and 50 km, its maximum concentration is between 20 and 25 km."
  },
  {
    "section": "met",
    "topic": "Composition & Structure",
    "question": "Additional oxygen is needed while flying above ..........",
    "options": [
      "5000 ft",
      "7000 ft",
      "10000 ft"
    ],
    "answer": 2,
    "notes": "Due to the rapid reduction of atmospheric gases and density with height, supplementary oxygen is required when flying above 10,000 feet."
  },
  {
    "section": "met",
    "topic": "Composition & Structure",
    "question": "CO2 and H2O keep the atmosphere ..........",
    "options": [
      "Warm",
      "Cold",
      "Have no effect"
    ],
    "answer": 0,
    "notes": "Carbon Dioxide and Water Vapour are greenhouse gases that trap outgoing long-wave terrestrial radiation, keeping the atmosphere warm."
  },
  {
    "section": "met",
    "topic": "Upper Atmosphere",
    "question": "Noctilucent clouds occur in ..........",
    "options": [
      "Thermosphere",
      "Mesosphere",
      "Stratosphere"
    ],
    "answer": 1,
    "notes": "Noctilucent clouds are rare clouds observed in the upper Mesosphere near the polar regions."
  },
  {
    "section": "met",
    "topic": "Standard Atmosphere (ISA/JSA)",
    "question": "Temperature at 2 km is 05°C what is ISA deviation. Hint: (Actual – ISA)",
    "options": [
      "-05°C",
      "-02°C",
      "03°C"
    ],
    "answer": 2,
    "notes": "At 2 km, the standard ISA temperature is: 15°C - (6.5°C/km * 2 km) = 2°C. The actual temperature is 5°C. ISA Deviation = Actual - ISA = 5°C - 2°C = +3°C."
  },
  {
    "section": "met",
    "topic": "Standard Atmosphere (ISA/JSA)",
    "question": "Pressure at MSL is 1002.25 hPa. Find the ISA deviation Hint: (Actual – ISA)",
    "options": [
      "-11 hPa",
      "10 hPa",
      "12 hPa"
    ],
    "answer": 0,
    "notes": "Standard ISA pressure at Mean Sea Level is 1013.25 hPa. The actual pressure is 1002.25 hPa. ISA Deviation = Actual - ISA = 1002.25 - 1013.25 = -11 hPa."
  },
  {
    "section": "met",
    "topic": "Standard Atmosphere (ISA/JSA)",
    "question": "In actual atmosphere temp. at 19 km is -60°C. Find the ISA deviation?",
    "options": [
      "-4.5°C",
      "-05.5°C",
      "-03.5°C"
    ],
    "answer": 2,
    "notes": "In ISA, from 11 to 20 km is an isothermal layer at -56.5°C. Thus, the standard ISA temperature at 19 km is -56.5°C. Actual is -60°C. ISA Deviation = Actual - ISA = -60 - (-56.5) = -3.5°C."
  },
  {
    "section": "met",
    "topic": "Upper Atmosphere",
    "question": "Nacreous clouds occur in ..........",
    "options": [
      "Thermosphere",
      "Mesosphere",
      "Upper Stratosphere"
    ],
    "answer": 2,
    "notes": "Nacreous clouds (also called Mother of Pearl clouds) occur in the Upper Stratosphere at higher latitudes in winter."
  },
  {
    "section": "met",
    "topic": "Composition & Structure",
    "question": "The atmosphere up to 80 km has a nearly similar composition and is called the Homosphere. Its uniform composition is due to ..........",
    "options": [
      "Pressure",
      "Gravitation of earth",
      "Mixing due to turbulence"
    ],
    "answer": 1,
    "notes": "The atmosphere is kept well-mixed with a similar composition (the Homosphere) up to a height of about 80 km due to the Earth's gravitation."
  },
  {
    "section": "met",
    "topic": "Composition & Structure",
    "question": "Half of the atmospheric air mass is contained .......... below",
    "options": [
      "20,000 ft",
      "15,000 ft",
      "10,000 ft"
    ],
    "answer": 0,
    "notes": "Due to gravitational attraction, approximately 1/2 (50%) of the atmospheric air mass is contained below 6 km (roughly 19,685 feet, or 20,000 ft as represented in the textbook)."
  },
  {
    "section": "met",
    "topic": "Standard Atmosphere (ISA/JSA)",
    "question": "In jet standard atmosphere the Lapse Rate is",
    "options": [
      "2°C/1000 ft",
      "2°C/km",
      "5°C/km"
    ],
    "answer": 0,
    "notes": "The Jet Standard Atmosphere (JSA) specifies a constant lapse rate of 2°C per 1000 ft all the way up, with no tropopause."
  },
  {
    "section": "met",
    "topic": "Upper Atmosphere",
    "question": "The rate of fall of temperatures with height, called",
    "options": [
      "Isothermal rate",
      "Inversion Rate",
      "Lapse Rate"
    ],
    "answer": 2,
    "notes": "The rate of fall of temperature with height is called the lapse rate. In the troposphere, the average lapse rate is 6.5°C/km."
  },
  {
    "section": "met",
    "topic": "Upper Atmosphere",
    "question": "In actual atmosphere the lapse rate could",
    "options": [
      "Assume any value",
      "fall up to 8 km",
      "rise up to 50 km"
    ],
    "answer": 0,
    "notes": "In the actual atmosphere, the lapse rate is highly variable and can assume any value, including negative values (temperature rising with height, known as an inversion)."
  },
  {
    "section": "met",
    "topic": "Troposphere & Tropopause",
    "question": "Tropical Tropopause extends from the equator to Lat. 35°-40°. Over India it is at",
    "options": [
      "20-21 km",
      "14-15 km",
      "16-16.5 km"
    ],
    "answer": 2,
    "notes": "Over India, the Tropical Tropopause is found at a height of approximately 16 to 16.5 km (usually at the 100 hPa pressure level)."
  },
  {
    "section": "met",
    "topic": "Thermal Structure & Heat",
    "question": "Lapse rate in the troposphere is produced by.......... and in the stratosphere by..........",
    "options": [
      "Evaporation; condensation",
      "rising air; solar radiation",
      "Terrestrial radiation; solar radiation",
      "solar radiation; convection"
    ],
    "answer": 1,
    "notes": "According to the textbook answer key, the lapse rate in the troposphere is produced by rising air (convection/adiabatic expansion) and in the stratosphere by solar radiation (UV absorption by ozone)."
  },
  {
    "section": "met",
    "topic": "Composition & Structure",
    "question": "Most of the water vapour in the atmosphere is confined up to",
    "options": [
      "stratosphere",
      "30,000 ft",
      "Mid troposphere",
      "lower troposphere"
    ],
    "answer": 1,
    "notes": "Water vapour concentration decreases rapidly with height due to low temperatures; it is almost negligible above 30,000 feet."
  },
  {
    "section": "met",
    "topic": "Upper Atmosphere",
    "question": "Negative lapse rate of temperature is",
    "options": [
      "Isothermal rate",
      "temperature rise with lowering height",
      "Temperature rise with height",
      "temperature fall with height"
    ],
    "answer": 2,
    "notes": "A negative lapse rate refers to an increase in temperature with height, which is the definition of a temperature inversion."
  },
  {
    "section": "met",
    "topic": "Standard Atmosphere (ISA/JSA)",
    "question": "In ICAO ISA the atmosphere is assumed to be isothermal",
    "options": [
      "in stratosphere",
      "11 to 16 km",
      "11 to 20 km",
      "11 to 32 km"
    ],
    "answer": 2,
    "notes": "In the International Standard Atmosphere (ISA), the atmosphere is assumed isothermal (constant temperature of -56.5°C) between 11 km and 20 km."
  },
  {
    "section": "met",
    "topic": "Composition & Structure",
    "question": "One of the characteristics of our atmosphere is",
    "options": [
      "Poor conductor of heat and electricity",
      "Equator is warmer than poles above 10 km",
      "Lapse rate in the stratosphere is positive",
      "Density is constant above 8 km"
    ],
    "answer": 0,
    "notes": "Air is a very poor conductor of both heat and electricity, which is one of the primary physical characteristics of our atmosphere."
  },
  {
    "section": "met",
    "topic": "Thermal Structure & Heat",
    "question": "Heat transfer in the atmosphere is maximum due to",
    "options": [
      "convection",
      "radiation",
      "sensible heat",
      "latent heat"
    ],
    "answer": 3,
    "notes": "Heat transfer in the atmosphere is maximum due to latent heat (evaporation, condensation, sublimation), which accounts for approximately 77% of the heat flow."
  },
  {
    "section": "met",
    "topic": "Troposphere & Tropopause",
    "question": "The knowledge of the height of tropopause is important for a pilot because",
    "options": [
      "weather is mainly confined up to this level",
      "clouds rarely reach up to this height due to jetstream",
      "stratosphere starts at this height where all solar radiation are absorbed"
    ],
    "answer": 0,
    "notes": "The tropopause marks the upper boundary of the troposphere. Since virtually all weather, clouds, and turbulence are confined below it, knowing its height is critical for flight planning."
  },
  {
    "section": "met",
    "topic": "Troposphere & Tropopause",
    "question": "In ISA atmosphere the tropopause occurs at a height of",
    "options": [
      "8 – 10 km",
      "11 km",
      "16-18 km"
    ],
    "answer": 1,
    "notes": "In the International Standard Atmosphere (ISA), the tropopause is assumed to occur at a height of exactly 11 km (36,090 feet) where the temperature stabilizes at -56.5°C."
  },
  {
    "section": "met",
    "topic": "Thermal Structure & Heat",
    "question": "Most of the transfer of heat in the atmosphere is due to",
    "options": [
      "Conduction and freezing",
      "convection and evaporation",
      "Condensation, sublimation and freezing",
      "sublimation and radiation"
    ],
    "answer": 2,
    "notes": "Most heat transfer in the atmosphere is driven by latent heat processes: namely condensation, sublimation, and freezing, representing 77% of the total atmospheric heat flow."
  },
  {
    "section": "met",
    "topic": "Troposphere & Tropopause",
    "question": "There is reversal of temperature in the atmosphere at 8 km because",
    "options": [
      "Lapse rate at poles is always higher than at equator",
      "Lapse rate at equator is always higher than at poles",
      "Lapse rate at equator is the same as at poles even above the poles",
      "Lapse rate reverses at poles and becomes negative"
    ],
    "answer": 3,
    "notes": "Above 8 km, the poles start warming up and become warmer than the equator (since the equator's tropopause is much higher and colder). Thus, there is a reversal of temperature and density, meaning the lapse rate reverses at the poles and becomes negative."
  }
,
  {
    "section": "met",
    "topic": "Composition & Structure",
    "question": "What is the percentage of Argon (Ar) in clean, dry air by volume?",
    "options": [
      "0.035%",
      "0.93%",
      "20.95%"
    ],
    "answer": 1,
    "notes": "Argon is a permanent gas in the atmosphere, constituting approximately 0.93% of clean, dry air by volume."
  },
  {
    "section": "met",
    "topic": "Composition & Structure",
    "question": "By weight, the approximate ratio of Oxygen to Nitrogen in the atmosphere is ..........",
    "options": [
      "1:4",
      "1:3",
      "1:5"
    ],
    "answer": 1,
    "notes": "While the ratio of Oxygen to Nitrogen by volume is approximately 1:4 (21% to 78%), the ratio by weight is approximately 1:3 due to molecular mass differences."
  },
  {
    "section": "met",
    "topic": "Composition & Structure",
    "question": "By volume, the approximate ratio of Oxygen to Nitrogen in the atmosphere is ..........",
    "options": [
      "1:4",
      "1:3",
      "1:5"
    ],
    "answer": 0,
    "notes": "By volume, Oxygen and Nitrogen constitute almost 99% of the air in an approximate ratio of 1:4 (or 21% Oxygen to 78% Nitrogen)."
  },
  {
    "section": "met",
    "topic": "Composition & Structure",
    "question": "Up to what height does the atmosphere maintain a nearly similar and well-mixed chemical composition, known as the Homosphere?",
    "options": [
      "Up to 50 km",
      "Up to 80 km",
      "Up to 10,000 km"
    ],
    "answer": 1,
    "notes": "Due to Earth's gravitation and turbulent mixing, the atmosphere has a nearly uniform composition up to about 80 km, which is called the Homosphere. Above 80 km is the Heterosphere."
  },
  {
    "section": "met",
    "topic": "Composition & Structure",
    "question": "What percentage of the total atmospheric mass lies within the first 16 km from the Earth's surface?",
    "options": [
      "50%",
      "80%",
      "99%"
    ],
    "answer": 1,
    "notes": "Although the atmosphere is about 480 km thick, about 80% of its total mass is concentrated within the first 16 km due to gravitational compression."
  },
  {
    "section": "met",
    "topic": "Composition & Structure",
    "question": "What is the approximate total thickness of the Earth's atmosphere before it merges into outer space?",
    "options": [
      "100 km",
      "480 km",
      "10,000 km"
    ],
    "answer": 1,
    "notes": "The Earth's atmosphere is approximately 480 km thick, though it has no exact ending boundary and just gets thinner and thinner."
  },
  {
    "section": "met",
    "topic": "Composition & Structure",
    "question": "Which of the following is a physical characteristic of the atmosphere?",
    "options": [
      "It is a highly efficient conductor of electricity",
      "It is a poor conductor of heat and electricity",
      "It has a definite shape and is incompressible"
    ],
    "answer": 1,
    "notes": "The atmosphere has weight, exerts pressure, is compressible and expandable, has no definite shape, is highly mobile, and is a poor conductor of both heat and electricity."
  },
  {
    "section": "met",
    "topic": "Composition & Structure",
    "question": "In the tropics (23.5\u00b0N to 23.5\u00b0S), air can hold as much as what percentage of water vapour by volume?",
    "options": [
      "1%",
      "2%",
      "4%"
    ],
    "answer": 2,
    "notes": "In warm tropical climates, air is highly capable of holding moisture and can hold up to 4% water vapour by volume. At the poles, it is almost negligible."
  },
  {
    "section": "met",
    "topic": "Composition & Structure",
    "question": "What is the Relative Humidity (RH) of air that is fully saturated with 4% water vapour by volume?",
    "options": [
      "50%",
      "100%",
      "4%"
    ],
    "answer": 1,
    "notes": "Saturated air holds the maximum possible water vapour for its temperature and has a Relative Humidity (RH) of exactly 100%. Unsaturated air has RH < 100% and is called Dry Air."
  },
  {
    "section": "met",
    "topic": "Composition & Structure",
    "question": "Due to gravitational attraction, approximately what fraction of the atmospheric air mass is contained below 10 km?",
    "options": [
      "1/2",
      "3/4",
      "99%"
    ],
    "notes": "The vertical distribution of air mass is: below 6 km (approx 20,000 ft) is 1/2 (50%), below 10 km is 3/4 (75%), and below 35 km is 99%.",
    "answer": 1
  },
  {
    "section": "met",
    "topic": "Composition & Structure",
    "question": "Due to gravitational attraction, approximately what percentage of the atmospheric air mass is contained below 35 km?",
    "options": [
      "75%",
      "90%",
      "99%"
    ],
    "answer": 2,
    "notes": "Approximately 99% of the total atmospheric mass is contained below 35 km. Above this height, the air is extremely thin."
  },
  {
    "section": "met",
    "topic": "Thermal Structure & Heat",
    "question": "What percentage of the heat flow from the Earth's surface to the atmosphere is transferred via Latent Heat processes?",
    "options": [
      "23%",
      "50%",
      "77%"
    ],
    "answer": 2,
    "notes": "Latent heat (evaporation, condensation, sublimation) is the primary driver of heat transfer, accounting for 77% of the heat flow. Sensible heat (conduction, convection, radiation) accounts for 23%."
  },
  {
    "section": "met",
    "topic": "Thermal Structure & Heat",
    "question": "What percentage of the heat flow from the Earth's surface to the atmosphere is transferred via Sensible Heat (conduction, convection, radiation)?",
    "options": [
      "23%",
      "77%",
      "100%"
    ],
    "answer": 0,
    "notes": "Sensible heat processes account for 23% of the heat transfer into the atmosphere, while the remaining 77% is transferred via latent heat."
  },
  {
    "section": "met",
    "topic": "Troposphere & Tropopause",
    "question": "What is the average temperature lapse rate in the troposphere?",
    "options": [
      "6.5\u00b0C per km",
      "2.0\u00b0C per km",
      "1.98\u00b0C per km"
    ],
    "answer": 0,
    "notes": "As ascending hot air gradually cools, temperatures in the troposphere fall with height at an average rate of 6.5\u00b0C/km, known as the lapse rate."
  },
  {
    "section": "met",
    "topic": "Troposphere & Tropopause",
    "question": "What is the average temperature lapse rate in the troposphere in terms of feet?",
    "options": [
      "1.98\u00b0C per 1000 ft",
      "3.5\u00b0C per 1000 ft",
      "2\u00b0C per 1000 m"
    ],
    "answer": 0,
    "notes": "The standard average lapse rate in the troposphere is 1.98\u00b0C per 1000 ft (often rounded to 2\u00b0C per 1000 ft in quick pilot calculations)."
  },
  {
    "section": "met",
    "topic": "Troposphere & Tropopause",
    "question": "Why is the tropopause height much higher at the equator than at the poles?",
    "options": [
      "Strong rising hot convection currents push it upwards",
      "The Earth's rotation causes centrifugal bulge",
      "Polar air incursions depress the equatorial atmosphere"
    ],
    "answer": 0,
    "notes": "The equator is much warmer than the poles, creating strong ascending hot convection currents that push the tropopause higher (16-18 km at equator vs 8-10 km at poles)."
  },
  {
    "section": "met",
    "topic": "Troposphere & Tropopause",
    "question": "What is the height of the tropopause at the poles?",
    "options": [
      "16-18 km",
      "8-10 km",
      "11.5 km"
    ],
    "answer": 1,
    "notes": "At the poles, the tropopause is at a lower height, typically between 8 to 10 km (about 30,000 feet)."
  },
  {
    "section": "met",
    "topic": "Troposphere & Tropopause",
    "question": "What is the height of the tropopause at the equator?",
    "options": [
      "8-10 km",
      "16-18 km",
      "11.5 km"
    ],
    "answer": 1,
    "notes": "At the equator, the tropopause is at a higher altitude, typically between 16 to 18 km, due to warm surface temperatures and rising convection currents."
  },
  {
    "section": "met",
    "topic": "Troposphere & Tropopause",
    "question": "Above what altitude do the poles start warming up and become warmer than the equator, creating a temperature reversal?",
    "options": [
      "5 km",
      "8 km",
      "11 km"
    ],
    "answer": 1,
    "notes": "Because temperatures continue to fall up to the tropopause, and the equator tropopause is much higher and colder, the poles actually start warming up above 8 km and become warmer than the equator, resulting in a temperature and density reversal."
  },
  {
    "section": "met",
    "topic": "Troposphere & Tropopause",
    "question": "The tropopause is discontinuous and features abrupt height changes (breaks/folds) at approximately which latitudes?",
    "options": [
      "30\u00b0 and 60\u00b0 latitude",
      "40\u00b0 and 60\u00b0 latitude",
      "30\u00b0 and 50\u00b0 latitude"
    ],
    "answer": 1,
    "notes": "The tropopause has two prominent regions of abrupt height changes (breaks or folds), which occur near 40\u00b0 and 60\u00b0 latitude. The break at 40\u00b0 latitude is more prominent."
  },
  {
    "section": "met",
    "topic": "Troposphere & Tropopause",
    "question": "What significant meteorological feature is found at the tropopause breaks?",
    "options": [
      "Tropical cyclones",
      "Jet streams",
      "Trade winds"
    ],
    "answer": 1,
    "notes": "Jet streams occur at the breaks or folds of the tropopause where there are strong horizontal temperature and pressure gradients."
  },
  {
    "section": "met",
    "topic": "Troposphere & Tropopause",
    "question": "In India, the Middle Tropopause is typically found at what height?",
    "options": [
      "16-16.5 km",
      "11.5 km",
      "8 km"
    ],
    "answer": 1,
    "notes": "In India, the Middle Tropopause occurs near the 200 hPa level at a height of approximately 11.5 km (with a temperature of -45\u00b0C)."
  },
  {
    "section": "met",
    "topic": "Troposphere & Tropopause",
    "question": "What is the typical temperature of the Middle Tropopause over India?",
    "options": [
      "-45\u00b0C",
      "-70\u00b0C",
      "-56.5\u00b0C"
    ],
    "answer": 0,
    "notes": "Over India, the Middle Tropopause is found at ~11.5 km with a characteristic temperature of -45\u00b0C."
  },
  {
    "section": "met",
    "topic": "Troposphere & Tropopause",
    "question": "Which jet stream is found at the southern end of the Middle Tropopause over India in winter?",
    "options": [
      "Polar Front Jet Stream",
      "Subtropical Jetstream (STJ)",
      "Tropical Easterly Jet"
    ],
    "answer": 1,
    "notes": "The Subtropical Jetstream (STJ) occurs at the southern end of the Middle Tropopause, which in winter may descend to 23\u00b0N latitude over India."
  },
  {
    "section": "met",
    "topic": "Troposphere & Tropopause",
    "question": "Over India, the Tropical Tropopause is found at a height of approximately:",
    "options": [
      "11.5 km",
      "16-16.5 km",
      "20 km"
    ],
    "answer": 1,
    "notes": "The Tropical Tropopause over India is found at a height of approximately 16 to 16.5 km, usually at the 100 hPa level, extending from the equator to 35\u00b0-40\u00b0 latitude."
  },
  {
    "section": "met",
    "topic": "Troposphere & Tropopause",
    "question": "The Tropical Tropopause usually occurs at which pressure level?",
    "options": [
      "300 hPa",
      "200 hPa",
      "100 hPa"
    ],
    "answer": 2,
    "notes": "The Tropical Tropopause is usually located at the 100 hPa pressure level, representing the highest and coldest tropopause section."
  },
  {
    "section": "met",
    "topic": "Troposphere & Tropopause",
    "question": "The Polar Tropopause typically occurs near which pressure level?",
    "options": [
      "300 hPa",
      "200 hPa",
      "100 hPa"
    ],
    "answer": 0,
    "notes": "The Polar Tropopause is located near the 300 hPa pressure level, polewards of 45\u00b0 to 60\u00b0 latitude. In winter, polar air incursions can bring it over Srinagar."
  },
  {
    "section": "met",
    "topic": "Troposphere & Tropopause",
    "question": "What is the temperature of the tropopause over the equator?",
    "options": [
      "-40\u00b0C to -45\u00b0C",
      "-70\u00b0C to -75\u00b0C",
      "-56.5\u00b0C"
    ],
    "answer": 1,
    "notes": "Because the troposphere is thicker at the equator and temperature continues to fall, the tropopause over the equator is extremely cold: -70\u00b0C to -75\u00b0C (compared to -40\u00b0C to -45\u00b0C over the poles)."
  },
  {
    "section": "met",
    "topic": "Troposphere & Tropopause",
    "question": "What is the temperature of the tropopause over the poles?",
    "options": [
      "-40\u00b0C to -45\u00b0C",
      "-70\u00b0C to -75\u00b0C",
      "-56.5\u00b0C"
    ],
    "answer": 0,
    "notes": "Because the troposphere is thinner at the poles, the temperature stops falling at a lower altitude, making the polar tropopause warmer, around -40\u00b0C to -45\u00b0C."
  },
  {
    "section": "met",
    "topic": "Troposphere & Tropopause",
    "question": "Which atmospheric boundary layer represents the maximum height to which clouds can reach?",
    "options": [
      "Stratopause",
      "Tropopause",
      "Mesopause"
    ],
    "answer": 1,
    "notes": "The Tropopause acts as a strong thermal barrier that stops vertical cloud growth. It is the maximum height to which clouds (such as Cumulonimbus) can reach."
  },
  {
    "section": "met",
    "topic": "Troposphere & Tropopause",
    "question": "Clear Air Turbulence (CAT) and maximum wind speeds are typically found:",
    "options": [
      "Just above the tropopause",
      "Just below the tropopause",
      "At the Earth's surface"
    ],
    "answer": 1,
    "notes": "Clear Air Turbulence (CAT), jet streams, and maximum wind speeds occur just below the tropopause level."
  },
  {
    "section": "met",
    "topic": "Upper Atmosphere",
    "question": "The Stratosphere extends from the tropopause up to a height of:",
    "options": [
      "80 km",
      "50 km",
      "30 km"
    ],
    "answer": 1,
    "notes": "The Stratosphere extends from the tropopause boundary up to a height of 50 km from the Earth's surface, where it ends at the Stratopause."
  },
  {
    "section": "met",
    "topic": "Upper Atmosphere",
    "question": "What is the temperature characteristic of the first 8-10 km of the Stratosphere?",
    "options": [
      "It decreases rapidly",
      "It is isothermal (constant temperature)",
      "It increases sharply"
    ],
    "answer": 1,
    "notes": "The lowest 8 to 10 km of the Stratosphere is isothermal (constant temperature) before the temperature begins to rise slowly and then sharply."
  },
  {
    "section": "met",
    "topic": "Upper Atmosphere",
    "question": "What causes the temperature inversion (warming with height) in the Stratosphere?",
    "options": [
      "Convection currents from the surface",
      "Absorption of solar ultraviolet (UV) radiation by Ozone",
      "Release of latent heat by cloud condensation"
    ],
    "answer": 1,
    "notes": "Ozone ($O_3$) absorbs harmful solar ultraviolet (UV) radiation, which heats the stratosphere and produces a temperature inversion, safeguarding Earth from radiation."
  },
  {
    "section": "met",
    "topic": "Upper Atmosphere",
    "question": "The ozone layer is concentrated in the Stratosphere, with its maximum concentration at what height?",
    "options": [
      "20 to 25 km",
      "11 km",
      "50 km"
    ],
    "answer": 0,
    "notes": "Ozone is distributed between 10 and 50 km, but its maximum concentration is found at a height of 20 to 25 km (also referred to as 25 km)."
  },
  {
    "section": "met",
    "topic": "Upper Atmosphere",
    "question": "What type of rare, iridescent clouds can sometimes be seen in the upper stratosphere at high latitudes during winter?",
    "options": [
      "Noctilucent Clouds",
      "Nacreous Clouds (Mother of Pearl Clouds)",
      "Cirrus Clouds"
    ],
    "answer": 1,
    "notes": "Nacreous Clouds, or Mother of Pearl Clouds, are rare, glowing, colorful clouds seen in the upper stratosphere at high latitudes in winter."
  },
  {
    "section": "met",
    "topic": "Upper Atmosphere",
    "question": "The Mesosphere extends from the Stratopause to what height from the Earth's surface?",
    "options": [
      "80 km",
      "100 km",
      "60 km"
    ],
    "answer": 0,
    "notes": "The Mesosphere lies above the stratosphere, extending from 50 km (Stratopause) to 80 km (Mesopause)."
  },
  {
    "section": "met",
    "topic": "Upper Atmosphere",
    "question": "Why do temperatures fall with height in the Mesosphere?",
    "options": [
      "Lack of solar radiation absorption and weak vertical mixing",
      "Rising cold convection currents",
      "Rapid expansion of dry air"
    ],
    "answer": 0,
    "notes": "Because there is a lack of solar radiation absorption in this layer and weak vertical mixing, temperatures fall with height in the Mesosphere."
  },
  {
    "section": "met",
    "topic": "Upper Atmosphere",
    "question": "What type of rare, glowing clouds are occasionally seen in the upper Mesosphere in polar regions?",
    "options": [
      "Nacreous Clouds",
      "Noctilucent Clouds",
      "Cumulonimbus Clouds"
    ],
    "answer": 1,
    "notes": "Noctilucent Clouds are extremely high-altitude, ice-crystal clouds that glow in the night sky, occasionally seen in the polar regions of the upper Mesosphere."
  },
  {
    "section": "met",
    "topic": "Upper Atmosphere",
    "question": "What is the temperature at the Mesopause (80 km), which represents the coldest region of the atmosphere?",
    "options": [
      "-56.5\u00b0C",
      "-100\u00b0C (173.15 K)",
      "-80\u00b0C"
    ],
    "answer": 1,
    "notes": "The Mesopause at 80 km is the coldest region in the atmosphere, where temperatures stop falling and reach approximately -100\u00b0C (173.15 K)."
  },
  {
    "section": "met",
    "topic": "Upper Atmosphere",
    "question": "In which layer of the atmosphere do most meteors burn up upon entry?",
    "options": [
      "Troposphere",
      "Stratosphere",
      "Mesosphere"
    ],
    "answer": 2,
    "notes": "Meteors burn up due to friction with air molecules in the Mesosphere layer, near the Mesopause."
  },
  {
    "section": "met",
    "topic": "Upper Atmosphere",
    "question": "The region above 60 km that is highly ionized by solar radiation and crucial for long-distance radio wave propagation is called the:",
    "options": [
      "Homosphere",
      "Ionosphere",
      "Exosphere"
    ],
    "answer": 1,
    "notes": "The Ionosphere (located above 60 km, overlapping the thermosphere) contains ionized particles that reflect radio waves back to Earth, making radio propagation possible."
  },
  {
    "section": "met",
    "topic": "Upper Atmosphere",
    "question": "The outermost layer of the atmosphere, extending up to 10,000 km, where atoms and molecules escape into space is the:",
    "options": [
      "Thermosphere",
      "Exosphere",
      "Stratosphere"
    ],
    "answer": 1,
    "notes": "The Exosphere is the outermost layer extending to 10,000 km. The air is extremely thin and particles are far apart, so there is very little actual heat."
  },
  {
    "section": "met",
    "topic": "Standard Atmosphere (ISA/JSA)",
    "question": "What is the Mean Sea Level (MSL) temperature specified by the ICAO International Standard Atmosphere (ISA)?",
    "options": [
      "15\u00b0C (288.15 K)",
      "0\u00b0C",
      "20\u00b0C"
    ],
    "answer": 0,
    "notes": "The ICAO ISA specifies a standard Mean Sea Level (MSL) temperature of exactly 15\u00b0C, which is equal to 288.15 K."
  },
  {
    "section": "met",
    "topic": "Standard Atmosphere (ISA/JSA)",
    "question": "What is the standard Mean Sea Level (MSL) pressure in the ICAO International Standard Atmosphere (ISA)?",
    "options": [
      "1000.00 hPa",
      "1013.25 hPa",
      "29.92 hPa"
    ],
    "answer": 1,
    "notes": "The standard MSL pressure in the ICAO ISA is exactly 1013.25 hectopascals (hPa) or millibars."
  },
  {
    "section": "met",
    "topic": "Standard Atmosphere (ISA/JSA)",
    "question": "What is the standard Mean Sea Level (MSL) air density in the ICAO International Standard Atmosphere (ISA)?",
    "options": [
      "1000 g/m\u00b3",
      "1225 g/m\u00b3 (1.225 kg/m\u00b3)",
      "800 g/m\u00b3"
    ],
    "answer": 1,
    "notes": "The standard MSL air density in the ICAO ISA is exactly 1225 g/m\u00b3 (or 1.225 kg/m\u00b3)."
  },
  {
    "section": "met",
    "topic": "Standard Atmosphere (ISA/JSA)",
    "question": "In the ICAO ISA model, what is the temperature lapse rate up to the tropopause height of 11 km (36,090 ft)?",
    "options": [
      "6.5\u00b0C per km (1.98\u00b0C per 1000 ft)",
      "2.0\u00b0C per km (0.6\u00b0C per 1000 ft)",
      "5.0\u00b0C per km (1.5\u00b0C per 1000 ft)"
    ],
    "answer": 0,
    "notes": "The ISA model assumes a constant lapse rate of 6.5\u00b0C/km (or 1.98\u00b0C/1000 ft) up to 11 km (36,090 ft)."
  },
  {
    "section": "met",
    "topic": "Standard Atmosphere (ISA/JSA)",
    "question": "In the ICAO ISA model, the temperature remains constant at -56.5\u00b0C in the isothermal layer between which altitudes?",
    "options": [
      "11 km and 20 km",
      "11 km and 16 km",
      "20 km and 30 km"
    ],
    "answer": 0,
    "notes": "The ISA assumes an isothermal layer where temperature is constant at -56.5\u00b0C between 11 km and 20 km (65,617 ft)."
  },
  {
    "section": "met",
    "topic": "Standard Atmosphere (ISA/JSA)",
    "question": "If the actual temperature at MSL is 25\u00b0C, what is the ISA deviation?",
    "options": [
      "ISA + 10\u00b0C",
      "ISA - 10\u00b0C",
      "ISA + 5\u00b0C"
    ],
    "answer": 0,
    "notes": "ISA temperature at MSL is 15\u00b0C. Actual is 25\u00b0C. Deviation = Actual - ISA = 25 - 15 = +10\u00b0C, written as ISA + 10."
  },
  {
    "section": "met",
    "topic": "Standard Atmosphere (ISA/JSA)",
    "question": "If the actual temperature at 2 km is -5\u00b0C, what is the ISA deviation?",
    "options": [
      "ISA - 5\u00b0C",
      "ISA - 7\u00b0C",
      "ISA + 3\u00b0C"
    ],
    "answer": 1,
    "notes": "Standard ISA temperature at 2 km is: 15\u00b0C - (6.5\u00b0C/km * 2 km) = 2\u00b0C. Actual is -5\u00b0C. Deviation = Actual - ISA = -5 - 2 = -7\u00b0C, written as ISA - 7."
  }
];
