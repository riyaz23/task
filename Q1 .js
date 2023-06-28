//compare two json have the same properties without order?
//a.Let obj1 = { name: "Person 1", age: 5 };
//b.Let obj2 = { age: 5, name: "Person 1" };
const obj1 = { name: "Person 1", age: 5 };
const obj2 = { age: 5, name: "Person 1" };

function compareOBJ(obj1, obj2) {
  // Step 1: Parse JSON string to object
  const json1 = JSON.stringify(obj1);
  const json2 = JSON.stringify(obj2);

  // Step 2: Compare the number of properties
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  // Step 3: Compare the actual properties
  for (let key in obj1) {
    if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
      return false;
    }
  }

  for (let key in obj2) {
    if (!obj1.hasOwnProperty(key) || obj2[key] !== obj1[key]) {
      return false;
    }
  }

  return true;
}

const result = compareOBJ(obj1, obj2);
console.log(result); 

// Output: true

