import todos from "../../pictures/todos.png";
import bookFinder from "../../pictures/book-finder.png";
import calculator from "../../pictures/calculator.png";
import exchange from "../../pictures/exchange.png";
import metronome from "../../pictures/metronome.png";
import chattyTime from "../../pictures/chatty-time.png";

export const projects = [
  {
    title: "Chatty Time",
    features: [
      "Full CRUD functionality implemented with a flask postgres back end",
      "Login validation, and conditional rendering based on login state",
      "Front end written entirely with functional components and hooks, with redux toolkit",
    ],
    technologies: [
      "React",
      "Redux",
      "Redux-toolkit",
      "Python",
      "Flask",
      "HTML",
      "CSS",
      "JS",
    ],
    image: chattyTime,
    codeLink: "https://github.com/jamesdebnam/chat-room",
    projLink: "https://chatty-time.herokuapp.com/#/",
  },
  {
    title: "MS Todo List Clone",
    features: [
      "Filters that organize todos by important, completed and all",
      "Create groups to organize todo items",
      "Todo items can be dragged and dropped to reorganize",
    ],
    technologies: ["React", "Redux", "Cypress", "HTML", "CSS", "JS"],
    image: todos,
    codeLink: "https://github.com/jamesdebnam/todo",
    projLink: "https://jamesdebnam.github.io/todo/",
  },
  {
    title: "Book Finder",
    features: [
      "Uses Google Books and Tastedive API to recommend ten books based on input",
      "Choose the right book from the automatic dropdown",
      "SPA made without any modern frameworks",
    ],
    technologies: ["JS", "Node.js", "axios", "tape", "HTML", "CSS"],
    image: bookFinder,
    codeLink: "https://github.com/jamesdebnam/book-finder",
    projLink: "https://jamesdebnam.github.io/book-finder/",
  },
  {
    title: "Exchange Rate Calculator",
    features: [
      "Up to date exchange rates from ExchangeRate-API",
      "Form validation for inputs",
      "Instant and dynamic rate calculation",
    ],
    technologies: ["React", "Redux", "Redux-Form", "HTML", "CSS", "JS"],
    image: exchange,
    codeLink: "https://github.com/jamesdebnam/exchange-rate-calculator",
    projLink: "https://jamesdebnam.github.io/exchange-rate-calculator/",
  },
  {
    title: "Metronome",
    features: [
      "Functional metronome, made without any js frameworks",
      "SVG animation that keeps in beat with the metronome",
    ],
    technologies: ["JS", "HTML", "CSS", "Bootstrap"],
    image: metronome,
    codeLink: "https://github.com/jamesdebnam/Metronome",
    projLink: "https://jamesdebnam.github.io/Metronome/",
  },
  {
    title: "Calculator",
    features: [
      "Calculator that can handle multiple operations in one calculation",
      "Keyboard compatible, filters out any alphabetic input",
    ],
    technologies: ["JS", "HTML", "CSS"],
    image: calculator,
    codeLink: "https://github.com/jamesdebnam/Calculator",
    projLink: "https://jamesdebnam.github.io/Calculator/",
  },
];
