(this.webpackJsonpvideo = this.webpackJsonpvideo || []).push([
  [0],
  {
    114: function (e, t, n) {
      e.exports = n(1200);
    },
    1192: function (e, t, n) {},
    1197: function (e, t, n) {},
    1200: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        o = n.n(a),
        r = n(16),
        i = n.n(r),
        c = n(38),
        l = n(39),
        s = n(42),
        d = n(41),
        u = n(108),
        m = n(68),
        h = n.n(m),
        g = n(88),
        f = n(89),
        v = n.n(f),
        p = n(90),
        b = n.n(p),
        w = n(1224),
        y = n(1220),
        S = n(1221),
        E = n(1222),
        C = n(97),
        k = n.n(C),
        x = n(98),
        O = n.n(x),
        M = n(100),
        j = n.n(M),
        A = n(101),
        D = n.n(A),
        T = n(102),
        U = n.n(T),
        V = n(103),
        N = n.n(V),
        W = n(99),
        F = n.n(W),
        L = n(104),
        J = n.n(L),
        P = n(1223),
        R = (n(1190), n(1225)),
        B = n(44),
        H = (n(1191), n(1192), {}),
        I = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }] },
        q = null,
        z = null,
        Q = 0,
        Y = (function (e) {
          Object(s.a)(n, e);
          var t = Object(d.a)(n);
          function n(e) {
            var a;
            return (
              Object(c.a)(this, n),
              ((a = t.call(this, e)).getPermissions = Object(g.a)(
                h.a.mark(function e() {
                  return h.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              navigator.mediaDevices
                                .getUserMedia({ video: !0 })
                                .then(function () {
                                  return (a.videoAvailable = !0);
                                })
                                .catch(function () {
                                  return (a.videoAvailable = !1);
                                })
                            );
                          case 3:
                            return (
                              (e.next = 5),
                              navigator.mediaDevices
                                .getUserMedia({ audio: !0 })
                                .then(function () {
                                  return (a.audioAvailable = !0);
                                })
                                .catch(function () {
                                  return (a.audioAvailable = !1);
                                })
                            );
                          case 5:
                            navigator.mediaDevices.getDisplayMedia
                              ? a.setState({ screenAvailable: !0 })
                              : a.setState({ screenAvailable: !1 }),
                              (a.videoAvailable || a.audioAvailable) &&
                                navigator.mediaDevices
                                  .getUserMedia({
                                    video: a.videoAvailable,
                                    audio: a.audioAvailable,
                                  })
                                  .then(function (e) {
                                    (window.localStream = e),
                                      (a.localVideoref.current.srcObject = e);
                                  })
                                  .then(function (e) {})
                                  .catch(function (e) {
                                    return console.log(e);
                                  }),
                              (e.next = 12);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0);
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 9]]
                  );
                })
              )),
              (a.getMedia = function () {
                a.setState(
                  { video: a.videoAvailable, audio: a.audioAvailable },
                  function () {
                    a.getUserMedia(), a.connectToSocketServer();
                  }
                );
              }),
              (a.getUserMedia = function () {
                if (
                  (a.state.video && a.videoAvailable) ||
                  (a.state.audio && a.audioAvailable)
                )
                  navigator.mediaDevices
                    .getUserMedia({
                      video: a.state.video,
                      audio: a.state.audio,
                    })
                    .then(a.getUserMediaSuccess)
                    .then(function (e) {})
                    .catch(function (e) {
                      return console.log(e);
                    });
                else
                  try {
                    a.localVideoref.current.srcObject
                      .getTracks()
                      .forEach(function (e) {
                        return e.stop();
                      });
                  } catch (e) {}
              }),
              (a.getUserMediaSuccess = function (e) {
                try {
                  window.localStream.getTracks().forEach(function (e) {
                    return e.stop();
                  });
                } catch (o) {
                  console.log(o);
                }
                (window.localStream = e),
                  (a.localVideoref.current.srcObject = e);
                var t = function (e) {
                  if (e === z) return "continue";
                  H[e].addStream(window.localStream),
                    H[e].createOffer().then(function (t) {
                      H[e]
                        .setLocalDescription(t)
                        .then(function () {
                          q.emit(
                            "signal",
                            e,
                            JSON.stringify({ sdp: H[e].localDescription })
                          );
                        })
                        .catch(function (e) {
                          return console.log(e);
                        });
                    });
                };
                for (var n in H) t(n);
                e.getTracks().forEach(function (e) {
                  return (e.onended = function () {
                    a.setState({ video: !1, audio: !1 }, function () {
                      try {
                        a.localVideoref.current.srcObject
                          .getTracks()
                          .forEach(function (e) {
                            return e.stop();
                          });
                      } catch (o) {
                        console.log(o);
                      }
                      (window.localStream = (function () {
                        var e;
                        return new MediaStream([
                          (e = a).black.apply(e, arguments),
                          a.silence(),
                        ]);
                      })()),
                        (a.localVideoref.current.srcObject =
                          window.localStream);
                      var e = function (e) {
                        H[e].addStream(window.localStream),
                          H[e].createOffer().then(function (t) {
                            H[e]
                              .setLocalDescription(t)
                              .then(function () {
                                q.emit(
                                  "signal",
                                  e,
                                  JSON.stringify({ sdp: H[e].localDescription })
                                );
                              })
                              .catch(function (e) {
                                return console.log(e);
                              });
                          });
                      };
                      for (var t in H) e(t);
                    });
                  });
                });
              }),
              (a.getDislayMedia = function () {
                a.state.screen &&
                  navigator.mediaDevices.getDisplayMedia &&
                  navigator.mediaDevices
                    .getDisplayMedia({ video: !0, audio: !0 })
                    .then(a.getDislayMediaSuccess)
                    .then(function (e) {})
                    .catch(function (e) {
                      return console.log(e);
                    });
              }),
              (a.getDislayMediaSuccess = function (e) {
                try {
                  window.localStream.getTracks().forEach(function (e) {
                    return e.stop();
                  });
                } catch (o) {
                  console.log(o);
                }
                (window.localStream = e),
                  (a.localVideoref.current.srcObject = e);
                var t = function (e) {
                  if (e === z) return "continue";
                  H[e].addStream(window.localStream),
                    H[e].createOffer().then(function (t) {
                      H[e]
                        .setLocalDescription(t)
                        .then(function () {
                          q.emit(
                            "signal",
                            e,
                            JSON.stringify({ sdp: H[e].localDescription })
                          );
                        })
                        .catch(function (e) {
                          return console.log(e);
                        });
                    });
                };
                for (var n in H) t(n);
                e.getTracks().forEach(function (e) {
                  return (e.onended = function () {
                    a.setState({ screen: !1 }, function () {
                      try {
                        a.localVideoref.current.srcObject
                          .getTracks()
                          .forEach(function (e) {
                            return e.stop();
                          });
                      } catch (o) {
                        console.log(o);
                      }
                      (window.localStream = (function () {
                        var e;
                        return new MediaStream([
                          (e = a).black.apply(e, arguments),
                          a.silence(),
                        ]);
                      })()),
                        (a.localVideoref.current.srcObject =
                          window.localStream),
                        a.getUserMedia();
                    });
                  });
                });
              }),
              (a.gotMessageFromServer = function (e, t) {
                var n = JSON.parse(t);
                e !== z &&
                  (n.sdp &&
                    H[e]
                      .setRemoteDescription(new RTCSessionDescription(n.sdp))
                      .then(function () {
                        "offer" === n.sdp.type &&
                          H[e]
                            .createAnswer()
                            .then(function (t) {
                              H[e]
                                .setLocalDescription(t)
                                .then(function () {
                                  q.emit(
                                    "signal",
                                    e,
                                    JSON.stringify({
                                      sdp: H[e].localDescription,
                                    })
                                  );
                                })
                                .catch(function (e) {
                                  return console.log(e);
                                });
                            })
                            .catch(function (e) {
                              return console.log(e);
                            });
                      })
                      .catch(function (e) {
                        return console.log(e);
                      }),
                  n.ice &&
                    H[e]
                      .addIceCandidate(new RTCIceCandidate(n.ice))
                      .catch(function (e) {
                        return console.log(e);
                      }));
              }),
              (a.changeCssVideos = function (e) {
                var t = "30%";
                (30 * e.offsetWidth) / 100 < 300 && (t = "300px");
                var n = String(100 / Q) + "%",
                  a = "";
                0 === Q || 1 === Q
                  ? ((a = "100%"), (n = "100%"))
                  : 2 === Q
                  ? ((a = "45%"), (n = "100%"))
                  : 3 === Q || 4 === Q
                  ? ((a = "35%"), (n = "50%"))
                  : (a = String(100 / Q) + "%");
                for (
                  var o = e.querySelectorAll("video"), r = 0;
                  r < o.length;
                  ++r
                )
                  (o[r].style.minWidth = t),
                    (o[r].style.minHeight = "40%"),
                    o[r].style.setProperty("width", a),
                    o[r].style.setProperty("height", n);
                return { minWidth: t, minHeight: "40%", width: a, height: n };
              }),
              (a.connectToSocketServer = function () {
                (q = v.a.connect("https://video.sebastienbiollo.com", {
                  secure: !0,
                })).on("signal", a.gotMessageFromServer),
                  q.on("connect", function () {
                    q.emit("join-call", window.location.href),
                      (z = q.id),
                      q.on("chat-message", a.addMessage),
                      q.on("user-left", function (e) {
                        var t = document.querySelector(
                          '[data-socket="'.concat(e, '"]')
                        );
                        if (null !== t) {
                          Q--, t.parentNode.removeChild(t);
                          var n = document.getElementById("main");
                          a.changeCssVideos(n);
                        }
                      }),
                      q.on("user-joined", function (e, t) {
                        if (
                          (t.forEach(function (e) {
                            if (
                              ((H[e] = new RTCPeerConnection(I)),
                              (H[e].onicecandidate = function (t) {
                                null != t.candidate &&
                                  q.emit(
                                    "signal",
                                    e,
                                    JSON.stringify({ ice: t.candidate })
                                  );
                              }),
                              (H[e].onaddstream = function (n) {
                                var o = document.querySelector(
                                  '[data-socket="'.concat(e, '"]')
                                );
                                if (null !== o) o.srcObject = n.stream;
                                else {
                                  Q = t.length;
                                  var r = document.getElementById("main"),
                                    i = a.changeCssVideos(r),
                                    c = document.createElement("video"),
                                    l = {
                                      minWidth: i.minWidth,
                                      minHeight: i.minHeight,
                                      maxHeight: "100%",
                                      margin: "10px",
                                      borderStyle: "solid",
                                      borderColor: "#bdbdbd",
                                      objectFit: "fill",
                                    };
                                  for (var s in l) c.style[s] = l[s];
                                  c.style.setProperty("width", i.width),
                                    c.style.setProperty("height", i.height),
                                    c.setAttribute("data-socket", e),
                                    (c.srcObject = n.stream),
                                    (c.autoplay = !0),
                                    (c.playsinline = !0),
                                    r.appendChild(c);
                                }
                              }),
                              void 0 !== window.localStream &&
                                null !== window.localStream)
                            )
                              H[e].addStream(window.localStream);
                            else {
                              (window.localStream = (function () {
                                var e;
                                return new MediaStream([
                                  (e = a).black.apply(e, arguments),
                                  a.silence(),
                                ]);
                              })()),
                                H[e].addStream(window.localStream);
                            }
                          }),
                          e === z)
                        ) {
                          var n = function (e) {
                            if (e === z) return "continue";
                            try {
                              H[e].addStream(window.localStream);
                            } catch (t) {}
                            H[e].createOffer().then(function (t) {
                              H[e]
                                .setLocalDescription(t)
                                .then(function () {
                                  q.emit(
                                    "signal",
                                    e,
                                    JSON.stringify({
                                      sdp: H[e].localDescription,
                                    })
                                  );
                                })
                                .catch(function (e) {
                                  return console.log(e);
                                });
                            });
                          };
                          for (var o in H) n(o);
                        }
                      });
                  });
              }),
              (a.silence = function () {
                var e = new AudioContext(),
                  t = e.createOscillator(),
                  n = t.connect(e.createMediaStreamDestination());
                return (
                  t.start(),
                  e.resume(),
                  Object.assign(n.stream.getAudioTracks()[0], { enabled: !1 })
                );
              }),
              (a.black = function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = e.width,
                  n = void 0 === t ? 640 : t,
                  a = e.height,
                  o = void 0 === a ? 480 : a,
                  r = Object.assign(document.createElement("canvas"), {
                    width: n,
                    height: o,
                  });
                r.getContext("2d").fillRect(0, 0, n, o);
                var i = r.captureStream();
                return Object.assign(i.getVideoTracks()[0], { enabled: !1 });
              }),
              (a.handleVideo = function () {
                return a.setState({ video: !a.state.video }, function () {
                  return a.getUserMedia();
                });
              }),
              (a.handleAudio = function () {
                return a.setState({ audio: !a.state.audio }, function () {
                  return a.getUserMedia();
                });
              }),
              (a.handleScreen = function () {
                return a.setState({ screen: !a.state.screen }, function () {
                  return a.getDislayMedia();
                });
              }),
              (a.handleEndCall = function () {
                try {
                  a.localVideoref.current.srcObject
                    .getTracks()
                    .forEach(function (e) {
                      return e.stop();
                    });
                } catch (e) {}
                window.location.href = "/";
              }),
              (a.openChat = function () {
                return a.setState({ showModal: !0, newmessages: 0 });
              }),
              (a.closeChat = function () {
                return a.setState({ showModal: !1 });
              }),
              (a.handleMessage = function (e) {
                return a.setState({ message: e.target.value });
              }),
              (a.addMessage = function (e, t, n) {
                a.setState(function (n) {
                  return {
                    messages: [].concat(Object(u.a)(n.messages), [
                      { sender: t, data: e },
                    ]),
                  };
                }),
                  n !== z &&
                    a.setState({ newmessages: a.state.newmessages + 1 });
              }),
              (a.handleUsername = function (e) {
                return a.setState({ username: e.target.value });
              }),
              (a.sendMessage = function () {
                q.emit("chat-message", a.state.message, a.state.username),
                  a.setState({ message: "", sender: a.state.username });
              }),
              (a.copyUrl = function () {
                var e = window.location.href;
                if (navigator.clipboard)
                  navigator.clipboard.writeText(e).then(
                    function () {
                      P.b.success("Link copiado com sucesso!");
                    },
                    function () {
                      P.b.error("Failed to copy");
                    }
                  );
                else {
                  var t = document.createElement("textarea");
                  (t.value = e),
                    document.body.appendChild(t),
                    t.focus(),
                    t.select();
                  try {
                    document.execCommand("copy"),
                      P.b.success("Link copiado com sucesso!");
                  } catch (n) {
                    P.b.error("Failed to copy");
                  }
                  document.body.removeChild(t);
                }
              }),
              (a.connect = function () {
                return a.setState({ askForUsername: !1 }, function () {
                  return a.getMedia();
                });
              }),
              (a.isChrome = function () {
                var e = (
                    navigator &&
                    (navigator.userAgent || "")
                  ).toLowerCase(),
                  t = (navigator && (navigator.vendor || "")).toLowerCase();
                return (
                  null !==
                  (/google inc/.test(t)
                    ? e.match(/(?:chrome|crios)\/(\d+)/)
                    : null)
                );
              }),
              (a.localVideoref = o.a.createRef()),
              (a.videoAvailable = !1),
              (a.audioAvailable = !1),
              (a.state = {
                video: !1,
                audio: !1,
                screen: !1,
                showModal: !1,
                screenAvailable: !1,
                messages: [],
                message: "",
                newmessages: 0,
                askForUsername: !0,
                username: b.a.internet.userName(),
              }),
              (H = {}),
              a.getPermissions(),
              a
            );
          }
          return (
            Object(l.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return o.a.createElement(
                    "div",
                    null,
                    !0 === this.state.askForUsername
                      ? o.a.createElement(
                          "div",
                          null,
                          o.a.createElement(
                            "div",
                            {
                              style: {
                                background: "white",
                                width: "30%",
                                height: "auto",
                                padding: "20px",
                                minWidth: "400px",
                                textAlign: "center",
                                margin: "auto",
                                marginTop: "50px",
                                justifyContent: "center",
                              },
                            },
                            o.a.createElement(
                              "p",
                              {
                                style: {
                                  margin: 0,
                                  fontWeight: "bold",
                                  paddingRight: "50px",
                                },
                              },
                              "Qual a sua gra\xe7a (nome)"
                            ),
                            o.a.createElement(w.a, {
                              placeholder: "Username",
                              value: this.state.username,
                              onChange: function (t) {
                                return e.handleUsername(t);
                              },
                            }),
                            o.a.createElement(
                              y.a,
                              {
                                variant: "contained",
                                color: "primary",
                                onClick: this.connect,
                                style: { margin: "20px" },
                              },
                              "Conectar"
                            )
                          ),
                          o.a.createElement(
                            "div",
                            {
                              style: {
                                justifyContent: "center",
                                textAlign: "center",
                                paddingTop: "40px",
                              },
                            },
                            o.a.createElement("video", {
                              id: "my-video",
                              ref: this.localVideoref,
                              autoPlay: !0,
                              muted: !0,
                              style: {
                                borderStyle: "solid",
                                borderColor: "#bdbdbd",
                                objectFit: "fill",
                                width: "60%",
                                height: "30%",
                              },
                            })
                          )
                        )
                      : o.a.createElement(
                          "div",
                          null,
                          o.a.createElement(
                            "div",
                            {
                              className: "btn-down",
                              style: {
                                backgroundColor: "whitesmoke",
                                color: "whitesmoke",
                                textAlign: "center",
                              },
                            },
                            o.a.createElement(
                              S.a,
                              {
                                style: { color: "#424242" },
                                onClick: this.handleVideo,
                              },
                              !0 === this.state.video
                                ? o.a.createElement(k.a, null)
                                : o.a.createElement(O.a, null)
                            ),
                            o.a.createElement(
                              S.a,
                              {
                                style: { color: "#f44336" },
                                onClick: this.handleEndCall,
                              },
                              o.a.createElement(F.a, null)
                            ),
                            o.a.createElement(
                              S.a,
                              {
                                style: { color: "#424242" },
                                onClick: this.handleAudio,
                              },
                              !0 === this.state.audio
                                ? o.a.createElement(j.a, null)
                                : o.a.createElement(D.a, null)
                            ),
                            !0 === this.state.screenAvailable
                              ? o.a.createElement(
                                  S.a,
                                  {
                                    style: { color: "#424242" },
                                    onClick: this.handleScreen,
                                  },
                                  !0 === this.state.screen
                                    ? o.a.createElement(U.a, null)
                                    : o.a.createElement(N.a, null)
                                )
                              : null,
                            o.a.createElement(
                              E.a,
                              {
                                badgeContent: this.state.newmessages,
                                max: 999,
                                color: "secondary",
                                onClick: this.openChat,
                              },
                              o.a.createElement(
                                S.a,
                                {
                                  style: { color: "#424242" },
                                  onClick: this.openChat,
                                },
                                o.a.createElement(J.a, null)
                              )
                            )
                          ),
                          o.a.createElement(
                            B.a,
                            {
                              show: this.state.showModal,
                              onHide: this.closeChat,
                              style: { zIndex: "999999" },
                            },
                            o.a.createElement(
                              B.a.Header,
                              { closeButton: !0 },
                              o.a.createElement(B.a.Title, null, "Mensagens")
                            ),
                            o.a.createElement(
                              B.a.Body,
                              {
                                style: {
                                  overflow: "auto",
                                  overflowY: "auto",
                                  height: "400px",
                                  textAlign: "left",
                                },
                              },
                              this.state.messages.length > 0
                                ? this.state.messages.map(function (e, t) {
                                    return o.a.createElement(
                                      "div",
                                      { key: t, style: { textAlign: "left" } },
                                      o.a.createElement(
                                        "p",
                                        { style: { wordBreak: "break-all" } },
                                        o.a.createElement("b", null, e.sender),
                                        ": ",
                                        e.data
                                      )
                                    );
                                  })
                                : o.a.createElement(
                                    "p",
                                    null,
                                    "Nenhuma mensagem"
                                  )
                            ),
                            o.a.createElement(
                              B.a.Footer,
                              { className: "div-send-msg" },
                              o.a.createElement(w.a, {
                                placeholder: "Digite algo",
                                value: this.state.message,
                                onChange: function (t) {
                                  return e.handleMessage(t);
                                },
                              }),
                              o.a.createElement(
                                y.a,
                                {
                                  variant: "contained",
                                  color: "primary",
                                  onClick: this.sendMessage,
                                },
                                "Enviar"
                              )
                            )
                          ),
                          o.a.createElement(
                            "div",
                            { className: "container" },
                            o.a.createElement(
                              "div",
                              { style: { paddingTop: "20px" } },
                              o.a.createElement(w.a, {
                                value: window.location.href,
                                disable: "true",
                              }),
                              o.a.createElement(
                                y.a,
                                {
                                  style: {
                                    backgroundColor: "#3f51b5",
                                    color: "whitesmoke",
                                    marginLeft: "20px",
                                    marginTop: "10px",
                                    width: "120px",
                                    fontSize: "10px",
                                  },
                                  onClick: this.copyUrl,
                                },
                                "Copiar link para convidar"
                              )
                            ),
                            o.a.createElement(
                              R.a,
                              {
                                id: "main",
                                className: "flex-container",
                                style: { margin: 0, padding: 0 },
                              },
                              o.a.createElement("video", {
                                id: "my-video",
                                ref: this.localVideoref,
                                autoPlay: !0,
                                muted: !0,
                                style: {
                                  borderStyle: "solid",
                                  borderColor: "#bdbdbd",
                                  margin: "10px",
                                  objectFit: "fill",
                                  width: "100%",
                                  height: "100%",
                                },
                              })
                            )
                          )
                        )
                  );
                },
              },
            ]),
            n
          );
        })(a.Component),
        $ =
          (n(1197),
          (function (e) {
            Object(s.a)(n, e);
            var t = Object(d.a)(n);
            function n(e) {
              var a;
              return (
                Object(c.a)(this, n),
                ((a = t.call(this, e)).handleChange = function (e) {
                  return a.setState({ url: e.target.value });
                }),
                (a.join = function () {
                  if ("" !== a.state.url) {
                    var e = a.state.url.split("/");
                    window.location.href = "/".concat(e[e.length - 1]);
                  } else {
                    e = Math.random().toString(36).substring(2, 7);
                    window.location.href = "/".concat(e);
                  }
                }),
                (a.state = {
                  url: (Math.random() + 1).toString(36).substring(7),
                }),
                a
              );
            }
            return (
              Object(l.a)(n, [
                {
                  key: "render",
                  value: function () {
                    var e = this;
                    return o.a.createElement(
                      "div",
                      { className: "container2" },
                      o.a.createElement(
                        "div",
                        null,
                        o.a.createElement(
                          "h1",
                          { style: { fontSize: "45px" } },
                          "Video Chamada"
                        ),
                        o.a.createElement(
                          "p",
                          { style: { fontWeight: "200" } },
                          "Que tal bater um papo com algu\xe9m de forma diferente!"
                        )
                      ),
                      o.a.createElement(
                        "div",
                        {
                          style: {
                            background: "white",
                            width: "30%",
                            height: "auto",
                            padding: "20px",
                            minWidth: "400px",
                            textAlign: "center",
                            margin: "auto",
                            marginTop: "100px",
                          },
                        },
                        o.a.createElement(
                          "p",
                          {
                            style: {
                              margin: 0,
                              fontWeight: "bold",
                              paddingRight: "50px",
                            },
                          },
                          "C\xf3digo da Sala"
                        ),
                        o.a.createElement(w.a, {
                          value: this.state.url,
                          placeholder: "C\xf3digo",
                          onChange: function (t) {
                            return e.handleChange(t);
                          },
                        }),
                        o.a.createElement(
                          y.a,
                          {
                            variant: "contained",
                            color: "primary",
                            onClick: this.join,
                            style: { margin: "20px" },
                          },
                          "Entrar"
                        )
                      )
                    );
                  },
                },
              ]),
              n
            );
          })(a.Component)),
        G = n(105),
        K = n(14),
        X = (function (e) {
          Object(s.a)(n, e);
          var t = Object(d.a)(n);
          function n() {
            return Object(c.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(l.a)(n, [
              {
                key: "render",
                value: function () {
                  return o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(
                      G.a,
                      null,
                      o.a.createElement(
                        K.c,
                        null,
                        o.a.createElement(K.a, {
                          path: "/",
                          exact: !0,
                          component: $,
                        }),
                        o.a.createElement(K.a, { path: "/:url", component: Y })
                      )
                    )
                  );
                },
              },
            ]),
            n
          );
        })(a.Component);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      i.a.render(o.a.createElement(X, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
    141: function (e, t) {},
  },
  [[114, 1, 2]],
]);
//# sourceMappingURL=main.1aa60b3f.chunk.js.map
