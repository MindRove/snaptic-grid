import { j as e } from "../chunks/chunk-CJ3N3NZz.js";
import { r as s, c as N } from "../chunks/chunk-DqiMOxJH.js";
import { A as y } from "../chunks/chunk-BT9SVt7x.js";
import { N as P } from "../chunks/chunk-DlTfrWRN.js";
import { b as S } from "../chunks/chunk-DIxoL_4a.js";
const C = "https://neuralink.com/assets/static/webgrid.DBNJHc6q.png",
  $ = (l) =>
    s.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        ...l,
      },
      s.createElement(
        "g",
        null,
        s.createElement("path", {
          d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
        })
      )
    ),
  F = "750px",
  H = "751px",
  B = "900px",
  A = "901px",
  W = "1399px",
  D = "1400px",
  G = "600px",
  U = "_container_bdugn_11",
  Y = "_canvas_bdugn_22",
  L = {
    smallTabletMax: F,
    mobileMin: H,
    mobileMax: B,
    tabletMin: A,
    tabletMax: W,
    desktopMin: D,
    mobileMaxHeightLandscape: G,
    container: U,
    canvas: Y,
  },
  X = 0.002;
function R(l) {
  return Math.floor(Math.random() * l ** 2);
}
const O = ({ addTrial: l, gridSize: t }) => {
    const d = s.useRef(null),
      r = s.useRef(null),
      M = s.useRef(),
      i = s.useRef(null),
      m = s.useRef(R(t)),
      h = s.useRef(null),
      g = s.useRef(null);
    m.current >= t ** 2 && (m.current = R(t));
    const _ = s.useCallback(() => {
      M.current = requestAnimationFrame(_);
      const x = r.current.width,
        o = r.current.width / t,
        a = x * X;
      i.current.clearRect(0, 0, x, x),
        (i.current.lineWidth = a),
        (i.current.strokeStyle = "black");
      for (let c = 0; c <= t; c++) i.current.strokeRect(0, o * c - a / 2, x, a);
      for (let c = 0; c <= t; c++) i.current.strokeRect(o * c - a / 2, 0, a, x);
      m.current != null &&
        ((i.current.fillStyle = "rgb(10, 132, 255)"),
        i.current.fillRect(
          o * (m.current % t) + a / 2,
          o * Math.floor(m.current / t) + a / 2,
          o - a,
          o - a
        )),
        h.current != null &&
          ((i.current.fillStyle = "rgba(0,0,0,0.25)"),
          i.current.fillRect(
            o * (h.current % t) + a / 2,
            o * Math.floor(h.current / t) + a / 2,
            o - a,
            o - a
          )),
        g.current != null &&
          ((i.current.fillStyle = "red"),
          i.current.fillRect(
            o * (g.current % t) + a / 2,
            o * Math.floor(g.current / t) + a / 2,
            o - a,
            o - a
          ));
    }, [t]);
    return (
      s.useLayoutEffect(() => {
        if (r.current === null) return;
        (i.current = r.current.getContext("2d")),
          (M.current = requestAnimationFrame(_));
        function x() {
          const c = Math.min(d.current.clientWidth, d.current.clientHeight);
          (r.current.style.width = `${c}px`),
            (r.current.style.height = `${c}px`),
            (r.current.width = c * window.devicePixelRatio),
            (r.current.height = c * window.devicePixelRatio);
        }
        function o(c) {
          const { x: p, y: j, width: b } = r.current.getBoundingClientRect(),
            f = c.pageX - p,
            w = c.pageY - j;
          if (f > b || w > b || f < 0 || w < 0) {
            h.current = null;
            return;
          }
          const v = b / t;
          h.current = Math.floor(f / v) + t * Math.floor(w / v);
        }
        function a(c) {
          const { x: p, y: j, width: b } = r.current.getBoundingClientRect(),
            f = c.pageX - p - window.scrollX,
            w = c.pageY - j - window.scrollY,
            v = b / t;
          if (f > b || w > b || f < 0 || w < 0) {
            l([new Date(), !1]);
            return;
          }
          const u = Math.floor(f / v) + t * Math.floor(w / v);
          if (u === m.current) {
            l([new Date(), !0]);
            const T = m.current;
            for (; m.current == T; ) m.current = R(t);
          } else
            (g.current = u),
              l([new Date(), !1]),
              setTimeout(() => {
                g.current = null;
              }, 200);
        }
        return (
          window.addEventListener("resize", x),
          window.addEventListener("mousemove", o),
          window.addEventListener("pointerup", a),
          x(),
          () => {
            cancelAnimationFrame(M.current),
              window.removeEventListener("resize", x),
              window.removeEventListener("mousemove", o),
              window.removeEventListener("pointerup", a);
          }
        );
      }, [_, r, l, t]),
      e.jsx("div", {
        className: L.container,
        ref: d,
        children: e.jsx("canvas", {
          ref: r,
          className: L.canvas,
        }),
      })
    );
  },
  Z = "750px",
  J = "751px",
  V = "900px",
  K = "901px",
  Q = "1399px",
  z = "1400px",
  ee = "600px",
  te = "_root_1qxga_11",
  ne = "_showGrid_1qxga_20",
  se = "_dialog_1qxga_25",
  re = "_score_1qxga_51",
  ae = "_scoreParenthetical_1qxga_54",
  oe = "_timer_1qxga_64",
  ce = "_bigScore_1qxga_64",
  ie = "_smallScore_1qxga_69",
  le = "_leaving_1qxga_92",
  ue = "_animateIn_1qxga_97",
  de = "_animateOut_1qxga_1",
  me = "_blueTargets_1qxga_120",
  xe = "_gameplay_1qxga_126",
  ge = "_sidebar_1qxga_134",
  he = "_buttons_1qxga_145",
  pe = "_button_1qxga_145",
  be = "_xLogo_1qxga_154",
  n = {
    smallTabletMax: Z,
    mobileMin: J,
    mobileMax: V,
    tabletMin: K,
    tabletMax: Q,
    desktopMin: z,
    mobileMaxHeightLandscape: ee,
    root: te,
    showGrid: ne,
    dialog: se,
    score: re,
    scoreParenthetical: ae,
    timer: oe,
    bigScore: ce,
    smallScore: ie,
    leaving: le,
    animateIn: ue,
    animateOut: de,
    blueTargets: me,
    gameplay: xe,
    sidebar: ge,
    buttons: he,
    button: pe,
    xLogo: be,
  },
  E = 70,
  fe = ({ complete: l, startingTime: t }) => {
    const [d, r] = s.useState(E),
      M = s.useRef(l);
    s.useEffect(() => {
      function m() {
        const g = Math.round(
          Math.max(0, E - (new Date().getTime() - t.getTime()) / 1e3)
        );
        r(g), g === 0 && M.current();
      }
      const h = setInterval(m, 500);
      return () => {
        clearInterval(h);
      };
    }, [t]);
    const i = String(d % 60).padStart(2, "0");
    return e.jsxs(e.Fragment, {
      children: [String(Math.floor(d / 60)).padStart(2, "0"), ":", i],
    });
  };
