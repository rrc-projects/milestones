import './Header.css';

function Header(){
    return (
        <div className="header">
            <div className="main-wrap">
                <div className="container">
                    <div className="main-slide" >
                        <h1>Book Hub</h1>
                        <p>"Book Hub will provide you the information regarding books from diffrent era and country. Select the country to filter the books"</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;