import vizagYardsImg from "../Images/Vizag-yards.png";
import rrbrosImg from "../Images/rrbros.png";
import huayinImg from "../Images/Huain_trade.png";

// Projects shown on the portfolio page.
// Only facts we have are filled in. A missing result, year or link is
// left out rather than made up.
//
// group: the filter category used on the portfolio page.
export const PROJECTS = [
  {
    id: "vizag-yards",
    category: "Real estate & plots",
    title: "Vizag Yards",
    subtitle: "Plots in Visakhapatnam & Bhogapuram",
    description:
      "A real estate website for residential plots in Visakhapatnam. It presents the ventures and their locations, shares the company story on the About page, and makes it easy for buyers to speak with an advisor.",
    result: null,
    year: null,
    link: "https://www.vizagyards.com/",
    image: vizagYardsImg,
    alt: "Vizag Yards website homepage",
  },
  {
    id: "rr-bros",
    group: "E-commerce",
    category: "Retail e-commerce",
    title: "RR Bros",
    subtitle: "Multi-category shopping mall",
    description:
      "A complete online store for a Visakhapatnam retail brand known for wedding garments, festive wear and family fashion. Curated collections, inventory management and a smooth shopping flow.",
    result: "Stronger online presence",
    year: "2024",
    link: "https://rrbros.in/",
    image: rrbrosImg,
    alt: "RR Bros online store homepage",
  },
  {
    id: "huayin-trade",
    group: "Trade",
    category: "International trade",
    title: "Huayin Trade",
    subtitle: "China–India trade platform",
    description:
      "A B2B platform that connects Indian and Chinese suppliers for bulk commodities, minerals and industrial equipment, with inventory visibility, logistics tracking and trade documents in one place.",
    result: "Buyers in 30+ countries",
    year: "2024",
    link: "https://www.huaintrade.com/",
    image: huayinImg,
    alt: "Huayin Trade platform homepage",
  },
];

