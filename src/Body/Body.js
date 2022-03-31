import "./Body.css";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Table, Form } from "react-bootstrap";



const ReactTable = ({ data }) => {
  const history = useHistory();
  const [books, setBooks] = useState([]);
  const [country, setcountry] = useState("");
  const [selectedBooks, setSelectedBooks] = useState([]);


  useEffect(() => {
    setBooks(data);
    const pathname = history.location.pathname.split("/")[1];
    if (pathname) {
      setcountry(pathname);
      setSelectedBooks(data.filter((book) => book.country === pathname));
    } else {
      setSelectedBooks(data);
    }
  }, [history, data]);

  const changeCountry = (e) => {
    e.preventDefault();
    if (e.target.value) {
      setSelectedBooks(books.filter((book) => book.country === e.target.value));
    } else {
      setSelectedBooks(books);
    }
    history.push(`/${e.target.value}`);
    setcountry(e.target.value);
  };
  return (
    <div className="space-y-4">
      <h4 className="font-bold text-xl">Country Listing:</h4>
      <select
        onChange={changeCountry}
        value={country}
        className="focus:outline border border-blue-500 outline-blue-500 flex justify-between rounded-lg
      px-3 py-2 w-96"
      >
        <option value="">Select Country</option>
        {books?.map((book, index) => {
          return (
            <option key={index} value={book.country}>
              {book.country}
            </option>
          );
        })}
      </select>
      <table className="w-full overflow-auto">
        <tr className="flex justify-evenly font-bold w-full border">
          <th className="w-1/6 text-center">Country</th>
          <th className="w-1/6 text-center">Author</th>
          <th className="w-1/6 text-center">Title</th>
          <th className="w-1/6 text-center">Language</th>
          <th className="w-1/6 text-center">Pages</th>
          <th className="w-1/6 text-center">Publication Year</th>
          <th className="w-1/6 text-center">Image Link</th>
        </tr>
        {selectedBooks.map((book, index) => (
          <tr
            key={index}
            className={`flex ${
              index % 2 === 0 ? "bg-white" : "bg-green-400"
            } justify-evenly w-full border`}
          >
            <td className="w-1/6 border text-center">{book.country}</td>
            <td className="w-1/6 border text-center">{book.author}</td>
            <td className="w-1/6 border text-center">{book.title}</td>
            <td className="w-1/6 border text-center">{book.language}</td>
            <td className="w-1/6 border text-center">{book.pages}</td>
            <td className="w-1/6 border text-center">{book.year}</td>
            <td className="w-1/6 border text-center overflow-auto scrollbar-hide">
              <a href={book.link} target="_blank" rel="noreferrer">
                {book.imageLink}
              </a>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ReactTable;



// class ReactTable extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			country: decodeURIComponent(this.props.country ?? ""),
// 		};
// 	}

// 	changeCountry(e) {
// 		this.props.history.push("/" + encodeURIComponent(e.target.value));
// 		this.setState({ ...this.state, country: e.target.value });
// 	}

// 	render() {
// 		return (
// 			<div className="content-wrapper">
// 				<div className="select-wrapper">
// 					<h4>Select Country</h4>
// 					<Form.Select className="select-box"
// 						defaultValue={this.state.country}
// 						onChange={this.changeCountry.bind(this)}
// 					>
// 						<option value="" href="/">
// 							All
// 						</option>
// 						{this.props.myBooks.map((book, i) => {
// 							return (
// 								<option
// 									value={book.country.toLowerCase()}
// 									key={i}
// 								>
// 									{book.country}
// 								</option>
// 							);
// 						})}
// 					</Form.Select>
// 				</div>
// 				<Table striped bordered hover variant="light" size="sm" className="react-table">
// 					<thead>
// 						<tr>
// 							<th>Country</th>
// 							<th>Author</th>
// 							<th>Title</th>
// 							<th>Language</th>
// 							<th>Pages</th>
// 							<th>Publication Year</th>
// 							<th>Image link</th>
// 							<th>Book link</th>
// 						</tr>
// 					</thead>
// 					<tbody>
// 						{(!this.state.country
// 							? this.props.myBooks
// 							: this.props.myBooks.filter(
// 									(book) =>
// 										book.country.toLowerCase() ===
// 										this.state.country
// 							  )
// 						).map((book, i) => {
// 							return (
// 								<tr key={i}>
// 									<td>{book.country}</td>
// 									<td>{book.author}</td>
// 									<td>{book.title}</td>
// 									<td>{book.language}</td>
// 									<td>{book.pages}</td>
// 									<td>{book.year}</td>
// 									<td>{book.imageLink}</td>
// 									<td>
// 										<a href={book.link}>{book.link}</a>
// 									</td>
// 								</tr>
// 							);
// 						})}
// 					</tbody>
// 				</Table>
// 			</div>
// 		);
// 	}
// }

// export default ReactTable;
