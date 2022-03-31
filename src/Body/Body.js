import React from "react";
import "./Body.css";
import { Table, Form } from "react-bootstrap";
// import axios from "axios";
// import React, { useEffect, useState } from "react";


// const ReactTable = () => {
// 	const [books, setBooks] = useState([]);
// 	const [country, setcountry] = useState("");
// 	const [selectedBooks, setSelectedBooks] = useState([]);
// 	useEffect(() => {
// 	  const pathname = window.location.pathname.split("/")[1];
// 	  if (pathname) {
// 		setcountry(pathname);
// 	  }
// 	  axios
// 		.get("https://6240cbd919f6098792401aa1.mockapi.io/book")
// 		.then((res) => {
// 		  setBooks(res.data);
// 		  if (pathname) {
// 			setSelectedBooks(
// 			  res.data.filter((book) => book.Country === pathname)
// 			);
// 		  } else {
// 			setSelectedBooks(res.data);
// 		  }
// 		});
// 	}, []);
// 	const changeCountry = (e) => {
// 	  if (e.target.value) {
// 		setSelectedBooks(books.filter((book) => book.Country === e.target.value));
// 	  } else {
// 		setSelectedBooks(books);
// 	  }
// 	  window.history.pushState(null, null, `/${e.target.value}`);
// 	  setcountry(e.target.value);
// 	};
// 	return (
// 	  <div className="space-y-4">
// 		<h1 className="font-bold text-xl">Country Listing:</h1>
// 		<select
// 		  onChange={changeCountry}
// 		  value={country}
// 		  className="focus:outline border border-blue-500 outline-blue-500 flex justify-between rounded-lg
// 		px-3 py-2 w-96"
// 		>
// 		  <option value="">Select Country</option>
// 		  {books?.map((book) => (
// 			<option key={book.id} value={book.Country}>
// 			  {book.Country}
// 			</option>
// 		  ))}
// 		</select>
// 		<table className="w-full">
// 		  <tr className="flex justify-evenly font-bold w-full border">
// 			<th className="w-1/6 text-center">Country</th>
// 			<th className="w-1/6 text-center">Author</th>
// 			<th className="w-1/6 text-center">Title</th>
// 			<th className="w-1/6 text-center">Language</th>
// 			<th className="w-1/6 text-center">Pages</th>
// 			<th className="w-1/6 text-center">Publication Year</th>
// 			<th className="w-1/6 text-center">Image Link</th>
// 		  </tr>
// 		  {selectedBooks?.map((book) => (
// 			<tr key={book.id} className="flex justify-evenly w-full border">
// 			  <td className="w-1/6 border text-center">{book.Country}</td>
// 			  <td className="w-1/6 border text-center">{book.Author}</td>
// 			  <td className="w-1/6 border text-center">{book.Title}</td>
// 			  <td className="w-1/6 border text-center">{book.Language}</td>
// 			  <td className="w-1/6 border text-center">{book.Pages}</td>
// 			  <td className="w-1/6 border text-center">
// 				{new Date(book.Publication).getFullYear()}
// 			  </td>
// 			  <td className="w-1/6 border text-center overflow-auto scrollbar-hide">
// 				<a href={book.Image} target="_blank" rel="noreferrer">
// 				  {book.Image}
// 				</a>
// 			  </td>
// 			</tr>
// 		  ))}
// 		</table>
// 	  </div>
// 	);
//   };
  
//   export default ReactTable;

class ReactTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			country: decodeURIComponent(this.props.country ?? ""),
		};
	}

	changeCountry(e) {
		this.props.history.push("/" + encodeURIComponent(e.target.value));
		this.setState({ ...this.state, country: e.target.value });
	}

	render() {
		return (
			<div className="content-wrapper">
				<div className="select-wrapper">
					<h4>Select Country</h4>
					<Form.Select className="select-box"
						defaultValue={this.state.country}
						onChange={this.changeCountry.bind(this)}
					>
						<option value="" href="/">
							All
						</option>
						{this.props.myBooks.map((book, i) => {
							return (
								<option
									value={book.country.toLowerCase()}
									key={i}
								>
									{book.country}
								</option>
							);
						})}
					</Form.Select>
				</div>
				<Table sstriped bordered hover variant="dark" size="sm" className="react-table">
					<thead>
						<tr>
							<th>Country</th>
							<th>Author</th>
							<th>Title</th>
							<th>Language</th>
							<th>Pages</th>
							<th>Publication Year</th>
							<th>Image link</th>
							<th>Book link</th>
						</tr>
					</thead>
					<tbody>
						{(!this.state.country
							? this.props.myBooks
							: this.props.myBooks.filter(
									(book) =>
										book.country.toLowerCase() ===
										this.state.country
							  )
						).map((book, i) => {
							return (
								<tr key={i}>
									<td>{book.country}</td>
									<td>{book.author}</td>
									<td>{book.title}</td>
									<td>{book.language}</td>
									<td>{book.pages}</td>
									<td>{book.year}</td>
									<td>{book.imageLink}</td>
									<td>
										<a href={book.link}>{book.link}</a>
									</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			</div>
		);
	}
}

export default ReactTable;
