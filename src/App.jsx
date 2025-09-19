import './App.css';

function Header() {
  return (
    <div className="section">
      <div className="box"></div>

      <div className="peach-box">
        <div className="red-group">
          <div className="name-box">Geromin</div>
          <div className="name-box">Manese</div>
        </div>
      </div>

      <div className="box"></div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bottom">
      <div className="side"></div>

      <div className="center">
        <div className="footer-tag">C-PCIT9</div>
        <div className="footer-tag">IT3B</div>
      </div>

      <div className="side"></div>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      {}
      <Header />

      {}
      <div className="middle">
        <div className="left"></div>
        <div className="right">
          <div></div>
          <div></div>
        </div>
      </div>

      {}
      <Footer />
    </div>
  );
}

export default App;
