$(document).ready(function () {
  $('.slider__inner').slick({
    dots: true,
    arrows: false,
  });
});







// const markMesures = {
//   name: 'Mark',
//   mass: 65,
//   height: 172,

//   calcBMI: function (mass, height) {
//     return mass / (height * height);
//   }
// };

// const johnMesures = {
//   name: 'John',
//   mass: 92,
//   height: 190,

//   calcBMI: function (mass, height) {
//     return mass / (height * height);
//   }

// };

//const BMI = (mass, height) => mass / (height * height);


// const isMarkHighBMI = markMesures.calcBMI() > johnMesures.calcBMI();

// console.log(`Is Mark's BMI higher then John's? ${isMarkHighBMI}`);

// const markScores = [89, 120, 103],
//   johnScores = [116, 94, 123],
//   maryScores = [97, 134, 105];


// function calcAvg(array) {
//   let res = 0;

//   for (const index in array) {
//     res += array[index] / 3;
//   }

//   return res;
// }

// const markAvg = calcAvg(markScores);
// const johnAvg = calcAvg(johnScores);
// const maryAvg = calcAvg(maryScores);

// console.log(markAvg);
// console.log(johnAvg);
// console.log(maryAvg);

// let obj = {
//   name: 'lahb'
// };

// obj = null;




// const bill = [124, 48, 286];
// const tips = [];

// function calcTips(amount) {
//   if (amount < 50) {
//     return amount * 1.2;
//   } else if (amount > 200) {
//     return amount * 1.1;
//   } else {
//     return amount * 1.15;
//   }
// }

// for (let index of bill) {
//   tips.push(calcTips(index));
// }

// console.log(tips);

// const weekends = {
//   bills: [124, 48, 286, 180, 42],
//   tips: [],
//   total: [],

//   calcTips: function () {
//     this.bills.forEach((amount, index, array) => {
//       if (amount < 50) {
//         this.tips.push(amount * 1.2);
//       } else if (amount > 200) {
//         this.tips.push(amount * 1.1);
//       } else {
//         this.tips.push(amount * 1.15);
//       }
//     });
//   },

//   calcTotal: function () {
//     for (const index in this.bills) {
//       this.total.push(this.bills[index] + this.tips[index]);
//     }
//   }
// };

// weekends.calcTips();
// weekends.calcTotal();
// console.log(weekends.tips);
// console.log(weekends.total);
