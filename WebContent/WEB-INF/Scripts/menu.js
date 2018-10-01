document.addEventListener("DOMContentLoaded", function(event) {
	class Menu extends React.Component {
		render() {
			return (
				<div id="menu">
					<span className="menuButton">
						item1
					</span>
				</div>
			);
		}
	}


	ReactDOM.render(<Menu />, document.getElementById('menuContainer'));
});