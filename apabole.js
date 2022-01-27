function ApaBole() {
  let result = [];
  for (let x = 1; x <= 100; x++) {
    if (x % 3 === 0) {
      if (x % 5 === 0) {
        result.push("ApaBole");
      } else {
        result.push("Apa");
      }
    } else if (x % 5 === 0) {
      result.push("Bole");
    } else {
      result.push(x);
    }
  }
  result = result.join(", ");
  return result;
}

// Print Result -
console.log(ApaBole());
