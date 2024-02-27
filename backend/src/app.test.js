const request = require("supertest");
const app = require("./server.js"); // Asegúrate de que la ruta a tu archivo app sea correcta

describe("API Routes Test", () => {
  test("GET /health - debe responder con 200 OK", async () => {
    const response = await request(app).get("/health");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("OK");
  });

  test("GET / - debe responder con mensaje de bienvenida", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain(
      "¡Bienvenido a la aplicación de gestión de créditos!"
    );
  });
});

describe("GET /apiv1/agencias", () => {
  test("debe responder con un JSON vacío o con datos", async () => {
    const response = await request(app).get("/apiv1/agencias");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    if (response.body.length > 0) {
      expect(response.body[0]).toHaveProperty("algunaPropiedad");
    }
  });
});

describe("GET /apiv1/alquiler", () => {
  test("debe responder con un JSON vacío o con datos", async () => {
    const response = await request(app).get("/apiv1/alquiler");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    if (response.body.length > 0) {
      expect(response.body[0]).toHaveProperty("algunaPropiedad");
    }
  });
});
