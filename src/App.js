import React from "react";
import "./styles/App.css";
import "./styles/variables.css";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import PopularItems from "./components/PopularItems/PopularItems";
import Catalog from "./components/Catalog/Catalog";
import Contacts from "./components/Contacts/Contacts";
import MobileProducts from "./components/Catalog/MobileProducts/MobileProducts";

function App() {
	return (
		<div>
			<Nav />
			<Hero />
			<MobileProducts></MobileProducts>
			<div className='container'>
				<PopularItems />
			</div>
			<Catalog />
			<div className='container'>
				<Contacts />
			</div>
		</div>
	);
}

export default App;
