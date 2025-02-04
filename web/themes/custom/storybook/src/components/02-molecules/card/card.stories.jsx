import parse from "html-react-parser";

import card from "./card.twig";
import data from "./card.yml";
import "./card.css";

const component = {
  title: "Molecules/Card",
};

export const Card = {
  render: (args) => parse(card(args)),
  args: { ...data },
};

export default component;
