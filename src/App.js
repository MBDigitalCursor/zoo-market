import React from "react";
import "./styles/App.css";
import "./styles/variables.css";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import PopularItems from "./components/PopularItems/PopularItems";
import Catalog from "./components/Catalog/Catalog";
import Contacts from "./components/Contacts/Contacts";

function App() {
	return (
		<div>
			<div className="container">
				<Nav />
			</div>
			<Hero />
			<div className="container">
				<PopularItems />
				<Catalog />
				<Contacts />
			</div>
		</div>
	);
}

export default App;
