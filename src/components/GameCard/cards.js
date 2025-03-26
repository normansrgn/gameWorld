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
    download: "Доступно в Steam, Epic Games Store, Rockstar Launcher. Поддерживаемые платформы: Windows, PlayStation, Xbox.",
    systemRequirements: {
      OS: "Windows 10 64-bit",
      Processor: "Intel Core i5-3470 / AMD FX-8350",
      Memory: "8 GB RAM",
      Graphics: "NVIDIA GTX 660 / AMD HD 7870",
      Storage: "100 GB available space"
    }
  },
  {
    id: 2,
    title: "Minecraft",
    img: img2,
    category: "Стратегии",
    description: "Создавайте, исследуйте и выживайте в бесконечном процедурно генерируемом мире. Стройте величественные замки, добывайте ресурсы, сражайтесь с мобами, выращивайте урожай и создавайте собственные приключения в этой культовой песочнице.",
    price: 1299,
    download: "Доступно в Minecraft.net, Microsoft Store. Поддерживаемые платформы: Windows, macOS, Linux, PlayStation, Xbox, Nintendo Switch, мобильные устройства.",
    systemRequirements: {
      OS: "Windows 10 или более поздняя версия",
      Processor: "Intel Core i5-4690 или AMD A10-7800",
      Memory: "4 GB RAM",
      Graphics: "NVIDIA GeForce 700 Series или AMD Radeon Rx 200 Series",
      Storage: "4 GB доступного места"
    }
  },
  {
    id: 3,
    title: "PUBG: Battlegrounds",
    img: img3,
    category: "Шутеры",
    description: "Сразитесь с 99 противниками в напряжённой королевской битве, где только один может остаться в живых. Исследуйте различные карты, находите оружие и снаряжение, разрабатывайте тактики и сражайтесь за право быть последним выжившим.",
    price: 1499,
    download: "Доступно в Steam, PUBG.com. Поддерживаемые платформы: Windows, PlayStation, Xbox.",
    systemRequirements: {
      OS: "Windows 7/8/10 64-bit",
      Processor: "Intel Core i5-4430 / AMD FX-6300",
      Memory: "6 GB RAM",
      Graphics: "NVIDIA GeForce GTX 960 / AMD Radeon R7 370",
      Storage: "30 GB доступного места"
    }
  },
  {
    id: 4,
    title: "Red Dead Redemption 2",
    img: img4,
    category: "Экшн",
    description: "Путешествуйте по Дикому Западу в роли Артура Моргана — преступника, вынужденного балансировать между честью и выживанием. Вас ждут захватывающие перестрелки, охота, рыбалка, грабежи и масштабная сюжетная кампания в реалистичном мире.",
    price: 2499,
    download: "Доступно в Rockstar Launcher, Epic Games Store. Поддерживаемые платформы: Windows, PlayStation, Xbox.",
    systemRequirements: {
      OS: "Windows 10 64-bit",
      Processor: "Intel Core i5-2500 / AMD FX-6300",
      Memory: "8 GB RAM",
      Graphics: "NVIDIA GeForce GTX 770 / AMD Radeon R9 280",
      Storage: "150 GB доступного места"
    }
  },
  {
    id: 5,
    title: "Dota 2",
    img: img5,
    category: "Стратегии",
    description: "Глобальная многопользовательская стратегическая игра, в которой две команды по пять игроков сражаются за разрушение вражеского трона. Выберите одного из более чем 120 героев, овладейте их уникальными способностями и ведите команду к победе.",
    price: 1699,
    download: "Доступно в Steam. Поддерживаемые платформы: Windows, macOS, Linux.",
    systemRequirements: {
      OS: "Windows 7 или более поздняя версия",
      Processor: "Dual-core от 2.8 GHz",
      Memory: "4 GB RAM",
      Graphics: "NVIDIA GeForce 8600/9600/GTX 250 или ATI/AMD Radeon HD 2600/3600",
      Storage: "15 GB доступного места"
    }
  },
  {
    id: 6,
    title: "Counter Strike 2",
    img: img6,
    category: "Шутеры",
    description: "Продолжение легендарного шутера, где спецназовцы и террористы сражаются в напряжённых тактических миссиях. Улучшенная графика, обновлённые карты и реалистичная физика создают атмосферу подлинного боевого опыта.",
    price: 1199,
    download: "Доступно в Steam. Поддерживаемые платформы: Windows.",
    systemRequirements: {
      OS: "Windows 10 или более поздняя версия",
      Processor: "Intel Core 2 Duo или AMD 3.0 GHz",
      Memory: "4 GB RAM",
      Graphics: "NVIDIA GeForce 660 или AMD Radeon HD 7770",
      Storage: "20 GB доступного места"
    }
  },
  {
    id: 7,
    title: "Roblox",
    img: img7,
    category: "Экшн",
    description: "Огромная онлайн-платформа, где игроки могут создавать свои игры, исследовать тысячи миров и взаимодействовать с миллионами других пользователей. Будьте кем угодно — от воина до архитектора — и реализуйте любые идеи.",
    price: 0,
    download: "Доступно на Roblox.com, Microsoft Store. Поддерживаемые платформы: Windows, macOS, iOS, Android, Xbox.",
    systemRequirements: {
      OS: "Windows 7 или более поздняя версия",
      Processor: "Intel Core i5 или аналогичный",
      Memory: "4 GB RAM",
      Graphics: "NVIDIA GeForce 660 или аналогичный",
      Storage: "20 MB доступного места"
    }
  },
  {
    id: 8,
    title: "Valorant",
    img: img8,
    category: "Шутеры",
    description: "Тактический шутер 5 на 5, сочетающий элементы CS:GO и Overwatch. Выберите уникального агента со специальными способностями, работайте в команде и побеждайте врагов в динамичных перестрелках.",
    price: 0,
    download: "Доступно на Riot Games. Поддерживаемые платформы: Windows.",
    systemRequirements: {
      OS: "Windows 7/8/10",
      Processor: "Intel Core 2 Duo E6600 или AMD Phenom X3 8750",
      Memory: "4 GB RAM",
      Graphics: "Intel HD 3000",
      Storage: "7 GB доступного места"
    }
  },
  {
    id: 9,
    title: "Metro Exodus",
    img: img9,
    category: "Спортивные",
    description: "Постапокалиптический шутер, основанный на произведениях Дмитрия Глуховского. Следуйте за Артёмом в путешествии через разрушенную Россию, сражайтесь с мутантами, исследуйте заражённые зоны и пытайтесь найти новую жизнь за пределами метро.",
    price: 1999,
    download: "Доступно в Steam, Epic Games Store. Поддерживаемые платформы: Windows, PlayStation, Xbox.",
    systemRequirements: {
      OS: "Windows 10 64-bit",
      Processor: "Intel Core i5-4440 / AMD FX-8350",
      Memory: "8 GB RAM",
      Graphics: "NVIDIA GeForce GTX 960 / AMD Radeon R9 280",
      Storage: "102 GB доступного места"
    }
  },
  {
    id: 10,
    title: "Far Cry 5",
    img: img10,
    category: "Шутеры",
    description: "Вас ждёт открытый мир, полный опасностей и приключений, где вам предстоит бороться с религиозным культом, освободить жителей округа Хоуп и восстановить справедливость, используя разнообразное оружие и тактики.",
    price: 1599,
    download: "Доступно в Uplay, Steam. Поддерживаемые платформы: Windows, PlayStation, Xbox.",
    systemRequirements: {
      OS: "Windows 7/8/10",
      Processor: "Intel Core i5-2400 / AMD FX-6300",
      Memory: "8 GB RAM",
      Graphics: "NVIDIA GeForce GTX 660 / AMD Radeon R9 270",
      Storage: "30 GB доступного места"
    }
  },
  {
    id: 11,
    title: "Atomic Heart",
    img: img11,
    category: "Экшн",
    description: "Шутер от первого лица в альтернативной реальности, где игрок сталкивается с советскими биомеханическими созданиями.",
    price: 2299,
    download: "Доступно в Steam, Epic Games Store. Поддерживаемые платформы: Windows.",
    systemRequirements: {
      OS: "Windows 10 64-bit",
      Processor: "Intel Core i5-2500 / AMD Ryzen 3 1200",
      Memory: "8 GB RAM",
      Graphics: "NVIDIA GeForce GTX 970 / AMD Radeon RX 580",
      Storage: "70 GB доступного места"
    }
  },
  {
    id: 12,
    title: "S.T.A.L.K.E.R",
    img: img12,
    category: "Экшн",
    description: "Мистический шутер с элементами ролевой игры в зоне Чернобыля, с фокусом на выживание и исследование.",
    price: 1499,
    download: "Доступно в Steam. Поддерживаемые платформы: Windows.",
    systemRequirements: {
      OS: "Windows 7/8/10",
      Processor: "Intel Core 2 Duo 2.4 GHz или AMD аналогичный",
      Memory: "2 GB RAM",
      Graphics: "NVIDIA GeForce 6600 или AMD Radeon 9600",
      Storage: "32 GB доступного места"
    }
  },
  {
    id: 13,
    title: "R.E.P.O",
    img: img13,
    category: "Стратегии",
    description: "Стратегия с элементами экономики, где игроки управляют постапокалиптическим миром.",
    price: 1799,
    download: "Доступно в Steam. Поддерживаемые платформы: Windows.",
    systemRequirements: {
      OS: "Windows 7/8/10",
      Processor: "Intel Core i3-2100 или AMD аналогичный",
      Memory: "4 GB RAM",
      Graphics: "NVIDIA GeForce 450 или AMD Radeon HD 5750",
      Storage: "10 GB доступного места"
    }
  },
  {
    id: 14,
    title: "Lethal Company",
    img: img14,
    category: "Шутеры",
    description: "Хоррор-игра, где игроки должны пройти через зловещие здания, сражаясь с ужасными существами.",
    price: 799,
    download: "Доступно в Steam. Поддерживаемые платформы: Windows.",
    systemRequirements: {
      OS: "Windows 10",
      Processor: "Intel Core i5-2500 или AMD аналогичный",
      Memory: "4 GB RAM",
      Graphics: "NVIDIA GeForce GTX 660 или AMD Radeon HD 7850",
      Storage: "10 GB доступного места"
    }
  },
  {
    id: 15,
    title: "Half-Life",
    img: img15,
    category: "Шутеры",
    description: "Культовая игра, где игроки борются с инопланетными существами и солдатами в научной лаборатории.",
    price: 499,
    download: "Доступно в Steam. Поддерживаемые платформы: Windows.",
    systemRequirements: {
      OS: "Windows 7/8/10",
      Processor: "Pentium 4 или аналогичный",
      Memory: "512 MB RAM",
      Graphics: "DirectX 7 совместимая видеокарта",
      Storage: "1 GB доступного места"
    }
  },
  {
    id: 16,
    title: "The Sims 4",
    img: img16,
    category: "Шутеры",
    description: "Жизненный симулятор, в котором игроки создают и управляют жизнью виртуальных персонажей.",
    price: 2499,
    download: "Доступно в Origin, Steam. Поддерживаемые платформы: Windows, macOS.",
    systemRequirements: {
      OS: "Windows 7 или более поздняя версия",
      Processor: "Intel Core i3 или аналогичный",
      Memory: "4 GB RAM",
      Graphics: "NVIDIA GeForce 6600 или аналогичная",
      Storage: "15 GB доступного места"
    }
  },
  {
    id: 17,
    title: "Need For Speed Most Wanted",
    img: img17,
    category: "Спортивные",
    description: "Гонка с открытым миром, где игроки соревнуются за звание самого быстрого водителя.",
    price: 999,
    download: "Доступно в Origin, Steam. Поддерживаемые платформы: Windows, PlayStation, Xbox.",
    systemRequirements: {
      OS: "Windows 7 или более поздняя версия",
      Processor: "Intel Core 2 Duo 2.4 GHz или AMD аналогичный",
      Memory: "4 GB RAM",
      Graphics: "NVIDIA GeForce 8800 или AMD Radeon HD 3800",
      Storage: "20 GB доступного места"
    }
  },
  {
    id: 18,
    title: "Alien Shooter 2",
    img: img18,
    category: "Многопользовательские",
    description: "Шутер с элементами ролевой игры, где игроки сражаются с инопланетянами и монстрами в различных локациях.",
    price: 999,
    download: "Доступно в Steam. Поддерживаемые платформы: Windows.",
    systemRequirements: {
      OS: "Windows 7/8/10",
      Processor: "Intel Pentium 4 или аналогичный",
      Memory: "2 GB RAM",
      Graphics: "NVIDIA GeForce 6600 или аналогичная",
      Storage: "1 GB доступного места"
    }
  },
  {
    id: 19,
    title: "DOOM",
    img: img19,
    category: "Шутеры",
    description: "Классический шутер, где игрок сражается с демонами из ада.",
    price: 899,
    download: "Доступно в Steam. Поддерживаемые платформы: Windows.",
    systemRequirements: {
      OS: "Windows 7/8/10",
      Processor: "Intel Core i5 или аналогичный",
      Memory: "4 GB RAM",
      Graphics: "NVIDIA GeForce GTX 660 или аналогичная",
      Storage: "5 GB доступного места"
    }
  },
  {
    id: 20,
    title: "Saints Row",
    img: img20,
    category: "Шутеры",
    description: "Игра в открытом мире с элементами шутера, где игрок становится главой преступной группировки.",
    price: 1999,
    download: "Доступно в Steam, Epic Games Store. Поддерживаемые платформы: Windows, PlayStation, Xbox.",
    systemRequirements: {
      OS: "Windows 10",
      Processor: "Intel Core i5-2500 или AMD аналогичный",
      Memory: "6 GB RAM",
      Graphics: "NVIDIA GeForce GTX 660 или аналогичная",
      Storage: "30 GB доступного места"
    }
  },
  {
    id: 21,
    title: "Hitman",
    img: img21,
    category: "Экшн",
    description: "Шутер-стелс, где игроки управляют профессиональным убийцей, выполняющим задания по устранению целей.",
    price: 1599,
    download: "Доступно в Steam, Epic Games Store. Поддерживаемые платформы: Windows, PlayStation, Xbox.",
    systemRequirements: {
      OS: "Windows 7/8/10",
      Processor: "Intel Core i5-2500K или AMD аналогичный",
      Memory: "8 GB RAM",
      Graphics: "NVIDIA GeForce GTX 660 или аналогичная",
      Storage: "50 GB доступного места"
    }
  },
  {
    id: 22,
    title: "The Forest",
    img: img22,
    category: "Экшн",
    description: "Выживание в открытом мире, где игроки сталкиваются с каннибалами и другими угрозами.",
    price: 1299,
    download: "Доступно в Steam. Поддерживаемые платформы: Windows.",
    systemRequirements: {
      OS: "Windows 7/8/10",
      Processor: "Intel Core i5-2400 или AMD аналогичный",
      Memory: "4 GB RAM",
      Graphics: "NVIDIA GeForce 550 или аналогичная",
      Storage: "5 GB доступного места"
    }
  },
  {
    id: 23,
    title: "Valheim",
    img: img23,
    category: "Ролевые",
    description: "Выживание и исследование в мире викингов, с элементами крафта и строительства.",
    price: 1499,
    download: "Доступно в Steam. Поддерживаемые платформы: Windows.",
    systemRequirements: {
      OS: "Windows 7 или более поздняя версия",
      Processor: "Intel Core i5 или AMD аналогичный",
      Memory: "8 GB RAM",
      Graphics: "NVIDIA GeForce GTX 960 или аналогичная",
      Storage: "1 GB доступного места"
    }
  },
  {
    id: 24,
    title: "Terraria",
    img: img24,
    category: "Экшн",
    description: "2D-песочница с элементами строительства, выживания и исследований.",
    price: 499,
    download: "Доступно в Steam, GOG. Поддерживаемые платформы: Windows, macOS, Linux, мобильные устройства.",
    systemRequirements: {
      OS: "Windows XP или более поздняя версия",
      Processor: "2.0 GHz или аналогичный",
      Memory: "2 GB RAM",
      Graphics: "256 MB видеопамяти",
      Storage: "200 MB доступного места"
    }
  },
  {
    id: 25,
    title: "7 Days To Die",
    img: img25,
    category: "Ролевые",
    description: "Зомби-выживание с элементами ролевой игры и строительства.",
    price: 1199,
    download: "Доступно в Steam. Поддерживаемые платформы: Windows.",
    systemRequirements: {
      OS: "Windows 7 или более поздняя версия",
      Processor: "Intel Core 2 Duo 2.4 GHz или AMD аналогичный",
      Memory: "4 GB RAM",
      Graphics: "NVIDIA GeForce 8800 или AMD Radeon HD 3800",
      Storage: "10 GB доступного места"
    }
  },
  {
    id: 26,
    title: "Elden Ring",
    img: img26,
    category: "Приключения",
    description: "Ролевая игра с элементами экшн, в открытом мире, созданная студией FromSoftware.",
    price: 3599,
    download: "Доступно в Steam, Epic Games Store. Поддерживаемые платформы: Windows, PlayStation, Xbox.",
    systemRequirements: {
      OS: "Windows 10 64-bit",
      Processor: "Intel Core i5-2500K или AMD аналогичный",
      Memory: "12 GB RAM",
      Graphics: "NVIDIA GeForce GTX 1060 или AMD Radeon RX 580",
      Storage: "60 GB доступного места"
    }
  },
];

export default games;
