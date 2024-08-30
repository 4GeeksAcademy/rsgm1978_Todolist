import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { TodoList } from "./todoList";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Project Todolist</h1>
			<TodoList/>
			
			
			<p>
				<img src={rigoImage} />
			</p>
			{/*<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			{/*<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>*/}
		</div>
	);
};

export default Home;
