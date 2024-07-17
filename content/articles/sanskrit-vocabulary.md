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

It's a good idea to learn, as much as possible, the Sanskrit names of the postures in the Aśṭāṅga Yoga system.  In the Yoga world, Sanskrit functions rather like Latin did in the Europe until recently:  as a way for educated folks to communicate across language barriers and even across regional differences in the same language.  At a Yoga studio in California when they lift the right leg, grab the big toe with thumb and first two fingers of the right hand, they might say they are going into "Extended Hand-to-Big-Toe Pose", and in a little practice group in Kentucky they might say "Standing Hand-to-Big-Toe-of-the-Foot Posture", but if everyone also knows it as *utthitahastapādāṅguṣṭhāsana*, then when they meet in a workshop at a rural retreat in Noble, Oklahoma, right away they can lift their right legs and proceed together.

In this article we introduce some basic Sanskrit words that occur as parts of many posture-names, though the focus is on postures of the Primary Series.  If you invest the time to learn just these few words, you will find it much easier to take in the full names of the all the Primary Series postures, as covered in the follow-up <a href="articles/primary/">article</a>.

### Pronunciation

We write the Sanskrit words in the International Alphabet of Sanskrit Transliteration (<a href="https://en.wikipedia.org/wiki/International_Alphabet_of_Sanskrit_Transliteration" target="_blank">IAST</a>). This alphabet looks pretty much like the familiar English alphabet, but with the possibility of *diacritic marks*---dots, dashes and such---above or below letters.  For example, you'll see not only the letter "s" (pronounced like the "s" in "sea", but also "ś" and "ṣ", which represent slightly different "sh"-sounds.

If you want to go all-in on the principles of Sanskrit pronuniciation, you can consult other resources (like <a href="https://learnsanskrit.org/sounds/" target="_blank">this one</a> which gives you the option to use IAST), but you'll also get the hang of it if you listen to the audio files below, and keep in mind the following basics:

* "c" is pronounced like the "ch" in "chip-monk";
* "g" is pronounced like the second "g" in "gigantic" (not the first one!);
* "a" is pronounced like the "u" in "cup";
* "ā" is pronounced like the "a" in "father";
* "ū" is pronounced like the "oo" in "moon";
* "i" in pronounced like the "i" in "in";
* "ī" is pronounced like "ee" in "green";
* "e" is pronounced like the "e" in "grey";
* "ś" and "ṣ" are slightly different "sh"-sounds;
* consonant-letters with "h" right after---such as "bh", "ph", "dh", and "th"---are *aspirates*:  they are pronounced like the leading letter, but with a accompanying puff of air.  (Thus "ph" is *not* like the "ph" in "phantom"!)

## Action-Related Words

Sanskrit | English
-------- | ----------
uttāna | stretching out
bandha | binding
namaḥ | salutation, a bow
kāra | making, doing
āsana | "sitting", a posture
sthitiḥ | standing

{{<audio src="/audio/terms/action.m4a" span="3" title="Pronunciation">}}

{{< rawhtml >}}
<style>
th:hover {
  color: #AAA7EA;
}
</style>
{{< /rawhtml >}}

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

