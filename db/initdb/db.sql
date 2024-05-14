/*==============================================================*/
/* Table: AGENCIA                                               */
/*==============================================================*/
create table AGENCIA (
   ID_AGENCIA           SERIAL               not null,
   NOMBRE_AGENCIA       VARCHAR(20)          null,
   UBICACION_AGENCIA    VARCHAR(20)          null,
   constraint PK_AGENCIA primary key (ID_AGENCIA)
);

/*==============================================================*/
/* Index: AGENCIA_PK                                            */
/*==============================================================*/
create unique index AGENCIA_PK on AGENCIA (
ID_AGENCIA
);

/*==============================================================*/
/* Table: ALQUILER                                              */
/*==============================================================*/
create table ALQUILER (
   ID_ALQUILER          SERIAL               not null,
   ID_VEHICULO          INT4                 not null,
   CEDULA_CLIENTE       INT4                 not null,
   FECHA_INICIO_ALQ     DATE                 not null,
   FECHA_FIN_ALQ        DATE                 not null,
   constraint PK_ALQUILER primary key (ID_VEHICULO, CEDULA_CLIENTE)
);

/*==============================================================*/
/* Index: ALQUILER_PK                                           */
/*==============================================================*/
create unique index ALQUILER_PK on ALQUILER (
ID_VEHICULO,
CEDULA_CLIENTE
);

/*==============================================================*/
/* Index: ALQUILER2_FK                                          */
/*==============================================================*/
create  index ALQUILER2_FK on ALQUILER (
ID_VEHICULO
);

/*==============================================================*/
/* Index: ALQUILER_FK                                           */
/*==============================================================*/
create  index ALQUILER_FK on ALQUILER (
CEDULA_CLIENTE
);

/*==============================================================*/
/* Table: CLIENTE                                               */
/*==============================================================*/
create table CLIENTE (
   CEDULA_CLIENTE       SERIAL               not null,
   NOMBRES_CLIENTE      VARCHAR(35)          null,
   APELLIDOS_CLIENTE    VARCHAR(35)          null,
   TELEFONO_CLIENTE     VARCHAR(10)          null,
   DIRECCION_CLIENTE    VARCHAR(50)          null,
   CORREO_CLIENTE       VARCHAR(30)          null,
   constraint PK_CLIENTE primary key (CEDULA_CLIENTE)
);

/*==============================================================*/
/* Index: CLIENTE_PK                                            */
/*==============================================================*/
create unique index CLIENTE_PK on CLIENTE (
CEDULA_CLIENTE
);

/*==============================================================*/
/* Table: VEHICULO                                              */
/*==============================================================*/
create table VEHICULO (
   ID_VEHICULO          SERIAL               not null,
   ID_AGENCIA           INT4                 null,
   TIPO_VEHICULO        VARCHAR(40)          null,
   IMAGEN_VEHICULO      CHAR(100)            null,
   KILOMETRAJE_VEHICULO VARCHAR(10)          null,
   NOMBRE_VEHICULO      CHAR(40)             null,
   MODELO_VEHICULO      CHAR(40)             null,
   TRANSMISION_VEHICULO CHAR(40)             null,
   RATING_VEHICULO      NUMERIC              null,
   DESCRIPCION_VEHICULO CHAR(100)            null,
   PRECIO_VEHICULO      NUMERIC              null,
   DISPONIBILIDAD_VEHICULO BOOL                 null,
   constraint PK_VEHICULO primary key (ID_VEHICULO)
);

/*==============================================================*/
/* Index: VEHICULO_PK                                           */
/*==============================================================*/
create unique index VEHICULO_PK on VEHICULO (
ID_VEHICULO
);

/*==============================================================*/
/* Index: TIENE_FK                                              */
/*==============================================================*/
create  index TIENE_FK on VEHICULO (
ID_AGENCIA
);

alter table ALQUILER
   add constraint FK_ALQUILER_ALQUILER_CLIENTE foreign key (CEDULA_CLIENTE)
      references CLIENTE (CEDULA_CLIENTE)
      on delete restrict on update restrict;

