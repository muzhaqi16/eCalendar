import React from 'react';
import { ThemeContext, themes } from './context/themeContext';
import Font from './components/Font';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import config from './config';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fonts: null,
      filter: "",
      theme: themes.light,
      fontSize: themes.fontSize,
      toggleTheme: this.toggleTheme,
    }
  }
  _getFontList = () => {
    try {
      fetch(`${config.API_URL}key=${config.API_KEY}`).then(result => {
        if (!result.ok) {
          return Promise.reject('There was an error getting the fonts')
        }
        return result.json();
      }).then(fonts => {
        this.setState({
          fonts: fonts.items
        })
      })
    } catch (error) {
      console.error(error)
    }
  }
  componentDidMount() {
    this._getFontList();
  }
  toggleTheme = () => {
    this.setState(state => ({
      theme:
        state.theme === themes.dark
          ? themes.light
          : themes.dark,
    }));
  };
  handleSearch = text => {
    this.setState({ filter: text })
  }
  render() {
    let fonts = this.state.fonts != null ? this.state.fonts.map((font, i) => {
      if (this.state.filter !== "") {
        if (font.family.toLocaleLowerCase().includes(this.state.filter))
          return <Font value={font} color={this.state.theme} key={i} />
        else return true
      }
      if (i > 10)
        return true
      return <Font value={font} color={this.state.theme} key={i} />

    }) : "Loading";
    return (
      <ThemeContext.Provider value={this.state}>
        <div className="app-container" style={{ backgroundColor: this.state.theme.background, color: this.state.theme.foreground }}>
          <Header />
          <SearchBar search={this.handleSearch} />
          <div className="fonts-container" style={{ flex: 1, display: "flex", flexWrap: "wrap", fontSize: this.state.fontSize, }}>
            {fonts}
          </div>
          <Footer />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
