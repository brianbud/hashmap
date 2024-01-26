if (index < 0 || index >= buckets.length) {
  throw new Error('Trying to access index out of bound');
}

function Hashmap() {
  function hash(string) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < string.length; i++) {
      hashCode = primeNumber * hashCode + string.charCodeAt(i);
    }
  }
}
