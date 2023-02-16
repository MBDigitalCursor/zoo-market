import React from "react";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import { MdOutlineKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

export default function TreeViewComp() {
	return (
		<TreeView
			aria-label='multi-select'
			defaultCollapseIcon={<MdOutlineKeyboardArrowRight />}
			defaultExpandIcon={<MdKeyboardArrowDown />}
			multiSelect
			sx={{ flexGrow: 1, maxWidth: 500, border: "1px solid red", height: "max-content" }}
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
					/>
					<TreeItem
						nodeId='4'
						label='Konservai'
					/>
				</TreeItem>
				<TreeItem
					nodeId='5'
					label='Katėms'
				>
					<TreeItem
						nodeId='6'
						label='Sausas ėdalas'
					/>
					<TreeItem
						nodeId='7'
						label='Konservai'
					/>
				</TreeItem>
				<TreeItem
					nodeId='8'
					label='Paukščiams'
				>
					<TreeItem
						nodeId='9'
						label='Teirautis krautuvėlėje'
					/>
				</TreeItem>
				<TreeItem
					nodeId='10'
					label='Graužikams'
				>
					<TreeItem
						nodeId='11'
						label='Teirautis krautuvėlėje'
					/>
				</TreeItem>
				<TreeItem
					nodeId='12'
					label='Žuvims'
				>
					<TreeItem
						nodeId='13'
						label='Teirautis krautuvėlėje'
					/>
				</TreeItem>
			</TreeItem>
		</TreeView>
	);
}
