(() => {
  "use strict";
  var e = {
      208: (e, t, n) => {
        n.d(t, { A: () => p });
        var r = n(601),
          o = n.n(r),
          c = n(314),
          i = n.n(c),
          a = n(417),
          d = n.n(a),
          l = new URL(n(398), n.b),
          u = i()(o()),
          s = d()(l);
        u.push([
          e.id,
          `body {\n  display: flex;\n  flex-direction: column;\n  background-image: url(${s});\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100vh;\n  margin: 0;\n  align-items: center;\n  background-attachment: fixed;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n\nheader h1 {\n  color: white;\n  font-size: 50px;\n}\n\ninput {\n  width: 450px;\n  height: 25px;\n  background-color: white;\n  border: 0px;\n  border: 1px solid white;\n  border-radius: 10px;\n}\n\ninput:hover {\n  background-color: rgb(135, 209, 238);\n  border: 1px solid white;\n}\n\nform {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\nbutton {\n  background-color: white;\n  border: 0px;\n  text-align: center;\n  border: 1px solid white;\n  height: 30px;\n  width: 50px;\n  padding: 0;\n  border-radius: 10px;\n}\n\nbutton:hover {\n  background-color: rgb(135, 209, 238);\n  border: 1px solid white;\n}\n\nbutton svg {\n  color: rgb(58, 58, 236);\n  width: 20px;\n}\n\n#currentWeather {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n#currentWeather h2 {\n  color: white;\n  font-size: 40px;\n}\n\n#temperature {\n  display: flex;\n  gap: 10px;\n}\n\n#temperature p {\n  font-size: 50px;\n  color: white;\n  margin: 20px 0 20px 0;\n}\n\n#temperature svg {\n  color: white;\n  width: 50px;\n}\n\n#weatherInfo {\n  display: flex;\n  gap: 30px;\n}\n\n#weatherInfo div h4,\n#weatherInfo div {\n  color: white;\n  font-size: 25px;\n}\n\n.value {\n  text-align: center;\n}\n\n#icon {\n  width: 90px;\n}\n\n#hourWeather {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n\n#hourWeather > button {\n  width: 100px;\n}\n\n.border {\n  width: 900px;\n  height: fit-content;\n  overflow: hidden;\n}\n\n#container {\n  width: fit-content;\n  display: flex;\n  transition: transform 1s ease-in-out;\n}\n\n.card {\n  width: 150px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.card p {\n  color: white;\n  font-size: 25px;\n}\n\nh4 {\n  font-size: 35px;\n  color: white;\n}\n\n#forecast {\n  display: flex;\n  gap: 15px;\n}\n\n#forecast .day p {\n  color: white;\n  font-size: 25px;\n}\n\n.day {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 35px;\n}\n`,
          "",
        ]);
        const p = u;
      },
      314: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, o, c) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var a = 0; a < this.length; a++) {
                  var d = this[a][0];
                  null != d && (i[d] = !0);
                }
              for (var l = 0; l < e.length; l++) {
                var u = [].concat(e[l]);
                (r && i[u[0]]) ||
                  (void 0 !== c &&
                    (void 0 === u[5] ||
                      (u[1] = "@layer"
                        .concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
                        .concat(u[1], "}")),
                    (u[5] = c)),
                  n &&
                    (u[2]
                      ? ((u[1] = "@media "
                          .concat(u[2], " {")
                          .concat(u[1], "}")),
                        (u[2] = n))
                      : (u[2] = n)),
                  o &&
                    (u[4]
                      ? ((u[1] = "@supports ("
                          .concat(u[4], ") {")
                          .concat(u[1], "}")),
                        (u[4] = o))
                      : (u[4] = "".concat(o))),
                  t.push(u));
              }
            }),
            t
          );
        };
      },
      417: (e) => {
        e.exports = function (e, t) {
          return (
            t || (t = {}),
            e
              ? ((e = String(e.__esModule ? e.default : e)),
                /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                t.hash && (e += t.hash),
                /["'() \t\n]|(%20)/.test(e) || t.needQuotes
                  ? '"'.concat(
                      e.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : e)
              : e
          );
        };
      },
      601: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      72: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var c = {}, i = [], a = 0; a < e.length; a++) {
            var d = e[a],
              l = r.base ? d[0] + r.base : d[0],
              u = c[l] || 0,
              s = "".concat(l, " ").concat(u);
            c[l] = u + 1;
            var p = n(s),
              f = {
                css: d[1],
                media: d[2],
                sourceMap: d[3],
                supports: d[4],
                layer: d[5],
              };
            if (-1 !== p) t[p].references++, t[p].updater(f);
            else {
              var m = o(f, r);
              (r.byIndex = a),
                t.splice(a, 0, { identifier: s, updater: m, references: 1 });
            }
            i.push(s);
          }
          return i;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var c = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < c.length; i++) {
              var a = n(c[i]);
              t[a].references--;
            }
            for (var d = r(e, o), l = 0; l < c.length; l++) {
              var u = n(c[l]);
              0 === t[u].references && (t[u].updater(), t.splice(u, 1));
            }
            c = d;
          };
        };
      },
      659: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      540: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      56: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      825: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var c = n.sourceMap;
                c &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(c)))),
                      " */"
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      113: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      398: (e, t, n) => {
        e.exports = n.p + "23a3a3f01146df709ffd.jpg";
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var c = (t[r] = { id: r, exports: {} });
    return e[r](c, c.exports, n), c.exports;
  }
  (n.m = e),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e;
      n.g.importScripts && (e = n.g.location + "");
      var t = n.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var r = t.getElementsByTagName("script");
        if (r.length)
          for (var o = r.length - 1; o > -1 && (!e || !/^http(s?):/.test(e)); )
            e = r[o--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = e);
    })(),
    (n.b = document.baseURI || self.location.href),
    (n.nc = void 0),
    (() => {
      var e = n(72),
        t = n.n(e),
        r = n(825),
        o = n.n(r),
        c = n(659),
        i = n.n(c),
        a = n(56),
        d = n.n(a),
        l = n(540),
        u = n.n(l),
        s = n(113),
        p = n.n(s),
        f = n(208),
        m = {};
      (m.styleTagTransform = p()),
        (m.setAttributes = d()),
        (m.insert = i().bind(null, "head")),
        (m.domAPI = o()),
        (m.insertStyleElement = u()),
        t()(f.A, m),
        f.A && f.A.locals && f.A.locals;
      let h = 0;
      async function y(e) {
        try {
          const t = await fetch(
              `https://api.weatherapi.com/v1/forecast.json?key=e9c674b0342042a48b0160004240505&q=${e}&days=3`,
              { mode: "cors" }
            ),
            n = await t.json();
          let r = document.querySelector("#city"),
            o = document.querySelector("#temperature").children[0],
            c = document.querySelector("#humidity").children[1],
            i = document.querySelector("#windSpeed").children[1],
            a = document.querySelector("#pressure").children[1];
          (r.textContent = n.location.name),
            (o.textContent = n.current.temp_c + "°C"),
            (c.textContent = n.current.humidity),
            (i.textContent = n.current.wind_kph),
            (a.textContent = n.current.pressure_mb),
            (document.querySelector("input").value = ""),
            (document.querySelector("#icon").src = n.current.condition.icon);
          let d = document.querySelector("#container");
          d.innerHTML = "";
          let l = n.forecast.forecastday[0].hour;
          for (let e = 0; e < l.length; e++) {
            let t = document.createElement("div");
            t.setAttribute("class", "card");
            let n = document.createElement("p");
            n.setAttribute("class", "time"),
              (n.textContent = l[e].time.slice(-5)),
              t.appendChild(n);
            let r = document.createElement("img");
            (r.src = l[e].condition.icon), t.appendChild(r);
            let o = document.createElement("p");
            o.setAttribute("class", "hourTemp"),
              (o.textContent = l[e].temp_c + "°C"),
              t.appendChild(o),
              d.appendChild(t);
          }
          let u = n.forecast;
          for (let e = 0; e < 3; e++) {
            let t = document.querySelector(`#day${e}`);
            (t.children[0].textContent = u.forecastday[e].date.slice(-5)),
              (t.children[1].src = u.forecastday[e].day.condition.icon),
              (t.children[2].textContent = `${u.forecastday[e].day.mintemp_c}°C - ${u.forecastday[e].day.maxtemp_c}°C`);
          }
        } catch (e) {
          const t = await fetch(
              "https://api.weatherapi.com/v1/forecast.json?key=e9c674b0342042a48b0160004240505&q=Moscow&days=3",
              { mode: "cors" }
            ),
            n = await t.json();
          let r = document.querySelector("#city"),
            o = document.querySelector("#temperature").children[0],
            c = document.querySelector("#humidity").children[1],
            i = document.querySelector("#windSpeed").children[1],
            a = document.querySelector("#pressure").children[1];
          (r.textContent = n.location.name),
            (o.textContent = n.current.temp_c + "°C"),
            (c.textContent = n.current.humidity),
            (i.textContent = n.current.wind_kph),
            (a.textContent = n.current.pressure_mb),
            (document.querySelector("input").value = ""),
            (document.querySelector("#icon").src = n.current.condition.icon);
          let d = document.querySelector("#container");
          d.innerHTML = "";
          let l = n.forecast.forecastday[0].hour;
          for (let e = 0; e < l.length; e++) {
            let t = document.createElement("div");
            t.setAttribute("class", "card");
            let n = document.createElement("p");
            n.setAttribute("class", "time"),
              (n.textContent = l[e].time.slice(-5)),
              t.appendChild(n);
            let r = document.createElement("img");
            (r.src = l[e].condition.icon), t.appendChild(r);
            let o = document.createElement("p");
            o.setAttribute("class", "hourTemp"),
              (o.textContent = l[e].temp_c + "°C"),
              t.appendChild(o),
              d.appendChild(t);
          }
          let u = n.forecast;
          for (let e = 0; e < 3; e++) {
            let t = document.querySelector(`#day${e}`);
            (t.children[0].textContent = u.forecastday[e].date),
              (t.children[1].src = u.forecastday[e].day.condition.icon),
              (t.children[2].textContent = `${u.forecastday[e].day.mintemp_c} - ${u.forecastday[e].day.maxtemp_c}`);
          }
        }
      }
      y("Moscow"),
        document.querySelector("button").addEventListener("click", function () {
          document.querySelector("input").value &&
            y(document.querySelector("input").value);
        }),
        document
          .querySelector("form")
          .addEventListener("keydown", function (e) {
            13 == e.keyCode && e.preventDefault();
          }),
        document.addEventListener("keyup", (e) => {
          "Enter" === e.code &&
            document.querySelector("input").value &&
            y(document.querySelector("input").value);
        }),
        document.querySelector("#left").addEventListener("click", function () {
          !(function () {
            if (h < 0) {
              const e = document.querySelector("#container");
              (h += 900), (e.style.transform = `translateX(${h}px)`);
            }
          })();
        }),
        document.querySelector("#right").addEventListener("click", function () {
          !(function () {
            if (h > -2700) {
              const e = document.querySelector("#container");
              (h -= 900), (e.style.transform = `translateX(${h}px)`);
            }
          })();
        });
    })();
})();
