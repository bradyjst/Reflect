import React from "react";
import "./GroceryList.css";
import { Header } from "~/Book/PageComponents/Header/Header";

interface GroceryListProps {
	returnToIndex: () => void;
}

export const GroceryList: React.FC<GroceryListProps> = ({ returnToIndex }) => {
	return (
		<div className="grocerylist-container">
			<Header title="Grocery List" />
			<div className="grocerylist-content"></div>
			<button className="gotoindex-button" onClick={() => returnToIndex()}>
				Go to Index
			</button>
		</div>
	);
};
