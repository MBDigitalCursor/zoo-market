import img1 from "../../assets/img/catsDryFood/cat sausas 1.png";
import img2 from "../../assets/img/catsDryFood/cat sausas 2.jpeg";
import img3 from "../../assets/img/catsDryFood/cat sausas 3.png";
import img4 from "../../assets/img/catsDryFood/cat sausas 4.png";
import img5 from "../../assets/img/catsDryFood/cat sausas 5.png";
import img6 from "../../assets/img/catsDryFood/cat sausas 6.png";
import img7 from "../../assets/img/catsDryFood/cat sausas 7.png";
import img8 from "../../assets/img/catsDryFood/cat sausas 8.png";
import img9 from "../../assets/img/catsDryFood/cat sausas 9.png";
import img10 from "../../assets/img/catsDryFood/cat sausas 10.png";

const catsDryFoodArr = [
	{
		img: img1,
		desc: "Affinity Advance Sensitive for Adult Sterilized Cats",
		price: "€7.10/kg",
		fullDesc: {
			analysis: ["Crude protein 36%", "Crude fat 16%", "Crude fiber 1.5%", "Crude ash 6.5%", "Omega-3 0.7%", "Omega-6 1.7%"],
			vitPerKg: ["Vitamin A 27000 IU", "Vitamin D3 1800 IU", "Vitamin E 500 mg", "Vitamin C 70 mg", "Biotin 0.24 mg", "Taurine 1200 mg", "Ferrous sulphate monohydrate 260 mg (Fe: 86 mg)", "Ferrous fumarate 150 mg (Fe: 45 mg)", "Potassium iodide 1.9 mg (I: 1.4 mg)", "Copper sulphate pentahydrate 33 mg (Cu: 8.8 mg)", "Manganous sulphate monohydrate 123 mg (Mn: 40 mg)", "Zinc sulphate monohydrate 407 mg (Zn: 148 mg)", "Sodium selenite 0.2 mg (Se: 0.1 mg)", "Zootechnical additives: Ammonium chloride 4 g"],
			feedingGuide: ["Body Weight (kg) - Dry Food (g)", "2 - 30", "4 - 45", "6 - 60", "8 - 75"],
			desc: {
				firstPart: "Advance Sensitive is a complete and balanced product specifically formulated for sterilized cats with dietary sensitivities which cares for their delicate digestion and specific nutritional needs due to their sterilized condition.",
				secondPart: "",
				thirdPart: "",
				keyBenefits: "Thanks to its salmon-based formula, this product is ideal for sensitive digestion and contributes to intestinal health. It also helps to control your cat's weight after sterilization.",
				ingredients: "Salmon (18%), maize protein, rice (15%), dehydrated salmon protein, wheat, animal fat, stabilised with mixed tocopherols of natural origin, wheat protein, maize, protein hydrolysate, beet pulp, potassium chloride, plasma proteins, natural source of immunoglobulins (0.4%), inulin (0.4%), natural polyphenols (0.01%).",
			},
		},
	},
	{
		img: img2,
		desc: "Hill's Science Plan Feline Adult Optimal Care with Lamb",
		price: "€7.50/kg",
		fullDesc: {
			analysis: ["Protein 33.8%", "Fat 21.3%", "Crude fiber 1%", "Ash 5.8%", "Calcium 0.86%", "Carbohydrate 38.1%", "Phosphorus 0.78%", "Potassium 0.74%", "Sodium 0.39%", "Magnesium 0.064%", "Taurine 0.2%"],
			vitPerKg: ["Vitamin A 6838 IU", "Vitamin C 109 ppm", "Vitamin D 651 IU", "Vitamin E 718 IU", "Beta-Carotene 3.92 ppm"],
			feedingGuide: ["Body Weight (kg) - Dry Food (g)", "2 - 35", "3 - 45", "4 - 60", "5 - 70", "6 - 80", "7+ - 12 per kg"],
			desc: {
				firstPart: "Hill's Science Plan Adult dry cat food is specially formulated to fuel the energy needs of cats during the prime of their life. Made with high quality, easy-to-digest ingredients.",
				secondPart: "Recommended for adult cats 1 - 6 years of age.",
				thirdPart: "Not recommended for kittens and pregnant or nursing cats. ",
				keyBenefits: "Essential taurine for heart health & balanced minerals to support kidneys & bladder. High-quality protein for lean muscles.",
				ingredients: "Brewers' rice, maize gluten meal, chicken and turkey meal, maize, animal fat, lamb meal, minerals, dried beet pulp, fish oil.",
			},
		},
	},
	{
		img: img3,
		desc: "Affinity Libra for Adult Sterilized Cats with Chicken",
		price: "€3.80/kg",
		fullDesc: {
			analysis: ["Crude protein 35%", "Crude fat 11.7%", "Crude fiber 5%", "Crude ash 7.5%", "Omega-6 1.5%", "Sodium 0.7%"],
			vitPerKg: ["Vitamin A 27000 IU", "Vitamin D3 1800 IU", "Vitamin E 95 mg", "Taurine 700 mg", "Iron(II) sulphate monohydrate 237 mg (Fe: 78 mg)", "Potassium iodide 1.7 mg (I: 1.31 mg)", "Copper(II) sulphate pentahydrate 30 mg (Cu: 8 mg)", "Manganous sulphate monohydrate 112 mg (Mn: 36.5 mg)", "Zinc sulphate monohydrate 219 mg (Zn: 80 mg)", "Sodium selenite 0.22 mg (Se: 0.1 mg)"],
			feedingGuide: ["Body Weight (kg) - Dry Food (g)", "2-4 - 30-50", "4-6 - 50-65", "6-8 - 65-80"],
			desc: {
				firstPart: "Delicious complete and balanced pet food with chicken, containing the optimal proportion of protein, essential fatty acids, vitamins, minerals and fibre that provide the nutritional balance your sterilised adult cat simply can't go without.",
				secondPart: "",
				thirdPart: "",
				keyBenefits: "With vitamin D and minerals for strong teeth and bones. Formula rich in fibre for healthy digestion.",
				ingredients: "Cereals (barley 4%), meat and animal derivatives (dehydrated chicken proteins 14%), vegetable protein extracts, derivatives of vegetable origin, oils and fats, minerals.",
			},
		},
	},
	{
		img: img4,
		desc: "Natural Trainer for Sterilised Adult Cats with Dry-cured Ham",
		price: "€6.50/kg",
		fullDesc: {
			analysis: ["Crude protein 35%", "Crude fat 12%", "Crude fiber 3.4%", "Crude ash 6.8%", "Omega-3 0.7%", "Omega-6 2.1%"],
			vitPerKg: ["Vitamin A 27500 IU", "Vitamin D3 1600 IU", "Vitamin E 510 mg", "Vitamin C 100 mg", "Biotin 0.15 mg", "Taurine 2000 mg", "Copper (II) sulphate pentahydrate 19.65 mg (copper 5 mg)", "Iron (II) carbonate 165.6 mg (iron 80 mg)", "Coated granulated calcium iodate anhydrous 0.62 mg (iodine 0.4 mg)", "Sodium selenite 0.22 mg (selenium 0.1 mg)", "Zinc oxide 93 mg (zinc 75 mg)", "Manganese (II) oxide 9.68 mg (manganese 7.5 mg)", "Zootechnical additives: Ammonium chloride 5 g", "Metabolizable energy 3810 kcal/kg"],
			feedingGuide: ["Body Weight (kg) - Dry Food (g)", "2 - 30", "3 - 40", "5 - 55", "6 - 60", "7 - 70", "8 - 75"],
			desc: {
				firstPart: "Complete and balanced pet food for sterilised adult cats, from 1 year of age.",
				secondPart: "",
				thirdPart: "",
				keyBenefits: "Helps to reduce the effects of sterilisation on weight and intestinal functionality. Provides oral care and helps to take care of urinary tract.",
				ingredients: "Fresh chicken, rice, maize, maize protein, dehydrated chicken and turkey proteins, dehydrated 100% italian dry-cured ham proteins 6.5%, maize meal, dehydrated peas 4%, dehydrated pork proteins, dehydrated salmon proteins, dehydrated beef proteins, pea fibre 2.6%, hydrolysed animal proteins, beet pulp 2.4%, fat of animal origin, linseed, minerals, dried chicory root concentrate (source of inulin) 0.7%, brewer's yeast, maize oil, algae, dried cranberry concentrate 0.02%.",
			},
		},
	},
	{
		img: img5,
		desc: "Orijen Tundra Cat All Breeds & Life Stages",
		price: "€50.50 (1.8 kg)",
		fullDesc: {
			analysis: ["Crude protein 40%", "Crude fat 20%", "Crude fiber 3%", "Crude ash 9%", "Moisture 10%", "Calcium 1.9%", "Phosphorus 1.4%", "Magnesium 0.1%", "Taurine 0.1%", "Omega-3 1%", "Omega-6 2.4%"],
			vitPerKg: ["Vitamin E supplement"],
			feedingGuide: ["Body Weight (kg) - Dry Food (g)", "0.9-1.8 - 25-31", "1.8-2.7 - 31-42", "2.7-3.6 - 42-50", "3.6-4.5 - 50-63", "4.5-5.4 - 63-75", "5.4-6.8 - 78-94", "15-20 - 94-109"],
			desc: {
				firstPart: "Help your pet thrive with the power of protein-rich recipes that nourish as nature intended. As obligate carnivores, modern cats are built like their ancestors and thrive on a Biologically Appropriate diet rich in protein and fat sourced from a variety of animal ingredients.",
				secondPart: "Tundra recipe provides your cat with the nourishing protein and nutrients they need from fresh or raw duck, arctic char, rainbow trout, whole pilchard, and ranch-raised venison.",
				thirdPart: "Made with the most nutrient-dense, succulent parts of the prey to deliver the nutrition cats need.",
				keyBenefits: "Helps support digestion with prebiotics such as dried chicory root and fiber from fruits and vegetables. Helps support heart health with naturally-occurring Taurine found in animal proteins like poultry, fish and eggs.",
				ingredients: "85% protein-rich animal sources, 15%+ fruits, vegetables, and nutrients, and no added grain ingredients, soy, corn, wheat or tapioca.",
			},
		},
	},
	{
		img: img6,
		desc: "Royal Canin Fit 32 Regular for Adult Cats",
		price: "€21.00 (2 kg)",
		fullDesc: {
			analysis: ["Protein 32%", "Fat 15%", "Crude fiber 4.6%", "Crude ash 7.2%"],
			vitPerKg: ["Vitamin A 13000 IU", "Vitamin D3 700 IU", "Iron 35 mg", "Iodine 3.5 mg", "Copper 11 mg", "Manganese 45 mg", "Zinc 136 mg", "Selenium 0.09 mg"],
			feedingGuide: ["Body Weight (kg) - Dry Food (g)", "2 - 30", "4 - 45", "6 - 60", "8 - 75"],
			desc: {
				firstPart: "Balanced and complete feed for cats - specially for adult cats over 1 year old - moderate activity, access to the outdoors.",
				secondPart: "Suitable for adult cats between 1-7 years old, it's been specially designed to meet all of your cat's nutritional requirements for supporting and maintaining the healthy situation that your cat is currently in.",
				thirdPart: "",
				keyBenefits: "Formulated with a balance of beneficial nutrients - such as a variety of vitamins and minerals - to help in maintaining a healthy urinary system for adult cats. Significantly reduces occurrence of hairballs.",
				ingredients: "Dehydrated poultry protein, rice, wheat, maize, animal fats, dehydrated pork protein, vegetable fibres, wheat flour, hydrolysed animal proteins, maize gluten, yeasts and parts thereof, beet pulp, soya oil, fish oil, minerals, psyllium husks and seeds, hydrolysed yeast (source of mannan-oligosaccharides), marigold extract (source of lutein).",
			},
		},
	},
	{
		img: img7,
		desc: "Josera SensiCat Adult",
		price: "€5.80/kg",
		fullDesc: {
			analysis: ["Protein 33%", "Fat 18%", "Crude fiber 2%", "Crude ash 6.7%", "Calcium 1.3%", "Phosphorus 1%", "Magnesium 0.6%"],
			vitPerKg: [""],
			feedingGuide: ["Body Weight (kg) - Dry Food (g)", "2-3 - 25-40", "3-4 - 40-55", "4-5 - 55-70", "5-7 - 70-95", "7-10 - 95-120"],
			desc: {
				firstPart: "The selected, easily digestible raw materials in Josera SensiCat guarantee the best possible tolerability and are therefore especially suitable for nutritionally sensitive cats.",
				secondPart: "",
				thirdPart: "",
				keyBenefits: "Ideal for adult cats and cats with a sensitive digestive system. Formula with high acceptance and easy digestible ingredients. Dietary fibre reduces hairball formation. Encourages a pH value of 6.0-6.5 to reduce the risk of urinary stone formation.",
				ingredients: "Dried poultry protein, whole grain corn, rice, greaves, poultry fat, beet fiber, hydrolysed animal protein; minerals, hydrolysed poultry liver, herbs, fruits.",
			},
		},
	},
	{
		img: img8,
		desc: "Affinity Advance Veterinary Diets Weight Balance Feline Adult",
		price: "€18.90 (1.5 kg)",
		fullDesc: {
			analysis: ["Crude protein 40%", "Crude fat 9%", "Crude fiber 10%", "Crude ash 7%", "Essential fatty acids 2%"],
			vitPerKg: ["Vitamin A 30000 IU", "Vitamin D3 2000 IU", "Vitamin E 660 mg", "L-Carnitine 500 mg", "Ferrous sulphate monohydrate 358 mg (Fe: 118 mg)", "Ferrous fumarate 144 mg (Fe: 47 mg)", "Potassium iodide 2.6 mg (I: 2 mg)", "Copper sulphate pentahydrate 45 mg (Cu: 12 mg)", "Manganese sulphate monohydrate 169 mg (Mn: 55 mg)", "Zinc sulphate monohydrate 407 mg (Zn: 148 mg)", "Sodium selenite 0.33 mg (Se: 0.15 mg)"],
			feedingGuide: ["Body Weight (kg) - Dry Food (g)", "2 - 45", "3 - 55", "4 - 60", "5 - 65", "6 - 70", "7 - 75", "8 - 80", "9 - 85", "10 - 90"],
			desc: {
				firstPart: "Complete dietetic product for adult cats, formulated to reduce excess weight and regulate lipid metabolism in cases of hyperlipidaemia. It is low in energy, low in fat, and high in essential fatty acids.",
				secondPart: "",
				thirdPart: "",
				keyBenefits: "40% protein content contributes to the maintenance of muscle mass. With L-Carnitine that helps to burn fat. Helps to maintain target body weigth after weight loss.",
				ingredients: "Maize protein, dehydrated poultry protein, maize, vegetable fiber, wheat, wheat protein, potato protein, barley, dehydrated pork proteins, pea fiber, hydrolysed animal proteins, animal fat, stabilised with mixed tocopherols of natural origin, beet pulp, potassium chloride, salt, calcium carbonate, fish oil, flaxseed, olive oil, natural polyphenols.",
			},
		},
	},
	{
		img: img9,
		desc: "Platinum Adult MeatCrisp Chicken",
		price: "€12.70/kg",
		fullDesc: {
			analysis: ["Crude protein 35%", "Crude fat 17%", "Crude fiber 3%", "Crude ash 6.9%", "Calcium 1.1%", "Phosphorus 1%"],
			vitPerKg: ["Vitamin A 35000 IU", "Vitamin D3 1500 IU", "Vitamin E 200 mg", "Iron 40 mg", "Iodine 1.5 mg", "Copper 10 mg", "Manganese 3b505 10 mg", "Manganese 3b502 20 mg", "Zinc 3b603 80 mg", "Zinc 3b612 40 mg", "Selenium 3b810 0.05 mg", "Selenium 3b802 0.1 mg", "Taurine 1500 mg"],
			feedingGuide: ["Body Weight (kg) - Dry Food (g)", "2 - 41", "3 - 54", "4 - 65", "5 - 76", "6 - 86", "7 - 95", "8 - 104"],
			desc: {
				firstPart: "MeatCrisp is the first wholesome cat food which contains fresh meat's natural micronutrients and amino acids, making MeatCrisp a better substitute for a cat's natural prey than most commercial cat foods. If you feed your cat MeatCrisp, it will feel more stable and relaxed and thus happier. The crispy bite and meaty taste of MeatCrisp make it so delicious that your cat won't want to eat anything else. MeatCrisp does not contain any attractants.",
				secondPart: "",
				thirdPart: "",
				keyBenefits: "83 % fresh meat (no meat meal or animal meal), natural ingredients, without attractants, without cereals containing gluten, nutritious and easy to digest, taurine optimised.",
				ingredients: "Fresh chicken meat 83 %, Flor de Maíz (finest corn flour), fresh salmon, mix of dried potatoes, dried peas and rice, dried brewer's yeast, dried vegetable fiber, dried egg, salt, salmon oil, dried chicory root.",
			},
		},
	},
	{
		img: img10,
		desc: "AATU Free Run Duck for Cats",
		price: "€44.00 (3 kg)",
		fullDesc: {
			analysis: ["Crude protein 34%", "Fat 20%", "Crude fiber 2.5%", "Ash 8.9%", "Moisture 8%", "Omega-3 0.7%", "Omega-6 2.9%"],
			vitPerKg: ["Vitamin A 25000 IU", "Vitamin D3 1700 IU", "Vitamin E 330 mg", "Taurine 1500 mg", "L-Carnitine 200 mg", "Ferrous sulphate monohydrate 600 mg", "Zinc sulphate monohydrate 310 mg", "Manganese sulphate monohydrate 70 mg", "Cupric sulphate pentahydrate 45 mg", "Calcium iodate anhydrous 3.64 mg", "Sodium selenite 0.41 mg"],
			feedingGuide: ["Body Weight (kg) - Dry Food (g)", "2 - 35", "3 - 45", "4 - 50", "5 - 60", "6 - 65", "7+ - 75"],
			desc: {
				firstPart: "Handcrafted in small batch recipes, naturally made without artificial colours, without artificial preservatives, without artificial flavours and without GM ingredients. The fresh and raw protein is pre-cooked using our low & slow method to ensure efficient digestion of the meats.",
				secondPart: "",
				thirdPart: "",
				keyBenefits: "Provide nutrients vital for health and maintenance. Made without artificial colours, artificial preservatives, artificial flavours and GM ingredients. Grain, white potato & gluten free to minimize allergic reactions. Contains Enterococcus Faecium which is an aid in the establishment, maintenance and restoration of a balanced intestinal microbiota in cats.",
				ingredients: "85% duck: (45% duck, 40% dehydrated duck), sweet potato, chickpeas, peas, lucerne, tapioca, apple, cranberry, pear, blueberry, mulberry, orange, bilberry, cowberry, carrot, tomato, chicory, peppermint, parsley, cinnamon, marigold, stinging nettle, camomile, rosehip, yucca, spirulina, seaweed, aniseed, fenugreek, oregano, sage, marjoram, thyme.",
			},
		},
	},
];

export default catsDryFoodArr;
