const { expect } = require("chai");
const {
  distanceCalculation,
  calcUserDistance,
  findUsersWithinLondon,
} = require("../utils/utils.js");

describe("Distance Calculation, calculate distance from Central London given Longitude and Latitude", () => {
  it("Pass a set of coordinates, function returns a value ", () => {
    const latitude = 33.5719791;
    const longitude = -84.3396421;
    const expected = 4213.65;

    expect(distanceCalculation(latitude, longitude)).to.eql(expected);
  });
  it("Pass a set of coordinates, function returns a value ", () => {
    const latitude = 41.1086264;
    const longitude = -7.6901721;
    const expected = 803.39;
    expect(distanceCalculation(latitude, longitude)).to.eql(expected);
  });
});

describe("Calculate Users Distance From London", () => {
  it("Expect an empty array to be returned when an empty array is passed to the function", () => {
    const testInput = [];
    const expected = [];

    expect(calcUserDistance(testInput)).to.eql(expected);
  });
  it("Expect an array with a single user with a london key when passed a single user to the function", () => {
    const testInput = [
      {
        id: 11,
        first_name: "Dorree",
        last_name: "Bouttell",
        email: "dbouttella@artisteer.com",
        ip_address: "252.2.180.171",
        latitude: 28.730583,
        longitude: 107.084012,
      },
    ];
    const expected = [
      {
        id: 11,
        first_name: "Dorree",
        last_name: "Bouttell",
        email: "dbouttella@artisteer.com",
        ip_address: "252.2.180.171",
        latitude: 28.730583,
        longitude: 107.084012,
        london: 5361.22,
      },
    ];

    expect(calcUserDistance(testInput)).to.eql(expected);
  });
  it("Expect an array with multiple users with a london key when passed a single user to the function", () => {
    const testInput = [
      {
        id: 11,
        first_name: "Dorree",
        last_name: "Bouttell",
        email: "dbouttella@artisteer.com",
        ip_address: "252.2.180.171",
        latitude: 28.730583,
        longitude: 107.084012,
      },
      {
        id: 12,
        first_name: "Hugibert",
        last_name: "Dore",
        email: "hdoreb@unesco.org",
        ip_address: "44.17.237.159",
        latitude: 25.4765601,
        longitude: -108.0887656,
      },
      {
        id: 13,
        first_name: "Curtis",
        last_name: "Headan",
        email: "cheadanc@nytimes.com",
        ip_address: "29.24.212.227",
        latitude: -14.8851268,
        longitude: 47.9960743,
      },
      {
        id: 14,
        first_name: "Meier",
        last_name: "Sturney",
        email: "msturneyd@mapy.cz",
        ip_address: "42.233.161.247",
        latitude: -5.2368931,
        longitude: -75.6557206,
      },
      {
        id: 15,
        first_name: "Roanne",
        last_name: "Copland",
        email: "rcoplande@example.com",
        ip_address: "25.253.221.139",
        latitude: 29.560254,
        longitude: 106.454213,
      },
    ];
    const expected = [
      {
        id: 11,
        first_name: "Dorree",
        last_name: "Bouttell",
        email: "dbouttella@artisteer.com",
        ip_address: "252.2.180.171",
        latitude: 28.730583,
        longitude: 107.084012,
        london: 5361.22,
      },
      {
        id: 12,
        first_name: "Hugibert",
        last_name: "Dore",
        email: "hdoreb@unesco.org",
        ip_address: "44.17.237.159",
        london: 5568.92,
        latitude: 25.4765601,
        longitude: -108.0887656,
      },
      {
        id: 13,
        first_name: "Curtis",
        last_name: "Headan",
        email: "cheadanc@nytimes.com",
        ip_address: "29.24.212.227",
        london: 5419.17,
        latitude: -14.8851268,
        longitude: 47.9960743,
      },
      {
        id: 14,
        first_name: "Meier",
        last_name: "Sturney",
        email: "msturneyd@mapy.cz",
        ip_address: "42.233.161.247",
        london: 5888.07,
        latitude: -5.2368931,
        longitude: -75.6557206,
      },
      {
        id: 15,
        first_name: "Roanne",
        last_name: "Copland",
        email: "rcoplande@example.com",
        ip_address: "25.253.221.139",
        london: 5292.62,
        latitude: 29.560254,
        longitude: 106.454213,
      },
    ];
    expect(calcUserDistance(testInput)).to.eql(expected);
  });
  it("Checking for Mutation", () => {
    const testInput = [
      {
        id: 13,
        first_name: "Curtis",
        last_name: "Headan",
        email: "cheadanc@nytimes.com",
        ip_address: "29.24.212.227",
        latitude: -14.8851268,
        longitude: 47.9960743,
      },
    ];

    calcUserDistance(testInput);

    expect(testInput).to.eql([
      {
        id: 13,
        first_name: "Curtis",
        last_name: "Headan",
        email: "cheadanc@nytimes.com",
        ip_address: "29.24.212.227",
        latitude: -14.8851268,
        longitude: 47.9960743,
      },
    ]);
  });
  it("The return value is a different reference from the input", () => {
    const testInput = [];

    expect(calcUserDistance(testInput)).not.equal(testInput);
  });
});

