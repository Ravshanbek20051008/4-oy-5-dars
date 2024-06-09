// break/continue ga oid masallar
// 1-masala
// for (let i = 1; i <= 50; i++) {
//   if (i > 30) {
//     break;
//   }
//   console.log(i);
// }
// 2-masala
// for (let i = 1; i <= 50; i++) {
//   if (i % 5 !== 0) {
//     console.log(i);
//   }
// }
// 3-masala
// for (let i = 1; i <= 100; i++) {
//   if (i > 75) {
//     break;
//   }
//   console.log(i);
// }
// 4-masala
// for (let i = 1; i <= 30; i++) {
//   if (i % 3 !== 0) {
//     console.log(i);
//   }
// }

// Whileva do Whilega oid masalar]

// 1masla
// let i = 1;
// while (i <= 20) {
//   console.log(i);
//   i++;
// }

// 2-masala
// let i = 10;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }

// 3-masala
// let i = 1;
// while (i <= 50) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
//   i++;
// }
// 4-masla
// let i = 1;
// while (i <= 50) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
//   i++;
// }

// 5-masla
// let i = 1;
// let result = 0;
// while (i <= 10) {
//   result += i;
//   i++;
// }
// console.log(result);
// 6-masla
// let i = 1;
// let result = 1;
// while (i <= 10) {
//   result *= i;
//   i++;
// }
// console.log(result);
// 7-masala
// let son = 0;
// while (son >= 0) {
//   son = +prompt("son kiriting");
//   if (son >= 0) {
//     console.log(son);
//   }
//   i++;
// }
// console.log("manfiy son");
// 8-masala
// let i = 2;
// while (i > 0) {
//   if (i > 1024) {
//     break;
//   }
//   console.log(i);
//   i *= 2;
// }
// 9-masala
// let i = +prompt("son kiriting");
// let result = 1;
// while (i > 0) {
//   result *= i;
//   i--;
// }
// console.log(result);
// 10-masala
// let i = 1;
// while (i <= 20) {
//   if (i % 3 == 0) {
//     console.log(i);
//   }
//   i++;
// }

// do while ga oid masalar
// 1-masala
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);
// 2-masala
// let i = 20;
// do {
//   console.log(i);
//   i--;
// } while (i >= 1);
// 3-masala
// let i = 1;
// do {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
//   i++;
// } while (i <= 100);
// 4-masala
// let i = 1;
// let result = 1;
// do {
//   let i = +prompt("son kiriting");
//   result = i ** 2;
//   console.log(result);
//   if (i == 0) {
//     console.log("0 kiritish mumkun emas ");
//   }
// } while (i > 0);
// 5-masala
// let i = 0;
// do {
//   i = +prompt("son kiriting");
//   console.log(i);
//   if (i 10) {
//     console.log("10 dan kichik bo'lishi kerak");
//   }
// } while (i < 10);

// for ga doir masalalar
// 1-masla
// for (let i = 1; i < 50; i++) {
//   if (i % 5 == 0) {
//     console.log(i + "  5 ga karrali");
//   }
//   if (i % 7 == 0) {
//     console.log(i + " 7 ga karrali");
//   }
//   if (i % 5 == 0 && i % 7 == 0) {
//     console.log(i + " 5 va 7 ga karrali");
//   }
//   console.log(i);
//   i++;
// }

// 2-masala
// for (let i = 1; i < 12; i++) {
//   switch (i) {
//     case 1:
//       console.log("Yanvar");
//       break;
//     case 2:
//       console.log("Fevral");
//       break;
//     case 3:
//       console.log("Mart");
//       break;
//     case 4:
//       console.log("Aprel");
//       break;
//     case 5:
//       console.log("May");
//       break;
//     case 6:
//       console.log("Iyun");
//       break;
//     case 7:
//       console.log("Iyul");
//       break;
//     case 8:
//       console.log("Avgust");
//       break;
//     case 9:
//       console.log("Sentabr");
//       break;
//     case 10:
//       console.log("Oktabr");
//       break;
//     case 11:
//       console.log("Noyabr");
//       break;
//     case 12:
//       console.log("Dekabr");
//       break;
//   }
//   console.log(i);
// }
// 3-masala
let i = 1;
while (i >= 100) {
  if (i % 2 == 0) {
    continue;
  }
  if (i == 77) {
    break;
  }
  console.log(i);
  i++;
}
