let num = Math.floor((Math.random() * 100) + 1)
let counts = 0
let user = 0

do {
  user = Number.parseInt(prompt('Enter your Number'))

  if (user < num) {
    console.log(`your number ${user} is less than actual number`)
    counts += 1
  } else if (user > num) {
    console.log(`your number ${user} is greater than actual number`)
    counts += 1
  }
} while (num != user);

score = 100 - counts
console.log(`Your score is ${score}`)
console.log(`your number ${user} is correct`)
