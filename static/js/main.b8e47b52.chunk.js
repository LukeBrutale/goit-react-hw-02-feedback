(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={feedbackContainer:"FeedbackOptions_feedbackContainer__3FZJt",feedbackButton:"FeedbackOptions_feedbackButton__1gXM1"}},,,function(e,t,n){e.exports={container:"Container_container__1Qduw"}},function(e,t,n){e.exports={title:"Section_title__14uSa"}},function(e,t,n){e.exports={statisticsConstiner:"Statistics_statisticsConstiner__BKMnI"}},function(e,t,n){e.exports={notificationText:"Notification_notificationText__8EIzs"}},,,,,function(e,t,n){},function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(9),s=n.n(i),r=(n(19),n(10)),o=n(3),u=n(4),d=n(6),b=n(5),l=(n(20),n(2)),j=n.n(l),f=n(11),h=n.n(f),p=n(0);function v(e){var t=e.children;return Object(p.jsx)("div",{className:h.a.container,children:t})}v.Propypes={children:j.a.node};var O=v,k=n(12),g=n.n(k);var x=function(e){var t=e.title,n=e.children;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{className:g.a.title,children:t}),n]})},_=n(8),m=n.n(_),C=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).changeCase=function(e){return e.toUpperCase()},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{className:m.a.feedbackContainer,children:this.props.options.map((function(t,n){return Object(p.jsx)("button",{className:m.a.feedbackButton,type:"button",onClick:function(){return e.props.onLeaveFeedback(t)},children:e.changeCase(t)},n)}))})}}]),n}(a.Component),N=C,F=n(13),y=n.n(F),P=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,i=e.positivePercentage;return Object(p.jsxs)("div",{className:y.a.statisticsConstiner,children:[Object(p.jsxs)("p",{className:"feedback__statistics",children:["Good: ",t]}),Object(p.jsxs)("p",{className:"feedback__statistics",children:["Neutral: ",n]}),Object(p.jsxs)("p",{className:"feedback__statistics",children:["Bad: ",a]}),Object(p.jsxs)("p",{className:"feedback__statistics",children:["Total: ",c]}),Object(p.jsxs)("p",{className:"feedback__statistics",children:["Positive feedback: ",i,"%"]})]})};P.protTypes={good:j.a.number.isRequired,neutral:j.a.number.isRequired,bad:j.a.number.isRequired,total:j.a.number.isRequired,positivePercentage:j.a.number.isRequired};var T=P,w=n(14),B=n.n(w),S=function(e){var t=e.message;return Object(p.jsx)("p",{className:B.a.notificationText,children:t})};S.protTypes={message:j.a.string.isRequired};var q=S,R=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.hendleClick=function(t){e.setState(Object(r.a)({},t,e.state[t]+1))},e.countTotalFeedback=function(e){return e.reduce((function(e,t){return e+ +t}),0)},e.countPositiveFeedbackPercentage=function(e,t){var n=Math.round(100/e*t);return Number.isNaN(n)?0:n},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=Object.values(this.state),i=Object.keys(this.state),s=this.countTotalFeedback(c),r=this.countPositiveFeedbackPercentage(s,t);return Object(p.jsxs)(O,{children:[Object(p.jsx)(x,{title:"Please leave feedback",children:Object(p.jsx)(N,{options:i,onLeaveFeedback:this.hendleClick})}),Object(p.jsx)(x,{title:"Statistics",children:0!==s?Object(p.jsx)(T,{good:t,neutral:n,bad:a,total:s,positivePercentage:r}):Object(p.jsx)(q,{message:"No feedback given"})})]})}}]),n}(a.Component),I=R,L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(I,{})}),document.getElementById("root")),L()}],[[24,1,2]]]);
//# sourceMappingURL=main.b8e47b52.chunk.js.map