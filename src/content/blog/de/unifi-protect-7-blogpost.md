# UniFi Protect 7.0: Firmware-Rollback, Tag Manager und Custom Layouts im Überblick

Ubiquiti hat mit UniFi Protect 7.0 ein grösseres Update veröffentlicht, das einige lang gewünschte Funktionen mitbringt. Die aktuelle Version 7.0.73 befindet sich im Release-Candidate-Status und enthält neben den neuen Features auch diverse Bugfixes. Ich habe mir das Update genauer angeschaut und fasse hier zusammen, was sich geändert hat.

## Firmware-Rollback: Endlich möglich

Das wohl wichtigste neue Feature für viele Admins: UniFi Protect zeigt jetzt im linken Bereich neben der ältesten Aufnahme auch die aktuelle Firmware-Version an. Und direkt daneben gibt es einen neuen Button, mit dem sich die vorherige Firmware-Version wiederherstellen lässt.

Wer also nach einem Update auf Probleme stösst oder versehentlich aktualisiert hat, kann einfach auf die vorherige Version zurückrollen. Optional lässt sich dabei ein Support-File an Ubiquiti senden, was bei der Fehleranalyse hilft. Das Ganze lässt sich aber auch abwählen. Es wird klar angezeigt, auf welche Version zurückgesetzt wird.

Hoffentlich bringt Ubiquiti diese Rollback-Funktion bald auch in die anderen UniFi-Anwendungen.

## Dashboard: Echtzeit-Bitrate und AI-Monitoring

Im Dashboard gibt es jetzt eine Anzeige der Echtzeit-Bitrate. So sieht man auf einen Blick, wie viel Bandbreite die Kameras aktuell verbrauchen. In meinem Fall lag der Wert bei etwa 25 bis 35 Mbit/s.

Wer einen AI Key im Einsatz hat, bekommt zusätzlich die Edge-AI-Latenz angezeigt. Das umfasst verarbeitete Detektionen, durchschnittliche Latenzwerte und eine Übersicht über die verschiedenen AI-Dienste: Object Indexing, AI Summary, Speech-to-Text, LPR für Legacy-Kameras und Face ID. Die einzelnen Dienste lassen sich bei Bedarf auch deaktivieren.

Die CPU-Auslastung des AI Keys wird ebenfalls angezeigt. Bei mir lag sie bei gerade mal 5%.

## Custom Camera Layouts

Die Kamera-Ansicht im Dashboard lässt sich jetzt frei anpassen. Kameras können per Drag-and-Drop an die gewünschte Position gezogen werden. Wer seine Doorbell-Kamera lieber rechts statt links sehen will, zieht sie einfach rüber und speichert die Anordnung.

Dazu gibt es eine Auto-Arrange-Funktion, die ein automatisches Layout vorschlägt. Und wer verschiedene Ansichten braucht, kann über die drei Icons mehrere Multi-Views anlegen, etwa für unterschiedliche Stockwerke oder Gebäudebereiche.

## Tag Manager: Kameras gruppieren

Unter "Devices" gibt es jetzt einen Tag Manager. Damit lassen sich Kameras in logische Gruppen einteilen. Zum Beispiel ein Tag "Front of House" für alle Kameras an der Vorderseite des Hauses.

Das Praktische daran: Diese Tags tauchen auch in der "Find Anything"-Suche auf. Statt alle Kameras durchzugehen, wählt man einfach den passenden Tag und sieht nur die relevanten Aufnahmen. Für grössere Installationen mit vielen Kameras ist das ein echter Zeitsparer.

## Bewegungspfade in der Wiedergabe

Bei der Wiedergabe von Aufnahmen lässt sich jetzt ein Bewegungspfad einblenden. Unter "Object Overlay" gibt es die neue Option "Path", die den Weg von erkannten Personen als blaue Linie mit Pfeilrichtung darstellt.

