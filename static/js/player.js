if ("undefined" !== typeof myhkplayer && 0 >= document.location.host.indexOf("myhkw.cn")) throw Error(
    "\u660e\u6708\u6d69\u7a7a\u97f3\u4e50\u64ad\u653e\u5668\u5df2\u52a0\u8f7d\uff0c\u7981\u6b62\u91cd\u590d\u6dfb\u52a0\uff01"
);
if ("undefined" === typeof jQuery) throw console.log(
    "\n %c \u660e\u6708\u6d69\u7a7a\u97f3\u4e50\u64ad\u653e\u5668\u63d0\u793a\uff1a %c \u7f51\u7ad9\u6ca1\u6709\u52a0\u8f7djQuery\uff01\n",
    "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;"), Error(
    "\n\u89e3\u51b3\u65b9\u6cd51\uff1a\u8bf7\u767b\u5f55\u660e\u6708\u6d69\u7a7a\u97f3\u4e50\u64ad\u653e\u5668\u540e\u53f0\uff0c\u6253\u5f00\u64ad\u653e\u5668\u8bbe\u7f6e\u3010\u52a0\u8f7djQuery\u3011\n\u89e3\u51b3\u65b9\u6cd52\uff1a\u6253\u5f00\u7f51\u5740\uff1ahttps://www.bootcdn.cn/jquery/ \u627e\u5230\u3010jquery.min.js\u3011\uff0c\u590d\u5236<script>\u6807\u7b7e\uff0c\u6dfb\u52a0\u5230\u64ad\u653e\u5668\u4ee3\u7801\u4e0a\u65b9\u5373\u53ef\u3002"
);
(function ($) {
    eval(function (p, a, c, k, e, r) {
        e = function (c) {
            return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) :
                c.toString(36))
        };
        if (!''.replace(/^/, String)) {
            while (c--) r[e(c)] = k[c] || e(c);
            k = [function (e) {
                return r[e]
            }];
            e = function () {
                return '\\w+'
            };
            c = 1
        };
        while (c--)
            if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
        return p
    }(
        '9.1h=[];1i.1e.10({1f:2(){1g(4.O)1o(6 c 1j $(4).E("C"))"8"==c&&$(4).E("C").8.A()},1m:2(){6 c={8:$(4),j:$(5),14:1n,W:!1,D:!1,B:!1,y:0,z:0};Y.O&&(c=$.10({},c,Y[0]));c.8.E("C",c);6 e=$(4)[0],a=c.8,k=0,l=0,g=c.14;"1l"==$(4).Q("S")&&$(4).Q("S","1k");6 m=0,n=0;c.W?(a.o=2(b){m=q.r(c.j.16(),c.y);n=q.r(c.j.18(),c.z);b=19.1a[0];k=b.i-e.P;l=b.x-e.R;a.7("G",a.t);a.7("F",a.u);H!1},a.t=2(b){I=19.1a[0];b=I.i-k;6 d=I.i-l,f=e.11,h=e.13;0>b?b=0:b+f>m&&(b=m-f);0>d?d=0:d+h>n&&(d=n-h);c.D||(e.v.15=d+"w");c.B||(e.v.17=b+"w");g&&g(a[0],b,d,f,h);H!1},a.u=2(b){a.3("G");a.3("F");1d=!1;l=k=0;g&&g(a[0]);H!1},a.N=2(){a.7("1b",a.o)},a.A=2(){a.3("1b");a.3("G");a.3("F")}):(a.o=2(b){m=q.r(c.j.16(),c.y);n=q.r(c.j.18(),c.z);k=b.i-e.P;l=b.x-e.R;$(5).7("M",a.t);$(5).7("L",a.u);a[0].12?a[0].12():9.Z&&9.Z(s.X|s.V);b.K();b.J()},a.t=2(b){6 d=b.i-k,f=b.x-l,h=e.11,p=e.13;0>d?d=0:d+h>m&&(d=m-h);0>f?f=0:f+p>n&&(f=n-p);c.D||(e.v.15=f+"w");c.B||(e.v.17=d+"w");g&&g(a[0],d,f,h,p);b.K();b.J()},a.u=2(b){a[0].T?a[0].T():9.U&&9.U(s.X|s.V);$(5).3("M");$(5).3("L");l=k=0;g&&g(a[0]);b.K();b.J()},a.N=2(){a.7("1c",a.o)},a.A=2(){a.3("1c");$(5).3("M");$(5).3("L")});a.N()}});',
        62, 87,
        '||function|off|this|document|var|on|dragObj|window|||||||||clientX|parentObj|||||__start||Math|max|Event|__move|__end|style|px|clientY|maxWidth|maxHeight|dostop|lockY|options|lockX|data|touchend|touchmove|return|touch|preventDefault|stopPropagation|mouseup|mousemove|dostart|length|offsetLeft|css|offsetTop|position|releaseCapture|releaseEvents|MOUSEUP|isPhone|MOUSEMOVE|arguments|captureEvents|extend|offsetWidth|setCapture|offsetHeight|callback|top|width|left|height|event|targetTouches|touchstart|mousedown|_flag|fn|DragClose|if|timer|jQuery|in|relative|static|Drag|null|for'
            .split('|'), 0, {}))
})(jQuery);
/*mousewheel plugin*/
(function (a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        if (typeof exports === "object") {
            module.exports = a
        } else {
            a(jQuery)
        }
    }
}(function (c) {
    var d = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        k = ("onwheel" in document || document.documentMode >= 9) ? ["wheel"] : ["mousewheel", "DomMouseScroll",
            "MozMousePixelScroll"],
        h = Array.prototype.slice,
        j, b;
    if (c.event.fixHooks) {
        for (var e = d.length; e;) {
            c.event.fixHooks[d[--e]] = c.event.mouseHooks
        }
    }
    var f = c.event.special.mousewheel = {
        version: "3.1.9",
        setup: function () {
            if (this.addEventListener) {
                for (var m = k.length; m;) {
                    this.addEventListener(k[--m], l, false)
                }
            } else {
                this.onmousewheel = l
            }
            c.data(this, "mousewheel-line-height", f.getLineHeight(this));
            c.data(this, "mousewheel-page-height", f.getPageHeight(this))
        },
        teardown: function () {
            if (this.removeEventListener) {
                for (var m = k.length; m;) {
                    this.removeEventListener(k[--m], l, false)
                }
            } else {
                this.onmousewheel = null
            }
        },
        getLineHeight: function (i) {
            return parseInt(c(i)["offsetParent" in c.fn ? "offsetParent" : "parent"]().css("fontSize"),
                10)
        },
        getPageHeight: function (i) {
            return c(i).height()
        },
        settings: {
            adjustOldDeltas: true
        }
    };
    c.fn.extend({
        mousewheel: function (i) {
            return i ? this.bind("mousewheel", i) : this.trigger("mousewheel")
        },
        unmousewheel: function (i) {
            return this.unbind("mousewheel", i)
        }
    });

    function l(i) {
        var n = i || window.event,
            r = h.call(arguments, 1),
            t = 0,
            p = 0,
            o = 0,
            q = 0;
        i = c.event.fix(n);
        i.type = "mousewheel";
        if ("detail" in n) {
            o = n.detail * -1
        }
        if ("wheelDelta" in n) {
            o = n.wheelDelta
        }
        if ("wheelDeltaY" in n) {
            o = n.wheelDeltaY
        }
        if ("wheelDeltaX" in n) {
            p = n.wheelDeltaX * -1
        }
        if ("axis" in n && n.axis === n.HORIZONTAL_AXIS) {
            p = o * -1;
            o = 0
        }
        t = o === 0 ? p : o;
        if ("deltaY" in n) {
            o = n.deltaY * -1;
            t = o
        }
        if ("deltaX" in n) {
            p = n.deltaX;
            if (o === 0) {
                t = p * -1
            }
        }
        if (o === 0 && p === 0) {
            return
        }
        if (n.deltaMode === 1) {
            var s = c.data(this, "mousewheel-line-height");
            t *= s;
            o *= s;
            p *= s
        } else {
            if (n.deltaMode === 2) {
                var m = c.data(this, "mousewheel-page-height");
                t *= m;
                o *= m;
                p *= m
            }
        }
        q = Math.max(Math.abs(o), Math.abs(p));
        if (!b || q < b) {
            b = q;
            if (a(n, q)) {
                b /= 40
            }
        }
        if (a(n, q)) {
            t /= 40;
            p /= 40;
            o /= 40
        }
        t = Math[t >= 1 ? "floor" : "ceil"](t / b);
        p = Math[p >= 1 ? "floor" : "ceil"](p / b);
        o = Math[o >= 1 ? "floor" : "ceil"](o / b);
        i.deltaX = p;
        i.deltaY = o;
        i.deltaFactor = b;
        i.deltaMode = 0;
        r.unshift(i, t, p, o);
        if (j) {
            clearTimeout(j)
        }
        j = setTimeout(g, 200);
        return (c.event.dispatch || c.event.handle).apply(this, r)
    }

    function g() {
        b = null
    }

    function a(m, i) {
        return f.settings.adjustOldDeltas && m.type === "mousewheel" && i % 120 === 0
    }
}));
/*scrollbar plugin*/
(function (c) {
    var b = {
            init: function (e) {
                var f = {
                        set_width: false,
                        set_height: false,
                        horizontalScroll: false,
                        scrollInertia: 950,
                        mouseWheel: true,
                        mouseWheelPixels: "auto",
                        autoDraggerLength: true,
                        autoHideScrollbar: false,
                        alwaysShowScrollbar: false,
                        snapAmount: null,
                        snapOffset: 0,
                        scrollButtons: {
                            enable: false,
                            scrollType: "continuous",
                            scrollSpeed: "auto",
                            scrollAmount: 40
                        },
                        advanced: {
                            updateOnBrowserResize: true,
                            updateOnContentResize: false,
                            autoExpandHorizontalScroll: false,
                            autoScrollOnFocus: true,
                            normalizeMouseWheelDelta: false
                        },
                        contentTouchScroll: true,
                        callbacks: {
                            onScrollStart: function () {},
                            onScroll: function () {},
                            onTotalScroll: function () {},
                            onTotalScrollBack: function () {},
                            onTotalScrollOffset: 0,
                            onTotalScrollBackOffset: 0,
                            whileScrolling: function () {}
                        },
                        theme: "light"
                    },
                    e = c.extend(true, f, e);
                return this.each(function () {
                    var m = c(this);
                    if (e.set_width) {
                        m.css("width", e.set_width)
                    }
                    if (e.set_height) {
                        m.css("height", e.set_height)
                    }
                    if (!c(document).data("mCustomScrollbar-index")) {
                        c(document).data("mCustomScrollbar-index", "1")
                    } else {
                        var t = parseInt(c(document).data("mCustomScrollbar-index"));
                        c(document).data("mCustomScrollbar-index", t + 1)
                    }
                    m.wrapInner("<div class='mCustomScrollBox mCS-" + e.theme + "' id='mCSB_" + c(
                            document).data("mCustomScrollbar-index") +
                        "' style='position:relative; height:100%; overflow:hidden; max-width:100%;' />"
                    ).addClass("mCustomScrollbar _mCS_" + c(document).data("mCustomScrollbar-index"));
                    var g = m.children(".mCustomScrollBox");
                    if (e.horizontalScroll) {
                        g.addClass("mCSB_horizontal").wrapInner(
                            "<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />"
                        );
                        var k = g.children(".mCSB_h_wrapper");
                        k.wrapInner("<div class='mCSB_container' style='position:absolute; left:0;' />")
                            .children(".mCSB_container").css({
                            width: k.children().outerWidth(),
                            position: "relative"
                        }).unwrap()
                    } else {
                        g.wrapInner("<div class='mCSB_container' style='position:relative; top:0;' />")
                    }
                    var o = g.children(".mCSB_container");
                    if (c.support.touch) {
                        o.addClass("mCS_touch")
                    }
                    o.after(
                        "<div class='mCSB_scrollTools' style='position:absolute;'><div class='mCSB_draggerContainer'><div class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' style='position:relative;'></div></div><div class='mCSB_draggerRail'></div></div></div>"
                    );
                    var l = g.children(".mCSB_scrollTools"),
                        h = l.children(".mCSB_draggerContainer"),
                        q = h.children(".mCSB_dragger");
                    if (e.horizontalScroll) {
                        q.data("minDraggerWidth", q.width())
                    } else {
                        q.data("minDraggerHeight", q.height())
                    }
                    if (e.scrollButtons.enable) {
                        if (e.horizontalScroll) {
                            l.prepend("<a class='mCSB_buttonLeft' oncontextmenu='return false;'></a>").append(
                                "<a class='mCSB_buttonRight' oncontextmenu='return false;'></a>")
                        } else {
                            l.prepend("<a class='mCSB_buttonUp' oncontextmenu='return false;'></a>").append(
                                "<a class='mCSB_buttonDown' oncontextmenu='return false;'></a>")
                        }
                    }
                    g.bind("scroll", function () {
                        if (!m.is(".mCS_disabled")) {
                            g.scrollTop(0).scrollLeft(0)
                        }
                    });
                    m.data({
                        mCS_Init: true,
                        mCustomScrollbarIndex: c(document).data("mCustomScrollbar-index"),
                        horizontalScroll: e.horizontalScroll,
                        scrollInertia: e.scrollInertia,
                        scrollEasing: "mcsEaseOut",
                        mouseWheel: e.mouseWheel,
                        mouseWheelPixels: e.mouseWheelPixels,
                        autoDraggerLength: e.autoDraggerLength,
                        autoHideScrollbar: e.autoHideScrollbar,
                        alwaysShowScrollbar: e.alwaysShowScrollbar,
                        snapAmount: e.snapAmount,
                        snapOffset: e.snapOffset,
                        scrollButtons_enable: e.scrollButtons.enable,
                        scrollButtons_scrollType: e.scrollButtons.scrollType,
                        scrollButtons_scrollSpeed: e.scrollButtons.scrollSpeed,
                        scrollButtons_scrollAmount: e.scrollButtons.scrollAmount,
                        autoExpandHorizontalScroll: e.advanced.autoExpandHorizontalScroll,
                        autoScrollOnFocus: e.advanced.autoScrollOnFocus,
                        normalizeMouseWheelDelta: e.advanced.normalizeMouseWheelDelta,
                        contentTouchScroll: e.contentTouchScroll,
                        onScrollStart_Callback: e.callbacks.onScrollStart,
                        onScroll_Callback: e.callbacks.onScroll,
                        onTotalScroll_Callback: e.callbacks.onTotalScroll,
                        onTotalScrollBack_Callback: e.callbacks.onTotalScrollBack,
                        onTotalScroll_Offset: e.callbacks.onTotalScrollOffset,
                        onTotalScrollBack_Offset: e.callbacks.onTotalScrollBackOffset,
                        whileScrolling_Callback: e.callbacks.whileScrolling,
                        bindEvent_scrollbar_drag: false,
                        bindEvent_content_touch: false,
                        bindEvent_scrollbar_click: false,
                        bindEvent_mousewheel: false,
                        bindEvent_buttonsContinuous_y: false,
                        bindEvent_buttonsContinuous_x: false,
                        bindEvent_buttonsPixels_y: false,
                        bindEvent_buttonsPixels_x: false,
                        bindEvent_focusin: false,
                        bindEvent_autoHideScrollbar: false,
                        mCSB_buttonScrollRight: false,
                        mCSB_buttonScrollLeft: false,
                        mCSB_buttonScrollDown: false,
                        mCSB_buttonScrollUp: false
                    });
                    if (e.horizontalScroll) {
                        if (m.css("max-width") !== "none") {
                            if (!e.advanced.updateOnContentResize) {
                                e.advanced.updateOnContentResize = true
                            }
                        }
                    } else {
                        if (m.css("max-height") !== "none") {
                            var s = false,
                                r = parseInt(m.css("max-height"));
                            if (m.css("max-height").indexOf("%") >= 0) {
                                s = r, r = m.parent().height() * s / 100
                            }
                            m.css("overflow", "hidden");
                            g.css("max-height", r)
                        }
                    }
                    m.mCustomScrollbar("update");
                    if (e.advanced.updateOnBrowserResize) {
                        var i, j = c(window).width(),
                            u = c(window).height();
                        c(window).bind("resize." + m.data("mCustomScrollbarIndex"), function () {
                            if (i) {
                                clearTimeout(i)
                            }
                            i = setTimeout(function () {
                                if (!m.is(".mCS_disabled") && !m.is(".mCS_destroyed")) {
                                    var w = c(window).width(),
                                        v = c(window).height();
                                    if (j !== w || u !== v) {
                                        if (m.css("max-height") !== "none" && s) {
                                            g.css("max-height", m.parent().height() * s /
                                                100)
                                        }
                                        m.mCustomScrollbar("update");
                                        j = w;
                                        u = v
                                    }
                                }
                            }, 150)
                        })
                    }
                    if (e.advanced.updateOnContentResize) {
                        var p;
                        if (e.horizontalScroll) {
                            var n = o.outerWidth()
                        } else {
                            var n = o.outerHeight()
                        }
                        p = setInterval(function () {
                            if (e.horizontalScroll) {
                                if (e.advanced.autoExpandHorizontalScroll) {
                                    o.css({
                                        position: "absolute",
                                        width: "auto"
                                    }).wrap(
                                        "<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />"
                                    ).css({
                                        width: o.outerWidth(),
                                        position: "relative"
                                    }).unwrap()
                                }
                                var v = o.outerWidth()
                            } else {
                                var v = o.outerHeight()
                            }
                            if (v != n) {
                                m.mCustomScrollbar("update");
                                n = v
                            }
                        }, 300)
                    }
                })
            },
            update: function () {
                var n = c(this),
                    k = n.children(".mCustomScrollBox"),
                    q = k.children(".mCSB_container");
                q.removeClass("mCS_no_scrollbar");
                n.removeClass("mCS_disabled mCS_destroyed");
                k.scrollTop(0).scrollLeft(0);
                var y = k.children(".mCSB_scrollTools"),
                    o = y.children(".mCSB_draggerContainer"),
                    m = o.children(".mCSB_dragger");
                if (n.data("horizontalScroll")) {
                    var A = y.children(".mCSB_buttonLeft"),
                        t = y.children(".mCSB_buttonRight"),
                        f = k.width();
                    if (n.data("autoExpandHorizontalScroll")) {
                        q.css({
                            position: "absolute",
                            width: "auto"
                        }).wrap(
                            "<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />"
                        ).css({
                            width: q.outerWidth(),
                            position: "relative"
                        }).unwrap()
                    }
                    var z = q.outerWidth()
                } else {
                    var w = y.children(".mCSB_buttonUp"),
                        g = y.children(".mCSB_buttonDown"),
                        r = k.height(),
                        i = q.outerHeight()
                }
                if (i > r && !n.data("horizontalScroll")) {
                    y.css("display", "block");
                    var s = o.height();
                    if (n.data("autoDraggerLength")) {
                        var u = Math.round(r / i * s),
                            l = m.data("minDraggerHeight");
                        if (u <= l) {
                            m.css({
                                height: l
                            })
                        } else {
                            if (u >= s - 10) {
                                var p = s - 10;
                                m.css({
                                    height: p
                                })
                            } else {
                                m.css({
                                    height: u
                                })
                            }
                        }
                        m.children(".mCSB_dragger_bar").css({
                            "line-height": m.height() + "px"
                        })
                    }
                    var B = m.height(),
                        x = (i - r) / (s - B);
                    n.data("scrollAmount", x).mCustomScrollbar("scrolling", k, q, o, m, w, g, A, t);
                    var D = Math.abs(q.position().top);
                    n.mCustomScrollbar("scrollTo", D, {
                        scrollInertia: 0,
                        trigger: "internal"
                    })
                } else {
                    if (z > f && n.data("horizontalScroll")) {
                        y.css("display", "block");
                        var h = o.width();
                        if (n.data("autoDraggerLength")) {
                            var j = Math.round(f / z * h),
                                C = m.data("minDraggerWidth");
                            if (j <= C) {
                                m.css({
                                    width: C
                                })
                            } else {
                                if (j >= h - 10) {
                                    var e = h - 10;
                                    m.css({
                                        width: e
                                    })
                                } else {
                                    m.css({
                                        width: j
                                    })
                                }
                            }
                        }
                        var v = m.width(),
                            x = (z - f) / (h - v);
                        n.data("scrollAmount", x).mCustomScrollbar("scrolling", k, q, o, m, w, g, A, t);
                        var D = Math.abs(q.position().left);
                        n.mCustomScrollbar("scrollTo", D, {
                            scrollInertia: 0,
                            trigger: "internal"
                        })
                    } else {
                        k.unbind("mousewheel focusin");
                        if (n.data("horizontalScroll")) {
                            m.add(q).css("left", 0)
                        } else {
                            m.add(q).css("top", 0)
                        }
                        if (n.data("alwaysShowScrollbar")) {
                            if (!n.data("horizontalScroll")) {
                                m.css({
                                    height: o.height()
                                })
                            } else {
                                if (n.data("horizontalScroll")) {
                                    m.css({
                                        width: o.width()
                                    })
                                }
                            }
                        } else {
                            y.css("display", "none");
                            q.addClass("mCS_no_scrollbar")
                        }
                        n.data({
                            bindEvent_mousewheel: false,
                            bindEvent_focusin: false
                        })
                    }
                }
            },
            scrolling: function (i, q, n, k, A, f, D, w) {
                var l = c(this);
                if (!l.data("bindEvent_scrollbar_drag")) {
                    var o, p, C, z, e;
                    if (c.support.pointer) {
                        C = "pointerdown";
                        z = "pointermove";
                        e = "pointerup"
                    } else {
                        if (c.support.msPointer) {
                            C = "MSPointerDown";
                            z = "MSPointerMove";
                            e = "MSPointerUp"
                        }
                    }
                    if (c.support.pointer || c.support.msPointer) {
                        k.bind(C, function (K) {
                            K.preventDefault();
                            l.data({
                                on_drag: true
                            });
                            k.addClass("mCSB_dragger_onDrag");
                            var J = c(this),
                                M = J.offset(),
                                I = K.originalEvent.pageX - M.left,
                                L = K.originalEvent.pageY - M.top;
                            if (I < J.width() && I > 0 && L < J.height() && L > 0) {
                                o = L;
                                p = I
                            }
                        });
                        c(document).bind(z + "." + l.data("mCustomScrollbarIndex"), function (K) {
                            K.preventDefault();
                            if (l.data("on_drag")) {
                                var J = k,
                                    M = J.offset(),
                                    I = K.originalEvent.pageX - M.left,
                                    L = K.originalEvent.pageY - M.top;
                                G(o, p, L, I)
                            }
                        }).bind(e + "." + l.data("mCustomScrollbarIndex"), function (x) {
                            l.data({
                                on_drag: false
                            });
                            k.removeClass("mCSB_dragger_onDrag")
                        })
                    } else {
                        k.bind("mousedown touchstart", function (K) {
                            K.preventDefault();
                            K.stopImmediatePropagation();
                            var J = c(this),
                                N = J.offset(),
                                I, M;
                            if (K.type === "touchstart") {
                                var L = K.originalEvent.touches[0] || K.originalEvent.changedTouches[0];
                                I = L.pageX - N.left;
                                M = L.pageY - N.top
                            } else {
                                l.data({
                                    on_drag: true
                                });
                                k.addClass("mCSB_dragger_onDrag");
                                I = K.pageX - N.left;
                                M = K.pageY - N.top
                            }
                            if (I < J.width() && I > 0 && M < J.height() && M > 0) {
                                o = M;
                                p = I
                            }
                        }).bind("touchmove", function (K) {
                            K.preventDefault();
                            K.stopImmediatePropagation();
                            var N = K.originalEvent.touches[0] || K.originalEvent.changedTouches[0],
                                J = c(this),
                                M = J.offset(),
                                I = N.pageX - M.left,
                                L = N.pageY - M.top;
                            G(o, p, L, I)
                        });
                        c(document).bind("mousemove." + l.data("mCustomScrollbarIndex"), function (K) {
                            if (l.data("on_drag")) {
                                var J = k,
                                    M = J.offset(),
                                    I = K.pageX - M.left,
                                    L = K.pageY - M.top;
                                G(o, p, L, I)
                            }
                        }).bind("mouseup." + l.data("mCustomScrollbarIndex"), function (x) {
                            l.data({
                                on_drag: false
                            });
                            k.removeClass("mCSB_dragger_onDrag")
                        })
                    }
                    l.data({
                        bindEvent_scrollbar_drag: true
                    })
                }

                function G(J, K, L, I) {
                    if (l.data("horizontalScroll")) {
                        l.mCustomScrollbar("scrollTo", (k.position().left - (K)) + I, {
                            moveDragger: true,
                            trigger: "internal"
                        })
                    } else {
                        l.mCustomScrollbar("scrollTo", (k.position().top - (J)) + L, {
                            moveDragger: true,
                            trigger: "internal"
                        })
                    }
                }
                if (c.support.touch && l.data("contentTouchScroll")) {
                    if (!l.data("bindEvent_content_touch")) {
                        var m, E, s, t, v, F, H;
                        q.bind("touchstart", function (x) {
                            x.stopImmediatePropagation();
                            m = x.originalEvent.touches[0] || x.originalEvent.changedTouches[0];
                            E = c(this);
                            s = E.offset();
                            v = m.pageX - s.left;
                            t = m.pageY - s.top;
                            F = t;
                            H = v
                        });
                        q.bind("touchmove", function (x) {
                            x.preventDefault();
                            x.stopImmediatePropagation();
                            m = x.originalEvent.touches[0] || x.originalEvent.changedTouches[0];
                            E = c(this).parent();
                            s = E.offset();
                            v = m.pageX - s.left;
                            t = m.pageY - s.top;
                            if (l.data("horizontalScroll")) {
                                l.mCustomScrollbar("scrollTo", H - v, {
                                    trigger: "internal"
                                })
                            } else {
                                l.mCustomScrollbar("scrollTo", F - t, {
                                    trigger: "internal"
                                })
                            }
                        })
                    }
                }
                if (!l.data("bindEvent_scrollbar_click")) {
                    n.bind("click", function (I) {
                        var x = (I.pageY - n.offset().top) * l.data("scrollAmount"),
                            y = c(I.target);
                        if (l.data("horizontalScroll")) {
                            x = (I.pageX - n.offset().left) * l.data("scrollAmount")
                        }
                        if (y.hasClass("mCSB_draggerContainer") || y.hasClass("mCSB_draggerRail")) {
                            l.mCustomScrollbar("scrollTo", x, {
                                trigger: "internal",
                                scrollEasing: "draggerRailEase"
                            })
                        }
                    });
                    l.data({
                        bindEvent_scrollbar_click: true
                    })
                }
                if (l.data("mouseWheel")) {
                    if (!l.data("bindEvent_mousewheel")) {
                        i.bind("mousewheel", function (K, M) {
                            var J, I = l.data("mouseWheelPixels"),
                                x = Math.abs(q.position().top),
                                L = k.position().top,
                                y = n.height() - k.height();
                            if (l.data("normalizeMouseWheelDelta")) {
                                if (M < 0) {
                                    M = -1
                                } else {
                                    M = 1
                                }
                            }
                            if (I === "auto") {
                                I = 100 + Math.round(l.data("scrollAmount") / 2)
                            }
                            if (l.data("horizontalScroll")) {
                                L = k.position().left;
                                y = n.width() - k.width();
                                x = Math.abs(q.position().left)
                            }
                            if ((M > 0 && L !== 0) || (M < 0 && L !== y)) {
                                K.preventDefault();
                                K.stopImmediatePropagation()
                            }
                            J = x - (M * I);
                            l.mCustomScrollbar("scrollTo", J, {
                                trigger: "internal"
                            })
                        });
                        l.data({
                            bindEvent_mousewheel: true
                        })
                    }
                }
                if (l.data("scrollButtons_enable")) {
                    if (l.data("scrollButtons_scrollType") === "pixels") {
                        if (l.data("horizontalScroll")) {
                            w.add(D).unbind(
                                "mousedown touchstart MSPointerDown pointerdown mouseup MSPointerUp pointerup mouseout MSPointerOut pointerout touchend",
                                j, h);
                            l.data({
                                bindEvent_buttonsContinuous_x: false
                            });
                            if (!l.data("bindEvent_buttonsPixels_x")) {
                                w.bind("click", function (x) {
                                    x.preventDefault();
                                    r(Math.abs(q.position().left) + l.data("scrollButtons_scrollAmount"))
                                });
                                D.bind("click", function (x) {
                                    x.preventDefault();
                                    r(Math.abs(q.position().left) - l.data("scrollButtons_scrollAmount"))
                                });
                                l.data({
                                    bindEvent_buttonsPixels_x: true
                                })
                            }
                        } else {
                            f.add(A).unbind(
                                "mousedown touchstart MSPointerDown pointerdown mouseup MSPointerUp pointerup mouseout MSPointerOut pointerout touchend",
                                j, h);
                            l.data({
                                bindEvent_buttonsContinuous_y: false
                            });
                            if (!l.data("bindEvent_buttonsPixels_y")) {
                                f.bind("click", function (x) {
                                    x.preventDefault();
                                    r(Math.abs(q.position().top) + l.data("scrollButtons_scrollAmount"))
                                });
                                A.bind("click", function (x) {
                                    x.preventDefault();
                                    r(Math.abs(q.position().top) - l.data("scrollButtons_scrollAmount"))
                                });
                                l.data({
                                    bindEvent_buttonsPixels_y: true
                                })
                            }
                        }

                        function r(x) {
                            if (!k.data("preventAction")) {
                                k.data("preventAction", true);
                                l.mCustomScrollbar("scrollTo", x, {
                                    trigger: "internal"
                                })
                            }
                        }
                    } else {
                        if (l.data("horizontalScroll")) {
                            w.add(D).unbind("click");
                            l.data({
                                bindEvent_buttonsPixels_x: false
                            });
                            if (!l.data("bindEvent_buttonsContinuous_x")) {
                                w.bind("mousedown touchstart MSPointerDown pointerdown", function (y) {
                                    y.preventDefault();
                                    var x = B();
                                    l.data({
                                        mCSB_buttonScrollRight: setInterval(function () {
                                            l.mCustomScrollbar("scrollTo", Math.abs(q.position()
                                                .left) + x, {
                                                trigger: "internal",
                                                scrollEasing: "easeOutCirc"
                                            })
                                        }, 17)
                                    })
                                });
                                var j = function (x) {
                                    x.preventDefault();
                                    clearInterval(l.data("mCSB_buttonScrollRight"))
                                };
                                w.bind(
                                    "mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout",
                                    j);
                                D.bind("mousedown touchstart MSPointerDown pointerdown", function (y) {
                                    y.preventDefault();
                                    var x = B();
                                    l.data({
                                        mCSB_buttonScrollLeft: setInterval(function () {
                                            l.mCustomScrollbar("scrollTo", Math.abs(q.position()
                                                .left) - x, {
                                                trigger: "internal",
                                                scrollEasing: "easeOutCirc"
                                            })
                                        }, 17)
                                    })
                                });
                                var h = function (x) {
                                    x.preventDefault();
                                    clearInterval(l.data("mCSB_buttonScrollLeft"))
                                };
                                D.bind(
                                    "mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout",
                                    h);
                                l.data({
                                    bindEvent_buttonsContinuous_x: true
                                })
                            }
                        } else {
                            f.add(A).unbind("click");
                            l.data({
                                bindEvent_buttonsPixels_y: false
                            });
                            if (!l.data("bindEvent_buttonsContinuous_y")) {
                                f.bind("mousedown touchstart MSPointerDown pointerdown", function (y) {
                                    y.preventDefault();
                                    var x = B();
                                    l.data({
                                        mCSB_buttonScrollDown: setInterval(function () {
                                            l.mCustomScrollbar("scrollTo", Math.abs(q.position()
                                                .top) + x, {
                                                trigger: "internal",
                                                scrollEasing: "easeOutCirc"
                                            })
                                        }, 17)
                                    })
                                });
                                var u = function (x) {
                                    x.preventDefault();
                                    clearInterval(l.data("mCSB_buttonScrollDown"))
                                };
                                f.bind(
                                    "mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout",
                                    u);
                                A.bind("mousedown touchstart MSPointerDown pointerdown", function (y) {
                                    y.preventDefault();
                                    var x = B();
                                    l.data({
                                        mCSB_buttonScrollUp: setInterval(function () {
                                            l.mCustomScrollbar("scrollTo", Math.abs(q.position()
                                                .top) - x, {
                                                trigger: "internal",
                                                scrollEasing: "easeOutCirc"
                                            })
                                        }, 17)
                                    })
                                });
                                var g = function (x) {
                                    x.preventDefault();
                                    clearInterval(l.data("mCSB_buttonScrollUp"))
                                };
                                A.bind(
                                    "mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout",
                                    g);
                                l.data({
                                    bindEvent_buttonsContinuous_y: true
                                })
                            }
                        }

                        function B() {
                            var x = l.data("scrollButtons_scrollSpeed");
                            if (l.data("scrollButtons_scrollSpeed") === "auto") {
                                x = Math.round((l.data("scrollInertia") + 100) / 40)
                            }
                            return x
                        }
                    }
                }
                if (l.data("autoScrollOnFocus")) {
                    if (!l.data("bindEvent_focusin")) {
                        i.bind("focusin", function () {
                            i.scrollTop(0).scrollLeft(0);
                            var x = c(document.activeElement);
                            if (x.is("input,textarea,select,button,a[tabindex],area,object")) {
                                var J = q.position().top,
                                    y = x.position().top,
                                    I = i.height() - x.outerHeight();
                                if (l.data("horizontalScroll")) {
                                    J = q.position().left;
                                    y = x.position().left;
                                    I = i.width() - x.outerWidth()
                                }
                                if (J + y < 0 || J + y > I) {
                                    l.mCustomScrollbar("scrollTo", y, {
                                        trigger: "internal"
                                    })
                                }
                            }
                        });
                        l.data({
                            bindEvent_focusin: true
                        })
                    }
                }
                if (l.data("autoHideScrollbar") && !l.data("alwaysShowScrollbar")) {
                    if (!l.data("bindEvent_autoHideScrollbar")) {
                        i.bind("mouseenter", function (x) {
                            i.addClass("mCS-mouse-over");
                            d.showScrollbar.call(i.children(".mCSB_scrollTools"))
                        }).bind("mouseleave touchend", function (x) {
                            i.removeClass("mCS-mouse-over");
                            if (x.type === "mouseleave") {
                                d.hideScrollbar.call(i.children(".mCSB_scrollTools"))
                            }
                        });
                        l.data({
                            bindEvent_autoHideScrollbar: true
                        })
                    }
                }
            },
            scrollTo: function (e, f) {
                var i = c(this),
                    o = {
                        moveDragger: false,
                        trigger: "external",
                        callbacks: true,
                        scrollInertia: i.data("scrollInertia"),
                        scrollEasing: i.data("scrollEasing")
                    },
                    f = c.extend(o, f),
                    p, g = i.children(".mCustomScrollBox"),
                    k = g.children(".mCSB_container"),
                    r = g.children(".mCSB_scrollTools"),
                    j = r.children(".mCSB_draggerContainer"),
                    h = j.children(".mCSB_dragger"),
                    t = draggerSpeed = f.scrollInertia,
                    q, s, m, l;
                if (!k.hasClass("mCS_no_scrollbar")) {
                    i.data({
                        mCS_trigger: f.trigger
                    });
                    if (i.data("mCS_Init")) {
                        f.callbacks = false
                    }
                    if (e || e === 0) {
                        if (typeof (e) === "number") {
                            if (f.moveDragger) {
                                p = e;
                                if (i.data("horizontalScroll")) {
                                    e = h.position().left * i.data("scrollAmount")
                                } else {
                                    e = h.position().top * i.data("scrollAmount")
                                }
                                draggerSpeed = 0
                            } else {
                                p = e / i.data("scrollAmount")
                            }
                        } else {
                            if (typeof (e) === "string") {
                                var v;
                                if (e === "top") {
                                    v = 0
                                } else {
                                    if (e === "bottom" && !i.data("horizontalScroll")) {
                                        v = k.outerHeight() - g.height()
                                    } else {
                                        if (e === "left") {
                                            v = 0
                                        } else {
                                            if (e === "right" && i.data("horizontalScroll")) {
                                                v = k.outerWidth() - g.width()
                                            } else {
                                                if (e === "first") {
                                                    v = i.find(".mCSB_container").find(":first")
                                                } else {
                                                    if (e === "last") {
                                                        v = i.find(".mCSB_container").find(":last")
                                                    } else {
                                                        v = i.find(e)
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                if (v.length === 1) {
                                    if (i.data("horizontalScroll")) {
                                        e = v.position().left
                                    } else {
                                        e = v.position().top
                                    }
                                    p = e / i.data("scrollAmount")
                                } else {
                                    p = e = v
                                }
                            }
                        }
                        if (i.data("horizontalScroll")) {
                            if (i.data("onTotalScrollBack_Offset")) {
                                s = -i.data("onTotalScrollBack_Offset")
                            }
                            if (i.data("onTotalScroll_Offset")) {
                                l = g.width() - k.outerWidth() + i.data("onTotalScroll_Offset")
                            }
                            if (p < 0) {
                                p = e = 0;
                                clearInterval(i.data("mCSB_buttonScrollLeft"));
                                if (!s) {
                                    q = true
                                }
                            } else {
                                if (p >= j.width() - h.width()) {
                                    p = j.width() - h.width();
                                    e = g.width() - k.outerWidth();
                                    clearInterval(i.data("mCSB_buttonScrollRight"));
                                    if (!l) {
                                        m = true
                                    }
                                } else {
                                    e = -e
                                }
                            }
                            var n = i.data("snapAmount");
                            if (n) {
                                e = Math.round(e / n) * n - i.data("snapOffset")
                            }
                            d.mTweenAxis.call(this, h[0], "left", Math.round(p), draggerSpeed, f.scrollEasing);
                            d.mTweenAxis.call(this, k[0], "left", Math.round(e), t, f.scrollEasing, {
                                onStart: function () {
                                    if (f.callbacks && !i.data("mCS_tweenRunning")) {
                                        u("onScrollStart")
                                    }
                                    if (i.data("autoHideScrollbar") && !i.data(
                                        "alwaysShowScrollbar")) {
                                        d.showScrollbar.call(r)
                                    }
                                },
                                onUpdate: function () {
                                    if (f.callbacks) {
                                        u("whileScrolling")
                                    }
                                },
                                onComplete: function () {
                                    if (f.callbacks) {
                                        u("onScroll");
                                        if (q || (s && k.position().left >= s)) {
                                            u("onTotalScrollBack")
                                        }
                                        if (m || (l && k.position().left <= l)) {
                                            u("onTotalScroll")
                                        }
                                    }
                                    h.data("preventAction", false);
                                    i.data("mCS_tweenRunning", false);
                                    if (i.data("autoHideScrollbar") && !i.data(
                                        "alwaysShowScrollbar")) {
                                        if (!g.hasClass("mCS-mouse-over")) {
                                            d.hideScrollbar.call(r)
                                        }
                                    }
                                }
                            })
                        } else {
                            if (i.data("onTotalScrollBack_Offset")) {
                                s = -i.data("onTotalScrollBack_Offset")
                            }
                            if (i.data("onTotalScroll_Offset")) {
                                l = g.height() - k.outerHeight() + i.data("onTotalScroll_Offset")
                            }
                            if (p < 0) {
                                p = e = 0;
                                clearInterval(i.data("mCSB_buttonScrollUp"));
                                if (!s) {
                                    q = true
                                }
                            } else {
                                if (p >= j.height() - h.height()) {
                                    p = j.height() - h.height();
                                    e = g.height() - k.outerHeight();
                                    clearInterval(i.data("mCSB_buttonScrollDown"));
                                    if (!l) {
                                        m = true
                                    }
                                } else {
                                    e = -e
                                }
                            }
                            var n = i.data("snapAmount");
                            if (n) {
                                e = Math.round(e / n) * n - i.data("snapOffset")
                            }
                            d.mTweenAxis.call(this, h[0], "top", Math.round(p), draggerSpeed, f.scrollEasing);
                            d.mTweenAxis.call(this, k[0], "top", Math.round(e), t, f.scrollEasing, {
                                onStart: function () {
                                    if (f.callbacks && !i.data("mCS_tweenRunning")) {
                                        u("onScrollStart")
                                    }
                                    if (i.data("autoHideScrollbar") && !i.data(
                                        "alwaysShowScrollbar")) {
                                        d.showScrollbar.call(r)
                                    }
                                },
                                onUpdate: function () {
                                    if (f.callbacks) {
                                        u("whileScrolling")
                                    }
                                },
                                onComplete: function () {
                                    if (f.callbacks) {
                                        u("onScroll");
                                        if (q || (s && k.position().top >= s)) {
                                            u("onTotalScrollBack")
                                        }
                                        if (m || (l && k.position().top <= l)) {
                                            u("onTotalScroll")
                                        }
                                    }
                                    h.data("preventAction", false);
                                    i.data("mCS_tweenRunning", false);
                                    if (i.data("autoHideScrollbar") && !i.data(
                                        "alwaysShowScrollbar")) {
                                        if (!g.hasClass("mCS-mouse-over")) {
                                            d.hideScrollbar.call(r)
                                        }
                                    }
                                }
                            })
                        }
                        if (i.data("mCS_Init")) {
                            i.data({
                                mCS_Init: false
                            })
                        }
                    }
                }

                function u(w) {
                    if (i.data("mCustomScrollbarIndex")) {
                        this.mcs = {
                            top: k.position().top,
                            left: k.position().left,
                            draggerTop: h.position().top,
                            draggerLeft: h.position().left,
                            topPct: Math.round((100 * Math.abs(k.position().top)) / Math.abs(k.outerHeight() -
                                g.height())),
                            leftPct: Math.round((100 * Math.abs(k.position().left)) / Math.abs(k.outerWidth() -
                                g.width()))
                        };
                        switch (w) {
                            case "onScrollStart":
                                i.data("mCS_tweenRunning", true).data("onScrollStart_Callback").call(i, this.mcs);
                                break;
                            case "whileScrolling":
                                i.data("whileScrolling_Callback").call(i, this.mcs);
                                break;
                            case "onScroll":
                                i.data("onScroll_Callback").call(i, this.mcs);
                                break;
                            case "onTotalScrollBack":
                                i.data("onTotalScrollBack_Callback").call(i, this.mcs);
                                break;
                            case "onTotalScroll":
                                i.data("onTotalScroll_Callback").call(i, this.mcs);
                                break
                        }
                    }
                }
            },
            stop: function () {
                var g = c(this),
                    e = g.children().children(".mCSB_container"),
                    f = g.children().children().children().children(".mCSB_dragger");
                d.mTweenAxisStop.call(this, e[0]);
                d.mTweenAxisStop.call(this, f[0])
            },
            disable: function (e) {
                var j = c(this),
                    f = j.children(".mCustomScrollBox"),
                    h = f.children(".mCSB_container"),
                    g = f.children(".mCSB_scrollTools"),
                    i = g.children().children(".mCSB_dragger");
                f.unbind("mousewheel focusin mouseenter mouseleave touchend");
                h.unbind("touchstart touchmove");
                if (e) {
                    if (j.data("horizontalScroll")) {
                        i.add(h).css("left", 0)
                    } else {
                        i.add(h).css("top", 0)
                    }
                }
                g.css("display", "none");
                h.addClass("mCS_no_scrollbar");
                j.data({
                    bindEvent_mousewheel: false,
                    bindEvent_focusin: false,
                    bindEvent_content_touch: false,
                    bindEvent_autoHideScrollbar: false
                }).addClass("mCS_disabled")
            },
            destroy: function () {
                var e = c(this);
                e.removeClass("mCustomScrollbar _mCS_" + e.data("mCustomScrollbarIndex")).addClass(
                    "mCS_destroyed").children().children(".mCSB_container").unwrap().children().unwrap().siblings(
                    ".mCSB_scrollTools").remove();
                c(document).unbind("mousemove." + e.data("mCustomScrollbarIndex") + " mouseup." + e.data(
                        "mCustomScrollbarIndex") + " MSPointerMove." + e.data("mCustomScrollbarIndex") +
                    " MSPointerUp." + e.data("mCustomScrollbarIndex"));
                c(window).unbind("resize." + e.data("mCustomScrollbarIndex"))
            }
        },
        d = {
            showScrollbar: function () {
                this.stop().animate({
                    opacity: 1
                }, "fast")
            },
            hideScrollbar: function () {
                this.stop().animate({
                    opacity: 0
                }, "fast")
            },
            mTweenAxis: function (g, i, h, f, o, y) {
                var y = y || {},
                    v = y.onStart || function () {},
                    p = y.onUpdate || function () {},
                    w = y.onComplete || function () {};
                var n = t(),
                    l, j = 0,
                    r = g.offsetTop,
                    s = g.style;
                if (i === "left") {
                    r = g.offsetLeft
                }
                var m = h - r;
                q();
                e();

                function t() {
                    if (window.performance && window.performance.now) {
                        return window.performance.now()
                    } else {
                        if (window.performance && window.performance.webkitNow) {
                            return window.performance.webkitNow()
                        } else {
                            if (Date.now) {
                                return Date.now()
                            } else {
                                return new Date().getTime()
                            }
                        }
                    }
                }

                function x() {
                    if (!j) {
                        v.call()
                    }
                    j = t() - n;
                    u();
                    if (j >= g._time) {
                        g._time = (j > g._time) ? j + l - (j - g._time) : j + l - 1;
                        if (g._time < j + 1) {
                            g._time = j + 1
                        }
                    }
                    if (g._time < f) {
                        g._id = _request(x)
                    } else {
                        w.call()
                    }
                }

                function u() {
                    if (f > 0) {
                        g.currVal = k(g._time, r, m, f, o);
                        s[i] = Math.round(g.currVal) + "px"
                    } else {
                        s[i] = h + "px"
                    }
                    p.call()
                }

                function e() {
                    l = 1000 / 60;
                    g._time = j + l;
                    _request = (!window.requestAnimationFrame) ? function (z) {
                        u();
                        return setTimeout(z, 0.01)
                    } : window.requestAnimationFrame;
                    g._id = _request(x)
                }

                function q() {
                    if (g._id == null) {
                        return
                    }
                    if (!window.requestAnimationFrame) {
                        clearTimeout(g._id)
                    } else {
                        window.cancelAnimationFrame(g._id)
                    }
                    g._id = null
                }

                function k(B, A, F, E, C) {
                    switch (C) {
                        case "linear":
                            return F * B / E + A;
                            break;
                        case "easeOutQuad":
                            B /= E;
                            return -F * B * (B - 2) + A;
                            break;
                        case "easeInOutQuad":
                            B /= E / 2;
                            if (B < 1) {
                                return F / 2 * B * B + A
                            }
                            B--;
                            return -F / 2 * (B * (B - 2) - 1) + A;
                            break;
                        case "easeOutCubic":
                            B /= E;
                            B--;
                            return F * (B * B * B + 1) + A;
                            break;
                        case "easeOutQuart":
                            B /= E;
                            B--;
                            return -F * (B * B * B * B - 1) + A;
                            break;
                        case "easeOutQuint":
                            B /= E;
                            B--;
                            return F * (B * B * B * B * B + 1) + A;
                            break;
                        case "easeOutCirc":
                            B /= E;
                            B--;
                            return F * Math.sqrt(1 - B * B) + A;
                            break;
                        case "easeOutSine":
                            return F * Math.sin(B / E * (Math.PI / 2)) + A;
                            break;
                        case "easeOutExpo":
                            return F * (-Math.pow(2, -10 * B / E) + 1) + A;
                            break;
                        case "mcsEaseOut":
                            var D = (B /= E) * B,
                                z = D * B;
                            return A + F * (0.499999999999997 * z * D + -2.5 * D * D + 5.5 * z + -6.5 * D + 4 *
                                B);
                            break;
                        case "draggerRailEase":
                            B /= E / 2;
                            if (B < 1) {
                                return F / 2 * B * B * B + A
                            }
                            B -= 2;
                            return F / 2 * (B * B * B + 2) + A;
                            break
                    }
                }
            },
            mTweenAxisStop: function (e) {
                if (e._id == null) {
                    return
                }
                if (!window.requestAnimationFrame) {
                    clearTimeout(e._id)
                } else {
                    window.cancelAnimationFrame(e._id)
                }
                e._id = null
            },
            rafPolyfill: function () {
                var f = ["ms", "moz", "webkit", "o"],
                    e = f.length;
                while (--e > -1 && !window.requestAnimationFrame) {
                    window.requestAnimationFrame = window[f[e] + "RequestAnimationFrame"];
                    window.cancelAnimationFrame = window[f[e] + "CancelAnimationFrame"] || window[f[e] +
                    "CancelRequestAnimationFrame"]
                }
            }
        };
    d.rafPolyfill.call();
    c.support.touch = !!("ontouchstart" in window);
    c.support.pointer = window.navigator.pointerEnabled;
    c.support.msPointer = window.navigator.msPointerEnabled;
    var a = ("https:" == document.location.protocol) ? "https:" : "http:";
    c.event.special.mousewheel || document.write('<script src="' + a +
        '//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.0.6/jquery.mousewheel.min.js"><\/script>');
    c.fn.mCustomScrollbar = function (e) {
        if (b[e]) {
            return b[e].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof e === "object" || !e) {
                return b.init.apply(this, arguments)
            } else {
                c.error("Method " + e + " does not exist")
            }
        }
    }
})(jQuery);
(function ($) {
    eval(function (p, a, c, k, e, r) {
        e = function (c) {
            return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) :
                c.toString(36))
        };
        if (!''.replace(/^/, String)) {
            while (c--) r[e(c)] = k[c] || e(c);
            k = [function (e) {
                return r[e]
            }];
            e = function () {
                return '\\w+'
            };
            c = 1
        };
        while (c--)
            if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
        return p
    }(
        '(3($){"1V 2h";7 f=3(a,b){2.4=$.14({},$.q.m.11,b);2.Z=0;2.T=H;2.N=1l;2.19=1l;2.$6=$(a);A(2.4.I)2.1b=2.$6.U();2.F()};f.l.F=3(){2.1a=2.$6.15().z(2.4.12,2.4.1v);2.$6.y(2.4.h.6.v).y(2.4.h.6.j);2.$6.U(2.1a);2.$8=2.$6.2g(2.4.1r);2.$8.h("2f-2e",2.4.G).y(2.4.h.8.v).y(2.4.h.8.j);2.1C();2.P=2.$8.R;2.p();9 2};f.l.1C=3(){7 a=2.4;7 b=2;2.$8.2d("20",3(){a.1f($(2),b.$6,b);b.1h();1i(a.1j){D"M":$(2).1q();w;D"1X":b.Q($(2),a.C,a.h.8.k,a.h.8.j);w;D"1w":w;1A:$(2).1B($(2).15())}});9 b};f.l.X=3(){2.T=Y;2.4.1H(2.$6,2);1J(2.19);1i(2.4.1K){D"M":2.$6.1q();w;D"1w":w;1A:2.$6.U(2.1b);2.$6.J(2.4.h.6.v).J(2.4.h.6.k);w}};f.l.1h=3(){1J(2.N);2.Z++;7 a=2;2.N=13(3(){A(a.Z%a.P===0){a.X()}},E.1W(2.4.C+10,1c));9 2};f.l.1g=3(){7 a=2.4.G.1U(/\\d+s/)?1T(2.4.G):1;7 b=E.1P(1.5*2.P*2.4.C*a);7 c=2;2.19=1p.13(3(){A(!c.V()){c.X()}},b)};f.l.p=3(){7 b=2;2.1g();2.$6.J(2.4.h.6.j).y(2.4.h.6.k);7 c=2.4.W(2.$8);7 d=2.4;c.x(3(i,a){b.Q($(a),(i+1)*d.C,d.h.8.j,d.h.8.k)});9 2};f.l.Q=3(a,b,c,d){7 e=2.4;1p.13(3(){a.J(c).y(d)},b);9 2};f.l.V=3(){9 2.T};7 g=3(a){2.u=$.14({},$.q.m.11,a);2.1x(2.u.1y);A(2.u.1z)2.u.12=/(\\S+)/g};g.l.1x=3(a){7 b=2.u;7 c=a?"k":"j";7 d=a?"j":"k";7 e={6:{},8:{}};e.6.v=b.o+"-L "+b.p.z(/(\\S+)/g,b.o+"-$1-L");e.6[c]=b.p.z(/(\\S+)/g,b.o+"-$1-j-L");e.6[d]=b.p.z(/(\\S+)/g,b.o+"-$1-k-L");e.8.v=b.o;e.8[c]=b.p.z(/(\\S+)/g,b.o+"-$1-j");e.8[d]=b.p.z(/(\\S+)/g,b.o+"-$1-k");2.u=$.14(b,{h:e})};g.l.1D=3(){9 2.u};g.1E=3(a){9 1F g(a).1D()};$.q.m=3(b){b=g.1E(b);9 $(2).x(3(){7 a=$(2);A(!a.16("m-17")||a.16("m-17").V()){a.16("m-17",1F f(a,b))}})};$.q.m.W={1I:3(a){7 b=a.R,18,K;1M(0!==b){K=E.23(E.1I()*b);b-=1;18=a[b];a[b]=a[K];a[K]=18}9 a},1n:3(a){9 a.1N().1n()}};$.q.m.1O={8:/(\\S)/1m};$.q.m.11={p:"1Q 1R-1S",12:/(\\S)/1m,1k:H,1y:H,1v:"<B>$1</B>",1r:"B",C:1c,G:"1s",W:3(a){9 a},1f:3(a,b,c){},1H:3(a,b){},1j:"I",1K:"I",I:Y,M:H,o:"m",h:{6:{v:"",j:"",k:""},8:{v:"",j:"",k:""}}}})(O);!3(t){3 e(e,n,i,r){7 a=e.15(),c=a.1Y(n),s="";c.R&&(t(c).x(3(t,e){s+=\'<B 1Z="\'+i+(t+1)+\'" 1e-21="Y">\'+e+"</B>"+r}),e.22("1e-1L",a).24().25(s))}7 n={F:3(){9 2.x(3(){e(t(2),"","26","")})},1z:3(){9 2.x(3(){e(t(2)," ","1k"," ")})},27:3(){9 2.x(3(){7 n="28";e(t(2).29("2a").1B(n).2b(),n,"2c","")})}};t.q.1d=3(e){9 e&&n[e]?n[e].1u(2,[].1t.1o(1G,1)):"8"!==e&&e?(t.2i("2j "+e+" 2k 2l 2m 2n O.1d"),2):n.F.1u(2,[].1t.1o(1G,0))}}(O);',
        62, 148,
        '||this|function|options||element|var|letters|return||||||||css||before|after|prototype|letterfx||element_class|fx|fn||||config|base|break|each|addClass|replace|if|span|timing|case|Math|init|fx_duration|false|restore|removeClass|randomIndex|container|destroy|monitor_timer|jQuery|num_letters|applyLetterFx|length||is_done|html|isDone|sort|terminate|true|num_completed_fx||defaults|pattern|setTimeout|extend|text|data|obj|temporaryValue|killswitch|new_html|original_html|50|lettering|aria|onLetterComplete|startKillWatch|notifyFXEnd|switch|letter_end|word|null|gi|reverse|call|window|remove|selector||slice|apply|replacement|stay|buildCss|backwards|words|default|replaceWith|bindLetterFxEnd|getConfig|parse|new|arguments|onElementComplete|random|clearTimeout|element_end|label|while|toArray|patterns|ceil|spin|fly|top|parseInt|match|use|max|rewind|split|class|transitionend|hidden|attr|floor|empty|append|char|lines|eefec303079ad17405c889e092e105b0|children|br|end|line|bind|duration|transition|find|strict|error|Method|does|not|exist|on'
            .split('|'), 0, {}))
})(jQuery);
(function ($) {
    eval(function (p, a, c, k, e, r) {
        e = function (c) {
            return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) :
                c.toString(36))
        };
        if (!''.replace(/^/, String)) {
            while (c--) r[e(c)] = k[c] || e(c);
            k = [function (e) {
                return r[e]
            }];
            e = function () {
                return '\\w+'
            };
            c = 1
        };
        while (c--)
            if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
        return p
    }(
        'L j=\'m{d1{#d2{d3{4V{{&4V={lr{&lr={4W{au{4X{d4{d5{d6{9G{d7{d8{d9{//2H{da{3V{db{4Y{#1B{\\2U\\2V\\2W\\2X\\1w\\1J\\W\\X\\1m\\2I\\9H\\7F\\7G\\dc\\5T\\dd\\3W\\3y\\1n{\\2U\\2V\\2W\\2X\\1w\\1J\\W\\X\\1m\\2I\\7G\\de\\df\\dg\\7H\\3W\\3y\\1n{2H.cn{o/js/o.js{dh{9I{4Z://2H.cn/{di{\\n %c \\5U\\7I\\5V\\dj\\5W\\dk\\dl\\2U\\2V\\2W\\2X\\1w\\1J\\W\\X\\dm.dn - {\\2Y\\do\\7J\\7H\\dp\\1t %c 4Z://2H.cn\\n{1S: #9J; 1K: #9K; 7K:7L 0;{1K: #9J; 7K:7L 0;{dq{2H.dr{ds-dt{\\n %c \\5U\\7I\\du\\dv\\5W\\dw\\5X\\2U\\2V\\2W\\2X\\1w\\1J\\W\\X\\1m\\2Y\\9L\\5X\\9M\\dx\\dy://2H.cn\\n{1S: #dz; 1K: #9K; 7K:7L 0;{dA{<dB id="2Z" dC="dD" 2J="9N/9O" dE="dF" 3V="{3X/9P?3a=1B&id={">{dG{dH{<I id="1B" 1L="2K:9Q">\\n{    <I F="o">\\n{<7M F="3Y-5a" 5b="1C" 7N="9R" id="7M">\\n{\\t\\t\\t\\dI\\5W\\5Y\\5Z\\1m\\dJ\\dK\\dL\\2Y\\6a\\dM\\dN\\dO\\dP\\5X\\5W\\5Y\\5Z\\1m\\1n\\n{\\t\\t</7M>{        <I F="3Y-5a">\\n{            <5a 9I="{dQ/dR/dS.dT" F="3Y" 1L="5c: dU; 2K: dV;">\\n{        </I>\\n{        <I F="9S">\\n{            <I F="dW"><i F="Z N-9T"></i> <I F="dX"><1a F="2L"></1a></I></I>\\n{            <I F="dY"><i F="Z N-dZ"></i> <1a F="6b">2M:2M / 2M:2M</1a></I>\\n{            <I F="7O"><i F="Z N-e0"></i> <1a F="5d"></1a><1a F="9U"><i\\n{                    F="Z N-6c"></i> \\5e\\5f\\W\\X</1a></I>\\n{            <I F="7O"><i F="Z N-e1"></i>\\n{                <1a F="9V"></1a>\\n{                <1a F="3Z"><1a F="6d"></1a></1a>\\n{            </I>\\n{        <I F="6e">\\n{            <i F="6f Z N-6g" 1u="\\9W\\5g\\3b\\3c"></i>\\n{            <i F="6h Z N-e2" 1u="\\9W\\5g\\7P"></i>\\n{            <I F="5h">\\n{                <b>\\n{                    <i F="3d Z N-e3" 1u="\\W\\X"></i>\\n{                    <i F="6i Z N-e4" 1u="\\6j\\6k"></i>\\n{                </b>\\n{                <I id="e5" F="5i">\\n{                    <i F="Z N-9T" 9X-e6="9G"></i>\\n{                </I>\\n{                <I id="e7" F="5i">\\n{                <I id="e8" F="5i">\\n{            <i F="6l Z N-e9" 1u="\\7Q\\5g\\7P"></i>\\n{            <i F="6m Z N-ea" 1u="\\7Q\\5g\\3b\\3c"></i>\\n{\\t\\t<I F="4a">\\n{\\t\\t\\t<I F="9Y">\\n{\\t\\t        <I F="1T Z N-5j"></I>\\n{\\t\\t        \\t<I F="6n">\\n{\\t\\t                    <I F="2N">\\n{\\t\\t                        <I F="6o" 1L="7N: eb;"></I>\\n{\\t\\t                        <I F="6p" 1L="5c: ec;"></I>\\n{\\t\\t                    </I>\\n{\\t\\t                </I>\\n{\\t\\t        </I>\\n{\\t\\t        <I F="3e">\\n{\\t\\t            <I F="2N">\\n{\\t\\t                <I F="6o"></I>\\n{\\t\\t                <I F="9Z"></I>\\n{\\t\\t                <I F="6p"></I>\\n{\\t\\t            </I>\\n{            <I F="3f-3g">\\n{                <i F="Z N-1M" 1u="\\W\\X\\ed\\ee"></i>\\n{            <I F="a0">\\n{                <i F="Z N-6c" 1u="\\5e\\5f\\W\\X"></i>\\n{            <I F="3f-6q">\\n{                <i F="Z N-a1" 1u="\\5k\\5l\\1j\\2f"></i>\\n{        <I F="1D"></I>\\n{    </I>\\n{    <I F="3g">\\n{        <I F="3g-bd">\\n{            <I F="4b-1M">\\n{                <I F="3z"></I>\\n{                <I F="1M"></I>\\n{            <I F="2L-1M">\\n{                <I F="3z"><i F="Z N-6r-4c-6s"></i><1a></1a></I>\\n{                <I F="1M">\\n{                    <4d></4d>\\n{    <I F="3f-o">\\n{        <i F="Z N-6r-4c-6s"></i>\\n{</I>\\n{<I id="1g"></I>\\n{<I id="5m"></I>\\n{<I id="1h"></I>{7R{#1g{#1h{#5m{.3f-o{.2L{.1D{.6b{.2L-1M .1M{.4b-1M{.o .5d{.o .9V{.o .9U{.o .3Z .6d{.o .3f-6q{ef{\\5n\\7S{6t{0,0,0{1U,1U,1U{eg{2O{eh{ei{ej{ek{el{en{6u{eo{ / {ep{9N{<a 1L="1S:#7T">\\er\\a2\\es\\1j\\1Z</a>{et{<a 1L="1S:#7T">\\2U\\2V\\2W\\2X</a>{<a 1L="1S:#7T">\\1w\\1J\\W\\X\\1m</a>{<i F="Z N-7U"></i> \\a3\\a4\\a5\\a6{4e{eu{3d{a7{a8{.3f-6q{7V{ev{ew{\\ex\\ey\\W\\X\\3A\\3B\\a9\\ez\\aa\\1n\\2I\\6k\\7F\\W\\X\\1n{eA{ - \\eB\\eC\\4f\\3C\\3A\\3B\\1n\\eD\\eE\\4f\\3C\\7Q\\5g\\7P...{\\W\\X\\3A\\3B { \\aa\\1n{eF{eG{eH{6l{eI{ab{\\6v\\eJ\\ac...{1T{N-6w N-5j N-6x{N-6y{.o .4a .1T{N-6w N-6y N-6x{N-5j{N-6w N-6y N-5j{N-6x{N-6x N-6y N-5j{N-6w{eK{eL{eM{eN{eO{\\eP\\eQ\\1w\\1J{kg{\\ae\\eR\\1w\\1J{af{eS\\1w\\1J{mg{\\eT\\eU\\1w\\1J{kw{\\ae\\eV\\1w\\1J{eW{\\ag\\ag\\1w\\1J{eX{\\5U\\9M\\1w\\1J{ah{eY{1o{eZ{f0{f1{f2{%{9O{.3e .2N .9Z{6z{f3{.3e .2N .6p{5b{.3e .2N .6o{f4{6i{f5{ai{aj{3h{ak{al{f6{f7{f8{.5d{f9{fa{\\6j\\6k\\W\\X > {eq{li{\\6j\\6k\\W\\X - {fb{.6i{\\am\\an\\W\\X > {fc{.3d{6h{.6h{.6l{6f{.6f{6m{.6m{\\3b\\3c\\4g\\4h{<i F = "1o Z N-7W" 1u="\\3b\\3c\\4g\\4h"></i>{<i F="Z N-7W"></i> \\3b\\3c\\4g\\4h{\\5e\\5f\\W\\X{<i F = "1o Z N-6c" 1u="\\5e\\5f\\W\\X"></i>{<i F="Z N-6c"></i> \\5e\\5f\\W\\X{\\1Z\\5o\\4g\\4h{<i F = "1o Z N-ao" 1u="\\1Z\\5o\\4g\\4h"></i>{<i F="Z N-ao"></i> \\1Z\\5o\\4g\\4h{.a0{.3D{fd{.1o{\\ap\\aq\\W\\X{<i F="Z N-7W"></i> \\ap\\aq\\W\\X{fe{.6n .2N .6p{.6n .2N{5c{ff{7N{.6n .2N .6o{fg{\\1w\\fh\\1t{.3e .2N{fi{ar{fj{#1B .o{#1B .3g{.o .4a .3e{.o .4a .9Y{.o .4a .3f-6q{.o{.o .3Y{.o .1D 5a{5p(1U,1U,1U,.7){.o .4a{5p(1U,1U,1U,.8){.3f-3g{fk{.2L-1M .3z,.2L-1M .N-6r-4c-6s{fl{fm{<i F="Z N-7U"></i> \\1j\\2f\\6A\\fn{<i F="Z N-as"></i> \\1j\\2f\\5n\\7S{\\5n\\7S\\1j\\2f\\at\\av{<i F="Z N-a1" 1u="\\5k\\5l\\1j\\2f"></i>{<i F="Z N-7X"></i> \\1j\\2f\\5k\\5l{\\1j\\2f\\at\\av\\2I\\5k\\5l{\\5k\\5l{<i F="Z N-fo" 1u="\\fp\\5n\\1j\\2f"></i>{fq{.3z{fr{2K:fs !3i;{<a 1L="2K: 5q!3i" 3V="4Z://2H.cn" 1u="\\7Y\\7Z\\5r\\5s\\8a\\6a\\2U\\2V\\2W\\2X\\1w\\1J\\W\\X\\1m" 5t="6B" 1L="1S:#ft">\\5U\\7I\\1w\\1J\\W\\X\\1m\\fu fv.fw \\5r\\5s\\fy\\fz</a>{<li><1a F="8b">{</1a><1a F="5d"></1a>{ - {fA{</li>{<li><i F="Z N-6r-4c-6s"></i><1a F="8b">{</1a><1a F="5d"></1a>\\fB{fC{\\fD - {fE{<4d>{</4d>{.1M{\\9L\\7G\\W\\X - {#{8b{2L{aw{3j({){.3g .1M li{ax{ay{U{({.2L-1M .3z 1a{4d{5u-4b{fF{fG{fH{li.6t{<i F="Z N-as"></i> \\1j\\2f{<i F="Z N-7X"></i> \\1j\\2f{fI{6C{<i F="Z N-7X"></i> \\6j\\fJ\\1j\\2f{[2M{&7V={H{3X/fK?H={&2J={&3d={.{&id={fL{az{fM{2J{fN{fO{:{aA{fP{fQ{<li F="1h{ 6t" 1L="1S:5p({,1)!3i">{fR{.1h{1S{5p({,1){1L{fS{fT{fU{\\n{<li F="fV"></li>{fW{fX{ { 6t">{ ">{fY{F{1h{<1a>{</1a>{1S:5p({)!3i{fZ{g0{8c{g1{g2{5u{g3{g4{g5{aB{b{,{\\g6\\1t{\\g7\\1t{g{\\g8\\1t{t{0{\\2Y{<1a F="g9"><em 8d="{"></em></1a>{<1a><em 8d="{</em></1a>{<I id="5m{" F="5m{ aC aC{"><I F="bg">{</I><I F="aD">{</I></I>{.5m{8e{.8e{.8f{aE{8f{.aD 1a{em{8d{1k%{ga{2H.cn/gb/#/{3X/gc?id={&gd={ge{\\6D\\1j\\1Z\\1t{aF \\6v\\8g\\4i\\4j\\1n{aF \\2I\\a9\\gf\\5Y\\5Z\\1m\\aG\\aH\\aI\\7J\\1n{\\W\\X\\1m\\1t\\4i\\4j\\6v\\8g\\aG\\6D\\1j\\1Z\\1n{\\W\\X\\1m\\1t\\6D\\1j\\1Z\\3E\\4k\\4f\\3C\\3A\\3B\\1n{\\W\\X\\1m\\1t\\1j\\1Z\\6v\\8g\\gg\\3C\\4i\\4j\\1n{\\1j\\1Z\\1t{\\gh\\1j\\1Z\\3E\\4k\\4f\\3C\\3A\\3B!{gi{2K{gj{\\2U\\2V\\2W\\2X\\1w\\1J\\W\\X\\1m\\2I\\9H\\7F\\gk\\ac\\gl\\3W\\3y\\1n{9Q{\\W\\X\\1m\\1t\\gm\\7H\\3E\\4k\\3W\\3y\\4i\\4j\\1n{<a 1L="2K: 5q!3i;aJ: 4c" 3V="4Z://2H.cn" 1u="\\7Y\\7Z\\5r\\5s\\8a\\6a\\2U\\2V\\2W\\2X\\1w\\1J\\W\\X\\1m" 5t="6B"><i F="Z N-aK"></i> \\5r\\5s\\8a\\6a</a>{.3Z{.7O{2K:5q !3i;{\\5r\\5s\\5X\\W\\X\\1m\\gn\\go\\gp\\2Y\\2I\\5V\\5T\\gq\\3y\\1n{a{<a 1L="2K: 5q!3i" 3V="{ad/{gr{" 1u="{gs{" 1L="1S:3j({)" 5t="6B"><i F="Z N-gt"></i> {</a>{<a 1L="2K: 5q!3i;aJ: 4c;1S:3j({)" 3V="{" 5t="6B"><i F="Z N-aK"></i> {gu{1k{1{0.{0.5{.5h .5i{gv{\\W\\X\\1m\\1t\\6E\\6F\\W\\X\\3b\\3c\\aH\\gw\\gx\\3E\\8h{\\8i\\1n{\\W\\X\\1m\\1t\\W\\X\\3E\\4k\\3W\\3y\\4i\\4j\\1n{\\8i\\2Y\\gy\\8j\\6A\\6E\\6F\\W\\X\\1j\\5o\\1n{\\W\\X\\1m\\1t\\2I\\8j\\6A\\6E\\6F\\W\\X\\3b\\3c\\8h{\\8i\\2Y\\2I\\8j\\6A\\6E\\6F\\W\\X\\1j\\5o\\8h{4b{...{gz{gA{gB{3X/gC?H={<1a 1u="{gD{3X/gE?gF={gG{gH{gI{3X/9P{gJ{gK{4Z://gL.gM.cn/g?b=af&gN={&s=6G{ - \\3b\\3c\\gO\\gP\\4f\\3C\\3A\\3B\\1n{.3Y-5a .3Y{3k{\\1j\\2f\\5V\\5T\\gQ\\gR{gS{gT{gU{gV{\\5Y\\5Z\\1m\\aI\\7J\\1w\\gW\\5V\\5T\\W\\X\\2Y\\gX\\gY\\7Y\\7Z\\W\\X\\1n{6H{\\5n\\a2\\gZ{\\W\\X\\1t{-{ \\h0\\h1\\1t{h2{h3{h4{\\am\\an\\W\\X&aL;>&aL;{.1M 4d{[5u-4b={]{,.8){,.3){,.6){.9S,.6e,.5h .5i,.3Z a,.3g .1M li,.3z a,.3g,.3z{h5{h6 3j({) h7{.o .1D{1K-h8{aM-aN(aO, 3j({) 50%, aP 50%, aP), aM-aN(aO, 3j({) 50%, 3j({.o .6e .5h{,.5){.o .6e .5h b{#aQ{h9{1u{ha{hb{hc{<I id="aQ">{</I>{hd{0.8{he{#1B 1a,#1B i,#1B a{r{hf{hg{hh{hi{hj{hk{hl{hm{hn{ho{2M:{2M:2M{2M{hp{hq{hr{hs{ht{hu{hv{1a{hw{hx{hy{9X-hz{hA{5u-hB{hC{hD{hE{3D{#hF{aR{0.4{1S:3j({hG{hH{hI{hJ{5t{hK{1B{hL{hM{G{hN{5v{<1a F="6d"><i F="Z N-7U"></i> \\a3\\a4\\a5\\a6</1a>{#1B .3Z{#1B .o .3Z .6d{2Z{\\W\\X\\1m\\1t\\4i\\4j\\3W\\3y\\6D\\1j\\1Z\\1n{\\W\\X\\1m\\1t\\1j\\1Z\\3E\\4k\\hO\\hP!{\\W\\X\\1m\\1t\\1j\\1Z\\3E\\4k\\4f\\3C\\3A\\3B!\'.aA("{"),8k=$(j[2])[j[1]](j[0]);aS=1E 8k===j[3]?0:8k;L 4V=$(j[2])[j[1]](j[4]);aT=1E 4V===j[3]?j[5]:j[6]+4V;L lr=$(j[2])[j[1]](j[7]);lr=1E lr===j[3]?j[5]:j[8]+lr;L 4W=$(j[2])[j[1]](j[9]);1E 4W===j[3]&&(4W=1);L au=$(j[2])[j[1]](j[10]);1E au===j[3]&&(au=1);L 4X=$(j[2])[j[1]](j[11]);1E 4X===j[3]&&(4X=1);L 4l=M[j[13]](j[12]),8l=M[j[13]](j[14]);4l=(4l=1E 4l===j[3]?!1:4l===j[15])&&1E 8l!==j[3]&&2A>(3F aU)[j[16]]()-U(8l);if(/(6I|6J|6K|6L|6M|6N|6O 6P|6Q|6R)/i[j[18]](6S[j[17]])&&1>aS&&0>2g[j[22]][j[21]][j[20]](j[19]))aV $(j[24])[j[23]](),aW(j[25]);Q{if(4l&&0>2g[j[22]][j[21]][j[20]](j[19]))aV $(j[24])[j[23]](),aW(j[26]);L aX=D(b){M[j[42]](j[12],j[aY])},aZ=D(){$b0[j[1N]](3G(O[j[2n]])+j[8m]+3G(O[j[2B]]))},G;if(0<$(j[2])[j[1]](j[30])[j[29]](j[28],j[5])[j[20]](j[27])){L 1F=j[31],1G=$(j[2])[j[1]](j[32]);1e[j[37]](j[33]+1G+j[34],j[35],j[36])}Q 0<$(j[2])[j[1]](j[30])[j[29]](j[28],j[5])[j[20]](j[38])?(1F=j[31],1G=$(j[2])[j[1]](j[32]),1e[j[37]](j[33]+1G+j[34],j[35],j[36])):(1F=j[31],1G=j[39],1e[j[37]](j[40],j[41]));M[j[42]](j[12],j[15]);$(j[47])[j[46]](j[43]+1F+j[44]+1G+aT+lr+j[45]);$(j[b1])[j[46]](j[48]+j[49]+j[50]+j[51]+j[52]+j[53]+j[54]+1F+j[55]+j[56]+j[57]+j[58]+j[59]+j[60]+j[61]+j[62]+j[63]+j[64]+j[65]+j[56]+j[66]+j[67]+j[68]+j[69]+j[70]+j[71]+j[72]+j[73]+j[74]+j[75]+j[76]+j[77]+j[75]+j[76]+j[78]+j[75]+j[76]+j[65]+j[79]+j[80]+j[56]+j[81]+j[82]+j[83]+j[84]+j[85]+j[86]+j[87]+j[88]+j[89]+j[90]+j[91]+j[92]+j[93]+j[94]+j[95]+j[96]+j[90]+j[97]+j[98]+j[65]+j[99]+j[1k]+j[65]+j[hQ]+j[hR]+j[65]+j[56]+j[hS]+j[8n]+j[hT]+j[hU]+j[hV]+j[hW]+j[hX]+j[65]+j[hY]+j[hZ]+j[i0]+j[i1]+j[76]+j[65]+j[56]+j[8n]+j[i2]+j[i3]+j[8n]+j[i4]+j[i5]+j[i6]+j[i7]);L O=3F i8,$o=$(j[24]),$b2=$(j[8o]),$lk=$(j[1x]),$kk=$(j[1V]),$8p=$(j[i9],$o),$8q=$(j[ia],$o),$1D=$(j[ib],$o),$b0=$(j[8r],$o),$2a=$(j[b3],$o),$1H=$(j[ic],$o),$8s=$(j[ie],$o),$8t=$(j[ig],$o),$2C=$(j[ih],$o),$1v=$(j[ii],$o),$4m=$(j[ij],$o),8u=j[ik],4n=j[b4],2P=j[5],1c=j[il],2o=!0,6g=1;8c=6T=4o=0;2p=j[im];2D=j[in];M[j[42]](j[6G],j[6U]);M[j[42]](j[8v],j[6U]);M[j[42]](j[io],j[6U]);1y=0;8w=!1;1o=!0;3D=!1;2E=2q=5w=2b=!0;4p=0;2r=5x=!1;5y=!0;1O=3l=!1;4e=!0;3H=M[j[13]](j[8x])?M[j[13]](j[8x]):!1;5z=M[j[13]](j[8y])?M[j[13]](j[8y]):!1;2h=M[j[13]](j[8z])?M[j[13]](j[8z]):!1;4q=M[j[13]](j[8A])?M[j[13]](j[8A]):!1;6u=M[j[13]](j[8B])?M[j[13]](j[8B]):!1;L 6V=2O,3I=2O;$8q[j[J]](j[ip]);$8s[j[J]](j[9R]);$8t[j[J]](j[iq]);$1v[j[J]](j[ir]);L R={3d:D(){1O=!0;$o[j[Y]](j[4r]);4p=8C();6V=2c(aZ,is);if(2q){4s=2c(1h[j[3m]][j[2s]],2t);if(!3l)$(j[1x])[j[Y]](j[S]);if(5y)$(j[2u])[j[S]]()}if(2E){6W=2c(1h[j[2v]][j[2s]],80);if(!3l)$(j[1V])[j[Y]](j[6X]);if(5y)$(j[2u])[j[S]]()}},6i:D(){2F(6V);$o[j[T]](j[4r]);$(j[2u])[j[23]]();if(2q)1h[j[3m]][j[23]]();if(2E)1h[j[2v]][j[23]]()},3h:D(){2F(6V);$o[j[T]](j[4r]);2<4o?(1g[j[S]](j[it]),4o=0,5w=!0):(4o++,5w=!1,1g[j[S]](G[E][j[1z]][H]+j[iu]),1e[j[37]](j[iv]+4o+j[iw]),1p(D(){$1D[j[T]](j[2Q]);M[j[42]](j[ix],j[6Y]);1O=!0;b5=j[5];R[j[8D]]()},5A))},ak:D(){if(!0===O[j[8E]])O[j[2s]]();$o[j[Y]](j[4r]);$1D[j[Y]](j[2Q]);1h[j[b6]]();1g[j[S]](j[iy])},iz:D(){4p=8C()},aj:D(){L b=O[j[8F]];0==b?$(j[3n],$o)[j[Y]](j[b7])[j[T]](j[b8]):.4<=b&&.7>=b?$(j[3n],$o)[j[Y]](j[b9])[j[T]](j[ba]):.7<=b&&1>=b?$(j[3n],$o)[j[Y]](j[bb])[j[T]](j[bc]):$(j[3n],$o)[j[Y]](j[be])[j[T]](j[bf])},ah:D(b,c){4p=0;$1D[j[T]](j[2Q]);H=b;E=c;bh();M[j[42]](j[iA],8u);M[j[42]](j[5B],iB);M[j[42]](j[8z],E+1);M[j[42]](j[8A],H+1);M[j[42]](j[8B],G[E][j[1P]][H]+G[E][j[1f]][H]);G[E][j[1P]][H]==j[bi]?(2P=j[iC],3J=j[bi],3o()):G[E][j[1P]][H]==j[bj]?(2P=j[iD],3J=j[bj],3o()):G[E][j[1P]][H]==j[bk]?(2P=j[iE],3J=j[bk],3o()):G[E][j[1P]][H]==j[bl]?(2P=j[8G],3J=j[bl],3o()):G[E][j[1P]][H]==j[bm]?(2P=j[iF],3J=j[bm],3o()):G[E][j[1P]][H]==j[bn]?(2P=j[iG],3J=j[bn],3o()):G[E][j[1P]][H]==j[8H]&&(2P=j[iH],3J=j[8H],3o())},ai:D(){if(3D)R[j[1b]](H,E);Q R[j[8D]]()},6l:D(){2b=!1;1y=G[E][j[1f]][j[P]];if(1o)if(1l=U(1d[j[1q]]()*1y),1<1y)if(1l!=H)R[j[1b]](1l,E);Q if(1l+1>=1y)R[j[1b]](0,E);Q R[j[1b]](1l+1,E);Q R[j[1b]](0,E);Q if(U(H)+1>=1y)R[j[1b]](0,E);Q R[j[1b]](U(H)+1,E);1p(D(){2b=!0},5A)},6h:D(){2b=!1;1y=G[E][j[1f]][j[P]];if(1o)if(1l=U(1d[j[1q]]()*1y),1<1y)if(1l!=H)R[j[1b]](1l,E);Q if(1l+1>=1y)R[j[1b]](0,E);Q R[j[1b]](1l+1,E);Q R[j[1b]](0,E);Q if(0>U(H)-1)R[j[1b]](1y-1,E);Q R[j[1b]](U(H)-1,E);1p(D(){2b=!0},5A)},6m:D(){2b=!1;2i=G[j[P]];if(1o)1l=U(1d[j[1q]]()*2i),1<2i?1l!=E?(1r=G[1l][j[1f]][j[P]],1s=U(1d[j[1q]]()*1r),R[j[1b]](1s-1,1l)):1l+1>=2i?(1r=G[0][j[1f]][j[P]],1s=U(1d[j[1q]]()*1r),R[j[1b]](1s-1,0)):(1r=G[1l+1][j[1f]][j[P]],1s=U(1d[j[1q]]()*1r),R[j[1b]](1s-1,1l+1)):(1r=G[0][j[1f]][j[P]],1s=U(1d[j[1q]]()*1r),R[j[1b]](1s,0));Q if(1<2i)if(U(E)+1>=2i)R[j[1b]](0,0);Q R[j[1b]](0,U(E)+1);Q 1r=G[0][j[1f]][j[P]],1s=U(1d[j[1q]]()*1r),R[j[1b]](1s,0);$o[j[T]](j[4t]);1p(D(){2b=!0},5A)},6f:D(){2b=!1;2i=G[j[P]];if(1o)1l=U(1d[j[1q]]()*2i),1<2i?1l!=E?(1r=G[1l][j[1f]][j[P]],1s=U(1d[j[1q]]()*1r),R[j[1b]](1s-1,1l)):1l+1>=2i?(1r=G[0][j[1f]][j[P]],1s=U(1d[j[1q]]()*1r),R[j[1b]](1s-1,0)):(1r=G[1l+1][j[1f]][j[P]],1s=U(1d[j[1q]]()*1r),R[j[1b]](1s-1,1l+1)):(1r=G[0][j[1f]][j[P]],1s=U(1d[j[1q]]()*1r),R[j[1b]](1s,0));Q if(1<2i)if(0>U(E)-1)R[j[1b]](0,2i-1);Q R[j[1b]](0,U(E)-1);Q 1r=G[0][j[1f]][j[P]],1s=U(1d[j[1q]]()*1r),R[j[1b]](1s,0);$o[j[T]](j[4t]);1p(D(){2b=!0},5A)},al:D(){if(O[j[4u]][j[P]]){5w||(4o=0,5w=!0);L b=1k*O[j[4u]][j[bo]](4p)/O[j[2B]],c=1k*O[j[4u]][j[bp]](4p)/O[j[2B]];$(j[iI],$o)[j[V]]({6z:b+j[3K],5b:c-b+j[3K]});M[j[42]](j[8x],O[j[2n]])}5x||($(j[6Z],$o)[j[V]](j[7a],1k*(O[j[2n]]/O[j[2B]])[j[3p]](2)+j[3K]),$(j[8I],$o)[j[V]](j[3L],1k*(O[j[2n]]/O[j[2B]])[j[3p]](2)+j[3K]),$(j[8r],$o)[j[1N]](3G(O[j[2n]])+j[8m]+3G(O[j[2B]])))}},8J=2O,1g={a8:D(b){iJ(8J);$(j[8o])[j[1N]](b)[j[Y]](j[S]);K[j[23]]()},4Y:D(){8J=1p(D(){$(j[8o])[j[T]](j[S])},bq)}};O[j[2w]](j[2s],R[j[2s]],!1);O[j[2w]](j[3M],R[j[3M]],!1);O[j[2w]](j[iK],R[j[iL]],!1);O[j[2w]](j[4r],R[j[4r]],!1);O[j[2w]](j[br],R[j[br]],!1);O[j[2w]](j[bs],R[j[bs]],!1);O[j[2w]](j[bt],R[j[bt]],!1);O[j[2w]](j[bu],R[j[bu]],!1);$8p[j[1A]](D(){$o[j[4v]](j[S]);2r=!0});$(j[bv],$o)[j[1A]](D(){1O=!1;if(1==G[j[P]])$(j[2x],$1H)[j[2y]](H)[j[Y]](1c)[j[1W]](j[2j])[j[J]](j[bw])[j[2k]]()[j[2d]]()[j[T]](1c)[j[1W]](j[2j])[j[J]](j[5])[j[2k]]();Q $(j[2x],$1H)[j[2y]](E)[j[Y]](1c)[j[1W]](j[2j])[j[J]](j[bw])[j[2k]]()[j[2d]]()[j[T]](1c)[j[1W]](j[2j])[j[J]](j[5])[j[2k]]();1g[j[S]](j[iM]+G[E][j[1z]][H]);$1D[j[T]](j[2Q]);O[j[3M]]();M[j[42]](j[2l],j[6Y])});$(j[bx],$o)[j[1A]](D(){1O=!0;if(1==G[j[P]])$(j[2x],$1H)[j[2y]](H)[j[Y]](1c)[j[1W]](j[2j])[j[J]](j[by])[j[2k]]()[j[2d]]()[j[T]](1c)[j[1W]](j[2j])[j[J]](j[5])[j[2k]]();Q $(j[2x],$1H)[j[2y]](E)[j[Y]](1c)[j[1W]](j[2j])[j[J]](j[by])[j[2k]]()[j[2d]]()[j[T]](1c)[j[1W]](j[2j])[j[J]](j[5])[j[2k]]();3N();M[j[42]](j[2l],j[2R])});$(j[iN],$o)[j[1A]](D(){2b&&(1O=!0,R[j[iO]](),M[j[42]](j[2l],j[2R]))});$(j[iP],$o)[j[1A]](D(){2b&&(1O=!0,R[j[8D]](),M[j[42]](j[2l],j[2R]))});$(j[iQ],$o)[j[1A]](D(){2b&&(1O=!0,R[j[iR]](),M[j[42]](j[2l],j[2R]))});$(j[iS],$o)[j[1A]](D(){2b&&(1O=!0,R[j[bz]](),M[j[42]](j[2l],j[2R]))});$(j[5C],$o)[j[1A]](D(){1o?(1o=!1,1g[j[S]](j[iT]),$(K)[j[J]](j[8K]),$2C[j[J]](j[8L])):3D?(1o=!0,3D=!1,1g[j[S]](j[1U]),$(K)[j[J]](j[8M]),$2C[j[J]](j[7b])):(1o=!1,3D=!0,1g[j[S]](j[iU]),$(K)[j[J]](j[iV]),$2C[j[J]](j[iW]));5D();2r&&(2r=!1,1p(D(){2r=!0},2t))});$(j[bA],$o)[j[1A]](D(){$(K)[j[Y]](1c);$(j[bB],$o)[j[T]](1c);1o=!0;1g[j[S]](j[1U]);$2C[j[J]](j[7b]);M[j[42]](j[7c],j[15])});$(j[bB],$o)[j[1A]](D(){$(K)[j[Y]](1c);$(j[bA],$o)[j[T]](1c);1o=!1;1g[j[S]](j[iX]);$2C[j[J]](j[iY]);M[j[42]](j[7c],j[aY])});L $bC=$(j[8N],$o);$bC.bD({bE:$(j[iZ],$o),j0:!0,bF:D(b,c,d,e,g){if(5==bG[j[P]]){8w=!0;L f=((84-d)/84)[j[3p]](2);1<1I(f)?f=1:0>1I(f)&&(f=0,$(b)[j[V]](j[3q],j[bH]));$(j[bI],$o)[j[1i]](1k*f);1T=O[j[8F]]=f;M[j[42]](j[8O],f);1p(D(){1g[j[S]](j[j1]+U(1k*f)+j[3K])},2t)}Q 8w=!1}});L $3e=$(j[6Z],$o);$3e.bD({bE:$(j[7d],$o),j2:!0,bF:D(b,c,d,e,g){if(5==bG[j[P]]){5x=!0;L f=$(j[7d],$o)[j[3L]]();f=c/(f-$(b)[j[3L]]());f=f[j[3p]](2);$(j[8I],$o)[j[3L]](c);O[j[2n]]=O[j[2B]]*f}Q 5x=!1}});$(j[7d],$o)[j[1A]](D(b){$(j[1x])[j[T]](j[S]);$(j[1V])[j[T]](j[6X]);1O=!0;5x=!1;b=b[j[8P]]-$(K)[j[j3]]()[j[7a]];L c=$(K)[j[3L]]();b=(b/c)[j[3p]](2);O[j[2n]]=O[j[2B]]*b});$(j[j4])[j[1A]](D(){$o[j[4v]](j[8Q]);8R=$(j[8S])[j[1i]]();8T=$(j[j5])[j[1i]]();1C<=8R&&8G>=8T?($(j[7e],$o)[j[23]](),$(j[7f],$o)[j[23]](),$(j[7g],$o)[j[23]](),$(j[7h],$o)[j[1i]](90),$(j[4w],$o)[j[1i]](90),$(j[4x],$o)[j[1i]](90),$(j[7i],$o)[j[V]]({1K:j[j6]})):90==8R&&8G<=8T&&($(j[7e],$o)[j[S]](),$(j[7f],$o)[j[S]](),$(j[7g],$o)[j[S]](),$(j[7h],$o)[j[1i]](1C),$(j[4w],$o)[j[1i]](1C),$(j[4x],$o)[j[1i]](1C),$(j[7i],$o)[j[V]]({1K:j[8U]}))});$2a[j[3r]]();$(j[j7],$o)[j[1A]](D(){$o[j[T]](j[4t])});$(j[2u])[j[1A]](D(){$(j[1x])[j[4v]](j[23]);$(j[1V])[j[4v]](j[5E]);if($(j[1x])[j[2e]](j[23])&&$(j[1V])[j[2e]](j[5E])){2o=!1;if(2q||2E)$1v[j[J]](j[1C]);1g[j[S]](j[j8]);4n=j[bJ];$4m[j[J]](j[bK])}Q{2o=!0;if(2q||2E)if(3l)$1v[j[J]](j[8V]);Q $1v[j[J]](j[8W]);1g[j[S]](j[j9]);4n=j[b4];$4m[j[J]](j[ja])}5D();2r&&(2r=!1,1p(D(){2r=!0},2t))});1B[j[4y]]={aw:{4b:D(){L b=G[j[P]],c=j[5];if(1E bL===j[3])$(j[3s],$1H)[j[J]](jb);Q $(j[3s],$o)[j[V]](j[3t],j[5F]),$(j[3s],$1H)[j[J]](j[jc]);if(1==b)2m(L d=0;d<G[0][j[1f]][j[P]];d++)c+=j[bM]+(d+1)+j[bN]+G[0][j[1z]][d]+j[7j]+G[0][j[4z]][d]+j[3O];Q 2m(d=0;d<b;d++)c+=j[jd]+(d+1)+j[je]+G[d][j[bO]]+j[jf]+G[d][j[jg]]+j[3O];$(j[8X],$1H)[j[J]](j[8Y]+c+j[8Z])[j[3r]]();$(j[2x],$1H)[j[1A]](D(){if(1==b)if(1O=!0,E=0,$(K)[j[2e]](1c))1g[j[S]](j[bP]+G[E][j[1z]][H][j[29]](H+1+j[bQ],j[5]));Q M[j[42]](j[2l],j[2R]),H=$(K)[j[5G]](),R[j[1b]](H,E);Q{L e=$(K)[j[5G]]();$(K)[j[2e]](1c)?1B[j[4y]][j[5H]][j[bR]](e,!0):1B[j[4y]][j[5H]][j[bR]](e,!1);$o[j[Y]](j[4t]);$(j[jh],$o)[j[V]]({1S:j[bS]+2D+j[4A]})}});1y=G[E][j[1f]][j[P]];2h&&4q?R[j[1b]](1B[j[4y]][j[5H]][j[ji]](4q-1),1B[j[4y]][j[5H]][j[jj]](2h-1)):1o?R[j[1b]](2g[j[jk]](1d[j[1q]]()*1y),E):R[j[1b]](0,E)},ax:D(b){1Q b>=1y?0:0>b?1y-1:b},ay:D(b){1Q b>=G[j[P]]?0:0>b?G[j[P]]-1:b},2L:D(b,c){1y=G[b][j[1f]][j[P]];$(j[jl],$o)[j[1N]](G[b][j[bO]]+j[jm]+1y+j[4A]);2m(L d=j[5],e=0;e<1y;e++)d+=j[bM]+(e+1)+j[bN]+G[b][j[1z]][e]+j[7j]+G[b][j[4z]][e]+j[3O];$(j[bT],$2a)[j[J]](d);$2a[j[1]](j[jn],b);$2a[j[3r]](j[jo]);if(c)$(j[2x],$2a)[j[2y]](H)[j[Y]](1c)[j[2d]]()[j[T]](1c),$2a[j[3r]](j[5I],$(j[7k],$2a)[j[7l]]()[j[3q]]-90);Q $2a[j[3r]](j[5I],j[3q]);$(j[2x],$2a)[j[1A]](D(){1O=!0;E=b;if($(K)[j[2e]](1c))1g[j[S]](j[bP]+G[E][j[1z]][H][j[29]](H+1+j[bQ],j[5]));Q M[j[42]](j[2l],j[2R]),H=$(K)[j[5G]](),R[j[1b]](H,E)})}}};L 1X=[],7m=0,7n=0,9a=!1,9b=!1,jp=!1,4B=0,6W=2O,4s=2O,1h={ab:D(){1h[j[3m]][j[23]]();1h[j[2v]][j[23]]();2E=2q=!1;$(j[1x])[j[J]](j[5]);$(j[1V])[j[J]](j[5]);1p(D(){if(2o)$1v[j[J]](j[jq]+4n);Q $1v[j[J]](j[jr]+4n);$(j[2u])[j[S]]();L b=M[j[13]](j[6G]),c=M[j[13]](j[8v]);if(0<=c[j[20]](G[E][j[1f]][H]+G[E][j[1z]][H]))0<=c[j[20]](j[jt])?1p(D(){1h[j[2v]][j[7o]](c[j[29]](G[E][j[1f]][H]+G[E][j[1z]][H],j[5]))},2t):($1v[j[J]](j[5J]),$(j[2u])[j[23]]());Q if(0<=b[j[20]](G[E][j[1f]][H]+G[E][j[1z]][H]))0<=b[j[20]](j[ju])?1p(D(){1h[j[3m]][j[7o]](b[j[29]](G[E][j[1f]][H]+G[E][j[1z]][H],j[5]))},2t):($1v[j[J]](j[5J]),$(j[2u])[j[23]]());Q{L d=/(6I|6J|6K|6L|6M|6N|6O 6P|6Q|6R)/i[j[18]](6S[j[17]])?j[5]:j[jv]+G[E][j[bU]][H];bV=G[E][j[1P]][H]==j[8H]?1F+j[bW]+G[E][j[bU]][H]+j[7p]+G[E][j[1P]][H]+j[jw]+E+j[5K]+H+j[7q]+1G+d:1F+j[bW]+G[E][j[1f]][H]+j[7p]+G[E][j[1P]][H]+j[7q]+1G+d;$[j[4C]]({3a:bV,2J:j[4D],jx:!1,4E:j[jy],az:j[jz],4F:D(e){e[j[bX]]==j[2v]?(M[j[42]](j[8v],G[E][j[1f]][H]+G[E][j[1z]][H]+e[j[4G]]),1h[j[2v]][j[7o]](e[j[4G]])):e[j[bX]]==j[3m]?e[j[4G]]==j[6U]||e[j[4G]]==j[5]?($1v[j[J]](j[5J]),$(j[2u])[j[23]]()):(M[j[42]](j[6G],G[E][j[1f]][H]+G[E][j[1z]][H]+e[j[4G]]),1h[j[3m]][j[7o]](e[j[4G]])):($1v[j[J]](j[5J]),$(j[2u])[j[23]]())},3h:D(){$1v[j[J]](j[5J]);$(j[2u])[j[23]]()}})}},50)},jA:{6C:D(b){D c(h){L m=h[j[2S]](j[4H]);h=+m[0];L n=+m[1][j[2S]](j[5K])[0];m=+m[1][j[2S]](j[5K])[1];1Q 60*h+n+1d[j[3u]](m/2A)}2q=!0;L d=b[j[29]](/\\[[A-jB-z]+:(.*?)]/g,j[5])[j[2S]](/[\\]\\[]/g),e=j[5];1X=[];2m(L g=1;g<d[j[P]];g+=2){L f=c(d[g]);1X[j[4I]](f);e=1==g?e+(j[7r]+f+j[jC]+b+j[jD]+d[g+1]+j[3O]):e+(j[7r]+f+j[45]+d[g+1]+j[3O])}$(j[1x])[j[J]](j[8Y]+e+j[8Z]);1p(D(){if(O[j[8E]])$(j[2u])[j[23]]();Q $(j[1x])[j[Y]](j[S])},2t);4s=2c(1h[j[3m]][j[2s]],2t)},3d:D(){L b=1d[j[3u]](O[j[2n]]);0<$[j[jE]](b,1X)?(b=$(j[bY]+b),b[j[2e]](1c)||(b[j[V]](j[5L],j[3v]+2p+j[jF]),b[j[Y]](1c)[j[2d]]()[j[T]](1c)[j[7s]](j[4J]),$(j[1x])[j[9c]]({aB:9d*b[j[5G]]()}))):jG=j[5]},4Y:D(){2F(4s);$(j[1x])[j[T]](j[S])}},a7:{6C:D(b){3l=!0;if(1==2o)$1v[j[J]](j[8V]);4K=b[j[4L]](/\\[ar:(\\w+)\\]/i);4K=2O!=4K&&0==9e(4K[1])?1I(4K[1]):0;4M=jH(b)[j[2S]](j[jI]);2q=!0;a=0;L c=j[bZ];1X=[];9f=[];1>4M[j[P]]&&(4M=b[j[2S]](/\\s+/));2m(b=4M[j[P]];a<b;a++){L d=4M[a][j[29]](/\\[\\d*:\\d*((\\.|:)\\d*)*\\]/g,j[5]),e=4M[a][j[4L]](/\\[\\d*:\\d*((\\.|:)\\d*)*\\]/g);if(c0 0!=d&&(j[3]==d&&(d=j[5]),e))2m(L g=0,f=e[j[P]];g<f;g++){L h=1I(3w(e[g][j[4L]](/\\[(\\d*)/i)[1])),m=1I(3w(e[g][j[4L]](/:(\\d+(\\.\\d*)*)/i)[1]));9g{k=1I(3w(e[g][j[4L]](/:.*:(\\d*)/i)[1]))}6H(n){k=0}2m(h=1d[j[3u]](2A*(60*h+m)+k-4K);0==h||-1!=1X[j[20]](h);)h++;j[jJ]==1E d&&1X[j[4I]](1I(h));9f[3w(h)]=3w(d[j[29]](/[-\\jK]/g,j[5]))}}1X=1X[j[jL]](D(n,q){1Q n-q});a=0;2m(b=1X[j[P]];a<b;a++)if(d=1X[a],e=9f[d],h=1X[a+1],f=1d[j[3u]](1I(h)-1I(d)),c0 0!==e)c=j[bZ]==c&&0==d?j[7r]+d+j[2z]+f+j[2z]+g+j[jM]+e+j[3O]:c+j[7r]+d+j[2z]+f+j[jN]+e+j[3O];$(j[1x])[j[J]](j[8Y]+c+j[8Z]);4s=2c(1h[j[3m]][j[2s]],1k)},3d:D(){L b=1d[j[3u]](2A*O[j[2n]]);9d=$(j[1x])[j[1i]]();b>=1X[0]&&(4B=1X[j[jO]]());if(0<4B+2A-b&&0<b+2A-4B){L c=$(j[bY]+4B),d=1I(3w(c[j[1]](j[c1]))[j[2S]](j[2z])[1])/(c[j[1N]]()[j[P]]+1);!c[j[2e]](1c)&&$(j[2x])[j[2e]](j[jP]+4B)&&(c[j[J]]=j[jQ]+c[j[J]]()+j[7t],c[j[Y]](1c)[j[2d]]()[j[T]](1c),$c2=c,$c2[j[5M]](D(){4N=1==6T?7u():2p;$(K)[j[1]](j[4J],j[jR]+4N+j[jS])[j[2d]]()[j[7s]](j[4J]);if(1==8c)if(6<c[j[1N]]()[j[P]])if(2t<d)$(K)[j[c3]]({fx:j[jT],jU:j[jV]});Q{L e=$(K),g=(3F 5N(e))[j[c4]]();e[j[jW]](j[jX],g)}Q $(K)[j[c3]]({fx:j[jY],jZ:j[k0]})}));$(j[1x])[j[c5]](9d*c[j[5G]]());1==2o&&($1v[j[J]](j[8W]),3l=!1);if(1==1O)$(j[1x])[j[Y]](j[S])}},4Y:D(){2F(4s);$(j[1x])[j[T]](j[S])}},7V:{6C:D(b){3l=!0;if(1==2o)$1v[j[J]](j[8V]);2E=!0;L c=[],d=[],e=[],g=[],f=j[5],h=j[9h];b[j[29]](/\'(\\d*):(\\d*).(\\d*)\',\'(\\d*):(\\d*).(\\d*)\',\'(.*)\',\\s\'(.*)\'/g,D(t,x,y,z,A,u,v,B,C){t=A|0;u|=0;v|=0;c[j[4I]](c6*(x|0)+10*(y|0)+1d[j[3u]]((z|0)/1k));d[j[4I]](c6*t+10*u+1d[j[3u]](v/1k));e[j[4I]](B);g[j[4I]](C)});2m(b=0;b<c[j[P]];b++){L m=!1,n=[],q=0,p=j[5],w=g[b][j[2S]](j[9i]);0<=e[b][j[20]](j[c7])&&(h=j[0],e[b]=e[b][j[29]](j[c7],j[2z]));0<=e[b][j[20]](j[c8])&&(h=j[9j],e[b]=e[b][j[29]](j[c8],j[2z]));0<=e[b][j[20]](j[c9])&&(h=j[k1],e[b]=e[b][j[29]](j[c9],j[2z]));2m(L r=e[b][j[4L]](/(\\w+)\'+(\\w+)|(\\w+)|([^\\w\\s])|(^\\s+)|(\\s+$)|\\s+/g),l=0;l<r[j[P]];l++)r[l]==j[2z]?(m=!0,n[l]=j[ca],q++):n[l]=m?w[l-q]:w[l],p=e[b][l]==j[k2]?p+(j[k3]+n[l]+j[k4]):p+(j[k5]+n[l]+j[45]+r[l]+j[k6]);f+=j[k7]+d[b]+j[k8]+c[b]+j[k9]+(0==b%2?1:2)+j[2z]+h+j[ka]+p+j[kb]+p+j[kc]}$(j[1V])[j[J]](f);6W=2c(1h[j[2v]][j[2s]],1k)},3d:D(){L b=1d[j[3u]](10*O[j[2n]]);if($(j[9k]+(b+10))[j[P]]&&!$(j[9k]+(b+10))[j[2e]](1c)){1==2o&&($1v[j[J]](j[8W]),3l=!1);if(2E)$(j[1V])[j[Y]](j[6X]);L c=$(j[9k]+(b+10));4N=1==6T?7u():2p;c[j[Y]](1c)[j[V]](j[5L],j[3v]+4N+j[4A]);c[j[2e]](j[7v])?c[j[2d]](j[kd])[j[T]](1c)[j[7s]](j[4J]):c[j[2d]](j[ke])[j[T]](1c)[j[7s]](j[4J]);1p(D(){c[j[2e]](j[7v])?(1h[j[2v]][j[7w]][j[7v]](c),9a=!0):(1h[j[2v]][j[7w]][j[cb]](c),9b=!0)},2A)}Q kf=j[5];if($(j[1V]+(b-30))[j[P]])$(j[1V]+(b-30))[j[T]](1c)},aE:{8e:D(b){L c=$(j[cc],b),d=c[j[2y]](7m++);d=$(j[cd],d);L e=+d[j[1]](j[ce]);d[j[9c]]({5b:j[cf]},e);7m<c[j[P]]?kh=1p(D(){1h[j[2v]][j[7w]][j[7v]](b)},e):(7m=0,9a=!1)},8f:D(b){L c=$(j[cc],b),d=c[j[2y]](7n++);d=$(j[cd],d);L e=+d[j[1]](j[ce]);d[j[9c]]({5b:j[cf]},e);7n<c[j[P]]?ki=1p(D(){1h[j[2v]][j[7w]][j[cb]](b)},e):(7n=0,9b=!1)}},4Y:D(){2F(6W);$(j[1V])[j[T]](j[6X])}}};5O=M[j[13]](j[4O])?M[j[13]](j[4O]):!1;cg=M[j[13]](j[5B])?M[j[13]](j[5B]):1;if(5O&&0>2g[j[22]][j[21]][j[20]](j[kj]))$[j[4C]]({3a:1F+j[7x]+1G+j[kl]+1G,2J:j[4D],4E:j[1N],4F:D(b){if(b>cg)$[j[4C]]({3a:1F+j[7x]+1G,2J:j[4D],4E:j[1N],4F:D(c){9g{M[j[9l]](j[4O]),M[j[42]](j[4O],c),M[j[9l]](j[5B]),M[j[42]](j[5B],b),1e[j[37]](j[ch]+U(c[j[P]]/7y)+j[ci])}6H(d){1e[j[37]](j[ch]+U(c[j[P]]/7y)+j[cj])}1E G===j[3]&&(1R(c),1e[j[37]](j[ck]));3P=2c(2Z,1k)},3h:D(c,d,e){1R(5O);1e[j[37]](j[km]);3P=2c(2Z,1k)}});Q 1R(5O),1e[j[37]](j[cl]),3P=2c(2Z,1k)},3h:D(b,c,d){1R(5O);1e[j[37]](j[cl]);3P=2c(2Z,1k)}});Q $[j[4C]]({3a:1F+j[7x]+1G,2J:j[4D],4E:j[1N],4F:D(b){9g{M[j[9l]](j[4O]),M[j[42]](j[4O],b),1e[j[37]](j[cm]+U(b[j[P]]/7y)+j[ci])}6H(c){1e[j[37]](j[cm]+U(b[j[P]]/7y)+j[cj])}1E G===j[3]&&(1R(b),1e[j[37]](j[ck]));3P=2c(2Z,1k)},3h:D(b,c,d){$(j[24])[j[23]]();1g[j[S]](j[kn])}});2c(D(){M[j[42]](j[14],(3F aU)[j[16]]().ko())},2t);2g[j[2w]](j[kp],aX,!0)}D 2Z(){$o[j[V]](j[3x])==j[kq]?(2F(3P),1e[j[37]](j[kr])):$o[j[V]](j[3x])!=j[3Q]&&(2F(3P),1e[j[37]](j[ks]),7z())}D 7z(){if(1E bL!==j[3]){$(j[4P],$o)[j[J]](j[kt]);if($(j[4P],$o)[j[V]](j[3x])==j[3Q]||$(j[3s],$o)[j[V]](j[3x])==j[3Q]||$(j[7A],$o)[j[V]](j[3x])==j[3Q])$(j[4P],$o)[j[V]](j[3t],j[9m]),$(j[3s],$o)[j[V]](j[3t],j[5F]),$(j[7A],$o)[j[V]](j[3t],j[5F]),1e[j[37]](j[co]);2F(3I);3I=2c(D(){L b=3R[j[P]];3S=U(1d[j[1q]]()*b);$(j[ku],$o)[j[V]](j[3t],j[9m]);$(j[3s],$1H)[j[J]](j[kv]+1F+j[cp]+1G+j[5K]+3R[3S][j[cq]]+j[cr]+3R[3S][j[9n]]+j[kx]+2D+j[ky]+3R[3S][j[9n]]+j[cs]);$(j[4P],$o)[j[J]](j[kz]+2D+j[kA]+1F+j[cp]+1G+j[5K]+3R[3S][j[cq]]+j[cr]+3R[3S][j[9n]]+j[kB]+3R[3S][j[kC]]+j[cs]);5D();if($(j[4P],$o)[j[V]](j[3x])==j[3Q]||$(j[3s],$o)[j[V]](j[3x])==j[3Q]||$(j[7A],$o)[j[V]](j[3x])==j[3Q])$(j[4P],$o)[j[V]](j[3t],j[9m]),$(j[3s],$o)[j[V]](j[3t],j[5F]),$(j[7A],$o)[j[V]](j[3t],j[5F]),1e[j[37]](j[co])},kD)}ct=9e(9o)?j[kE]:9o>=j[kF]?j[kG]:j[kH]+9o;if(1!==kI)$(j[kJ],$o)[j[23]]();1T=M[j[13]](j[8O])?M[j[13]](j[8O]):ct;if(1k*1T!=j[ca])$(j[8N],$o)[j[V]](j[3q],1k*(1-1T)+j[5P]);Q $(j[8N],$o)[j[V]](j[3q],j[bH]);$(j[bI],$o)[j[1i]](1k*1T);0==1T?$(j[3n],$o)[j[Y]](j[b7])[j[T]](j[b8]):.4<=1T&&.7>=1T?$(j[3n],$o)[j[Y]](j[b9])[j[T]](j[ba]):.7<=1T&&1>=1T?$(j[3n],$o)[j[Y]](j[bb])[j[T]](j[bc]):$(j[3n],$o)[j[Y]](j[be])[j[T]](j[bf]);O[j[8F]]=1T;1==kK&&1==4W&&(9e(6b)||1p(D(){if(!$o[j[2e]](j[S])&&!2r)$o[j[4v]](j[S])},2A*6b));2O!=M[j[13]](j[7c])?M[j[13]](j[7c])==j[15]?($(j[5C],$o)[j[J]](j[8M]),$2C[j[J]](j[7b]),1o=!0):($(j[5C],$o)[j[J]](j[8K]),$2C[j[J]](j[8L]),1o=!1):1!=kL?(1o=!1,$(j[5C],$o)[j[J]](j[8K]),$2C[j[J]](j[8L])):($(j[5C],$o)[j[J]](j[8M]),$2C[j[J]](j[7b]),1o=!0);3T=G[j[P]];1E 1Y===j[3]?(cu=2h?2h:5v-1,cu>3T?(E=0,1e[j[37]](j[9p]+3T+j[9q])):(E=2h?2h-1:5v-1,0>E&&(2h=E=0),1e[j[37]](j[kM]))):1E 2G===j[3]?1Y>3T?(E=0,R[j[1b]](0,0),1e[j[37]](j[9p]+3T+j[cv])):(E=2h=1Y,R[j[1b]](0,1Y-1),1e[j[37]](j[cw]+1Y+j[cv])):1Y>3T?(1e[j[37]](j[9p]+3T+j[cx]+2G+j[9q]),E=0,R[j[1b]](2G-1,0)):(1e[j[37]](j[cw]+1Y+j[cx]+2G+j[9q]),2h=1Y,4q=2G,E=1Y,R[j[1b]](2G-1,1Y-1));if(0==kN){$(j[1x])[j[Y]](j[23]);$(j[1V])[j[Y]](j[5E]);2o=!1;if(2q)$1v[j[J]](j[1C]);4n=j[bJ];$4m[j[J]](j[bK])}1==kO&&1==4X&&1p(D(){1g[j[S]](kP)},kQ);1B[j[4y]][j[5H]][j[kR]]()}D 7B(b,c,d){9r=$(j[8S])[j[1i]]();c=1C==9r?c||14:90==9r?c||14:c||6;d=d||j[kS];2m(L e=j[5],g=b[j[P]],f=0,h=0;f<2*c&&h<g;h++)f+=b3<b[j[kT]](h)?2:1,e+=b[j[kU]](h);h<g&&(e+=d);1Q e}D 3o(){1h[j[b6]]();cy=G[E][j[9s]][H]?G[E][j[9s]][H]:!1;O[j[30]]=cy?G[E][j[9s]][H]:1F+j[kV]+G[E][j[1f]][H]+j[7p]+G[E][j[1P]][H]+j[7q]+1G;$8q[j[J]](j[9t]+G[E][j[1z]][H]+j[45]+7B(G[E][j[1z]][H])+j[7t]);$8s[j[J]](j[9t]+G[E][j[4z]][H]+j[45]+7B(G[E][j[4z]][H],6)+j[7t]);$8t[j[J]](j[9t]+G[E][j[9u]][H]+j[45]+7B(G[E][j[9u]][H],6)+j[7t]);L b=3F kW;5Q=1F+j[kX]+kY(G[E][j[kZ]][H])+j[7p]+G[E][j[1P]][H]+j[7q]+1G;b[j[30]]=5Q;$1D[j[Y]](j[cz]);b[j[l0]]=D(){$1D[j[T]](j[cz]);$[j[4C]]({3a:1F+j[l1],2J:j[4D],4E:j[l2],5u:{3a:b[j[30]],id:1G},4F:D(){9v()},3h:D(){9v()}})};b[j[7C]]=D(){5Q=j[l3]+8u+j[l4];b[j[30]]=5Q;1p(D(){1g[j[S]](G[E][j[1z]][H]+j[l5])},l6)};$1D[j[J]](b);if(1==1K)$(j[9w],$o)[j[S]](),$(j[9w],$o)[j[1]](j[30],b[j[30]]);Q $(j[9w],$o)[j[23]]();9x=$(j[8S])[j[1i]]();1C==9x?($(j[4w],$o)[j[1i]](1C),$(j[4x],$o)[j[1i]](1C)):90==9x&&($(j[4w],$o)[j[1i]](90),$(j[4x],$o)[j[1i]](90));1==6g?(6g=2,/(6I|6J|6K|6L|6M|6N|6O 6P|6Q|6R)/i[j[18]](6S[j[17]])?1==l7&&1==au?M[j[13]](j[2l])!==j[6Y]?3N():($1D[j[T]](j[2Q]),O[j[3M]]()):M[j[13]](j[2l])===j[2R]?3N():($1D[j[T]](j[2Q]),O[j[3M]]()):1==l8&&1==au?M[j[13]](j[2l])!==j[6Y]?3N():($1D[j[T]](j[2Q]),O[j[3M]]()):M[j[13]](j[2l])===j[2R]?3N():($1D[j[T]](j[2Q]),O[j[3M]]())):3N();3H&&5z&&4e&&G[E][j[1P]][H]+G[E][j[1f]][H]==6u&&($(j[6Z],$o)[j[V]](j[7a],1k*(3H/5z)[j[3p]](2)+j[3K]),$(j[8I],$o)[j[V]](j[3L],1k*(3H/5z)[j[3p]](2)+j[3K]),$(j[8r],$o)[j[1N]](3G(3H)+j[8m]+3G(5z)));$(2g)[j[l9]](D(){L c=$(K)[j[c5]](),d=$(2g[j[la]])[j[1i]](),e=$(K)[j[1i]]();if(c+e==d){if(5y=!1,1O&&2o&&($4m[j[23]](),$(j[1x])[j[Y]](j[23]),$(j[1V])[j[Y]](j[5E]),2q||2E))1g[j[S]](j[lb])}Q if(5y=!0,1O&&2o){if(2q||2E)$4m[j[S]]();$(j[1x])[j[T]](j[23]);$(j[1V])[j[T]](j[5E])}});5D()}D 3N(){3k[j[2w]](j[2t],D(){L c=D(){O[j[2s]]();3k[j[lc]](j[cA],c,!1)};O[j[2s]]();3k[j[2w]](j[cA],c,!1)},!1);L b=O[j[2s]]();if(b)b[j[ld]](D(){2h==E+1&&4q==H+1&&3H&&4e&&G[E][j[1P]][H]+G[E][j[1f]][H]==6u&&(O[j[2n]]=3H,4e=!1);L c=O[j[2B]];M[j[42]](j[8y],c);$1D[j[Y]](j[2Q]);1g[j[S]](j[le]+2P+j[lf]+G[E][j[1z]][H]);1===lg&&cB(G[E][j[1z]][H],G[E][j[4z]][H]+j[7j]+G[E][j[9u]][H],5Q);1e[j[37]](1I(U(E)+1)+j[cC]+1I(U(H)+1)+j[2z]+G[E][j[1z]][H]+j[7j]+G[E][j[4z]][H]+j[lh]+1d[j[3U]](c/60)+j[4H]+(c%60/1k)[j[3p]](2)[j[lj]](-2))})[j[ll]](D(c){1e[j[37]](j[lm])})}D bh(){if(1==G[j[P]]){if($(j[2x],$1H)[j[2y]](H)[j[Y]](1c)[j[1W]](j[2j])[j[J]](j[cD])[j[2k]]()[j[2d]]()[j[T]](1c)[j[1W]](j[2j])[j[J]](j[5])[j[2k]](),!$(j[ln],$1H)[j[J]]()==j[5])$(j[8X],$1H)[j[3r]](j[5I],$(j[7k],$1H)[j[7l]]()[j[3q]]-90)}Q $(j[2x],$1H)[j[2y]](E)[j[Y]](1c)[j[1W]](j[2j])[j[J]](j[cD])[j[2k]]()[j[2d]]()[j[T]](1c)[j[1W]](j[2j])[j[J]](j[5])[j[2k]](),$(j[8X],$1H)[j[3r]](j[5I],$(j[7k],$1H)[j[7l]]()[j[3q]]-90),!$(j[bT],$2a)[j[J]]()==j[5]&&$(j[cE]+E+j[cF])[j[P]]&&($(j[cE]+E+j[cF])[j[1W]](j[2x])[j[2y]](H)[j[Y]](1c)[j[2d]]()[j[T]](1c),$2a[j[3r]](j[5I],$(j[7k],$2a)[j[7l]]()[j[3q]]-90));if(1I(2h)!==1I(U(E)+1)||1I(4q)!==1I(U(H)+1))4e=!1}D 9v(){$o[j[V]]({1K:j[3v]+2p+j[lo]});$8p[j[V]]({1K:j[3v]+2p+j[9y]});$b2[j[V]]({1K:j[3v]+2p+j[lp]});$lk[j[V]]({1K:j[3v]+2p+j[9y]});$kk[j[V]]({1K:j[3v]+2p+j[9y]});$(j[lq],$o)[j[V]]({1S:j[bS]+2D+j[4A]});$(j[ls],$o)[j[V]](j[lt],j[lu]+2D+j[lv]);$(j[lw],$o)[j[V]](j[lx],j[ly]+2D+j[lz]+2D+j[cG]+2D+j[cG]+2D+j[4A]);$(j[lA],$o)[j[V]]({1K:j[3v]+2p+j[lB]})}D 5D(){if(/(6I|6J|6K|6L|6M|6N|6O 6P|6Q|6R)/i[j[18]](6S[j[17]]))$(j[5R])[j[23]]();Q $(j[lC])[j[5M]](D(){$(j[5R])[j[cH]]();if(K[j[7D]]){L b=K[j[7D]];$(K)[j[lD]](D(c){K[j[7D]]=j[5];$(j[b1])[j[46]](j[lE]+b+j[lF]);$(j[5R])[j[V]]({6z:c[j[8P]]-15+j[5P],5c:c[j[cI]]+30+j[5P],aR:j[lG]})[j[lH]](bz)})[j[lI]](D(){K[j[7D]]=b;$(j[5R])[j[cH]]()})[j[lJ]](D(c){$(j[5R])[j[V]]({6z:c[j[8P]]-15+j[5P],5c:c[j[cI]]+30+j[5P]})})}})}D 8C(){L b=O[j[4u]][j[P]];if(1==b)1Q 0;L c=$(j[7d],$o)[j[3L]]();c=U($(j[6Z],$o)[j[V]](j[7a]))/c*O[j[2B]];2m(L d=0;d<b;d++)if(c>=O[j[4u]][j[bo]](d)&&c<=O[j[4u]][j[bp]](d))1Q d;1Q 0}D 7u(){K[j[cJ]]=1d[j[3U]](1U*1d[j[1q]]());K[j[9j]]=1d[j[3U]](1U*1d[j[1q]]());K[j[9h]]=1d[j[3U]](1U*1d[j[1q]]());K[j[5L]]=K[j[cJ]]+j[9i]+K[j[9j]]+j[9i]+K[j[9h]];1Q K[j[5L]]}D cB(b,c,d){L e=2g[j[lK]]||2g[j[lL]]||2g[j[lM]];if(e){if(e[j[lN]]==j[cK]){L g=3F e(b,{7R:c,cL:d});1p(D(){g[j[cM]]()},bq);g[j[9z]]=D(){g[j[cM]]()};g[j[7C]]=D(){1e[j[37]](j[7C])};1Q!1}e[j[lO]](D(f){if(f===j[cK])f=3F e(b,{7R:c,cL:d}),f[j[9z]]=D(){},f[j[7C]]=D(){},f[j[lP]]=D(){},f[j[lQ]]=D(){};Q 1Q!1})}}D lR(b){b=4Q(b)/2A;1Q 2O!=b&&j[5]!=b?60<b&&2T>b?4R(U(b/60))+j[4H]+4R(U(60*(4Q(b/60)-U(b/60)))):2T<=b&&lS>b?U(b/2T)+j[4H]+4R(U(60*(4Q(b/2T)-U(b/2T))))+j[4H]+4R(U(60*(4Q(60*(4Q(b/2T)-U(b/2T)))-U(60*(4Q(b/2T)-U(b/2T)))))):j[lT]+4R(U(b)):j[lU]}D 4R(b){b=j[9A]+b;1Q b[j[lV]](b[j[P]]-2,b[j[P]])}D 5N(b,c){b[j[lW]]();K[j[4S]]=!1;K[j[cN]]=1I(3w(b[j[1]](j[c1]))[j[2S]](j[2z])[1])/2A;K[j[5S]]=0;K[j[lX]]=b[j[J]]();K[j[4T]]=b[j[1W]](j[lY]);K[j[cO]]=K[j[4T]][j[P]];K[j[4U]]=0;K[j[9B]]=3w(b[j[1]](j[lZ]));K[j[cP]]=K[j[9B]][j[P]];K[j[4T]][j[5M]](D(){L d=$(K);d[j[1]](j[9C],d[j[1N]]());d[j[1N]](j[cC])})}D 3G(b){1Q(j[9A]+1d[j[3U]](b/60))[j[cQ]](-2)+j[4H]+(j[9A]+1d[j[3U]](b%60))[j[cQ]](-2)}5N[j[9D]][j[m0]]=D(){1Q K[j[9B]][1d[j[3U]](1d[j[1q]]()*K[j[cP]])]};5N[j[9D]][j[c4]]=D(){K[j[4S]]=!1;K[j[4U]]=K[j[5S]]=0;K[j[4T]][j[5M]](D(){L b=$(K);b[j[1N]](b[j[1]](j[9C]));b[j[T]](j[4S])});K[j[9E]]()};5N[j[9D]][j[9E]]=D(){4N=1==6T?7u():2p;9F=K;K[j[4T]][j[5M]](D(c,d){d=$(d);c>=9F[j[4U]]&&(d[j[V]](j[5L],j[m1]),d[j[V]](j[cR],j[m2]))});if(K[j[5S]]<K[j[cN]])K[j[5S]]++;Q if(K[j[4U]]<K[j[cO]]){L b=K[j[4T]][j[2y]](K[j[4U]]);K[j[5S]]=0;b[j[1]](j[4J],j[m3]+4N+j[4A]);b[j[1N]](b[j[1]](j[9C]))[j[V]](j[cR],1)[j[Y]](j[4S]);K[j[4U]]++}Q K[j[4S]]=!0;K[j[4S]]||m4(D(){9F[j[9E]]()})};$(3k)[j[m5]](D(){$(2g)[j[m6]](D(b){if(1f==b[j[m7]])if(b5=j[5],O[j[8E]])$(j[bx],$o)[j[1A]]();Q $(j[bv],$o)[j[1A]]()})});3k[j[9z]]=D(b){b=b||2g[j[m8]];b=b[j[m9]]||b[j[ma]];L c=3k[j[cS]](j[mb]);b!=c&&!c[j[mc]](b)&&$o[j[2e]](j[S])&&2r&&($o[j[4v]](j[S]),2r=!1)};D md(b,c,d){$[j[4C]]({3a:1F+j[7x]+b,2J:j[4D],4E:j[1N],4F:D(e){if(e[j[7E]](j[cT])&&e[j[7E]](j[cU]))$(j[cV])[j[J]](j[cW]),$1v=$(j[cX]),1E 3I!=j[3]&&2F(3I),cY=3k[j[cS]](j[me]),cY[j[21]]=1F+j[44]+b,1R(e),c?1R(1Y=c):1R(1Y=5v),d?1R(2G=d):1R(2G=!1),1e[j[37]](j[cZ]),7z(),$o[j[T]](j[4t]),$o[j[T]](j[8Q]),$(j[7e],$o)[j[S]](),$(j[7f],$o)[j[S]](),$(j[7g],$o)[j[S]](),$(j[7h],$o)[j[1i]](1C),$(j[4w],$o)[j[1i]](1C),$(j[4x],$o)[j[1i]](1C),$(j[7i],$o)[j[V]]({1K:j[8U]}),$o[j[Y]](j[S]);Q 1g[j[S]](j[d0])},3h:D(e,g,f){1g[j[S]](j[mf])}})}D mh(b,c,d){if(b[j[7E]](j[cT])&&b[j[7E]](j[cU]))$(j[cV])[j[J]](j[cW]),$1v=$(j[cX]),1E 3I!=j[3]&&2F(3I),1R(b),c?1R(1Y=c):1R(1Y=5v),d?1R(2G=d):1R(2G=!1),1e[j[37]](j[cZ]),7z(),$o[j[T]](j[4t]),$o[j[T]](j[8Q]),$(j[7e],$o)[j[S]](),$(j[7f],$o)[j[S]](),$(j[7g],$o)[j[S]](),$(j[7h],$o)[j[1i]](1C),$(j[4w],$o)[j[1i]](1C),$(j[4x],$o)[j[1i]](1C),$(j[7i],$o)[j[V]]({1K:j[8U]}),$o[j[Y]](j[S]);Q 1g[j[S]](j[d0])};',
        62, 1382,
        '|||||||||||||||||||_0xb2c4|||||player|||||||||||||||function|albumId|class|songSheetList|songId|div|154|this|var|localStorage|myhkicon|audio|208|else|myhkMedia|162|166|parseInt|215|u64ad|u653e|159|myhkfont|||||||||||span|207|cur|Math|console|192|myhkTips|myhkLrc|272|u6b4c|100|rid|u5668|uff01|random|setTimeout|209|songTotals|rids|uff1a|title|songFrom3|u97f3|122|songTotal|168|231|myhkplayer|300|cover|typeof|webURL|keyId|albumList|Number|u4e50|background|style|list|152|hasgeci|191|return|eval|color|volume|255|123|234|lrcTimeLine|myhkalbum|u5355|||||||||||songList|pass|setInterval|235|295|u8bcd|window|playingalbumId|albumTotal|233|232|240|for|149|ycgeci|cont|hasLrc|autoswitch|160|500|163|164|222|238|237|380|1E3|151|songFrom2|font_color|hasKsc|clearInterval|myhksong|myhkw|u5df2|type|display|song|00|progressbg|null|songFrom55|172|243|361|3600|u660e|u6708|u6d69|u7a7a|uff0c|myhkcss|||||||||||url|u4e13|u8f91|play|playprogress|switch|playlist|error|important|rgb|document|gcdw|161|182|netmusic|218|270|292|305|306|362|370|String|443|u8f7d|musicheader|u5931|u8d25|u53d6|loop|u6570|new|formatSecond|myhkplaytime|myhkadTime|musictype|214|220|223|startPlay|313|playercss|446|adList|adid|albumTotals|509|href|u52a0|api|blur|myhkgeci|||||||||||musicbottom|album|right|ul|playing|u83b7|u5faa|u73af|u6210|u529f|u636e|myhkload|songFrom4|songFrom33|errCount|currentFrameId|playingsongId|158|lrcTime|210|211|230|286|287|304|312|328|lrcOutTime|359|354|dataType|success|358|360|363|372|offsetcont|375|lrcArray|lrccolor|429|449|parseFloat|foo|559|563|566|skin|op|sg|hide|https|||||||||||img|width|top|artist|u968f|u673a|u4e00|status|note|volumeMiddle|u5173|u95ed|myhkKsc|u5f00|u66f2|rgba|unset|u514d|u8d39|target|data|defaultAlbum|errjc|playisTsMoving|zdyc|myhkplaying|1500|190|261|musicTooltip|294|307|324|326|338|345|352|369|398|Ticker|myhkplayerlist|471|newimg|531|561|u52a8|u672c|u81ea|u7684|u7248|u6d4f|u89c8|||||||||||u8bf7|time|suijibofang|geci|control|aprev|first|prev|pause|u6682|u505c|next|anext|volumeprogress|progressbg1|ts|ksclrc|arrow|bold|myhknow|myhk_player_songid|u7f13|volumeLow|volumeHigh|volumeCross|left|u5b9a|_blank|format|u65b0|u4f18|u5148|140|catch|iPhone|iPod|iPad|Android|ios|Nokia|Black|Berry|MIDP|Phone|navigator|randcolor|141|cicleTime|kscTime|165|174|219|||||||||||217|257|263|276|282|283|284|285|289|311|340|339|tempNum1|tempNum2|344|350|353|364|373|387|myhkrandColor|420|423|431|1024|getlist|450|LimitStr|492|533|589|u6b62|u5728|u9762|u7ad9|u5236|padding|5px|canvas|height|artiststyle|u9996|u4e0b|body|u542f|f00|mapMarker|ksc|shunxubofang|errorCircle|u70b9|u51fb|||||||||||u7533|index|letterfx|dir|line1|line2|u5b58|uff08|uff09|u6307|mobile|myhkfeed|150|104|121|switchPlayer|songName|127|songFrom|songFrom1|myhkqq|142|visTsMoving|144|145|146|147|148|GetCurrentFrame|175|176|179|200|205|221|myhkTipsTime|253|254|256|268|274|277|279|playerHeight|280|playlistHeight|290|296|297|321|319|320|||||||||||kscLineNow1|kscLineNow2|374|lrcHeight|isNaN|lrcStr|try|400|401|404|419|433|451|458|defaultVolume|472|473|LimitHeight|482|484|485|playerColor|496|coverHeight|517|550|556|567|570|573|574|self|true|u7981|src|fadfa3|030307|u6b63|u5730|text|css|mainColor|none|155|infos|music|moshi|artist1|u4e0a|aria|volumecontrol|progressbg2|qhms|anniu_kaiqi|u59cb|u6b22|u8fce|u5149|u4e34|lrc|show|u8d85|u6b21|load|u4e2d||u9177|qq|u5343|getInfos|nexts|volumechange|seeking|timeupdate|u5f53|u524d|danquxunhuan|u987a|u5e8f|offset|successCircle|u663e||u793a|creat|getSongId|getalbumId|jsonp|split|scrollTop|line|lighter|showLetters|KB|u6700|u5927|u9650|float|share|nbsp|linear|gradient|90deg|transparent|tooltip|opacity|mobiles|skins|Date|throw|Error|beforeUnloadHandler|267|myhkCicle|songTime|120|tips|128|136|auto|177|181|180|184|183|186|185||188|187||allmusic|193|195|197|199|201|203|212|213|3E3|226|227|228|229|241|236|244|242|250|264|262|Volumeprogress|Drag|parentObj|callback|arguments|271|273|302|303|myhkid|309|310|316|322|323|325|327|335|348|lrcurl|349|357|368|377|void|384|words|392|393|399|600|402|403|405|407|424|425|426|427|428|myhkplayerversion|434|435|436|437|439|440||452|455|456|457|461|vol|albumIds|475|476|477|songlocations|488|501|showMsgNotification|507|512|514|515|527|532|534|543|548|icon|549|560|565|569|571|576|586|588|590|592|591|593|cssReset|595|596|attr|myhk|undefined|myhk_player_load|getItem|myhk_player_feed|getTime|userAgent|test|indexOf|location|u79fb|u7aef|u5176|u4ed6|u9875|replace|key|u8c6a|u91c7|u7528|u5668V|20220818|u63a7|u677f|log|com|pirated|website|u5351|u9119|u76d7|u5740|uff1ahttps|ffff00|setItem|link|rel|stylesheet|media|all|append|head|u60a8|u4e0d|u652f|u6301canvas|u66f4|u6362|u9ad8|u7ea7|static|images|default|jpg|0px|inline|songstyle|name|timestyle|clockCircle|user|musicAlbum|backward|playCircle|pauseCircle|pdyf1|hidden|pdyf2|pdyf3|forward|last|19px|81px|u5217|u8868|48939749|myhk_player_lrc|myhk_player_ksc|myhk_player_lrcheight|myhk_player_time|myhk_player_times|myhk_player_album||myhk_player_song|currentTime|duration||u521d|u5316|html|addClass|showPlayer|removeClass|u8fde|u7eed|u8fc73|songNames|u8d44|u6e90|u5c1d|u8bd5|coverplay|myhk_player|no|paused|u51b2|myhk_player_qq|myhk_player_version|songTypes|songIds|wy|u7f51|u6613|u72d7|QQ|u54aa|u5495|u6211|qi|local|length|showSongList|buffered|start|end|toFixed|addEventListener|ended|toggleClass|click|parent|find|siblings|myhk_player_auto|yes|random_play|false|84px|myhk_player_volume|u91cf|pageX|showAlbumList|mCustomScrollbar|hidePlayer|hasClass|u4f4d|anniu_guanbi|u6253|playList|cssText|block|FFF|u7531|MYHKW|CN||u63d0|u4f9b|artistNames|u300a|songSheetName|u300b|author|update|scrollTo|position|karaoke|u65e0|musicLyric|GET|jsoncallback|txt|ajax|round|push|inArray|removeAttr|animate|match|myhkLrc0|string|sort|shift|smear|rewind|reset|ticker|wave|150ms|each|u7537|u5973|u5408|blank|myhk_player_list|admin|playerlist|version|removeItem|u51fa|u8bfb|u539f|beforeunload|contents|u975e|u56fdIP|u754c|u88ab|u7be1|u6539|u91cd|adurl|adtitle|megaphone|adname|px|u4e8e|u603b|u672a|charCodeAt|charAt|locations|musicUrl|albumNames|musicPic|picId|albumCovers|changing|onload|script|onerror|q1|qlogo|nk|u56fe|u7247|u9690|u85cf|scroll|WeixinJSBridgeReady|touchstart|removeEventListener|u9891|u9700|u8981|u4ece|u65f6|u957f|floor|slice|then|border|4px|solid|image|remove|pageY|mousemove|mouseout|fadeIn|mouseover|Notification|mozNotification|webkitNotification|permission|granted|close|onclick|onshow|onclose|requestPermission|substring|lettering|done|cycleCount|cycleCurrent|original|letters|letterCount|letterCurrent|chars|label|charsCount|orig|substr|getChar|prototype|000|keyCode|keydown|ready|event|srcElement|getElementById|contains|includes|u5f02|u5e38|101|102|103|105|106|107|108|109|110|111|112|113|114|115|116|117|118|119|Audio|124|125|126|129||130||131|132|133|134|135|137|138|139|143|153|156|157|800|167|169|170|171|173|178|seeked|189|myhkversion|194|196|198|202|204|206|216|clearTimeout|224|225|239|246|245|247|249|248|251|252|258|259|260|265|266|269|lockY|275|lockX|278|291|281|288|293|301|298|299|siteName|308|314|315|317|318|329|330|331|332|334|333|336|337|lrcTimeEnable|341|342||343|346|347|351|cache|355|356|lrcs|Za|365|366|367|371|lrcCont|decodeURIComponent|376|378|u001f|379|381|382|383|385|386|388|389|390|letter_end|391|395|394|396|fx_duration|397|406|408|409|410|411|412|413|414|415|416|417|418|421|422|kscCont||letterTime1|letterTime2|430||432|438|441|toString|442|444|445|447|448|453|454||459|460|462|463|464|465|1E4|469|466|467|468|showNotes|470|switchopen|randomPlayer|474|showLrc|showGreeting|greeting|5E3|478|479|480|481|483|Image|486|encodeURIComponent|487|489|490|491|493|494|495|4E3|mautoPlayer|autoPlayer|499|497|498|502|511|505|506|showMsg|508||510||504|503|513|516|518|519||523|520|521|522|528|524|525|526|530|529|542|541|537|538|540|539|536|535|544|545|546|547|553|551|552|MillisecondToDate|86400|554|555|557|558|562|564|568|572|575|577|578|requestAnimationFrame|581|580|579|582|583|584|585|587|myhkloadlist|594|597||myhklist'
            .split('|'), 0, {}))
})(jQuery);