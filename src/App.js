import { myBooks } from "./myBooks";
import Header from "./Header/Header";
import ReactTable from "./Body/Body";
import Footer from "./Footer/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App(props) {
	return (
		<div className="App">
			<Header></Header>
			<ReactTable
				myBooks={myBooks}
				country={props.match.params.country}
				{...props}
			></ReactTable>
			<Footer></Footer>
		</div>
	);
}

// class App extends Component {
// 	render() {
// 	  return (
// 		<div className="min-h-screen p-4 px-10 border border-black flex flex-col justify-between">
// 		  <Header />
// 		  <Body />
// 		  <Footer />
// 		</div>
// 	  );
// 	}
//   }
  

export default App;
