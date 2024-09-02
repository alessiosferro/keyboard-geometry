(()=>{"use strict";var e=["more","altri"];function o(){var o=document.querySelectorAll("div.toolsPanel button.materialTextButton");return o.length>0?Array.from(o).find((function(o){return o.textContent&&e.includes(o.textContent.toLowerCase())})):null}function i(){return/iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent)}function n(){return i()?"⌥ Option":"Alt"}const t={Muovi:"⇧ Shift + Q",Punto:"⇧ Shift + W",Segmento:"⇧ Shift + E",Retta:"⇧ Shift + R",Poligono:"⇧ Shift + T","Circonferenza - centro e punto":"⇧ Shift + Y","Seleziona oggetti":"⇧ Shift + U","Mostra / Nascondi etichetta":"⇧ Shift + I","Mostra / Nascondi oggetto":"⇧ Shift + O",Elimina:"⇧ Shift + P","Muovi la vista Grafici":"⇧ Shift + A","Copia stile visuale":"⇧ Shift + S","Punto medio o centro":"⇧ Shift + D","Retta perpendicolare":"⇧ Shift + F","Asse di un segmento":"⇧ Shift + G","Retta parallela":"⇧ Shift + H",Bisettrice:"⇧ Shift + J",Tangenti:"⇧ Shift + K",Luogo:"⇧ Shift + L",Angolo:"⇧ Shift + Z","Angolo di data misura":"⇧ Shift + X","Distanza o lunghezza":"⇧ Shift + C",Area:"⇧ Shift + V",Slider:"⇧ Shift + B",Pendenza:"⇧ Shift + N",Intersezione:"⇧ Shift + M","Punto su oggetto":"".concat(n()," + Q"),"Vincola / Svincola punto":"".concat(n()," + W"),Estremo:"".concat(n()," + E"),Radici:"".concat(n()," + R"),"Segmento - lunghezza fissa":"".concat(n()," + T"),Semiretta:"".concat(n()," + Y"),Vettore:"".concat(n()," + U"),"Vettore - dati un punto e la direzione":"".concat(n()," + I"),"Polare o diametro":"".concat(n()," + O"),"Spezzata aperta":"".concat(n()," + P"),"Retta di regressione":"".concat(n()," + A"),"Circonferenza - centro e raggio":"".concat(n()," + S"),Compasso:"".concat(n()," + D"),Semicirconferenza:"".concat(n()," + F"),"Settore circolare":"".concat(n()," + G"),"Arco di circonferenza":"".concat(n()," + H"),"Circonferenza - tre punti":"".concat(n()," + J"),"Settore circolare - tre punti":"".concat(n()," + K"),"Arco di circonferenza - tre punti":"".concat(n()," + L"),"Poligono regolare":"".concat(n()," + Z"),"Poligono vettore":"".concat(n()," + X"),"Poligono rigido":"".concat(n()," + C"),Ellisse:"".concat(n()," + V"),"Conica - cinque punti":"".concat(n()," + B"),Parabola:"".concat(n()," + N"),Iperbole:"".concat(n()," + M"),Traslazione:"".concat(n()," + ⇧ Shift + Q"),Rotazione:"".concat(n()," + ⇧ Shift + W"),"Simmetria assiale":"".concat(n()," + ⇧ Shift + E"),"Simmetria centrale":"".concat(n()," + ⇧ Shift + R"),Omotetia:"".concat(n()," + ⇧ Shift + T"),"Inversione circolare":"".concat(n()," + ⇧ Shift + Y"),Immagine:"".concat(n()," + ⇧ Shift + U"),Testo:"".concat(n()," + ⇧ Shift + I"),Penna:"".concat(n()," + ⇧ Shift + O"),"Grafico a mano libera":"".concat(n()," + ⇧ Shift + P"),Relazione:"".concat(n()," + ⇧ Shift + A"),Pulsante:"".concat(n()," + ⇧ Shift + S"),"Casella di controllo":"".concat(n()," + ⇧ Shift + D"),"Campo di inserimento":"".concat(n()," + ⇧ Shift + F")},a="geogebra-extension-shortcuts",r={Muovi:{value:"mode0",description:"Muovi. Trascina o seleziona un oggetto"},Punto:{value:"mode1",description:"Punto. Seleziona la posizione o una retta, una funzione o una curva"},Segmento:{value:"mode15",description:"Segmento. Seleziona due punti o posizioni"},Retta:{value:"mode2",description:"Retta. Seleziona due punti o posizioni"},Poligono:{value:"mode16",description:"Poligono. Seleziona tutti i vertici, quindi nuovamente il vertice iniziale"},"Circonferenza - centro e punto":{value:"mode10",description:"Circonferenza - centro e punto. Seleziona il centro, quindi un punto della circonferenza"},"Seleziona oggetti":{value:"mode77",description:"Seleziona oggetti. Fai clic su un oggetto per selezionarlo o usa un rettangolo per selezionare più oggetti"},"Mostra / Nascondi etichetta":{value:"mode28",description:"Mostra / Nascondi etichetta. Seleziona un oggetto"},"Mostra / Nascondi oggetto":{value:"mode27",description:"Mostra / Nascondi oggetto. Seleziona gli oggetti da nascondere, quindi cambia strumento per applicare le modifiche"},Elimina:{value:"mode6",description:"Elimina. Seleziona un oggetto da eliminare"},"Muovi la vista Grafici":{value:"mode40",description:"Muovi la vista Grafici. Trascina una zona vuota dello sfondo o un asse"},"Copia stile visuale":{value:"mode35",description:"Copia stile visuale. Seleziona un oggetto, quindi fai clic o un tocco su altri oggetti"},"Punto medio o centro":{value:"mode19",description:"Punto medio o centro. Seleziona due punti, un segmento, una circonferenza o una conica"},"Retta perpendicolare":{value:"mode4",description:"Retta perpendicolare. Seleziona un retta perpendicolare e un punto"},"Asse di un segmento":{value:"mode8",description:"Asse di un segmento. Seleziona due punti o un segmento"},"Retta parallela":{value:"mode3",description:"Retta parallela. Seleziona una retta parallela e un punto"},Bisettrice:{value:"mode9",description:"Bisettrice. Seleziona tre punti o due rette"},Tangenti:{value:"mode13",description:"Tangenti. Seleziona un punto o una retta, quindi una circonferenza, una conica o una funzione"},Luogo:{value:"mode47",description:"Luogo. Seleziona il punto che genera il luogo, quindi un punto sull'oggetto o uno slider"},Angolo:{value:"mode36",description:"Angolo. Seleziona tre punti o due rette"},"Angolo di data misura":{value:"mode46",description:"Angolo di data misura. Seleziona un punto di un lato, il vertice, quindi inserisci l'ampiezza"},"Distanza o lunghezza":{value:"mode38",description:"Distanza o lunghezza. Seleziona due punti, un segmento, un poligono o una circonferenza"},Area:{value:"mode49",description:"Area. Seleziona un poligono, una circonferenza o una conica"},Slider:{value:"mode25",description:"Slider. Seleziona la posizione"},Pendenza:{value:"mode50",description:"Pendenza. Seleziona una retta"},Intersezione:{value:"mode5",description:"Intersezione. Seleziona due oggetti o fai clic sulla loro intersezione"},"Punto su oggetto":{value:"mode501",description:"Punto su oggetto. Seleziona un oggetto o il suo perimetro"},"Vincola / Svincola punto":{value:"mode67",description:"Vincola / Svincola punto. Seleziona un punto, quindi l'oggetto su cui vincolarlo"},Estremo:{value:"mode75",description:"Estremo. Seleziona una funzione"},Radici:{value:"mode76",description:"Radici. Seleziona una funzione"},"Segmento - lunghezza fissa":{value:"mode45",description:"Segmento - lunghezza fissa. Seleziona un punto, quindi inserisci la lunghezza"},Semiretta:{value:"mode18",description:"Semiretta. Seleziona il punto iniziale, quindi un punto della semiretta"},Vettore:{value:"mode7",description:"Vettore. Seleziona il punto di applicazione, quindi il punto finale"},"Vettore - dati un punto e la direzione":{value:"mode37",description:"Vettore - dati un punto e la direzione. Seleziona il punto di applicazione, quindi un vettore"},"Polare o diametro":{value:"mode44",description:"Polare o diametro. Seleziona un punto o una retta, quindi una circonferenza o una conica"},"Spezzata aperta":{value:"mode65",description:"Spezzata aperta. Seleziona tutti i vertici, quindi ancora il vertice iniziale"},"Retta di regressione":{value:"mode58",description:"Retta di regressione. Seleziona più punti o una lista di punti"},"Circonferenza - centro e raggio":{value:"mode34",description:"Circonferenza - centro e raggio. Seleziona il centro, quindi inserisci la misura del raggio"},Compasso:{value:"mode53",description:"Compasso. Seleziona un segmento o due punti per il raggio, quindi il centro"},Semicirconferenza:{value:"mode24",description:"Semicirconferenza. Seleziona due punti"},"Settore circolare":{value:"mode21",description:"Settore circolare. Seleziona il centro, quindi i due estremi"},"Arco di circonferenza":{value:"mode20",description:"Arco di circonferenza. Seleziona il centro e due punti"},"Circonferenza - tre punti":{value:"mode11",description:"Circonferenza - tre punti. Seleziona tre punti della circonferenza"},"Settore circolare - tre punti":{value:"mode23",description:"Settore circolare - tre punti. Seleziona tre punti del settore"},"Arco di circonferenza - tre punti":{value:"mode22",description:"Arco di circonferenza - tre punti. Seleziona tre punti dell'arco"},"Poligono regolare":{value:"mode51",description:"Poligono regolare. Seleziona due punti, quindi inserisci il numero dei vertici"},"Poligono vettore":{value:"mode70",description:"Poligono vettore. Seleziona tutti i vertici, quindi nuovamente il vertice iniziale"},"Poligono rigido":{value:"mode64",description:"Poligono rigido. Seleziona tutti i vertici, quindi nuovamente il vertice iniziale, oppure seleziona un poligono"},Ellisse:{value:"mode55",description:"Ellisse. Seleziona i due fuochi, quindi un punto dell'ellisse"},"Conica - cinque punti":{value:"mode12",description:"Conica - cinque punti. Seleziona cinque punti della conica"},Parabola:{value:"mode57",description:"Parabola. Seleziona il fuoco, quindi la direttrice"},Iperbole:{value:"mode56",description:"Iperbole. Seleziona i due fuochi, quindi un punto dell'iperbole"},Traslazione:{value:"mode31",description:"Traslazione. Seleziona l'oggetto da traslare, quindi il vettore traslazione"},Rotazione:{value:"mode32",description:"Rotazione. Seleziona l'oggetto da ruotare, quindi il centro e inserisci l'ampiezza dell'angolo"},"Simmetria assiale":{value:"mode30",description:"Simmetria assiale. Seleziona l'oggetto da trasformare, quindi l'asse di simmetria"},"Simmetria centrale":{value:"mode29",description:"Simmetria centrale. Seleziona l'oggetto da trasformare, quindi il centro di simmetria"},Omotetia:{value:"mode33",description:"Omotetia. Seleziona un oggetto, quindi il centro e inserisci il valore del rapporto"},"Inversione circolare":{value:"mode54",description:"Inversione circolare. Seleziona l'oggetto da trasformare, quindi la circonferenza"},Immagine:{value:"mode26",description:"Immagine. Seleziona l'immagine tra i tuoi file, oppure la webcam"},Testo:{value:"mode17",description:"Testo. Seleziona la posizione o un punto già esistente"},Penna:{value:"mode62",description:"Penna. Scrivi o disegna. Modifica i colori con la barra di stile."},"Grafico a mano libera":{value:"mode73",description:"Grafico a mano libera. Disegna una funzione o un oggetto geometrico"},Relazione:{value:"mode14",description:"Relazione. Seleziona due oggetti"},Pulsante:{value:"mode60",description:"Pulsante. Seleziona la posizione"},"Casella di controllo":{value:"mode52",description:"Casella di controllo. Seleziona la posizione"},"Campo di inserimento":{value:"mode61",description:"Campo di inserimento. Seleziona la posizione"}};var l=function(){return l=Object.assign||function(e){for(var o,i=1,n=arguments.length;i<n;i++)for(var t in o=arguments[i])Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t]);return e},l.apply(this,arguments)};const c=["Muovi","Punto","Segmento","Retta","Poligono","Circonferenza - centro e punto","Seleziona oggetti","Mostra / Nascondi etichetta","Mostra / Nascondi oggetto","Elimina","Muovi la vista Grafici","Copia stile visuale","Punto medio o centro","Retta perpendicolare","Asse di un segmento","Retta parallela","Bisettrice","Tangenti","Luogo","Angolo","Angolo di data misura","Distanza o lunghezza","Area","Slider","Pendenza","Intersezione","Punto su oggetto","Vincola / Svincola punto","Estremo","Radici","Segmento - lunghezza fissa","Semiretta","Vettore","Vettore - dati un punto e la direzione","Polare o diametro","Spezzata aperta","Retta di regressione","Circonferenza - centro e raggio","Compasso","Semicirconferenza","Settore circolare","Arco di circonferenza","Circonferenza - tre punti","Settore circolare - tre punti","Arco di circonferenza - tre punti","Poligono regolare","Poligono vettore","Poligono rigido","Ellisse","Conica - cinque punti","Parabola","Iperbole","Traslazione","Rotazione","Simmetria assiale","Simmetria centrale","Omotetia","Inversione circolare","Immagine","Testo","Penna","Grafico a mano libera","Relazione","Pulsante","Casella di controllo","Campo di inserimento"].reduce((function(e,o){var i;return l(l({},e),((i={})[o]=function(){return function(e){var o;null===(o=document.getElementById(r[e].value))||void 0===o||o.click()}(o)},i))}),{});var u=function(){return u=Object.assign||function(e){for(var o,i=1,n=arguments.length;i<n;i++)for(var t in o=arguments[i])Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t]);return e},u.apply(this,arguments)},d=localStorage.getItem(a);const s=(p=d?JSON.parse(d):t,Object.keys(r).reduce((function(e,o){var i;return u(u({},e),((i={})[p[o]]={callback:c[o],toolName:o},i))}),{}));var p,m,g;localStorage.getItem(a)||localStorage.setItem(a,JSON.stringify(s)),console.log("Geogebra Shortcuts System v1.0"),m=function(){var e,n;!function(){for(var e=o();e;)e.click(),e=o()}(),document.addEventListener("keydown",(function(e){var o=function(e){var o=[],n=i();return e.metaKey&&o.push("⌘ Command"),e.ctrlKey&&o.push(n?"⌃ Control":"Ctrl"),e.altKey&&o.push(n?"⌥ Option":"Alt"),e.shiftKey&&o.push("⇧ Shift"),["⌘ Command","⌃ Control","Ctrl","⌥ Option","Alt","⇧ Shift"].includes(e.key)||o.push(e.code.toUpperCase().slice(-1)),o.join(" + ")}(e);s[o]&&(e.preventDefault(),s[o].callback())})),e=!0,n=setInterval((function(){var o=Array.from(document.querySelectorAll(".categoryPanel"));o.forEach((function(e){e.style.display="flex",e.style.gap="15px 10px",e.style.flexWrap="wrap",e.style.padding="10px 0 15px"})),e&&o.every((function(e){return"flex"===e.style.display}))&&clearInterval(n),e=!1}),100),function(){var e=!0,o=setInterval((function(){var i=document.querySelectorAll(".toolButton"),n=Array.from(i);n.forEach((function(e){e.style.height="unset",e.style.margin="0";var o=e.querySelector(".gwt-Label");o.style.height="unset",o.style.width="unset",o.style.wordBreak="break-word",o.style.maxWidth="80px"})),!e&&n.every((function(e){return"unset"===e.style.height}))&&clearInterval(o),e=!1}),100)}(),function(){var e=window.setInterval((function(){Object.entries(s).forEach((function(o){var i=o[0],n=o[1].toolName;document.querySelectorAll("#".concat(r[n].value," .gwt-Label")).forEach((function(o){if(e&&o.innerHTML.includes(i))return clearInterval(e);var n=o.innerHTML;o.innerHTML="".concat(n,"<br>(").concat(i,")")}))})),Array.from(document.querySelectorAll(".gwt-Label")).every((function(e){var o;return null===(o=e.textContent)||void 0===o?void 0:o.includes("<br>")}))&&clearInterval(e)}),100)}()},g=window.setInterval((function(){document.querySelector("#ggbApplet .toolsPanel")&&(window.clearInterval(g),m())}),100),chrome.runtime.onMessage.addListener((function(e){"updateLocalStorage"===e.action&&(localStorage.setItem(a,e.value),location.reload())}))})();