alter table ALQUILER
   add constraint FK_ALQUILER_ALQUILER2_VEHICULO foreign key (ID_VEHICULO)
      references VEHICULO (ID_VEHICULO)
      on delete restrict on update restrict;

alter table VEHICULO
   add constraint FK_VEHICULO_TIENE_AGENCIA foreign key (ID_AGENCIA)
      references AGENCIA (ID_AGENCIA)
      on delete restrict on update restrict;


INSERT INTO AGENCIA (ID_AGENCIA, NOMBRE_AGENCIA, UBICACION_AGENCIA) 
VALUES 
(1, 'Agencia Central', 'Calle Principal'),
(2, 'Agencia Norte', 'Avenida Norte'),
(3, 'Agencia Sur', 'Calle Sur'),
(4, 'Agencia Este', 'Avenida Este'),
(5, 'Agencia Oeste', 'Calle Oeste');

INSERT INTO VEHICULO (ID_VEHICULO, ID_AGENCIA, TIPO_VEHICULO, IMAGEN_VEHICULO, KILOMETRAJE_VEHICULO, NOMBRE_VEHICULO, MODELO_VEHICULO, TRANSMISION_VEHICULO, RATING_VEHICULO, DESCRIPCION_VEHICULO, PRECIO_VEHICULO, DISPONIBILIDAD_VEHICULO)
VALUES 
(1, 1, 'Sedán', 'sedan.jpg', '10000 km', 'Toyota Corolla', '2023', 'Automática', 4.5, 'Sedán económico y confiable', 300.00, TRUE),
(2, 2, 'SUV', 'suv.jpg', '5000 km', 'Honda CR-V', '2022', 'Automática', 4.8, 'SUV espaciosa y cómoda', 400.00, TRUE),
(3, 3, 'Deportivo', 'deportivo.jpg', '2000 km', 'Chevrolet Camaro', '2024', 'Manual', 4.9, 'Deportivo potente y elegante', 500.00, TRUE),
(4, 4, 'Camioneta', 'camioneta.jpg', '8000 km', 'Ford Ranger', '2021', 'Automática', 4.7, 'Camioneta robusta y versátil', 450.00, TRUE),
(5, 5, 'Hatchback', 'hatchback.jpg', '3000 km', 'Volkswagen Golf', '2023', 'Automática', 4.6, 'Hatchback ágil y moderno', 350.00, TRUE);

INSERT INTO CLIENTE (CEDULA_CLIENTE, NOMBRES_CLIENTE, APELLIDOS_CLIENTE, TELEFONO_CLIENTE, DIRECCION_CLIENTE, CORREO_CLIENTE)
VALUES 
(1, 'Juan', 'Perez', '1234567890', 'Calle 123, Ciudad', 'juan.perez@example.com'),
(2, 'Maria', 'Gomez', '0987654321', 'Avenida ABC, Ciudad', 'maria.gomez@example.com'),
(3, 'Pedro', 'Lopez', '1122334455', 'Carrera XYZ, Ciudad', 'pedro.lopez@example.com'),
(4, 'Laura', 'Martinez', '5544332211', 'Calle 456, Ciudad', 'laura.martinez@example.com'),
(5, 'Carlos', 'Rodriguez', '6677889900', 'Avenida DEF, Ciudad', 'carlos.rodriguez@example.com');


INSERT INTO ALQUILER (ID_ALQUILER, ID_VEHICULO, CEDULA_CLIENTE, FECHA_INICIO_ALQ, FECHA_FIN_ALQ)
VALUES 
(1, 1, 1, '2024-03-10', '2024-03-15'),
(2, 2, 2, '2024-03-11', '2024-03-18'),
(3, 3, 3, '2024-03-12', '2024-03-17'),
(4, 4, 4, '2024-03-13', '2024-03-20'),
(5, 5, 5, '2024-03-14', '2024-03-19');