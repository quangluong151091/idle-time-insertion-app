import React from "react";

let nests = [
  {
    name: "29484001",
    img: "/pics/nest/29484001PO.png",
    link: '/29484001',
  },
  {
    name: "29484002",
    img: "/pics/nest/29484002PO.png",
    link: '/29484002',
  },
];

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      nests: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      nests: nests
    });
    this.refs.search.focus();
  }
  handleChange() {
    this.setState({
      searchString: this.refs.search.value
    });
  }
  render() {
    let _nests = this.state.nests;
    let search = this.state.searchString.trim();

    if (search.length > 0) {
      _nests = _nests.filter(function (nests) {
        return nests.name.match(search);
      });
    }
    return (
      <div className="search-box">
        <input
          id="search"
          className="search-txt"
          type="text"
          placeholder="Search..."
          value={this.state.searchString}
          ref="search"
          onChange={this.handleChange} />
        <a href="#searchbox" className="search-btn"><i className="fas fa-search"></i></a>
        <div id="searchlist" className='search-result' hidden>
          <ul>
            {_nests.map(l => {
              return (
                <a href={l.link} key={l.name}>
                  <li>
                    <img src={l.img} width='150px' alt="nestImg" />
                    <span className='text-list'>{l.name}</span>
                  </li>
                </a>
              );
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default SearchBar;