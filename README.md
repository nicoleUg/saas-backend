# SaaS Restaurante - Backend (NestJS)

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

Este repositorio contiene el backend del **SaaS para Restaurantes**, desarrollado con [NestJS](https://github.com/nestjs/nest), un framework progresivo de Node.js para construir aplicaciones del lado del servidor eficientes, confiables y escalables usando TypeScript.

---

## Estructura del Proyecto



```text
src/
├── core/                       # Componentes globales y transversales (Shared/Core)
│   ├── database/               # Configuración y conexión a la base de datos (ORMs, seeders, migraciones)
│   ├── filters/                # Filtros globales para manejo personalizado de excepciones HTTP
│   ├── guards/                 # Guardianes para el control de accesos y roles (Seguridad/JWT)
│   └── interceptors/           # Interceptores para formatear respuestas y registrar logs (Logging)
│
├── modules/                    # Módulos del negocio organizados por dominio
│   ├── auth/                   # Módulo de Autenticación y Autorización
│   │   ├── controllers/        # Controladores HTTP que exponen los endpoints de autenticación
│   │   ├── services/           # Lógica de negocio (registro, login, validaciones)
│   │   ├── repositories/       # Consultas y abstracción de acceso a base de datos para usuarios/auth
│   │   ├── entities/           # Definición de tablas/documentos de base de datos
│   │   └── dto/                # Data Transfer Objects para validación de payloads de entrada
│   │
│   ├── menu/                   # Módulo de Gestión de Menús (Platos, Categorías)
│   │   ├── controllers/        # Endpoints para CRUD de menús
│   │   ├── services/           # Lógica para gestionar platos e inventarios de menú
│   │   ├── repositories/       # Abstracción de acceso a datos para menús
│   │   └── dto/                # Esquemas de validación (crear plato, actualizar precio, etc.)
│   │
│   └── orders/                 # Módulo de Gestión de Pedidos
│       ├── controllers/        # Endpoints para creación y seguimiento de pedidos
│       ├── services/           # Reglas de negocio para procesamiento de pedidos y facturación
│       ├── repositories/       # Persistencia y consultas complejas de pedidos
│       └── dto/                # Validación de payload para pedidos
│
├── app.controller.ts           # Controlador base de prueba o estado de salud (Health Check)
├── app.module.ts               # Módulo raíz que ensambla todos los módulos y configuraciones
├── app.service.ts              # Servicio base del app.controller
└── main.ts                     # Punto de entrada de la aplicación (Bootstrap)
```

---


## Instalación y Ejecución

### Requisitos previos
*   [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
*   [NPM](https://www.npmjs.com/) o [Yarn](https://yarnpkg.com/)
*   Base de datos configurada y en ejecución (ver `.env`)

### Configuración Inicial

1. Instalar las dependencias del proyecto:
   ```bash
   npm install
   ```

2. Crear y configurar las variables de entorno (copiar el archivo `.env.example` si existe, o crear un archivo `.env` en la raíz):
   ```env
   PORT=3000
   DATABASE_URL=postgres://usuario:contraseña@localhost:5432/restaurante_db
   JWT_SECRET=super_secreto_key
   ```

### Ejecutar el Servidor

```bash
# Modo desarrollo (con recarga automática ante cambios - Live Reload)
npm run start:dev

# Modo producción (compilado previo)
npm run build
npm run start:prod
```

### Ejecutar Pruebas (Tests)

```bash
# Pruebas unitarias
npm run test

# Pruebas end-to-end (e2e)
npm run test:e2e

# Cobertura de pruebas
npm run test:cov
```

---


