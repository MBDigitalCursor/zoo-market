import React from "react";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import { MdOutlineKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { scrollToSection } from "../../helpers/scrollToSection";
import { useDispatch, useSelector } from "react-redux";
import { setBurgerMenu } from "../../store/generalStore";

export default function TreeViewComp() {
	const dispatch = useDispatch();

	const { pageLanguage } = useSelector((state) => state.generalSlice);

	return (
		<TreeView
			aria-label="multi-select"
			defaultCollapseIcon={<MdKeyboardArrowDown />}
			defaultExpandIcon={<MdOutlineKeyboardArrowRight />}
			multiSelect
			sx={{
				flexGrow: 1,
				maxWidth: 500,
				height: "max-content",
				"& .MuiTreeItem-label": {
					padding: "14px 0",
					fontWeight: "400",
					marginLeft: "-5px",
					fontFamily: "Red Hat Display !important",
					fontSize: "16px !important",
				},
				"& .MuiTreeItem-content.Mui-selected:hover": {
					backgroundColor: "hsl(0,0%,0%, 0.5)",
				},
				"& .MuiTreeItem-iconContainer": {
					marginLeft: "-5px",
					marginRight: "5px",
				},
				"& .Mui-expanded.Mui-selected:hover": {
					backgroundColor: "hsl(0,0%,0%, 0.5)",
				},
				"& .MuiTreeItem-content.Mui-selected": {
					backgroundColor: "hsl(0,0%,0%, 0.5)",
				},
			}}
		>
			{pageLanguage === "LT" ? (
				<TreeItem
					nodeId="1"
					label="Produktai"
				>
					<TreeItem
						nodeId="2"
						label="Šunims"
					>
						<TreeItem
							nodeId="3"
							label="Sausas ėdalas"
							onClick={() => {
								dispatch(setBurgerMenu(false));
								scrollToSection("dogsDryFood");
							}}
						/>
						<TreeItem
							nodeId="4"
							label="Konservai"
							onClick={() => {
								scrollToSection("dogsCannedFood");
								dispatch(setBurgerMenu(false));
							}}
						/>
					</TreeItem>
					<TreeItem
						nodeId="5"
						label="Katėms"
					>
						<TreeItem
							nodeId="6"
							label="Sausas ėdalas"
							onClick={() => {
								scrollToSection("catsDryFood");
								dispatch(setBurgerMenu(false));
							}}
						/>
						<TreeItem
							nodeId="7"
							label="Konservai"
							onClick={() => {
								scrollToSection("catsCannedFood");
								dispatch(setBurgerMenu(false));
							}}
						/>
					</TreeItem>
					<TreeItem
						nodeId="8"
						label="Paukščiams"
					>
						<TreeItem
							nodeId="9"
							label="Teirautis krautuvėlėje"
							onClick={() => {
								scrollToSection("contacts");
								dispatch(setBurgerMenu(false));
							}}
						/>
					</TreeItem>
					<TreeItem
						nodeId="10"
						label="Graužikams"
					>
						<TreeItem
							nodeId="11"
							label="Teirautis krautuvėlėje"
							onClick={() => {
								scrollToSection("contacts");
								dispatch(setBurgerMenu(false));
							}}
						/>
					</TreeItem>
					<TreeItem
						nodeId="12"
						label="Žuvims"
					>
						<TreeItem
							nodeId="13"
							label="Teirautis krautuvėlėje"
							onClick={() => {
								scrollToSection("contacts");
								dispatch(setBurgerMenu(false));
							}}
						/>
					</TreeItem>
				</TreeItem>
			) : (
				<TreeItem
					nodeId="1"
					label="Products"
				>
					<TreeItem
						nodeId="2"
						label="Dogs"
					>
						<TreeItem
							nodeId="3"
							label="Dry food"
							onClick={() => {
								dispatch(setBurgerMenu(false));
								scrollToSection("dogsDryFood");
							}}
						/>
						<TreeItem
							nodeId="4"
							label="Canned food"
							onClick={() => {
								scrollToSection("dogsCannedFood");
								dispatch(setBurgerMenu(false));
							}}
						/>
					</TreeItem>
					<TreeItem
						nodeId="5"
						label="Cats"
					>
						<TreeItem
							nodeId="6"
							label="Dry food"
							onClick={() => {
								scrollToSection("catsDryFood");
								dispatch(setBurgerMenu(false));
							}}
						/>
						<TreeItem
							nodeId="7"
							label="Canned food"
							onClick={() => {
								scrollToSection("catsCannedFood");
								dispatch(setBurgerMenu(false));
							}}
						/>
					</TreeItem>
					<TreeItem
						nodeId="8"
						label="Birds"
					>
						<TreeItem
							nodeId="9"
							label="Ask at the store"
							onClick={() => {
								scrollToSection("contacts");
								dispatch(setBurgerMenu(false));
							}}
						/>
					</TreeItem>
					<TreeItem
						nodeId="10"
						label="Hamsters"
					>
						<TreeItem
							nodeId="11"
							label="Ask at the store"
							onClick={() => {
								scrollToSection("contacts");
								dispatch(setBurgerMenu(false));
							}}
						/>
					</TreeItem>
					<TreeItem
						nodeId="12"
						label="Fish"
					>
						<TreeItem
							nodeId="13"
							label="Ask at the store"
							onClick={() => {
								scrollToSection("contacts");
								dispatch(setBurgerMenu(false));
							}}
						/>
					</TreeItem>
				</TreeItem>
			)}
		</TreeView>
	);
}
