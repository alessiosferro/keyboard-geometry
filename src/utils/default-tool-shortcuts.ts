import {Tool} from "./tool-map";

const defaultToolShortcuts: Record<Tool, string> = {
  "Muovi": 'Shift+q',
  "Punto": 'Shift+w',
  "Segmento": 'Shift+e',
  "Retta": 'Shift+r',
  "Poligono": 'Shift+t',
  "Circonferenza - centro e punto": 'Shift+y',
  "Seleziona oggetti": 'Shift+u',
  "Mostra / Nascondi etichetta": 'Shift+i',
  "Mostra / Nascondi oggetto": 'Shift+o',
  "Elimina": 'Shift+p',
  "Muovi la vista Grafici": 'Shift+a',
  "Copia stile visuale": 'Shift+s',
  "Punto medio o centro": 'Shift+d',
  "Retta perpendicolare": 'Shift+f',
  "Asse di un segmento": 'Shift+g',
  "Retta parallela": 'Shift+h',
  "Bisettrice": 'Shift+j',
  "Tangenti": 'Shift+k',
  "Luogo": 'Shift+l',
  "Angolo": 'Shift+z',
  "Angolo di data misura": 'Shift+x',
  "Distanza o lunghezza": 'Shift+c',
  "Area": 'Shift+v',
  "Slider": 'Shift+b',
  "Pendenza": 'Shift+n',
  "Intersezione": 'Shift+m',
  "Punto su oggetto": 'Alt+q',
  "Vincola / Svincola punto": 'Alt+w',
  "Estremo": 'Alt+e',
  "Radici": 'Alt+r',
  "Segmento - lunghezza fissa": 'Alt+t',
  "Semiretta": 'Alt+y',
  "Vettore": 'Alt+u',
  "Vettore - dati un punto e la direzione": 'Alt+i',
  "Polare o diametro": 'Alt+o',
  "Spezzata aperta": 'Alt+p',
  "Retta di regressione": 'Alt+a',
  "Circonferenza - centro e raggio": 'Alt+s',
  "Compasso": 'Alt+d',
  "Semicirconferenza": 'Alt+f',
  "Settore circolare": 'Alt+g',
  "Arco di circonferenza": 'Alt+h',
  "Circonferenza - tre punti": 'Alt+j',
  "Settore circolare - tre punti": 'Alt+k',
  "Arco di circonferenza - tre punti": 'Alt+l',
  "Poligono regolare": 'Alt+z',
  "Poligono vettore": 'Alt+x',
  "Poligono rigido": 'Alt+c',
  "Ellisse": 'Alt+v',
  "Conica - cinque punti": 'Alt+b',
  "Parabola": 'Alt+n',
  "Iperbole": 'Alt+m',
  "Traslazione": 'Alt+Shift+q',
  "Rotazione": 'Alt+Shift+w',
  "Simmetria assiale": 'Alt+Shift+e',
  "Simmetria centrale": 'Alt+Shift+r',
  "Omotetia": 'Alt+Shift+t',
  "Inversione circolare": 'Alt+Shift+y',
  "Immagine": 'Alt+Shift+u',
  "Testo": 'Alt+Shift+i',
  "Penna": 'Alt+Shift+o',
  "Grafico a mano libera": 'Alt+Shift+p',
  "Relazione": 'Alt+Shift+a',
  "Pulsante": 'Alt+Shift+s',
  "Casella di controllo": 'Alt+Shift+d',
  "Campo di inserimento": 'Alt+Shift+f'
};

export default defaultToolShortcuts;