import React from 'react';
import './App.css'
import photo from './photo.png'




class SocialMediaButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hovered:false,
    }
    this.logo = props.logo;
    this.link = props.link;
  }
  getClassNames = () => {
    let hovered = this.state.hovered ? "spin" : "";
    let name = `fab fa-${this.logo} ${hovered}`;
    return name;
  }

  handleHover = () => {
    this.setState({hovered: true}, () => {
      setTimeout(() => {
        this.setState({hovered:false})
      }, 3000)
    })
  }
  render () {
    return (
      <div className="social-media-button" onMouseEnter={this.handleHover}>
        <a href={this.link}>
          <i className={this.getClassNames()}></i>
        </a>
      </div>
    )
  }
}

class SocialMediaBar extends React.Component{
  constructor(props){
    super(props);
    this.logo = props.logo;
    this.accounts = [
      ['github','https://github.com/davecook88'],
      ['codepen','https://codepen.com/DVC888'],
      ['youtube', 'https://youtube.com/lakarencitaMX'],
      ['twitter', 'https://twitter.com/DaveCookUK']
    ]
    
  }
  createButtons = () => {
    let elementArray = this.accounts.map((acc) => {
      return <SocialMediaButton key={acc[0]} logo={acc[0]} link={acc[1]} />
    });
    return elementArray;
  }
  render () {
    return (
      <div className="social-media-bar">
        {this.createButtons()}
      </div>
    )
  }
}

class NameBanner extends React.Component {
  constructor(props){
    super(props);
    this.title = props.title;
    this.subtitle = props.subtitle;
  }
  render () {
    return (
      <div className="name-banner">
        <h1 className="title-text no-padding">{this.title}</h1>
        <h1 className="subtitle-text no-padding">{this.subtitle}</h1>
        <SocialMediaBar />
      </div>
    )
  }
}

class Photo extends React.Component{
  constructor(props){
    super(props);
    this.src = props.src;
    this.alt = props.alt;
  }
  render(){
    return (
      <img className="photo" src={this.src} alt={this.alt} />
    )
  }
}
class SectionLink extends React.Component{
  constructor(props) {
    super(props);
    this.text = `<${props.text}>`;
    this.activated = false;
    this.filled = false;
  }

  activate = () => {
    this.active = true;
  }

  getClassNames = (name) => {
    return `${name}  ${this.activated ? "activated" : ""}`;
  }


  render() {
    return (
      <div className={this.getClassNames('section-link fill-up')}>
        <span>{this.text}</span>
        {/* <div className={this.getClassNames('fill-up')}></div> */}
        </div>
    )
  }
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sections: [
        'about',
        'projects',
        'contact'
      ],
      activatedSection: undefined,
    }
  }

  createSectionLinks = () => {
    let elementArray = [];
    let sections = this.state.sections;
    for (let i = 0; i < sections.length; i++){
      let currentSection = sections[i];
      let isActive = (i === this.activatedSection) ? true : false;
      let el = <SectionLink key={i} text={currentSection} active={isActive} />
      elementArray.push(el);
    }
    return elementArray;
  }
  
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
        </header> */} 
        <div className="section-link-holder">
          {this.createSectionLinks()}
        </div>        
        <NameBanner title="Dave Cook" subtitle="codes" />
        <Photo src={photo} alt="Dave Cook" />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//       </header> */} 
//       <NameBanner title="Dave Cook" subtitle="codes" />
//       <Photo src={photo} alt="Dave Cook" />
//     </div>
//   );
// }

export default App;
