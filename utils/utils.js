exports.distanceCalculation = (latitude, longitude) => {
  const ctrlLdnLat = 51.509865;
  const ctrlLdnLong = -0.118092;
  const milesConversion = 0.62137119;
  //formula - https://rosettacode.org/wiki/Haversine_formula#JavaScript
  //formula - https://www.movable-type.co.uk/scripts/latlong.html

  // Formula for calculating distance by coordinates
  // formula:	a = sin²(Δφ/2) + cos φ1 * cos φ2 * sin²(Δλ/2)
  // c = 2 * atan2( √a, √(1−a) )
  // d = R * c

  const radius = 6371; //km
  const radians = Math.PI / 180;

  const q1 = ctrlLdnLat * radians; //london latitude
  const q2 = latitude * radians; //destination latitude
  const deltaLat = (latitude - ctrlLdnLat) * radians;
  const deltaLong = (longitude - ctrlLdnLong) * radians;

  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(q1) *
      Math.cos(q2) *
      Math.sin(deltaLong / 2) *
      Math.sin(deltaLong / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = radius * c;

  let milesFrmLdn = Number((d * milesConversion).toFixed(2));
  return milesFrmLdn;
};

exports.calcUserDistance = (users) => {
  return users.map((user) => {
    let london = this.distanceCalculation(user.latitude, user.longitude);
    return { ...user, london };
  });
};

exports.findUsersWithinLondon = (users) => {
  return this.calcUserDistance(users).filter((user) => {
    return user.london <= 50;
  });
};
