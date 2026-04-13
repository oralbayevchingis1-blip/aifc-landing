/** Данные партнёров — синхронизировано с основным сайтом solispartners.kz (team.ts). */

export type Partner = {
  id: string;
  name: string;
  nameEn?: string;
  role: string;
  roleEn?: string;
  image: string;
  bioRu: string;
  bioEn: string;
  tags: string[];
  tagsEn?: string[];
  profileUrl: string;
  linkedin: string;
  email: string;
};

export const partners: Partner[] = [
  {
    id: "chingis-oralbayev",
    name: "Чингис Оралбаев",
    nameEn: "Chingis Oralbayev",
    role: "Управляющий партнёр",
    roleEn: "Managing Partner",
    image: "/assets/team/chingis-oralbaev.png",
    bioRu: "Право МФЦА, сделки M&A, ИТ и цифровые активы. Допущен к практике в Суде МФЦА (Right of Audience). Более 8 лет в международной юридической фирме уровня Tier 1 (Legal 500) и более 15 лет практики по коммерческому праву.",
    bioEn: "AIFC law, M&A transactions, IT and digital assets. Admitted to practice before the AIFC Court (Right of Audience). Over 8 years in a Tier 1 international law firm (Legal 500) and over 15 years of commercial law practice.",
    tags: ["Право МФЦА", "M&A", "IT-право"],
    tagsEn: ["AIFC Law", "M&A", "IT Law"],
    profileUrl: "https://www.solispartners.kz/team/chingis-oralbayev",
    linkedin: "https://www.linkedin.com/in/chingis-oralbayev-990094160/",
    email: "ch.oralbayev@solispartners.kz",
  },
  {
    id: "nurgul-mukasheva",
    name: "Нургуль Мукашева",
    nameEn: "Nurgul Mukasheva",
    role: "Партнёр",
    roleEn: "Partner",
    image: "/assets/team/nurgul-mukasheva.jpg",
    bioRu: "Разрешение споров и арбитраж: коммерческие конфликты, суды, защита интересов бизнеса в сложных процедурах, включая трансграничные элементы.",
    bioEn: "Dispute resolution and arbitration: commercial disputes, court litigation, and business representation in complex proceedings, including cross-border elements.",
    tags: ["Споры и арбитраж", "Суды", "Корпоративные конфликты"],
    tagsEn: ["Disputes and Arbitration", "Litigation", "Corporate Disputes"],
    profileUrl: "https://www.solispartners.kz/team/nurgul-mukasheva",
    linkedin: "https://www.linkedin.com/in/nurgul-mukasheva",
    email: "n.mukasheva@solispartners.kz",
  },
];
