

const Greet = (HelloWorld) => {
  return (name) => `${HelloWorld}, ${name}!`;
};

console.log(Greet("Hello")("Жумабек")); 