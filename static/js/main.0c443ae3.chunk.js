(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/photo.8c225c3e.png"},function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e){e.exports=JSON.parse('{"about":[{"key":"p","innerHTML":"Born in the UK, currently working remotely in South-East Asia, I\'m an all-round coder, web-designer and language teacher."},{"key":"p","innerHTML":"As an avid language learner, I was drawn into the world of teaching English as a foreign language, in which I also completed a master\'s degree. However, I realised that in all of the places that I worked around the world, they all had one thing in common - a lack of technical know-how in the teams resulted in great inefficiencies, lost productivity and human error."},{"key":"p","innerHTML":"Becoming frustrated by what I saw, and wanting to avoid these repetitive tasks myself, I began teaching myself to code - at first in VBA - in 2015. Now 5 years later, I have designed multiple websites, scripts, and web apps. This has allowed me to save businesses, and myself, time and money."},{"key":"p","innerHTML":"I haven\'t turned my back on teaching. I continue to tutor individuals online and am open for new clients. Feel free to get in touch if you want to know more."}],"projects":[{"key":"h1","innerHTML":"JavaScript"},{"key":"p","innerHTML":"The website that you\'re looking at right now was made using reactJS and SASS."}],"contact":[{"key":"h1","innerHTML":"Get in touch"},{"key":"p","innerHTML":"Feel free to contact me through my social media links below."}]}')},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),o=(a(14),a(1)),s=a(2),l=a(4),m=a(3),u=a(5),h=(a(15),a(8)),d=a.n(h),p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).changeHandler=function(e){var t=e.target.id,n=e.target.value,r={};r[t]=n,a.setState(r)},a.clickHandler=function(e){a.submitFormData(e)},a.URL="https://script.google.com/macros/s/AKfycbxK2MdwVTDU6snWstKn6yBmlwE1GsqCUDdL38PRMc14eaaPniPf/exec",a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"setUpXmlHttpRequest",value:function(){var e=new XMLHttpRequest;return e.open("post",this.URL),e.onload=function(){if(200!==e.status)return alert("Unexpected response");var t=JSON.parse(e.responseText);return 0===t.message?console.log(t.error):console.log(t)},e}},{key:"submitFormData",value:function(e){e.preventDefault();var t=new FormData;t.append("timestamp",this.state.name),t.append("name",this.state.name),t.append("email",this.state.email),t.append("message",this.state.message),console.log(t),this.setUpXmlHttpRequest().send(t)}},{key:"render",value:function(){return r.a.createElement("form",null,r.a.createElement("input",{type:"text",className:"input-box",id:"name",placeholder:"what's your name?",onChange:this.changeHandler}),r.a.createElement("input",{type:"email",className:"input-box",id:"email",placeholder:"email address",onChange:this.changeHandler}),r.a.createElement("textarea",{id:"message",className:"input-box",name:"message",placeholder:"send me a message",onChange:this.changeHandler}),r.a.createElement("input",{id:"submitbutton",className:"button",type:"submit",value:"submit",onClick:this.clickHandler}))}}]),t}(r.a.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact-section"},r.a.createElement("h1",null,"Get in touch"),r.a.createElement("div",{className:"contact-container"},r.a.createElement("div",{className:"contact-text"},r.a.createElement("p",null,"Feel free to contact me through my social media links below."),r.a.createElement("p",null,"I am available to collaborate on any projects, big or small, from Excel macros to full websites. Feel free to take a look at my projects page to find out more about what I've been working on recently."),r.a.createElement("p",null,"Use the contact form or email me at ",r.a.createElement("a",{href:"info@davecook.codes"},"info@davecook.codes"),".")),r.a.createElement(p,null)))}}]),t}(r.a.Component),f={1:r.a.createElement("div",{className:"text-section"},r.a.createElement("p",null,r.a.createElement("a",{href:"/index"},"This website you're looking at now")),r.a.createElement("p",null,"This website was developed using ReactJs."),r.a.createElement("p",null,r.a.createElement("a",{className:"github-link",href:"https://github.com/davecook88/davecook88",target:"_blank",rel:"noopener noreferrer"},"See the code here"))),2:r.a.createElement("div",{className:"text-section"},r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.lakarencita.com",target:"_blank",rel:"noopener noreferrer"},"La Karencita Youtuber")),r.a.createElement("p",null,"I designed this page for my wife's Youtube channel ",r.a.createElement("a",{href:"https://www.youtube.com/lakarencitaMX",target:"_blank",rel:"noopener noreferrer"},"(check it out)"),". To challenge myself, I developed this page without using any JavaScript or CSS frameworks "),r.a.createElement("p",null,r.a.createElement("a",{className:"github-link",href:"https://github.com/davecook88/laKarencita",target:"_blank",rel:"noopener noreferrer"},"See the code here")))),3:r.a.createElement("div",{className:"text-section"},r.a.createElement("p",null,"Economist ad blocker"),r.a.createElement("p",null,"Not wanting to pay the subscription to read articles on ",r.a.createElement("a",{href:"economist.com",target:"_blank",rel:"noopener noreferrer"},"economist.com"),", I developed a simple extension for Google Chrome which allowed me to interrupt the JavaScript paywall."),r.a.createElement("p",null,r.a.createElement("a",{className:"github-link",href:"https://github.com/davecook88/economist-adblocker",target:"_blank",rel:"noopener noreferrer"},"See the code here"))),4:r.a.createElement("div",{className:"text-section"},r.a.createElement("a",{href:"https://docs.google.com/spreadsheets/d/1hrz53Lg36lcL3eeoKyXvV0BLzPf9r9QiDk_8msrU6EE/edit?usp=drivesdk"},r.a.createElement("p",null,"Vocabulary worksheet maker")),r.a.createElement("p",null,"As an English teacher, I was always making worksheets, which took up a lot of my time. To make life easier for me and my colleagues, I developed a spreadsheet which pulls definitions from the Oxford English Dictionary API to make spreadsheets quickly and easily.")),5:r.a.createElement("div",{className:"text-section"},r.a.createElement("a",{href:"https://docs.google.com/spreadsheets/d/1hrz53Lg36lcL3eeoKyXvV0BLzPf9r9QiDk_8msrU6EE/edit?usp=drivesdk"},r.a.createElement("p",null,"Cover planner")),r.a.createElement("p",null,"I'm currently working on a more complex algorithm in Google sheets. As Head of Department, I am responsible for assigning cover teachers. To make life simpler, I'm developing a system which can automatically assign a teacher to each class, depending on the level and availability of each teacher.")),6:r.a.createElement("div",{className:"text-section"},r.a.createElement("a",{href:"http://unitedenglish.herokuapp.com/"},r.a.createElement("p",null,"Linglos")),r.a.createElement("p",null,"After completing the Flask microblogging webapp tutorial, I began work on my most complex project to date. This app is a vocabulary-study app for language learners. It features user accounts and a customised spaced repetition system for each learner."),r.a.createElement("p",null,r.a.createElement("a",{className:"github-link",href:"https://github.com/davecook88/linglos",target:"_blank",rel:"noopener noreferrer"},"See the code here"))),andManyMore:r.a.createElement("div",{className:"text-section"},r.a.createElement("p",null,"And many more..."),r.a.createElement("p",null,"I'll keep updating this page with my projects. In the meantime, feel free to see my Github page."),r.a.createElement("p",null,r.a.createElement("a",{className:"github-link",href:"https://github.com/davecook88",target:"_blank",rel:"noopener noreferrer"},"See the code here")))},g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).createContent=function(){var e;e=a.state.activeSkill?a.skills[a.state.activeSkill].name:"intro";var t={intro:r.a.createElement("div",{className:"text-section"},r.a.createElement("p",null,"I began programming in VBA in order to automate some repetitive tasks in Excel. Since then I've worked on projects in a variety of different programming languages."),r.a.createElement("p",null,"Click the links above to see some examples of my work.")),JavaScript:[f[1],f[3],f.andManyMore],"Web development":[f[1],f[2],f.andManyMore],"Google scripts":[f[4],f[5],f.andManyMore],Python:[f[6]]};return r.a.createElement("div",{className:"portfolio-content flex"},t[e])},a.clickHandler=function(e){var t=function(){for(var t=e.target;!t.id;)t=t.parentNode;return t.id}();a.setState({activeSkill:t})},a.createSkillSections=function(){return a.skills.map((function(e,t){return a.createSkillAndProgressBar(e.name,e.percentage,t)}))},a.createSkillAndProgressBar=function(e,t,n){var c="".concat(t,"%"),i=function(){var e="";return a.state.activeSkill&&(e=parseInt(n)===parseInt(a.state.activeSkill)?"active-skill":"inactive-skill"),"button-style skill ".concat(e)}();return r.a.createElement("div",{className:i,key:e,id:n,onClick:a.clickHandler},r.a.createElement("div",{className:"skill-name"},e),r.a.createElement("div",{className:"skill-bar"},r.a.createElement("div",{className:"skill-bar-fill",style:{width:c}})))},a.state={activeSkill:void 0},a.skills=[{name:"Excel&VBA",percentage:95},{name:"Google scripts",percentage:75},{name:"JavaScript",percentage:75},{name:"Python",percentage:50},{name:"Web development",percentage:65},{name:"Java",percentage:10}],a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"skills-holder",key:"1"},this.createSkillSections()),this.createContent())}}]),t}(r.a.Component),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).getClassNames=function(){var e=a.state.hovered?"spin":"";return"fab fa-".concat(a.logo," ").concat(e)},a.handleHover=function(){a.setState({hovered:!0},(function(){setTimeout((function(){a.setState({hovered:!1})}),3e3)}))},a.state={hovered:!1},a.logo=e.logo,a.link=e.link,a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"social-media-button",onMouseEnter:this.handleHover},r.a.createElement("a",{className:"social-media-link",href:this.link},r.a.createElement("i",{className:this.getClassNames()})))}}]),t}(r.a.Component),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).createButtons=function(){return a.accounts.map((function(e){return r.a.createElement(b,{key:e[0],logo:e[0],link:e[1]})}))},a.getClassNames=function(e){return"social-media-bar ".concat(e.classes)},a.logo=e.logo,a.accounts=[["github","https://github.com/davecook88"],["codepen","https://codepen.com/DVC888"],["youtube","https://youtube.com/lakarencitaMX"],["twitter","https://twitter.com/DaveCookUK"]],a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:this.getClassNames(this.props)},this.createButtons())}}]),t}(r.a.Component),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).getClassNames=function(e,t){var a=t.hide?"slide-up":"";return"".concat(e," ").concat(a)},a.state={},a.title=e.title,a.subtitle=e.subtitle,a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:this.getClassNames("name-banner",this.props)},r.a.createElement("h1",{className:"title-text no-padding"},this.title),r.a.createElement("h1",{className:"subtitle-text no-padding"},this.subtitle),r.a.createElement(k,null))}}]),t}(r.a.Component),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).src=e.src,a.alt=e.alt,a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("img",{className:"photo",src:this.src,alt:this.alt})}}]),t}(r.a.Component),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).getClassNames=function(e,t){var n=function(e){switch(e){case 0:return"";case 1:return"inactive";case 2:return"active";default:return""}}(t),r=a.props.burger?"burgered":"";return"".concat(e,"  ").concat(n," ").concat(r)},a.handleClick=function(){a.click(a.id)},a.state={},a.text="<".concat(e.text,">"),a.filled=!1,a.click=e.click,a.id=e.id,a.active=e.active,a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:this.getClassNames("section-link button-style fill-up",this.props.active),onClick:this.handleClick},r.a.createElement("span",null,this.text))}}]),t}(r.a.Component),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).getClassNames=function(e){return"".concat(e)},a.id=e.id,a.content=e.content,a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"formatContent",value:function(e){if(console.log(this.id),"contact"===this.id)return r.a.createElement(v,null);if("projects"===this.id)return r.a.createElement(g,null);var t=0;return e.map((function(e){var a=r.a.createElement(e.key,{key:t},e.innerHTML);return t++,a}))}},{key:"render",value:function(){return r.a.createElement("div",{className:this.getClassNames("content-section"),id:this.id},this.formatContent(this.content))}}]),t}(r.a.Component),O=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).activateSection=function(e){n.setState({activatedSection:e})},n.burgerClickHandler=function(){var e=!n.state.burger;n.setState({burger:e})},n.clickSectionLink=function(e){var t=n.state;t.activatedSection=void 0;for(var a=t.sections,r=0;r in a;)r===parseInt(e)?a[r].isActive=!0:a[r].isActive=!1,r++;t.sectionHasBeenActivated=!0,t.burger=!1,n.setState(t),setTimeout((function(){t.activatedSection=e,n.setState(t)}),1e3)},n.createContentSection=function(){var e=n.state.activatedSection;if("undefined"!=typeof e){var t=n.state.sections[e].name,a=n.sectionContent[t];return r.a.createElement(j,{content:a,id:t})}},n.createSectionLinks=function(){for(var e=[],t=Object.keys(n.state.sections),a=0;a<t.length;a++){var c=n.state.sections[t[a]],i=function(e){return e.isActive?2:!e.isActive&&n.state.sectionHasBeenActivated?1:0}(c),o=r.a.createElement(w,{key:a,id:a,text:c.name,active:i,click:n.clickSectionLink,burger:n.state.burger});e.push(o)}var s=function(){var e=n.state.sectionHasBeenActivated?"":"padding-top-10";return"section-link-holder ".concat(e)}();return r.a.createElement("div",{className:s},e)},n.state={burger:!1,sections:{0:{name:"about",isActive:!1},1:{name:"projects",isActive:!1},2:{name:"contact",isActive:!1}},sectionHasBeenActivated:!1,activatedSection:void 0},n.sectionContent=a(16),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.state.sectionHasBeenActivated?r.a.createElement("div",{onClick:this.burgerClickHandler},r.a.createElement("i",{className:"fas fa-bars"})):"",this.createSectionLinks(),this.createContentSection(),r.a.createElement(E,{title:"DAVE COOK",subtitle:"codes",hide:this.state.sectionHasBeenActivated}),r.a.createElement(y,{src:d.a,alt:"Dave Cook"}),this.state.sectionHasBeenActivated?r.a.createElement(k,{classes:"bottom-bar"}):"")}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.0c443ae3.chunk.js.map