function I(l, t) {
  return Math.max((Math.log2(t * t - 1) * l) / 60, 0);
}
const we = () => {
    const [l, t] = s.useState(!1);
    s.useEffect(() => {
      const u = () =>
        t(
          window.innerWidth <= S.mobileMin ||
            window.innerHeight <= S.mobileMaxHeightLandscape
        );
      return (
        u(),
        window.addEventListener("resize", u),
        () => window.removeEventListener("resize", u)
      );
    }, []);
    const d = l ? 12 : 30,
      [r, M] = s.useState(1),
      [i, m] = s.useState(0),
      [h, g] = s.useState([]),
      [_, x] = s.useState(0),
      o = I(_, d),
      [a, c] = s.useState(new Date()),
      p = s.useCallback(
        (u) => {
          m(r),
            setTimeout(() => {
              u === 2 && setTimeout(() => p(3), 2e3),
                u === 3 && (c(new Date()), g([]), x(0)),
                M(u);
            }, 300);
        },
        [r]
      );
    function j() {
      return e.jsxs("div", {
        className: N(n.dialog, {
          [n.leaving]: i === 1,
        }),
        children: [
          e.jsx("h1", {
            children: "Play Webgrid",
          }),
          e.jsx("p", {
            children:
              "At Neuralink, we use a game called Webgrid to test how precisely you can control a computer.",
          }),
          e.jsx("p", {
            children:
              "The goal of the game is to click targets on a grid as fast as possible while minimizing misclicks. Your score, measured in bits per second (BPS), is derived from net correct targets selected per minute (NTPM) and grid size.",
          }),
          e.jsxs("p", {
            children: [
              "Our ",
              e.jsx(y, {
                href: "/blog/prime-study-progress-update-user-experience/",
                text: "first clinical trial participant",
                color: "black",
                direction: "none",
                target: "_blank",
              }),
              " achieved a score of 9.51 BPS ",
              l
                ? e.jsx(e.Fragment, {
                    children: "on a 45×45 grid, ",
                  })
                : null,
              "controlling his computer with his brain.",
            ],
          }),
          e.jsx("p", {
            className: "bold",
            children: "How well can you do?",
          }),
          e.jsx(P, {
            large: !0,
            text: "Start Game",
            onClick: () => {
              p(2);
            },
          }),
        ],
      });
    }
    function b() {
      return e.jsx("div", {
        className: N(n.dialog, n.animateIn, {
          [n.leaving]: i == 2,
        }),
        children: e.jsxs("h2", {
          children: [
            "Click on the ",
            e.jsx("b", {
              className: n.blueTargets,
              children: "blue",
            }),
            " targets",
          ],
        }),
      });
    }
    const f = s.useCallback(() => {
      p(4);
    }, [p]);
    function w() {
      const u = h
          .filter((k) => Date.now() - k[0].getTime() < 6e4)
          .reduce((k, q) => k + (q[1] ? 1 : -1), 0),
        T = I(u, d);
      return (
        u > _ && x(u),
        e.jsxs("div", {
          className: N(n.gameplay, n.animateIn, {
            [n.leaving]: i == 3,
          }),
          children: [
            e.jsxs("div", {
              className: n.sidebar,
              children: [
                e.jsxs("div", {
                  className: n.timer,
                  children: [
                    " ",
                    e.jsx(fe, {
                      startingTime: a,
                      complete: f,
                    }),
                    " ",
                  ],
                }),
                e.jsxs("div", {
                  className: n.bigScore,
                  children: [
                    e.jsx("span", {
                      children: T.toFixed(2),
                    }),
                    " BPS",
                  ],
                }),
                e.jsxs("div", {
                  className: n.smallScore,
                  children: [
                    e.jsx("span", {
                      children: u,
                    }),
                    " NTPM · ",
                    d,
                    "×",
                    d,
                  ],
                }),
              ],
            }),
            e.jsx(O, {
              gridSize: d,
              addTrial: (k) => g([...h, k]),
            }),
          ],
        })
      );
    }
    function v() {
      const u = `I scored ${o.toFixed(
          2
        )} BPS (${_} NTPM) on @neuralink's cursor control benchmark${
          l ? ` in ${d}x${d} mode` : ""
        }:`,
        k = `https://twitter.com/intent/post?related=neuralink&text=${encodeURIComponent(
          u
        )}&url=${encodeURIComponent("https://neuralink.com/webgrid/")}`;
      return e.jsxs("div", {
        className: N(n.dialog, n.animateIn, {
          [n.leaving]: i == 4,
        }),
        children: [
          e.jsxs("div", {
            className: n.score,
            children: [
              e.jsx("h2", {
                children: "Your peak score:",
              }),
              e.jsxs("p", {
                children: [
                  o.toFixed(2),
                  " BPS ",
                  e.jsxs("span", {
                    className: n.scoreParenthetical,
                    children: ["(", _, " NTPM)"],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("p", {
            children: [
              "Using his ",
              e.jsx(y, {
                href: "/#n1",
                text: "N1 Implant",
                color: "black",
                direction: "none",
                target: "_blank",
              }),
              ", our first clinical trial participant reached 9.51 BPS ",
              l
                ? e.jsx(e.Fragment, {
                    children: "on a 45×45 grid using his",
                  })
                : e.jsx(e.Fragment, {
                    children: "on a",
                  }),
              " 16-inch MacBook Pro in fullscreen mode.",
            ],
          }),
          e.jsxs("div", {
            className: n.buttons,
            children: [
              e.jsx(P, {
                className: n.button,
                large: !0,
                text: "Play Again",
                onClick: () => p(3),
              }),
              e.jsx(P, {
                className: n.button,
                large: !0,
                text: e.jsxs(e.Fragment, {
                  children: [
                    "Share on ",
                    e.jsx($, {
                      className: n.xLogo,
                    }),
                  ],
                }),
                href: k,
                target: "_blank",
              }),
            ],
          }),
        ],
      });
    }
    return e.jsxs("div", {
      className: N(n.root, {
        [n.showGrid]: r === 1 || r === 2,
      }),
      children: [
        r === 1 && j(),
        r === 2 && b(),
        r === 3 && w(),
        r === 4 && v(),
      ],
    });
  },
  Ne = {
    title: "Play Webgrid | Neuralink",
    name: "webgrid",
    description:
      "Play Neuralink's Webgrid game and test your clicking skills against our first clinical trial participant's brain control.",
    disableFooter: !0,
    ogImage: {
      absoluteUrl: C,
      alt: "Neuralink: play Webgrid and test your clicking skills.",
      width: 1200,
      height: 630,
    },
  };
function Te() {
  return e.jsx(we, {});
}
export { Te as Page, Ne as documentProps };
