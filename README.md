---

##  `responder-service`

# Responder Service

Microservicio NestJS (`v11.0.7`) que escucha mensajes entrantes vía TCP o Redis y responde con la hora actual.

---

## 📦 Requisitos

- Node.js >= 18.x
- npm >= 9.x
- NestJS CLI `11.0.7` (opcional)

---

## 🚀 Instalación y ejecución

1. **Clona este repositorio** (o navega al subproyecto correspondiente):

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd responder-service
Instala dependencias:


npm install
Copia .env.example a .env:


cp .env.example .env
Y configura las variables necesarias:


TRANSPORT=tcp
RESPONDER_TCP_HOST=127.0.0.1
RESPONDER_TCP_PORT=4002

# Para Redis (opcional):
# TRANSPORT=redis
# REDIS_HOST=localhost
# REDIS_PORT=6379
Ejecuta en modo desarrollo:


npm run start:dev
🧪 Scripts útiles

npm run start        # Ejecuta en modo producción
npm run start:dev    # Ejecuta con recarga en caliente
npm run build        # Compila a JavaScript
🧠 Funcionamiento
Escucha mensajes con patrón { cmd: 'get_time' }.

Devuelve la hora actual en formato ISO.

📁 Estructura clave

src/
├── app.controller.ts   # Contiene el handler de mensajes entrantes
├── app.module.ts       # Configura el microservicio
├── main.ts             # Inicializa el servicio como microservicio TCP/Redis
🔧 Notas
Asegúrate de que el servicio esté corriendo en el puerto especificado.

Si usas Redis como transporte, instala:


npm install ioredis
Este microservicio no tiene endpoints HTTP, solo responde a mensajes TCP o Redis.

💬 Ejemplo de respuesta
Este servicio no tiene endpoint expuesto directamente.
Responde cuando otro microservicio (por ejemplo Requester) le pide la hora.