import React from "react";
import "./styles/App.css";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import PopularItems from "./components/PopularItems/PopularItems";
import Catalog from "./components/Catalog/Catalog";
import Contacts from "./components/Contacts/Contacts";

function App() {
	return (
		<div className="container">
			<Nav />
			<Hero />
			<PopularItems />
			<Catalog />
			<Contacts />
		</div>
	);
}

export default App;
