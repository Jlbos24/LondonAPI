const server = require("../server/server");
const chai = require("chai");
const { expect } = chai;
const request = require("supertest");

describe("/api", () => {
  describe("GET", () => {
    it("Status: 200 Return An Array of All Users", () => {
      return request(server)
        .get("/api/users/")
        .expect(200)
        .then((res) => {
          expect(res.body.users).to.be.an("Array");
          expect(res.body.users[0].id).to.eql(1);
          expect(res.body.users[0].first_name).to.eql("Maurise");
          expect(res.body.users[0]).to.contain.keys(
            "id",
            "first_name",
            "last_name",
            "email",
            "ip_address",
            "latitude",
            "longitude"
          );
        });
    });
  });
});
