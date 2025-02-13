CREATE TABLE role (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  label VARCHAR(100) NOT NULL
);

CREATE TABLE user (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  pseudo VARCHAR(100) NOT NULL,
  photo VARCHAR(255),
  email VARCHAR(100) UNIQUE NOT NULL,
  hashed_password VARCHAR(255) NOT NULL,
  role_id INT NOT NULL,
  FOREIGN KEY (role_id) REFERENCES role(id)
);

CREATE TABLE movies (
    id INT PRIMARY KEY AUTO_INCREMENT, 
    movie_title VARCHAR(255) NOT NULL,       
    release_year YEAR NOT NULL,    
    director VARCHAR(255),          
    genre VARCHAR(100), 
    duration INT, 
    language VARCHAR(50),      
    description TEXT,     
    poster_url VARCHAR(500), 
    video_url VARCHAR(500), 
    rating DECIMAL(3,1) DEFAULT NULL
);

CREATE TABLE recommandation (
  id INT PRIMARY KEY AUTO_INCREMENT,
  what VARCHAR(100) NOT NULL,
  who VARCHAR(100) NOT NULL,
  why VARCHAR(255) NOT NULL,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE article (
    id INT PRIMARY KEY AUTO_INCREMENT,
    article_title VARCHAR(255) NOT NULL,
    author VARCHAR(100) NOT NULL,
    published_date VARCHAR(255) NOT NULL,
    picture_article VARCHAR(255),
    first_title_section VARCHAR(255),
    first_section TEXT,
    second_title_section VARCHAR(255),
    second_section TEXT
);


INSERT INTO role (label)
VALUES ("Admin"), ("User"); 

INSERT INTO movies (movie_title, release_year, director, genre, duration, language, description, poster_url, video_url, rating) 
VALUES
(
    "Steamboat Willie",
    1928,
    "Walt Disney",
    "Animation, Comédie",
    8,
    "Muet",
    "Steamboat Willie est un court-métrage d'animation emblématique mettant en scène Mickey Mouse. Il marque les débuts sonores du personnage.",
    "https://thewaltdisneycompany.com/app/uploads/2023/11/1920_51-107_720-614x491.jpg",
    "https://www.youtube.com/watch?v=BBgghnQF6E4",
    7.5
),
(
    "Metropolis",
    1927,
    "Fritz Lang",
    "Science-fiction, Drame",
    145,
    "Muet",
    "Dans une ville futuriste divisée entre riches et ouvriers, un jeune homme découvre la souffrance des travailleurs et se révolte contre le système.",
    "https://m.media-amazon.com/images/M/MV5BMjhjMGYyMjAtMzJkYy00NzhlLWIwY2MtMWQ2ODIxZDUyOGYyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "https://www.youtube.com/watch?v=X-S5v4UwhAE&t=6456s",
    8.3
),
(
    "Le Kid",
    1921,
    "Charlie Chaplin",
    "Comédie dramatique",
    52,
    "Muet",
    "Un vagabond adopte un enfant abandonné et tente de survivre avec lui dans les rues, mêlant humour et émotion.",
    "https://www.cinemaffiche.fr/5573/le-kid-titre-original-the-kid.jpg",
    "https://www.youtube.com/watch?v=X-S5v4UwhAE&t=6456s",
    8.1
),
(
    "Nosferatu",
    1922,
    "F.W. Murnau",
    "Horreur, Fantastique",
    94,
    "Muet",
    "Une adaptation non officielle de Dracula, avec une mise en scène sombre et un comte terrifiant qui hante les spectateurs depuis un siècle.",
    "https://www.lafilmotheque.fr/v3/content/uploads/2019/10/Nosferatu-480x640.jpg",
    "https://www.youtube.com/watch?v=dCT1YUtNOA8",
    7.9
),
(
    "Le Mécano de la Générale",
    1926,
    "Buster Keaton",
    "Comédie, Aventure",
    78,
    "Muet",
    "Un ingénieur ferroviaire se retrouve embarqué dans une aventure pleine de cascades et de poursuites spectaculaires.",
    "https://larevuedhistoiremilitaire.fr/wp-content/uploads/2021/02/Le_Mecano_de_la_General.jpg",
    "https://www.youtube.com/watch?v=x3HioYRd0Ck",
    8.2
),
(
    "L'Aurore",
    1927,
    "F.W. Murnau",
    "Drame, Romance",
    94,
    "Muet s-t fr",
    "Un homme est partagé entre son amour pour sa femme et la tentation d'une femme fatale, dans un chef-d'œuvre du cinéma muet.",
    "lien_image_laurore.jpg",
    "https://www.youtube.com/watch?v=efFxkmoHYpo",
    8.3
),
(
    "Sherlock Junior",
    1924,
    "Buster Keaton",
    "Comédie, Action",
    45,
    "Muet",
    "Un projectionniste de cinéma rêve d’être détective et se retrouve plongé dans un univers onirique où il doit résoudre un mystère.",
    "https://www.splendor-films.com/images/stories/flexicontent/l_affiche-sherlock-jr-def.jpg",
    "https://www.youtube.com/watch?v=fZuqWxITq38",
    8.1
),
(
    "Le Cuirassé Potemkine",
    1925,
    "Sergueï Eisenstein",
    "Historique, Drame",
    75,
    "Muet",
    "Un film révolutionnaire retraçant la mutinerie du cuirassé Potemkine en 1905, célèbre pour sa scène des escaliers d’Odessa.",
    "lien_image_potemkine.jpg",
    "lien_youtube_potemkine",
    8.0
),
(
    "Le Cabinet du docteur Caligari",
    1920,
    "Robert Wiene",
    "Horreur, Thriller",
    76,
    "Muet",
    "Un film expressionniste sur un hypnotiseur sinistre qui utilise un somnambule pour commettre des meurtres.",
    "https://fr.web.img4.acsta.net/pictures/14/12/01/18/24/291150.jpg",
    "https://www.youtube.com/watch?v=pYMo4KyPYeU",
    7.7
),
(
    "La Passion de Jeanne d'Arc",
    1928,
    "Carl Theodor Dreyer",
    "Drame, Historique",
    100,
    "Muet st-FR",
    "Un portrait bouleversant du procès de Jeanne d'Arc, marqué par une mise en scène innovante et une performance intense de l’actrice Maria Falconetti.",
    "https://media.senscritique.com/media/000010096250/300/la_passion_de_jeanne_d_arc.jpg",
    "https://www.youtube.com/watch?v=h_fadxnwqg4",
    8.2
),
(
  "Les Chasses du comte Zaroff",
  1932,
  "Ernest B. Schoedsack",
  "Aventure",
  63,
  "English",
  "Un chasseur de renom échoue sur une île à la suite d'un naufrage dont il est le seul survivant. Le comte Zaroff le recueille et le soigne, seulement, il se rendra bientôt compte que ce comte, raffiné et cultivé, entretient une mortelle passion pour la chasse. Las de la chasse conventionnelle, le mystérieux comte est à la recherche de nouveaux frissons...",
  "https://intergalactiques.net/wp-content/uploads/2024/03/les-chasses-du-comte-zaroff-01-768x588.jpg",
  "https://www.youtube.com/watch?v=PHKoM1WPLP0",
  7.6
);

INSERT INTO article 
(article_title, author, published_date, picture_article, first_title_section, first_section, second_title_section, second_section) 
VALUES 
(
    "Metropolis : L’Origine de la Science-Fiction au Cinéma",
    "Jean Dupont",
    "13 mars 1983",
    "https://chroniques-architecture.com/wp-content/uploads/2016/12/02-@-Fondation-Murnau.jpg",
    "Un chef-d'œuvre visionnaire",
    "Sorti en 1927, Metropolis de Fritz Lang est l’un des premiers grands films de science-fiction. Avec ses décors futuristes et son message social puissant, il a influencé des générations de cinéastes.",
    "Une œuvre intemporelle",
    "Bien que muet et en noir et blanc, Metropolis reste incroyablement moderne. Son esthétique et ses thématiques sur l’exploitation et la robotisation sont plus que jamais d’actualité."
),
(
    "Le Kid : Le Film Qui a Fait Pleurer et Rire le Monde",
    "Sophie Martin",
    "22 novembre 1956",
    "https://thumb.canalplus.pro/http/unsafe/1440x810/filters:quality(80)/img-hapi.canalplus.pro:80/ServiceImage/ImageID/60399405",
    "Chaplin à son apogée",
    "En 1921, Charlie Chaplin réalise Le Kid, un chef-d’œuvre du cinéma burlesque. Il y incarne son célèbre personnage de vagabond, attachant et drôle, dans une histoire pleine d’émotions.",
    "Une comédie dramatique inoubliable",
    "Entre scènes hilarantes et moments de pure tendresse, Le Kid traverse les âges sans perdre de sa force. Un film à voir absolument pour comprendre l’impact du cinéma muet."
),
(
    "L'Aurore : Le Plus Beau Film Romantique du Cinéma Muet",
    "Luc Moreau",
    "11 aout 2015",
    "https://media.senscritique.com/media/000004692781/300/l_aurore.jpg",
    "Un poème visuel",
    "F.W. Murnau nous offre avec L'Aurore (1927) une romance tragique et magnifique. Son esthétique expressionniste et sa mise en scène fluide en font un joyau du cinéma.",
    "Une histoire d’amour intemporelle",
    "Entre drame et espoir, ce film montre comment l’amour peut renaître des cendres de l’erreur et du doute. Une expérience cinématographique bouleversante."
),
(
    "Nosferatu : Le Film Qui a Défini le Vampire au Cinéma",
    "Julie Lecoq",
    "7 juillet 1966",
    "https://assets.mubicdn.net/images/artworks/522531/images-original.png?1676741074",
    "L’horreur expressionniste à son sommet",
    "Sorti en 1922, Nosferatu est une adaptation non officielle de Dracula. Son atmosphère gothique et son jeu d’ombres marquent encore les spectateurs d’aujourd’hui.",
    "Max Schreck, le vampire éternel",
    "Avec son maquillage terrifiant et ses gestes saccadés, Max Schreck incarne une des figures les plus mémorables du cinéma fantastique."
),
(
    "Le Mécano de la Générale : L’Art du Slapstick par Buster Keaton",
    "Antoine Bernard",
    "12 decembre 1995",
    "https://www.benzinemag.net/wp-content/uploads/2020/03/Le-M%C3%A9cano-de-la-General-photo2.jpg",
    "Un génie du comique",
    "Buster Keaton réalise avec Le Mécano de la Générale (1926) un chef-d’œuvre du slapstick. Cascades impressionnantes et timing parfait font de ce film un monument du burlesque.",
    "Un film toujours spectaculaire",
    "Les scènes d’action, tournées sans effets spéciaux modernes, restent incroyables à voir aujourd’hui. Une leçon de cinéma et de comédie en une seule œuvre."
),
(
    "La Ruée vers l’or : Chaplin et l’Art de la Comédie Poétique",
    "Clara Dubois",
    "20 février 2022",
    "https://transmettrelecinema.com/wp-content/uploads/2013/06/ruee-vers-l-or-la.jpg",
    "Une aventure inoubliable",
    "Inspiré par la ruée vers l’or du Klondike, ce film de 1925 est l’une des œuvres les plus célèbres de Chaplin. Sa scène du repas avec les chaussures est entrée dans l’histoire.",
    "De l’humour et de l’émotion",
    "Avec son mélange unique de comédie et de mélancolie, Chaplin nous rappelle que même dans l’adversité, il reste toujours un peu de magie."
),
(
    "Sherlock Junior : Le Film Qui Joue avec la Réalité",
    "Hugo Lambert",
    "1 avril 2025",
    "https://deneb.philharmoniedeparis.fr/uploads/images/Sherlock-Junior-de-Buster-Keaton-by-Splendor-Films-3.jpg",
    "Un film visionnaire",
    "Dans Sherlock Junior (1924), Buster Keaton casse les frontières entre cinéma et réalité. Ce film est une merveille d’ingéniosité technique.",
    "Un précurseur du surréalisme",
    "Avec des effets spéciaux novateurs et une mise en abyme fascinante, Sherlock Junior reste une leçon de mise en scène à découvrir."
),
(
    "Le Cuirassé Potemkine : Une Révolution en Images",
    "Emma Rousseau",
    "8 juin 1987",
    "https://media.senscritique.com/media/000020237422/300/le_cuirasse_potemkine.jpg",
    "Une révolution au cinéma",
    "Sorti en 1925, ce film de Sergueï Eisenstein est une leçon de montage cinématographique. Sa célèbre scène des escaliers d’Odessa reste une référence.",
    "Un impact mondial",
    "Censuré puis admiré, Le Cuirassé Potemkine a influencé des générations de réalisateurs à travers le monde."
);