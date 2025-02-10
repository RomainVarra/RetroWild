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
    title VARCHAR(255) NOT NULL,       
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

INSERT INTO role (label)
VALUES ("Admin"), ("User"); 

INSERT INTO movies (title, release_year, director, genre, duration, language, description, poster_url, video_url, rating) 
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
    "Nosferatu",
    1922,
    "F.W. Murnau",
    "Horreur, Fantastique",
    94,
    "Muet",
    "Nosferatu est une adaptation non officielle de 'Dracula'. Ce chef-d'œuvre du cinéma expressionniste raconte l'histoire du comte Orlok, un vampire terrifiant.",
    "https://www.lafilmotheque.fr/v3/content/uploads/2019/10/Nosferatu-480x640.jpg",
    "https://1drv.ms/v/c/d5dc53ddff306b81/EYZ2DIksqyVLtd9TdAAxZ5cBOpXMcecdaO3qR7Pp5so4bg?e=YBPwT5",
    8.0
);