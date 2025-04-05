
# Backend Cepamex Render

Este proyecto es un backend Node.js básico listo para desplegarse en [Render.com](https://render.com).

## 🚀 ¿Qué hace?
Responde a consultas en la ruta:

```
POST /chatgpt-cepamex
```

### Ejemplo de request:
```json
{
  "message": "¿Quién vendió más en febrero?"
}
```

### Ejemplo de respuesta:
```json
{
  "reply": "Recibido: ¿Quién vendió más en febrero?. Backend activo en Render 🚀"
}
```

## 🛠 Instrucciones para desplegar en Render:

1. Sube este proyecto a un repositorio en GitHub
2. Ve a [https://render.com](https://render.com)
3. Haz clic en “New +” → “Web Service”
4. Conecta tu repositorio
5. Configura:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment:** `Node`
6. Agrega una variable de entorno en Render:
   - `OPENAI_API_KEY=tu_clave_aquí`

Listo ✅ Tu API estará activa en:

```
https://tu-backend.onrender.com/chatgpt-cepamex
```
