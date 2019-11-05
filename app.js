//  Generator . functions that can be paused and yield multiple values
// Iterator Example. are advanced loops that can be paused
// function nameIterator(names) {
//   let nextIndex = 0;

//   return {
//     next: function() {
//       return nextIndex < names.length ?
//       { value: names[nextIndex++], done: false } :
//       { done: true }
//     }
//   }
// }

// // Create an array of names
// const namesArr = ['Jack', 'Jill', 'John'];
// // Init iterator and pass in the names array
// const names = nameIterator(namesArr);

// console.log(names.next().value); //Jack
// console.log(names.next().value); //Jill
// console.log(names.next().value); //John
// console.log(names.next().value); //undefined. iterator done.

// Generator Example. functions that can be paused and yield multiple values
// function* sayNames() { //* tells javascript that this is a generator function and not just a function
//   yield 'Jack';
//   yield 'Jill';
//   yield 'John';
// }

// const name = sayNames();

// console.log(name.next()); //{value: jack, done:  false}
// console.log(name.next().value); //jack
// console.log(name.next().value); //jill
// console.log(name.next().value); //john
// console.log(name.next().value); //undefined

// ID Creator . generator
function* createIds() {
  let index = 1;

  while(true) {
    yield index++;
  }
}

const gen = createIds();

console.log(gen.next().value); //1
console.log(gen.next().value); //2
console.log(gen.next().value); //3
console.log(gen.next().value); //4
console.log(gen.next().value); //5
console.log(gen.next().value); //6