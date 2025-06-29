import { generateRandomName } from "$lib/generators/names";
import { getRandomElement } from "$lib/utils";
import { generateRandomInt } from "./numbers";

const convos = [
  () => [
    [getRandomElement(["Hello", "Welcome"])],
    [
      getRandomElement(["Hi", "Good morning", "Good afternoon", "Good evening"]),
      "What is your name?",
    ],
    [`My name is ${generateRandomName()}`, "What is your name?"],
    [`My name is ${generateRandomName()}`, "Nice to meet you", "How old are you"],
    [`I'm ${generateRandomInt(2, 99)} years old`, "How old are you, and how did you get here?"],
    [`I'm ${generateRandomInt(2, 99)} years old, and I drove here`],
    ["How was the drive over?"],
    [`It was ${getRandomElement(["so so", "bad", "good"])} thank you`],
    ["I'm sorry but I have to go now", "Nice to meet you"],
    [getRandomElement(["Bye", "Goodbye"])],
  ],
  // () => [["Sorry to interrupt you"]],
];

export const generateRandomConversation = () => {
  const convo = getRandomElement(convos);
  if (!convo) throw new Error("No conversation found");

  return convo();
};
