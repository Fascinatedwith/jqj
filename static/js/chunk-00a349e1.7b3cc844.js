(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00a349e1"],{"732e":function(n,e,t){},"81d5":function(n,e,t){"use strict";var o=t("7b0b"),c=t("23cb"),a=t("07fa");n.exports=function(n){var e=o(this),t=a(e),i=arguments.length,s=c(i>1?arguments[1]:void 0,t),r=i>2?arguments[2]:void 0,d=void 0===r?t:c(r,t);while(d>s)e[s++]=n;return e}},8847:function(n,e,t){"use strict";t.r(e);var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"content",class:{contentTheme:n.theme}},[t("div",{staticClass:"synopsis"},[n._v("简介")]),t("div",{staticClass:"synopsisBox"},[n._v(" 名称 ")]),t("h2",{staticStyle:{margin:"20px 0"}},[n._v("效果演示")]),t("div",{staticClass:"examplePreview",staticStyle:{width:"1000px",height:"200px"}},[t("preview")],1),t("div",{staticClass:"br"}),t("h3",{staticStyle:{margin:"20px 0"}},[n._v("1. HTML")]),n._m(0),t("h3",{staticStyle:{margin:"20px 0"}},[n._v("2. CSS")]),n._m(1),t("h3",{staticStyle:{margin:"20px 0"}},[n._v("3. JS")]),n._m(2)])},c=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("pre",{staticClass:"pre"},[n._v("    "),t("code",{staticClass:"code"},[n._v('\n      < canvas id="my_canvas" />\n    ')]),n._v("\n  ")])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("pre",{staticClass:"pre"},[n._v("    "),t("code",{staticClass:"code"},[n._v("\n      #my_canvas {\n        width: 100%;\n        height: 100%;\n      }\n    ")]),n._v("\n  ")])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("pre",{staticClass:"pre"},[n._v("    "),t("code",{staticClass:"code"},[n._v("\n  init(e) {\n    const t = document.getElementById(e)\n    const n = t.getContext('2d')\n    const o = 1\n    let a = (t.width = window.innerWidth * o)\n    let c = (t.height = window.innerHeight * o)\n    const i = 0.05 * a\n    const s = 0.1 * a\n    const d = (e = 1) => Math.random() * e\n    const l = Math.PI\n    const r = 2 * l\n    let p = new Date()\n    const h = (e, t, n) => (1 - n) * e + n * t\n    const m = (e, t, n, o) => {\n      const a = e - n\n      const c = t - o\n      return Math.sqrt(a * a + c * c)\n    }\n    const y = new Array(400).fill({}).map(() => ({\n      x: 0.5 * a + Math.cos(d(r)) * d(0.5 * a),\n      y: 0.5 * c + Math.sin(d(r)) * d(0.5 * c),\n      angle: d(r),\n      speed: d(0.15),\n      normalSpeed: d(0.15),\n      oscAmplitudeX: d(2),\n      oscSpeedX: 0.001 + d(0.008),\n      oscAmplitudeY: d(2),\n      oscSpeedY: 0.001 + d(0.008),\n      connectDistance: d(i),\n      color: { r: 255, g: 255, b: 255 }\n    }))\n    const g = () => {\n      (p = new Date()),\n      y.forEach((e) => {\n        (e.x +=\n          (Math.cos(e.angle) + Math.cos(p * e.oscSpeedX) * e.oscAmplitudeX) *\n          e.speed),\n        (e.y +=\n            (Math.sin(e.angle) +\n              Math.cos(p * e.oscSpeedY) * e.oscAmplitudeY) *\n            e.speed),\n        (e.speed = h(e.speed, e.normalSpeed * o, 0.1)),\n        (e.x > a || e.x < 0) && (e.angle = l - e.angle),\n        (e.y > c || e.y < 0) && (e.angle = -e.angle),\n        d() < 0.005 && (e.oscAmplitudeX = d(2)),\n        d() < 0.005 && (e.oscSpeedX = 0.001 + d(0.008)),\n        d() < 0.005 && (e.oscAmplitudeY = d(2)),\n        d() < 0.005 && (e.oscSpeedY = 0.001 + d(0.008)),\n        (e.x = Math.max(-0.01, Math.min(e.x, a + 0.01))),\n        (e.y = Math.max(-0.01, Math.min(e.y, c + 0.01)))\n      }),\n      n.clearRect(0, 0, a, c),\n      y.map((e) => {\n        y.filter(\n          (t) => e != t && !(m(e.x, e.y, t.x, t.y) > e.connectDistance)\n        )\n          .map((t) => {\n            const n = m(e.x, e.y, t.x, t.y)\n            return (\n              (e.speed = h(\n                e.speed,\n                e.speed + (0.05 / e.connectDistance) * n,\n                0.2\n              )),\n              {\n                p1: e,\n                p2: t,\n                color: e.color,\n                opacity:\n                  Math.floor(\n                    (100 / e.connectDistance) * (e.connectDistance - n)\n                  ) / 100\n              }\n            )\n          })\n          .forEach((e, t) => {\n            const o = Math.sin(p * e.p1.oscSpeedX)\n            n.beginPath(),\n            (n.globalAlpha = e.opacity),\n            n.moveTo(e.p1.x, e.p1.y),\n            n.lineTo(e.p2.x, e.p2.y),\n            (n.strokeStyle = `rgb(\\n\\t\\t\\t\\t\\t${Math.floor(e.color.r * o)},\\n\\t\\t\\t\\t\\t${Math.floor(0.5 * e.color.g + 0.5 * e.color.g * o)},\\n\\t\\t\\t\\t\\t${e.color.b}\\n\\t\\t\\t\\t)`),\n            (n.lineWidth = 4 * e.opacity),\n            n.stroke(),\n            n.closePath()\n          })\n      }),\n      window.requestAnimationFrame(g)\n    }\n    g(),\n    window.addEventListener('mousemove', (e) => {\n      const t = e.layerX * o\n      const n = e.layerY * o\n      y.forEach((e) => {\n        const o = m(t, n, e.x, e.y)\n        if (o < s && o > 0) {\n          e.angle = ((e, t, n, o) => Math.atan2(o - t, n - e))(t, n, e.x, e.y)\n          const a = 0.1 * (s - o)\n          e.speed = h(e.speed, a, 0.2)\n        }\n      })\n    }),\n    window.addEventListener('resize', (e) => {\n      (a = t.width = window.innerWidth * o),\n      (c = t.height = window.innerHeight * o)\n    })\n  }\n  // 使用时在mounted()里执行 this.init('my_canvas')\n    ")]),n._v("\n  ")])}],a=t("5530"),i=t("2f62"),s=function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)},r=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"perview"},[t("canvas",{attrs:{id:"my_canvas"}})])}],d=(t("d81d"),t("cb29"),t("d3b7"),t("159b"),t("4de4"),t("99af"),{components:{},data:function(){return{}},computed:{},created:function(){},mounted:function(){this.init("my_canvas")},methods:{init:function(n){var e=document.getElementById(n),t=e.getContext("2d"),o=1,c=e.width=window.innerWidth*o,a=e.height=window.innerHeight*o,i=.05*c,s=.1*c,r=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return Math.random()*n},d=Math.PI,l=2*d,p=new Date,h=function(n,e,t){return(1-t)*n+t*e},u=function(n,e,t,o){var c=n-t,a=e-o;return Math.sqrt(c*c+a*a)},m=new Array(400).fill({}).map((function(){return{x:.5*c+Math.cos(r(l))*r(.5*c),y:.5*a+Math.sin(r(l))*r(.5*a),angle:r(l),speed:r(.15),normalSpeed:r(.15),oscAmplitudeX:r(2),oscSpeedX:.001+r(.008),oscAmplitudeY:r(2),oscSpeedY:.001+r(.008),connectDistance:r(i),color:{r:255,g:255,b:255}}})),f=function n(){p=new Date,m.forEach((function(n){n.x+=(Math.cos(n.angle)+Math.cos(p*n.oscSpeedX)*n.oscAmplitudeX)*n.speed,n.y+=(Math.sin(n.angle)+Math.cos(p*n.oscSpeedY)*n.oscAmplitudeY)*n.speed,n.speed=h(n.speed,n.normalSpeed*o,.1),(n.x>c||n.x<0)&&(n.angle=d-n.angle),(n.y>a||n.y<0)&&(n.angle=-n.angle),r()<.005&&(n.oscAmplitudeX=r(2)),r()<.005&&(n.oscSpeedX=.001+r(.008)),r()<.005&&(n.oscAmplitudeY=r(2)),r()<.005&&(n.oscSpeedY=.001+r(.008)),n.x=Math.max(-.01,Math.min(n.x,c+.01)),n.y=Math.max(-.01,Math.min(n.y,a+.01))})),t.clearRect(0,0,c,a),m.map((function(n){m.filter((function(e){return n!=e&&!(u(n.x,n.y,e.x,e.y)>n.connectDistance)})).map((function(e){var t=u(n.x,n.y,e.x,e.y);return n.speed=h(n.speed,n.speed+.05/n.connectDistance*t,.2),{p1:n,p2:e,color:n.color,opacity:Math.floor(100/n.connectDistance*(n.connectDistance-t))/100}})).forEach((function(n,e){var o=Math.sin(p*n.p1.oscSpeedX);t.beginPath(),t.globalAlpha=n.opacity,t.moveTo(n.p1.x,n.p1.y),t.lineTo(n.p2.x,n.p2.y),t.strokeStyle="rgb(\n\t\t\t\t\t".concat(Math.floor(n.color.r*o),",\n\t\t\t\t\t").concat(Math.floor(.5*n.color.g+.5*n.color.g*o),",\n\t\t\t\t\t").concat(n.color.b,"\n\t\t\t\t)"),t.lineWidth=4*n.opacity,t.stroke(),t.closePath()}))})),window.requestAnimationFrame(n)};f(),window.addEventListener("mousemove",(function(n){var e=n.layerX*o,t=n.layerY*o;m.forEach((function(n){var o=u(e,t,n.x,n.y);if(o<s&&o>0){n.angle=function(n,e,t,o){return Math.atan2(o-e,t-n)}(e,t,n.x,n.y);var c=.1*(s-o);n.speed=h(n.speed,c,.2)}}))})),window.addEventListener("resize",(function(n){c=e.width=window.innerWidth*o,a=e.height=window.innerHeight*o}))}}}),l=d,p=(t("d754"),t("2877")),h=Object(p["a"])(l,s,r,!1,null,"6827311c",null),u=h.exports,m={components:{preview:u},data:function(){return{}},computed:Object(a["a"])({},Object(i["b"])(["theme"])),created:function(){},mounted:function(){},methods:{}},f=m,v=(t("f58c"),Object(p["a"])(f,o,c,!1,null,"5143d7ca",null));e["default"]=v.exports},cb29:function(n,e,t){var o=t("23e7"),c=t("81d5"),a=t("44d2");o({target:"Array",proto:!0},{fill:c}),a("fill")},d754:function(n,e,t){"use strict";t("f73a")},d81d:function(n,e,t){"use strict";var o=t("23e7"),c=t("b727").map,a=t("1dde"),i=a("map");o({target:"Array",proto:!0,forced:!i},{map:function(n){return c(this,n,arguments.length>1?arguments[1]:void 0)}})},f58c:function(n,e,t){"use strict";t("732e")},f73a:function(n,e,t){}}]);