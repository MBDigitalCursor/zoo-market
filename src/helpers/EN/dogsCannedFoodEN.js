import img1 from "../../assets/img/dogsCannedFood/dog konservai 1.png";
import img2 from "../../assets/img/dogsCannedFood/dog konservai 2.jpeg";
import img3 from "../../assets/img/dogsCannedFood/dog konservai 3.png";
import img4 from "../../assets/img/dogsCannedFood/dog konservai 4.png";
import img5 from "../../assets/img/dogsCannedFood/dog konservai 5.png";
import img6 from "../../assets/img/dogsCannedFood/dog konservai 6.png";
import img7 from "../../assets/img/dogsCannedFood/dog konservai 7.png";
import img8 from "../../assets/img/dogsCannedFood/dog konservai 8.png";
import img9 from "../../assets/img/dogsCannedFood/dog konservai 9.png";
import img10 from "../../assets/img/dogsCannedFood/dog konservai 10.png";

const dogsCannedFoodArr = [
	{
		img: img1,
		desc: "Calibra Dog Life Sensitive Rabbit 400 g",
		price: "€3.10",
		fullDesc: {
			analysis: ["Crude protein 8.5%", "Crude fat 3%", "Crude fiber 1%", "Crude ash 2.5% ", "Omega-3 0.15%", "Omega-6 1%", "Moisture 78%", "Calcium 0.3%", "Phosphorus 0.25%", "Sodium 0.3%"],
			vitPerKg: ["Vitamin A (3a672a) 800 IU", "Vitamin B1 (3a821) 1 mg", "Vitamin D3 (3a671) 200 IU", "Vitamin E (3a700) 120 mg", "Biotin (3a880) 0.4 mg", "Zinc (3b606) 10 mg", "Manganese (3b504) 2.4 mg", "Iodine (3b201) 0.6 mg", "Copper (3b406) 3.2 mg", "Iron (3b106) 8 mg"],
			feedingGuide: ["Body Weight (kg) - Food (g)", "5 - 305", "10 - 515", "15 - 700", "20 - 870", "25 - 1025", "30 - 1175", "40 - 1460", "50 - 1730", "60 - 1980", "70 - 2225", "80 - 2460"],
			desc: {
				firstPart: "Calibra Dog Life Sensitive Rabbit - This canned food recipe with rabbit is a complete food designed for adult dogs, and is also suitable for sensitive digestion.",
				secondPart: "The hypoallergenic recipe, based on a single protein, is formulated with a limited number of ingredients.",
				thirdPart: "The recipe composition is grain- and gluten-free, which has an effect on its excellent digestibility. It contains only 100% defined ingredients of the highest quality.",
				keyBenefits: "The recipe contains salmon oil, a source of Omega-3 unsaturated fatty acids (EPA, DHA), necessary for brain development and function, and to support the physiological functions of the skin and coat and the quality thereof. Omega-3 also has anti-inflammatory properties. Schizochytrium limacinum (dried seaweed) - a source of the Omega-3 fatty acid DHA, which supports normal brain function.",
				ingredients: "Rabbit (70 %), pea flour, lignocellulose, salmon oil (1 %), calcium carbonate, dried algae (0.2 %, Schizochytrium limacinum).",
			},
		},
	},
	{
		img: img2,
		desc: "Advance Veterinary Diets Gastroenteric Wet Pouch 150 g",
		price: "$3.00",
		fullDesc: {
			analysis: ["Crude protein 8%", "Crude fat 2.5%", "Crude fiber 0.3%", "Crude ash 2.3%", "Moisture 79%", "Sodium 0.1%", "Potassium 0.2%"],
			vitPerKg: ["Vitamin D3 200 IU", "Vitamin E 20 mg", "Iodine 0.75 mg", "Copper 1.75 mg", "Manganese 1.4 mg", "Zinc 25 mg"],
			feedingGuide: ["Body Weight (kg) - Pouches (per day)", "2-5 - 1.5-2.5", "6-10 - 3-4.5", "11-15 - 4.5-6", "16-20 - 6-7", "21-30 - 7.5-9.5", "31-40 - 10-12", "41-50 - 12.5-14.5"],
			desc: {
				firstPart: "Complete and balanced dietetic product for puppies over 14 weeks old and adult dogs, prepared with easily digestible ingredients, a low fibre content, and increased sodium and potassium content to help relieve certain gastrointestinal problems and aid with cases of exocrine pancreatic insufficiency.",
				secondPart: "Its easy-to-digest formula facilitates the absorption of essential nutrients.",
				thirdPart: "Veterinary diets canine gastroenteric is a clinically tested food with proven results.",
				keyBenefits: "Soursce of chicken protein to help digestion. Flavourful food to improve appetite. Easily digestible rice contributes to generating a smaller volume of faeces. Prebiotics (FOS & MOS) promote the development of healthy intestinal flora.",
				ingredients: "Meat and animal derivatives (chicken 43%), cereals (rice 8%), minerals, oils and fats, derivatives of vegetable origin (fructo-oligosaccharides 0.1%), mannan-oligosaccharides 0.1%.",
			},
		},
	},
	{
		img: img3,
		desc: "Nature's Variety Adult Madium/Maxi Beef Original Paté 300 g",
		price: "€3.70",
		fullDesc: {
			analysis: ["Crude protein 10.8%", "Crude fat 8.5%", "Crude fiber 0.5%", "Crude ash 2.3%", "Moisture 75%"],
			vitPerKg: ["Vitamin D3 200 IU", "Vitamin E 30 mg", "Calcium iodate anhydrous 2.3 mg (I: 0.75 mg)", "Manganous sulphate monohydrate 4.31 mg (Mn: 1.4 mg)", "Zinc sulphate monohydrate 68.6 mg (Zn: 25 mg)"],
			feedingGuide: ["Body Weight (kg) - Pouches (per day)", "10 - 1.5", "20 - 2.5", "30 - 3.5", "40 - 4", "55 - 5.5"],
			desc: {
				firstPart: "Complete and balanced pet food for adult dogs, no grain. With high-quality beef as the main ingredient, paired with fruits and vegetables. Steam cooked in its own juices and at optimal temperature for better nutrient conservation.",
				secondPart: "",
				thirdPart: "",
				keyBenefits: "Complete & balanced, high quality protein, no artificial colours, flavours or preservatives, made with natural ingredients, steam cooked, trusted suppliers.",
				ingredients: "Beef (66%), beef broth (28.9%), spinach (2%), pumpkin (2%), minerals, salmon oil.",
			},
		},
	},
	{
		img: img4,
		desc: "Healthy Meat Pate With Buffalo Meat And Potatoes 400 g",
		price: "€2.80",
		fullDesc: {
			analysis: ["Crude protein 11%", "Crude fat 3%", "Crude fiber 0.5%", "Crude ash 1.5%", "Moisture 82%"],
			vitPerKg: ["Vitamin A 2670 IU", "Vitamin D3 290 IU", "Zinc 15.62 mg", "Iron 6.5 mg", "Copper 1.64 mg", "Iodite 0.37 mg", "Manganese 1.12 mg", "Selenium 0.08 mg"],
			feedingGuide: ["Recommended daily rate is indicated on the package."],
			desc: {
				firstPart: "Complete dietary feed for adult dogs with only one ingredient of animal origin. Selected source of protein (buffalo meat) and carbohydrates (potatoes).",
				secondPart: "",
				thirdPart: "",
				keyBenefits: "Formulated to reduce intolerance to ingredients and nutrients, but recommended as a traditional feed.",
				ingredients: "Buffalo meat 95%, potatoes 4%, sunflower oil.",
			},
		},
	},
	{
		img: img5,
		desc: "Petkult Miel Grain Free Adult Wet Dog Food With Lamb 400 g",
		price: "$2.40",
		fullDesc: {
			analysis: ["Protein 10%", "Fat 8%", "Fiber 0.6%", "Ash 2.5%", "Moisture 78%", "Calcium 0.3%", "Phosphorus 0.25%"],
			vitPerKg: ["Vitamin D3 200 IU", "Vitamin E 20 mg", "Vitamin B1", "Vitamin B2", "Vitamin B6", "Vitamin B5", "Vitamin B9", "Vitamin B12", "Omega-3", "Biotin", "Zinc (zinc oxide) 13 mg"],
			feedingGuide: ["Body Weight (kg) - Cans (per day)", "10 - 1", "20 - 2", "40 - 4"],
			desc: {
				firstPart: "Natural, super premium without ingredients that cause allergies, intolerances or health changes: dyes, preservatives, synthetic additives, artificial flavors, soy, genetically modified organisms.",
				secondPart: "",
				thirdPart: "",
				keyBenefits: "Hypoallergenic lamb meat with a low allergenic potential, ideal for sensitive dogs.Supports the health of the nervous system of the heart and the correct functioning of the metabolism.",
				ingredients: "67% lamb meat and organs (min 5% lamb), cooking water (max 30%), linseed oil, minerals.",
			},
		},
	},
	{
		img: img6,
		desc: "Barking Heads Puppy Days Wet Puppy Food 300 g",
		price: "$3.50",
		fullDesc: {
			analysis: ["Crude protein 11%", "Crude fat 7%", "Crude fiber 0.8%", "Crude ash 2.5%", "Moisture 76%"],
			vitPerKg: [""],
			feedingGuide: ["Body Weight (kg) - Pouches (per day)", "5 - 1.5", "10 - 2", "20 - 3", "30+ - 4+"],
			desc: {
				firstPart: "Barking Heads Puppy Days Wet Puppy Food has been specially formulated for all your growing puppy's needs.",
				secondPart: "This delicious grain-free recipe with added vitamins & minerals has been slow cooked to paw-fection, using only the best quality, natural ingredients. Packed with protein (85% free-run chicken!), this super yummy complete puppy food has been blended with vegetables and herbs for your newest family member.",
				thirdPart: "",
				keyBenefits: "Contains 85% free-run chicken, free from artificial colours, flavours & preservatives. Grain-free Recipe. Slow cooked with added vitamins & minerals.",
				ingredients: "85% chicken includes - fresh deboned chicken (60%), chicken broth (25%), sweet potato, carrot, courgette, peas, aalmon oil, sunflower oil, lucerne, seaweed, parsley, celery, chicory root, nettle, turmeric, aniseed and minerals.",
			},
		},
	},
	{
		img: img7,
		desc: "Carnilove Lamb & Wild Boar Pate For Adult Dogs 400 g",
		price: "$3.00",
		fullDesc: {
			analysis: ["Crude protein 9.5%", "Crude fat 6.5%", "Crude fiber 0.4%", "Crude ash 2.5%", "Moisture 78%", "Calcium 0.2%", "Phosphorus 0.25%", "Sodium 0.3%"],
			vitPerKg: ["Vtamin D3 (3a671) 250 IU", "Vitamin E (3a700) 150 mg", "Biotin (3a880) 0.5 mg", "Copper (3b406) 4 mg", "Iron (3b106) 10 mg", "Iodine (3b201) 0.75 mg", "Manganese (3b504) 3 mg", "Zinc (3b606) 15 mg", "Taurine (3a370) 1000 mg"],
			feedingGuide: ["Body Weight (kg) - Food (g)", "1-25 - 200-800", ">25 - 800-2200"],
			desc: {
				firstPart: "Lamb and wild boar are the perfect combination of quality, highly digestible, usable proteins rich in natural nutrients. Lamb is an excellent source of trace elements such as selenium, iron, zinc, B vitamins, and unsaturated fats, while wild boar is packed with proteins yet contains little fat.",
				secondPart: "",
				thirdPart: "",
				keyBenefits: "Ideal for maintaining optimum physical condition without the risk of increased blood cholesterol levels.",
				ingredients: "Lamb (35%), wild boar (32%), blueberries (2%), cranberries (2%), raspberries (2%), pea flour (2%), lignocellulose (1%), salmon oil (0.5%)",
			},
		},
	},
	{
		img: img8,
		desc: "Monge BWild Grain Free Salmon Wet Food For Adults 400 g",
		price: "$2.10",
		fullDesc: {
			analysis: ["Crude protein 8.6%", "Crude fat 6.2%", "Crude fiber 0.7%", "Crude ash 2.6%", "Moisture 79%"],
			vitPerKg: ["Vitamin D3 434 IU", "Vitamin E (all-rac-alpha-tocopheryl-acetate) 15.5 mg", "Selenium (sodium selenite 0.05 mg) 0.02 mg", "Manganese (manganous sulphate monohydrate 11 mg) 3.5 mg", "Zinc (zinc oxide 20 mg) 16 mg", "Copper (copper (II) sulphate pentahydrate 5.5 mg) 1.4 mg", "Iron  (iron (II) sulphate monohydrate 35 mg) 11.5 mg", "Iodine (calcium iodate anhydrous 0.3 mg) 0.19 mg"],
			feedingGuide: ["Body Weight (kg) - Food (g)", "12 - 160", "14 - 181", "16 - 202", "18 - 222", "20 - 241", "25 - 296", "30 - 340", "40 - 421", "50 - 498", "60 - 571", "70 - 641"],
			desc: {
				firstPart: "Bwild Grain Free Salmon is a grain-free formula, tasty pieces of salmon meat in a sauce for adult dogs of all breeds.",
				secondPart: "Specially  developed  for  the  wellness  of  dogs  of  every  size,  trough a selection of alternative non-cereal derivative carbohydrate sources such as zucchini and pumpkin. ",
				thirdPart: "",
				keyBenefits: "The recipe is enhanced with xylo-oligosaccharides  (XOS),  next  generation  prebiotics  to  support  intestinal  wellness.  The  formulation supports articulations, due to the inclusion of glucosamine and chondroitin sulphate. It is recommended for dogs of every size.",
				ingredients: "Fresh salmon (26%), pork liver, chicken meat, salmon oil, yeast products, dried pumpkin 2% (equal to 8.6% of fresh pumpkin), dried zucchini 2% (equal to 8.6% of fresh zucchini), minerals, potatoes, fresh blueberries, fresh cranberries, fresh raspberries, xylo-oligosaccharide (XOS 0.1%), yucca schidigera, spirulina (0.1%),  glucosamine  (0.019%),  chondroitin  sulphate  (0.01%  mg/kg).",
			},
		},
	},
	{
		img: img9,
		desc: "Royal Canin Pussy Juice Extra Wet, 1 kg",
		price: "$14.99",
		fullDesc: {
			analysis: ["Protein 21.2%"],
			vitPerKg: [""],
			feedingGuide: [""],
			desc: {
				firstPart: "",
				secondPart: "",
				thirdPart: "",
				keyBenefits: "",
				ingredients: "",
			},
		},
	},
	{
		img: img10,
		desc: "Royal Canin Pussy Juice Extra Wet, 1 kg",
		price: "$14.99",
		fullDesc: {
			analysis: ["Protein 21.2%"],
			vitPerKg: [""],
			feedingGuide: [""],
			desc: {
				firstPart: "",
				secondPart: "",
				thirdPart: "",
				keyBenefits: "",
				ingredients: "",
			},
		},
	},
];

export default dogsCannedFoodArr;
