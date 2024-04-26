export default function* createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  for (const employees of departments) {
    yield* employees;
  }
}
