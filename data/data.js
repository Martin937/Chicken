const data = [
	{
		title: "Куры",
		description: "Описание кур",
		products: [
			{
				breed: "Курочка брама",
				image: "../assets/img/Rooster.jpg",
				advantages: "Высокая яйценоскость, хороший аппетит",
				oldPrice: 140.99,
				discount: 0.9,
				currentPrice: 0,
				shortDescription: "Известная мясная порода",
				detailedDescription: [
					"Отличается быстрым набором веса",
					"Имеет хороший характер и выносливость",
					"Подходит для выращивания в разных климатических условиях",
				],
			},
			{
				breed: "Курочка род айленд ред",
				image: "../assets/img/Rooster.jpg",
				advantages: "Высокая яйценоскость, спокойный характер",
				discount: 0.9,
				currentPrice: 0,
				oldPrice: "160.99",
				shortDescription: "Популярная мясная и яичная порода",
				detailedDescription: [
					"Известна своей устойчивостью к болезням",
					"Хорошо приживается в различных условиях содержания",
					"Порода предпочтительна для начинающих птицеводов",
				],
			},
			// Добавьте еще кур
		],
	},
	{
		title: "Утки",
		description: "Описание уток",
		discount: 1,
		products: [
			{
				breed: "Утка мулард",
				image: "../assets/img/Duckings_1.jpg",
				advantages: "Отличное мясо, быстрый рост",
				discount: 0.9,
				currentPrice: 0,
				oldPrice: "190.99",
				shortDescription: "Кросс утки для мяса",
				detailedDescription: [
					"Получает хороший вес за короткий срок",
					"Мясо утки мулард очень вкусное и нежное",
					"Подходит для коммерческого выращивания",
				],
			},
			{
				breed: "Утка пекинская",
				image: "../assets/img/Duckings_1.jpg",
				advantages: "Отличные яйца, красивый внешний вид",
				discount: 0.9,
				currentPrice: 0,
				oldPrice: "220.99",
				shortDescription: "Декоративная порода с хорошей продуктивностью",
				detailedDescription: [
					"Известна своими яйцами и мясом",
					"Приятного вида и хорошо приживается",
					"Дружелюбная и спокойная порода",
				],
			},
			// Добавьте еще уток
		],
	},
	{
		title: "Гуси",
		description: "Описание гусей",
		discount: 1,
		products: [
			{
				breed: "Гусь толстый",
				image: "../assets/img/Chickens_1.webp",
				advantages: "Качественное мясо, высокая выносливость",
				discount: 0.9,
				currentPrice: 0,
				oldPrice: "240.99",
				shortDescription: "Мясная порода гусей",
				detailedDescription: [
					"Хорошо приспосабливаются к различным условиям содержания",
					"Мясо гуся толстого более диетическое, чем у других пород",
					"Широко используется в ресторанном бизнесе",
				],
			},
			{
				breed: "Гусь геркулес",
				image: "../assets/img/Chicken.jpg",
				advantages: "Качественное мясо, высокая яйценоскость",
				discount: 0.9,
				currentPrice: 0,
				oldPrice: "260.99",
				shortDescription: "Универсальная порода гусей",
				detailedDescription: [
					"Хороший прирост массы",
					"Мясо гуся геркулеса отличается особой сочностью и вкусом",
					"Порода адаптирована к различным климатическим условиям",
				],
			},
			// Добавьте еще гусей
		],
	},
];

export default data;
