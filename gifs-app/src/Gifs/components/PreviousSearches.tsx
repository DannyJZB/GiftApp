import { type FC } from "react";

interface Props {
	previousSearches: string[];
	onTermnClicked: (term: string) => void;
}

export const PreviousSearches: FC<Props> = ({ previousSearches, onTermnClicked }) => {
	return (
		<div className="previous-searches">
			<h2>Busquedas previas</h2>
			<ul className="previous-searches-list">
				{
					previousSearches.map(term => (
						<li key={term} onClick={() => onTermnClicked(term)}>{term}</li>
					))
				}
			</ul>
		</div>
	)
}
