function contains(object, value) {
  for (var key in object) {
    // if (object[key] == value) {
    if (object[key] === value) {
      return true;
    } else if (typeof object[key] === 'object') {
      if (contains(object[key], value)) {
        return true;
      }
    }
  }
  return false;
}

var nestedObject1 = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2'
          }
        }
      }
    }
  }
};

var nestedObject2 = {
  data: {
    info: {
      hamada: 'Ahmad',
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2'
          }
        }
      }
    }
  }
};

// Tests
console.log(contains(nestedObject1, 44));
console.log(contains(nestedObject1, 'foo2'));
console.log(contains(nestedObject1, 'bar'));

console.log(contains(nestedObject2, 'Ahmad'));
console.log(contains(nestedObject2, 'ahmad'));
console.log(contains(nestedObject2, '44'));