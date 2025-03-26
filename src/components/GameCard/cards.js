import img1 from "./cardsImg/gta.png";
import img2 from "./cardsImg/2.png";
import img3 from "./cardsImg/3.png";
import img4 from "./cardsImg/4.png";
import img5 from "./cardsImg/5.png";
import img6 from "./cardsImg/6.png";
import img7 from "./cardsImg/7.png";
import img8 from "./cardsImg/8.png";
import img9 from "./cardsImg/9.png";
import img10 from "./cardsImg/10.png";
import img11 from "./cardsImg/11.png";
import img12 from "./cardsImg/12.png";
import img13 from "./cardsImg/13.png";
import img14 from "./cardsImg/14.png";
import img15 from "./cardsImg/15.png";
import img16 from "./cardsImg/16.png";
import img17 from "./cardsImg/17.png";
import img18 from "./cardsImg/18.png";
import img19 from "./cardsImg/19.png";
import img20 from "./cardsImg/20.png";
import img21 from "./cardsImg/21.png";
import img22 from "./cardsImg/22.png";
import img23 from "./cardsImg/23.png";
import img24 from "./cardsImg/24.png";
import img25 from "./cardsImg/25.png";
import img26 from "./cardsImg/26.png";

const games = [
  {
    id: 1,
    title: "Grand Theft Auto V",
    img: img1,
    category: "Экшн",
    description: "Погрузитесь в динамичный криминальный мир Лос-Сантоса, где вы управляете тремя главными героями, выполняете рискованные ограбления, участвуете в перестрелках, гонках и исследуете огромный открытый мир с возможностями для бизнеса, развлечений и экстремальных приключений.",
    price: 1999,
  },
  {
    id: 2,
    title: "Minecraft",
    img: img2,
    category: "Стратегии",
    description: "Создавайте, исследуйте и выживайте в бесконечном процедурно генерируемом мире. Стройте величественные замки, добывайте ресурсы, сражайтесь с мобами, выращивайте урожай и создавайте собственные приключения в этой культовой песочнице.",
    price: 1299,
  },
  {
    id: 3,
    title: "PUBG: Battlegrounds",
    img: img3,
    category: "Шутеры",
    description: "Сразитесь с 99 противниками в напряжённой королевской битве, где только один может остаться в живых. Исследуйте различные карты, находите оружие и снаряжение, разрабатывайте тактики и сражайтесь за право быть последним выжившим.",
    price: 1499,
  },
  {
    id: 4,
    title: "Red Dead Redemption 2",
    img: img4,
    category: "Экшн",
    description: "Путешествуйте по Дикому Западу в роли Артура Моргана — преступника, вынужденного балансировать между честью и выживанием. Вас ждут захватывающие перестрелки, охота, рыбалка, грабежи и масштабная сюжетная кампания в реалистичном мире.",
    price: 2499,
  },
  {
    id: 5,
    title: "Dota 2",
    img: img5,
    category: "Стратегии",
    description: "Глобальная многопользовательская стратегическая игра, в которой две команды по пять игроков сражаются за разрушение вражеского трона. Выберите одного из более чем 120 героев, овладейте их уникальными способностями и ведите команду к победе.",
    price: 1699,
  },
  {
    id: 6,
    title: "Counter Strike 2",
    img: img6,
    category: "Шутеры",
    description: "Продолжение легендарного шутера, где спецназовцы и террористы сражаются в напряжённых тактических миссиях. Улучшенная графика, обновлённые карты и реалистичная физика создают атмосферу подлинного боевого опыта.",
    price: 1199,
  },
  {
    id: 7,
    title: "Roblox",
    img: img7,
    category: "Экшн",
    description: "Огромная онлайн-платформа, где игроки могут создавать свои игры, исследовать тысячи миров и взаимодействовать с миллионами других пользователей. Будьте кем угодно — от воина до архитектора — и реализуйте любые идеи.",
    price: 0,
  },
  {
    id: 8,
    title: "Valorant",
    img: img8,
    category: "Шутеры",
    description: "Тактический шутер 5 на 5, сочетающий элементы CS:GO и Overwatch. Выберите уникального агента со специальными способностями, работайте в команде и побеждайте врагов в динамичных перестрелках.",
    price: 0,
  },
  {
    id: 9,
    title: "Metro Exodus",
    img: img9,
    category: "Спортивные",
    description: "Постапокалиптический шутер, основанный на произведениях Дмитрия Глуховского. Следуйте за Артёмом в путешествии через разрушенную Россию, сражайтесь с мутантами, исследуйте заражённые зоны и пытайтесь найти новую жизнь за пределами метро.",
    price: 1999,
  },
  {
    id: 10,
    title: "Far Cry 5",
    img: img10,
    category: "Шутеры",
    description: "Вас ждёт открытый мир, полный опасностей и приключений, где вам предстоит бороться с религиозным культом, освободить жителей округа Хоуп и восстановить справедливость, используя разнообразное оружие и тактики.",
    price: 1599,
  },
  {
    id: 11,
    title: "Atomic Heart",
    img: img11,
    category: "Экшн",
    description: "Шутер от первого лица в альтернативной реальности, где игрок сталкивается с советскими биомеханическими созданиями.",
    price: 2299,
  },
  {
    id: 12,
    title: "S.T.A.L.K.E.R",
    img: img12,
    category: "Экшн",
    description: "Мистический шутер с элементами ролевой игры в зоне Чернобыля, с фокусом на выживание и исследование.",
    price: 1499,
  },
  {
    id: 13,
    title: "R.E.P.O",
    img: img13,
    category: "Стратегии",
    description: "Стратегия с элементами экономики, где игроки управляют постапокалиптическим миром.",
    price: 1799,
  },
  {
    id: 14,
    title: "Lethal Company",
    img: img14,
    category: "Шутеры",
    description: "Хоррор-игра, где игроки должны пройти через зловещие здания, сражаясь с ужасными существами.",
    price: 799,
  },
  {
    id: 15,
    title: "Half-Life",
    img: img15,
    category: "Шутеры",
    description: "Культовая игра, где игроки борются с инопланетными существами и солдатами в научной лаборатории.",
    price: 499,
  },
  {
    id: 16,
    title: "The Sims 4",
    img: img16,
    category: "Шутеры",
    description: "Жизненный симулятор, в котором игроки создают и управляют жизнью виртуальных персонажей.",
    price: 2499,
  },
  {
    id: 17,
    title: "Need For Speed Most Wanted",
    img: img17,
    category: "Спортивные",
    description: "Гонка с открытым миром, где игроки соревнуются за звание самого быстрого водителя.",
    price: 999,
  },
  {
    id: 18,
    title: "Alien Shooter 2",
    img: img18,
    category: "Многопользовательские",
    description: "Шутер с элементами ролевой игры, где игроки сражаются с инопланетянами и монстрами в различных локациях.",
    price: 999,
  },
  {
    id: 19,
    title: "DOOM",
    img: img19,
    category: "Шутеры",
    description: "Классический шутер, где игрок сражается с демонами из ада.",
    price: 899,
  },
  {
    id: 20,
    title: "Saints Row",
    img: img20,
    category: "Шутеры",
    description: "Игра в открытом мире с элементами шутера, где игрок становится главой преступной группировки.",
    price: 1999,
  },
  {
    id: 21,
    title: "Hitman",
    img: img21,
    category: "Экшн",
    description: "Шутер-стелс, где игроки управляют профессиональным убийцей, выполняющим задания по устранению целей.",
    price: 1599,
  },
  {
    id: 22,
    title: "The Forest",
    img: img22,
    category: "Экшн",
    description: "Выживание в открытом мире, где игроки сталкиваются с каннибалами и другими угрозами.",
    price: 1299,
  },
  {
    id: 23,
    title: "Valheim",
    img: img23,
    category: "Ролевые",
    description: "Выживание и исследование в мире викингов, с элементами крафта и строительства.",
    price: 1499,
  },
  {
    id: 24,
    title: "Terraria",
    img: img24,
    category: "Экшн",
    description: "2D-песочница с элементами строительства, выживания и исследований.",
    price: 499,
  },
  {
    id: 25,
    title: "7 Days To Die",
    img: img25,
    category: "Ролевые",
    description: "Зомби-выживание с элементами ролевой игры и строительства.",
    price: 1199,
  },
  {
    id: 26,
    title: "Elden Ring",
    img: img26,
    category: "Приключения",
    description: "Ролевая игра с элементами экшн, в открытом мире, созданная студией FromSoftware.",
    price: 3599,
  },
];

export default games;
