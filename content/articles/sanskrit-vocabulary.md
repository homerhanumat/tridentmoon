---
title: Sanskrit Vocabulary for Primary Series
description: ""
omit_header_text: false
featured_image: images/shiva_moon_landscape-2.jpg
type: page
summary: "Some basic Sanskrit terms that occur in the names of postures, especially in the Primary Series."
weight: 2
---

## Introduction

TODO

## Action-Related Words

Sanskrit | English
-------- | ----------
uttāna | stretching out
bandha | binding
namaskāra | "making *namaḥ*", doing obesience
āsana | "sitting", a posture
sthitiḥ | standing

{{<audio src="/audio/terms/action.m4a" span="3" title="Pronunciation">}}

## Body Parts

Sanskrit | English
-------- | ----------
pāda | foot, leg
hasta | hand
aṅguśṭha | big toe, thumb
parśva | side, flank
aṅga | limb
mukha | face
jānu | knee
śīrṣa | head
bhuja | shoulder

{{<audio src="/audio/terms/body.m4a" span="3" title="Pronunciation">}}


## Adjectives

Sanskrit | English
-------- | ----------
supta | lain down as if to sleep
baddha | bound
utthita | "stood up", standing
parivṛtta | "turned around", revolved
sama | same, equal

{{<audio src="/audio/terms/adjectives.m4a" span="3" title="Pronunciation">}}


## Directions

Sanskrit | English
-------- | ----------
paścima | western, back
pūrva | eastern, front
ūrdhva | upward
adhaḥ | downward

{{<audio src="/audio/terms/directions.m4a" span="3" title="Pronunciation">}}


## Things

{{<audio src="/audio/terms/things.m4a" span="3" title="Pronunciation">}}

Sanskrit | English
-------- | ----------
sūrya | the sun
padma | a lotus
nāva | a boat
śāva | a corpse
śvāna | a dog
bāla | a child
matsya | a fish
kūrma | a tortoise
daṇḍa | a stick
kukkuṭa | a rooster
hāla | a plow
koṇa | an angle
dhanuḥ | a bow

## Number-Related Words

Sanskrit | English
-------- | ----------
eka | one
tri | three
catuḥ | four
aśṭa | eight
ubhaya | both
sarva | all, every

{{<audio src="/audio/terms/number.m4a" span="3" title="Pronunciation">}}


## Joining Words

TODO

{{< rawhtml >}}
<script>
    
/**************************************************
  * for tables where second column shows text when 
  * mouse hovers
  ************************************************/

function modifyColumn(table, columnIndex, language) {
    const headers = table.getElementsByTagName("th");
    headers[columnIndex].innerHTML = `${language} (click to hide)`;
    headers[columnIndex].addEventListener("click", function(e) {
        console.log("hello");
        const rows = table.getElementsByTagName('tr');
        for (let i = 0; i < rows.length; i++) {
            const cells = rows[i].getElementsByTagName('td');
            if (cells.length > columnIndex) {
              let elem = cells[columnIndex]
              let hidden = elem.style.visibility === "hidden";
              console.log(hidden);
              if (hidden) {
                elem.style.visibility = "visible";
                e.target.innerHTML = `${language} (click to hide)`;
              } else {
                elem.style.visibility = "hidden";
                e.target.innerHTML = `${language} (click to show)`;
              }
            }
          }
    });
    
  }

  const termTables = document.getElementsByTagName("table");
  for (let tab of termTables) {
    modifyColumn(tab, 0, "Sanskrit");
    modifyColumn(tab, 1, "English");
  }


</script>
{{< /rawhtml >}}

