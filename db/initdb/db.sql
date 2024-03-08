/* Table: AGENCIA */
create table AGENCIA (
   ID_AGENCIA           SERIAL               not null,
   NOMBRE_AGENCIA       VARCHAR(20)          null,
   UBICACION_AGENCIA    VARCHAR(20)          null,
   constraint PK_AGENCIA primary key (ID_AGENCIA)
);

/* Table: CLIENTE */
create table CLIENTE (
   CEDULA_CLIENTE       SERIAL               not null,
   NOMBRES_CLIENTE      VARCHAR(35)          null,
   APELLIDOS_CLIENTE    VARCHAR(35)          null,
   TELEFONO_CLIENTE     VARCHAR(10)          null,
   DIRECCION_CLIENTE    VARCHAR(50)          null,
   CORREO_CLIENTE       VARCHAR(30)          null,
   constraint PK_CLIENTE primary key (CEDULA_CLIENTE)
);

/* Table: VEHICULO */
create table VEHICULO (
   ID_VEHICULO          SERIAL               not null,
   ID_AGENCIA           INT4                 null,
   TIPO_VEHICULOS       VARCHAR(40)          null,
   IMAGEN_VEHICULO     VARCHAR(100)         null,
   KILOMETRAJE_VEHICULO VARCHAR(10)          null,
   NOMBRE_VEHICULO      VARCHAR(40)          null,
   MODELO_VEHICULO      VARCHAR(40)          null,
   TRANSMISION_VEHICULO VARCHAR(40)          null,
   RATING_VEHICULO      NUMERIC              null,
   DESCRIPCION_VEHICULO VARCHAR(100)         null,
   PRECIO_VEHICULO      NUMERIC              null,
   DISPONIBILIDAD_VEHICULO BOOL                 null,
   constraint PK_VEHICULO primary key (ID_VEHICULO)
);


/* Table: ALQUILER */
create table ALQUILER (
   ID_ALQUILER          SERIAL               not null,
   ID_VEHICULO          INT4                 not null,
   CEDULA_CLIENTE       INT4                 not null,
   FECHA_INICIO_ALQ     DATE                 not null,
   FECHA_FIN_ALQ        DATE                 not null,
   constraint PK_ALQUILER primary key (ID_ALQUILER)
);
