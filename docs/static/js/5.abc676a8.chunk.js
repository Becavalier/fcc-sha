(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{169:function(e,t,n){},197:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(22),a=n.n(o),s=(n(169),n(96)),c=n(23),i=n.n(c),l=n(28),u=n.n(l),p=n(24),h=n.n(p),m=n(29),f=n.n(m),b=n(25),d=n.n(b),g=n(26),y=n.n(g),v=n(2),k=n(97),C=n(27),O=n.n(C),E=n(52),w=n(39),_=function(e){function t(){h()(this,t);var e=d()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.handleClick=function(){var t=e.props,n=t.checked,r=t.onChange;r&&r(!n)},e}return y()(t,e),f()(t,[{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,o=void 0===n?"ant-tag":n,a=t.className,s=t.checked,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n}(t,["prefixCls","className","checked"]),l=O()(o,(e={},u()(e,o+"-checkable",!0),u()(e,o+"-checkable-checked",s),e),a);return delete c.onChange,r.createElement("div",i()({},c,{className:l,onClick:this.handleClick}))}}]),t}(r.Component),P=function(e){function t(e){h()(this,t);var n=d()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.close=function(e){var t=n.props.onClose;if(t&&t(e),!e.defaultPrevented){var r=v.findDOMNode(n);r.style.width=r.getBoundingClientRect().width+"px",r.style.width=r.getBoundingClientRect().width+"px",n.setState({closing:!0})}},n.animationEnd=function(e,t){if(!t&&!n.state.closed){n.setState({closed:!0,closing:!1});var r=n.props.afterClose;r&&r()}},n.state={closing:!1,closed:!1},n}return y()(t,e),f()(t,[{key:"isPresetColor",value:function(e){return!!e&&/^(pink|red|yellow|orange|cyan|green|blue|purple|geekblue|magenta|volcano|gold|lime)(-inverse)?$/.test(e)}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,o=t.closable,a=t.color,s=t.className,c=t.children,l=t.style,p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n}(t,["prefixCls","closable","color","className","children","style"]),h=o?r.createElement(w.a,{type:"cross",onClick:this.close}):"",m=this.isPresetColor(a),f=O()(n,(e={},u()(e,n+"-"+a,m),u()(e,n+"-has-color",a&&!m),u()(e,n+"-close",this.state.closing),e),s),b=Object(E.a)(p,["onClose","afterClose"]),d=i()({backgroundColor:a&&!m?a:null},l),g=this.state.closed?null:r.createElement("div",i()({"data-show":!this.state.closing},b,{className:f,style:d}),c,h);return r.createElement(k.a,{component:"",showProp:"data-show",transitionName:n+"-zoom",transitionAppear:!0,onEnd:this.animationEnd},g)}}]),t}(r.Component),N=P;P.CheckableTag=_,P.defaultProps={prefixCls:"ant-tag",closable:!1};var j=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),x=["pink","red","orange","green","cyan","blue","purple"],A=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return j(t,e),t.prototype.render=function(){var e=this.props.user;return r.createElement(s.a,{className:"sha-contributor"},r.createElement("a",{target:"_blank",href:"https://github.com/"+e.username,rel:"noopener noreferrer"},r.createElement("img",{className:"sha-logo",alt:"",src:e.avatar_url||"/static/imgs/EastPerl.svg"}),r.createElement("div",{className:"sha-info"},r.createElement("div",{className:"sha-nickname"},e.nickname),r.createElement("div",{className:"sha-cup"},"罩杯: ",e.cup),r.createElement("div",{className:"sha-hobbies"},e.hobbies.map(function(e,t){return r.createElement(N,{key:t,color:x[Math.floor(7*Math.random())]},e)})))))},t}(r.PureComponent),S=[{username:"bastarder",nickname:"小杰",hobbies:["吃","喝","玩","乐"],cup:"A"},{username:"JeremyWuuuuu",nickname:"鸡哥",hobbies:["代码","咖啡"],cup:"A"},{username:"Becavalier",nickname:"航妹",hobbies:["女装","大佬","科学家"],cup:"C++"},{username:"Roxyhuang",nickname:"搓桑",hobbies:["学习","钻研"],cup:"A++"},{username:"homer6wang",nickname:"荷马",hobbies:["疯狂撸代码","养猫"],cup:"B+"},{username:"kerentang",nickname:"托尔老师",hobbies:["遛狗","撸代码"],cup:"未知"},{username:"kongwsh",nickname:"铁T",hobbies:["铲屎","拍罐头","嘻嘻"],cup:"牛油果"},{username:"Tennen",nickname:"十元",hobbies:["撸码","撸猫"],cup:"A--"},{username:"alimjanqadir",nickname:"阿力木江",hobbies:["Android","Java"],cup:"未知"},{username:"EchoLoveCoding",nickname:"Echo",hobbies:["撸码"],cup:"未知"},{username:"yiuyiu",nickname:"嘻嘻",hobbies:["学习","女装"],cup:"A"},{username:"lightbrotherV",nickname:"光兄",hobbies:["不能吃辣"],cup:"0"}],M=n(99),B=n(98),J=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),R=function(e){function t(t){var n=e.call(this,t)||this;return n.state={users:S},n}return J(t,e),t.prototype.getContributors=function(e){var t=S.map(function(e){return a.a.get("https://api.github.com/users/"+e.username)});return a.a.all(t)},t.prototype.componentDidMount=function(){var e=this;this.getContributors().then(function(t){t&&t.length&&e.setState({users:t.map(function(e,t){return e&&e.data?Object.assign({},e.data,S[t]):e})})})},t.prototype.render=function(){var e=this.state.users.map(function(e,t){return r.createElement(M.a,{sm:{span:8},xs:{span:24},key:t},r.createElement(A,{user:e}))});return r.createElement("div",{className:"sha-contributors"},r.createElement("div",{className:"sha-title"},"Contributors"),r.createElement(B.a,{gutter:16,className:"sha-contributors-wall"},e),r.createElement("div",{className:"sha-title"},"如何成为一位贡献者"),r.createElement("p",null,"FCC上海社区绝不将社区志愿者的贡献做量化, 上述排列仅为参与先后顺序"),r.createElement("p",null,"成为一位项目贡献者非常简单, 这里有一个链接, 相信你能在里面找到你想要的答案。",r.createElement("a",{href:"https://github.com/FCC-Shanghai/fcc-sha/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"},"链接")))},t}(r.PureComponent);t.default=R}}]);