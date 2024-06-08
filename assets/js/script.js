

import {Multimedia, Reproductor} from './clase.js'

// Instancias para cada tipo de video
const musica = new Reproductor('https://www.youtube.com/embed/5PSNL1qE6VY', 'musica');
const pelicula = new Reproductor('https://www.youtube-nocookie.com/embed/DDWWwEiWHJw?si=bQOvCPMFu6jNshOM', 'peliculas');
const serie = new Reproductor('https://www.youtube-nocookie.com/embed/vC2oN32ol0w?si=86SfJwAaXRrxGbQ8', 'series');

// Reproducir los videos
musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();

// Modificar el tiempo de inicio de alguno de los videos
musica.setInicio(30); // Inicia el video de música en el segundo 30`

