

// the secound take 

const cancellation = [
    ['cancellation', '30vh'],
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
    ['be nice!', '30vh'],
    ['call us!',`Gerne kannst du uns bei weiteren Fragen telefonisch kontaktieren.
Wir sind von Mo - Fr zwischen 9:00 und 17:00 Uhr unter 040 593622030 erreichbar.`],
    ['-4,99',`Als kleines Dankeschön werden wir deine Seriengebühr für den Monat XXX in Höhe von 4,99 € erlassen.`],
    ['feedback',`Wir würden uns sehr freuen, wenn du uns eine Bewertung hinterlassen würdest. 
Hier ist der Link daz: https://de.trustpilot.com/review/rabot-charge.de.
Dein Feedback ist uns wichtig!`],
    ['Code', `Mit der Bewerbungscode CWZBIYS erhaltest du bei Anmeldung eine 50 € Gutschrift von uns.`],

]
const headlines = [
    ['Headlines', '60vh'],
    ['Unser Gespräch', 'Unser Gespräch'],
    ['Dein Wechsel', 'Dein Wechsel zu Rabot-Charge'],
    ['Deine Anfrage', 'Deine Anfrage'],
    ['Anfrage', 'Anfrage'],
    ['Dein Wideruf', 'Dein Wideruf V/K'],
    ['Deine Kündigung', 'Deine Kündigung V/K'],
    ['Rechnungsk.', 'Rechnungskorrektur'],
]
const headlinesEN = [
    ['subjects', '60vh'],
    ['Our discotion', 'Our discotion'],
    ['Your transfer', 'Your transfer to Rabot-Charge'],
    ['Your inquery','Your inquery'],
    ['Inquery', 'Inquery'],
    ['Your cancelation', 'Your cancelation'],
    ['Your termanation','Your termanation']
]
const template = [
    ['templates', '30vh'],
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
    ['FA', `Hallo {%customer.firstName,fallback=%},
    
ich habe eine Rückantwort aus der Fachabteilung erhalten.
      
      
Ich wünsche dir einen schönen Tag`
      ]
]
const quickNeed = [
    ['need', '60vh'],
    ['JV', `Bitte teile mir deinen neuen, gewünschten Jahresverbrauch mit. Ich werde ihn im System aktualisieren.`],
    ['pay Rc', `Bitte überweise die Rechnungsnummer XXX auf die folgende IBAN mit dem folgenden Verwendungszweck.`],
    ['ZS', `Bitte teile mir deinen aktuellen Zählerstand mit.`],
    ['IBAN', 'Bitte teile mir deine neue IBAN mit.'],
    ['ZF', `Kannst du uns bitte ein Bild von deinem Zähler schicken?`],
    ['Kontoausz.', `Bitte teile mir die Kontoauszüge für den XXXX und XXXX Abschläge.`],
    ['email', `Bitte teile mir deine neue gewünschte E-Mail-Adresse mit.`],

]
const quickGot = [
    ['got', '40vh'],
    ['info MP', `Ich habe diese Information an unseren Marktpartner weitergeleitet. Sobald ich Rückantwort habe, melde ich mich zeitnah bei dir.`],
    ['ZS', `Ich habe die von dir angegebenen Zählerstände an unseren Marktpartner weitergeleitet.`],
    
]
const quickTelNotes = [
    ['quick notes', '40vh'],
    ['Kollegen besprochen', 'G: Das Thema wurde bereits mit eiem Kollegen besprochen'],
    ['WP Status', 'G: KD rief an, um den Status seiner WP zu erfahren'],
    ['Früher anfangen', `G: KD wollte früher bei uns anfangen.
V: KD verlangt nach SoKü von AV, Vertrag bei uns widerrufen und ein neuer Vertrag schlissen.`],
]
const firstLine = 'Hallo {%customer.firstName,fallback=%},';

const secoundLine = [
    ['second line', '30vh'],
    ['email', 'Vielen Dank für deine Anfrage.'],
    ['phone', 'Vielen Dank für das nette Gespräch.'],
    ['fachabt.', 'ich habe eine Rückantwort aus der Fachabteilung erhalten.']
]
const need = [
    ['need', '60vh'],
    ['JV'],
    ['ZS'],
    ['ÜP'],
    ['ZF'],
    ['ZF & ÜP'],
    ['IBAN'],
    ['Kontoauszug']
]
const want = [
    ['want', '60vh'],
    ['JV',['JV me!']],
    ['ZS'],
    ['ÜP'],
    ['ZF'],
    ['ZF & ÜP'],
    ['IBAN'],
    ['Kontoauszug']
]
const otherEmailRelated = [
    ['other', '30vh'],
    ['late', 'sorry i am late'],
    ['recommend', 'say nice stuff about me!'],
    
]


// main list - to be use to build the sectionButton

const firstList = [
    headlines, headlinesEN, template
]

const secoundList = [
    cancellation, beNice
]

const theirdList = [
    quickTelNotes, quickGot, quickNeed
]

const forthList =[
    secoundLine, need, want, otherEmailRelated
]
