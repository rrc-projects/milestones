import { myBooks } from "./myBooks";
import Header from "./Header/Header";
import ReactTable from "./Body/Body";
import Footer from "./Footer/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import booksJSON from "./books.json";
import { Component } from "react";


//using browser router


class App extends Component {
	render() {
	  return (
		<BrowserRouter>
		  <div className="min-h-screen p-20 space-y-10 border border-black flex flex-col justify-between">
			<Header title="Book Hub" />
			<ReactTable data={booksJSON} />
			<Footer />
		  </div>
		</BrowserRouter>
	  );
	}
  }
  export default App;


// using props  

// function App(props) {

// 	return (
// 		<div className="App">
// 			<Header></Header>
// 			<ReactTable
// 				myBooks={myBooks}
// 				country={props.match.params.country}
// 				{...props}
// 			></ReactTable>
// 			<Footer></Footer>
// 		</div>
// 	);
// }

// export default App;

