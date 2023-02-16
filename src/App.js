import React from "react";
import "./styles/App.css";
import "./styles/variables.css";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import PopularItems from "./components/PopularItems/PopularItems";
import Catalog from "./components/Catalog/Catalog";
import Contacts from "./components/Contacts/Contacts";
import MobileProducts from "./components/Catalog/MobileProducts/MobileProducts";
import HeroPaws from "./components/Hero/HeroPaws/HeroPaws";

function App() {
	return (
		<>
			<Nav />
			<div className="App">
				<Hero />
				<HeroPaws />
				<PopularItems />
				<MobileProducts />
				<Catalog />
				<Contacts />
			</div>
		</>
	);
}

export default App;
