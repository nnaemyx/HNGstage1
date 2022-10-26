import './Link.css'


const Link = () => {
  return (
    <div className="link_section">
      <div className="links">
        <button className="twitter">EdehJohnpaul</button>
        <a href="https://training.zuri.team/" target="_blank" rel="noreferrer">
          <button className="btn_zuri">Zuri Team</button>
        </a>
        <a href="http://books.zuri.team" target="_blank" rel="noreferrer">
          <button className="books">Zuri Books</button>
        </a>
        <a href="https://books.zuri.team/" target="_blank" rel="noreferrer">
          <button className="book_python">Python Books</button>
        </a>
        <a href="https://background.zuri.team" target="_blank" rel="noreferrer">
          <button className="pitch">Background Check for Coders</button>
        </a>
        <a
          href="https://books.zuri.team/design-rules"
          target="_blank"
          rel="noreferrer"
        >
          <button className="book_design">Design Books</button>
        </a>
      </div>
    </div>
  );
}

export default Link