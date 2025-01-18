function greet(person: string, date: Date): string {
  console.log(person, date); //This line causes an error if date is not provided
  return `Hello, ${person}! Today is ${date.toDateString()}`;
}