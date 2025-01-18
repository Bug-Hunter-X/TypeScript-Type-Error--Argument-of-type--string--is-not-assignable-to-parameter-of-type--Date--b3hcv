function greet(person: string, date: Date | undefined): string {
  const dateString = date ? date.toDateString() : 'unknown date';
  return `Hello, ${person}! Today is ${dateString}`;
}