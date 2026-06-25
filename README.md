#  SaaS Restaurante - Backend Core (NestJS)

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
  <a href="https://firebase.google.com/" target="blank"><img src="https://images.g2andco.com/firebase.png" width="120" style="margin-left: 20px;" alt="Firebase Logo" onerror="this.src='https://www.gstatic.com/devrel-devsite/prod/v7732296bdf8f2bb766beed7c631e5bbfe7f00c5c4e16eb883b40de0b07304e22/firebase/images/lockup.png'"/></a>
</p>

Este es el backend del **SaaS para Gestión de Restaurantes**, construido sobre **NestJS** como framework REST API de alto rendimiento y **Firebase Data Connect** como capa de base de datos relacional (conectada nativamente a **PostgreSQL**). 

Esta API proporciona todos los servicios necesarios para la autenticación de usuarios, la gestión de menús (categorías y platos), la toma de pedidos en tiempo real, el control de mesas, reseñas, favoritos y reportes financieros para la administración del restaurante.

---

##  Tecnologías Principales

*   **[NestJS](https://nestjs.com/)**: Framework progresivo de Node.js en TypeScript estructurado bajo arquitectura modular.
*   **[Firebase Data Connect](https://firebase.google.com/docs/data-connect)**: El motor de base de datos relacional de Firebase de última generación, que traduce esquemas de GraphQL a tablas y consultas optimizadas de PostgreSQL de forma automática.
*   **[PGlite](https://github.com/electric-sql/pglite)**: Una base de datos PostgreSQL nativa empaquetada como WASM. Gracias a esto, el emulador local ejecuta Postgres en memoria **sin necesidad de tener instalado PostgreSQL en el sistema operativo local**.
*   **[Firebase Admin SDK](https://firebase.google.com/docs/admin/setup)**: Utilizado para la inicialización segura del backend y la integración directa con **Firebase Storage** para la subida de imágenes de platos y categorías.
*   **[Passport & JWT](https://jwt.io/)**: Mecanismo de autenticación robusta mediante tokens JWT para proteger endpoints sensibles y control de roles (`client`, `admin`, etc.).

---

## Módulos del Sistema

La lógica del negocio se encuentra organizada de forma limpia dentro del directorio `src/modules/`:

1.  **`auth` (Autenticación y Seguridad)**: Registro e inicio de sesión de usuarios. Generación de tokens JWT y encriptación de contraseñas mediante `bcrypt`.
2.  **`menu` (Gestión de Productos)**: CRUD de categorías y platos/productos del restaurante (nombre, precio, disponibilidad, descripción e imágenes asociadas).
3.  **`orders` (Procesamiento de Pedidos)**: Creación de órdenes asociadas a una mesa específica, listado de historial de pedidos por usuario, obtención de pedidos individuales y actualización de su estado (`received`, `preparing`, `delivered`, `cancelled`).
4.  **`favorites` (Favoritos)**: Permite a los comensales guardar y listar sus platos preferidos.
5.  **`reviews` (Reseñas)**: Calificación y comentarios de productos por parte de los clientes.
6.  **`reports` (Reportes y Analíticas)**: Métricas y resúmenes de ventas filtrados por períodos (`today`, `week`, `month`) destinados a los administradores del SaaS.
7.  **`storage` (Servicio de Medios)**: Integración con Google Cloud Storage a través de Firebase Admin para subir imágenes de los platos y hacerlas públicas para la aplicación móvil.

---

##  Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:
*   [Node.js](https://nodejs.org/) (Versión 18 o superior recomendada)
*   [NPM](https://www.npmjs.com/) (incluido con Node.js)
*   [Firebase CLI](https://firebase.google.com/docs/cli) instalado globalmente en tu sistema para levantar los emuladores:
    ```bash
    npm install -g firebase-tools
    ```

---

##  Configuración e Instalación

### 1. Clonar e Instalar Dependencias
Accede al directorio del backend y ejecuta:
```bash
npm install
```

### 2. Configurar Credenciales de Firebase (Recomendado)
Para interactuar con Firebase Storage (subida de imágenes), necesitas el archivo de credenciales de la cuenta de servicio de Firebase.
1. Ve a la consola de Firebase del proyecto.
2. Ve a **Configuración del proyecto** > **Cuentas de servicio**.
3. Haz clic en **Generar nueva clave privada**.
4. Descarga el archivo JSON y guárdalo en la raíz de este proyecto con el nombre:
   `firebase-service-account.json`

> [!NOTE]  
> Si no configuras este archivo, el servidor iniciará usando las credenciales por defecto de la máquina, pero las funcionalidades de subida de imágenes a Storage fallarán si no hay una sesión activa con permisos adecuados en la máquina de desarrollo.

---

##  Ejecución en Entorno Local (Desarrollo)

El desarrollo local utiliza la suite de emuladores de Firebase. Esto simula todo el motor de base de datos relacional PostgreSQL de Firebase Data Connect sin consumir recursos en la nube.

### Paso 1: Iniciar el Emulador de Firebase Data Connect
En una terminal dedicada dentro de la carpeta del backend, inicia el emulador:
```bash
npx firebase emulators:start --only dataconnect
```
*   Esto levantará el servicio local de Data Connect en `localhost:9399`.
*   Gracias a la configuración de PGlite en `firebase.json`, el emulador creará y gestionará una base de datos PostgreSQL en memoria en la ruta `dataconnect/.dataconnect/pgliteData`. **No necesitas instalar PostgreSQL en tu computadora**.

### Paso 2: Ejecutar el Servidor NestJS
Abre otra terminal y define las variables de entorno necesarias para redirigir la base de datos al emulador local y configurar la clave secreta de JWT:

####  En Windows (PowerShell - Recomendado)
```powershell
$env:DATA_CONNECT_EMULATOR_HOST="127.0.0.1:9399"
$env:JWT_SECRET="clave_secreta_para_desarrollo_local"
npm run start:dev
```

####  En Windows (CMD)
```cmd
set DATA_CONNECT_EMULATOR_HOST=127.0.0.1:9399
set JWT_SECRET=clave_secreta_para_desarrollo_local
npm run start:dev
```

####  En macOS y Linux
```bash
DATA_CONNECT_EMULATOR_HOST="127.0.0.1:9399" JWT_SECRET="clave_secreta_para_desarrollo_local" npm run start:dev
```

El backend comenzará a correr en: **`http://localhost:3000`**

---

## Mapa de Endpoints Principales (API REST)

Todos los endpoints que requieren autenticación deben incluir el Header `Authorization: Bearer <JWT_TOKEN>`.

###  Autenticación
| Método | Endpoint | Descripción | Requiere Auth |
| :--- | :--- | :--- | :---: |
| `POST` | `/auth/register` | Registra un nuevo usuario (Cliente/Admin) | No |
| `POST` | `/auth/login` | Inicia sesión y retorna el token JWT y datos del usuario | No |

###  Menú (Categorías y Productos)
| Método | Endpoint | Descripción | Requiere Auth |
| :--- | :--- | :--- | :---: |
| `GET` | `/menu/categories` | Obtiene la lista de categorías del menú | No |
| `GET` | `/menu/products/:categoryId` | Obtiene los productos de una categoría específica | No |
| `POST` | `/menu/categories` | Crea una nueva categoría (acepta archivo `image` en FormData) | Sí (Admin) |
| `POST` | `/menu/products` | Crea un nuevo plato (acepta archivo `image` en FormData) | Sí (Admin) |
| `PATCH` | `/menu/products/:id` | Modifica datos o estado del producto | Sí |
| `DELETE` | `/menu/products/:id` | Elimina un plato del menú | Sí |

###  Pedidos (Orders)
| Método | Endpoint | Descripción | Requiere Auth |
| :--- | :--- | :--- | :---: |
| `POST` | `/orders` | Registra un nuevo pedido para el usuario logueado | Sí |
| `GET` | `/orders` | Lista todos los pedidos hechos por el usuario autenticado | Sí |
| `GET` | `/orders/:id` | Obtiene el detalle completo de un pedido específico | Sí |
| `PATCH` | `/orders/:id/status` | Cambia el estado del pedido (p. ej., `preparing`, `delivered`) | Sí |

###  Reportes y Dashboard
| Método | Endpoint | Descripción | Requiere Auth |
| :--- | :--- | :--- | :---: |
| `GET` | `/reports/summary` | Obtiene el resumen de ventas/pedidos. Params: `?period=today\|week\|month` | Sí |

---

##  Estructura Completa del Proyecto

```text
saas-backend/
├── dataconnect/                  # Configuración de Firebase Data Connect
│   ├── schema/
│   │   └── schema.gql            # Esquema conceptual de base de datos (GraphQL)
│   ├── example/
│   │   ├── connector.yaml        # Configuración de generación de SDK
│   │   ├── queries.gql           # Consultas relacionales GraphQL
│   │   └── mutations.gql         # Operaciones de escritura GraphQL
│   └── seed_data.gql             # Datos de prueba iniciales
├── src/
│   ├── core/                     # Filtros globales, guards de seguridad, etc.
│   ├── database/                 # Inicialización de servicios de conexión
│   ├── dataconnect-admin-generated/ # SDK de base de datos autogenerado
│   ├── modules/                  # Módulos encapsulados por dominio de negocio
│   │   ├── auth/
│   │   ├── menu/
│   │   ├── orders/
│   │   ├── favorites/
│   │   ├── reviews/
│   │   ├── reports/
│   │   └── storage/
│   ├── app.module.ts             # Módulo principal de NestJS
│   └── main.ts                   # Inicialización y Bootstrap del servidor
├── firebase.json                 # Configuración de emuladores y Data Connect
├── package.json                  # Script de inicio, dependencias y devDependencies
└── tsconfig.json                 # Configuración del compilador de TypeScript
```

---

##  Pruebas y Calidad

Puedes validar la lógica de la API ejecutando las pruebas automatizadas del proyecto:
```bash
# Ejecutar pruebas unitarias
npm run test

# Ejecutar pruebas en modo observador (watch mode)
npm run test:watch

# Obtener reporte de cobertura de código
npm run test:cov
```
