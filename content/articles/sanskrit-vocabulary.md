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

{{<audio src="/audio/terms/things.m4a" span="3" title="Pronunciation">}}

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

Most Sanskrit posture-names are *compounds*:  i.e., they consist of two or more basic words joined together.

Now when we speak, we often modify adjacent words to make then easier to say.  For example, when we speak the question "Do you want play ball?", it usually sounds something like: "D'ya wanna play ball?"

It's the same in Sanskirt, except that in the written language every effort is made to represent *exactly* how the spoken language sounds.  One consequence of this is that the words in Sanskrit compounds often undergo changes at the end when followed by another word, and at the beginning when preceeded by a word.

For example, if you want to say "face to one foot" in Sanskrit, you will make a compound out of *mukha* ("face"), *eka* ("one"), and *pāda*, ("foot").  When you do so, there is a sound-change:

>mukha + eka + pāda -> mukhaikapāda

The "a" of *mukha* combines with the "e" of *pada* to make the "ai" sound. (No changes were required when joining *eka* and *pāda*.)

Here are a few more examples:

* paścima + uttāna + āsana -> paścimottānāsana
* tri + aṅga -> tryaṅga
* dhanuḥ + āsana -> dhanurāsana

There is no need to learn the sound-change rules formally:  if you know the simple words well enough, then you can usually recognize them in compounds.

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

