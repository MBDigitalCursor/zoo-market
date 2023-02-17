import React from "react";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import { MdOutlineKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { scrollToSection } from "../../helpers/scrollToSection";
import { useDispatch } from "react-redux";
import { setBurgerMenu } from "../../store/generalStore";

export default function TreeViewComp() {
	const dispatch = useDispatch();

	return (
		<TreeView
			aria-label='multi-select'
			defaultCollapseIcon={<MdKeyboardArrowDown />}
			defaultExpandIcon={<MdOutlineKeyboardArrowRight />}
			multiSelect
			sx={{
				flexGrow: 1,
				maxWidth: 500,
				height: "max-content",
				"& .MuiTreeItem-label": {
					padding: "14px 0",
					fontSize: "1rem",
					fontWeight: "400",
					marginLeft: "-5px",
				},
				"& .MuiTreeItem-iconContainer": {
					marginLeft: "-5px",
					marginRight: "5px",
				},
			}}
		>
			<TreeItem
				nodeId='1'
				label='Produktai'
			>
				<TreeItem
					nodeId='2'
					label='Šunims'
				>
					<TreeItem
						nodeId='3'
						label='Sausas ėdalas'
						onClick={() => {
							dispatch(setBurgerMenu(false));
							scrollToSection("dogsDryFood");
						}}
					/>
					<TreeItem
						nodeId='4'
						label='Konservai'
						onClick={() => {
							scrollToSection("dogsCannedFood");
							dispatch(setBurgerMenu(false));
						}}
					/>
				</TreeItem>
				<TreeItem
					nodeId='5'
					label='Katėms'
				>
					<TreeItem
						nodeId='6'
						label='Sausas ėdalas'
						onClick={() => {
							scrollToSection("catsDryFood");
							dispatch(setBurgerMenu(false));
						}}
					/>
					<TreeItem
						nodeId='7'
						label='Konservai'
						onClick={() => {
							scrollToSection("catsCannedFood");
							dispatch(setBurgerMenu(false));
						}}
					/>
				</TreeItem>
				<TreeItem
					nodeId='8'
					label='Paukščiams'
				>
					<TreeItem
						nodeId='9'
						label='Teirautis krautuvėlėje'
						onClick={() => {
							scrollToSection("contacts");
							dispatch(setBurgerMenu(false));
						}}
					/>
				</TreeItem>
				<TreeItem
					nodeId='10'
					label='Graužikams'
				>
					<TreeItem
						nodeId='11'
						label='Teirautis krautuvėlėje'
						onClick={() => {
							scrollToSection("contacts");
							dispatch(setBurgerMenu(false));
						}}
					/>
				</TreeItem>
				<TreeItem
					nodeId='12'
					label='Žuvims'
				>
					<TreeItem
						nodeId='13'
						label='Teirautis krautuvėlėje'
						onClick={() => {
							scrollToSection("contacts");
							dispatch(setBurgerMenu(false));
						}}
					/>
				</TreeItem>
			</TreeItem>
		</TreeView>
	);
}
