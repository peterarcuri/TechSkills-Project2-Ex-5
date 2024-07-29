const guests = ["ANTHONY", "CICERO", "CASSIUS", "CLEOPATRA"];


// =============================
// ========= STEP 1 ============
// =============================

guests.unshift("BRUTUS");
console.log(guests);

// =============================
// ======= QUESTION 1 ==========
// =============================

// You could call up a specifc index within an array using indices (guests[0]) / 0 checks the first element (starts at 0)

// =============================
// ========= STEP 2 ============
// =============================

guests.push("AUGUSTUS", "LUCIA");
console.log(guests);

// =============================
// ========= STEP 3 ============
// =============================

const spartacusIndex = guests.indexOf("SPARTACUS");
console.log(spartacusIndex);

// =============================
// ======= QUESTION 2 ==========
// =============================

// If "Spartacus" was not on the guest list, it would return an indexed value of -1.

// =============================
// ========= STEP 4 ============
// =============================

const indexToRemove = guests.indexOf("CASSIUS");
guests.splice(indexToRemove, 1);
console.log(guests);

// =============================
// ========= STEP 5 ============
// =============================

const newGuestlist = guests.slice(0, 3);
console.log(newGuestlist);


// =============================
// ========= STEP 6 ============
// =============================

const honoredGuests = guests.slice(0, 1);
const otherGuests = guests.slice(1);
otherGuests.sort();
const sortedGuests = honoredGuests.concat(otherGuests);

console.log(sortedGuests);