Das kann hilfreich sein, wenn man nachvollziehen will, welchen Weg jemand genommen hat. Etwa wenn etwas aus dem Garten verschwunden ist und man sehen möchte, wohin sich eine Person bewegt hat. PTZ-Kameras sind davon allerdings ausgenommen.

## Bildbasierte Suche in Find Anything

Find Anything unterstützt jetzt eine bildbasierte Suche. Man lädt ein Foto hoch und das System sucht nach ähnlichen Personen in den Aufnahmen. Dabei lässt sich ein Konfidenz-Level einstellen: Bei hoher Einstellung werden nur sehr ähnliche Treffer angezeigt, bei niedrigerer Einstellung auch entferntere Übereinstimmungen.

Für den Praxistest habe ich ein Thumbnail-Bild hochgeladen und das System hat mich sowohl mit als auch ohne Mütze erkannt. Das Ganze setzt einen AI Key mit aktivierter Computer-Vision-Erweiterung voraus.

## AI-Policies und Offsite Archiving

Im neuen Intelligence-Bereich gibt es jetzt ein Flussdiagramm, das die AI-Policies visualisiert. Es zeigt, wie Kameras (sowohl moderne AI-Kameras als auch Legacy-Kameras über LPR) in die AI-Verarbeitung eingebunden sind und wie daraus Alarme und Benachrichtigungen entstehen.

Das Offsite-Archiving hat ebenfalls eine visuelle Darstellung bekommen. Der Datenfluss von Kamera über On-Site-Storage bis hin zu Cloud-Diensten wie Google Drive, OneDrive, Dropbox oder einem NAS wird übersichtlich dargestellt. Laut der Anzeige ist "Continuous Recording Scheduled Uploads" als Feature noch in Arbeit.

## Bugfixes in Version 7.0.73

Die aktuelle Version 7.0.73 adressiert mehrere konkrete Probleme:

- Drittanbieter-Kameras verbinden sich jetzt wieder korrekt nach einer IP-Änderung
- Drittanbieter-Kameras nehmen die Aufzeichnung nach einer Systemunterbrechung wieder auf
- Bewegungsereignisse von Drittanbieter-Kameras mit AI Port werden wieder korrekt verarbeitet
- Der Temperaturregler der Safe Zone zeigt jetzt die richtigen Grenzwerte an, wenn Fahrenheit eingestellt ist
- Der Kapazitätsbalken spiegelt die tatsächliche Kameranutzung wieder korrekt wider
- Das Abbrechen eines verzögerten Scharfschaltungs-Countdowns stoppt den Vorgang jetzt tatsächlich, statt im Hintergrund weiterzulaufen

Gerade der letzte Punkt war ein potenzielles Sicherheitsproblem: Wer den Alarm-Countdown abgebrochen hat, konnte sich in falscher Sicherheit wiegen, weil das System trotzdem scharf geschaltet wurde.

## Voraussetzungen

UniFi Protect 7.0 setzt UniFi OS 5.1.0 oder neuer voraus. Wer noch eine ältere OS-Version fährt, muss zuerst dort aktualisieren.

## Fazit

UniFi Protect 7.0 ist ein solides Update. Die Firmware-Rollback-Funktion allein ist den Umstieg wert, weil sie bei problematischen Updates einfach ein Sicherheitsnetz bietet. Tag Manager und Custom Layouts machen die tägliche Nutzung komfortabler, vor allem bei grösseren Installationen. Und die Bewegungspfade sowie die bildbasierte Suche erweitern die Analysemöglichkeiten spürbar.

Die Version 7.0.73 ist aktuell noch ein Release Candidate. Wer auf Nummer sicher gehen will, wartet auf die finale GA-Version. Alle anderen können das Update über das Dashboard einspielen.

---

*Quellen: [UniFi Protect 7.0.73 Release Notes](https://community.ui.com/releases/UniFi-Protect-Application-7-0-73/128d7f05-7605-4cd2-8b28-659439be1418) | Video: [Mactelecom Networks – UniFi Protect 7](https://www.youtube.com/watch?v=Eq0u-GnEr4I)*
