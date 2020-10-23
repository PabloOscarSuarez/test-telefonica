const createServer = require("../../server");
const supertest = require("supertest");
const axios = require("axios");

const app = createServer();
const request = supertest(app);
const mockAxios = axios;

test("GET /v1/location", async () => {
  const mock = {
    country: "Argentina",
    region: "C",
    city: "Buenos Aires",
  };

  mockAxios.get = jest.fn().mockResolvedValue({
    data: mock,
  });

  await request
    .get("/v1/location")
    .expect(200)
    .then((response) => {
      // Check the response type and length
      expect(response.body).toBeDefined();

      // Check the response data
      expect(response.body.country).toBeDefined();
      expect(response.body.region).toBeDefined();
      expect(response.body.city).toBeDefined();
    });
});
