const TOOL_MAP = {
  "Muovi": {
    "value": "mode0",
    "description": "Muovi. Trascina o seleziona un oggetto"
  },
  "Punto": {
    "value": "mode1",
    "description": "Punto. Seleziona la posizione o una retta, una funzione o una curva"
  },
  "Segmento": {
    "value": "mode15",
    "description": "Segmento. Seleziona due punti o posizioni"
  },
  "Retta": {
    "value": "mode2",
    "description": "Retta. Seleziona due punti o posizioni"
  },
  "Poligono": {
    "value": "mode16",
    "description": "Poligono. Seleziona tutti i vertici, quindi nuovamente il vertice iniziale"
  },
  "Circonferenza - centro e punto": {
    "value": "mode10",
    "description": "Circonferenza - centro e punto. Seleziona il centro, quindi un punto della circonferenza"
  },
  "Seleziona oggetti": {
    "value": "mode77",
    "description": "Seleziona oggetti. Fai clic su un oggetto per selezionarlo o usa un rettangolo per selezionare più oggetti"
  },
  "Mostra / Nascondi etichetta": {
    "value": "mode28",
    "description": "Mostra / Nascondi etichetta. Seleziona un oggetto"
  },
  "Mostra / Nascondi oggetto": {
    "value": "mode27",
    "description": "Mostra / Nascondi oggetto. Seleziona gli oggetti da nascondere, quindi cambia strumento per applicare le modifiche"
  },
  "Elimina": {
    "value": "mode6",
    "description": "Elimina. Seleziona un oggetto da eliminare"
  },
  "Muovi la vista Grafici": {
    "value": "mode40",
    "description": "Muovi la vista Grafici. Trascina una zona vuota dello sfondo o un asse"
  },
  "Copia stile visuale": {
    "value": "mode35",
    "description": "Copia stile visuale. Seleziona un oggetto, quindi fai clic o un tocco su altri oggetti"
  },
  "Punto medio o centro": {
    "value": "mode19",
    "description": "Punto medio o centro. Seleziona due punti, un segmento, una circonferenza o una conica"
  },
  "Retta perpendicolare": {
    "value": "mode4",
    "description": "Retta perpendicolare. Seleziona un retta perpendicolare e un punto"
  },
  "Asse di un segmento": {
    "value": "mode8",
    "description": "Asse di un segmento. Seleziona due punti o un segmento"
  },
  "Retta parallela": {
    "value": "mode3",
    "description": "Retta parallela. Seleziona una retta parallela e un punto"
  },
  "Bisettrice": {
    "value": "mode9",
    "description": "Bisettrice. Seleziona tre punti o due rette"
  },
  "Tangenti": {
    "value": "mode13",
    "description": "Tangenti. Seleziona un punto o una retta, quindi una circonferenza, una conica o una funzione"
  },
  "Luogo": {
    "value": "mode47",
    "description": "Luogo. Seleziona il punto che genera il luogo, quindi un punto sull'oggetto o uno slider"
  },
  "Angolo": {
    "value": "mode36",
    "description": "Angolo. Seleziona tre punti o due rette"
  },
  "Angolo di data misura": {
    "value": "mode46",
    "description": "Angolo di data misura. Seleziona un punto di un lato, il vertice, quindi inserisci l'ampiezza"
  },
  "Distanza o lunghezza": {
    "value": "mode38",
    "description": "Distanza o lunghezza. Seleziona due punti, un segmento, un poligono o una circonferenza"
  },
  "Area": {
    "value": "mode49",
    "description": "Area. Seleziona un poligono, una circonferenza o una conica"
  },
  "Slider": {
    "value": "mode25",
    "description": "Slider. Seleziona la posizione"
  },
  "Pendenza": {
    "value": "mode50",
    "description": "Pendenza. Seleziona una retta"
  },
  "Intersezione": {
    "value": "mode5",
    "description": "Intersezione. Seleziona due oggetti o fai clic sulla loro intersezione"
  },
  "Punto su oggetto": {
    "value": "mode501",
    "description": "Punto su oggetto. Seleziona un oggetto o il suo perimetro"
  },
  "Vincola / Svincola punto": {
    "value": "mode67",
    "description": "Vincola / Svincola punto. Seleziona un punto, quindi l'oggetto su cui vincolarlo"
  },
  "Estremo": {
    "value": "mode75",
    "description": "Estremo. Seleziona una funzione"
  },
  "Radici": {
    "value": "mode76",
    "description": "Radici. Seleziona una funzione"
  },
  "Segmento - lunghezza fissa": {
    "value": "mode45",
    "description": "Segmento - lunghezza fissa. Seleziona un punto, quindi inserisci la lunghezza"
  },
  "Semiretta": {
    "value": "mode18",
    "description": "Semiretta. Seleziona il punto iniziale, quindi un punto della semiretta"
  },
  "Vettore": {
    "value": "mode7",
    "description": "Vettore. Seleziona il punto di applicazione, quindi il punto finale"
  },
  "Vettore - dati un punto e la direzione": {
    "value": "mode37",
    "description": "Vettore - dati un punto e la direzione. Seleziona il punto di applicazione, quindi un vettore"
  },
  "Polare o diametro": {
    "value": "mode44",
    "description": "Polare o diametro. Seleziona un punto o una retta, quindi una circonferenza o una conica"
  },
  "Spezzata aperta": {
    "value": "mode65",
    "description": "Spezzata aperta. Seleziona tutti i vertici, quindi ancora il vertice iniziale"
  },
  "Retta di regressione": {
    "value": "mode58",
    "description": "Retta di regressione. Seleziona più punti o una lista di punti"
  },
  "Circonferenza - centro e raggio": {
    "value": "mode34",
    "description": "Circonferenza - centro e raggio. Seleziona il centro, quindi inserisci la misura del raggio"
  },
  "Compasso": {
    "value": "mode53",
    "description": "Compasso. Seleziona un segmento o due punti per il raggio, quindi il centro"
  },
  "Semicirconferenza": {
    "value": "mode24",
    "description": "Semicirconferenza. Seleziona due punti"
  },
  "Settore circolare": {
    "value": "mode21",
    "description": "Settore circolare. Seleziona il centro, quindi i due estremi"
  },
  "Arco di circonferenza": {
    "value": "mode20",
    "description": "Arco di circonferenza. Seleziona il centro e due punti"
  },
  "Circonferenza - tre punti": {
    "value": "mode11",
    "description": "Circonferenza - tre punti. Seleziona tre punti della circonferenza"
  },
  "Settore circolare - tre punti": {
    "value": "mode23",
    "description": "Settore circolare - tre punti. Seleziona tre punti del settore"
  },
  "Arco di circonferenza - tre punti": {
    "value": "mode22",
    "description": "Arco di circonferenza - tre punti. Seleziona tre punti dell'arco"
  },
  "Poligono regolare": {
    "value": "mode51",
    "description": "Poligono regolare. Seleziona due punti, quindi inserisci il numero dei vertici"
  },
  "Poligono vettore": {
    "value": "mode70",
    "description": "Poligono vettore. Seleziona tutti i vertici, quindi nuovamente il vertice iniziale"
  },
  "Poligono rigido": {
    "value": "mode64",
    "description": "Poligono rigido. Seleziona tutti i vertici, quindi nuovamente il vertice iniziale, oppure seleziona un poligono"
  },
  "Ellisse": {
    "value": "mode55",
    "description": "Ellisse. Seleziona i due fuochi, quindi un punto dell'ellisse"
  },
  "Conica - cinque punti": {
    "value": "mode12",
    "description": "Conica - cinque punti. Seleziona cinque punti della conica"
  },
  "Parabola": {
    "value": "mode57",
    "description": "Parabola. Seleziona il fuoco, quindi la direttrice"
  },
  "Iperbole": {
    "value": "mode56",
    "description": "Iperbole. Seleziona i due fuochi, quindi un punto dell'iperbole"
  },
  "Traslazione": {
    "value": "mode31",
    "description": "Traslazione. Seleziona l'oggetto da traslare, quindi il vettore traslazione"
  },
  "Rotazione": {
    "value": "mode32",
    "description": "Rotazione. Seleziona l'oggetto da ruotare, quindi il centro e inserisci l'ampiezza dell'angolo"
  },
  "Simmetria assiale": {
    "value": "mode30",
    "description": "Simmetria assiale. Seleziona l'oggetto da trasformare, quindi l'asse di simmetria"
  },
  "Simmetria centrale": {
    "value": "mode29",
    "description": "Simmetria centrale. Seleziona l'oggetto da trasformare, quindi il centro di simmetria"
  },
  "Omotetia": {
    "value": "mode33",
    "description": "Omotetia. Seleziona un oggetto, quindi il centro e inserisci il valore del rapporto"
  },
  "Inversione circolare": {
    "value": "mode54",
    "description": "Inversione circolare. Seleziona l'oggetto da trasformare, quindi la circonferenza"
  },
  "Immagine": {
    "value": "mode26",
    "description": "Immagine. Seleziona l'immagine tra i tuoi file, oppure la webcam"
  },
  "Testo": {
    "value": "mode17",
    "description": "Testo. Seleziona la posizione o un punto già esistente"
  },
  "Penna": {
    "value": "mode62",
    "description": "Penna. Scrivi o disegna. Modifica i colori con la barra di stile."
  },
  "Grafico a mano libera": {
    "value": "mode73",
    "description": "Grafico a mano libera. Disegna una funzione o un oggetto geometrico"
  },
  "Relazione": {
    "value": "mode14",
    "description": "Relazione. Seleziona due oggetti"
  },
  "Pulsante": {
    "value": "mode60",
    "description": "Pulsante. Seleziona la posizione"
  },
  "Casella di controllo": {
    "value": "mode52",
    "description": "Casella di controllo. Seleziona la posizione"
  },
  "Campo di inserimento": {
    "value": "mode61",
    "description": "Campo di inserimento. Seleziona la posizione"
  }
}

export type Tool = keyof typeof TOOL_MAP;

export default TOOL_MAP;