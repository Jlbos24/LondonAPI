const server = require("../server/server");
const chai = require("chai");
const { expect } = chai;
const request = require("supertest");

describe("/api", () => {
  describe("GET", () => {
    describe("/users", () => {
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
      it("Status: 404 Path Not Found for GET Request", () => {
        return request(server)
          .get("/api/users-invalid/")
          .expect(404)
          .then(({ body: { msg } }) => {
            expect(msg).to.equal("Path Does Not Exist");
          });
      });
      describe("INVALID METHOD", () => {
        it("Status: 405 Invalid Method", () => {
          const invalidMethods = ["delete", "patch", "put", "post"];
          const promiseArray = invalidMethods.map((method) => {
            return request(server)
              [method]("/api/users")
              .expect(405)
              .then(({ body: { msg } }) => {
                expect(msg).to.equal("Method Not Allowed");
              });
          });
          return Promise.all(promiseArray);
        });
      });
    });
    describe.only("/users/london", () => {
      it("Status: 200 Return an Array of Users Registered in London", () => {
        return request(server)
          .get("/api/users/london")
          .expect(200)
          .then((res) => {
            expect(res.body.users.ldnRegUsers).to.be.an("Array");
            expect(res.body.users.ldnRegUsers[0]).to.contain.keys(
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
      it("Status: 200 Return an Array with all users both registered in London and Outside", () => {
        return request(server)
          .get("/api/users/london")
          .expect(200)
          .then((res) => {
            expect(res.body.users.allRegUsers).to.be.an("Array");
            expect(res.body.users.allRegUsers[0]).to.contain.keys(
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
});
