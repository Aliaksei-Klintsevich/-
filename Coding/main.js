let entrances = 4; // количество подъездов
let floors = 9; // количество этажей
let flatsPerFloor = 4; // количество квартир на этаже
let flatsPerEntrance = floors * flatsPerFloor;
console.log ('Квартир в подъезде', flatsPerEntrance);
let flats = entrances * flatsPerEntrance;
console.log('Всего квартир в доме', flats);


let x1 = 2;
let y1 = 3;
let x2 = 10;
let y2 = 5;
let xFinal = x2 - x1;
console.log ('Первая сторона', xFinal);
let yFinal = y2 - y1;
console.log ('Вторая сторона', yFinal);
let sqare = Math.abs (xFinal * yFinal);
console.log ('Площадь равна', sqare);


let xr1 = 10;
let yr1 = 5;
let xr2 = 2;
let yr2 = 3;
let xrFinal = xr2 - xr1;
console.log ('Первая сторона', xrFinal);
let yrFinal = yr2 - yr1;
console.log ('Вторая сторона', yrFinal);
let rsqare = Math.abs (xrFinal * yrFinal);
console.log ('Площадь равна', rsqare);


let exr1 = -5;
let eyr1 = 8;
let exr2 = 10;
let eyr2 = 5;
let exrFinal = exr2 - exr1;
console.log ('Первая сторона', exrFinal);
let eyrFinal = eyr2 - eyr1;
console.log ('Вторая сторона', eyrFinal);
let ersqare = Math.abs (exrFinal * eyrFinal);
console.log ('Площадь равна', ersqare);


let rexr1 = 5;
let reyr1 = 8;
let rexr2 = 5;
let reyr2 = 5;
let rexrFinal = rexr2 - rexr1;
console.log ('Первая сторона', rexrFinal);
let reyrFinal = reyr2 - reyr1;
console.log ('Вторая сторона', reyrFinal);
let rersqare = Math.abs (rexrFinal * reyrFinal);
console.log ('Площадь равна', rersqare);


let trexr1 = 8;
let treyr1 = 1;
let trexr2 = 5;
let treyr2 = 1;
let trexrFinal = trexr2 - trexr1;
console.log ('Первая сторона', trexrFinal);
let treyrFinal = treyr2 - treyr1;
console.log ('Вторая сторона', treyrFinal);
let trersqare = Math.abs (trexrFinal * treyrFinal);
console.log ('Площадь равна', trersqare);