

// the secound take 



const testA = [
    ['hi!', 'testA1'],
    ['my name', 'testA2'],
    ['is Roy', 'testA3']
]
const testB = [
    ['hello!', 'testB1'],
    ['we are', 'testB2'],
    ['still here', 'testB3']
]

const cancellation = [
    ['cancellation'],
    ['Kündigung', `Hallo {%customer.firstName,fallback=%},
    
vielen Dank für deine Anfrage.
    ​
Hiermit bestätigen wir dir den Eingang deiner Kündigung.
    
Deine Kundennummer lautet: XXXXX
Deine Vertragsnummer lautet: XXXXXX
    
Du erhältst innerhalb von 6 Werktagen eine Kündigungsbestätigung.
    
​Ich wünsche dir einen tollen Tag.`],
    
    ['Widerrufs', `Hallo {%customer.firstName,fallback=%},
    
vielen Dank für deine Anfrage.
    ​
Hiermit bestätigen wir dir den Eingang deines Widerrufs.
    
Deine Kundennummer lautet: XXXXX
Deine Vertragsnummer lautet: XXXXXX
    
Du erhältst innerhalb von 6 Werktagen eine Widerrufsbestätigung.
    
Ich wünsche dir einen tollen Tag.`]
]
   
const beNice = [
    ['be nice!'],
    ['call us!',`Gerne kannst du uns bei weiteren Fragen telefonisch kontaktieren.
Wir sind von Mo - Fr zwischen 9:00 und 17:00 Uhr unter 040 593622030 erreichbar.`],
    ['-4,99',`Als kleines Dankeschön werden wir deine Seriengebühr für den Monat XXX in Höhe von 4,99 € erlassen.`],
    ['feedback',`Wir würden uns sehr freuen, wenn du uns eine Bewertung hinterlassen würdest. 
Hier ist der Link daz: https://de.trustpilot.com/review/rabot-charge.de.
Dein Feedback ist uns wichtig!`],

]

const headlines = [
    ['Headlines'],
    ['Unser Gespräch', 'Unser Gespräch'],
    ['Dein Wechsel', 'Dein Wechsel zu Rabot-Charge'],
    ['Deine Anfrage', 'Deine Anfrage'],
    ['Anfrage', 'Anfrage'],
    ['Dein Wideruf', 'Dein Wideruf V/K'],
    ['Deine Kündigung', 'Deine Kündigung V/K'],
    ['Rechnungsk.', 'Rechnungskorrektur'],
  ]
const headlinesEN = [
    ['subjects'],
    ['Our discotion', 'Our discotion'],
    ['Your transfer', 'Your transfer to Rabot-Charge'],
    ['Your inquery','Your inquery'],
    ['Inquery', 'Inquery'],
    ['Your cancelation', 'Your cancelation'],
    ['Your termanation','Your termanation']
]

const template = [
    ['templates'],
    ['nette Gespräch', `Hallo {%customer.firstName,fallback=%},
    
vielen Dank für das nette Gespräch.
    
Solltest du weitere Fragen haben, komme gerne auf mich zu. Deine Email landet direkt bei mir und ich würde mich dann sofort bei dir melden.
    ​
​Ich wünsche dir einen tollen Tag.`],
    
    ['deine Anfrage', `Hallo {%customer.firstName,fallback=%},
    
vielen Dank für deine Anfrage.
Bitte entschuldige unsere späte Rückmeldung, wir haben derzeit ein erhöhtes Mailaufkommen.​
    ​
Solltest du weitere Fragen haben, komme gerne auf mich zu. Deine E-Mail landet direkt bei mir und ich würde mich dann sofort bei dir melden.
    
Ich wünsche dir einen tollen Tag.`],
    ['Fachabteilung', `Hallo {%customer.firstName,fallback=%},
    
ich habe eine Rückantwort aus der Fachabteilung erhalten.
      
      
Ich wünsche dir einen schönen Tag`
      ]
]

const quickTelNotes = [
    ['quick notes'],
    ['Kollegen besprochen', 'G: Das Thema wurde bereits mit eiem Kollegen besprochen'],
    ['WP Status', 'G: KD rief an, um den Status seiner WP zu erfahren'],
    ['Früher anfangen', `G: KD wollte früher bei uns anfangen.
V: KD verlangt nach SoKü von AV, Vertrag bei uns widerrufen und ein neuer Vertrag schlissen.`],
]

const firstLine = 'Hallo {%customer.firstName,fallback=%},';

const secoundLineEmail = 'Vielen Dank für deine Anfrage.'; 
const secoundLinePhone = 'Vielen Dank für das nette Gespräch.';
const secoundLineFA = 'ich habe eine Rückantwort aus der Fachabteilung erhalten.';






// main list - to be use to build the sectionButton

const firstList = [
    headlines, headlinesEN, template
]

const secoundList = [
    cancellation, beNice
]

const theirdList = [
    quickTelNotes
]
