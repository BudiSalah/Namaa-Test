export default function* serialGenerator(start = 0) {
  while (true) {
    start++
    yield `SR-${String(start).padStart(6, '0')}`
  }
}
