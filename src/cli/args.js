import { argv } from "node:process";

const parseArgs = () => {
  const result = argv
    .slice(2)
    .reduce((total, element, index, array) => {
      if (element.startsWith("--")) {
        const changedElement = `${element.slice(2)} is ${array[index + 1]}`;
        total.push(changedElement);
      }
      return total;
    }, [])
    .join(", ");
  console.log(result);
};

parseArgs();