describe("Get Users Within 50 miles from London", () => {
  it("Expect an empty array when passed an empty array to the function", () => {
    const testInput = [];
    const expected = [];

    expect(findUsersWithinLondon(testInput)).to.eql(expected);
  });
  it("Expect an array returned with a single user within London", () => {
    const testInput = [
      {
        id: 1001,
        first_name: "John",
        last_name: "Smith",
        email: "johnsmith@gmail.com",
        ip_address: "92.84.39.0",
        latitude: 51.649113,
        longitude: -0.404372,
      },
    ];
    const expected = [
      {
        id: 1001,
        first_name: "John",
        last_name: "Smith",
        email: "johnsmith@gmail.com",
        ip_address: "92.84.39.0",
        london: 15.61,
        latitude: 51.649113,
        longitude: -0.404372,
      },
    ];

    expect(findUsersWithinLondon(testInput)).to.eql(expected);
  });
  it("Expect an empty array returned if users are 50 miles out of London", () => {
    const testInput = [
      {
        id: 11,
        first_name: "Dorree",
        last_name: "Bouttell",
        email: "dbouttella@artisteer.com",
        ip_address: "252.2.180.171",
        latitude: 28.730583,
        longitude: 107.084012,
      },
      {
        id: 12,
        first_name: "Hugibert",
        last_name: "Dore",
        email: "hdoreb@unesco.org",
        ip_address: "44.17.237.159",
        latitude: 25.4765601,
        longitude: -108.0887656,
      },
      {
        id: 13,
        first_name: "Curtis",
        last_name: "Headan",
        email: "cheadanc@nytimes.com",
        ip_address: "29.24.212.227",
        latitude: -14.8851268,
        longitude: 47.9960743,
      },
      {
        id: 14,
        first_name: "Meier",
        last_name: "Sturney",
        email: "msturneyd@mapy.cz",
        ip_address: "42.233.161.247",
        latitude: -5.2368931,
        longitude: -75.6557206,
      },
      {
        id: 15,
        first_name: "Roanne",
        last_name: "Copland",
        email: "rcoplande@example.com",
        ip_address: "25.253.221.139",
        latitude: 29.560254,
        longitude: 106.454213,
      },
    ];
    const expected = [];
    expect(findUsersWithinLondon(testInput)).to.eql(expected);
  });
  it("Expect an array with users from within London when passed larger data set", () => {
    const testInput = [
      {
        id: 11,
        first_name: "Dorree",
        last_name: "Bouttell",
        email: "dbouttella@artisteer.com",
        ip_address: "252.2.180.171",
        latitude: 28.730583,
        longitude: 107.084012,
      },
      {
        id: 1001,
        first_name: "John",
        last_name: "Smith",
        email: "johnsmith@gmail.com",
        ip_address: "92.84.39.0",
        latitude: 51.649113,
        longitude: -0.404372,
      },
      {
        id: 12,
        first_name: "Hugibert",
        last_name: "Dore",
        email: "hdoreb@unesco.org",
        ip_address: "44.17.237.159",
        latitude: 25.4765601,
        longitude: -108.0887656,
      },
      {
        id: 13,
        first_name: "Curtis",
        last_name: "Headan",
        email: "cheadanc@nytimes.com",
        ip_address: "29.24.212.227",
        latitude: -14.8851268,
        longitude: 47.9960743,
      },
      {
        id: 14,
        first_name: "Meier",
        last_name: "Sturney",
        email: "msturneyd@mapy.cz",
        ip_address: "42.233.161.247",
        latitude: -5.2368931,
        longitude: -75.6557206,
      },
      {
        id: 15,
        first_name: "Roanne",
        last_name: "Copland",
        email: "rcoplande@example.com",
        ip_address: "25.253.221.139",
        latitude: 29.560254,
        longitude: 106.454213,
      },
      {
        id: 1002,
        first_name: "Jane",
        last_name: "Smith",
        email: "jsmith@gmail.com",
        ip_address: "92.84.39.10",
        latitude: 51.755001,
        longitude: -0.336,
      },
    ];
    const expected = [
      {
        id: 1001,
        first_name: "John",
        last_name: "Smith",
        email: "johnsmith@gmail.com",
        ip_address: "92.84.39.0",
        london: 15.61,
        latitude: 51.649113,
        longitude: -0.404372,
      },
      {
        id: 1002,
        first_name: "Jane",
        last_name: "Smith",
        email: "jsmith@gmail.com",
        ip_address: "92.84.39.10",
        london: 19.34,
        latitude: 51.755001,
        longitude: -0.336,
      },
    ];
    expect(findUsersWithinLondon(testInput)).to.eql(expected);
  });
  it("Checking for Mutation", () => {
    const testInput = [
      {
        id: 11,
        first_name: "Dorree",
        last_name: "Bouttell",
        email: "dbouttella@artisteer.com",
        ip_address: "252.2.180.171",
        latitude: 28.730583,
        longitude: 107.084012,
      },
    ];

    findUsersWithinLondon(testInput);

    expect(testInput).to.eql([
      {
        id: 11,
        first_name: "Dorree",
        last_name: "Bouttell",
        email: "dbouttella@artisteer.com",
        ip_address: "252.2.180.171",
        latitude: 28.730583,
        longitude: 107.084012,
      },
    ]);
  });
  it("The return value is a different reference from the input", () => {
    const testInput = [];

    expect(findUsersWithinLondon(testInput)).not.equal(testInput);
  });
});
