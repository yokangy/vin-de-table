import React, { Component } from 'react';

export default class CreateWineReview extends Component {
	render() {
		return (
			<form>
				<h3>Review your wine!</h3>
				<div>
					<label>Vintage</label>
					<input type="text" />
				</div>
				<div>
					<label>Winery</label>
					<input type="text" />
				</div>
				<div>
					<label>Name</label>
					<input type="text" />
				</div>
				<div>
					<label>Varietal/Blend</label>
					<input type="text" />
				</div>
				<div>
					<label>Region</label>
					<input type="text" />
				</div>
				<div>
					<label>Notes</label>
					<textarea type="text" />
				</div>
				<div>
					<label>Price</label>
					<input type="number" />
				</div>
			</form>
		);
	}
}

