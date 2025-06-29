import { generateRandomDate } from "$lib/generators/dates";
import { generateRandomName } from "$lib/generators/names";
import { generateRandomInt } from "$lib/generators/numbers";
import { generateRandomTime } from "$lib/generators/times";
import { getRandomElement } from "$lib/utils";

const convoA = () => [
  [getRandomElement(["Hello.", "Welcome."])],
  [
    getRandomElement(["Hi.", "Good morning.", "Good afternoon.", "Good evening."]),
    "What is your name?",
  ],
  [`My name is ${generateRandomName()}.`, "What is your name?"],
  [`My name is ${generateRandomName()}.`, "Nice to meet you.", "How old are you?"],
  [`I'm ${generateRandomInt(2, 99)} years old.`, "How old are you, and how did you get here?"],
  [`I'm ${generateRandomInt(2, 99)} years old, and I drove here.`],
  ["How was the drive over?"],
  [`It was ${getRandomElement(["so so", "bad", "good"])} thank you.`],
  ["I'm very sorry but I have to go now.", "I hope to see you again, bye."],
  [`Me too, ${getRandomElement(["bye", "goodbye"])}.`],
];

const convoB = () => {
  const convo = [
    [
      "Sorry to interrupt.",
      `I saw you from across the room and wanted to say ${getRandomElement(["hi", "hello"])}.`,
    ],
    [getRandomElement(["Hi.", "Alright.", "Hello."])],
    ["What's your name?"],
    [`I'm ${generateRandomName()}.`, "What about you?"],
    [`My name is ${generateRandomName()}.`, "Nice to meet you."],
    ["Nice to meet you too."],
  ];

  switch (generateRandomInt(1, 2)) {
    case 1:
      convo.push(
        ...[
          ["Are you from around here?"],
          ["No, I have just moved here.", "Do you know the time?"],
          [`It's ${generateRandomTime()}`],
          [
            getRandomElement([
              "Is it that time already!",
              "Is that the time!",
              "I'm going to be late!",
            ]),
            "I have to go now, nice to meet you.",
          ],
        ],
      );
      break;
    case 2:
      convo.push(
        ...[
          ["Are you local"],
          [
            `No I have just moved from ${getRandomElement(["Birmingham", "London", "Manchester"])}.`,
          ],
          ["Are you here for work?"],
          [`Yes, I work in a ${getRandomElement(["hotel", "bar", "school"])}.`],
          [
            `That's ${getRandomElement(["cool", "awesome", "great"])}.`,
            `Do you like your ${getRandomElement(["job", "work"])}?`,
          ],
          [
            getRandomElement([
              "Yes, I love my job.",
              "I somewhat like my job.",
              "No, I do not like my job.",
            ]),
          ],
          ["Maybe I can show you around before you start your new job.", "What day do you start?"],
          [`I start on ${generateRandomDate()}.`],
        ],
      );
      break;
  }

  return convo;
};

const convoC = () => [
  [`Hello again ${generateRandomName()}.`],
  [`${getRandomElement(["Hiya", "Hello", "Hi"])} ${generateRandomName()}, how are you doing?`],
  [
    `I'm doing ${getRandomElement(["not well", "not good", "so so", "ok", "great", "good"])}, what about you?`,
  ],
  [
    `I'm doing ${getRandomElement(["not well", "not good", "so so", "ok", "great", "good"])} thank you.`,
    "How is your mother and father doing?",
  ],
  [
    `They are doing ${getRandomElement(["very good", "good", "great"])} thanks for asking.`,
    "How are your brothers and sisters doing? Are they here?",
  ],
  [
    getRandomElement(["Yes they're here.", "No they're not here."]),
    `And they are ${getRandomElement(["tired", "exhausted", "tired and exhausted"])}`,
  ],
  ["Nice to run into you again but I have to go now, see you around."],
];

const convoD = () => [
  ["Sorry to interrupt.", "Do you know the time?"],
  [`The time is ${generateRandomTime()}`],
  ["Thank you"],
];

const convoE = () => [
  ["Sorry to interrupt.", "What is the date today?"],
  [`The date is ${generateRandomDate()}`],
  ["Thank you"],
];

const convos = [convoA, convoB, convoC, convoD, convoE];

export const generateRandomConversation = () => {
  const convo = getRandomElement(convos);
  if (!convo) throw new Error("No conversation found");

  return convo();
};
