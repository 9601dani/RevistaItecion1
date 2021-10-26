CREATE DATABASE revista_I;

USE revista_I;

CREATE TABLE usuario(
nombre_usuario VARCHAR(45) PRIMARY KEY NOT NULL,
password VARCHAR(45),
nombre VARCHAR(150),
des_personal VARCHAR(150),
des_hobbies VARCHAR(150),
foto BLOB,
tipo_usuario ENUM('USUARIO','AUTOR')
);

CREATE TABLE etiqueta_autor(
nombre_etiqueta VARCHAR(45),
nombre_usuario VARCHAR(45),
PRIMARY KEY (nombre_etiqueta,nombre_usuario),
FOREIGN KEY (nombre_usuario) REFERENCES usuario(nombre_usuario)
);

CREATE TABLE recaudacion(
registro INT PRIMARY KEY AUTO_INCREMENT,
nombre_revista VARCHAR(45),
total_pagar DECIMAL(7,2),
costo_con_descuento DECIMAL(7,2),
fecha_pago DATE,
nombre_usuario VARCHAR(45),
FOREIGN KEY (nombre_usuario) REFERENCES usuario(nombre_usuario)
);

CREATE TABLE categoria(
nombre_categoria VARCHAR(45) PRIMARY KEY
);

CREATE TABLE administrador(
nombre_usuario VARCHAR(45) PRIMARY KEY,
password VARCHAR(45),
nombre VARCHAR(200),
estado ENUM('ACTIVO','DESACTIVO')
);

CREATE TABLE revista(
id_revista INT AUTO_INCREMENT PRIMARY KEY,
nombre_revista VARCHAR(45),
archivo MEDIUMBLOB,
fecha_publicacion DATE,
descripcion VARCHAR(150),
fecha_aceptacion DATE,
estado_revista ENUM('ACEPTADA','DENEGADA','EN_ESPERA'),
costo_dia DECIMAL(7,2),
fecha_mod_costo DATE,
costo_suscripcion DECIMAL(7,2),
me_gusta ENUM('ACEPTA_LIKE','NO_ACEPTA_LIKE'),
comentario ENUM('ACEPTA_COMENTARIO','NO_ACEPTA_COMENTARIO'),
suscripciones ENUM('ACEPTA_SUSCRIPCION','NO_ACEPTA_SUSCRIPCION'),
nombre_categoria VARCHAR(45),
nombre_usuario VARCHAR(45),
FOREIGN KEY (nombre_categoria) REFERENCES categoria(nombre_categoria),
FOREIGN KEY (nombre_usuario) REFERENCES administrador(nombre_usuario)
);

CREATE TABLE etiqueta_revista(
nombre_etiqueta VARCHAR(45),
id_revista INT,
PRIMARY KEY(nombre_etiqueta,id_revista),
FOREIGN KEY (id_revista) REFERENCES revista(id_revista)
);

CREATE TABLE suscripcion(
id_suscripcion INT AUTO_INCREMENT,
valor_sus DECIMAL(7,2),
fecha_inicial DATE,
fecha_final DATE,
me_gusta ENUM('DIO_LIKE','NO_DIO_LIKE'),
estado_suscripcion ENUM('ACTIVA','DESACTIVA','SUSPENDIDA'),
nombre_usuario VARCHAR(45),
id_revista INT,
PRIMARY KEY(id_suscripcion,nombre_usuario,id_revista),
FOREIGN KEY (nombre_usuario) REFERENCES usuario(nombre_usuario),
FOREIGN KEY (id_revista) REFERENCES revista(id_revista)
);

CREATE TABLE comentario(
id_comentario INT PRIMARY KEY AUTO_INCREMENT,
descripcion VARCHAR(400),
fecha_comentario DATE,
id_revista INT,
id_suscripcion INT,
FOREIGN KEY (id_revista) REFERENCES revista(id_revista),
FOREIGN KEY (id_suscripcion) REFERENCES suscripcion(id_suscripcion)
);

CREATE TABLE porcentaje_soft(
id_porcentaje INT PRIMARY KEY AUTO_INCREMENT,
porcentaje DECIMAL(5,2),
fecha_ultima_mod DATE,
nombre_usuario VARCHAR(45),
FOREIGN KEY (nombre_usuario) REFERENCES administrador(nombre_usuario)
);

CREATE TABLE tipo_anuncio(
nombre_tipo VARCHAR(45) PRIMARY KEY,
costo_dia DECIMAL(7,2)
);

CREATE TABLE anunciante(
id_anunciante INT PRIMARY KEY AUTO_INCREMENT,
nombre_anunciante VARCHAR(45),
caracteristica_aun VARCHAR(200)
);

CREATE TABLE anuncio(
id_anuncio INT PRIMARY KEY AUTO_INCREMENT,
des_anuncio VARCHAR(100),
contenido BLOB,
apariciones INT,
total_pago DECIMAL(7,2),
estado_anuncio ENUM('ACEPTADO','EN_ESPERA','MOROSO','CADUCADO'),
url VARCHAR(100),
fecha_inicio DATE,
fecha_final DATE,
id_anunciante INT,
nombre_usuario VARCHAR(45),
nombre_tipo VARCHAR(45),
FOREIGN KEY (id_anunciante) REFERENCES anunciante(id_anunciante),
FOREIGN KEY (nombre_usuario) REFERENCES administrador(nombre_usuario),
FOREIGN KEY (nombre_tipo) REFERENCES tipo_anuncio(nombre_tipo)
);

CREATE TABLE etiqueta_anuncio(
nombre_etiqueta VARCHAR(45),
id_anuncio INT,
PRIMARY KEY(nombre_etiqueta,id_anuncio),
FOREIGN KEY (id_anuncio) REFERENCES anuncio(id_anuncio)
);

CREATE TABLE etiqueta(
nombre_etiqueta VARCHAR(45) PRIMARY KEY 
);


