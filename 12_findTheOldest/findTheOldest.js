const findTheOldest = function(array) {

    let currentYear = new Date().getFullYear();

    array.sort((a, b)=> {
        if (!a.yearOfDeath) {
            return ((currentYear - a.yearOfBirth) >
            (b.yearOfDeath - b.yearOfBirth)) ?
            -1 : 1

        } else if (!b.yearOfDeath) {
            return ((a.yearOfDeath - a.yearOfBirth) >
            (currentYear - b.yearOfBirth)) ?
            -1 : 1
        }

        return ((a.yearOfDeath - a.yearOfBirth) >
        (b.yearOfDeath - b.yearOfBirth)) ?
        -1 : 1
    
    });
    
    array.forEach((person)=> {
        if (!person.yearOfDeath) {

        }
    })

    return array[0];
    
};


const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
  // console.log(typeof findTheOldest(people))

// Do not edit below this line
module.exports = findTheOldest;
