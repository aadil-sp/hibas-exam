import json

with open('questions.json', 'r') as f:
    data = json.load(f)

# ── 1. METEOROLOGY CHAPTER PACKETS ──
met_chapters = [
    {
        "id": "met-ch-1",
        "title": "Chapter 1: Atmospheric Structure & Composition",
        "subtitle": "Tropopause heights, atmospheric layers & gaseous composition",
        "icon": "bi-layers-fill",
        "q_range": (1, 17)
    },
    {
        "id": "met-ch-2",
        "title": "Chapter 2: Temperature, ISA & Lapse Rates",
        "subtitle": "FL temperature calculations, ISA deviations & standard gradients",
        "icon": "bi-thermometer-half",
        "q_range": (18, 31)
    },
    {
        "id": "met-ch-3",
        "title": "Chapter 3: Atmospheric Heating, Stability & Adiabatic Rates",
        "subtitle": "Convection, solar heating, DALR vs SALR & conditional instability",
        "icon": "bi-wind",
        "q_range": (32, 48)
    },
    {
        "id": "met-ch-4",
        "title": "Chapter 4: Temperature Inversions & Diurnal Changes",
        "subtitle": "Radiation & subsidence inversions, nocturnal cooling & isothermal layers",
        "icon": "bi-sun-fill",
        "q_range": (49, 59)
    },
    {
        "id": "met-ch-5",
        "title": "Chapter 5: Atmospheric Pressure, QNH, QFE & QFF",
        "subtitle": "Isobars, station pressure, altimetry & sea level pressure conversions",
        "icon": "bi-speedometer2",
        "q_range": (60, 85)
    },
    {
        "id": "met-ch-6",
        "title": "Chapter 6: Pressure Altitudes & ICAO Standard Atmosphere",
        "subtitle": "Standard pressure levels (850 to 200 hPa), freezing levels & upper charts",
        "icon": "bi-compass-fill",
        "q_range": (86, 100)
    }
]

# Tag MET questions
met_qs = data['met-mock-2']['questions']
for q in met_qs:
    qid = q['id']
    for ch in met_chapters:
        if ch['q_range'][0] <= qid <= ch['q_range'][1]:
            q['chapter_id'] = ch['id']
            q['chapter_name'] = ch['title']
            break

# ── 2. AIR LAW CHAPTER PACKETS ──
air_chapters = [
    {
        "id": "air-ch-1",
        "title": "Chapter 1: International Conventions & ICAO SARPs",
        "subtitle": "Freedoms of the Air, Chicago 1944, Warsaw, Tokyo, Rome & Montreal",
        "icon": "bi-globe-americas",
        "q_range": (1, 21)
    },
    {
        "id": "air-ch-2",
        "title": "Chapter 2: Airworthiness & Aircraft Nationality Markings",
        "subtitle": "Registration marks, continuing integrity programs & mass limitations",
        "icon": "bi-tools",
        "q_range": (22, 26)
    },
    {
        "id": "air-ch-3",
        "title": "Chapter 3: Flight Crew & Personnel Licensing",
        "subtitle": "CPL, ATPL, JAR-FCL, medical assessments, type ratings & hour requirements",
        "icon": "bi-person-badge-fill",
        "q_range": (27, 54)
    },
    {
        "id": "air-ch-4",
        "title": "Chapter 4: Rules of the Air & Airspace Classification",
        "subtitle": "Airspace classes, VMC minima, radio failure, interception & light signals",
        "icon": "bi-signpost-split-fill",
        "q_range": (55, 87)
    },
    {
        "id": "air-ch-5",
        "title": "Chapter 5: Instrument Departure & Approach Procedures",
        "subtitle": "PANS-OPS, DER, obstacle clearance, MSA, ILS dead reckoning & segments",
        "icon": "bi-airplane-engines-fill",
        "q_range": (88, 100)
    }
]

# Tag Air Law questions
air_qs = data['air-reg']['questions']
for q in air_qs:
    qid = q['id']
    for ch in air_chapters:
        if ch['q_range'][0] <= qid <= ch['q_range'][1]:
            q['chapter_id'] = ch['id']
            q['chapter_name'] = ch['title']
            break

data['met-mock-2']['chapters'] = met_chapters
data['air-reg']['chapters'] = air_chapters

with open('questions.json', 'w') as f:
    json.dump(data, f, indent=2)

with open('questions.js', 'w') as f:
    f.write('window.EXAM_REGISTRY = ' + json.dumps(data, indent=2) + ';\n')

print('Successfully added chapter packets to EXAM_REGISTRY in questions.js & questions.json!')
