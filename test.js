function* b() {
  try {
    yield "b";
    yield "c";
  } catch (e) {}
  return "b2";
}

function* a() {
  yield "a";
  yield* b();
  yield "x";
  return "a2";
}

const iterator = a();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.throw());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
