import React from 'react';
import './App.scss'
import photo from './photo.png'
const sectionContent = require('./sectionContent');

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
    this.state = {}
    this.title = props.title;
    this.subtitle = props.subtitle;
  }
  getClassNames = (str,props) => {
    let slideUp = props.hide ? "slide-up" : "";
    return `${str} ${slideUp}`;
  }
  render () {
    return (
      <div className={this.getClassNames('name-banner', this.props)}>
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
    this.state = {}
    this.text = `<${props.text}>`;
    this.filled = false;
    this.click = props.click;
    this.id = props.id;
    this.active = props.active;
  }

  getClassNames = (name, aState) => {
    let activatedState = ((a) => {
      switch(a) {
        case(0):
          return "";
        case(1):
          return "inactive";
        case(2):
          return "active";
        default:
          return "";
      }
    })(aState);
    return `${name}  ${activatedState}`;
  }

  handleClick = () => {
    this.click(this.id);
  }


  render() {
    return (
      <div className={this.getClassNames('section-link fill-up',this.props.active)}
        onClick={this.handleClick}>
        <span>{this.text}</span>
        </div>
    )
  }
}

class ContentSection extends React.Component{
  constructor(props){
    super(props);
    this.id = props.id;
    this.content = props.content;
  }

  formatContent(json){
    let i = 0;
    let elementArray = json.map((j) => {
      let el = React.createElement(j.key,{key:i},j.innerHTML);
      i++;
      return el;
    })
    return elementArray;
  }

  getClassNames = (names) => {
    return `${names}`;
  }

  render() {
    return (
      <div 
        className={this.getClassNames('content-section')}
        id={this.id}>
          {this.formatContent(this.content)}
        </div>
    )
  }
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sections: {
        0:{
          name:'about',
          isActive:false
        },
        1:{
          name:'projects',
          isActive:false
        },
        2:{
          name:'contact',
          isActive:false
        }        
      },
      sectionHasBeenActivated:false,
      activatedSection:undefined,
    }
    this.sectionContent = sectionContent;
  }

  activateSection = (sectionName) => {
    this.setState({activatedSection:sectionName});
  }

  clickSectionLink = (id) => {
    let s = this.state;
    s.activatedSection = undefined;
    let sections =  s.sections;
    let i = 0;
    while (i in sections){
      if (i === parseInt(id)) {
        sections[i].isActive = true;
      } else {
        sections[i].isActive = false;
      }
      i++;
    }
    s.sectionHasBeenActivated = true;
    
    this.setState(s);
    setTimeout(() => {
      s.activatedSection = id;
      this.setState(s);
    },1000)
  }

  createContentSection = () => {
    const activeId = this.state.activatedSection;    
    if (typeof activeId != 'undefined') {
      const activeName = this.state.sections[activeId].name;
      const contentJson = this.sectionContent[activeName];
      return <ContentSection content={contentJson} />
    }
  }

  createSectionLinks = () => {
    let elementArray = [];
    let sections = Object.keys(this.state.sections);
    for (let i = 0; i < sections.length; i++){
      let currentSection = this.state.sections[sections[i]];
      let activatedState = ((currentSection) => {
        if (currentSection.isActive) return 2;
        if (!(currentSection.isActive) && this.state.sectionHasBeenActivated) return 1;
        return 0;
      })(currentSection);
      let el = <SectionLink 
        key={i} 
        id={i}
        text={currentSection.name} 
        active={activatedState} 
        click={this.clickSectionLink}
        />
      elementArray.push(el);
    }

    const holderClassNames = (() => {
      let padding = this.state.sectionHasBeenActivated ? "" : "padding-top-10";
      let names = `section-link-holder ${padding}`;
      return names;
    })();
    return (
      <div className={holderClassNames}>
        {elementArray}
      </div>      
      );
  }

  
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
        </header> */} 
        {this.createSectionLinks()}
        {this.createContentSection()}   
        <NameBanner title="Dave Cook" subtitle="codes" hide={this.state.sectionHasBeenActivated} />
        <Photo src={photo} alt="Dave Cook" />
      </div>
    );
  }
}


export default App;
