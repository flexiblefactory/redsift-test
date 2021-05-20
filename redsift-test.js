/* Task 1 */

const task1 = [
  "apple",
  "pear",
  "lemon",
  "orange",
  "pineapple",
  "tomato",
  "lettuce",
  "mango",
  "apple",
  "pineapple",
  "lemon",
  "pear",
  "pear",
];

const result = task1.reduce((counts, fruit) => ({ ...counts, [fruit]: fruit in counts ? counts[fruit] + 1 : 1 }), {})

const items = ['Apple', 'Pear', 'Lemon', 'Orange', 'Pineapple', 'Tomato', 'Mango', 'Banana']

const output = items.map(i => `${i}: ${result[i.toLowerCase()] || 0}`).join(',\r\n')

console.log(output)

/* Task 2

a) What is the performance, in terms of, Big O notation, of the below code?

O(n)  (could be described as O(3n) please see https://stackoverflow.com/questions/25777714/which-algorithm-is-faster-on-or-o2n )

b) Write a solution that has better performance
*/

const getBlockPolicyState = (domains) => {

  let oneDomain = false;
  const allDomains = Object.keys(domains).every(k => {
    const blocked = domains[k].policy === 'block'
    if (!oneDomain && blocked) {
      oneDomain = true;
    }
    return blocked;
  })

  return { oneDomain, allDomains };

}
/*
c) What is the performance of your new solution?

O(n) ie the same linear complexity growth characteristic but up to 3 x faster than the original as it only iterates over n items once vs up to 3 times

*/

const domains = {
  "one.com": { policy: "block" },
  "two.com": { policy: "none" },
  "three.com": { policy: "none" },
  "four.com": { policy: "block" },
}


console.log(getBlockPolicyState(domains))


/* Task 3 */

const getFirstRepeated = (arr) => {

  let firstRepeated;
  let seen = {};

  //using some to avoid checking all items

  arr.some(n => {
    if (seen[n]) {
      firstRepeated = n;
      return true;
    }
    seen[n] = true;
    return false;
  })

  return firstRepeated;

}

const task3 = [
  [2, 5, 1, 2, 3, 5, 1, 2, 4], //Should return 2
  [2, 1, 1, 2, 3, 5, 1, 2, 4], //Should return 1
  [2, 3, 4, 5], //Should return undefined
  [2, 5, 5, 2, 3, 5, 1, 2, 4] //Should return 5
]

task3.forEach(a => console.log(getFirstRepeated(a)))
