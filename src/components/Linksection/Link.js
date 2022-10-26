import './Link.css'

// import images
import Slackimg from '../../images/slack (1).png'
import Githubimg from '../../images/Icon (3).png'

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
        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=edehjohnpaul"
          target="_blank"
          rel="noreferrer"
        >
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
      <div className="slackgit">
        <div>
          <a href="gg">
            <img src={Slackimg} alt="" />
          </a>
        </div>

        <div>
          <img src={Githubimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Link