---
title: Posture-Vocabulary Quizzes
description: ""
omit_header_text: false
featured_image: images/shiva_moon_landscape-2.jpg
type: page
summary: "Grow your knowlege of the Sanskrit names for postures with this quizzing app!"
weight: 4
---

This is a work in progress.  Check back for more quiz options!

{{< rawhtml >}}
<p id = "accounting"></p>
<div id="question"></div>
<button id="go-again" type="button">Give me another!</button> 
<button id="start-over" type="button">Start Over</button> 
{{< /rawhtml >}}

{{< rawhtml >}}
<script>
const postures = [
    {
      "sanskrit": "samasthitiḥ",
      "english": "Even Standing",
      "audio": "/audio/samasthiti.m4a",
      "image": "/images/primary/sama.jpeg"
    },
    {
        "sanskrit": "uttānasana A",
        "english": "Stretching Out A",
        "audio": "/audio/uttana-a.m4a",
        "image": "/images/primary/uttana-a.jpeg"
    },
    {
        "sanskrit": "uttānasana B",
        "english": "Stretching Out B",
        "audio": "/audio/uttana-b.m4a",
        "image": "/images/primary/uttana-b.jpeg"
    },
    {
        "sanskrit": "caturaṅgadaṇḍāsana",
        "english": "Four-Limbed Stick Posture",
        "audio": "/audio/catur.m4a",
        "image": "/images/primary/catur.jpeg"
    },
    {
        "sanskrit": "ūrdhvamukhaśvānāsana",
        "english": "Upward-Face Dog Posture",
        "audio": "/audio/updog.m4a",
        "image": "/images/primary/updog.jpeg"
    },
    {
        "sanskrit": "adhomukhaśvānāsana",
        "english": "Downward-Face Dog Posture",
        "audio": "/audio/downdog.m4a",
        "image": "/images/primary/adhomukha.jpeg"
    },
    {
        "sanskrit": "pādāṅguṣṭhāsana",
        "english": "Thumb to Foot Posture (or Big Toe of the Foot Posture)",
        "audio": "/audio/padangusta.m4a",
        "image": "/images/primary/padangushthasana.jpeg"
    },
    {
        "sanskrit": "pādahastāsana",
        "english": "Hand under Foot Posture",
        "audio": "/audio/padahastasana.m4a",
        "image": "/images/primary/padahasta.jpeg"
    },
    {
        "sanskrit": "trikoṇāsana",
        "english": "Triangle Posture",
        "audio": "/audio/trikonasana.m4a",
        "image": "/images/primary/trikona.jpeg"
    },
    {
        "sanskrit": "parivṛttatrikoṇāsana",
        "english": "Revolved Triangle Posture",
        "audio": "/audio/parivrttatrikonasana.m4a",
        "image": "/images/primary/parivrttatrikona.jpeg"
    },
    {
        "sanskrit": "parivṛttatrikoṇāsana",
        "english": "Revolved Triangle Posture",
        "audio": "/audio/parshvakona.m4a",
        "image": "/images/primary/parsvakona.jpeg"
    },
    {
        "sanskrit": "parivṛttatrikoṇāsana",
        "english": "Revolved Triangle Posture",
        "audio": "/audio/parivrttaparshva.m4a",
        "image": "/images/primary/parivrttaparsvakona.jpeg"
    },
    {
        "sanskrit": "prasāritapādottānāsana A",
        "english": "Stretching Out to Spread Feet Posture A",
        "audio": "/audio/prsarita.m4a",
        "image": "/images/primary/prasarita-a.jpeg"
    },
    {
        "sanskrit": "prasāritapādottānāsana B",
        "english": "Stretching Out to Spread Feet Posture B",
        "audio": "/audio/prsarita.m4a",
        "image": "/images/primary/prasarita-b.jpeg"
    },
    {
        "sanskrit": "prasāritapādottānāsana C",
        "english": "Stretching Out to Spread Feet Posture C",
        "audio": "/audio/prsarita.m4a",
        "image": "/images/primary/prasarita-c.jpeg"
    },
    {
        "sanskrit": "prasāritapādottānāsana D",
        "english": "Stretching Out to Spread Feet Posture D",
        "audio": "/audio/prsarita.m4a",
        "image": "/images/primary/prasarita-d.jpeg"
    },
    {
        "sanskrit": "parśvottānāsana",
        "english": "Stretching Out to the Side Posture",
        "audio": "/audio/parshvottana.m4a",
        "image": "/images/primary/parsva.jpeg"
    },
    {
        "sanskrit": "utthitahastapādāṅguṣṭhāsana A",
        "english": "Standing Hand-to-Big-Toe-of-the-Foot Posture A",
        "audio": "/audio/utthitahasta.m4a",
        "image": "/images/primary/utthitahasta-a.jpeg"
    },
    {
        "sanskrit": "utthitahastapādāṅguṣṭhāsana B",
        "english": "Standing Hand-to-Big-Toe-of-the-Foot Posture B",
        "audio": "/audio/utthitahasta.m4a",
        "image": "/images/primary/utthitahasta-b.jpeg"
    },
    {
        "sanskrit": "utthitahastapādāṅguṣṭhāsana C",
        "english": "Standing Hand-to-Big-Toe-of-the-Foot Posture C",
        "audio": "/audio/utthitahasta.m4a",
        "image": "/images/primary/utthitahasta-c.jpeg"
    },
    {
        "sanskrit": "utthitahastapādāṅguṣṭhāsana D",
        "english": "Standing Hand-to-Big-Toe-of-the-Foot Posture D",
        "audio": "/audio/utthitahasta.m4a",
        "image": "/images/primary/utthitahasta-d.jpeg"
    },
    {
        "sanskrit": "ardhabaddhapadmottānāsana",
        "english": "Stretching out in Half Bound Lotus Posture",
        "audio": "/audio/ardhabaddhapadmottana.m4a",
        "image": "/images/primary/ardhabaddhapadmottana.jpeg"
    },
    {
        "sanskrit": "utkaṭāsana",
        "english": "Fierce Posture (often called Chair Posture)",
        "audio": "/audio/utkata.m4a",
        "image": "/images/primary/utkata.jpeg"
    },
    {
        "sanskrit": "vīrabhadrāsana A",
        "english": "Auspicious Hero Posture A (also called Warrior Posture)",
        "audio": "/audio/virabhadra.m4a",
        "image": "/images/primary/vira-1.jpeg"
    },
    {
        "sanskrit": "vīrabhadrāsana B",
        "english": "Auspicious Hero Posture B (also called Warrior Posture)",
        "audio": "/audio/virabhadra.m4a",
        "image": "/images/primary/vira-2.jpeg"
    },
    {
        "sanskrit": "caturaṅgadaṇḍāsana",
        "english": "Stick Posture",
        "audio": "/audio/danda.m4a",
        "image": "/images/primary/dandasana.jpeg"
    },
    {
        "sanskrit": "paścimottānāsana A",
        "english": "West Stretching Out Posture A",
        "audio": "/audio/paschimottana.m4a",
        "image": "/images/primary/paschi-a.jpeg"
    },
    {
        "sanskrit": "paścimottānāsana B",
        "english": "West Stretching Out Posture B",
        "audio": "/audio/paschimottana.m4a",
        "image": "/images/primary/paschi-b.jpeg"
    },
    {
        "sanskrit": "paścimottānāsana C",
        "english": "West Stretching Out Posture C",
        "audio": "/audio/paschimottana.m4a",
        "image": "/images/primary/paschi-c.jpeg"
    },
    {
        "sanskrit": "pūrvottānāsana",
        "english": "East Stretching out Posture",
        "audio": "/audio/purvottana.m4a",
        "image": "/images/primary/purvo.jpeg"
    },
    {
        "sanskrit": "ardhabaddhapadmapaścimottānāsana",
        "english": "Half Bound Lotus West Stretching out Posture",
        "audio": "/audio/ardhabaddhapadmapaschima.m4a",
        "image": "/images/primary/abpp.jpeg"
    },
    {
        "sanskrit": "tryaṅgamukhaikapādapaścimottānāsana",
        "english": "Three-Limbed Face to One Leg West Stretching out Posture",
        "audio": "/audio/tryanga.m4a",
        "image": "/images/primary/trianga.jpeg"
    },
    {
        "sanskrit": "jānuśīrṣāsana A",
        "english": "Head to Knee Posture A",
        "audio": "/audio/janushirsha.m4a",
        "image": "/images/primary/janu-a.jpeg"
    },
    {
        "sanskrit": "jānuśīrṣāsana B",
        "english": "Head to Knee Posture B",
        "audio": "/audio/janushirsha.m4a",
        "image": "/images/primary/janu-b.jpeg"
    },
    {
        "sanskrit": "jānuśīrṣāsana C",
        "english": "Head to Knee Posture C",
        "audio": "/audio/janushirsha.m4a",
        "image": "/images/primary/janu-c.jpeg"
    },
    {
        "sanskrit": "marīcyāsana A",
        "english": "Marīci Posture A",
        "audio": "/audio/marici.m4a",
        "image": "/images/primary/mari-a.jpeg"
    },
    {
        "sanskrit": "marīcyāsana B",
        "english": "Marīci Posture B",
        "audio": "/audio/marici.m4a",
        "image": "/images/primary/mari-b.jpeg"
    },
    {
        "sanskrit": "marīcyāsana C",
        "english": "Marīci Posture C",
        "audio": "/audio/marici.m4a",
        "image": "/images/primary/mari-c.jpeg"
    },
    {
        "sanskrit": "marīcyāsana D",
        "english": "Marīci Posture D",
        "audio": "/audio/marici.m4a",
        "image": "/images/primary/mari-d.jpeg"
    },
    {
        "sanskrit": "marīcyāsana A",
        "english": "Marīci Posture A",
        "audio": "/audio/marici.m4a",
        "image": "/images/primary/mari-a.jpeg"
    },
    {
        "sanskrit": "nāvāsana",
        "english": "Boat Posture",
        "audio": "/audio/nava.m4a",
        "image": "/images/primary/nava.jpeg"
    },
    {
        "sanskrit": "bhujapīḍāsana A",
        "english": "Pressure on the Shoulders Posture A",
        "audio": "/audio/bhuja.m4a",
        "image": "/images/primary/bhuja-a.jpeg"
    },
    {
        "sanskrit": "bhujapīḍāsana B",
        "english": "Pressure on the Shoulders Posture B",
        "audio": "/audio/bhuja.m4a",
        "image": "/images/primary/bhuja-b.jpeg"
    },
    {
        "sanskrit": "kūrmāsana",
        "english": "Tortoise Posture",
        "audio": "/audio/kurma.m4a",
        "image": "/images/primary/kurma.jpeg"
    },
    {
        "sanskrit": "suptakūrmāsana",
        "english": "Sleeping Tortoise Posture",
        "audio": "/audio/suptakurma.m4a",
        "image": "/images/primary/suptak.jpeg"
    },
    {
        "sanskrit": "garbhapiṇḍāsana",
        "english": "Embryo in the Womb Posture",
        "audio": "/audio/garbha.m4a",
        "image": "/images/primary/garbha.jpeg"
    },
    {
        "sanskrit": "kukkuṭāsana",
        "english": "Rooster Posture",
        "audio": "/audio/kukkuta.m4a",
        "image": "/images/primary/kukku.jpeg"
    },
    {
        "sanskrit": "baddhakoṇāsana A",
        "english": "Bound Angle Posture A",
        "audio": "/audio/baddhakona.m4a",
        "image": "/images/primary/baddhak-a.jpeg"
    },
    {
        "sanskrit": "baddhakoṇāsana B",
        "english": "Bound Angle Posture B",
        "audio": "/audio/baddhakona.m4a",
        "image": "/images/primary/baddhak-b.jpeg"
    },
    {
        "sanskrit": "upaviṣṭakoṇāsana A / suptakoṇāsana B",
        "english": "'Entered-into' Angle Posture A / Sleeping Angle Posture B",
        "audio": "/audio/upavishta.m4a",
        "image": "/images/primary/upa-a.jpeg"
    },
    {
        "sanskrit": "upaviṣṭakoṇāsana B",
        "english": "'Entered-into' Angle Posture B",
        "audio": "/audio/upavishta.m4a",
        "image": "/images/primary/upa-b.jpeg"
    },
    {
        "sanskrit": "suptakoṇāsana A",
        "english": "Sleeping Angle Posture A",
        "audio": "/audio/suptakona.m4a",
        "image": "/images/primary/suptak.jpeg"
    },
    {
        "sanskrit": "suptapādāṅguṣṭhāsana A",
        "english": "Sleeping Sleeping Thumb-to-Foot Posture A",
        "audio": "/audio/suptapada.m4a",
        "image": "/images/primary/suptapada-a.jpeg"
    },
    {
        "sanskrit": "suptapādāṅguṣṭhāsana B",
        "english": "Sleeping Sleeping Thumb-to-Foot Posture B",
        "audio": "/audio/suptapada.m4a",
        "image": "/images/primary/suptapada-b.jpeg"
    },
    {
        "sanskrit": "suptapādāṅguṣṭhāsana C",
        "english": "Sleeping Sleeping Thumb-to-Foot Posture C",
        "audio": "/audio/suptapada.m4a",
        "image": "/images/primary/suptapada-c.jpeg"
    },
    {
        "sanskrit": "suptapādāṅguṣṭhāsana D",
        "english": "Sleeping Sleeping Thumb-to-Foot Posture D",
        "audio": "/audio/suptapada.m4a",
        "image": "/images/primary/suptapada-d.jpeg"
    },
    {
        "sanskrit": "suptapādāṅguṣṭhāsana A",
        "english": "Sleeping Sleeping Thumb-to-Foot Posture A",
        "audio": "/audio/suptapada.m4a",
        "image": "/images/primary/suptapada-a.jpeg"
    },
    {
        "sanskrit": "ubhayapādāṅguṣṭhāsana A",
        "english": "Thumbs to Both Feet Posture A",
        "audio": "/audio/ubhayapada.m4a",
        "image": "/images/primary/ubhaya-a.jpeg"
    },
    {
        "sanskrit": "ubhayapādāṅguṣṭhāsana B",
        "english": "Thumbs to Both Feet Posture B",
        "audio": "/audio/ubhayapada.m4a",
        "image": "/images/primary/ubhaya-b.jpeg"
    },
    {
        "sanskrit": "ūrdhvamukhapaścimottānāsana",
        "english": "Upward Face West Stretching out Posture",
        "audio": "/audio/urdhvamukha.m4a",
        "image": "/images/primary/urdhvamukha.jpeg"
    },
    {
        "sanskrit": "setubandhāsana",
        "english": "Bridge-Binding Posture",
        "audio": "/audio/setu.m4a",
        "image": "/images/primary/setu.jpeg"
    },
    {
        "sanskrit": "sālambhasarvāṅgāsana",
        "english": "Posture where All Limbs are Held Up (AKA Shoulder Stand)",
        "audio": "/audio/salambha.m4a",
        "image": "/images/primary/shoulder.jpeg"
    },
    {
        "sanskrit": "hālāsana",
        "english": "Plow Posture",
        "audio": "/audio/hala.m4a",
        "image": "/images/primary/hala.jpeg"
    },
    {
        "sanskrit": "ūrdhvapadmāsana",
        "english": "Upward Lotus Posture",
        "audio": "/audio/urdhvapadma.m4a",
        "image": "/images/primary/urdhvapadma.jpeg"
    },
    {
        "sanskrit": "piṇḍāsana",
        "english": "Embryo Posture",
        "audio": "/audio/pinda.m4a",
        "image": "/images/primary/pinda.jpeg"
    },
    {
        "sanskrit": "matsyāsana",
        "english": "Fish Posture",
        "audio": "/audio/matsya.m4a",
        "image": "/images/primary/matsya.jpeg"
    },
    {
        "sanskrit": "uttānapādāsana",
        "english": "Legs Stretching out Posture",
        "audio": "/audio/uttanapada.m4a",
        "image": "/images/primary/uttanapada.jpeg"
    },
    {
        "sanskrit": "śīrṣāsana",
        "english": "Headstand",
        "audio": "/audio/sirsha.m4a",
        "image": "/images/primary/sirsa.jpeg"
    },
    {
        "sanskrit": "ūrdhvadaṇḍāsana A",
        "english": "Upward Stick Posture A",
        "audio": "/audio/urdhvadanda.m4a",
        "image": "/images/primary/urdhvadanda-a.jpeg"
    },
    {
        "sanskrit": "ūrdhvadaṇḍāsana B",
        "english": "Upward Stick Posture B",
        "audio": "/audio/urdhvadanda.m4a",
        "image": "/images/primary/urdhvadanda-b.jpeg"
    },
    {
        "sanskrit": "bālāsana",
        "english": "Child Posture",
        "audio": "/audio/bala.m4a",
        "image": "/images/primary/bala.jpeg"
    },
    {
        "sanskrit": "baddhapadmāsana",
        "english": "Bound Lotus Posture",
        "audio": "/audio/baddhapadma.m4a",
        "image": "/images/primary/baddhapadma.jpeg"
    },
    {
        "sanskrit": "padmāsana",
        "english": "Lotus Posture",
        "audio": "/audio/padma.m4a",
        "image": "/images/primary/padma.jpeg"
    },
    {
        "sanskrit": "tolāsana",
        "english": "'Tola' Posture",
        "audio": "/audio/tola.m4a",
        "image": "/images/primary/tola.jpeg"
    },
    {
        "sanskrit": "śāvāsana",
        "english": "Corpse Posture",
        "audio": "/audio/sava.m4a",
        "image": "/images/primary/sava.jpeg"
    }
]
</script>
{{< /rawhtml >}}


{{< rawhtml >}}
<script src="/js/quiz.js">
{{< /rawhtml >}}

