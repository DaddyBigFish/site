(function (t) {
    function e(e) {
        for (var i, n, r = e[0], l = e[1], c = e[2], p = 0, u = []; p < r.length; p++) n = r[p], Object.prototype.hasOwnProperty.call(s, n) && s[n] && u.push(s[n][0]), s[n] = 0;
        for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (t[i] = l[i]);
        d && d(e);
        while (u.length) u.shift()();
        return o.push.apply(o, c || []), a();
    }

    function a() {
        for (var t, e = 0; e < o.length; e++) {
            for (var a = o[e], i = true, r = 1; r < a.length; r++) {
                var l = a[r];
                0 !== s[l] && (i = false);
            }
            i && (o.splice(e--, 1), t = n(n.s = a[0]));
        }
        return t;
    }
    var i = {},
        s = {
            app: 0
        },
        o = [];

    function n(e) {
        if (i[e]) return i[e].exports;
        var a = i[e] = {
            i: e,
            l: false,
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, n), a.l = true, a.exports;
    }
    n.m = t, n.c = i, n.d = function (t, e, a) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: true,
            get: a
        });
    }, n.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: true
        });
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", {
                enumerable: true,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) n.d(a, i, function (e) {
                return t[e];
            }.bind(null, i));
        return a;
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default;
        } : function () {
            return t;
        };
        return n.d(e, "a", e), e;
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "";
    var r = window.webpackJsonp = window.webpackJsonp || [],
        l = r.push.bind(r);
    r.push = e, r = r.slice();
    for (var c = 0; c < r.length; c++) e(r[c]);
    var d = l;
    o.push([0, "chunk-vendors"]), a();
}({
    0: function (t, e, a) {
        t.exports = a("56d7");
    },
    "00bf": function (t, e, a) {
        t.exports = a.p + "img/testimonial-light.2e10cd20.png";
    },
    "0185": function (t, e, a) {
        t.exports = a.p + "img/about-us-light.f1bb2abe.png";
    },
    "029c": function (t, e, a) {
        t.exports = a.p + "img/digital-agency.e407e1da.png";
    },
    "03c3": function (t, e, a) {
        t.exports = a.p + "img/service-04.89925d87.jpg";
    },
    "03ed": function (t, e, a) {
        t.exports = a.p + "img/service-01.89925d87.jpg";
    },
    "0513": function (t, e, a) {
        t.exports = a.p + "img/portfolio-04.5dee8713.jpg";
    },
    "05ba": function (t, e, a) {
        var i = {
            "./testimonial-01.jpg": "e352",
            "./testimonial-02.jpg": "32f1",
            "./testimonial-03.jpg": "eb91",
            "./testimonial-dark-01 - Copy - Copy.jpg": "3d0a",
            "./testimonial-dark-01.jpg": "43b2",
            "./testimonial-dark-02.jpg": "d41f",
            "./testimonial-dark-03.jpg": "9e69"
        };

        function s(t) {
            var e = o(t);
            return a(e);
        }

        function o(t) {
            if (!a.o(i, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e;
            }
            return i[t];
        }
        s.keys = function () {
            return Object.keys(i);
        }, s.resolve = o, t.exports = s, s.id = "05ba";
    },
    "06b0": function (t, e, a) {
        t.exports = a.p + "img/bg-image-1.0d2d668d.jpg";
    },
    "06b2": function (t, e, a) {
        t.exports = a.p + "img/timeline.2fff7f3e.png";
    },
    "072f": function (t, e, a) {
        t.exports = a.p + "img/service-06.89925d87.jpg";
    },
    "079c": function (t, e, a) {
        t.exports = a.p + "img/icon-04.22f075a5.png";
    },
    "07bb": function (t, e, a) {
        t.exports = a.p + "img/service-02.89925d87.jpg";
    },
    "08ae": function (t, e, a) {
        t.exports = a.p + "img/blog-details-light.5d42fa78.png";
    },
    "08c3": function (t, e, a) {
        t.exports = a.p + "img/business-consulting-2-light.057bcc67.png";
    },
    "09c8": function (t, e, a) {
        t.exports = a.p + "img/badge-vue-js.cec90966.png";
    },
    "0a08": function (t, e, a) {
        t.exports = a.p + "img/startup-light.db61ca38.png";
    },
    "0a35": function (t, e, a) {
        t.exports = a.p + "img/icon-01.2f8d9b1c.png";
    },
    "0a93": function (t, e, a) {
        t.exports = a.p + "img/team-03.886c5b36.jpg";
    },
    "0da9": function (t, e, a) {
        t.exports = a.p + "img/travel-agency.83fbb38e.png";
    },
    "0daf": function (t, e, a) {
        t.exports = a.p + "img/counter.c56f561f.png";
    },
    "0e51": function (t, e, a) {
        t.exports = a.p + "img/blog-grid-sidebar.ba9c3618.png";
    },
    "0edc": function (t, e, a) {
        t.exports = a.p + "img/portfolio-03.5dee8713.jpg";
    },
    "0edf": function (t, e, a) {
        t.exports = a.p + "img/about-4.388dc2b1.png";
    },
    "103c": function (t, e, a) {
        t.exports = a.p + "img/bg-image-9.0d2d668d.jpg";
    },
    1053: function (t, e, a) {
        t.exports = a.p + "img/service-06.89925d87.jpg";
    },
    "11dc": function (t, e, a) {
        t.exports = a.p + "img/web-agency.dc53d05e.png";
    },
    1449: function (t, e, a) {
        t.exports = a.p + "img/bg-image-3.0d2d668d.jpg";
    },
    1582: function (t, e, a) {
        t.exports = a.p + "img/top-banner.60723241.png";
    },
    "16c7": function (t, e, a) {
        t.exports = a.p + "img/bg-png-01.2afe854f.png";
    },
    1707: function (t, e, a) {
        t.exports = a.p + "img/creative-portfolio.7976dbc0.png";
    },
    "19bd": function (t, e, a) {
        t.exports = a.p + "img/service-01.89925d87.jpg";
    },
    "1add": function (t, e, a) {
        t.exports = a.p + "img/split-03.1dba12e3.jpg";
    },
    "1b2d": function (t, e, a) {
        t.exports = a.p + "img/business-light.ee8b5d83.png";
    },
    "1c99": function (t, e, a) {
        t.exports = a.p + "img/about-6.388dc2b1.png";
    },
    "1ea6": function (t, e, a) {
        var i = {
            "./tabs-01.jpg": "6a78",
            "./tabs-02.jpg": "9ff7",
            "./tabs-03.jpg": "9f4e",
            "./tabs-04.jpg": "bc96",
            "./tabs-05.jpg": "4bff"
        };

        function s(t) {
            var e = o(t);
            return a(e);
        }

        function o(t) {
            if (!a.o(i, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e;
            }
            return i[t];
        }
        s.keys = function () {
            return Object.keys(i);
        }, s.resolve = o, t.exports = s, s.id = "1ea6";
    },
    "1ee9": function (t, e, a) {
        t.exports = a.p + "img/testimonial.709fb5f1.png";
    },
    "24df": function (t, e, a) {
        t.exports = a.p + "img/blog-list-sidebar.2671809d.png";
    },
    2697: function (t, e, a) {
        t.exports = a.p + "img/team-light.e8a1cc3f.png";
    },
    2727: function (t, e, a) {
        t.exports = a.p + "img/bg-image-17.0d2d668d.jpg";
    },
    "2a15": function (t, e, a) {
        t.exports = a.p + "img/service-05.89925d87.jpg";
    },
    3109: function (t, e, a) {
        t.exports = a.p + "img/blog-list-view.0d685a87.png";
    },
    3150: function (t, e, a) {
        t.exports = a.p + "img/portfolio-06.5dee8713.jpg";
    },
    "31fe": function (t, e, a) {
        t.exports = a.p + "img/portfolio-details.c0cb6640.png";
    },
    "32f1": function (t, e, a) {
        t.exports = a.p + "img/testimonial-02.886c5b36.jpg";
    },
    3379: function (t, e, a) {
        t.exports = a.p + "img/portfolio-full-width-light.b94ab00a.png";
    },
    "339d": function (t, e) {
        t.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCADwAYYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD6gooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA82+Osvj5vDEFn8P7My6jcylbi6WaKNoIgP4fMYDLE4yM4APQ4NeKprPj/4FfFjwno+seLbjxXY640STwXLvJs3yeWwXeSQVJBBBGcYIr6U8XeMtC8J28Ueta1a6M14rpbyXEgTcQBkr9Nw/OvlXXPDWofA744+DNQ8Rau3j0XzLHHdah5nnQfOE3KGkbld+VySOvAOCADvvjh468UeIfi1ofw08LatJoJuUWS6v4CVkyQzkAjBAVFzgEZJxmpvgF4+8Saf8R/Efw48Vam+tXGnBpbW/lJMjBSuQSeSGV1YZyRgjJ4qb41fCPxbcfEzRvH/AIGW3udVtUWOa0uJFTJXIDfMQCpVipGQeOOvHC/s9prPiT9pPxNrGrSW097bW832yax5gWQsiBEPcDBAPOdhOT1IA+78Q+Pvjn4+8Zp4d8UXPh3SvDqv9mgtZHjE5VmVA20gkvsYknOOBivQvgX8eE1n4SXuueL7wxyaNcC2u71YGcujbfLdljUnPzbSQO2T1riP2WJF03xV8V4blhFJE2XDHGAjzhj+GRT/ANjvRrTV/ht42t9URW0q7mFvOXOF2eUd/PbAYHPagD2zUfjp4G0nw3pev3WvJHpWps6Wk4t5mMpQ4cbAhYYPByB29a83+LWs+P8Axz8S9L8HeFJdT8OaHJEslxrkdtLGpYoZDmTAIwuF25BLEg+3z18FbbT9f+LvhnQ9U1F7jw/aX80lksq4SR/vIMHpvZEyO/TvX2N8bfi9Y/CLwm96+yfVrnMdhZk/6x8feb/YXIJ/AdTQB5j+z7438V6f8VvEnw+8R6vL4gisI5JIrydi8isjqPvHnDB+hJwQMd60P2s/ivfeEdDs/Dug3c9prV//AKTNPaSMksFshzkMuCu5hjI7Kw71o/s2fC2/8K6fqPjHxIXl8T6+DPKsg+eGJjvwR/eY4YjthRwQa+a9a+LmleKr74haxrFveyazrcC2elKiI0NrAHU4YlgQdqIPlB/i/vUAfS3wj8f3uk/syp4q1W6uNWvbS3vJzLeTNI8rLNIEVnYk44VfYV4n/wAJH8Uh8PP+Fr/8JpdeV9v8v+y9x8jZv2bvLzsxv+Xbt6c5ro/h54mt/EP7I3irQrWGcXmi20huGdQEYPM8oKEEk4UHOQPxqobqL/hhxY/MXf8Aa/Lxn+L7bux/3zzQB9S+BPE6+NPBui66qCL7faxztGDkIxX5l/A5H4Vu159+z9A9v8GPCSyAqxslcA+jEkfoRXoNABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAHEfFr4TaT8XvDqaZqbyW0sEnm213BjfC+MHg9VI6j6dCAa8/wDBP7KtpoPimw1zxD4nvvFdxpxU2cVzGUSMqcpnLuSFPIAIGfyr3eigDhvi58Nrn4oaDa6Zb+ILnw+kdx5s0lqpYzJtZTGcMvHzZ5z06VP8L/hTofwm0JtO0ZJHeZg9zdzkGWdgOCSAAAOcAcDJ7kk9lRQB4Z8Qv2WbPxb4q1DXNH8R3nhmbU1Zb+G3j3pPu+/0dcBsZIOQTziunj+Cdvo3wiu/Avh3VH0hbtSs+pSQ+dJJvI8wlQyjLKNvXgV6ZRQB4Bf/ALJVk/hLwxpuneIG0zV9FnkuDq6WW5p2dg2SnmDaVKpj5jgD3qf4q/syXvxR8Ww69N4ybT54reKFI0sC4RkHLIfOG3LZbHbPU9a94ooA8e+HPwP8S+CfFdtq2pfEnVfEdpEjq2n3SSiNyykAndOw4Jz07V3XxE8DxePfBWq6As6aeb6IR/aRCJPLwwOduRnp6iunooA4r4bfDG38B/Di38I3Vyms2ypPHNK0HlCZJHdipXc3GHI615P/AMMY6d9v8j/hLdT/AOEZ+0faP7H2fxdPv7sZxxu2ZxX0bRQBBY2MGmWNvZ2sSwWtvGsUUSdERRhQPYAAVPRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//2Q==";
    },
    "33f6": function (t, e, a) {
        t.exports = a.p + "img/social-share-light.b39aaad5.png";
    },
    3541: function (t, e, a) {
        t.exports = a.p + "img/event-conference.8dae7396.png";
    },
    3585: function (t, e, a) {
        t.exports = a.p + "img/progressbar.f6c7947d.png";
    },
    "365b": function (t, e, a) {
        t.exports = a.p + "img/blog-grid.ff1eee32.png";
    },
    "368e": function (t, e, a) {
        t.exports = a.p + "img/icon-03 - Copy.a7cfef6e.png";
    },
    "36e2": function (t, e, a) {
        t.exports = a.p + "img/team-05.1512b183.jpg";
    },
    "376b": function (t, e, a) {
        t.exports = a.p + "img/bg-image-2.efdc4e1a.jpg";
    },
    "39ef": function (t, e, a) {
        t.exports = a.p + "img/team.e6122159.png";
    },
    "39fb": function (t, e, a) {
        t.exports = a.p + "img/travel-agency-light.a8bbbf54.png";
    },
    "3a6c": function (t, e, a) {
        t.exports = a.p + "img/about-us.10d54974.png";
    },
    "3d0a": function (t, e, a) {
        t.exports = a.p + "img/testimonial-dark-01 - Copy - Copy.886c5b36.jpg";
    },
    4093: function (t, e, a) {
        t.exports = a.p + "img/about-3.1cbbd39a.png";
    },
    4098: function (t, e, a) {
        t.exports = a.p + "img/bg-image-11.0d2d668d.jpg";
    },
    "42f7": function (t, e, a) {
        t.exports = a.p + "img/brand-04.4528d6e8.png";
    },
    "42ff": function (t, e, a) {
        t.exports = a.p + "img/portfolio.04f67b36.png";
    },
    "430d": function (t, e, a) {
        t.exports = a.p + "img/call-to-action-light.9d6adb27.png";
    },
    "435a": function (t, e) {
        t.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCADwAYYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD6gooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA82+Osvj5vDEFn8P7My6jcylbi6WaKNoIgP4fMYDLE4yM4APQ4NeKprPj/4FfFjwno+seLbjxXY640STwXLvJs3yeWwXeSQVJBBBGcYIr6U8XeMtC8J28Ueta1a6M14rpbyXEgTcQBkr9Nw/OvlXXPDWofA744+DNQ8Rau3j0XzLHHdah5nnQfOE3KGkbld+VySOvAOCADvvjh468UeIfi1ofw08LatJoJuUWS6v4CVkyQzkAjBAVFzgEZJxmpvgF4+8Saf8R/Efw48Vam+tXGnBpbW/lJMjBSuQSeSGV1YZyRgjJ4qb41fCPxbcfEzRvH/AIGW3udVtUWOa0uJFTJXIDfMQCpVipGQeOOvHC/s9prPiT9pPxNrGrSW097bW832yax5gWQsiBEPcDBAPOdhOT1IA+78Q+Pvjn4+8Zp4d8UXPh3SvDqv9mgtZHjE5VmVA20gkvsYknOOBivQvgX8eE1n4SXuueL7wxyaNcC2u71YGcujbfLdljUnPzbSQO2T1riP2WJF03xV8V4blhFJE2XDHGAjzhj+GRT/ANjvRrTV/ht42t9URW0q7mFvOXOF2eUd/PbAYHPagD2zUfjp4G0nw3pev3WvJHpWps6Wk4t5mMpQ4cbAhYYPByB29a83+LWs+P8Axz8S9L8HeFJdT8OaHJEslxrkdtLGpYoZDmTAIwuF25BLEg+3z18FbbT9f+LvhnQ9U1F7jw/aX80lksq4SR/vIMHpvZEyO/TvX2N8bfi9Y/CLwm96+yfVrnMdhZk/6x8feb/YXIJ/AdTQB5j+z7438V6f8VvEnw+8R6vL4gisI5JIrydi8isjqPvHnDB+hJwQMd60P2s/ivfeEdDs/Dug3c9prV//AKTNPaSMksFshzkMuCu5hjI7Kw71o/s2fC2/8K6fqPjHxIXl8T6+DPKsg+eGJjvwR/eY4YjthRwQa+a9a+LmleKr74haxrFveyazrcC2elKiI0NrAHU4YlgQdqIPlB/i/vUAfS3wj8f3uk/syp4q1W6uNWvbS3vJzLeTNI8rLNIEVnYk44VfYV4n/wAJH8Uh8PP+Fr/8JpdeV9v8v+y9x8jZv2bvLzsxv+Xbt6c5ro/h54mt/EP7I3irQrWGcXmi20huGdQEYPM8oKEEk4UHOQPxqobqL/hhxY/MXf8Aa/Lxn+L7bux/3zzQB9S+BPE6+NPBui66qCL7faxztGDkIxX5l/A5H4Vu159+z9A9v8GPCSyAqxslcA+jEkfoRXoNABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAHEfFr4TaT8XvDqaZqbyW0sEnm213BjfC+MHg9VI6j6dCAa8/wDBP7KtpoPimw1zxD4nvvFdxpxU2cVzGUSMqcpnLuSFPIAIGfyr3eigDhvi58Nrn4oaDa6Zb+ILnw+kdx5s0lqpYzJtZTGcMvHzZ5z06VP8L/hTofwm0JtO0ZJHeZg9zdzkGWdgOCSAAAOcAcDJ7kk9lRQB4Z8Qv2WbPxb4q1DXNH8R3nhmbU1Zb+G3j3pPu+/0dcBsZIOQTziunj+Cdvo3wiu/Avh3VH0hbtSs+pSQ+dJJvI8wlQyjLKNvXgV6ZRQB4Bf/ALJVk/hLwxpuneIG0zV9FnkuDq6WW5p2dg2SnmDaVKpj5jgD3qf4q/syXvxR8Ww69N4ybT54reKFI0sC4RkHLIfOG3LZbHbPU9a94ooA8e+HPwP8S+CfFdtq2pfEnVfEdpEjq2n3SSiNyykAndOw4Jz07V3XxE8DxePfBWq6As6aeb6IR/aRCJPLwwOduRnp6iunooA4r4bfDG38B/Di38I3Vyms2ypPHNK0HlCZJHdipXc3GHI615P/AMMY6d9v8j/hLdT/AOEZ+0faP7H2fxdPv7sZxxu2ZxX0bRQBBY2MGmWNvZ2sSwWtvGsUUSdERRhQPYAAVPRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//2Q==";
    },
    "43b2": function (t, e, a) {
        t.exports = a.p + "img/testimonial-dark-01.886c5b36.jpg";
    },
    4610: function (t, e, a) {
        t.exports = a.p + "img/blog-details.2c1ac759.png";
    },
    4625: function (t, e, a) {
        t.exports = a.p + "img/error-light.da39805a.png";
    },
    4739: function (t, e, a) {
        t.exports = a.p + "img/split-01.1dba12e3.jpg";
    },
    "475a": function (t, e, a) {
        t.exports = a.p + "img/team-dark-05.8f312446.jpg";
    },
    4799: function (t, e, a) {
        t.exports = a.p + "img/consulting-light.8a38e652.png";
    },
    4896: function (t, e, a) {
        t.exports = a.p + "img/bg-image-6.0d2d668d.jpg";
    },
    "49eb": function (t, e, a) {
        t.exports = a.p + "img/button.236fc87d.png";
    },
    "4bff": function (t, e, a) {
        t.exports = a.p + "img/tabs-05.f16c1f08.jpg";
    },
    "4d23": function (t, e, a) {
        t.exports = a.p + "img/timeline-01.590121df.jpg";
    },
    "4df0": function (t, e, a) {
        t.exports = a.p + "img/timeline-light.c64919e7.png";
    },
    "4e0b": function (t, e, a) {
        t.exports = a.p + "img/portfolio-grid-layout-light.20ed7a06.png";
    },
    "4eac": function (t, e, a) {
        t.exports = a.p + "img/portfolio-01.5dee8713.jpg";
    },
    "52a6": function (t, e, a) {
        t.exports = a.p + "img/bg-image-8.0d2d668d.jpg";
    },
    5318: function (t, e, a) {
        t.exports = a.p + "img/portfolio-box-layout.9b414a32.png";
    },
    "54ea": function (t, e, a) {
        t.exports = a.p + "img/bg-image-4.29238c1d.jpg";
    },
    5543: function (t, e, a) {
        t.exports = a.p + "img/team-dark-02.8f312446.jpg";
    },
    "56d7": function (t, e, a) {
        "use strict";
        a.r(e);
        var i = a("2b0e"),
            s = function () {
                var t = this,
                    e = t._self._c;
                return e("router-view");
            },
            o = [],
            n = {},
            r = n,
            l = a("2877"),
            c = Object(l.a)(r, s, o, false, null, null, null),
            d = c.exports,
            p = a("8c4f"),
            u = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", {
                    attrs: {
                        "footer-style": 2
                    }
                }, [e("div", {
                    staticClass: "demo-slider-area slider-area bg-transparent slider-style-1 pb--100 pt--70"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("div", {
                    staticClass: "inner text-center"
                }, [e("div", {
                    staticClass: "react-image mb--20",
                    attrs: {
                        "data-aos": "fade-up"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("09c8"),
                        alt: "Doob Vue"
                    }
                })]), e("h1", {
                    staticClass: "title display-two",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "100"
                    }
                }, [t._v(" Next-gen all-in-one "), e("br"), e("span", {
                    staticClass: "theme-gradient"
                }, [t._v("Business")]), t._v(" & "), e("span", {
                    staticClass: "theme-gradient"
                }, [t._v("Consulting")]), e("br"), t._v(" Vue.js Template. ")]), e("p", {
                    staticClass: "description",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "150"
                    }
                }, [t._v(" We help our clients succeed by creating brand identities, digital experiences, and print materials. ")]), e("div", {
                    staticClass: "button-group",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "200"
                    }
                }, [e("a", {
                    staticClass: "btn-default btn-large round btn-icon",
                    attrs: {
                        href: "#demo"
                    }
                }, [t._v("View Demo "), e("Icon", {
                    attrs: {
                        name: "arrow-down"
                    }
                })], 1)])])])])])]), e("Separator"), e("div", {
                    staticClass: "rn-demo-area rn-section-gap",
                    attrs: {
                        id: "demo"
                    }
                }, [e("div", {
                    staticClass: "wrapper plr--150 plr_lg--30 plr_md--30 plr_sm--30"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "All Demo Here",
                        title: "Doob All Demo.",
                        description: "We create a business and consulting Vue.js template with 50+ elements features. <br /> 19+ demo pages, faster loading and well documentated code.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row row--15"
                }, t._l(t.demoPages, function (a, i) {
                    return e("div", {
                        key: i,
                        staticClass: "col-lg-4 col-md-6 col-12 mt--40",
                        attrs: {
                            "data-aos": "fade-up",
                            "data-aos-delay": 100 + i
                        }
                    }, [e("div", {
                        staticClass: "single-demo"
                    }, [e("router-link", {
                        attrs: {
                            to: a.url
                        }
                    }, [e("div", {
                        staticClass: "thumbnail"
                    }, [e("img", {
                        staticClass: "image-dark",
                        attrs: {
                            src: a.image,
                            alt: "Corporate images"
                        }
                    }), e("img", {
                        staticClass: "image-light",
                        attrs: {
                            src: a.imageLight,
                            alt: "Corporate images"
                        }
                    }), a.badge ? e("span", {
                        staticClass: "label-badge"
                    }, [t._v(t._s(a.badge))]) : t._e()])]), e("h4", {
                        staticClass: "title"
                    }, [e("router-link", {
                        attrs: {
                            to: a.url
                        }
                    }, [t._v(t._s(a.title))])], 1)], 1)]);
                }), 0)])]), e("Separator"), e("div", {
                    staticClass: "rn-inner-pages rn-section-gap"
                }, [e("div", {
                    staticClass: "wrapper plr--150 plr_lg--30 plr_md--30 plr_sm--30"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "All Others Pages",
                        title: "All Others Pages.",
                        description: "Have a nice inner pages include in doob template.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row"
                }, t._l(t.innerPages, function (a, i) {
                    return e("div", {
                        key: i,
                        staticClass: "col-lg-4 col-md-6 col-12 mt--40",
                        attrs: {
                            "data-aos": "fade-up",
                            "data-aos-delay": 100 + i
                        }
                    }, [e("div", {
                        staticClass: "single-demo"
                    }, [e("router-link", {
                        attrs: {
                            to: a.url
                        }
                    }, [e("div", {
                        staticClass: "thumbnail"
                    }, [e("img", {
                        staticClass: "image-dark",
                        attrs: {
                            src: a.image,
                            alt: "Corporate images"
                        }
                    }), e("img", {
                        staticClass: "image-light",
                        attrs: {
                            src: a.imageLight,
                            alt: "Corporate images"
                        }
                    })])]), e("h4", {
                        staticClass: "title"
                    }, [e("router-link", {
                        attrs: {
                            to: a.url
                        }
                    }, [t._v(t._s(a.title))])], 1)], 1)]);
                }), 0)])])], 1);
            },
            m = [],
            g = function () {
                var t = this,
                    e = t._self._c;
                return e("main", {
                    staticClass: "page-wrapper"
                }, [e("Header", {
                    attrs: {
                        data: t.$props
                    }
                }), e("div", {
                    staticClass: "main-content"
                }, [t._t("default")], 2), 1 === t.footerStyle ? e("Footer", {
                    attrs: {
                        data: t.$props
                    }
                }) : t._e(), 2 === t.footerStyle ? e("FooterTwo", {
                    attrs: {
                        data: t.$props
                    }
                }) : t._e(), 3 === t.footerStyle ? e("FooterThree", {
                    attrs: {
                        data: t.$props
                    }
                }) : t._e()], 1);
            },
            b = [],
            v = function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    class: {
                        "header-transparent-with-topbar": t.data.headerTransparency
                    }
                }, [t.data.showTopHeader && 1 === t.data.topbarStyle ? e("div", {
                    staticClass: "header-top-news",
                    style: {
                        "background-image": `url(${a("1582")})`
                    }
                }, [e("div", {
                    staticClass: "wrapper"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("div", {
                    staticClass: "inner"
                }, [t._m(0), e("div", {
                    staticClass: "right-button"
                }, [e("a", {
                    staticClass: "btn-read-more",
                    attrs: {
                        href: "#"
                    }
                }, [e("span", [t._v("Purchase Now "), e("Icon", {
                    attrs: {
                        name: "arrow-right"
                    }
                })], 1)])])])])])])]), e("div", {
                    staticClass: "icon-close"
                }, [e("button", {
                    staticClass: "close-button bgsection-activation",
                    on: {
                        click: function (e) {
                            return e.preventDefault(), t.AppFunctions.addClass(".header-top-news", "deactive");
                        }
                    }
                }, [e("Icon", {
                    attrs: {
                        name: "x"
                    }
                })], 1)])]) : t._e(), t.data.showTopHeader && 2 === t.data.topbarStyle ? e("div", {
                    staticClass: "header-top-bar"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row align-items-center"
                }, [e("div", {
                    staticClass: "col-lg-4 col-md-12 col-12"
                }, [e("div", {
                    staticClass: "header-left"
                }, [e("p", [e("a", {
                    attrs: {
                        href: "#"
                    }
                }, [t._v("Get the most advanced template "), e("Icon", {
                    attrs: {
                        name: "chevron-right"
                    }
                })], 1)])])]), e("div", {
                    staticClass: "col-lg-8 col-md-12 col-12"
                }, [e("div", {
                    staticClass: "header-right"
                }, [e("div", {
                    staticClass: "address-content"
                }, [e("p", [e("Icon", {
                    attrs: {
                        name: "map-pin"
                    }
                }), e("span", [t._v("Alabama, USA")])], 1), e("p", [e("Icon", {
                    attrs: {
                        name: "phone"
                    }
                }), t._m(1)], 1)]), e("div", {
                    staticClass: "social-icon-wrapper"
                }, [e("ul", {
                    staticClass: "social-icon social-default icon-naked"
                }, [e("li", [e("a", {
                    attrs: {
                        target: "_blank",
                        href: "https://www.facebook.com/"
                    }
                }, [e("Icon", {
                    attrs: {
                        name: "facebook"
                    }
                })], 1)]), e("li", [e("a", {
                    attrs: {
                        target: "_blank",
                        href: "https://www.twitter.com"
                    }
                }, [e("Icon", {
                    attrs: {
                        name: "twitter"
                    }
                })], 1)]), e("li", [e("a", {
                    attrs: {
                        target: "_blank",
                        href: "https://www.instagram.com"
                    }
                }, [e("Icon", {
                    attrs: {
                        name: "instagram"
                    }
                })], 1)]), e("li", [e("a", {
                    attrs: {
                        target: "_blank",
                        href: "https://www.linkedin.com"
                    }
                }, [e("Icon", {
                    attrs: {
                        name: "linkedin"
                    }
                })], 1)])])])])])])])]) : t._e(), e("header", {
                    class: ["rn-header header-default header-not-transparent header-sticky " + t.data.headerClass]
                }, [e("div", {
                    staticClass: "container position-relative"
                }, [e("div", {
                    staticClass: "row align-items-center row--0"
                }, ["right" === t.data.navAlignment ? [e("div", {
                    staticClass: "col-lg-3 col-md-6 col-4"
                }, [e("Logo")], 1), e("div", {
                    staticClass: "col-lg-9 col-md-6 col-8 position-static"
                }, [e("div", {
                    staticClass: "header-right"
                }, [e("nav", {
                    staticClass: "mainmenu-nav d-none d-lg-block"
                }, [e("Nav")], 1), e("div", {
                    staticClass: "header-btn"
                }, [e("a", {
                    class: t.data.buyButtonClass,
                    attrs: {
                        href: "#"
                    }
                }, [t._v(" BUY NOW ")])]), e("div", {
                    staticClass: "mobile-menu-bar ml--5 d-block d-lg-none"
                }, [e("div", {
                    staticClass: "hamberger"
                }, [e("button", {
                    staticClass: "hamberger-button",
                    on: {
                        click: function (e) {
                            return e.preventDefault(), t.AppFunctions.toggleClass(".popup-mobile-menu", "active");
                        }
                    }
                }, [e("Icon", {
                    attrs: {
                        name: "menu",
                        size: "21"
                    }
                })], 1)])]), t.data.showThemeSwitcherButton ? e("div", {
                    staticClass: "my_switcher",
                    attrs: {
                        id: "my_switcher"
                    }
                }, [e("ul", [e("li", [e("a", {
                    attrs: {
                        href: "javascript: void(0);"
                    },
                    on: {
                        click: function (e) {
                            return e.preventDefault(), t.AppFunctions.toggleClass("body", "active-light-mode");
                        }
                    }
                }, [e("img", {
                    staticClass: "light-icon",
                    attrs: {
                        src: a("d9a1"),
                        alt: "Sun images"
                    }
                }), e("img", {
                    staticClass: "dark-icon",
                    attrs: {
                        src: a("ffe2"),
                        alt: "Moon Images"
                    }
                })])])])]) : t._e()])])] : t._e(), "left" === t.data.navAlignment ? [e("div", {
                    staticClass: "col-lg-9 col-md-6 col-4 position-static"
                }, [e("div", {
                    staticClass: "header-left d-flex"
                }, [e("Logo"), e("nav", {
                    staticClass: "mainmenu-nav d-none d-lg-block"
                }, [e("Nav")], 1)], 1)]), e("div", {
                    staticClass: "col-lg-3 col-md-6 col-8"
                }, [e("div", {
                    staticClass: "header-right"
                }, [e("div", {
                    staticClass: "header-btn"
                }, [e("a", {
                    class: t.data.buyButtonClass,
                    attrs: {
                        href: "#"
                    }
                }, [t._v(" BUY NOW ")])]), e("div", {
                    staticClass: "mobile-menu-bar ml--5 d-block d-lg-none"
                }, [e("div", {
                    staticClass: "hamberger"
                }, [e("button", {
                    staticClass: "hamberger-button",
                    on: {
                        click: function (e) {
                            return e.preventDefault(), t.AppFunctions.toggleClass(".popup-mobile-menu", "active");
                        }
                    }
                }, [e("Icon", {
                    attrs: {
                        name: "menu",
                        size: "21"
                    }
                })], 1)])]), t.data.showThemeSwitcherButton ? e("div", {
                    staticClass: "my_switcher",
                    attrs: {
                        id: "my_switcher"
                    }
                }, [e("ul", [e("li", [e("a", {
                    attrs: {
                        href: "javascript: void(0);"
                    },
                    on: {
                        click: function (e) {
                            return e.preventDefault(), t.AppFunctions.toggleClass("body", "active-light-mode");
                        }
                    }
                }, [e("img", {
                    staticClass: "light-icon",
                    attrs: {
                        src: a("d9a1"),
                        alt: "Sun images"
                    }
                }), e("img", {
                    staticClass: "dark-icon",
                    attrs: {
                        src: a("ffe2"),
                        alt: "Moon Images"
                    }
                })])])])]) : t._e()])])] : t._e()], 2)])]), e("MobileMenu"), t._m(2)], 1);
            },
            h = [function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "content"
                }, [e("span", {
                    staticClass: "rn-badge"
                }, [t._v("Limited Time Offer")]), e("span", {
                    staticClass: "news-text"
                }, [t._v("Intro price. Get Doob for Big Sale -95% off.")])]);
            }, function () {
                var t = this,
                    e = t._self._c;
                return e("span", [e("a", {
                    attrs: {
                        href: "#"
                    }
                }, [t._v("+06 58 49 99 56")])]);
            }, function () {
                var t = this,
                    e = t._self._c;
                return e("div", [e("div", {
                    staticClass: "rn-gradient-circle"
                }), e("div", {
                    staticClass: "rn-gradient-circle theme-pink"
                })]);
            }],
            f = function () {
                var t = this,
                    e = t._self._c;
                return e("i", {
                    class: `size-${t.size} ${t.iconClass}`,
                    domProps: {
                        innerHTML: t._s(t.iconSvg(t.name))
                    }
                });
            },
            A = [],
            y = a("77c6"),
            C = a.n(y),
            w = {
                name: "Icon",
                props: {
                    name: {
                        type: String,
                        required: true
                    },
                    size: {
                        type: String | Number,
                        default: 16
                    },
                    iconClass: {
                        type: String,
                        default: ""
                    }
                },
                methods: {
                    iconSvg(t) {
                        return C.a.icons[t].toSvg();
                    }
                }
            },
            F = w,
            U = Object(l.a)(F, f, A, false, null, null, null),
            x = U.exports,
            K = function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "popup-mobile-menu"
                }, [e("div", {
                    staticClass: "inner"
                }, [e("div", {
                    staticClass: "header-top"
                }, [e("div", {
                    staticClass: "logo"
                }, [e("router-link", {
                    attrs: {
                        to: "/"
                    }
                }, [e("img", {
                    staticClass: "logo-light",
                    attrs: {
                        src: a("a4ef"),
                        alt: "Corporate Logo"
                    }
                }), e("img", {
                    staticClass: "logo-dark",
                    attrs: {
                        src: a("6996"),
                        alt: "Corporate Logo"
                    }
                })])], 1), e("div", {
                    staticClass: "close-menu"
                }, [e("button", {
                    staticClass: "close-button",
                    on: {
                        click: function (e) {
                            return e.preventDefault(), t.AppFunctions.toggleClass(".popup-mobile-menu", "active");
                        }
                    }
                }, [e("Icon", {
                    attrs: {
                        name: "x",
                        size: "21"
                    }
                })], 1)])]), e("Nav")], 1)]);
            },
            R = [],
            k = function () {
                var t = this,
                    e = t._self._c;
                return e("ul", {
                    staticClass: "mainmenu"
                }, [e("li", {
                    staticClass: "has-droupdown has-menu-child-item"
                }, [e("a", {
                    attrs: {
                        href: "#"
                    }
                }, [t._v(" Home "), e("Icon", {
                    staticClass: "collapse-icon plus",
                    attrs: {
                        name: "plus"
                    }
                }), e("Icon", {
                    staticClass: "collapse-icon minus",
                    attrs: {
                        name: "minus"
                    }
                })], 1), e("ul", {
                    staticClass: "submenu"
                }, [e("li", [e("router-link", {
                    attrs: {
                        to: "/business-consulting"
                    }
                }, [t._v("Business Consulting")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/business-consulting-2"
                    }
                }, [t._v("Business Consulting 02")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/corporate"
                    }
                }, [t._v("Corporate")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/business"
                    }
                }, [t._v("Business")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/digital-agency"
                    }
                }, [t._v("Digital Agency")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/finance"
                    }
                }, [t._v("Finance")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/company"
                    }
                }, [t._v("Company")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/marketing-agency"
                    }
                }, [t._v("Marketing Agency")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/travel-agency"
                    }
                }, [t._v("Travel Agency")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/consulting"
                    }
                }, [t._v("Consulting")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/seo-agency"
                    }
                }, [t._v("SEO Agency")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/personal-portfolio"
                    }
                }, [t._v("Personal Portfolio")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/event-conference"
                    }
                }, [t._v("Event Conference")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/creative-portfolio"
                    }
                }, [t._v("Creative Portfolio")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/freelancer"
                    }
                }, [t._v("Freelancer")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/international-consulting"
                    }
                }, [t._v("International Consulting")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/startup"
                    }
                }, [t._v("Startup")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/web-agency"
                    }
                }, [t._v("Web Agency")])], 1)])]), e("li", [e("router-link", {
                    attrs: {
                        to: "/about"
                    }
                }, [t._v("About")])], 1), e("li", {
                    staticClass: "with-megamenu has-menu-child-item"
                }, [e("a", {
                    attrs: {
                        href: "#"
                    }
                }, [t._v(" Elements "), e("Icon", {
                    staticClass: "collapse-icon plus",
                    attrs: {
                        name: "plus"
                    }
                }), e("Icon", {
                    staticClass: "collapse-icon minus",
                    attrs: {
                        name: "minus"
                    }
                })], 1), e("div", {
                    staticClass: "rn-megamenu"
                }, [e("div", {
                    staticClass: "wrapper"
                }, [e("div", {
                    staticClass: "row row--0"
                }, [e("div", {
                    staticClass: "col-lg-3 single-mega-item"
                }, [e("ul", {
                    staticClass: "mega-menu-item"
                }, [e("li", [e("router-link", {
                    attrs: {
                        to: "/button"
                    }
                }, [t._v("Button")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/service"
                    }
                }, [t._v("Service")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/counter"
                    }
                }, [t._v("Counter")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/progressbar"
                    }
                }, [t._v("Progressbar")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/accordion"
                    }
                }, [t._v("Accordion")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/social-share"
                    }
                }, [t._v("Social Share")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/blog-grid"
                    }
                }, [t._v("Blog Grid")])], 1)])]), e("div", {
                    staticClass: "col-lg-3 single-mega-item"
                }, [e("ul", {
                    staticClass: "mega-menu-item"
                }, [e("li", [e("router-link", {
                    attrs: {
                        to: "/team"
                    }
                }, [t._v("Team")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/portfolio"
                    }
                }, [t._v("Portfolio")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/testimonial"
                    }
                }, [t._v("Testimonial")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/timeline"
                    }
                }, [t._v("Timeline")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/tab"
                    }
                }, [t._v("Tab")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/pricing"
                    }
                }, [t._v("Pricing")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/spit-section"
                    }
                }, [t._v("Split Section")])], 1)])]), e("div", {
                    staticClass: "col-lg-3 single-mega-item"
                }, [e("ul", {
                    staticClass: "mega-menu-item"
                }, [e("li", [e("router-link", {
                    attrs: {
                        to: "/call-to-action"
                    }
                }, [t._v("Call To Action")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/video"
                    }
                }, [t._v("Video")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/gallery"
                    }
                }, [t._v("Gallery")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/contact"
                    }
                }, [t._v("Contact")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/brand"
                    }
                }, [t._v("Brand")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/portfolio"
                    }
                }, [t._v("Portfolio")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/error"
                    }
                }, [t._v("404")])], 1)])]), e("div", {
                    staticClass: "col-lg-3 single-mega-item"
                }, [e("ul", {
                    staticClass: "mega-menu-item"
                }, [e("li", [e("router-link", {
                    attrs: {
                        to: "/advance-tab"
                    }
                }, [t._v(" Advance Tab "), e("span", {
                    staticClass: "rn-badge-card"
                }, [t._v("Hot")])])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "#"
                    }
                }, [t._v(" Brand Carousel "), e("span", {
                    staticClass: "rn-badge-card"
                }, [t._v("Comming")])])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/advance-pricing"
                    }
                }, [t._v(" Advance Pricing "), e("span", {
                    staticClass: "rn-badge-card"
                }, [t._v("Hot")])])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/portfolio-details/1"
                    }
                }, [t._v(" Portfolio Details ")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/blog-details/1"
                    }
                }, [t._v(" Blog Details ")])], 1)])])])])])]), e("li", {
                    staticClass: "has-droupdown has-menu-child-item"
                }, [e("a", {
                    attrs: {
                        href: "#"
                    }
                }, [t._v(" Blog "), e("Icon", {
                    staticClass: "collapse-icon plus",
                    attrs: {
                        name: "plus"
                    }
                }), e("Icon", {
                    staticClass: "collapse-icon minus",
                    attrs: {
                        name: "minus"
                    }
                })], 1), e("ul", {
                    staticClass: "submenu"
                }, [e("li", [e("router-link", {
                    attrs: {
                        to: "/blog-grid"
                    }
                }, [t._v("Blog Grid")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/blog-grid-sidebar"
                    }
                }, [t._v("Blog Grid Sidebar")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/blog-list"
                    }
                }, [t._v("Blog List View")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/blog-list-sidebar"
                    }
                }, [t._v("Blog List View Sidebar")])], 1)])]), e("li", {
                    staticClass: "has-droupdown has-menu-child-item"
                }, [e("a", {
                    attrs: {
                        href: "#"
                    }
                }, [t._v(" Portfolio "), e("Icon", {
                    staticClass: "collapse-icon plus",
                    attrs: {
                        name: "plus"
                    }
                }), e("Icon", {
                    staticClass: "collapse-icon minus",
                    attrs: {
                        name: "minus"
                    }
                })], 1), e("ul", {
                    staticClass: "submenu"
                }, [e("li", [e("router-link", {
                    attrs: {
                        to: "/portfolio"
                    }
                }, [t._v("Portfolio Default")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/portfolio-three-column"
                    }
                }, [t._v("Portfolio Three Column")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/portfolio-full-width"
                    }
                }, [t._v("Portfolio Full Width")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/portfolio-grid-layout"
                    }
                }, [t._v("Portfolio Grid Layout")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/portfolio-box-layout"
                    }
                }, [t._v("Portfolio Box Layout")])], 1)])]), e("li", [e("router-link", {
                    attrs: {
                        to: "/contact"
                    }
                }, [t._v("Contact")])], 1)]);
            },
            B = [],
            S = {
                name: "Nav",
                components: {
                    Icon: x
                }
            },
            _ = S,
            D = Object(l.a)(_, k, B, false, null, null, null),
            T = D.exports;
        a("13d5");
        class I {
            static addClass(t, e) {
                document.querySelector(t).classList.add(e);
            }
            static removeClass(t, e) {
                document.querySelector(t).classList.remove(e);
            }
            static toggleClass(t, e) {
                document.querySelector(t).classList.toggle(e);
            }
            static flatDeep(t, e = 1) {
                return e > 0 ? t.reduce((t, a) => t.concat(Array.isArray(a) ? this.flatDeep(a, e - 1) : a), []) : t.slice();
            }
            static slugify(t) {
                return t.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
            }
            static containsObject(t, e) {
                let a;
                for (a = 0; a < e.length; a++)
                    if (e[a].slug === t.slug) return a;
                return -1;
            }
        }
        var P = {
                name: "MobileMenu",
                components: {
                    Nav: T,
                    Icon: x
                },
                data() {
                    return {
                        AppFunctions: I
                    };
                },
                mounted() {
                    let t = document.querySelectorAll(".popup-mobile-menu .has-droupdown > a"),
                        e = document.querySelectorAll(".popup-mobile-menu .with-megamenu > a");
                    for (let a in t) t.hasOwnProperty(a) && (t[a].onclick = function () {
                        this.parentElement.querySelector(".submenu").classList.toggle("active"), this.classList.toggle("open");
                    });
                    for (let a in e) e.hasOwnProperty(a) && (e[a].onclick = function () {
                        this.parentElement.querySelector(".rn-megamenu").classList.toggle("active"), this.classList.toggle("open");
                    });
                }
            },
            L = P,
            Q = Object(l.a)(L, K, R, false, null, null, null),
            j = Q.exports,
            W = function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "logo"
                }, [e("router-link", {
                    attrs: {
                        to: t.url
                    }
                }, [e("img", {
                    staticClass: "logo-light",
                    attrs: {
                        src: t.lightLogo,
                        alt: "Corporate Logo"
                    }
                }), e("img", {
                    staticClass: "logo-dark",
                    attrs: {
                        src: t.darkLogo,
                        alt: "Corporate Logo"
                    }
                })])], 1);
            },
            M = [],
            O = {
                name: "Logo",
                props: {
                    url: {
                        type: String,
                        default: "/"
                    },
                    lightLogo: {
                        type: String,
                        default: function () {
                            return a("a4ef");
                        }
                    },
                    darkLogo: {
                        type: String,
                        default: function () {
                            return a("6996");
                        }
                    }
                }
            },
            E = O,
            V = Object(l.a)(E, W, M, false, null, null, null),
            N = V.exports,
            H = {
                name: "Header",
                props: {
                    data: {
                        default: null
                    }
                },
                components: {
                    Logo: N,
                    Nav: T,
                    MobileMenu: j,
                    Icon: x
                },
                data() {
                    return {
                        AppFunctions: I
                    };
                },
                methods: {
                    toggleStickyHeader() {
                        const t = document.documentElement.scrollTop;
                        t > 100 ? I.addClass(".header-default", "sticky") : t <= 100 && I.removeClass(".header-default", "sticky");
                    }
                },
                created() {
                    window.addEventListener("scroll", this.toggleStickyHeader);
                },
                mounted() {
                    this.toggleStickyHeader();
                },
                beforeDestroy() {
                    window.removeEventListener("scroll", this.toggleStickyHeader);
                }
            },
            q = H,
            z = Object(l.a)(q, v, h, false, null, null, null),
            Y = z.exports,
            J = function () {
                var t = this,
                    e = t._self._c;
                return e("div", [t.data.showFooter ? e("footer", {
                    staticClass: "rn-footer footer-style-default variation-two"
                }, [t.data.showCta ? e("div", {
                    staticClass: "rn-callto-action clltoaction-style-default style-7"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row row--0 align-items-center content-wrapper"
                }, [e("div", {
                    staticClass: "col-lg-8 col-md-8"
                }, [e("div", {
                    staticClass: "inner",
                    attrs: {
                        "data-aos": "fade-up"
                    }
                }, [e("div", {
                    staticClass: "content text-left"
                }, [e("Logo"), e("p", {
                    staticClass: "subtitle"
                }, [t._v(" If you want to create a corporate template you can purchase now our doob template. ")])], 1)])]), e("div", {
                    staticClass: "col-lg-4 col-md-4"
                }, [e("div", {
                    staticClass: "call-to-btn text-start mt_sm--20 text-lg-end",
                    attrs: {
                        "data-aos": "fade-up"
                    }
                }, [e("Button", {
                    attrs: {
                        title: "Purchase Doob",
                        icon: "arrow-right",
                        url: "#"
                    }
                })], 1)])])])]) : t._e(), e("div", {
                    staticClass: "footer-top"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-2 col-md-6 col-sm-6 col-12"
                }, [e("div", {
                    staticClass: "rn-footer-widget"
                }, [e("h4", {
                    staticClass: "title"
                }, [t._v("Services")]), e("div", {
                    staticClass: "inner"
                }, [e("ul", {
                    staticClass: "footer-link link-hover"
                }, [e("li", [e("router-link", {
                    attrs: {
                        to: "/about"
                    }
                }, [t._v("About")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/portfolio"
                    }
                }, [t._v("Portfolio")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/contact"
                    }
                }, [t._v("Contact")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/service"
                    }
                }, [t._v("Service")])], 1)])])])]), e("div", {
                    staticClass: "col-lg-2 col-md-6 col-sm-6 col-12"
                }, [e("div", {
                    staticClass: "rn-footer-widget"
                }, [e("div", {
                    staticClass: "widget-menu-top"
                }, [e("h4", {
                    staticClass: "title"
                }, [t._v("Solutions")]), e("div", {
                    staticClass: "inner"
                }, [e("ul", {
                    staticClass: "footer-link link-hover"
                }, [e("li", [e("router-link", {
                    attrs: {
                        to: "/brand"
                    }
                }, [t._v("Brand")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/call-to-action"
                    }
                }, [t._v("call To Action")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/counter"
                    }
                }, [t._v("Counter")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/service"
                    }
                }, [t._v("Service")])], 1)])])])])]), e("div", {
                    staticClass: "col-lg-2 col-md-6 col-sm-6 col-12"
                }, [e("div", {
                    staticClass: "rn-footer-widget"
                }, [e("h4", {
                    staticClass: "title"
                }, [t._v("Company")]), e("div", {
                    staticClass: "inner"
                }, [e("ul", {
                    staticClass: "footer-link link-hover"
                }, [e("li", [e("router-link", {
                    attrs: {
                        to: "/pricing"
                    }
                }, [t._v("Pricing")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/tab"
                    }
                }, [t._v("Tab Styles")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/service"
                    }
                }, [t._v("Service")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/social-share"
                    }
                }, [t._v("Social")])], 1)])])])]), e("div", {
                    staticClass: "col-lg-2 col-md-6 col-sm-6 col-12"
                }, [e("div", {
                    staticClass: "rn-footer-widget"
                }, [e("h4", {
                    staticClass: "title"
                }, [t._v("Resources")]), e("div", {
                    staticClass: "inner"
                }, [e("ul", {
                    staticClass: "footer-link link-hover"
                }, [e("li", [e("router-link", {
                    attrs: {
                        to: "/team"
                    }
                }, [t._v("Team")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/testimonial"
                    }
                }, [t._v("Testimonial")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/service"
                    }
                }, [t._v("Service")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/timeline"
                    }
                }, [t._v("Timeline")])], 1)])])])]), e("div", {
                    staticClass: "col-lg-4 col-md-6 col-sm-6 col-12"
                }, [e("div", {
                    staticClass: "rn-footer-widget"
                }, [e("h4", {
                    staticClass: "title"
                }, [t._v("Stay With Us.")]), e("div", {
                    staticClass: "inner"
                }, [e("h6", {
                    staticClass: "subtitle"
                }, [t._v("2000+ Our clients are subscribe Around the World")]), e("ul", {
                    staticClass: "social-icon social-default justify-content-start"
                }, [e("li", [e("a", {
                    attrs: {
                        href: "https://www.facebook.com/",
                        target: "_blank"
                    }
                }, [e("Icon", {
                    attrs: {
                        name: "facebook"
                    }
                })], 1)]), e("li", [e("a", {
                    attrs: {
                        href: "https://www.twitter.com",
                        target: "_blank"
                    }
                }, [e("Icon", {
                    attrs: {
                        name: "twitter"
                    }
                })], 1)]), e("li", [e("a", {
                    attrs: {
                        href: "https://www.instagram.com/",
                        target: "_blank"
                    }
                }, [e("Icon", {
                    attrs: {
                        name: "instagram"
                    }
                })], 1)]), e("li", [e("a", {
                    attrs: {
                        href: "https://www.linkedin.com/",
                        target: "_blank"
                    }
                }, [e("Icon", {
                    attrs: {
                        name: "linkedin"
                    }
                })], 1)])])])])])])])]), t.data.showNewsletter ? e("Newsletter") : t._e()], 1) : t._e(), t.data.showCopyright ? e("Copyright") : t._e(), e("ScrollTop")], 1);
            },
            G = [],
            X = function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "copyright-area copyright-style-one"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row align-items-center"
                }, [e("div", {
                    staticClass: "col-lg-6 col-md-8 col-sm-12 col-12"
                }, [e("div", {
                    staticClass: "copyright-left"
                }, [e("ul", {
                    staticClass: "ft-menu link-hover"
                }, [e("li", [e("router-link", {
                    attrs: {
                        to: "#"
                    }
                }, [t._v("Privacy Policy")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "#"
                    }
                }, [t._v("Terms And Condition")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/contact"
                    }
                }, [t._v("Contact Us")])], 1)])])]), e("div", {
                    staticClass: "col-lg-6 col-md-4 col-sm-12 col-12"
                }, [e("div", {
                    staticClass: "copyright-right text-center text-lg-end"
                }, [e("p", {
                    staticClass: "copyright-text"
                }, [t._v("© Doob " + t._s((new Date).getFullYear()))])])])])])]);
            },
            Z = [],
            $ = {
                name: "Copyright"
            },
            tt = $,
            et = Object(l.a)(tt, X, Z, false, null, null, null),
            at = et.exports,
            it = function () {
                var t = this,
                    e = t._self._c;
                return !t.isLink || t.variantButtonClass || t.readMoreButton ? t.isLink || t.variantButtonClass || t.readMoreButton ? t.isLink && t.variantButtonClass && !t.readMoreButton ? e("router-link", {
                    class: ["btn-default", t.size ? "btn-" + t.size : "", t.outlined ? "btn-border" : "", t.icon ? "btn-icon" : "", t.variantButtonClass ? t.variantButtonClass : ""],
                    attrs: {
                        to: t.url
                    }
                }, [t._t("default")], 2) : t.isLink || !t.variantButtonClass || t.readMoreButton ? t.readMoreButton ? e("router-link", {
                    class: ["btn-read-more", t.size ? "btn-" + t.size : "", t.outlined ? "btn-border" : "", t.icon ? "btn-icon" : "", t.variantButtonClass ? t.variantButtonClass : ""],
                    attrs: {
                        to: t.url
                    }
                }, [t._t("default")], 2) : t._e() : e("button", {
                    class: ["btn-default", t.size ? "btn-" + t.size : "", t.outlined ? "btn-border" : "", t.icon ? "btn-icon" : "", t.variantButtonClass ? t.variantButtonClass : ""],
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function (e) {
                            return e.preventDefault(), t.$emit("btnClick");
                        }
                    }
                }, [t._t("default")], 2) : e("button", {
                    class: ["btn-default", t.size ? "btn-" + t.size : "", t.outlined ? "btn-border" : "", t.icon ? "btn-icon" : ""],
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function (e) {
                            return e.preventDefault(), t.$emit("btnClick");
                        }
                    }
                }, [t._v(" " + t._s(t.title) + " "), t.icon ? e("Icon", {
                    staticClass: "icon",
                    attrs: {
                        name: t.icon,
                        size: "20"
                    }
                }) : t._e()], 1) : e("router-link", {
                    class: ["btn-default", t.size ? "btn-" + t.size : "", t.outlined ? "btn-border" : "", t.icon ? "btn-icon" : ""],
                    attrs: {
                        to: t.url
                    }
                }, [t._v(" " + t._s(t.title) + " "), t.icon ? e("Icon", {
                    staticClass: "icon",
                    attrs: {
                        name: t.icon,
                        size: "20"
                    }
                }) : t._e()], 1);
            },
            st = [],
            ot = {
                name: "Button",
                components: {
                    Icon: x
                },
                props: {
                    title: {
                        type: String
                    },
                    size: {
                        type: String,
                        default: null
                    },
                    outlined: {
                        type: Boolean,
                        default: false
                    },
                    icon: {
                        type: String,
                        default: null
                    },
                    url: {
                        type: String,
                        default: "#"
                    },
                    isLink: {
                        type: Boolean,
                        default: true
                    },
                    variantButtonClass: {
                        type: String,
                        default: null
                    },
                    readMoreButton: {
                        type: Boolean,
                        default: false
                    }
                }
            },
            nt = ot,
            rt = Object(l.a)(nt, it, st, false, null, null, null),
            lt = rt.exports,
            ct = function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "rn-back-top",
                    class: [t.visible ? "d-inline" : "d-none"],
                    on: {
                        click: t.scrollToTop
                    }
                }, [e("Icon", {
                    attrs: {
                        name: "chevron-up",
                        size: "27"
                    }
                })], 1);
            },
            dt = [],
            pt = {
                name: "ScrollTop",
                components: {
                    Icon: x
                },
                data() {
                    return {
                        visible: false
                    };
                },
                methods: {
                    scrollToTop() {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        });
                    },
                    toggleVisible() {
                        const t = document.documentElement.scrollTop;
                        t > 300 ? this.visible = true : t <= 300 && (this.visible = false);
                    }
                },
                created() {
                    window.addEventListener("scroll", this.toggleVisible);
                },
                mounted() {
                    this.toggleVisible();
                },
                beforeDestroy() {
                    window.removeEventListener("scroll", this.toggleVisible);
                }
            },
            ut = pt,
            mt = Object(l.a)(ut, ct, dt, false, null, null, null),
            gt = mt.exports,
            bt = function () {
                var t = this;
                t._self._c;
                return t._m(0);
            },
            vt = [function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "newsletter-area rn-newsletter-default"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row row--0 newsletter-wrapper align-items-center border-top-bottom"
                }, [e("div", {
                    staticClass: "col-lg-4"
                }, [e("div", {
                    staticClass: "newsletter-section-title"
                }, [e("h3", {
                    staticClass: "title"
                }, [t._v("Stay up to Date")]), e("p", {
                    staticClass: "description"
                }, [t._v("Don't miss the latest Doob news, update and trend.")])])]), e("div", {
                    staticClass: "col-lg-8"
                }, [e("form", {
                    staticClass: "rn-newsletter mt_md--20 mt_sm--20",
                    attrs: {
                        action: "#"
                    }
                }, [e("div", {
                    staticClass: "form-group"
                }, [e("input", {
                    attrs: {
                        type: "email",
                        placeholder: "Email Address"
                    }
                })]), e("div", {
                    staticClass: "form-group"
                }, [e("button", {
                    staticClass: "btn-default"
                }, [t._v("Subscribe")])])])])])])]);
            }],
            ht = {
                name: "Newsletter"
            },
            ft = ht,
            At = Object(l.a)(ft, bt, vt, false, null, null, null),
            yt = At.exports,
            Ct = {
                name: "Footer",
                components: {
                    Newsletter: yt,
                    Logo: N,
                    ScrollTop: gt,
                    Icon: x,
                    Button: lt,
                    Copyright: at
                },
                props: {
                    data: {
                        default: null
                    }
                }
            },
            wt = Ct,
            Ft = Object(l.a)(wt, J, G, false, null, null, null),
            Ut = Ft.exports,
            xt = function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "footer-style-2"
                }, [t.data.showFooter ? e("CallToAction", {
                    attrs: {
                        "style-type": 8,
                        title: "Ready to start creating a standard website?",
                        subtitle: "Finest choice for your home & office",
                        "btn-text": "Purchase Doob"
                    }
                }) : t._e(), t.data.showCopyright ? e("CopyrightTwo") : t._e(), e("ScrollTop")], 1);
            },
            Kt = [],
            Rt = function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "copyright-area copyright-style-one variation-two"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row align-items-center"
                }, [e("div", {
                    staticClass: "col-lg-4 col-md-7 col-sm-12 col-12"
                }, [e("div", {
                    staticClass: "copyright-left"
                }, [e("ul", {
                    staticClass: "ft-menu link-hover"
                }, [e("li", [e("router-link", {
                    attrs: {
                        to: "#"
                    }
                }, [t._v("Privacy Policy")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "#"
                    }
                }, [t._v("Terms And Condition")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/contact"
                    }
                }, [t._v("Contact Us")])], 1)])])]), e("div", {
                    staticClass: "col-lg-4 col-md-5 mt_sm--20"
                }, [e("div", {
                    staticClass: "copyright-center text-center"
                }, [e("ul", {
                    staticClass: "social-icon social-default color-lessdark justify-content-center"
                }, [e("li", [e("a", {
                    attrs: {
                        href: "https://www/facebook.com/",
                        target: "_blank"
                    }
                }, [e("Icon", {
                    attrs: {
                        name: "facebook"
                    }
                })], 1)]), e("li", [e("a", {
                    attrs: {
                        href: "https://www/twitter.com/",
                        target: "_blank"
                    }
                }, [e("Icon", {
                    attrs: {
                        name: "twitter"
                    }
                })], 1)]), e("li", [e("a", {
                    attrs: {
                        href: "https://www/instagram.com/",
                        target: "_blank"
                    }
                }, [e("Icon", {
                    attrs: {
                        name: "instagram"
                    }
                })], 1)]), e("li", [e("a", {
                    attrs: {
                        href: "https://www/linkedin.com/",
                        target: "_blank"
                    }
                }, [e("Icon", {
                    attrs: {
                        name: "linkedin"
                    }
                })], 1)])])])]), e("div", {
                    staticClass: "col-lg-4 col-md-12 col-sm-12 col-12 mt_md--20 mt_sm--20"
                }, [e("div", {
                    staticClass: "copyright-right text-center text-lg-end"
                }, [e("p", {
                    staticClass: "copyright-text"
                }, [t._v(" Copyright All rights reserved © " + t._s((new Date).getFullYear()) + " Doob Vue.js Template. ")])])])])])]);
            },
            kt = [],
            Bt = {
                name: "CopyrightTwo",
                components: {
                    Icon: x
                }
            },
            St = Bt,
            _t = Object(l.a)(St, Rt, kt, false, null, null, null),
            Dt = _t.exports,
            Tt = function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    class: "rn-callto-action " + t.checkStyleType,
                    style: {
                        "background-image": `url(${t.backgroundImage})`
                    },
                    attrs: {
                        "data-black-overlay": t.setOverlay
                    }
                }, [e("div", {
                    staticClass: "container"
                }, [1 === t.styleType ? [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("div", {
                    staticClass: "inner"
                }, [e("div", {
                    staticClass: "content text-center"
                }, [e("h2", {
                    staticClass: "title",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    },
                    domProps: {
                        innerHTML: t._s(t.title)
                    }
                }), e("h6", {
                    staticClass: "subtitle",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    },
                    domProps: {
                        innerHTML: t._s(t.subtitle)
                    }
                }), e("div", {
                    staticClass: "call-to-btn",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                }, [e("a", {
                    staticClass: "btn-default",
                    attrs: {
                        href: "#"
                    }
                }, [t._v(t._s(t.btnText))])])])])])])] : t._e(), 2 === t.styleType ? [e("div", {
                    staticClass: "row row--30 align-items-center"
                }, [e("div", {
                    staticClass: "col-lg-10 offset-lg-1"
                }, [e("div", {
                    staticClass: "inner"
                }, [e("div", {
                    staticClass: "content text-center"
                }, [e("h2", {
                    staticClass: "title mb--0",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    },
                    domProps: {
                        innerHTML: t._s(t.title)
                    }
                }), e("p", {
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    },
                    domProps: {
                        innerHTML: t._s(t.subtitle)
                    }
                }), e("div", {
                    staticClass: "call-to-btn text-center",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                }, [e("a", {
                    staticClass: "btn-default btn-icon",
                    attrs: {
                        href: "#"
                    }
                }, [t._v(" " + t._s(t.btnText) + " "), e("Icon", {
                    staticClass: "size-20",
                    attrs: {
                        name: "arrow-right"
                    }
                })], 1)])])])])])] : t._e(), 3 === t.styleType ? [e("div", {
                    staticClass: "row row--0 align-items-center content-wrapper",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                }, [e("div", {
                    staticClass: "col-lg-8"
                }, [e("div", {
                    staticClass: "inner"
                }, [e("div", {
                    staticClass: "content text-start"
                }, [e("h2", {
                    staticClass: "title",
                    domProps: {
                        innerHTML: t._s(t.title)
                    }
                }), e("h6", {
                    staticClass: "subtitle",
                    domProps: {
                        innerHTML: t._s(t.subtitle)
                    }
                })])])]), e("div", {
                    staticClass: "col-lg-4"
                }, [e("div", {
                    staticClass: "call-to-btn text-start text-lg-end"
                }, [e("a", {
                    staticClass: "btn-default",
                    attrs: {
                        href: "#"
                    }
                }, [t._v(t._s(t.btnText))])])])])] : t._e(), 4 === t.styleType ? [e("div", {
                    staticClass: "row row--0 align-items-center content-wrapper",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                }, [e("div", {
                    staticClass: "col-lg-8"
                }, [e("div", {
                    staticClass: "inner"
                }, [e("div", {
                    staticClass: "content text-start"
                }, [e("h2", {
                    staticClass: "title",
                    domProps: {
                        innerHTML: t._s(t.title)
                    }
                }), e("h6", {
                    staticClass: "subtitle",
                    domProps: {
                        innerHTML: t._s(t.subtitle)
                    }
                })])])]), e("div", {
                    staticClass: "col-lg-4"
                }, [e("div", {
                    staticClass: "call-to-btn text-start text-lg-end"
                }, [e("a", {
                    staticClass: "btn-default",
                    attrs: {
                        href: "#"
                    }
                }, [t._v(t._s(t.btnText))])])])])] : t._e(), 5 === t.styleType ? [e("div", {
                    staticClass: "row row--0 align-items-center content-wrapper theme-shape",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("div", {
                    staticClass: "inner"
                }, [e("div", {
                    staticClass: "content text-center"
                }, [e("h2", {
                    staticClass: "title",
                    domProps: {
                        innerHTML: t._s(t.title)
                    }
                }), e("h6", {
                    staticClass: "subtitle",
                    domProps: {
                        innerHTML: t._s(t.subtitle)
                    }
                }), e("div", {
                    staticClass: "call-to-btn text-center"
                }, [e("a", {
                    staticClass: "btn-default btn-icon",
                    attrs: {
                        href: "#"
                    }
                }, [t._v(" " + t._s(t.btnText) + " "), e("Icon", {
                    staticClass: "size-20",
                    attrs: {
                        name: "arrow-right"
                    }
                })], 1)])])])])])] : t._e(), 6 === t.styleType ? [e("div", {
                    staticClass: "row row--0 align-items-center content-wrapper"
                }, [e("div", {
                    staticClass: "col-lg-8 col-12"
                }, [e("div", {
                    staticClass: "inner"
                }, [e("div", {
                    staticClass: "content text-start",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                }, [e("h2", {
                    staticClass: "title",
                    domProps: {
                        innerHTML: t._s(t.title)
                    }
                })])])]), e("div", {
                    staticClass: "col-lg-4 col-12"
                }, [e("div", {
                    staticClass: "call-to-btn text-start text-lg-end mt_md--20 mt_sm--20",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                }, [e("a", {
                    staticClass: "btn-default",
                    attrs: {
                        href: "#"
                    }
                }, [t._v(t._s(t.btnText))])])])])] : t._e(), 7 === t.styleType ? [e("div", {
                    staticClass: "row row--0 align-items-center content-wrapper"
                }, [e("div", {
                    staticClass: "col-lg-8 col-md-8"
                }, [e("div", {
                    staticClass: "inner"
                }, [e("div", {
                    staticClass: "content text-start"
                }, [e("Logo"), e("p", {
                    staticClass: "subtitle",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    },
                    domProps: {
                        innerHTML: t._s(t.subtitle)
                    }
                })], 1)])]), e("div", {
                    staticClass: "col-lg-4 col-md-4"
                }, [e("div", {
                    staticClass: "call-to-btn text-start mt_sm--20 text-md-end",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                }, [e("a", {
                    staticClass: "btn-default btn-icon",
                    attrs: {
                        href: "#"
                    }
                }, [t._v(" " + t._s(t.btnText) + " "), e("Icon", {
                    staticClass: "size-20",
                    attrs: {
                        name: "arrow-right"
                    }
                })], 1)])])])] : t._e(), 8 === t.styleType ? [e("div", {
                    staticClass: "row row--0 align-items-center"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("div", {
                    staticClass: "inner"
                }, [e("div", {
                    staticClass: "content text-center"
                }, [e("h2", {
                    staticClass: "title",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    },
                    domProps: {
                        innerHTML: t._s(t.title)
                    }
                }), e("h6", {
                    staticClass: "subtitle",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    },
                    domProps: {
                        innerHTML: t._s(t.subtitle)
                    }
                }), e("div", {
                    staticClass: "call-to-btn text-center mt--30",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                }, [e("a", {
                    staticClass: "btn-default btn-icon",
                    attrs: {
                        href: "#"
                    }
                }, [t._v(" " + t._s(t.btnText) + " "), e("Icon", {
                    staticClass: "size-20",
                    attrs: {
                        name: "arrow-right"
                    }
                })], 1)])])])])])] : t._e()], 2)]);
            },
            It = [],
            Pt = {
                name: "CallToAction",
                components: {
                    Logo: N,
                    Icon: x
                },
                props: {
                    backgroundImage: {
                        type: String,
                        default: ""
                    },
                    title: {
                        type: String
                    },
                    subtitle: {
                        type: String
                    },
                    btnText: {
                        type: String
                    },
                    styleType: {
                        type: Number,
                        default: 1
                    }
                },
                computed: {
                    checkStyleType() {
                        return 1 === this.styleType ? "clltoaction-style-default bg_image bg_image_fixed" : 2 === this.styleType ? "clltoaction-style-default style-2 bg_image bg_image_fixed" : 3 === this.styleType ? "clltoaction-style-default style-3 bg_image" : 4 === this.styleType ? "clltoaction-style-default style-4" : 5 === this.styleType ? "clltoaction-style-default style-5" : 6 === this.styleType ? "clltoaction-style-default style-6" : 7 === this.styleType ? "clltoaction-style-default style-7" : 8 === this.styleType ? "rn-call-to-action style-8 content-wrapper" : "";
                    },
                    setOverlay() {
                        return 1 === this.styleType ? 7 : 2 === this.styleType ? 8 : undefined;
                    }
                }
            },
            Lt = Pt,
            Qt = Object(l.a)(Lt, Tt, It, false, null, null, null),
            jt = Qt.exports,
            Wt = {
                name: "FooterTwo",
                components: {
                    CallToAction: jt,
                    CopyrightTwo: Dt,
                    ScrollTop: gt
                },
                props: {
                    data: {
                        default: null
                    }
                }
            },
            Mt = Wt,
            Ot = Object(l.a)(Mt, xt, Kt, false, null, null, null),
            Et = Ot.exports,
            Vt = function () {
                var t = this,
                    e = t._self._c;
                return e("div", [t.data.showFooter ? e("footer", {
                    staticClass: "rn-footer footer-style-default footer-style-1"
                }, [e("div", {
                    staticClass: "footer-top"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-4 col-md-6 col-sm-12 col-12"
                }, [e("div", {
                    staticClass: "rn-footer-widget"
                }, [e("Logo"), e("h3", {
                    staticClass: "text-big"
                }, [t._v("Create Website By Doob So Quick Download And Make Your Site.")])], 1)]), e("div", {
                    staticClass: "col-lg-2 col-md-6 col-sm-6 col-12"
                }, [e("div", {
                    staticClass: "rn-footer-widget"
                }, [e("div", {
                    staticClass: "widget-menu-top"
                }, [e("h4", {
                    staticClass: "title"
                }, [t._v("Services")]), e("div", {
                    staticClass: "inner"
                }, [e("ul", {
                    staticClass: "footer-link link-hover"
                }, [e("li", [e("router-link", {
                    attrs: {
                        to: "/testimonial"
                    }
                }, [t._v("Testimonial")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/company"
                    }
                }, [t._v("Company")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/marketing-agency"
                    }
                }, [t._v("Marketing")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/startup"
                    }
                }, [t._v("Startup")])], 1)])])]), e("div", {
                    staticClass: "widget-menu-bottom"
                }, [e("h4", {
                    staticClass: "title"
                }, [t._v("Products")]), e("div", {
                    staticClass: "inner"
                }, [e("ul", {
                    staticClass: "footer-link link-hover"
                }, [e("li", [e("router-link", {
                    attrs: {
                        to: "/about"
                    }
                }, [t._v("About")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/portfolio"
                    }
                }, [t._v("Portfolio")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/contact"
                    }
                }, [t._v("Contact")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/service"
                    }
                }, [t._v("Service")])], 1)])])])])]), e("div", {
                    staticClass: "col-lg-2 col-md-6 col-sm-6 col-12"
                }, [e("div", {
                    staticClass: "rn-footer-widget"
                }, [e("div", {
                    staticClass: "widget-menu-top"
                }, [e("h4", {
                    staticClass: "title"
                }, [t._v("Company")]), e("div", {
                    staticClass: "inner"
                }, [e("ul", {
                    staticClass: "footer-link link-hover"
                }, [e("li", [e("router-link", {
                    attrs: {
                        to: "/corporate"
                    }
                }, [t._v("Corporate")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/portfolio"
                    }
                }, [t._v("Portfolio")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/seo-agency"
                    }
                }, [t._v("SEO Agency")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/web-agency"
                    }
                }, [t._v("Web Agency")])], 1)])])]), e("div", {
                    staticClass: "widget-menu-bottom"
                }, [e("h4", {
                    staticClass: "title"
                }, [t._v("Solutions")]), e("div", {
                    staticClass: "inner"
                }, [e("ul", {
                    staticClass: "footer-link link-hover"
                }, [e("li", [e("router-link", {
                    attrs: {
                        to: "/gallery"
                    }
                }, [t._v("Gallery")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/testimonial"
                    }
                }, [t._v("Testimonial")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/contact"
                    }
                }, [t._v("Contact")])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/service"
                    }
                }, [t._v("Service")])], 1)])])])])]), t._m(0)])])])]) : t._e(), t.data.showCopyright ? e("Copyright") : t._e(), e("ScrollTop")], 1);
            },
            Nt = [function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "col-lg-4 col-md-6 col-sm-12 col-12"
                }, [e("div", {
                    staticClass: "rn-footer-widget"
                }, [e("h4", {
                    staticClass: "title"
                }, [t._v("Newsletter")]), e("div", {
                    staticClass: "inner"
                }, [e("h6", {
                    staticClass: "subtitle"
                }, [t._v("2000+ Our clients are subscribe Around the World")]), e("form", {
                    staticClass: "newsletter-form",
                    attrs: {
                        action: "#"
                    }
                }, [e("div", {
                    staticClass: "form-group"
                }, [e("input", {
                    attrs: {
                        type: "email",
                        placeholder: "Enter Your Email Here"
                    }
                })]), e("div", {
                    staticClass: "form-group"
                }, [e("button", {
                    staticClass: "btn-default",
                    attrs: {
                        type: "submit"
                    }
                }, [t._v("Submit Now")])])])])])]);
            }],
            Ht = {
                name: "FooterThree",
                components: {
                    Logo: N,
                    ScrollTop: gt,
                    Copyright: at
                },
                props: {
                    data: {
                        default: null
                    }
                }
            },
            qt = Ht,
            zt = Object(l.a)(qt, Vt, Nt, false, null, null, null),
            Yt = zt.exports,
            Jt = {
                name: "Layout",
                components: {
                    FooterThree: Yt,
                    FooterTwo: Et,
                    Header: Y,
                    Footer: Ut
                },
                props: {
                    logo: {
                        type: String
                    },
                    showTopHeader: {
                        type: Boolean,
                        default: true
                    },
                    topbarStyle: {
                        type: Number,
                        default: 1
                    },
                    showThemeSwitcherButton: {
                        type: Boolean,
                        default: true
                    },
                    headerTransparency: {
                        type: Boolean,
                        default: false
                    },
                    headerClass: {
                        type: String
                    },
                    navAlignment: {
                        type: String,
                        default: "right"
                    },
                    buyButtonClass: {
                        type: String,
                        default: "btn-default btn-small round"
                    },
                    footerStyle: {
                        type: Number,
                        default: 1
                    },
                    showFooter: {
                        type: Boolean,
                        default: true
                    },
                    showCopyright: {
                        type: Boolean,
                        default: true
                    },
                    showNewsletter: {
                        type: Boolean,
                        default: false
                    },
                    showCta: {
                        type: Boolean,
                        default: true
                    }
                }
            },
            Gt = Jt,
            Xt = Object(l.a)(Gt, g, b, false, null, null, null),
            Zt = Xt.exports,
            $t = function () {
                var t = this;
                t._self._c;
                return t._m(0);
            },
            te = [function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "rbt-separator-mid"
                }, [e("div", {
                    staticClass: "container"
                }, [e("hr", {
                    staticClass: "rbt-separator m-0"
                })])]);
            }],
            ee = {
                name: "Separator"
            },
            ae = ee,
            ie = Object(l.a)(ae, $t, te, false, null, null, null),
            se = ie.exports,
            oe = function () {
                var t = this,
                    e = t._self._c;
                return 1 === t.sectionTitleStyle ? e("div", {
                    staticClass: "section-title",
                    class: t.checkTextAlign
                }, [e("h4", {
                    staticClass: "subtitle"
                }, [e("span", {
                    staticClass: "theme-gradient",
                    domProps: {
                        innerHTML: t._s(t.subtitle)
                    }
                })]), e("h2", {
                    staticClass: "title w-600",
                    domProps: {
                        innerHTML: t._s(t.title)
                    }
                }), t.description ? e("p", {
                    staticClass: "description b1",
                    domProps: {
                        innerHTML: t._s(t.description)
                    }
                }) : t._e()]) : 2 === t.sectionTitleStyle ? e("div", {
                    class: "section-title-2 " + t.checkTextAlign
                }, [e("h2", {
                    staticClass: "title"
                }, [t._v(t._s(t.title))])]) : t._e();
            },
            ne = [],
            re = {
                name: "SectionTitle",
                props: {
                    subtitle: {
                        type: String,
                        default: null
                    },
                    title: {
                        type: String,
                        default: null
                    },
                    description: {
                        type: String,
                        default: null
                    },
                    textAlign: {
                        type: String,
                        default: "left"
                    },
                    sectionTitleStyle: {
                        type: Number,
                        default: 1
                    }
                },
                computed: {
                    checkTextAlign() {
                        return "left" === this.textAlign ? "text-start" : "center" === this.textAlign ? "text-center" : "end" === this.textAlign ? "text-end" : "";
                    }
                }
            },
            le = re,
            ce = Object(l.a)(le, oe, ne, false, null, null, null),
            de = ce.exports,
            pe = {
                name: "Demo",
                components: {
                    Icon: x,
                    Layout: Zt,
                    Separator: se,
                    SectionTitle: de
                },
                data() {
                    return {
                        demoPages: [{
                            url: "/business-consulting",
                            image: a("9a59"),
                            imageLight: a("6114"),
                            title: "Business Consulting",
                            badge: ""
                        }, {
                            url: "/business-consulting-2",
                            image: a("d902"),
                            imageLight: a("08c3"),
                            title: "Business Consulting 2",
                            badge: ""
                        }, {
                            url: "/corporate",
                            image: a("abe8"),
                            imageLight: a("928f"),
                            title: "Corporate",
                            badge: ""
                        }, {
                            url: "/startup",
                            image: a("b707"),
                            imageLight: a("0a08"),
                            title: "Startup",
                            badge: "Trendy"
                        }, {
                            url: "/web-agency",
                            image: a("11dc"),
                            imageLight: a("f54c"),
                            title: "Web Agency",
                            badge: "Trendy"
                        }, {
                            url: "/international-consulting",
                            image: a("908b"),
                            imageLight: a("b9f6"),
                            title: "International Consulting",
                            badge: "Trendy"
                        }, {
                            url: "/consulting",
                            image: a("a907"),
                            imageLight: a("4799"),
                            title: "Consulting",
                            badge: "Hot"
                        }, {
                            url: "/finance",
                            image: a("ff44"),
                            imageLight: a("eff1"),
                            title: "Finance",
                            badge: ""
                        }, {
                            url: "/digital-agency",
                            image: a("029c"),
                            imageLight: a("6e95"),
                            title: "Digital Agency",
                            badge: ""
                        }, {
                            url: "/seo-agency",
                            image: a("a09b"),
                            imageLight: a("83a7"),
                            title: "SEO Agency",
                            badge: ""
                        }, {
                            url: "/company",
                            image: a("5e43"),
                            imageLight: a("d1a4"),
                            title: "Company",
                            badge: ""
                        }, {
                            url: "/personal-portfolio",
                            image: a("42ff"),
                            imageLight: a("9747"),
                            title: "Personal Portfolio",
                            badge: ""
                        }, {
                            url: "/freelancer",
                            image: a("6a75"),
                            imageLight: a("807b"),
                            title: "Freelancer",
                            badge: "Hot"
                        }, {
                            url: "/marketing-agency",
                            image: a("73c8"),
                            imageLight: a("7dae"),
                            title: "Marketing Agency",
                            badge: ""
                        }, {
                            url: "/travel-agency",
                            image: a("0da9"),
                            imageLight: a("39fb"),
                            title: "Travel Agency",
                            badge: ""
                        }, {
                            url: "/business",
                            image: a("6105"),
                            imageLight: a("1b2d"),
                            title: "Business",
                            badge: ""
                        }, {
                            url: "/event-conference",
                            image: a("3541"),
                            imageLight: a("e1b1"),
                            title: "Event Conference",
                            badge: ""
                        }, {
                            url: "/creative-portfolio",
                            image: a("1707"),
                            imageLight: a("e125"),
                            title: "Creative Portfolio",
                            badge: ""
                        }, {
                            url: "/about",
                            image: a("3a6c"),
                            imageLight: a("0185"),
                            title: "Corporate About",
                            badge: ""
                        }, {
                            url: "#demo",
                            image: a("7aa8"),
                            imageLight: a("7aa8"),
                            title: "Finance Consulting",
                            badge: ""
                        }, {
                            url: "#demo",
                            image: a("7aa8"),
                            imageLight: a("7aa8"),
                            title: "Finance Consulting",
                            badge: ""
                        }],
                        innerPages: [{
                            id: "1",
                            url: "/blog-grid",
                            image: a("365b"),
                            imageLight: a("bb66"),
                            title: "Blog Grid"
                        }, {
                            id: "2",
                            url: "/blog-grid-sidebar",
                            image: a("0e51"),
                            imageLight: a("69d1"),
                            title: "Blog Grid Sidebar"
                        }, {
                            id: "3",
                            url: "/blog-list-view",
                            image: a("3109"),
                            imageLight: a("fe44"),
                            title: "Blog List View"
                        }, {
                            id: "4",
                            url: "/blog-list-sidebar",
                            image: a("24df"),
                            imageLight: a("9686"),
                            title: "Blog List Sidebar"
                        }, {
                            id: "5",
                            url: "/blog-details/3",
                            image: a("4610"),
                            imageLight: a("08ae"),
                            title: "Blog Details"
                        }, {
                            id: "6",
                            url: "/portfolio",
                            image: a("42ff"),
                            imageLight: a("9747"),
                            title: "Portfolio"
                        }, {
                            id: "7",
                            url: "/portfolio-three-column",
                            image: a("e94a"),
                            imageLight: a("78e4"),
                            title: "Portfolio Three Column"
                        }, {
                            id: "8",
                            url: "/portfolio-full-width",
                            image: a("6254"),
                            imageLight: a("3379"),
                            title: "Portfolio Full Width"
                        }, {
                            id: "9",
                            url: "/portfolio-grid-layout",
                            image: a("a389"),
                            imageLight: a("4e0b"),
                            title: "Portfolio Grid Layout"
                        }, {
                            id: "10",
                            url: "/portfolio-box-layout",
                            image: a("5318"),
                            imageLight: a("a162"),
                            title: "Portfolio Box Layout"
                        }, {
                            id: "11",
                            url: "/portfolio-details/5",
                            image: a("31fe"),
                            imageLight: a("7c11"),
                            title: "Portfolio Details"
                        }, {
                            id: "12",
                            url: "/about-us",
                            image: a("3a6c"),
                            imageLight: a("0185"),
                            title: "About Us"
                        }, {
                            id: "13",
                            url: "/service",
                            image: a("c76f"),
                            imageLight: a("5c77"),
                            title: "Service"
                        }, {
                            id: "14",
                            url: "/team",
                            image: a("39ef"),
                            imageLight: a("2697"),
                            title: "Team"
                        }, {
                            id: "15",
                            url: "/pricing",
                            image: a("68fe"),
                            imageLight: a("a6af"),
                            title: "Pricing"
                        }, {
                            id: "16",
                            url: "/testimonial",
                            image: a("1ee9"),
                            imageLight: a("00bf"),
                            title: "Testimonial"
                        }, {
                            id: "17",
                            url: "/progressbar",
                            image: a("3585"),
                            imageLight: a("649c"),
                            title: "Progressbar"
                        }, {
                            id: "18",
                            url: "/tab",
                            image: a("d882"),
                            imageLight: a("ee05"),
                            title: "Tab"
                        }, {
                            id: "18",
                            url: "/timeline",
                            image: a("06b2"),
                            imageLight: a("4df0"),
                            title: "Timeline"
                        }, {
                            id: "19",
                            url: "/button",
                            image: a("49eb"),
                            imageLight: a("aa45"),
                            title: "Button"
                        }, {
                            id: "20",
                            url: "/counter",
                            image: a("0daf"),
                            imageLight: a("e1fd"),
                            title: "Counter"
                        }, {
                            id: "21",
                            url: "/social-share",
                            image: a("abc4"),
                            imageLight: a("33f6"),
                            title: "Social Share"
                        }, {
                            id: "22",
                            url: "/advance-tab",
                            image: a("a768"),
                            imageLight: a("de88"),
                            title: "Advance Tab"
                        }, {
                            id: "23",
                            url: "/call-to-action",
                            image: a("7b97"),
                            imageLight: a("430d"),
                            title: "Call To Action"
                        }, {
                            id: "24",
                            url: "/error",
                            image: a("f8e7"),
                            imageLight: a("4625"),
                            title: "404 Page"
                        }, {
                            id: "25",
                            url: "/video-popup",
                            image: a("bc7d"),
                            imageLight: a("7481"),
                            title: "Video Popup"
                        }, {
                            id: "26",
                            url: "/contact",
                            image: a("9a591"),
                            imageLight: a("6b2e"),
                            title: "Contact"
                        }]
                    };
                }
            },
            ue = pe,
            me = Object(l.a)(ue, u, m, false, null, null, null),
            ge = me.exports,
            be = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", {
                    attrs: {
                        "header-class": "header-transparent",
                        "show-newsletter": true,
                        "show-cta": false
                    }
                }, [e("div", {
                    staticClass: "slider-area slider-style-1 height-850 bg_image",
                    style: {
                        "background-image": `url(${a("ec1b")})`
                    },
                    attrs: {
                        "data-black-overlay": "7"
                    }
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("div", {
                    staticClass: "inner pt--80 text-center"
                }, [e("div", [e("h3", {
                    staticClass: "rn-sub-badge",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "100"
                    }
                }, [e("span", {
                    staticClass: "theme-gradient"
                }, [t._v("Our Company's About Details.")])])]), e("h1", {
                    staticClass: "title display-one",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "150"
                    }
                }, [t._v(" We are a Corporate "), e("br"), t._v(" Business Agency. ")])])])])])]), e("div", {
                    staticClass: "service-area rn-section-gapTop"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-6"
                }, [e("div", {
                    staticClass: "content",
                    attrs: {
                        "data-aos": "fade-up"
                    }
                }, [e("h3", {
                    staticClass: "title"
                }, [t._v("We are creative digital agency working for our company brands.")])])]), e("div", {
                    staticClass: "col-lg-6"
                }, [e("p", {
                    staticClass: "mb--10",
                    attrs: {
                        "data-aos": "fade-up"
                    }
                }, [t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quis. Ullam accusantium dignissimos repellendus nemo fugiat numquam, nisi odio adipisci. Veniam neque itaque expedita officiis rem ipsa! Ratione, rem reiciendis? ")])])])])]), e("div", {
                    staticClass: "rwt-brand-area pb--60 pt--30"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mt--10"
                }, [e("Brand", {
                    attrs: {
                        "brand-list": t.brandList,
                        "brand-style": 3
                    }
                })], 1)])])]), e("Separator"), e("div", {
                    staticClass: "rn-service-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "What we can do for you",
                        title: "Services provide for you.",
                        description: "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("ServiceOne", {
                    attrs: {
                        "service-style": "service__style--1 bg-color-blackest radius mt--25",
                        "icon-size": "62",
                        "text-align": "center"
                    }
                })], 1)]), e("div", {
                    staticClass: "rwt-timeline-area rn-section-gapBottom"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("Timeline", {
                    attrs: {
                        "timeline-data": t.timelineData,
                        "timeline-style": 3
                    }
                })], 1)])])]), e("Separator"), e("AboutFour", {
                    attrs: {
                        image: a("66d6")
                    }
                }), e("div", {
                    staticClass: "rwt-counterup-area pb--100"
                }, [e("div", {
                    staticClass: "container mt_dec--30"
                }, [e("Counter", {
                    attrs: {
                        "counter-style": 5,
                        "text-align": "center",
                        "counter-data": t.counterData,
                        column: "col-lg-3 col-md-6 col-sm-6 col-12"
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rwt-team-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row mb--20"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Our Corporate Team.",
                        title: "Corporate Team Member.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row"
                }, t._l(t.teamData, function (t, a) {
                    return e("div", {
                        key: a,
                        staticClass: "col-lg-6 col-xl-3 col-md-6 col-12 mt--30"
                    }, [e("Team", {
                        attrs: {
                            "team-member": t,
                            "team-style": 4
                        }
                    })], 1);
                }), 0)])])], 1);
            },
            ve = [],
            he = function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "about-area about-style-4 rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row row--40 align-items-center"
                }, [e("div", {
                    staticClass: "col-lg-6"
                }, [e("Video", {
                    attrs: {
                        "video-data": t.videoData,
                        column: "col-12"
                    }
                })], 1), e("div", {
                    staticClass: "col-lg-6 mt_md--40 mt_sm--40"
                }, [e("div", {
                    staticClass: "content"
                }, [e("div", {
                    staticClass: "inner"
                }, [t._m(0), e("ul", {
                    staticClass: "feature-list"
                }, [e("li", [e("Icon", {
                    attrs: {
                        name: "check",
                        size: "20",
                        "icon-class": "icon"
                    }
                }), t._m(1)], 1), e("li", [e("Icon", {
                    attrs: {
                        name: "check",
                        size: "20",
                        "icon-class": "icon"
                    }
                }), t._m(2)], 1)]), e("div", {
                    staticClass: "about-btn mt--30"
                }, [e("router-link", {
                    staticClass: "btn-default",
                    attrs: {
                        to: "/about"
                    }
                }, [t._v("About Our Doob")])], 1)])])])])])]);
            },
            fe = [function () {
                var t = this,
                    e = t._self._c;
                return e("h3", {
                    staticClass: "title"
                }, [t._v("Doob specializes in "), e("br"), t._v(" small "), e("strong", [t._v("Corporate Business.")])]);
            }, function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "title-wrapper"
                }, [e("h4", {
                    staticClass: "title"
                }, [t._v("A good traveler has no fixed plans")]), e("p", {
                    staticClass: "text"
                }, [t._v(" Lorem ipsum dolor consectetur adipiscing do eiusmod tempor incididunt labore. ")])]);
            }, function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "title-wrapper"
                }, [e("h4", {
                    staticClass: "title"
                }, [t._v("A good traveler has no fixed plans")]), e("p", {
                    staticClass: "text"
                }, [t._v(" Lorem ipsum dolor consectetur adipiscing do eiusmod tempor incididunt labore. ")])]);
            }],
            Ae = function () {
                var t = this,
                    e = t._self._c;
                return 1 === t.videoStyle ? e("div", [e("div", {
                    staticClass: "row row--15"
                }, t._l(t.videoData, function (a, i) {
                    return e("div", {
                        key: i,
                        class: t.column
                    }, [e("div", {
                        staticClass: "video-popup icon-center",
                        attrs: {
                            "data-aos": "fade-up"
                        }
                    }, [e("div", {
                        staticClass: "thumbnail"
                    }, [e("img", {
                        staticClass: "radius-small",
                        attrs: {
                            src: a.thumb,
                            alt: "Video Thumbnail"
                        }
                    })]), e("div", {
                        staticClass: "video-icon"
                    }, [e("Button", {
                        attrs: {
                            "variant-button-class": "rounded-player popup-video",
                            "is-link": false
                        },
                        on: {
                            btnClick: function (e) {
                                t.imageIndex = i;
                            }
                        }
                    }, [e("span", [e("Icon", {
                        attrs: {
                            name: "play",
                            size: "30"
                        }
                    })], 1)])], 1)])]);
                }), 0), e("CoolLightBox", {
                    attrs: {
                        items: t.videoData,
                        index: t.imageIndex
                    },
                    on: {
                        close: function (e) {
                            t.imageIndex = null;
                        }
                    }
                })], 1) : 2 === t.videoStyle ? e("div", [e("div", {
                    staticClass: "row row--15"
                }, t._l(t.videoData, function (a, i) {
                    return e("div", {
                        key: i,
                        class: t.column
                    }, [e("div", {
                        staticClass: "rn-gallery icon-center video-gallery-content bg_image",
                        style: {
                            "background-image": `url(${a.thumb})`
                        },
                        attrs: {
                            "data-black-overlay": "7"
                        }
                    }, [e("div", {
                        staticClass: "overlay-content"
                    }, [e("Button", {
                        attrs: {
                            "variant-button-class": "rounded-player popup-video sm-size",
                            "is-link": false
                        },
                        on: {
                            btnClick: function (e) {
                                t.imageIndex = i;
                            }
                        }
                    }, [e("span", [e("Icon", {
                        attrs: {
                            name: "play",
                            size: "30"
                        }
                    })], 1)]), e("h3", {
                        staticClass: "title",
                        domProps: {
                            innerHTML: t._s(a.title)
                        }
                    })], 1)])]);
                }), 0), e("div", {
                    staticClass: "video-lightbox-wrapper"
                }, [e("CoolLightBox", {
                    attrs: {
                        items: t.videoData,
                        index: t.imageIndex
                    },
                    on: {
                        close: function (e) {
                            t.imageIndex = null;
                        }
                    }
                })], 1)]) : t._e();
            },
            ye = [],
            Ce = {
                name: "Video",
                components: {
                    Button: lt,
                    Icon: x
                },
                props: {
                    videoData: {},
                    videoStyle: {
                        type: Number,
                        default: 1
                    },
                    column: {
                        type: String,
                        default: "col-lg-6 col-md-6 col-12 mt--30"
                    }
                },
                data() {
                    return {
                        imageIndex: null
                    };
                }
            },
            we = Ce,
            Fe = Object(l.a)(we, Ae, ye, false, null, null, null),
            Ue = Fe.exports,
            xe = {
                name: "AboutFour",
                components: {
                    Video: Ue,
                    Icon: x
                },
                props: {
                    image: {}
                },
                data() {
                    return {
                        videoData: [{
                            thumb: this.image,
                            src: "https://www.youtube.com/watch?v=d0tU18Ybcvk"
                        }]
                    };
                }
            },
            Ke = xe,
            Re = Object(l.a)(Ke, he, fe, false, null, null, null),
            ke = Re.exports,
            Be = function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "row row--15 service-wrapper"
                }, t._l(t.serviceList, function (a, i) {
                    return e("div", {
                        key: i,
                        staticClass: "col-lg-4 col-md-6 col-sm-6 col-12"
                    }, [e("div", {
                        class: `service ${t.serviceStyle} ${t.checkTextAlign}`,
                        attrs: {
                            "data-aos": "fade-up",
                            "data-aos-delay": "70"
                        }
                    }, [e("div", {
                        staticClass: "icon"
                    }, [e("Icon", {
                        class: "size-" + t.iconSize,
                        attrs: {
                            name: a.icon
                        }
                    })], 1), e("div", {
                        staticClass: "content"
                    }, [e("h4", {
                        staticClass: "title w-600"
                    }, [e("router-link", {
                        attrs: {
                            to: "/service-details"
                        },
                        domProps: {
                            innerHTML: t._s(a.title)
                        }
                    })], 1), e("p", {
                        staticClass: "description b1 color-gray mb--0",
                        domProps: {
                            innerHTML: t._s(a.description)
                        }
                    })])])]);
                }), 0);
            },
            Se = [],
            _e = {
                name: "ServiceOne",
                components: {
                    Icon: x
                },
                props: {
                    serviceStyle: {
                        type: String
                    },
                    iconSize: {
                        type: String | Number,
                        default: 62
                    },
                    textAlign: {
                        type: String,
                        default: "left"
                    }
                },
                data() {
                    return {
                        serviceList: [{
                            icon: "activity",
                            title: "Awarded Design",
                            description: "There are many variations variations  of passages of Lorem Ipsum available, but the majority have suffered."
                        }, {
                            icon: "cast",
                            title: "Design & Creative",
                            description: "Passages there are many variations variations  of of Lorem Ipsum available, but the majority have suffered."
                        }, {
                            icon: "map",
                            title: "App Development",
                            description: "Variations There are many variations  of passages of Lorem Ipsum available, but the majority have suffered."
                        }]
                    };
                },
                computed: {
                    checkTextAlign() {
                        return "left" === this.textAlign ? "text-start" : "center" === this.textAlign ? "text-center" : "end" === this.textAlign ? "text-end" : "";
                    }
                }
            },
            De = _e,
            Te = Object(l.a)(De, Be, Se, false, null, null, null),
            Ie = Te.exports,
            Pe = function () {
                var t = this,
                    e = t._self._c;
                return 1 === t.timelineStyle ? e("div", {
                    staticClass: "rn-timeline-wrapper timeline-style-one position-relative"
                }, [e("div", {
                    staticClass: "timeline-line"
                }), t._l(t.timelineData, function (i, s) {
                    return e("div", {
                        key: s,
                        staticClass: "single-timeline mt--50"
                    }, [t._m(0, true), e("div", {
                        staticClass: "single-content"
                    }, [e("div", {
                        staticClass: "inner"
                    }, [e("div", {
                        staticClass: "row row--30 align-items-center"
                    }, [e("div", {
                        staticClass: "order-2 order-lg-1 col-lg-6 mt_md--40 mt_sm--40"
                    }, [e("div", {
                        staticClass: "content"
                    }, [e("span", {
                        staticClass: "date-of-timeline",
                        attrs: {
                            "data-aos": "fade-up",
                            "data-aos-delay": "50"
                        }
                    }, [t._v(" " + t._s(i.date) + " ")]), e("h2", {
                        staticClass: "title",
                        attrs: {
                            "data-aos": "fade-up",
                            "data-aos-delay": "80"
                        }
                    }, [t._v(" " + t._s(i.title) + " ")]), e("p", {
                        staticClass: "description",
                        attrs: {
                            "data-aos": "fade-up",
                            "data-aos-delay": "110"
                        }
                    }, [t._v(" " + t._s(i.description) + " ")]), e("div", {
                        staticClass: "row row--30"
                    }, t._l(i.workingStep, function (a, i) {
                        return e("div", {
                            key: i,
                            staticClass: "col-lg-6 col-md-6 col-12",
                            attrs: {
                                "data-aos": "fade-up",
                                "data-aos-delay": "140"
                            }
                        }, [e("div", {
                            staticClass: "working-list"
                        }, [e("h5", {
                            staticClass: "working-title",
                            attrs: {
                                "data-aos": "fade-up",
                                "data-aos-delay": "60"
                            }
                        }, [t._v(" " + t._s(a.stepTitle) + " ")]), e("p", {
                            attrs: {
                                "data-aos": "fade-up",
                                "data-aos-delay": "60"
                            }
                        }, [t._v(" " + t._s(a.stepDescription) + " ")])])]);
                    }), 0), t._m(1, true)])]), e("div", {
                        staticClass: "order-1 order-lg-2 col-lg-6"
                    }, [e("div", {
                        staticClass: "thumbnail",
                        attrs: {
                            "data-aos": "fade-up"
                        }
                    }, [e("img", {
                        staticClass: "w-100",
                        attrs: {
                            src: a("b0b6")(`./${i.image}.jpg`),
                            alt: "Corporate Vue Template"
                        }
                    })])])])])])]);
                })], 2) : 2 === t.timelineStyle || 3 === t.timelineStyle || 4 === t.timelineStyle ? e("div", {
                    staticClass: "timeline-style-two bg-color-blackest"
                }, [e("div", {
                    staticClass: "row row--0"
                }, t._l(t.timelineData, function (a, i) {
                    return e("div", {
                        key: i,
                        class: "col-lg-3 col-md-3 rn-timeline-single " + t.checkTimelineStyle
                    }, [e("div", {
                        staticClass: "rn-timeline"
                    }, [e("h6", {
                        staticClass: "title",
                        attrs: {
                            "data-aos": "fade-up",
                            "data-aos-delay": "60"
                        }
                    }, [t._v(" " + t._s(a.title) + " ")]), t._m(2, true), t._m(3, true), e("p", {
                        staticClass: "description",
                        attrs: {
                            "data-aos": "fade-up",
                            "data-aos-delay": "60"
                        }
                    }, [t._v(" " + t._s(a.description) + " ")])])]);
                }), 0)]) : t._e();
            },
            Le = [function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "timeline-dot"
                }, [e("div", {
                    staticClass: "time-line-circle"
                })]);
            }, function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "read-morebtn"
                }, [e("a", {
                    staticClass: "btn-default btn-large round",
                    attrs: {
                        href: "#",
                        "data-aos": "fade-up",
                        "data-aos-delay": "170"
                    }
                }, [e("span", [t._v("Get Started Now")])])]);
            }, function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "progress-line"
                }, [e("div", {
                    staticClass: "line-inner"
                })]);
            }, function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "progress-dot"
                }, [e("div", {
                    staticClass: "dot-level"
                }, [e("div", {
                    staticClass: "dot-inner"
                })])]);
            }],
            Qe = {
                name: "Timeline",
                props: {
                    timelineData: {},
                    timelineStyle: {
                        type: Number,
                        default: 1
                    }
                },
                computed: {
                    checkTimelineStyle() {
                        return 3 === this.timelineStyle ? "no-gradient" : 4 === this.timelineStyle ? "dark-line" : "";
                    }
                }
            },
            je = Qe,
            We = Object(l.a)(je, Pe, Le, false, null, null, null),
            Me = We.exports,
            Oe = function () {
                var t = this,
                    e = t._self._c;
                return 1 === t.counterStyle ? e("div", {
                    staticClass: "row"
                }, t._l(t.counterData, function (a, i) {
                    return e("div", {
                        key: i,
                        class: "" + t.column
                    }, [e("div", {
                        class: "count-box counter-style-1 " + t.checkTextAlign
                    }, [e("VisibilitySensor", {
                        on: {
                            change: t.onChange
                        }
                    }, [e("div", {
                        staticClass: "count-number"
                    }, [e("countTo", {
                        attrs: {
                            endVal: t.status ? a.number : 0,
                            autoplay: t.countUp,
                            duration: 3e3
                        }
                    })], 1)]), e("h5", {
                        staticClass: "title"
                    }, [t._v(t._s(a.title))])], 1)]);
                }), 0) : 2 === t.counterStyle ? e("div", {
                    staticClass: "row"
                }, t._l(t.counterData, function (a, i) {
                    return e("div", {
                        key: i,
                        class: "" + t.column
                    }, [e("div", {
                        class: "count-box counter-style-2 " + t.checkTextAlign
                    }, [e("VisibilitySensor", {
                        on: {
                            change: t.onChange
                        }
                    }, [e("div", {
                        staticClass: "count-number"
                    }, [e("countTo", {
                        attrs: {
                            endVal: t.status ? a.number : 0,
                            autoplay: t.countUp,
                            duration: 3e3
                        }
                    })], 1)]), e("h5", {
                        staticClass: "title"
                    }, [t._v(t._s(a.title))]), e("p", {
                        staticClass: "description"
                    }, [t._v(t._s(a.description))])], 1)]);
                }), 0) : 3 === t.counterStyle ? e("div", {
                    staticClass: "row"
                }, t._l(t.counterData, function (a, i) {
                    return e("div", {
                        key: i,
                        class: "" + t.column
                    }, [e("div", {
                        class: "count-box counter-style-2 color-variation " + t.checkTextAlign
                    }, [e("VisibilitySensor", {
                        on: {
                            change: t.onChange
                        }
                    }, [e("div", {
                        staticClass: "count-number"
                    }, [e("countTo", {
                        attrs: {
                            endVal: t.status ? a.number : 0,
                            autoplay: t.countUp,
                            duration: 3e3
                        }
                    })], 1)]), e("h5", {
                        staticClass: "title"
                    }, [t._v(t._s(a.title))]), e("p", {
                        staticClass: "description"
                    }, [t._v(t._s(a.description))])], 1)]);
                }), 0) : 4 === t.counterStyle ? e("div", {
                    staticClass: "row"
                }, t._l(t.counterData, function (a, i) {
                    return e("div", {
                        key: i,
                        class: "" + t.column
                    }, [e("div", {
                        class: "count-box counter-style-2 border-style " + t.checkTextAlign
                    }, [e("VisibilitySensor", {
                        on: {
                            change: t.onChange
                        }
                    }, [e("div", {
                        staticClass: "count-number"
                    }, [e("countTo", {
                        attrs: {
                            endVal: t.status ? a.number : 0,
                            autoplay: t.countUp,
                            duration: 3e3
                        }
                    })], 1)]), e("h5", {
                        staticClass: "title"
                    }, [t._v(t._s(a.title))]), e("p", {
                        staticClass: "description"
                    }, [t._v(t._s(a.description))])], 1)]);
                }), 0) : 5 === t.counterStyle ? e("div", {
                    staticClass: "row"
                }, t._l(t.counterData, function (a, i) {
                    return e("div", {
                        key: i,
                        class: "" + t.column
                    }, [e("div", {
                        class: "count-box counter-style-4 " + t.checkTextAlign
                    }, [e("VisibilitySensor", {
                        on: {
                            change: t.onChange
                        }
                    }, [e("div", {
                        staticClass: "count-number"
                    }, [e("countTo", {
                        attrs: {
                            endVal: t.status ? a.number : 0,
                            autoplay: t.countUp,
                            duration: 3e3
                        }
                    })], 1)]), e("h5", {
                        staticClass: "counter-title"
                    }, [t._v(t._s(a.title))])], 1)]);
                }), 0) : t._e();
            },
            Ee = [],
            Ve = a("5564"),
            Ne = a("ec1b0"),
            He = a.n(Ne),
            qe = {
                name: "Counter",
                components: {
                    VisibilitySensor: Ve.a,
                    countTo: He.a
                },
                props: {
                    column: {},
                    counterData: {},
                    counterStyle: {
                        type: Number,
                        default: 1
                    },
                    textAlign: {
                        type: String,
                        default: "left"
                    }
                },
                data() {
                    return {
                        countUp: true,
                        status: false
                    };
                },
                computed: {
                    checkTextAlign() {
                        return "left" === this.textAlign ? "text-start" : "center" === this.textAlign ? "text-center" : "end" === this.textAlign ? "text-end" : "";
                    }
                },
                methods: {
                    onChange(t) {
                        t && (this.status = true);
                    }
                }
            },
            ze = qe,
            Ye = Object(l.a)(ze, Oe, Ee, false, null, null, null),
            Je = Ye.exports,
            Ge = function () {
                var t = this,
                    e = t._self._c;
                return e("ul", {
                    class: ["brand-list", {
                        "brand-style-1": 1 === t.brandStyle
                    }, {
                        "brand-style-2": 2 === t.brandStyle
                    }, {
                        "brand-style-2": 3 === t.brandStyle
                    }, {
                        "brand-style-2 variation-2": 4 === t.brandStyle
                    }]
                }, t._l(t.brandList, function (t, a) {
                    return e("li", {
                        key: a
                    }, [e("a", {
                        attrs: {
                            href: "#"
                        }
                    }, [e("img", {
                        attrs: {
                            src: t.image,
                            alt: "Brand Image"
                        }
                    })])]);
                }), 0);
            },
            Xe = [],
            Ze = {
                name: "Brand",
                props: {
                    brandList: {},
                    brandStyle: {
                        type: Number,
                        default: 1
                    }
                }
            },
            $e = Ze,
            ta = Object(l.a)($e, Ge, Xe, false, null, null, null),
            ea = ta.exports,
            aa = function () {
                var t = this,
                    e = t._self._c;
                return 1 === t.teamStyle || 2 === t.teamStyle ? e("div", {
                    class: "rn-team " + t.checkTeamStyle
                }, [e("div", {
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                }, [e("div", {
                    staticClass: "inner"
                }, [e("figure", {
                    staticClass: "thumbnail"
                }, [e("img", {
                    attrs: {
                        src: a("b697")(`./${t.teamMember.image}.jpg`),
                        alt: t.teamMember.name
                    }
                })]), e("figcaption", {
                    staticClass: "content"
                }, [e("h2", {
                    staticClass: "title"
                }, [t._v(t._s(t.teamMember.name))]), e("h6", {
                    staticClass: "subtitle theme-gradient"
                }, [t._v(t._s(t.teamMember.designation))]), e("span", {
                    staticClass: "team-form"
                }, [e("img", {
                    attrs: {
                        src: a("cc7b"),
                        alt: "Corporate Vue Template"
                    }
                }), e("span", {
                    staticClass: "location"
                }, [t._v(t._s(t.teamMember.location))])]), e("p", {
                    staticClass: "description"
                }, [t._v(t._s(t.teamMember.description))]), e("ul", {
                    staticClass: "social-icon social-default icon-naked mt--20"
                }, t._l(t.teamMember.socialNetwork, function (t, a) {
                    return e("li", {
                        key: a
                    }, [e("a", {
                        attrs: {
                            href: t.url
                        }
                    }, [e("Icon", {
                        attrs: {
                            name: t.icon
                        }
                    })], 1)]);
                }), 0)])])])]) : 3 === t.teamStyle ? e("div", {
                    class: "rn-team " + t.checkTeamStyle
                }, [e("div", {
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                }, [e("div", {
                    staticClass: "inner"
                }, [e("figure", {
                    staticClass: "thumbnail"
                }, [e("img", {
                    attrs: {
                        src: a("b697")(`./${t.teamMember.image}.jpg`),
                        alt: t.teamMember.name
                    }
                })]), e("figcaption", {
                    staticClass: "content"
                }, [e("h2", {
                    staticClass: "title"
                }, [t._v(t._s(t.teamMember.name))]), e("h6", {
                    staticClass: "subtitle theme-gradient"
                }, [t._v(t._s(t.teamMember.designation))])])])])]) : 4 === t.teamStyle ? e("div", {
                    class: "rn-team " + t.checkTeamStyle
                }, [e("div", {
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                }, [e("div", {
                    staticClass: "inner"
                }, [e("figure", {
                    staticClass: "thumbnail"
                }, [e("img", {
                    attrs: {
                        src: a("b697")(`./${t.teamMember.image}.jpg`),
                        alt: t.teamMember.name
                    }
                })]), e("figcaption", {
                    staticClass: "content"
                }, [e("div", {
                    staticClass: "team-info"
                }, [e("h2", {
                    staticClass: "title"
                }, [t._v(t._s(t.teamMember.name))]), e("h6", {
                    staticClass: "subtitle theme-gradient"
                }, [t._v(t._s(t.teamMember.designation))]), e("div", {
                    staticClass: "team-form"
                }, [e("span", {
                    staticClass: "location"
                }, [t._v(t._s(t.teamMember.location))])])])])])])]) : t._e();
            },
            ia = [],
            sa = {
                name: "Team",
                components: {
                    Icon: x
                },
                props: {
                    teamStyle: {
                        type: Number,
                        default: 1
                    },
                    teamMember: {}
                },
                computed: {
                    checkTeamStyle() {
                        return 1 === this.teamStyle ? "team-style-default" : 2 === this.teamStyle ? "team-style-default style-two" : 3 === this.teamStyle ? "team-style-two" : 4 === this.teamStyle ? "team-style-three" : "";
                    }
                }
            },
            oa = sa,
            na = Object(l.a)(oa, aa, ia, false, null, null, null),
            ra = na.exports,
            la = {
                name: "About",
                components: {
                    Team: ra,
                    Brand: ea,
                    Counter: Je,
                    Timeline: Me,
                    ServiceOne: Ie,
                    AboutFour: ke,
                    SectionTitle: de,
                    Separator: se,
                    Layout: Zt
                },
                data() {
                    return {
                        brandList: [{
                            image: a("704a")
                        }, {
                            image: a("e69f")
                        }, {
                            image: a("99d3")
                        }, {
                            image: a("42f7")
                        }, {
                            image: a("a5f5")
                        }, {
                            image: a("e47b")
                        }, {
                            image: a("d2f2")
                        }, {
                            image: a("66be")
                        }, {
                            image: a("704a")
                        }],
                        timelineData: [{
                            id: "1",
                            title: "Knowledge",
                            description: "Present all available features in Essentials."
                        }, {
                            id: "2",
                            title: "Working",
                            description: "All Feature available features in Essentials."
                        }, {
                            id: "3",
                            title: "Solution",
                            description: "Popular Feature available features in Essentials."
                        }, {
                            id: "4",
                            title: "Process",
                            description: "Latest Feature available features in Essentials."
                        }],
                        counterData: [{
                            number: 199,
                            title: "Happy Clients"
                        }, {
                            number: 575,
                            title: "Employees"
                        }, {
                            number: 69,
                            title: "Useful Programs"
                        }, {
                            number: 500,
                            title: "Useful Programs"
                        }],
                        teamData: [{
                            image: "team-dark-01",
                            name: "Sr Janen Sara",
                            designation: "Sr Product Designer",
                            location: "CO Miego, AD, USA",
                            description: "Yes, I am a product designer. I have a passion for product design."
                        }, {
                            image: "team-dark-02",
                            name: "Corporate Jane",
                            designation: "Manager",
                            location: "Bangladesh",
                            description: "Yes, I am a product designer. I have a passion for product design."
                        }, {
                            image: "team-dark-03",
                            name: "Jara Saraif",
                            designation: "Software Developer",
                            location: "Poland",
                            description: "Yes, I am a product designer. I have a passion for product design."
                        }, {
                            image: "team-dark-04",
                            name: "Afanan Sifa",
                            designation: "Accounts Manager",
                            location: "Poland",
                            description: "Yes, I am a product designer. I have a passion for product design."
                        }]
                    };
                }
            },
            ca = la,
            da = Object(l.a)(ca, be, ve, false, null, null, null),
            pa = da.exports,
            ua = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("section", {
                    staticClass: "rwt-button-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row row--30"
                }, [e("div", {
                    staticClass: "col-lg-6 col-md-6 col-12"
                }, [e("SectionTitle", {
                    staticClass: "mb--50",
                    attrs: {
                        subtitle: "Easily switchable",
                        title: "Button Sizes",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                }), e("div", {
                    staticClass: "button-group",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "70"
                    }
                }, [e("Button", {
                    attrs: {
                        title: "Button Solid",
                        size: "small"
                    }
                })], 1), e("div", {
                    staticClass: "button-group mt--20",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "80"
                    }
                }, [e("Button", {
                    attrs: {
                        title: "Button Solid"
                    }
                })], 1), e("div", {
                    staticClass: "button-group mt--20",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "90"
                    }
                }, [e("Button", {
                    attrs: {
                        title: "Button Solid",
                        size: "large"
                    }
                })], 1), e("div", {
                    staticClass: "button-group mt--20",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "100"
                    }
                }, [e("Button", {
                    attrs: {
                        title: "Button Solid",
                        size: "extra-large"
                    }
                })], 1)], 1), e("div", {
                    staticClass: "col-lg-6 col-md-6 col-12 mt_sm--40"
                }, [e("SectionTitle", {
                    staticClass: "mb--50",
                    attrs: {
                        subtitle: "Include Borders",
                        title: "Outlined Buttons",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                }), e("div", {
                    staticClass: "button-group",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "70"
                    }
                }, [e("Button", {
                    attrs: {
                        title: "Button Solid",
                        size: "small",
                        outlined: true
                    }
                })], 1), e("div", {
                    staticClass: "button-group mt--20",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "80"
                    }
                }, [e("Button", {
                    attrs: {
                        title: "Button Solid",
                        outlined: true
                    }
                })], 1), e("div", {
                    staticClass: "button-group mt--20",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "90"
                    }
                }, [e("Button", {
                    attrs: {
                        title: "Button Solid",
                        size: "large",
                        outlined: true
                    }
                })], 1), e("div", {
                    staticClass: "button-group mt--20",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "100"
                    }
                }, [e("Button", {
                    attrs: {
                        title: "Button Solid",
                        size: "extra-large",
                        outlined: true
                    }
                })], 1)], 1)])])]), e("Separator"), e("section", {
                    staticClass: "rwt-button-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row row--30"
                }, [e("div", {
                    staticClass: "col-lg-6 col-md-6 col-12"
                }, [e("SectionTitle", {
                    staticClass: "mb--50",
                    attrs: {
                        subtitle: "Easily switchable icon",
                        title: "Button Icon",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                }), e("div", {
                    staticClass: "button-group",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "70"
                    }
                }, [e("Button", {
                    attrs: {
                        title: "Button Solid",
                        size: "small",
                        icon: "arrow-right"
                    }
                })], 1), e("div", {
                    staticClass: "button-group mt--20",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "80"
                    }
                }, [e("Button", {
                    attrs: {
                        title: "Button Solid",
                        icon: "arrow-right"
                    }
                })], 1), e("div", {
                    staticClass: "button-group mt--20",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "90"
                    }
                }, [e("Button", {
                    attrs: {
                        title: "Button Solid",
                        size: "large",
                        icon: "arrow-right"
                    }
                })], 1), e("div", {
                    staticClass: "button-group mt--20",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "100"
                    }
                }, [e("Button", {
                    attrs: {
                        title: "Button Solid",
                        size: "extra-large",
                        icon: "arrow-right"
                    }
                })], 1)], 1), e("div", {
                    staticClass: "col-lg-6 col-md-6 col-12 mt_sm--40"
                }, [e("SectionTitle", {
                    staticClass: "mb--50",
                    attrs: {
                        subtitle: "Include Icon",
                        title: "Outlined Buttons",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                }), e("div", {
                    staticClass: "button-group",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "70"
                    }
                }, [e("Button", {
                    attrs: {
                        title: "Button Solid",
                        size: "small",
                        outlined: true,
                        icon: "arrow-right"
                    }
                })], 1), e("div", {
                    staticClass: "button-group mt--20",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "80"
                    }
                }, [e("Button", {
                    attrs: {
                        title: "Button Solid",
                        outlined: true,
                        icon: "arrow-right"
                    }
                })], 1), e("div", {
                    staticClass: "button-group mt--20",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "90"
                    }
                }, [e("Button", {
                    attrs: {
                        title: "Button Solid",
                        size: "large",
                        outlined: true,
                        icon: "arrow-right"
                    }
                })], 1), e("div", {
                    staticClass: "button-group mt--20",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "100"
                    }
                }, [e("Button", {
                    attrs: {
                        title: "Button Solid",
                        size: "extra-large",
                        outlined: true,
                        icon: "arrow-right"
                    }
                })], 1)], 1)])])]), e("Separator"), e("section", {
                    staticClass: "rwt-button-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    staticClass: "mb--50",
                    attrs: {
                        subtitle: "Button Extra",
                        title: "Button Variation",
                        "data-aos": "fade-up"
                    }
                }), e("div", {
                    staticClass: "button-group"
                }, [e("Button", {
                    attrs: {
                        "variant-button-class": "text-underline",
                        "data-aos": "fade-up"
                    }
                }, [e("span", [t._v("View More")])]), e("Button", {
                    attrs: {
                        "read-more-button": true,
                        "data-aos": "fade-up"
                    }
                }, [e("span", [t._v("View More")])]), e("Button", {
                    attrs: {
                        "variant-button-class": "round",
                        "data-aos": "fade-up"
                    }
                }, [e("span", [t._v("View More")])]), e("Button", {
                    attrs: {
                        "variant-button-class": "square",
                        "data-aos": "fade-up"
                    }
                }, [e("span", [t._v("View More")])]), e("Button", {
                    attrs: {
                        "variant-button-class": "rounded-player popup-video",
                        url: "https://www.youtube.com/watch?v=tj9-MGHCs38",
                        "data-aos": "fade-up"
                    }
                }, [e("span", [e("Icon", {
                    attrs: {
                        name: "play",
                        size: "30"
                    }
                })], 1)]), e("Button", {
                    attrs: {
                        "variant-button-class": "rounded-player popup-video btn-border",
                        url: "https://www.youtube.com/watch?v=tj9-MGHCs38",
                        "data-aos": "fade-up"
                    }
                }, [e("span", [e("Icon", {
                    attrs: {
                        name: "play",
                        size: "30"
                    }
                })], 1)])], 1)], 1)])])])], 1);
            },
            ma = [],
            ga = function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "breadcrumb-area breadcarumb-style-1 ptb--120"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("div", {
                    staticClass: "breadcrumb-inner text-center"
                }, [e("h1", {
                    staticClass: "title theme-gradient h2",
                    attrs: {
                        "data-aos": "fade-up"
                    },
                    domProps: {
                        innerHTML: t._s(t.title)
                    }
                }), e("ul", {
                    staticClass: "page-list",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "50"
                    }
                }, [e("li", {
                    staticClass: "rn-breadcrumb-item"
                }, [e("router-link", {
                    attrs: {
                        to: t.rootUrl
                    }
                }, [t._v(t._s(t.parentUrl))])], 1), e("li", {
                    staticClass: "rn-breadcrumb-item active"
                }, [t._v(t._s(t.currentUrl))])])])])])])]);
            },
            ba = [],
            va = {
                name: "Breadcrumb",
                props: {
                    title: {
                        type: String,
                        default: "The Easiest Way To Create Website <br> Quick Copy &amp; Make site."
                    },
                    rootUrl: {
                        type: String,
                        default: "/"
                    },
                    parentUrl: {
                        type: String,
                        default: "Home"
                    },
                    currentUrl: {
                        type: String,
                        required: true
                    }
                }
            },
            ha = va,
            fa = Object(l.a)(ha, ga, ba, false, null, null, null),
            Aa = fa.exports,
            ya = {
                name: "ButtonPage",
                components: {
                    Icon: x,
                    Button: lt,
                    Separator: se,
                    SectionTitle: de,
                    Breadcrumb: Aa,
                    Layout: Zt
                }
            },
            Ca = ya,
            wa = Object(l.a)(Ca, ua, ma, false, null, null, null),
            Fa = wa.exports,
            Ua = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("section", {
                    staticClass: "rn-service-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row row--30"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    staticClass: "mb--50",
                    attrs: {
                        "text-align": "center",
                        subtitle: "What we can do for you",
                        title: "Services provide for you.",
                        description: "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("ServiceOne", {
                    attrs: {
                        "service-style": "service__style--1 bg-color-blackest radius mt--25",
                        "icon-size": "62",
                        "text-align": "center"
                    }
                })], 1)]), e("Separator"), e("section", {
                    staticClass: "rn-service-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row row--30"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    staticClass: "mb--50",
                    attrs: {
                        "text-align": "center",
                        subtitle: "What we can do for you",
                        title: "Services provide for you.",
                        description: "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("ServiceOne", {
                    attrs: {
                        "service-style": "service__style--1 bg-color-blackest radius mt--25 rbt-border",
                        "icon-size": "62",
                        "text-align": "left"
                    }
                })], 1)]), e("Separator"), e("section", {
                    staticClass: "rn-service-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row row--30"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    staticClass: "mb--50",
                    attrs: {
                        "text-align": "center",
                        subtitle: "What we can do for you",
                        title: "Services provide for you.",
                        description: "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("ServiceTwo", {
                    attrs: {
                        "card-style": "card-style-1",
                        "text-align": "left"
                    }
                })], 1)]), e("Separator"), e("section", {
                    staticClass: "rn-service-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row row--30"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    staticClass: "mb--50",
                    attrs: {
                        "text-align": "center",
                        subtitle: "What we can do for you",
                        title: "Services provide for you.",
                        description: "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("ServiceThree", {
                    attrs: {
                        "service-style": "service__style--2",
                        "text-align": "center"
                    }
                })], 1)]), e("Separator"), e("section", {
                    staticClass: "rn-service-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row row--30"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    staticClass: "mb--50",
                    attrs: {
                        "text-align": "center",
                        subtitle: "What we can do for you",
                        title: "Services provide for you.",
                        description: "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("ServiceOne", {
                    attrs: {
                        "service-style": "service__style--1 icon-circle-style",
                        "text-align": "center",
                        "icon-size": "39"
                    }
                })], 1)]), e("Separator"), e("section", {
                    staticClass: "rn-service-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row row--30"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    staticClass: "mb--50",
                    attrs: {
                        "text-align": "center",
                        subtitle: "What we can do for you",
                        title: "Services provide for you.",
                        description: "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("ServiceFour", {
                    attrs: {
                        "service-style": "service__style--1 icon-circle-style with-working-process",
                        "text-align": "center"
                    }
                })], 1)]), e("Separator"), e("section", {
                    staticClass: "rn-service-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row row--30"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    staticClass: "mb--50",
                    attrs: {
                        "text-align": "center",
                        subtitle: "What we can do for you",
                        title: "Services provide for you.",
                        description: "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("ServiceFive", {
                    attrs: {
                        "service-style": "gallery-style",
                        "text-align": "left"
                    }
                })], 1)])], 1);
            },
            xa = [],
            Ka = function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "row row--15 service-wrapper"
                }, t._l(t.serviceList, function (a, i) {
                    return e("div", {
                        key: i,
                        staticClass: "col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12"
                    }, [e("div", {
                        class: `card-box ${t.cardStyle} ${t.checkTextAlign}`,
                        attrs: {
                            "data-aos": "fade-up",
                            "data-aos-delay": "70"
                        }
                    }, [e("div", {
                        staticClass: "inner"
                    }, [e("div", {
                        staticClass: "image"
                    }, [e("router-link", {
                        attrs: {
                            to: "/service-details"
                        }
                    }, [e("img", {
                        attrs: {
                            src: a.image,
                            alt: "card Images"
                        }
                    })])], 1), e("div", {
                        staticClass: "content"
                    }, [e("h4", {
                        staticClass: "title mb--20"
                    }, [e("router-link", {
                        attrs: {
                            to: "/service-details"
                        },
                        domProps: {
                            innerHTML: t._s(a.title)
                        }
                    })], 1), e("p", {
                        staticClass: "description b1 color-gray mb--0",
                        domProps: {
                            innerHTML: t._s(a.description)
                        }
                    }), e("router-link", {
                        staticClass: "btn-default btn-small btn-border",
                        attrs: {
                            to: "/service-details"
                        }
                    }, [t._v(" Read More ")])], 1)])])]);
                }), 0);
            },
            Ra = [],
            ka = {
                name: "ServiceTwo",
                props: {
                    cardStyle: {
                        type: String
                    },
                    textAlign: {
                        type: String,
                        default: "left"
                    }
                },
                data() {
                    return {
                        serviceList: [{
                            image: a("19bd"),
                            title: "Awarded Design",
                            description: "There are many variations variats  of passages of Lorem Ipsum available."
                        }, {
                            image: a("e545"),
                            title: "Design & Creative",
                            description: "Passages there are many variatin Lorem Ipsum available majority suffered."
                        }, {
                            image: a("f749"),
                            title: "App Development",
                            description: "Variations There are many of pass ages of Lorem Ipsum available the majority."
                        }, {
                            image: a("7321"),
                            title: "Web Design",
                            description: "Variations There are many of pass ages of Lorem Ipsum available the majority."
                        }]
                    };
                },
                computed: {
                    checkTextAlign() {
                        return "left" === this.textAlign ? "text-start" : "center" === this.textAlign ? "text-center" : "end" === this.textAlign ? "text-end" : "";
                    }
                }
            },
            Ba = ka,
            Sa = Object(l.a)(Ba, Ka, Ra, false, null, null, null),
            _a = Sa.exports,
            Da = function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "row row--15 service-wrapper"
                }, t._l(t.serviceList, function (a, i) {
                    return e("div", {
                        key: i,
                        staticClass: "col-lg-4 col-md-6 col-sm-6 col-12"
                    }, [e("div", {
                        attrs: {
                            "data-aos": "fade-up",
                            "data-aos-delay": "70"
                        }
                    }, [e("div", {
                        class: `service ${t.serviceStyle} ${t.checkTextAlign}`
                    }, [e("div", {
                        staticClass: "inner"
                    }, [e("div", {
                        staticClass: "image"
                    }, [e("img", {
                        attrs: {
                            src: a.image,
                            alt: "Service Images"
                        }
                    })]), e("div", {
                        staticClass: "content"
                    }, [e("h4", {
                        staticClass: "title"
                    }, [e("router-link", {
                        attrs: {
                            to: "/service-details"
                        },
                        domProps: {
                            innerHTML: t._s(a.title)
                        }
                    })], 1), e("p", {
                        staticClass: "description b1 color-gray mb--0",
                        domProps: {
                            innerHTML: t._s(a.description)
                        }
                    })])])])])]);
                }), 0);
            },
            Ta = [],
            Ia = {
                name: "ServiceThree",
                props: {
                    serviceStyle: {
                        type: String
                    },
                    textAlign: {
                        type: String,
                        default: "left"
                    }
                },
                data() {
                    return {
                        serviceList: [{
                            image: a("0a35"),
                            title: "Awarded Design",
                            description: "There are many variations variats of passages of Lorem Ipsum available, but the majority."
                        }, {
                            image: a("7a74"),
                            title: "Design & Creative",
                            description: "Passages there are many variatin Lorem Ipsum available, but the majority have suffered."
                        }, {
                            image: a("ee85"),
                            title: "App Development",
                            description: "Variations There are many of pass ages of Lorem Ipsum available, but the majority but the majority."
                        }]
                    };
                },
                computed: {
                    checkTextAlign() {
                        return "left" === this.textAlign ? "text-start" : "center" === this.textAlign ? "text-center" : "end" === this.textAlign ? "text-end" : "";
                    }
                }
            },
            Pa = Ia,
            La = Object(l.a)(Pa, Da, Ta, false, null, null, null),
            Qa = La.exports,
            ja = function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "row row--15 service-wrapper"
                }, t._l(t.serviceList, function (a, i) {
                    return e("div", {
                        key: i,
                        staticClass: "col-lg-3 col-md-6 col-sm-6 col-12"
                    }, [e("div", {
                        class: `service ${t.serviceStyle} ${t.checkTextAlign}`,
                        attrs: {
                            "data-aos": "fade-up",
                            "data-aos-delay": "70"
                        }
                    }, [e("div", {
                        staticClass: "icon"
                    }, [e("div", {
                        staticClass: "line"
                    }), t._v(" " + t._s(a.icon) + " ")]), e("div", {
                        staticClass: "content"
                    }, [e("h4", {
                        staticClass: "title"
                    }, [e("router-link", {
                        attrs: {
                            to: "/service-details"
                        },
                        domProps: {
                            innerHTML: t._s(a.title)
                        }
                    })], 1), e("p", {
                        staticClass: "description b1 color-gray mb--0",
                        domProps: {
                            innerHTML: t._s(a.description)
                        }
                    })])])]);
                }), 0);
            },
            Wa = [],
            Ma = {
                name: "ServiceFour",
                props: {
                    serviceStyle: {
                        type: String
                    },
                    textAlign: {
                        type: String,
                        default: "left"
                    }
                },
                data() {
                    return {
                        serviceList: [{
                            icon: "1",
                            title: "Awarded Design",
                            description: "There are many variations variations have."
                        }, {
                            icon: "2",
                            title: "Design & Creative",
                            description: "Passages there are many variations have."
                        }, {
                            icon: "3",
                            title: "App Development",
                            description: "Variations There variations many Lorem Ipsum."
                        }, {
                            icon: "4",
                            title: "Product Designer",
                            description: "Variations There variations of Lorem Ipsum."
                        }]
                    };
                },
                computed: {
                    checkTextAlign() {
                        return "left" === this.textAlign ? "text-start" : "center" === this.textAlign ? "text-center" : "end" === this.textAlign ? "text-end" : "";
                    }
                }
            },
            Oa = Ma,
            Ea = Object(l.a)(Oa, ja, Wa, false, null, null, null),
            Va = Ea.exports,
            Na = function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "row row--15 service-wrapper"
                }, t._l(t.serviceList, function (a, i) {
                    return e("div", {
                        key: i,
                        staticClass: "col-lg-4 col-md-6 col-sm-12 col-12"
                    }, [e("div", {
                        class: `service ${t.serviceStyle} ${t.checkTextAlign}`,
                        attrs: {
                            "data-aos": "fade-up",
                            "data-aos-delay": "70"
                        }
                    }, [e("div", {
                        staticClass: "inner"
                    }, [e("div", {
                        staticClass: "content"
                    }, [e("h4", {
                        staticClass: "title"
                    }, [e("router-link", {
                        attrs: {
                            to: "/service-details"
                        },
                        domProps: {
                            innerHTML: t._s(a.title)
                        }
                    })], 1), e("p", {
                        staticClass: "description",
                        domProps: {
                            innerHTML: t._s(a.description)
                        }
                    })]), e("div", {
                        staticClass: "image"
                    }, [e("img", {
                        attrs: {
                            src: a.image,
                            alt: "Service Images"
                        }
                    })])])])]);
                }), 0);
            },
            Ha = [],
            qa = {
                name: "ServiceFive",
                props: {
                    serviceStyle: {
                        type: String
                    },
                    textAlign: {
                        type: String,
                        default: "left"
                    }
                },
                data() {
                    return {
                        serviceList: [{
                            image: a("89cd"),
                            title: "Awarded Design",
                            description: "There are many variations variants of passages of Lorem Ipsum available."
                        }, {
                            image: a("b8be"),
                            title: "Design & Creative",
                            description: "Passages there are many variants Lorem Ipsum available majority suffered."
                        }, {
                            image: a("c422"),
                            title: "App Development",
                            description: "Variations There are many of pass ages of Lorem Ipsum available the majority."
                        }]
                    };
                },
                computed: {
                    checkTextAlign() {
                        return "left" === this.textAlign ? "text-start" : "center" === this.textAlign ? "text-center" : "end" === this.textAlign ? "text-end" : "";
                    }
                }
            },
            za = qa,
            Ya = Object(l.a)(za, Na, Ha, false, null, null, null),
            Ja = Ya.exports,
            Ga = {
                name: "ServicePage",
                components: {
                    ServiceOne: Ie,
                    ServiceTwo: _a,
                    ServiceThree: Qa,
                    ServiceFour: Va,
                    ServiceFive: Ja,
                    Separator: se,
                    SectionTitle: de,
                    Breadcrumb: Aa,
                    Layout: Zt
                }
            },
            Xa = Ga,
            Za = Object(l.a)(Xa, Ua, xa, false, null, null, null),
            $a = Za.exports,
            ti = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("Breadcrumb", {
                    attrs: {
                        "current-url": "Service Details",
                        title: t.title
                    }
                }), e("div", {
                    staticClass: "rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row row--40 align-items-center"
                }, [e("div", {
                    staticClass: "col-lg-6"
                }, [e("div", {
                    staticClass: "thumb"
                }, [e("img", {
                    staticClass: "w-100 rounded",
                    attrs: {
                        src: a("4093"),
                        alt: "Service Images"
                    }
                })])]), e("div", {
                    staticClass: "col-lg-6 mt_md--40 mt_sm--40"
                }, [e("div", [e("p", [t._v(" In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme). ")]), e("p", [t._v(" That are required by many components within an application. Context provides a way to share values like these between. ")]), e("h4", {
                    staticClass: "title"
                }, [t._v("Process of metel")]), e("ul", {
                    staticClass: "liststyle bullet"
                }, [e("li", [t._v("Yet this above sewed flirted opened ouch")]), e("li", [t._v("Goldfinch realistic sporadic ingenuous")]), e("li", [t._v("Abominable this abidin far successfully then like piquan")])])])])])])]), e("Separator"), e("div", {
                    staticClass: "rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row row--40 align-items-center"
                }, [e("div", {
                    staticClass: "col-lg-6 order-2 order-lg-1"
                }, [e("div", [e("p", [t._v(" But the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ")]), e("p", [t._v(" hidden in the middle of text. All the Lorem Ipsum generators tend toitrrepeat predefined chunks. Necessary, making this the first true generator on the Internet. ")]), e("p", [t._v(" hidden in the middle of text. All the Lorem Ipsum generators tend toitrrepeat predefined chunks. Necessary, making this the first true generator on the Internet. ")]), e("h4", {
                    staticClass: "title"
                }, [t._v("Our Working Process")]), e("ul", {
                    staticClass: "liststyle bullet"
                }, [e("li", [t._v("Specializes in small Corporate Business")]), e("li", [t._v("Yet this above sewed flirted opened ouch")]), e("li", [t._v("Goldfinch realistic sporadic ingenuous")])])])]), e("div", {
                    staticClass: "col-lg-6 mb_md--40 mb_sm--40 order-1 order-lg-2"
                }, [e("Video", {
                    attrs: {
                        "video-data": t.videoData,
                        column: "col-12"
                    }
                })], 1)])])])], 1);
            },
            ei = [],
            ai = {
                name: "ServiceDetailsPage",
                components: {
                    Icon: x,
                    Video: Ue,
                    Separator: se,
                    Breadcrumb: Aa,
                    Layout: Zt
                },
                props: {
                    title: {
                        type: String,
                        default: "Website Development"
                    }
                },
                data() {
                    return {
                        videoData: [{
                            thumb: a("66d6"),
                            src: "https://www.youtube.com/watch?v=d0tU18Ybcvk"
                        }]
                    };
                }
            },
            ii = ai,
            si = Object(l.a)(ii, ti, ei, false, null, null, null),
            oi = si.exports,
            ni = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("section", {
                    staticClass: "rn-service-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row row--30"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    staticClass: "mb--50",
                    attrs: {
                        "text-align": "center",
                        subtitle: "Customizable Counters",
                        title: "Counters Custom Elements",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("Counter", {
                    attrs: {
                        "text-align": "center",
                        "counter-data": t.counterOneData,
                        column: "col-lg-3 col-md-6 col-sm-6 col-12"
                    }
                })], 1)]), e("Separator"), e("section", {
                    staticClass: "rn-service-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row row--30"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    staticClass: "mb--50",
                    attrs: {
                        "text-align": "center",
                        subtitle: "Customizable Counters",
                        title: "Counters Custom Elements",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("Counter", {
                    attrs: {
                        "counter-style": 2,
                        "text-align": "center",
                        "counter-data": t.counterTwoData,
                        column: "col-lg-4 col-md-6 col-sm-6 col-12"
                    }
                })], 1)]), e("Separator"), e("section", {
                    staticClass: "rn-service-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row row--30"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    staticClass: "mb--50",
                    attrs: {
                        "text-align": "center",
                        subtitle: "Customizable Counters",
                        title: "Counters Custom Elements",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("Counter", {
                    attrs: {
                        "counter-style": 3,
                        "text-align": "center",
                        "counter-data": t.counterThreeData,
                        column: "col-lg-4 col-md-6 col-sm-6 col-12"
                    }
                })], 1)]), e("Separator"), e("section", {
                    staticClass: "rn-service-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row row--30"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    staticClass: "mb--50",
                    attrs: {
                        "text-align": "center",
                        subtitle: "Customizable Counters",
                        title: "Counters Custom Elements",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("Counter", {
                    attrs: {
                        "counter-style": 4,
                        "text-align": "center",
                        "counter-data": t.counterFourData,
                        column: "col-lg-4 col-md-6 col-sm-6 col-12"
                    }
                })], 1)]), e("Separator"), e("section", {
                    staticClass: "rn-service-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row row--30"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    staticClass: "mb--50",
                    attrs: {
                        "text-align": "center",
                        subtitle: "Customizable Counters",
                        title: "Counters Custom Elements",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("Counter", {
                    attrs: {
                        "counter-style": 5,
                        "text-align": "center",
                        "counter-data": t.counterFiveData,
                        column: "col-lg-3 col-md-6 col-sm-6 col-12"
                    }
                })], 1)])], 1);
            },
            ri = [],
            li = {
                name: "CounterUpPage",
                components: {
                    Counter: Je,
                    Separator: se,
                    SectionTitle: de,
                    Breadcrumb: Aa,
                    Layout: Zt
                },
                data() {
                    return {
                        counterOneData: [{
                            number: 199,
                            title: "Happy Clients"
                        }, {
                            number: 575,
                            title: "Employees"
                        }, {
                            number: 69,
                            title: "Useful Programs"
                        }, {
                            number: 500,
                            title: "Useful Programs"
                        }],
                        counterTwoData: [{
                            number: 199,
                            title: "Happy Clients",
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                        }, {
                            number: 575,
                            title: "Employees",
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                        }, {
                            number: 69,
                            title: "Useful Programs",
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                        }],
                        counterThreeData: [{
                            number: 199,
                            title: "Happy Clients",
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                        }, {
                            number: 575,
                            title: "Employees",
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                        }, {
                            number: 69,
                            title: "Useful Programs",
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                        }],
                        counterFourData: [{
                            number: 199,
                            title: "Happy Clients",
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                        }, {
                            number: 575,
                            title: "Employees",
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                        }, {
                            number: 69,
                            title: "Useful Programs",
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                        }],
                        counterFiveData: [{
                            number: 199,
                            title: "Happy Clients"
                        }, {
                            number: 575,
                            title: "Employees"
                        }, {
                            number: 69,
                            title: "Useful Programs"
                        }, {
                            number: 500,
                            title: "Useful Programs"
                        }]
                    };
                }
            },
            ci = li,
            di = Object(l.a)(ci, ni, ri, false, null, null, null),
            pi = di.exports,
            ui = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("div", {
                    staticClass: "rwt-progressbar-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-10 offset-lg-1"
                }, [e("SectionTitle", {
                    attrs: {
                        subtitle: "Colors, percentage types",
                        title: "Progressbar Style One",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("Progressbar", {
                    attrs: {
                        "progress-data": t.progressOneData
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rwt-progressbar-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-10 offset-lg-1"
                }, [e("SectionTitle", {
                    attrs: {
                        subtitle: "Theme Color, Round Types",
                        title: "Progressbar Style Two",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("Progressbar", {
                    attrs: {
                        "progress-data": t.progressOneData,
                        "progress-style": 2
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rwt-progressbar-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-10 offset-lg-1"
                }, [e("SectionTitle", {
                    attrs: {
                        subtitle: "Colors, percentage types",
                        title: "Progressbar Style Three",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("Progressbar", {
                    attrs: {
                        "progress-data": t.progressOneData,
                        "progress-style": 3
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rwt-progressbar-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-10 offset-lg-1"
                }, [e("SectionTitle", {
                    attrs: {
                        subtitle: "Colors, percentage types",
                        title: "Progressbar Style Four",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("Progressbar", {
                    attrs: {
                        "progress-data": t.progressOneData,
                        "progress-style": 4
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rwt-progressbar-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-10 offset-lg-1"
                }, [e("SectionTitle", {
                    attrs: {
                        subtitle: "Circle, Theme Color",
                        title: "Progressbar Style Five",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-10 offset-lg-1"
                }, [e("Progressbar", {
                    attrs: {
                        "progress-data": t.progressCircleData,
                        "progress-style": 5,
                        column: "col-lg-3 col-md-6 col-sm-6 mt--30 col-12"
                    }
                })], 1)])])]), e("Separator"), e("div", {
                    staticClass: "rwt-progressbar-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-10 offset-lg-1"
                }, [e("SectionTitle", {
                    attrs: {
                        subtitle: "Circle, Theme Color",
                        title: "Progressbar Style Six",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-10 offset-lg-1"
                }, [e("Progressbar", {
                    attrs: {
                        "progress-data": t.progressCircleData2,
                        "progress-style": 5,
                        column: "col-lg-3 col-md-6 col-sm-6 mt--30 col-12"
                    }
                })], 1)])])])], 1);
            },
            mi = [],
            gi = function () {
                var t = this,
                    e = t._self._c;
                return 1 === t.progressStyle ? e("div", {
                    staticClass: "row row--30"
                }, [e("div", {
                    class: t.customColumn,
                    attrs: {
                        "data-aos": "fade-up"
                    }
                }, [e("div", {
                    staticClass: "rbt-progress-style-1 mt--10"
                }, t._l(t.progressData, function (a, i) {
                    return e("div", {
                        key: i,
                        staticClass: "single-progress"
                    }, [e("h6", {
                        staticClass: "title"
                    }, [t._v(t._s(a.title))]), e("VisibilitySensor", {
                        on: {
                            change: t.onChange
                        }
                    }, [e("div", {
                        staticClass: "progress"
                    }, [e("div", {
                        class: "progress-bar " + a.progressClass,
                        style: t.status ? `width: ${a.percentage}%` : "width: 0%",
                        attrs: {
                            role: "progressbar",
                            "aria-valuenow": a.percentage,
                            "aria-valuemin": "0",
                            "aria-valuemax": "100"
                        }
                    }), e("span", {
                        staticClass: "progress-number"
                    }, [t._v(t._s(a.percentage) + "%")])])])], 1);
                }), 0)])]) : 2 === t.progressStyle ? e("div", {
                    staticClass: "row row--30 mt--20"
                }, [e("div", {
                    class: t.customColumn,
                    attrs: {
                        "data-aos": "fade-up"
                    }
                }, [e("div", {
                    staticClass: "rbt-progress-style-1 mt--10"
                }, t._l(t.progressData, function (a, i) {
                    return e("div", {
                        key: i,
                        staticClass: "single-progress"
                    }, [e("h6", {
                        staticClass: "title"
                    }, [t._v(t._s(a.title))]), e("VisibilitySensor", {
                        on: {
                            change: t.onChange
                        }
                    }, [e("div", {
                        staticClass: "progress"
                    }, [e("div", {
                        staticClass: "progress-bar",
                        style: t.status ? `width: ${a.percentage}%` : "width: 0%",
                        attrs: {
                            role: "progressbar",
                            "aria-valuenow": a.percentage,
                            "aria-valuemin": "0",
                            "aria-valuemax": "100"
                        }
                    }), e("span", {
                        staticClass: "progress-number"
                    }, [t._v(t._s(a.percentage) + "%")])])])], 1);
                }), 0)])]) : 3 === t.progressStyle ? e("div", {
                    staticClass: "row row--30 mt--20"
                }, [e("div", {
                    class: t.customColumn,
                    attrs: {
                        "data-aos": "fade-up"
                    }
                }, [e("div", {
                    staticClass: "rbt-progress-style-1 mt--10"
                }, t._l(t.progressData, function (a, i) {
                    return e("div", {
                        key: i,
                        staticClass: "single-progress"
                    }, [e("h6", {
                        staticClass: "title"
                    }, [t._v(t._s(a.title))]), e("VisibilitySensor", {
                        on: {
                            change: t.onChange
                        }
                    }, [e("div", {
                        staticClass: "progress"
                    }, [e("div", {
                        staticClass: "progress-bar bar-gradiand",
                        style: t.status ? `width: ${a.percentage}%` : "width: 0%",
                        attrs: {
                            role: "progressbar",
                            "aria-valuenow": a.percentage,
                            "aria-valuemin": "0",
                            "aria-valuemax": "100"
                        }
                    }), e("span", {
                        staticClass: "progress-number"
                    }, [t._v(t._s(a.percentage) + "%")])])])], 1);
                }), 0)])]) : 4 === t.progressStyle ? e("div", {
                    staticClass: "row row--30 mt--20"
                }, [e("div", {
                    class: t.customColumn,
                    attrs: {
                        "data-aos": "fade-up"
                    }
                }, [e("div", {
                    staticClass: "rbt-progress-style-1 mt--10"
                }, t._l(t.progressData, function (a, i) {
                    return e("div", {
                        key: i,
                        staticClass: "single-progress large-size no-radius"
                    }, [e("h6", {
                        staticClass: "title"
                    }, [t._v(t._s(a.title))]), e("VisibilitySensor", {
                        on: {
                            change: t.onChange
                        }
                    }, [e("div", {
                        staticClass: "progress"
                    }, [e("div", {
                        staticClass: "progress-bar",
                        style: t.status ? `width: ${a.percentage}%` : "width: 0%",
                        attrs: {
                            role: "progressbar",
                            "aria-valuenow": a.percentage,
                            "aria-valuemin": "0",
                            "aria-valuemax": "100"
                        }
                    }), e("span", {
                        staticClass: "progress-number"
                    }, [t._v(t._s(a.percentage) + "%")])])])], 1);
                }), 0)])]) : 5 === t.progressStyle ? e("div", {
                    staticClass: "row row--30 mt--20"
                }, t._l(t.progressData, function (a, i) {
                    return e("div", {
                        key: i,
                        class: t.column,
                        attrs: {
                            "data-aos": "fade-up"
                        }
                    }, [e("div", {
                        staticClass: "radial-progress-single"
                    }, [e("VisibilitySensor", {
                        on: {
                            change: t.onChange
                        }
                    }, [e("vue-easy-pie-chart", {
                        staticClass: "radial-progress",
                        attrs: {
                            percent: t.status ? a.percentage : 0,
                            "bar-color": a.strokePath,
                            "track-color": a.strokeColor,
                            "scale-color": "transparent",
                            "line-width": 10,
                            size: 220
                        }
                    }, [e("div", {
                        staticClass: "circle-text"
                    }, [e("span", {
                        staticClass: "count"
                    }, [t._v(t._s(a.percentage))])])])], 1), e("div", {
                        staticClass: "circle-info"
                    }, [e("h4", {
                        staticClass: "title"
                    }, [t._v(t._s(a.title))]), e("h6", {
                        staticClass: "subtitle"
                    }, [t._v(t._s(a.subtitle))])])], 1)]);
                }), 0) : t._e();
            },
            bi = [],
            vi = a("7083"),
            hi = a.n(vi),
            fi = {
                name: "Progressbar",
                props: {
                    progressData: {},
                    progressStyle: {
                        type: Number,
                        default: 1
                    },
                    column: {
                        type: String,
                        default: "rbt-progress-style-1 mt--10"
                    },
                    customColumn: {
                        type: String,
                        default: "col-lg-10 offset-lg-1"
                    }
                },
                components: {
                    VisibilitySensor: Ve.a,
                    VueEasyPieChart: hi.a
                },
                data() {
                    return {
                        status: false
                    };
                },
                methods: {
                    onChange(t) {
                        t && (this.status = true);
                    }
                }
            },
            Ai = fi,
            yi = Object(l.a)(Ai, gi, bi, false, null, null, null),
            Ci = yi.exports,
            wi = {
                name: "ProgressbarPage",
                components: {
                    Progressbar: Ci,
                    SectionTitle: de,
                    Separator: se,
                    Layout: Zt,
                    Breadcrumb: Aa
                },
                data() {
                    return {
                        progressOneData: [{
                            id: 1,
                            title: "Web Development",
                            percentage: 90,
                            progressClass: "bar-color-1"
                        }, {
                            id: 2,
                            title: "Photoshop Design",
                            percentage: 75,
                            progressClass: "bar-color-2"
                        }, {
                            id: 3,
                            title: "App Development",
                            percentage: 70,
                            progressClass: "bar-color-3"
                        }, {
                            id: 4,
                            title: "Application Development",
                            percentage: 95,
                            progressClass: "bar-color-4"
                        }],
                        progressCircleData: [{
                            id: 1,
                            title: "Design",
                            percentage: 85,
                            subtitle: "Presentation your skill",
                            strokeColor: "#0f0f11",
                            strokePath: "#059DFF"
                        }, {
                            id: 2,
                            title: "Photoshop",
                            percentage: 60,
                            subtitle: "Presentation your skill",
                            strokeColor: "#0f0f11",
                            strokePath: "#059DFF"
                        }, {
                            id: 3,
                            title: "Application",
                            percentage: 70,
                            subtitle: "Presentation your skill",
                            strokeColor: "#0f0f11",
                            strokePath: "#059DFF"
                        }, {
                            id: 4,
                            title: "Development",
                            percentage: 95,
                            subtitle: "Presentation your skill",
                            strokeColor: "#0f0f11",
                            strokePath: "#059DFF"
                        }],
                        progressCircleData2: [{
                            id: 1,
                            title: "Design",
                            percentage: 85,
                            subtitle: "Presentation your skill",
                            strokeColor: "#0f0f11",
                            strokePath: "#FB5343"
                        }, {
                            id: 2,
                            title: "Photoshop",
                            percentage: 60,
                            subtitle: "Presentation your skill",
                            strokeColor: "#0f0f11",
                            strokePath: "#E33FA1"
                        }, {
                            id: 3,
                            title: "Application",
                            percentage: 70,
                            subtitle: "Presentation your skill",
                            strokeColor: "#0f0f11",
                            strokePath: "#6549D5"
                        }, {
                            id: 4,
                            title: "Development",
                            percentage: 95,
                            subtitle: "Presentation your skill",
                            strokeColor: "#0f0f11",
                            strokePath: "#36C6F0"
                        }]
                    };
                }
            },
            Fi = wi,
            Ui = Object(l.a)(Fi, ui, mi, false, null, null, null),
            xi = Ui.exports,
            Ki = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("div", {
                    staticClass: "rn-accordion-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-10 offset-lg-1"
                }, [e("SectionTitle", {
                    staticClass: "mb--30",
                    attrs: {
                        "text-align": "center",
                        subtitle: "Accordion",
                        title: "Customize All",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("div", {
                    staticClass: "row mt--35 row--20"
                }, [e("div", {
                    staticClass: "col-lg-10 offset-lg-1"
                }, [e("Accordion", {
                    attrs: {
                        id: "accordionExampleOne",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)])])]), e("Separator"), e("div", {
                    staticClass: "rn-accordion-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-10 offset-lg-1"
                }, [e("SectionTitle", {
                    staticClass: "mb--30",
                    attrs: {
                        "text-align": "center",
                        subtitle: "Accordion",
                        title: "Customize All",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("div", {
                    staticClass: "row mt--35 row--20"
                }, [e("div", {
                    staticClass: "col-lg-10 offset-lg-1"
                }, [e("Accordion", {
                    attrs: {
                        id: "accordionExampleTwo",
                        "accordion-style-class": "rn-accordion-02",
                        "accordion-content": [{
                            id: "Five",
                            title: "What is Doob ? How does it work?",
                            description: "You can run doob easily. First You'll need to have node and npm on your machine. So Please open your command prompt then check your node -v and npm -v Version. Goes To Your your command prompt: then First: npm install At Last: npm run start. By the following way you can be run your project easily."
                        }, {
                            id: "Six",
                            title: "How can I get the customer support?",
                            description: "After purchasing the product need you any support you can be share with us with sending mail to rainbowit10@gmail.com."
                        }, {
                            id: "Seven",
                            title: "Can I get update regularly and For how long do I get updates?",
                            description: "Yes, We will get update the Trydo. And you can get it any time. Next time we will comes with more feature. You can be get update for unlimited times. Our dedicated team works for update."
                        }, {
                            id: "Eight",
                            title: "How can I run doob html template?",
                            description: "You can run doob easily. First You'll need to have node and npm on your machine. So Please open your command prompt then check your node -v and npm -v Version. Goes To Your your command prompt: then First: npm install At Last: npm run start. By the following way you can be run your project easily."
                        }],
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)])])]), e("Separator"), e("div", {
                    staticClass: "rn-accordion-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-10 offset-lg-1"
                }, [e("SectionTitle", {
                    staticClass: "mb--30",
                    attrs: {
                        "text-align": "center",
                        subtitle: "Accordion",
                        title: "Customize All",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("div", {
                    staticClass: "row mt--35 row--20"
                }, [e("div", {
                    staticClass: "col-lg-10 offset-lg-1"
                }, [e("Accordion", {
                    attrs: {
                        id: "accordionExampleThree",
                        "accordion-style-class": "rn-accordion-03",
                        "accordion-content": [{
                            id: "Nine",
                            title: "What is Doob ? How does it work?",
                            description: "You can run doob easily. First You'll need to have node and npm on your machine. So Please open your command prompt then check your node -v and npm -v Version. Goes To Your your command prompt: then First: npm install At Last: npm run start. By the following way you can be run your project easily."
                        }, {
                            id: "Ten",
                            title: "How can I get the customer support?",
                            description: "After purchasing the product need you any support you can be share with us with sending mail to rainbowit10@gmail.com."
                        }, {
                            id: "Eleven",
                            title: "Can I get update regularly and For how long do I get updates?",
                            description: "Yes, We will get update the Trydo. And you can get it any time. Next time we will comes with more feature. You can be get update for unlimited times. Our dedicated team works for update."
                        }, {
                            id: "Twelve",
                            title: "How can I run doob html template?",
                            description: "You can run doob easily. First You'll need to have node and npm on your machine. So Please open your command prompt then check your node -v and npm -v Version. Goes To Your your command prompt: then First: npm install At Last: npm run start. By the following way you can be run your project easily."
                        }],
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)])])]), e("Separator"), e("div", {
                    staticClass: "rn-accordion-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-10 offset-lg-1"
                }, [e("SectionTitle", {
                    staticClass: "mb--30",
                    attrs: {
                        "text-align": "center",
                        subtitle: "Accordion",
                        title: "Customize All",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("div", {
                    staticClass: "row mt--35 row--20"
                }, [e("div", {
                    staticClass: "col-lg-10 offset-lg-1"
                }, [e("Accordion", {
                    attrs: {
                        id: "accordionExampleFour",
                        "accordion-style-class": "rn-accordion-04",
                        "accordion-content": [{
                            id: "Thirteen",
                            title: "What is Doob ? How does it work?",
                            description: "You can run doob easily. First You'll need to have node and npm on your machine. So Please open your command prompt then check your node -v and npm -v Version. Goes To Your your command prompt: then First: npm install At Last: npm run start. By the following way you can be run your project easily."
                        }, {
                            id: "Fourteen",
                            title: "How can I get the customer support?",
                            description: "After purchasing the product need you any support you can be share with us with sending mail to rainbowit10@gmail.com."
                        }, {
                            id: "Fifteen",
                            title: "Can I get update regularly and For how long do I get updates?",
                            description: "Yes, We will get update the Trydo. And you can get it any time. Next time we will comes with more feature. You can be get update for unlimited times. Our dedicated team works for update."
                        }, {
                            id: "Sixteen",
                            title: "How can I run doob html template?",
                            description: "You can run doob easily. First You'll need to have node and npm on your machine. So Please open your command prompt then check your node -v and npm -v Version. Goes To Your your command prompt: then First: npm install At Last: npm run start. By the following way you can be run your project easily."
                        }],
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)])])]), e("Separator")], 1);
            },
            Ri = [],
            ki = function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    class: `rn-accordion-style ${t.accordionStyleClass} accordion`
                }, [e("div", {
                    staticClass: "accordion",
                    attrs: {
                        id: t.id
                    }
                }, t._l(t.accordionContent, function (a, i) {
                    return e("div", {
                        staticClass: "accordion-item card"
                    }, [e("h2", {
                        staticClass: "accordion-header card-header",
                        attrs: {
                            id: "heading" + a.id
                        }
                    }, [e("button", {
                        staticClass: "accordion-button",
                        attrs: {
                            type: "button",
                            "data-bs-toggle": "collapse",
                            "data-bs-target": "#collapse" + a.id,
                            "aria-expanded": i === t.activeCollapse ? "true" : "false",
                            "aria-controls": "collapse" + a.id
                        },
                        on: {
                            click: function (e) {
                                t.activeCollapse = i;
                            }
                        }
                    }, [t._v(" " + t._s(a.title) + " "), e("i", {
                        staticClass: "collapse-icon"
                    })])]), e("div", {
                        staticClass: "accordion-collapse collapse",
                        class: {
                            show: 0 === i
                        },
                        attrs: {
                            id: "collapse" + a.id,
                            "aria-labelledby": "heading" + a.id,
                            "data-bs-parent": "#" + t.id
                        }
                    }, [e("div", {
                        staticClass: "accordion-body card-body"
                    }, [t._v(" " + t._s(a.description) + " ")])])]);
                }), 0)]);
            },
            Bi = [],
            Si = {
                name: "Accordion",
                props: {
                    id: {
                        type: String,
                        default: "accordionExample"
                    },
                    accordionStyleClass: {
                        type: String
                    },
                    accordionContent: {
                        type: Array,
                        default: function () {
                            return [{
                                id: "One",
                                title: "What is Doob ? How does it work?",
                                description: "You can run doob easily. First You'll need to have node and npm on your machine. So Please open your command prompt then check your node -v and npm -v Version. Goes To Your your command prompt: then First: npm install At Last: npm run start. By the following way you can be run your project easily."
                            }, {
                                id: "Two",
                                title: "How can I get the customer support?",
                                description: "After purchasing the product need you any support you can be share with us with sending mail to rainbowit10@gmail.com."
                            }, {
                                id: "Three",
                                title: "Can I get update regularly and For how long do I get updates?",
                                description: "Yes, We will get update the Trydo. And you can get it any time. Next time we will comes with more feature. You can be get update for unlimited times. Our dedicated team works for update."
                            }, {
                                id: "Four",
                                title: "How can I run doob html template?",
                                description: "You can run doob easily. First You'll need to have node and npm on your machine. So Please open your command prompt then check your node -v and npm -v Version. Goes To Your your command prompt: then First: npm install At Last: npm run start. By the following way you can be run your project easily."
                            }];
                        }
                    }
                },
                data() {
                    return {
                        activeCollapse: 0
                    };
                }
            },
            _i = Si,
            Di = Object(l.a)(_i, ki, Bi, false, null, null, null),
            Ti = Di.exports,
            Ii = {
                name: "AccordionPage",
                components: {
                    Accordion: Ti,
                    Layout: Zt,
                    Breadcrumb: Aa,
                    SectionTitle: de,
                    Separator: se
                }
            },
            Pi = Ii,
            Li = Object(l.a)(Pi, Ki, Ri, false, null, null, null),
            Qi = Li.exports,
            ji = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("div", {
                    staticClass: "rwt-social-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Our Social Share",
                        title: "You can Customize All.",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("div", {
                    staticClass: "row mt--30"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("ul", {
                    staticClass: "social-icon social-default",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                }, [e("li", [e("a", {
                    attrs: {
                        href: "https://www.facebook.com/",
                        target: "_blank"
                    }
                }, [e("Icon", {
                    staticClass: "size-18",
                    attrs: {
                        name: "facebook"
                    }
                })], 1)]), e("li", [e("a", {
                    attrs: {
                        href: "https://www.twitter.com",
                        target: "_blank"
                    }
                }, [e("Icon", {
                    staticClass: "size-18",
                    attrs: {
                        name: "twitter"
                    }
                })], 1)]), e("li", [e("a", {
                    attrs: {
                        href: "https://www.instagram.com",
                        target: "_blank"
                    }
                }, [e("Icon", {
                    staticClass: "size-18",
                    attrs: {
                        name: "instagram"
                    }
                })], 1)]), e("li", [e("a", {
                    attrs: {
                        href: "https://www.linkedin.com",
                        target: "_blank"
                    }
                }, [e("Icon", {
                    staticClass: "size-18",
                    attrs: {
                        name: "linkedin"
                    }
                })], 1)])])])])])]), e("Separator"), e("div", {
                    staticClass: "rwt-social-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Transparent With Border",
                        title: "Social Share.",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("div", {
                    staticClass: "row mt--30"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("ul", {
                    staticClass: "social-icon social-default transparent-with-border",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                }, [e("li", [e("a", {
                    attrs: {
                        href: "https://www.facebook.com",
                        target: "_blank"
                    }
                }, [e("Icon", {
                    staticClass: "size-18",
                    attrs: {
                        name: "facebook"
                    }
                })], 1)]), e("li", [e("a", {
                    attrs: {
                        href: "https://www.twitter.com",
                        target: "_blank"
                    }
                }, [e("Icon", {
                    staticClass: "size-18",
                    attrs: {
                        name: "twitter"
                    }
                })], 1)]), e("li", [e("a", {
                    attrs: {
                        href: "https://www.instagram.com",
                        target: "_blank"
                    }
                }, [e("Icon", {
                    staticClass: "size-18",
                    attrs: {
                        name: "instagram"
                    }
                })], 1)]), e("li", [e("a", {
                    attrs: {
                        href: "https://www.linkedin.com",
                        target: "_blank"
                    }
                }, [e("Icon", {
                    staticClass: "size-18",
                    attrs: {
                        name: "linkedin"
                    }
                })], 1)])])])])])]), e("Separator"), e("div", {
                    staticClass: "rwt-social-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Gradient Style",
                        title: "Social Share.",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("div", {
                    staticClass: "row mt--30"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("ul", {
                    staticClass: "social-icon social-default with-gradient",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                }, [e("li", [e("a", {
                    attrs: {
                        href: "https://www.facebook.com",
                        target: "_blank"
                    }
                }, [e("Icon", {
                    staticClass: "size-18",
                    attrs: {
                        name: "facebook"
                    }
                })], 1)]), e("li", [e("a", {
                    attrs: {
                        href: "https://www.twitter.com",
                        target: "_blank"
                    }
                }, [e("Icon", {
                    staticClass: "size-18",
                    attrs: {
                        name: "twitter"
                    }
                })], 1)]), e("li", [e("a", {
                    attrs: {
                        href: "https://www.instagram.com",
                        target: "_blank"
                    }
                }, [e("Icon", {
                    staticClass: "size-18",
                    attrs: {
                        name: "instagram"
                    }
                })], 1)]), e("li", [e("a", {
                    attrs: {
                        href: "https://www.linkedin.com",
                        target: "_blank"
                    }
                }, [e("Icon", {
                    staticClass: "size-18",
                    attrs: {
                        name: "linkedin"
                    }
                })], 1)])])])])])]), e("Separator"), e("div", {
                    staticClass: "rwt-social-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Bg Primary Color",
                        title: "Social Share.",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("div", {
                    staticClass: "row mt--30"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("ul", {
                    staticClass: "social-icon social-default with-bg-primary",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                }, [e("li", [e("a", {
                    attrs: {
                        href: "https://www.facebook.com",
                        target: "_blank"
                    }
                }, [e("Icon", {
                    staticClass: "size-18",
                    attrs: {
                        name: "facebook"
                    }
                })], 1)]), e("li", [e("a", {
                    attrs: {
                        href: "https://www.twitter.com",
                        target: "_blank"
                    }
                }, [e("Icon", {
                    staticClass: "size-18",
                    attrs: {
                        name: "twitter"
                    }
                })], 1)]), e("li", [e("a", {
                    attrs: {
                        href: "https://www.instagram.com",
                        target: "_blank"
                    }
                }, [e("Icon", {
                    staticClass: "size-18",
                    attrs: {
                        name: "instagram"
                    }
                })], 1)]), e("li", [e("a", {
                    attrs: {
                        href: "https://www.linkedin.com",
                        target: "_blank"
                    }
                }, [e("Icon", {
                    staticClass: "size-18",
                    attrs: {
                        name: "linkedin"
                    }
                })], 1)])])])])])]), e("Separator"), e("div", {
                    staticClass: "rwt-social-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Bg Primary Color",
                        title: "Social Share.",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("div", {
                    staticClass: "row mt--30"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("ul", {
                    staticClass: "social-icon social-default icon-naked",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                }, [e("li", [e("a", {
                    attrs: {
                        href: "https://www.facebook.com",
                        target: "_blank"
                    }
                }, [e("Icon", {
                    staticClass: "size-18",
                    attrs: {
                        name: "facebook"
                    }
                })], 1)]), e("li", [e("a", {
                    attrs: {
                        href: "https://www.twitter.com",
                        target: "_blank"
                    }
                }, [e("Icon", {
                    staticClass: "size-18",
                    attrs: {
                        name: "twitter"
                    }
                })], 1)]), e("li", [e("a", {
                    attrs: {
                        href: "https://www.instagram.com",
                        target: "_blank"
                    }
                }, [e("Icon", {
                    staticClass: "size-18",
                    attrs: {
                        name: "instagram"
                    }
                })], 1)]), e("li", [e("a", {
                    attrs: {
                        href: "https://www.linkedin.com",
                        target: "_blank"
                    }
                }, [e("Icon", {
                    staticClass: "size-18",
                    attrs: {
                        name: "linkedin"
                    }
                })], 1)])])])])])])], 1);
            },
            Wi = [],
            Mi = {
                name: "SocialSharePage",
                components: {
                    Icon: x,
                    Layout: Zt,
                    Breadcrumb: Aa,
                    Separator: se,
                    SectionTitle: de
                }
            },
            Oi = Mi,
            Ei = Object(l.a)(Oi, ji, Wi, false, null, null, null),
            Vi = Ei.exports,
            Ni = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("Breadcrumb", {
                    attrs: {
                        title: "Blog Grid Style",
                        "current-url": "Blog Grid"
                    }
                }), e("div", {
                    staticClass: "rn-blog-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row mt_dec--30"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("div", {
                    staticClass: "row row--15"
                }, t._l(t.posts, function (t, a) {
                    return e("div", {
                        key: a,
                        staticClass: "col-lg-4 col-md-6 col-12 mt--30",
                        attrs: {
                            "data-aos": "slide-up",
                            "data-aos-duration": "800",
                            "data-aos-delay": 100 + a
                        }
                    }, [e("BlogPost", {
                        attrs: {
                            blog: t
                        }
                    })], 1);
                }), 0)]), e("div", {
                    staticClass: "col-lg-12 text-center"
                }, [e("div", {
                    staticClass: "rwt-load-more text-center mt--60"
                }, [e("a", {
                    staticClass: "btn-default",
                    attrs: {
                        href: "#"
                    }
                }, [t._v(" View More Post "), e("Icon", {
                    attrs: {
                        name: "loader"
                    }
                })], 1)])])])])])], 1);
            },
            Hi = [],
            qi = function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "rn-card box-card-style-default",
                    class: {
                        "card-list-view": "list" === t.blogPostStyle
                    }
                }, [e("div", {
                    staticClass: "inner"
                }, [e("div", {
                    staticClass: "thumbnail"
                }, [e("router-link", {
                    staticClass: "image",
                    attrs: {
                        to: "/blog-details/" + t.blog.id
                    }
                }, [e("img", {
                    staticClass: "w-100",
                    attrs: {
                        src: t.blog.img,
                        alt: t.blog.title
                    }
                })])], 1), e("div", {
                    staticClass: "content"
                }, ["card" === t.blogPostStyle ? e("ul", {
                    staticClass: "rn-meta-list"
                }, [e("li", [e("router-link", {
                    attrs: {
                        to: ""
                    }
                }, [t._v(" " + t._s(t.blog.author) + " ")])], 1), e("li", {
                    staticClass: "separator"
                }, [t._v("/")]), e("li", [t._v(t._s(t.blog.publishedAt))])]) : t._e(), e("h4", {
                    staticClass: "title"
                }, [e("router-link", {
                    attrs: {
                        to: "/blog-details/" + t.blog.id
                    }
                }, [t._v(" " + t._s(t.blog.title) + " ")])], 1), "list" === t.blogPostStyle ? e("ul", {
                    staticClass: "rn-meta-list"
                }, [e("li", [e("router-link", {
                    attrs: {
                        to: ""
                    }
                }, [t._v(" " + t._s(t.blog.author) + " ")])], 1), e("li", {
                    staticClass: "separator"
                }, [t._v("/")]), e("li", [t._v(t._s(t.blog.publishedAt))])]) : t._e(), "list" === t.blogPostStyle ? e("p", {
                    staticClass: "descriptiion"
                }, [t._v(" " + t._s(t.blog.excerpt) + " ")]) : t._e()])])]);
            },
            zi = [],
            Yi = {
                name: "BlogPost",
                props: {
                    blog: {},
                    blogPostStyle: {
                        type: String,
                        default: "card"
                    }
                }
            },
            Ji = Yi,
            Gi = Object(l.a)(Ji, qi, zi, false, null, null, null),
            Xi = Gi.exports,
            Zi = (a("14d9"), {
                data() {
                    return {
                        posts: [{
                            id: "1",
                            img: a("435a"),
                            author: "Irin Pervin",
                            authorId: "1",
                            view: "70 views",
                            publishedAt: "10 Dec 2022",
                            title: "Best Corporate Tips You Will Read This Year.",
                            excerpt: "We have always known the power of digital we've.",
                            body: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>\n                           <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n                           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.</p>\n                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>\n                           <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>\n                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>",
                            categories: ["Development", "Company", "Marketing"],
                            tags: ["Corporate", "Agency", "Creative", "Design"]
                        }, {
                            id: "2",
                            img: a("339d"),
                            author: "Fatima Asrafy",
                            authorId: "2",
                            view: "70 views",
                            publishedAt: "30 Nov 2022",
                            title: "Should Fixing Corporate Take 100 Steps.",
                            excerpt: "We have always known the power of digital we've.",
                            body: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>\n                           <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n                           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.</p>\n                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>\n                           <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>\n                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>",
                            categories: ["UX Design", "Company"],
                            tags: ["Minimal", "Company", "Development", "Design"]
                        }, {
                            id: "3",
                            img: a("d2ea"),
                            author: "John Dou",
                            authorId: "3",
                            view: "70 views",
                            publishedAt: "12 Oct 2022",
                            title: "The Next 100 Things To Immediately Do About.",
                            excerpt: "We have always known the power of digital we've.",
                            body: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>\n                           <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n                           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.</p>\n                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>\n                           <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>\n                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>",
                            categories: ["Development", "UX Design", "Business", "Company"],
                            tags: ["App Landing", "Startup", "Development", "Design"]
                        }, {
                            id: "4",
                            img: a("ab1a"),
                            author: "Jannin",
                            authorId: "4",
                            view: "70 views",
                            publishedAt: "25 Aug 2022",
                            title: "Top 5 Lessons About Corporate To Learn Before.",
                            excerpt: "We have always known the power of digital we've.",
                            body: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>\n                           <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n                           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.</p>\n                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>\n                           <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>\n                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>",
                            categories: ["Marketing", "UX Design", "Business"],
                            tags: ["App", "Business", "Software", "Design"]
                        }, {
                            id: "5",
                            img: a("5afc"),
                            author: "Jannin",
                            authorId: "5",
                            view: "70 views",
                            publishedAt: "23 Jul 2022",
                            title: "Master The Art Of Corporate With These 5 Tips.",
                            excerpt: "We have always known the power of digital we've.",
                            body: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>\n                           <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n                           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.</p>\n                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>\n                           <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>\n                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>",
                            categories: ["App Development", "UX Design", "Application", "Art"],
                            tags: ["Company", "Corporate", "Development", "Design"]
                        }, {
                            id: "6",
                            img: a("702a"),
                            author: "John Dou",
                            authorId: "6",
                            view: "70 views",
                            publishedAt: "30 Jun 2022",
                            title: "Corporate Is Your Worst Enemy. 5 Ways To Defeat It.",
                            excerpt: "We have always known the power of digital we've.",
                            body: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>\n                           <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n                           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.</p>\n                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>\n                           <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>\n                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>",
                            categories: ["Application", "UX Design", "Art"],
                            tags: ["App", "Landing", "Design", "Software"]
                        }, {
                            id: "7",
                            img: a("339d"),
                            author: "Fatima Asrafy",
                            authorId: "2",
                            view: "70 views",
                            publishedAt: "30 Nov 2022",
                            title: "Should Fixing Corporate Take 100 Steps.",
                            excerpt: "We have always known the power of digital we've.",
                            body: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>\n                           <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n                           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.</p>\n                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>\n                           <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>\n                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>",
                            categories: ["UX Design", "Company"],
                            tags: ["Minimal", "Company", "Development", "Design"]
                        }, {
                            id: "8",
                            img: a("d2ea"),
                            author: "John Dou",
                            authorId: "3",
                            view: "70 views",
                            publishedAt: "12 Oct 2022",
                            title: "The Next 100 Things To Immediately Do About.",
                            excerpt: "We have always known the power of digital we've.",
                            body: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>\n                           <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n                           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.</p>\n                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>\n                           <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>\n                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>",
                            categories: ["Development", "UX Design", "Business", "Company"],
                            tags: ["App Landing", "Startup", "Development", "Design"]
                        }],
                        categories: "",
                        tags: "",
                        AppFunctions: I
                    };
                },
                methods: {
                    blogCategories() {
                        let t = this.posts.map(t => t.categories),
                            e = I.flatDeep(t),
                            a = [];
                        e.forEach(t => {
                            const e = {
                                    title: t.trim(),
                                    slug: I.slugify(t),
                                    count: 1
                                },
                                i = I.containsObject(e, a);
                            if (-1 !== i) {
                                const e = a[i].count;
                                a[i] = {
                                    title: t.trim(),
                                    slug: I.slugify(t),
                                    count: e + 1
                                };
                            } else a.push(e);
                        }), this.categories = a;
                    },
                    blogTags() {
                        let t = this.posts.map(t => t.tags),
                            e = I.flatDeep(t),
                            a = [];
                        e.forEach(t => {
                            const e = {
                                    title: t.trim(),
                                    slug: I.slugify(t)
                                },
                                i = I.containsObject(e, a); -
                            1 !== i ? a[i] = {
                                title: t.trim(),
                                slug: I.slugify(t)
                            } : a.push(e);
                        }), this.tags = a;
                    }
                },
                created() {
                    this.blogCategories(), this.blogTags();
                }
            }),
            $i = {
                name: "BlogGridPage",
                components: {
                    Icon: x,
                    BlogPost: Xi,
                    Layout: Zt,
                    Breadcrumb: Aa
                },
                mixins: [Zi]
            },
            ts = $i,
            es = Object(l.a)(ts, Ni, Hi, false, null, null, null),
            as = es.exports,
            is = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("Breadcrumb", {
                    attrs: {
                        title: "Blog Grid Sidebar",
                        "current-url": "Blog Grid Sidebar"
                    }
                }), e("div", {
                    staticClass: "rn-blog-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row row--30"
                }, [e("div", {
                    staticClass: "col-lg-8"
                }, [e("div", {
                    staticClass: "row mt_dec--30"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("div", {
                    staticClass: "row row--15"
                }, t._l(t.posts, function (t, a) {
                    return e("div", {
                        key: a,
                        staticClass: "col-lg-6 col-md-6 col-12 mt--30",
                        attrs: {
                            "data-aos": "slide-up",
                            "data-aos-duration": "800",
                            "data-aos-delay": 100 + a
                        }
                    }, [e("BlogPost", {
                        attrs: {
                            blog: t
                        }
                    })], 1);
                }), 0)]), e("div", {
                    staticClass: "col-lg-12 text-center"
                }, [e("div", {
                    staticClass: "rwt-load-more text-center mt--60"
                }, [e("a", {
                    staticClass: "btn-default",
                    attrs: {
                        href: "#"
                    }
                }, [t._v(" View More Post "), e("Icon", {
                    attrs: {
                        name: "loader"
                    }
                })], 1)])])])]), e("div", {
                    staticClass: "col-lg-4 mt_md--40 mt_sm--40"
                }, [e("BlogSidebar")], 1)])])])], 1);
            },
            ss = [],
            os = function () {
                var t = this,
                    e = t._self._c;
                return e("aside", {
                    staticClass: "rwt-sidebar"
                }, [e("div", {
                    staticClass: "rbt-single-widget widget_search mt--40"
                }, [e("div", {
                    staticClass: "inner"
                }, [e("form", {
                    staticClass: "blog-search",
                    attrs: {
                        action: "#"
                    }
                }, [e("input", {
                    attrs: {
                        type: "text",
                        placeholder: "Search ..."
                    }
                }), e("button", {
                    staticClass: "search-button"
                }, [e("Icon", {
                    attrs: {
                        name: "search",
                        size: "20"
                    }
                })], 1)])])]), e("div", {
                    staticClass: "rbt-single-widget widget_categories mt--40"
                }, [e("h3", {
                    staticClass: "title"
                }, [t._v("Categories")]), e("div", {
                    staticClass: "inner"
                }, [e("BlogCategories")], 1)]), e("div", {
                    staticClass: "rbt-single-widget widget_recent_entries mt--40"
                }, [e("h3", {
                    staticClass: "title"
                }, [t._v("Post")]), e("div", {
                    staticClass: "inner"
                }, [e("BlogSidebarPost")], 1)]), e("div", {
                    staticClass: "rbt-single-widget widget_tag_cloud mt--40"
                }, [e("h3", {
                    staticClass: "title"
                }, [t._v("Tags")]), e("div", {
                    staticClass: "inner mt--20"
                }, [e("BlogTags")], 1)])]);
            },
            ns = [],
            rs = function () {
                var t = this,
                    e = t._self._c;
                return e("ul", {
                    staticClass: "category-list"
                }, t._l(t.categories, function (a, i) {
                    return e("li", {
                        key: `${a.slug}-${i}`
                    }, [e("router-link", {
                        attrs: {
                            to: "/category/" + a.slug
                        }
                    }, [e("span", {
                        staticClass: "left-content"
                    }, [t._v(t._s(a.title))]), e("span", {
                        staticClass: "count-text"
                    }, [t._v(t._s(a.count))])])], 1);
                }), 0);
            },
            ls = [],
            cs = {
                name: "BlogCategories",
                mixins: [Zi]
            },
            ds = cs,
            ps = Object(l.a)(ds, rs, ls, false, null, null, null),
            us = ps.exports,
            ms = function () {
                var t = this,
                    e = t._self._c;
                return e("ul", t._l(t.posts, function (a, i) {
                    return i < 4 ? e("li", {
                        key: i
                    }, [e("router-link", {
                        staticClass: "d-block",
                        attrs: {
                            to: "#"
                        }
                    }, [t._v(t._s(a.title))]), e("span", {
                        staticClass: "cate"
                    }, [t._v(t._s(a.categories[0]))])], 1) : t._e();
                }), 0);
            },
            gs = [],
            bs = {
                name: "BlogSidebarPost",
                mixins: [Zi]
            },
            vs = bs,
            hs = Object(l.a)(vs, ms, gs, false, null, null, null),
            fs = hs.exports,
            As = function () {
                var t = this,
                    e = t._self._c;
                return e("ul", t._l(t.posts, function (a, i) {
                    return e("li", {
                        key: i
                    }, [e("span", {
                        staticClass: "cate"
                    }, [t._v(t._s(a.publishedAt))])]);
                }), 0);
            },
            ys = [],
            Cs = {
                name: "BlogSidebarArchive",
                mixins: [Zi]
            },
            ws = Cs,
            Fs = Object(l.a)(ws, As, ys, false, null, null, null),
            Us = Fs.exports,
            xs = function () {
                var t = this,
                    e = t._self._c;
                return e("ul", {
                    staticClass: "tagcloud"
                }, t._l(t.tags, function (a, i) {
                    return e("router-link", {
                        key: `${a.slug}-${i}`,
                        attrs: {
                            to: "#"
                        }
                    }, [t._v(" " + t._s(a.title) + " ")]);
                }), 1);
            },
            Ks = [],
            Rs = {
                name: "BlogTags",
                mixins: [Zi]
            },
            ks = Rs,
            Bs = Object(l.a)(ks, xs, Ks, false, null, null, null),
            Ss = Bs.exports,
            _s = {
                name: "BlogSidebar",
                components: {
                    BlogTags: Ss,
                    BlogSidebarArchive: Us,
                    BlogSidebarPost: fs,
                    BlogCategories: us,
                    Icon: x
                }
            },
            Ds = _s,
            Ts = Object(l.a)(Ds, os, ns, false, null, null, null),
            Is = Ts.exports,
            Ps = {
                name: "BlogGridSidebarPage",
                components: {
                    BlogSidebar: Is,
                    Icon: x,
                    BlogPost: Xi,
                    Layout: Zt,
                    Breadcrumb: Aa
                },
                mixins: [Zi],
                data() {
                    return {
                        blogPosts: [{
                            id: "1",
                            img: a("435a"),
                            author: "Irin Pervin",
                            authorId: "1",
                            publishedAt: "10 Dec 2020",
                            title: "Best Corporate Tips You Will Read This Year."
                        }, {
                            id: "2",
                            img: a("339d"),
                            author: "Fatima Asrafy",
                            authorId: "2",
                            publishedAt: "30 Nov 2020",
                            title: "Should Fixing Corporate Take 100 Steps."
                        }, {
                            id: "3",
                            img: a("d2ea"),
                            author: "John Dou",
                            authorId: "3",
                            publishedAt: "12 Oct 2020",
                            title: "The Next 100 Things To Immediately Do About."
                        }, {
                            id: "4",
                            img: a("ab1a"),
                            author: "Jannin",
                            authorId: "4",
                            publishedAt: "25 Aug 2020",
                            title: "Top 5 Lessons About Corporate To Learn Before."
                        }, {
                            id: "5",
                            img: a("5afc"),
                            author: "Jannin",
                            authorId: "5",
                            publishedAt: "23 Jul 2020",
                            title: "Master The Art Of Corporate With These 5 Tips."
                        }, {
                            id: "6",
                            img: a("702a"),
                            author: "John Dou",
                            authorId: "6",
                            publishedAt: "30 Jun 2020",
                            title: "Corporate Is Your Worst Enemy. 5 Ways To Defeat It."
                        }]
                    };
                }
            },
            Ls = Ps,
            Qs = Object(l.a)(Ls, is, ss, false, null, null, null),
            js = Qs.exports,
            Ws = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("Breadcrumb", {
                    attrs: {
                        title: "Blog List Style",
                        "current-url": "Blog List"
                    }
                }), e("div", {
                    staticClass: "rn-blog-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row mt_dec--30"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("div", {
                    staticClass: "row row--15"
                }, t._l(t.posts, function (t, a) {
                    return e("div", {
                        key: a,
                        staticClass: "col-lg-6 mt--30",
                        attrs: {
                            "data-aos": "slide-up",
                            "data-aos-duration": "800",
                            "data-aos-delay": 100 + a
                        }
                    }, [e("BlogPost", {
                        attrs: {
                            blog: t,
                            "blog-post-style": "list"
                        }
                    })], 1);
                }), 0)]), e("div", {
                    staticClass: "col-lg-12 text-center"
                }, [e("div", {
                    staticClass: "rwt-load-more text-center mt--60"
                }, [e("a", {
                    staticClass: "btn-default",
                    attrs: {
                        href: "#"
                    }
                }, [t._v(" View More Post "), e("Icon", {
                    attrs: {
                        name: "loader"
                    }
                })], 1)])])])])])], 1);
            },
            Ms = [],
            Os = {
                name: "BlogListPage",
                components: {
                    Icon: x,
                    BlogPost: Xi,
                    Layout: Zt,
                    Breadcrumb: Aa
                },
                mixins: [Zi]
            },
            Es = Os,
            Vs = Object(l.a)(Es, Ws, Ms, false, null, null, null),
            Ns = Vs.exports,
            Hs = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("Breadcrumb", {
                    attrs: {
                        title: "Blog List View Sidebar",
                        "current-url": "Blog List Sidebar"
                    }
                }), e("div", {
                    staticClass: "rn-blog-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row row--30"
                }, [e("div", {
                    staticClass: "col-lg-8"
                }, [e("div", {
                    staticClass: "row mt_dec--30"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("div", {
                    staticClass: "row row--15"
                }, t._l(t.posts, function (t, a) {
                    return e("div", {
                        key: a,
                        staticClass: "col-lg-12 mt--30",
                        attrs: {
                            "data-aos": "slide-up",
                            "data-aos-duration": "800",
                            "data-aos-delay": 100 + a
                        }
                    }, [e("BlogPost", {
                        attrs: {
                            blog: t,
                            "blog-post-style": "list"
                        }
                    })], 1);
                }), 0)]), e("div", {
                    staticClass: "col-lg-12 text-center"
                }, [e("div", {
                    staticClass: "rwt-load-more text-center mt--60"
                }, [e("a", {
                    staticClass: "btn-default",
                    attrs: {
                        href: "#"
                    }
                }, [t._v(" View More Post "), e("Icon", {
                    attrs: {
                        name: "loader"
                    }
                })], 1)])])])]), e("div", {
                    staticClass: "col-lg-4 mt_md--40 mt_sm--40"
                }, [e("BlogSidebar")], 1)])])])], 1);
            },
            qs = [],
            zs = {
                name: "BlogListSidebarPage",
                components: {
                    BlogSidebar: Is,
                    Icon: x,
                    BlogPost: Xi,
                    Layout: Zt,
                    Breadcrumb: Aa
                },
                mixins: [Zi]
            },
            Ys = zs,
            Js = Object(l.a)(Ys, Hs, qs, false, null, null, null),
            Gs = Js.exports,
            Xs = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("div", {
                    staticClass: "rn-blog-details-area"
                }, [e("div", {
                    staticClass: "post-page-banner rn-section-gapTop"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-8 offset-lg-2"
                }, [e("div", {
                    staticClass: "content text-center"
                }, [e("div", {
                    staticClass: "page-title"
                }, [e("h1", {
                    staticClass: "theme-gradient",
                    domProps: {
                        innerHTML: t._s(t.post.title)
                    }
                })]), e("ul", {
                    staticClass: "rn-meta-list"
                }, [e("li", [e("Icon", {
                    staticClass: "size-20",
                    attrs: {
                        name: "user"
                    }
                }), t._v(" "), e("router-link", {
                    attrs: {
                        to: "#"
                    }
                }, [t._v("Irin Pervin")])], 1), e("li", [e("Icon", {
                    staticClass: "size-20",
                    attrs: {
                        name: "calendar"
                    }
                }), t._v(" " + t._s(t.post.publishedAt) + " ")], 1)]), e("div", {
                    staticClass: "thumbnail alignwide mt--60"
                }, [e("img", {
                    staticClass: "w-100 radius",
                    attrs: {
                        src: t.post.img,
                        alt: t.post.title
                    }
                })])])])])])]), e("div", {
                    staticClass: "blog-details-content pt--60 rn-section-gapBottom"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-8 offset-lg-2"
                }, [e("div", {
                    staticClass: "content"
                }, [e("p", {
                    domProps: {
                        innerHTML: t._s(t.post.body)
                    }
                }), e("div", {
                    staticClass: "category-meta"
                }, [e("span", {
                    staticClass: "text"
                }, [t._v("Tags:")]), e("div", {
                    staticClass: "tagcloud"
                }, [e("a", {
                    attrs: {
                        href: "#"
                    }
                }, [t._v("Corporate")]), e("a", {
                    attrs: {
                        href: "#"
                    }
                }, [t._v("Agency")]), e("a", {
                    attrs: {
                        href: "#"
                    }
                }, [t._v("Creative")]), e("a", {
                    attrs: {
                        href: "#"
                    }
                }, [t._v("Design")]), e("a", {
                    attrs: {
                        href: "#"
                    }
                }, [t._v("Minimal")]), e("a", {
                    attrs: {
                        href: "#"
                    }
                }, [t._v("Company")]), e("a", {
                    attrs: {
                        href: "#"
                    }
                }, [t._v("Development")]), e("a", {
                    attrs: {
                        href: "#"
                    }
                }, [t._v("App Landing")]), e("a", {
                    attrs: {
                        href: "#"
                    }
                }, [t._v("Startup")]), e("a", {
                    attrs: {
                        href: "#"
                    }
                }, [t._v("App")]), e("a", {
                    attrs: {
                        href: "#"
                    }
                }, [t._v("Business")]), e("a", {
                    attrs: {
                        href: "#"
                    }
                }, [t._v("Software")]), e("a", {
                    attrs: {
                        href: "#"
                    }
                }, [t._v("Landing")]), e("a", {
                    attrs: {
                        href: "#"
                    }
                }, [t._v("Art")])])]), e("div", {
                    staticClass: "rn-comment-form pt--60"
                }, [e("div", {
                    staticClass: "inner"
                }, [e("div", {
                    staticClass: "section-title"
                }, [e("span", {
                    staticClass: "subtitle"
                }, [t._v("Have a Comment?")]), e("h2", {
                    staticClass: "title"
                }, [t._v("Leave a Reply")])]), e("form", {
                    staticClass: "mt--40",
                    attrs: {
                        action: "#"
                    }
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-6 col-md-12 col-12"
                }, [e("div", {
                    staticClass: "rnform-group"
                }, [e("input", {
                    attrs: {
                        type: "text",
                        placeholder: "Name"
                    }
                })]), e("div", {
                    staticClass: "rnform-group"
                }, [e("input", {
                    attrs: {
                        type: "email",
                        placeholder: "Email"
                    }
                })]), e("div", {
                    staticClass: "rnform-group"
                }, [e("input", {
                    attrs: {
                        type: "text",
                        placeholder: "Website"
                    }
                })])]), e("div", {
                    staticClass: "col-lg-6 col-md-12 col-12"
                }, [e("div", {
                    staticClass: "rnform-group"
                }, [e("textarea", {
                    attrs: {
                        placeholder: "Comment"
                    }
                })])]), e("div", {
                    staticClass: "col-lg-12"
                }, [e("div", {
                    staticClass: "blog-btn"
                }, [e("a", {
                    staticClass: "btn-default",
                    attrs: {
                        href: "#"
                    }
                }, [e("span", [t._v("SEND MESSAGE")])])])])])])])])])])])])])])]);
            },
            Zs = [],
            $s = {
                name: "BlogDetailsPage",
                components: {
                    Icon: x,
                    Layout: Zt,
                    Breadcrumb: Aa
                },
                mixins: [Zi],
                data() {
                    return {
                        id: this.$route.params.id,
                        post: {}
                    };
                },
                methods: {
                    getPost(t) {
                        this.post = this.posts.find(e => e.id == t);
                    }
                },
                mounted() {
                    this.getPost(this.id);
                }
            },
            to = $s,
            eo = Object(l.a)(to, Xs, Zs, false, null, null, null),
            ao = eo.exports,
            io = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("Breadcrumb", {
                    attrs: {
                        title: t.category,
                        "current-url": "Blog List"
                    }
                }), e("div", {
                    staticClass: "rn-blog-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row mt_dec--30"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("div", {
                    staticClass: "row row--15"
                }, t._l(t.categoryPosts, function (t, a) {
                    return e("div", {
                        key: a,
                        staticClass: "col-lg-4 col-md-6 col-12 mt--30",
                        attrs: {
                            "data-aos": "slide-up",
                            "data-aos-duration": "800",
                            "data-aos-delay": 100 + a
                        }
                    }, [e("BlogPost", {
                        attrs: {
                            blog: t
                        }
                    })], 1);
                }), 0)])])])])], 1);
            },
            so = [],
            oo = {
                name: "BlogCategoryPosts",
                components: {
                    Icon: x,
                    BlogPost: Xi,
                    Breadcrumb: Aa,
                    Layout: Zt
                },
                mixins: [Zi],
                data() {
                    return {
                        category: this.$route.params.slug,
                        categoryPosts: [],
                        AppFunctions: I
                    };
                },
                methods: {
                    getCategoryPosts() {
                        this.categoryPosts = this.posts.map(t => ({
                            ...t,
                            categories: t.categories.filter(t => I.slugify(t) === this.category)
                        })).filter(t => t.categories.length > 0);
                    }
                },
                mounted() {
                    this.getCategoryPosts();
                }
            },
            no = oo,
            ro = Object(l.a)(no, io, so, false, null, null, null),
            lo = ro.exports,
            co = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("div", {
                    staticClass: "rwt-team-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Our Experts",
                        title: "Our Expert Team",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("div", {
                    staticClass: "row row--15"
                }, t._l(t.teamData, function (t, a) {
                    return e("div", {
                        key: a,
                        staticClass: "col-lg-4 col-md-6 col-12 mt--30"
                    }, [e("Team", {
                        attrs: {
                            "team-member": t
                        }
                    })], 1);
                }), 0)])]), e("Separator"), e("div", {
                    staticClass: "rwt-team-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Our Experts",
                        title: "Team Style Two",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("div", {
                    staticClass: "row row--15"
                }, t._l(t.teamData, function (t, a) {
                    return e("div", {
                        key: a,
                        staticClass: "col-lg-4 col-md-6 col-12 mt--30"
                    }, [e("Team", {
                        attrs: {
                            "team-member": t,
                            "team-style": 2
                        }
                    })], 1);
                }), 0)])]), e("Separator"), e("div", {
                    staticClass: "rwt-team-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mb--15"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Our Experts",
                        title: "Team Style Three",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("div", {
                    staticClass: "row row--15"
                }, t._l(t.teamData3, function (t, a) {
                    return e("div", {
                        key: a,
                        staticClass: "col-lg-3 col-md-6 col-12 mt--30"
                    }, [e("Team", {
                        attrs: {
                            "team-member": t,
                            "team-style": 3
                        }
                    })], 1);
                }), 0)])]), e("Separator"), e("div", {
                    staticClass: "rwt-team-area rn-section-gap"
                }, [e("div", {
                    staticClass: "wrapper plr--65 plr_sm--15"
                }, [e("div", {
                    staticClass: "row mb--20"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Our Experts",
                        title: "Team Style Four",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("div", {
                    staticClass: "row row--15"
                }, t._l(t.teamData4, function (t, a) {
                    return e("div", {
                        key: a,
                        staticClass: "col-lg-6 col-xl-3 col-md-6 col-12 mt--30"
                    }, [e("Team", {
                        attrs: {
                            "team-member": t,
                            "team-style": 4
                        }
                    })], 1);
                }), 0)])])], 1);
            },
            po = [],
            uo = {
                name: "TeamPage",
                components: {
                    Separator: se,
                    Team: ra,
                    SectionTitle: de,
                    Layout: Zt,
                    Breadcrumb: Aa
                },
                data() {
                    return {
                        teamData: [{
                            image: "team-01",
                            name: "Sr Janen Sara",
                            designation: "Sr Product Designer",
                            location: "CO Miego, AD, USA",
                            description: "Yes, I am a product designer. I have a passion for product design.",
                            socialNetwork: [{
                                icon: "facebook",
                                url: "#"
                            }, {
                                icon: "twitter",
                                url: "#"
                            }, {
                                icon: "instagram",
                                url: "#"
                            }]
                        }, {
                            image: "team-02",
                            name: "Afsana Nila",
                            designation: "App Developer",
                            location: "Bangladesh",
                            description: "Yes, I am a product designer. I have a passion for product design.",
                            socialNetwork: [{
                                icon: "facebook",
                                url: "#"
                            }, {
                                icon: "twitter",
                                url: "#"
                            }, {
                                icon: "instagram",
                                url: "#"
                            }]
                        }, {
                            image: "team-03",
                            name: "Afanan Sifa",
                            designation: "Accounts Manager",
                            location: "Poland",
                            description: "Yes, I am a product designer. I have a passion for product design.",
                            socialNetwork: [{
                                icon: "facebook",
                                url: "#"
                            }, {
                                icon: "twitter",
                                url: "#"
                            }, {
                                icon: "instagram",
                                url: "#"
                            }]
                        }],
                        teamData3: [{
                            image: "team-04",
                            name: "Sr Janen Sara",
                            designation: "Sr Product Designer"
                        }, {
                            image: "team-05",
                            name: "Afsana Nila",
                            designation: "App Developer"
                        }, {
                            image: "team-06",
                            name: "Afanan Sifa",
                            designation: "Accounts Manager"
                        }, {
                            image: "team-07",
                            name: "Afanan Sifa",
                            designation: "Accounts Manager"
                        }],
                        teamData4: [{
                            image: "team-dark-01",
                            name: "Sr Janen Sara",
                            designation: "Sr Product Designer",
                            location: "CO Miego, AD, USA",
                            description: "Yes, I am a product designer. I have a passion for product design."
                        }, {
                            image: "team-dark-02",
                            name: "Corporate Jane",
                            designation: "Manager",
                            location: "Bangladesh",
                            description: "Yes, I am a product designer. I have a passion for product design."
                        }, {
                            image: "team-dark-03",
                            name: "Jara Saraif",
                            designation: "Software Developer",
                            location: "Poland",
                            description: "Yes, I am a product designer. I have a passion for product design."
                        }, {
                            image: "team-dark-04",
                            name: "Afanan Sifa",
                            designation: "Accounts Manager",
                            location: "Poland",
                            description: "Yes, I am a product designer. I have a passion for product design."
                        }]
                    };
                }
            },
            mo = uo,
            go = Object(l.a)(mo, co, po, false, null, null, null),
            bo = go.exports,
            vo = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("div", {
                    staticClass: "rwt-portfolio-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Portfolio Default",
                        title: "You can customize everything!",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("Portfolio", {
                    staticClass: "mt--20",
                    attrs: {
                        "portfolio-data": t.portfolioItems
                    }
                })], 1)])]);
            },
            ho = [],
            fo = function () {
                var t = this,
                    e = t._self._c;
                return e("div", [e("div", {
                    staticClass: "row row--15"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("ul", {
                    staticClass: "nav nav-pills rwt-portfolio-filter filter-button-default liststyle mb--20",
                    attrs: {
                        id: "pills-tab",
                        role: "tablist",
                        "data-aos": "fade-up"
                    }
                }, t._l(t.filters, function (a, i) {
                    return e("li", {
                        key: "tab-button-" + a.id,
                        staticClass: "nav-item list-item",
                        attrs: {
                            role: "presentation"
                        }
                    }, [e("button", {
                        staticClass: "nav-link",
                        class: {
                            active: 0 === i
                        },
                        attrs: {
                            id: `pills-${a.text}-tab`,
                            "data-bs-toggle": "pill",
                            "data-bs-target": "#pills-" + a.text,
                            type: "button",
                            role: "tab",
                            "aria-controls": "pills-" + a.text,
                            "aria-selected": i === t.activeTab ? "true" : "false"
                        },
                        on: {
                            click: function (e) {
                                t.activeTab = i;
                            }
                        }
                    }, [t._v(" " + t._s(a.text) + " ")])]);
                }), 0)])]), e("div", {
                    staticClass: "tab-content",
                    attrs: {
                        id: "pills-tabContent"
                    }
                }, t._l(t.filters, function (a, i) {
                    return e("div", {
                        key: "tab-pane-" + a.id,
                        staticClass: "tab-pane fade",
                        class: {
                            "show active": 0 === i
                        },
                        attrs: {
                            id: "pills-" + a.text,
                            role: "tabpanel",
                            "aria-labelledby": `pills-${a.text}-tab`
                        }
                    }, [e("div", {
                        staticClass: "row row--15"
                    }, [t._l(t.portfolioData, function (i, s) {
                        return "all" === a.text ? [e("div", {
                            class: t.column + " portfolio",
                            attrs: {
                                "data-aos": "fade-up"
                            }
                        }, [e("div", {
                            staticClass: "rwt-card"
                        }, [e("div", {
                            staticClass: "inner"
                        }, [e("div", {
                            staticClass: "thumbnail"
                        }, [e("figure", {
                            staticClass: "card-image"
                        }, [e("router-link", {
                            attrs: {
                                to: "/portfolio-details/" + i.id
                            }
                        }, [e("img", {
                            staticClass: "img-fluid",
                            attrs: {
                                src: i.portfolioImage,
                                alt: "Portfolio-01"
                            }
                        })])], 1), e("router-link", {
                            staticClass: "rwt-overlay",
                            attrs: {
                                to: "/portfolio-details/" + i.id
                            }
                        })], 1), e("div", {
                            staticClass: "content"
                        }, [e("h5", {
                            staticClass: "title mb--10"
                        }, [e("router-link", {
                            attrs: {
                                to: "/portfolio-details/" + i.id
                            }
                        }, [t._v(" " + t._s(i.title) + " ")])], 1), e("span", {
                            staticClass: "subtitle b2 text-capitalize"
                        }, [t._v(t._s(i.category))])])])])])] : t._e();
                    }), t._l(t.portfolioData, function (i, s) {
                        return "all" !== a.text && a.text === i.category ? [e("div", {
                            class: t.column + " portfolio"
                        }, [e("div", {
                            staticClass: "rwt-card"
                        }, [e("div", {
                            staticClass: "inner"
                        }, [e("div", {
                            staticClass: "thumbnail"
                        }, [e("figure", {
                            staticClass: "card-image"
                        }, [e("router-link", {
                            attrs: {
                                to: "/portfolio-details/" + i.id
                            }
                        }, [e("img", {
                            staticClass: "img-fluid",
                            attrs: {
                                src: i.portfolioImage,
                                alt: "Portfolio-01"
                            }
                        })])], 1), e("router-link", {
                            staticClass: "rwt-overlay",
                            attrs: {
                                to: "/portfolio-details/" + i.id
                            }
                        })], 1), e("div", {
                            staticClass: "content"
                        }, [e("h5", {
                            staticClass: "title mb--10"
                        }, [e("router-link", {
                            attrs: {
                                to: "/portfolio-details/" + i.id
                            }
                        }, [t._v(" " + t._s(i.title) + " ")])], 1), e("span", {
                            staticClass: "subtitle b2 text-capitalize"
                        }, [t._v(t._s(i.category))])])])])])] : t._e();
                    })], 2)]);
                }), 0), e("div", {
                    staticClass: "row row--15"
                }, [e("div", {
                    staticClass: "col-lg-12 text-center"
                }, [e("div", {
                    staticClass: "rwt-load-more text-center mt--60",
                    attrs: {
                        "data-aos": "fade-up"
                    }
                }, [e("a", {
                    class: t.buttonClass,
                    attrs: {
                        href: "#"
                    }
                }, [t._v(" Load More "), e("Icon", {
                    attrs: {
                        name: "loader",
                        "icon-class": "icon"
                    }
                })], 1)])])])]);
            },
            Ao = [],
            yo = {
                name: "Portfolio",
                components: {
                    Icon: x
                },
                props: {
                    portfolioData: {},
                    buttonClass: {
                        type: String,
                        default: "btn btn-default btn-large btn-icon"
                    },
                    column: {
                        type: String,
                        default: "col-lg-6 col-md-6 col-sm-12 col-12 mt--30"
                    }
                },
                data() {
                    return {
                        filters: [{
                            id: 1,
                            text: "all"
                        }, {
                            id: 2,
                            text: "design"
                        }, {
                            id: 3,
                            text: "art"
                        }, {
                            id: 4,
                            text: "development"
                        }],
                        activeFilter: "",
                        activeTab: 0
                    };
                }
            },
            Co = yo,
            wo = Object(l.a)(Co, fo, Ao, false, null, null, null),
            Fo = wo.exports,
            Uo = {
                data() {
                    return {
                        portfolioItems: [{
                            id: 1,
                            portfolioImage: a("4eac"),
                            image: a("4eac"),
                            title: "App Development",
                            subtitle: "Branded client",
                            date: "30 May 2022",
                            client: "Rainbow Themes",
                            category: "development",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("4eac"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0edc")
                            }
                        }, {
                            id: 2,
                            portfolioImage: a("605d"),
                            image: a("605d"),
                            title: "Business Development",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2022",
                            client: "Rainbow Themes",
                            category: "design",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("605d"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0edc")
                            }
                        }, {
                            id: 3,
                            portfolioImage: a("0edc"),
                            image: a("0edc"),
                            title: "Photoshop Design",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2022",
                            client: "Rainbow Themes",
                            category: "art",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("0edc"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0edc")
                            }
                        }, {
                            id: 4,
                            portfolioImage: a("0513"),
                            image: a("0513"),
                            title: "Native Application",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2022",
                            client: "Rainbow Themes",
                            category: "development",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("0513"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0513")
                            }
                        }, {
                            id: 5,
                            portfolioImage: a("c827"),
                            image: a("c827"),
                            title: "Vue.js Development",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2022",
                            client: "Rainbow Themes",
                            category: "design",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("c827"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0edc")
                            }
                        }, {
                            id: 6,
                            portfolioImage: a("3150"),
                            image: a("3150"),
                            title: "App Installment",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2022",
                            client: "Rainbow Themes",
                            category: "design",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("3150"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("3150")
                            }
                        }]
                    };
                }
            },
            xo = {
                name: "PortfolioPage",
                components: {
                    Portfolio: Fo,
                    SectionTitle: de,
                    Layout: Zt,
                    Breadcrumb: Aa
                },
                mixins: [Uo]
            },
            Ko = xo,
            Ro = Object(l.a)(Ko, vo, ho, false, null, null, null),
            ko = Ro.exports,
            Bo = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("div", {
                    staticClass: "rwt-portfolio-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Portfolio Default",
                        title: "You can customize everything!",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("Portfolio", {
                    staticClass: "mt--20",
                    attrs: {
                        "portfolio-data": t.portfolioItems,
                        column: "col-lg-4 col-md-6 mt--30"
                    }
                })], 1)])]);
            },
            So = [],
            _o = {
                name: "PortfolioThreeColumnPage",
                components: {
                    Portfolio: Fo,
                    SectionTitle: de,
                    Layout: Zt,
                    Breadcrumb: Aa
                },
                mixins: [Uo]
            },
            Do = _o,
            To = Object(l.a)(Do, Bo, So, false, null, null, null),
            Io = To.exports,
            Po = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("div", {
                    staticClass: "rwt-portfolio-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container-fluid plr--30"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Portfolio Default",
                        title: "You can customize everything!",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("Portfolio", {
                    staticClass: "mt--20",
                    attrs: {
                        "portfolio-data": t.portfolioItems,
                        column: "col-lg-4 col-md-6 mt--30"
                    }
                })], 1)])]);
            },
            Lo = [],
            Qo = {
                name: "PortfolioFullWidthPage",
                components: {
                    Portfolio: Fo,
                    SectionTitle: de,
                    Layout: Zt,
                    Breadcrumb: Aa
                },
                mixins: [Uo]
            },
            jo = Qo,
            Wo = Object(l.a)(jo, Po, Lo, false, null, null, null),
            Mo = Wo.exports,
            Oo = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("div", {
                    staticClass: "rwt-portfolio-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Portfolio Default",
                        title: "You can customize everything!",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("Portfolio", {
                    staticClass: "mt--20",
                    attrs: {
                        "portfolio-data": t.portfolioItems,
                        column: "col-lg-6 col-md-6 mt--30 no-overlay"
                    }
                })], 1)])]);
            },
            Eo = [],
            Vo = {
                name: "PortfolioGridLayoutPage",
                components: {
                    Portfolio: Fo,
                    SectionTitle: de,
                    Layout: Zt,
                    Breadcrumb: Aa
                },
                mixins: [Uo]
            },
            No = Vo,
            Ho = Object(l.a)(No, Oo, Eo, false, null, null, null),
            qo = Ho.exports,
            zo = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("div", {
                    staticClass: "rwt-portfolio-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container-fluid plr--30"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Portfolio Default",
                        title: "You can customize everything!",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("Portfolio", {
                    staticClass: "mt--20",
                    attrs: {
                        "portfolio-data": t.portfolioItems,
                        column: "col-lg-4 col-md-6 mt--30 box-grid-layout no-overlay"
                    }
                })], 1)])]);
            },
            Yo = [],
            Jo = {
                name: "PortfolioBoxLayoutPage",
                components: {
                    Portfolio: Fo,
                    SectionTitle: de,
                    Layout: Zt,
                    Breadcrumb: Aa
                },
                mixins: [Uo]
            },
            Go = Jo,
            Xo = Object(l.a)(Go, zo, Yo, false, null, null, null),
            Zo = Xo.exports,
            $o = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("div", {
                    staticClass: "rwt-portfolio-details rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-10 offset-lg-1"
                }, [e("div", {
                    staticClass: "inner"
                }, [e("div", {
                    staticClass: "details-list"
                }, [e("div", {
                    staticClass: "thumbnail alignwide"
                }, [e("img", {
                    staticClass: "radius w-100",
                    attrs: {
                        src: t.portfolio.largeImage,
                        alt: "Corporate Image"
                    }
                })]), e("div", {
                    staticClass: "row mt--40 row--30"
                }, [e("div", {
                    staticClass: "col-lg-6"
                }, [e("div", {
                    staticClass: "content-left"
                }, [e("h4", {
                    staticClass: "title"
                }, [t._v(t._s(t.portfolio.title))]), e("div", {
                    staticClass: "single-list-wrapper"
                }, [e("div", {
                    staticClass: "single-list"
                }, [e("label", [t._v("Date:")]), e("span", [t._v(t._s(t.portfolio.date))])]), e("div", {
                    staticClass: "single-list"
                }, [e("label", [t._v("Client:")]), e("span", [t._v(t._s(t.portfolio.client))])]), e("div", {
                    staticClass: "single-list"
                }, [e("label", [t._v("Category:")]), e("span", [t._v(t._s(t.portfolio.category))])])]), e("div", {
                    staticClass: "view-btn mt--50"
                }, [e("a", {
                    staticClass: "btn-default btn-large round",
                    attrs: {
                        href: t.portfolio.btn.link
                    }
                }, [t._v(" " + t._s(t.portfolio.btn.buttonText) + " ")])])])]), e("div", {
                    staticClass: "col-lg-6 mt_md--30 mt_sm--30"
                }, [e("div", {
                    staticClass: "content-right"
                }, [e("h5", {
                    staticClass: "subtitle"
                }, [t._v(t._s(t.portfolio.subtitle))]), e("div", {
                    staticClass: "description",
                    domProps: {
                        innerHTML: t._s(t.portfolio.body)
                    }
                })])])])]), e("div", {
                    staticClass: "portfolio-gallery mt--40"
                }, [e("div", {
                    staticClass: "gallery mt--30"
                }, [e("div", {
                    staticClass: "thumbnail"
                }, [e("img", {
                    staticClass: "radius w-100",
                    attrs: {
                        src: t.portfolio.gallery.imageOne,
                        alt: "Corporate Image"
                    }
                })])]), e("div", {
                    staticClass: "gallery mt--30"
                }, [e("div", {
                    staticClass: "thumbnail"
                }, [e("img", {
                    staticClass: "radius w-100",
                    attrs: {
                        src: t.portfolio.gallery.imageTwo,
                        alt: "Corporate Image"
                    }
                })])]), e("div", {
                    staticClass: "gallery mt--30"
                }, [e("div", {
                    staticClass: "thumbnail"
                }, [e("img", {
                    staticClass: "radius w-100",
                    attrs: {
                        src: t.portfolio.gallery.imageThree,
                        alt: "Corporate Image"
                    }
                })])])])])])])])])]);
            },
            tn = [],
            en = {
                name: "PortfolioDetailsPage",
                components: {
                    Layout: Zt
                },
                mixins: [Uo],
                data() {
                    return {
                        id: this.$route.params.id,
                        portfolio: {}
                    };
                },
                methods: {
                    getPortfolio(t) {
                        this.portfolio = this.portfolioItems.find(e => e.id == t);
                    }
                },
                created() {
                    this.getPortfolio(this.id);
                }
            },
            an = en,
            sn = Object(l.a)(an, $o, tn, false, null, null, null),
            on = sn.exports,
            nn = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("div", {
                    staticClass: "rwt-testimonial-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mb--10"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Client Feedback",
                        title: "Testimonial",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("div", {
                    staticClass: "row row--15"
                }, t._l(t.testimonialData, function (t, a) {
                    return e("div", {
                        key: a,
                        staticClass: "col-lg-4 col-md-6 col-12"
                    }, [e("Testimonial", {
                        attrs: {
                            testimonial: t
                        }
                    })], 1);
                }), 0)])]), e("Separator"), e("div", {
                    staticClass: "rwt-elements-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Client Feedback",
                        title: "Testimonial",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("div", {
                    staticClass: "row row--15"
                }, t._l(t.testimonialData, function (t, a) {
                    return e("div", {
                        key: a,
                        staticClass: "col-lg-4 col-md-6 col-12"
                    }, [e("Testimonial", {
                        attrs: {
                            testimonial: t,
                            "testimonial-style": 2
                        }
                    })], 1);
                }), 0)])]), e("Separator"), e("div", {
                    staticClass: "rwt-elements-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Client Feedback",
                        title: "Testimonial",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("div", {
                    staticClass: "row row--15"
                }, t._l(t.testimonialData, function (t, a) {
                    return e("div", {
                        key: a,
                        staticClass: "col-lg-4 col-md-6 col-12"
                    }, [e("Testimonial", {
                        attrs: {
                            testimonial: t,
                            "testimonial-style": 3
                        }
                    })], 1);
                }), 0)])]), e("Separator"), e("div", {
                    staticClass: "rwt-elements-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row mb--20"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Client Feedback",
                        title: "Testimonial",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("Testimonial", {
                    attrs: {
                        testimonial: t.testimonialData4,
                        "testimonial-style": 4
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rwt-elements-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row mb--20"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Client Feedback",
                        title: "Testimonial",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("Testimonial", {
                    attrs: {
                        testimonial: t.testimonialData5,
                        "testimonial-style": 5
                    }
                })], 1)])], 1);
            },
            rn = [],
            ln = function () {
                var t = this,
                    e = t._self._c;
                return 1 === t.testimonialStyle || 2 === t.testimonialStyle || 3 === t.testimonialStyle ? e("div", {
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                }, [e("div", {
                    class: "rn-box-card " + t.checkTestimonialStyle
                }, [e("div", {
                    staticClass: "inner"
                }, [e("figure", {
                    staticClass: "thumbnail"
                }, [e("img", {
                    attrs: {
                        src: a("05ba")(`./${t.testimonial.image}.jpg`),
                        alt: "Testimonial image"
                    }
                })]), e("figcaption", {
                    staticClass: "content"
                }, [e("p", {
                    staticClass: "description"
                }, [t._v(t._s(t.testimonial.description))]), e("h2", {
                    staticClass: "title"
                }, [t._v(t._s(t.testimonial.name))]), e("h6", {
                    staticClass: "subtitle theme-gradient"
                }, [t._v(t._s(t.testimonial.designation))])])])])]) : 4 === t.testimonialStyle ? e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mt--30"
                }, [e("div", {
                    staticClass: "testimonial-style-two"
                }, [e("div", {
                    staticClass: "row align-items-center row--20"
                }, [e("div", {
                    staticClass: "order-2 order-md-1 col-lg-6 col-md-8 offset-lg-1"
                }, [e("div", {
                    staticClass: "content mt_sm--40"
                }, [e("span", {
                    staticClass: "form"
                }, [t._v(t._s(t.testimonial.form))]), e("p", {
                    staticClass: "description"
                }, [t._v(t._s(t.testimonial.description))]), e("div", {
                    staticClass: "client-info"
                }, [e("h4", {
                    staticClass: "title"
                }, [t._v(t._s(t.testimonial.name))]), e("h6", {
                    staticClass: "subtitle"
                }, [t._v(t._s(t.testimonial.subtitle))])])])]), e("div", {
                    staticClass: "order-1 order-md-2 col-lg-4 col-md-4"
                }, [e("div", {
                    staticClass: "thumbnail"
                }, [e("img", {
                    staticClass: "w-100",
                    attrs: {
                        src: a("05ba")(`./${t.testimonial.image}.jpg`),
                        alt: "Testimonial image"
                    }
                })])])])])])]) : 5 === t.testimonialStyle ? e("div", {
                    staticClass: "slick-space-gutter--15 rn-slick-dot rn-slick-arrow mb--60"
                }, [e("VueSlickCarousel", t._b({}, "VueSlickCarousel", t.sliderSetting, false), t._l(t.testimonial, function (i, s) {
                    return e("div", {
                        key: s
                    }, [e("div", {
                        staticClass: "testimonial-style-two"
                    }, [e("div", {
                        staticClass: "row align-items-center row--20"
                    }, [e("div", {
                        staticClass: "order-2 order-md-1 col-lg-6 col-md-8 offset-lg-1"
                    }, [e("div", {
                        staticClass: "content mt_sm--40"
                    }, [e("span", {
                        staticClass: "form"
                    }, [t._v(t._s(i.form))]), e("p", {
                        staticClass: "description"
                    }, [t._v(t._s(i.description))]), e("div", {
                        staticClass: "client-info"
                    }, [e("h4", {
                        staticClass: "title"
                    }, [t._v(t._s(i.name))]), e("h6", {
                        staticClass: "subtitle"
                    }, [t._v(t._s(i.subtitle))])])])]), e("div", {
                        staticClass: "order-1 order-md-2 col-lg-4 col-md-4"
                    }, [e("div", {
                        staticClass: "thumbnail"
                    }, [e("img", {
                        staticClass: "w-100",
                        attrs: {
                            src: a("05ba")(`./${i.image}.jpg`),
                            alt: "Testimonial image"
                        }
                    })])])])])]);
                }), 0)], 1) : t._e();
            },
            cn = [],
            dn = a("a7ab"),
            pn = a.n(dn),
            un = {
                name: "Testimonial",
                components: {
                    VueSlickCarousel: pn.a
                },
                props: {
                    testimonial: {},
                    testimonialStyle: {
                        type: Number,
                        default: 1
                    }
                },
                data() {
                    return {
                        sliderSetting: {
                            infinite: true,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                            arrows: true,
                            responsive: [{
                                breakpoint: 800,
                                settings: {
                                    slidesToShow: 1
                                }
                            }, {
                                breakpoint: 993,
                                settings: {
                                    slidesToShow: 1
                                }
                            }, {
                                breakpoint: 580,
                                settings: {
                                    slidesToShow: 1
                                }
                            }, {
                                breakpoint: 481,
                                settings: {
                                    slidesToShow: 1
                                }
                            }]
                        }
                    };
                },
                computed: {
                    checkTestimonialStyle() {
                        return 1 === this.testimonialStyle ? "card-style-default testimonial-style-one" : 2 === this.testimonialStyle ? "card-style-default testimonial-style-one style-two" : 3 === this.testimonialStyle ? "card-style-default testimonial-style-one style-two border-gradient" : "";
                    }
                }
            },
            mn = un,
            gn = Object(l.a)(mn, ln, cn, false, null, null, null),
            bn = gn.exports,
            vn = {
                name: "TestimonialPage",
                components: {
                    Testimonial: bn,
                    SectionTitle: de,
                    Separator: se,
                    Layout: Zt,
                    Breadcrumb: Aa
                },
                data() {
                    return {
                        testimonialData: [{
                            image: "testimonial-01",
                            name: "Sr Janen Sara",
                            designation: "Sr Product Designer",
                            location: "CO Miego, AD, USA",
                            description: "“Proin libero vel lorem dui lupus est aliquet luctus purus justo eget libero sed lorem.„"
                        }, {
                            image: "testimonial-02",
                            name: "Afsana Nila",
                            designation: "App Developer",
                            location: "Bangladesh",
                            description: "“Proin libero vel lorem dui lupus est aliquet luctus purus justo eget libero sed lorem.„"
                        }, {
                            image: "testimonial-03",
                            name: "Afanan Sifa",
                            designation: "Accounts Manager",
                            location: "Poland",
                            description: "“Proin libero vel lorem dui lupus est aliquet luctus purus justo eget libero sed lorem.„"
                        }],
                        testimonialData4: {
                            id: "01",
                            form: "Poland",
                            description: "What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client.",
                            name: "John Due",
                            subtitle: "App Developer",
                            image: "testimonial-dark-01"
                        },
                        testimonialData5: [{
                            form: "Poland",
                            description: "What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client.",
                            name: "John Due",
                            subtitle: "App Developer",
                            image: "testimonial-dark-01"
                        }, {
                            form: "Germany",
                            description: "What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client.",
                            name: "John Due",
                            subtitle: "App Developer",
                            image: "testimonial-dark-02"
                        }, {
                            form: "USA",
                            description: "What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client.",
                            name: "Janen",
                            subtitle: "App Developer",
                            image: "testimonial-dark-03"
                        }]
                    };
                }
            },
            hn = vn,
            fn = Object(l.a)(hn, nn, rn, false, null, null, null),
            An = fn.exports,
            yn = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("div", {
                    staticClass: "rwt-timeline-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Timeline",
                        title: "Working Process One",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("Timeline", {
                    attrs: {
                        "timeline-data": t.timelineData
                    }
                })], 1)])])]), e("Separator"), e("div", {
                    staticClass: "rwt-timeline-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Timeline",
                        title: "Working Process Two",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-10 offset-lg-1 mt--50"
                }, [e("Timeline", {
                    attrs: {
                        "timeline-data": t.timelineData2,
                        "timeline-style": 2
                    }
                })], 1)])])]), e("Separator"), e("div", {
                    staticClass: "rwt-timeline-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Timeline",
                        title: "Working Process Three",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-10 offset-lg-1 mt--50"
                }, [e("Timeline", {
                    attrs: {
                        "timeline-data": t.timelineData2,
                        "timeline-style": 3
                    }
                })], 1)])])]), e("Separator"), e("div", {
                    staticClass: "rwt-timeline-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Timeline",
                        title: "Working Process Four",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-10 offset-lg-1 mt--50"
                }, [e("Timeline", {
                    attrs: {
                        "timeline-data": t.timelineData2,
                        "timeline-style": 4
                    }
                })], 1)])])])], 1);
            },
            Cn = [],
            wn = {
                name: "TimelinePage",
                components: {
                    Timeline: Me,
                    SectionTitle: de,
                    Separator: se,
                    Layout: Zt,
                    Breadcrumb: Aa
                },
                data() {
                    return {
                        timelineData: [{
                            id: "1",
                            date: "Step-1",
                            title: "Your working process you can present.",
                            description: "Lorem ipsum dolor sit amet at — consectetur adipisicing elit. Hic, expedita. Incidunt laboriosam.",
                            image: "timeline-01",
                            workingStep: [{
                                stepTitle: "Gain your works",
                                stepDescription: "Lorem ipsum dolor sit amet at consectetur adipisicing"
                            }, {
                                stepTitle: "Working process",
                                stepDescription: "Lorem ipsum dolor sit amet at consectetur adipisicing"
                            }]
                        }, {
                            id: "2",
                            date: "Step-2",
                            title: "Our compnay working process to present.",
                            description: "Lorem ipsum dolor sit amet at — consectetur adipisicing elit. Hic, expedita. Incidunt laboriosam.",
                            image: "timeline-02",
                            workingStep: [{
                                stepTitle: "Follow this process",
                                stepDescription: "Lorem ipsum dolor sit amet at consectetur adipisicing"
                            }, {
                                stepTitle: "Working experience",
                                stepDescription: "Lorem ipsum dolor sit amet at consectetur adipisicing"
                            }]
                        }],
                        timelineData2: [{
                            id: "1",
                            title: "Knowledge",
                            description: "Present all available features in Essentials."
                        }, {
                            id: "2",
                            title: "Working",
                            description: "All Feature available features in Essentials."
                        }, {
                            id: "3",
                            title: "Solution",
                            description: "Popular Feature available features in Essentials."
                        }, {
                            id: "4",
                            title: "Process",
                            description: "Latest Feature available features in Essentials."
                        }]
                    };
                }
            },
            Fn = wn,
            Un = Object(l.a)(Fn, yn, Cn, false, null, null, null),
            xn = Un.exports,
            Kn = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("div", {
                    staticClass: "rwt-tab-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row mb--40"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "You can Change Easily",
                        title: "Tab Style One",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("Tab", {
                    attrs: {
                        "tab-data": t.tabData
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rwt-tab-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row mb--40"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "You can Change Easily",
                        title: "Tab Style Two",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("Tab", {
                    attrs: {
                        "tab-data": t.tabData2,
                        "tab-style": 2
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rwt-tab-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row mb--40"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "You can Change Easily",
                        title: "Tab Style Three",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("Tab", {
                    attrs: {
                        "tab-data": t.tabData3,
                        "tab-style": 3
                    }
                })], 1)])], 1);
            },
            Rn = [],
            kn = function () {
                var t = this,
                    e = t._self._c;
                return 1 === t.tabStyle || 2 === t.tabStyle ? e("div", {
                    staticClass: "row row row--30 align-items-center"
                }, [e("div", {
                    staticClass: "col-lg-5"
                }, [e("img", {
                    staticClass: "radius-small",
                    attrs: {
                        src: a("1ea6")("./" + t.tabData.tabImage),
                        alt: "Tab Image"
                    }
                })]), e("div", {
                    staticClass: "col-lg-7 mt_md--40 mt_sm--40 order-2 order-lg-1"
                }, [e("div", {
                    class: ["rn-default-tab", {
                        "style-two": 2 === t.tabStyle
                    }]
                }, [e("ul", {
                    staticClass: "nav nav-tabs tab-button",
                    attrs: {
                        role: "tablist"
                    }
                }, t._l(t.tabData.tabContent, function (a, i) {
                    return e("li", {
                        key: i,
                        staticClass: "nav-item tabs__tab",
                        attrs: {
                            role: "presentation"
                        }
                    }, [e("button", {
                        staticClass: "nav-link text-capitalize",
                        class: {
                            active: 0 === i
                        },
                        attrs: {
                            id: a.menu + "-tab",
                            "data-bs-toggle": "tab",
                            "data-bs-target": "#" + a.menu,
                            type: "button",
                            role: "tab",
                            "aria-controls": a.menu,
                            "aria-selected": i === t.activeTab ? "true" : "false"
                        },
                        on: {
                            click: function (e) {
                                t.activeTab = i;
                            }
                        }
                    }, [t._v(" " + t._s(a.menu) + " ")])]);
                }), 0), e("div", {
                    staticClass: "rn-tab-content tab-content"
                }, t._l(t.tabData.tabContent, function (a, i) {
                    return e("div", {
                        key: i,
                        staticClass: "tab-pane fade",
                        class: {
                            "show active": 0 === i
                        },
                        attrs: {
                            id: a.menu,
                            role: "tabpanel",
                            "aria-labelledby": a.menu + "-tab"
                        }
                    }, [e("div", {
                        domProps: {
                            innerHTML: t._s(a.content)
                        }
                    })]);
                }), 0)])])]) : 3 === t.tabStyle ? e("div", {
                    staticClass: "rn-default-tab style-three"
                }, [e("ul", {
                    staticClass: "nav nav-tabs tab-button",
                    attrs: {
                        role: "tablist"
                    }
                }, t._l(t.tabData, function (a, i) {
                    return e("li", {
                        key: i,
                        staticClass: "nav-item tabs__tab",
                        attrs: {
                            role: "presentation"
                        }
                    }, [e("button", {
                        staticClass: "nav-link text-capitalize",
                        class: {
                            active: 0 === i
                        },
                        attrs: {
                            id: a.id + "-tab",
                            "data-bs-toggle": "tab",
                            "data-bs-target": "#" + a.id,
                            type: "button",
                            role: "tab",
                            "aria-controls": a.id,
                            "aria-selected": i === t.activeTab ? "true" : "false"
                        },
                        on: {
                            click: function (e) {
                                t.activeTab = i;
                            }
                        }
                    }, [t._v(" " + t._s(a.text) + " ")])]);
                }), 0), e("div", {
                    staticClass: "rn-tab-content tab-content"
                }, t._l(t.tabData, function (i, s) {
                    return e("div", {
                        key: s,
                        staticClass: "tab-pane fade",
                        class: {
                            "show active": 0 === s
                        },
                        attrs: {
                            id: i.id,
                            role: "tabpanel",
                            "aria-labelledby": i.id + "-tab"
                        }
                    }, [e("div", {
                        staticClass: "inner"
                    }, [e("div", {
                        staticClass: "row align-items-center row--30"
                    }, [s !== t.tabData.length - 1 ? e("div", {
                        staticClass: "col-lg-4"
                    }, [t._m(0, true)]) : t._e(), e("div", {
                        class: s !== t.tabData.length - 1 ? "col-lg-8 mt_md--30 mt_sm--30" : "col-lg-12 mt_md--30 mt_sm--30"
                    }, [e("div", {
                        staticClass: "row row--15 mt_dec--30 service-wrapper"
                    }, t._l(i.dataList, function (s, o) {
                        return e("div", {
                            key: "service-" + o,
                            class: 2 === i.dataList.length ? "col-lg-6 col-md-6 col-sm-6 col-12" : "col-lg-4 col-md-6 col-sm-6 col-12"
                        }, [e("div", {
                            staticClass: "card-box card-style-1 text-left"
                        }, [e("div", {
                            staticClass: "inner"
                        }, [e("div", {
                            staticClass: "image"
                        }, [e("router-link", {
                            attrs: {
                                to: "#"
                            }
                        }, [e("img", {
                            attrs: {
                                src: a("7205")("./" + s.image),
                                alt: "Card Images"
                            }
                        })])], 1), e("div", {
                            staticClass: "content"
                        }, [e("h4", {
                            staticClass: "title mb--20"
                        }, [e("router-link", {
                            attrs: {
                                to: "#"
                            }
                        }, [t._v(" " + t._s(s.title) + " ")])], 1), e("p", {
                            staticClass: "description b1 color-gray mb--0"
                        }, [t._v(" " + t._s(s.description) + " ")]), e("router-link", {
                            staticClass: "btn-default btn-small",
                            attrs: {
                                to: "#"
                            }
                        }, [t._v(" Read More ")])], 1)])])]);
                    }), 0)])])])]);
                }), 0)]) : t._e();
            },
            Bn = [function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "section-title"
                }, [e("h4", {
                    staticClass: "title"
                }, [t._v("How can we help you?")]), e("p", [t._v(" There are many variations variats of passages of Lorem Ipsum available many variations variats of passages of Lorem Ipsum available. ")]), e("div", {
                    staticClass: "read-more"
                }, [e("a", {
                    staticClass: "btn-default btn-small",
                    attrs: {
                        href: "#"
                    }
                }, [t._v("Read More")])])]);
            }],
            Sn = {
                name: "Tab",
                props: {
                    tabData: {},
                    tabStyle: {
                        type: Number,
                        default: 1
                    }
                },
                data() {
                    return {
                        activeTab: 0
                    };
                }
            },
            _n = Sn,
            Dn = Object(l.a)(_n, kn, Bn, false, null, null, null),
            Tn = Dn.exports,
            In = {
                name: "TabPage",
                components: {
                    Tab: Tn,
                    SectionTitle: de,
                    Separator: se,
                    Layout: Zt,
                    Breadcrumb: Aa
                },
                data() {
                    return {
                        tabData: {
                            tabImage: "tabs-01.jpg",
                            tabContent: [{
                                id: 1,
                                menu: "strategy",
                                content: "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p><p>Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p>"
                            }, {
                                id: 2,
                                menu: "reporting",
                                content: "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p><p>Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p>"
                            }, {
                                id: 3,
                                menu: "development",
                                content: "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p><p>Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p>"
                            }]
                        },
                        tabData2: {
                            tabImage: "tabs-02.jpg",
                            tabContent: [{
                                id: 1,
                                menu: "home",
                                content: "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p><p>Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p>"
                            }, {
                                id: 2,
                                menu: "about",
                                content: "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p><p>Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p>"
                            }, {
                                id: 3,
                                menu: "contact",
                                content: "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p><p>Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p>"
                            }]
                        },
                        tabData3: [{
                            id: "strategy-menu",
                            text: "Strategy",
                            dataList: [{
                                image: "service-01.jpg",
                                title: "Awarded Design",
                                description: "There are many variations variats  of passages of Lorem Ipsum available."
                            }, {
                                image: "service-02.jpg",
                                title: "Design & Creative",
                                description: "Passages there are many variatin Lorem Ipsum available have suffered."
                            }]
                        }, {
                            id: "development-menu",
                            text: "Development",
                            dataList: [{
                                image: "service-03.jpg",
                                title: "App Development",
                                description: "There are many variations variats  of passages of Lorem Ipsum available."
                            }, {
                                image: "service-04.jpg",
                                title: "Business Design",
                                description: "Passages there are many variatin Lorem Ipsum available have suffered."
                            }]
                        }, {
                            id: "reporting-menu",
                            text: "Reporting",
                            dataList: [{
                                image: "service-03.jpg",
                                title: "App Development",
                                description: "There are many variations variats  of passages of Lorem Ipsum available."
                            }, {
                                image: "service-04.jpg",
                                title: "Business Design",
                                description: "Passages there are many variatin Lorem Ipsum available have suffered."
                            }, {
                                image: "service-04.jpg",
                                title: "Business Design",
                                description: "Passages there are many variatin Lorem Ipsum available have suffered."
                            }]
                        }]
                    };
                }
            },
            Pn = In,
            Ln = Object(l.a)(Pn, Kn, Rn, false, null, null, null),
            Qn = Ln.exports,
            jn = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("div", {
                    staticClass: "rwt-pricing-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row mb--40 mb_sm--0"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Pricing",
                        title: "Pricing Style One",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("Pricing", {
                    attrs: {
                        "pricing-data": t.pricingOneData
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rwt-pricing-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row mb--40 mb_sm--0"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Pricing",
                        title: "Pricing Style Two",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("Pricing", {
                    attrs: {
                        "pricing-data": t.pricingTwoData,
                        "pricing-style": 2
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rwt-pricing-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row mb--40 mb_sm--0"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Pricing",
                        title: "Pricing Style Three",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("Pricing", {
                    attrs: {
                        "pricing-data": t.pricingThreeData,
                        "pricing-style": 3
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rwt-pricing-area rn-section-gap"
                }, [e("div", {
                    staticClass: "wrapper plr--100 plr_md--15 plr_sm--15"
                }, [e("div", {
                    staticClass: "row mb--40 mb_sm--0"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Pricing",
                        title: "Pricing Style Four",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("Pricing", {
                    attrs: {
                        "pricing-data": t.pricingFourData,
                        "pricing-style": 4
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rwt-pricing-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row mb--40 mb_sm--0"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Pricing",
                        title: "Pricing Style Five",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("Pricing", {
                    attrs: {
                        "pricing-data": t.pricingFiveData,
                        "pricing-style": 5
                    }
                })], 1)])], 1);
            },
            Wn = [],
            Mn = function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    class: ["row justify-content-center", {
                        "row--30": 1 === t.pricingStyle
                    }, {
                        "row--15": 2 === t.pricingStyle
                    }, {
                        "row--0": 3 === t.pricingStyle
                    }, {
                        "row--0": 4 === t.pricingStyle
                    }, {
                        "row--15": 5 === t.pricingStyle
                    }]
                }, t._l(t.pricingData, function (a, i) {
                    return e("div", {
                        key: i,
                        class: ["col-md-6 col-12", 4 === t.pricingStyle ? "col-lg-3" : "col-lg-4"],
                        attrs: {
                            "data-aos": "fade-up",
                            "data-aos-delay": "60"
                        }
                    }, [e("div", {
                        class: ["rn-pricing", {
                            active: a.isActive
                        }, {
                            "style-2": 2 === t.pricingStyle || 3 === t.pricingStyle
                        }, {
                            "style-5": 2 === t.pricingStyle || 5 === t.pricingStyle
                        }]
                    }, [e("div", {
                        staticClass: "pricing-table-inner"
                    }, [e("div", {
                        staticClass: "pricing-header"
                    }, [e("h4", {
                        staticClass: "title"
                    }, [t._v(t._s(a.title))]), e("div", {
                        staticClass: "pricing"
                    }, [e("div", {
                        staticClass: "price-wrapper"
                    }, [e("span", {
                        staticClass: "currency"
                    }, [t._v(t._s(a.currency))]), e("span", {
                        staticClass: "price"
                    }, [t._v(t._s(a.price))])]), e("span", {
                        staticClass: "subtitle"
                    }, [t._v(t._s(a.subtitle))])])]), e("div", {
                        staticClass: "pricing-body"
                    }, [e("ul", {
                        staticClass: "list-style--1"
                    }, t._l(a.features, function (a) {
                        return e("li", [a ? [e("Icon", {
                            attrs: {
                                name: "check",
                                size: "18"
                            }
                        }), t._v(" " + t._s(a.title) + " ")] : t._e()], 2);
                    }), 0)]), e("div", {
                        staticClass: "pricing-footer"
                    }, [e("a", {
                        class: ["btn-default", {
                            "btn-border": !a.isActive
                        }],
                        attrs: {
                            href: a.btn.link ? a.btn.link : "#"
                        }
                    }, [t._v(" " + t._s(a.btn.text) + " ")])])])])]);
                }), 0);
            },
            On = [],
            En = {
                name: "Pricing",
                props: {
                    pricingData: {},
                    pricingStyle: {
                        type: Number,
                        default: 1
                    }
                },
                components: {
                    Icon: x
                }
            },
            Vn = En,
            Nn = Object(l.a)(Vn, Mn, On, false, null, null, null),
            Hn = Nn.exports,
            qn = {
                name: "PricingPage",
                components: {
                    Pricing: Hn,
                    Separator: se,
                    SectionTitle: de,
                    Breadcrumb: Aa,
                    Layout: Zt
                },
                data() {
                    return {
                        pricingOneData: [{
                            title: "Free",
                            currency: "$",
                            price: "29",
                            subtitle: "USD Per Month",
                            features: [{
                                title: "5 PPC Campaigns"
                            }, {
                                title: "Digital Marketing"
                            }, {
                                title: "Marketing Agency"
                            }, {
                                title: "Seo Friendly"
                            }, {
                                title: "UI/UX designs"
                            }],
                            btn: {
                                text: "Purchase Now",
                                link: "/"
                            }
                        }, {
                            title: "Business",
                            currency: "$",
                            price: "50",
                            subtitle: "USD Per Month",
                            features: [{
                                title: "5 PPC Campaigns"
                            }, {
                                title: "Keep 100% Royalties"
                            }, {
                                title: "App Development"
                            }, {
                                title: "Seo Friendly"
                            }, {
                                title: "UI/UX designs"
                            }],
                            btn: {
                                text: "Purchase Now",
                                link: "/"
                            },
                            isActive: true
                        }, {
                            title: "Advanced",
                            currency: "$",
                            price: "100",
                            subtitle: "USD Per Month",
                            features: [{
                                title: "5 PPC Campaigns"
                            }, {
                                title: "SEO Marketing"
                            }, {
                                title: "Marketing Agency"
                            }, {
                                title: "Seo Friendly"
                            }, {
                                title: "Application Manage"
                            }],
                            btn: {
                                text: "Purchase Now",
                                link: "/"
                            }
                        }],
                        pricingTwoData: [{
                            title: "Free",
                            currency: "$",
                            price: "29",
                            subtitle: "USD Per Month",
                            features: [{
                                title: "5 PPC Campaigns"
                            }, {
                                title: "Digital Marketing"
                            }, {
                                title: "Marketing Agency"
                            }, {
                                title: "Seo Friendly"
                            }, {
                                title: "UI/UX designs"
                            }],
                            btn: {
                                text: "Purchase Now",
                                link: "/"
                            }
                        }, {
                            title: "Business",
                            currency: "$",
                            price: "50",
                            subtitle: "USD Per Month",
                            features: [{
                                title: "5 PPC Campaigns"
                            }, {
                                title: "Keep 100% Royalties"
                            }, {
                                title: "App Development"
                            }, {
                                title: "Seo Friendly"
                            }, {
                                title: "UI/UX designs"
                            }],
                            btn: {
                                text: "Purchase Now",
                                link: "/"
                            },
                            isActive: true
                        }, {
                            title: "Advanced",
                            currency: "$",
                            price: "100",
                            subtitle: "USD Per Month",
                            features: [{
                                title: "5 PPC Campaigns"
                            }, {
                                title: "SEO Marketing"
                            }, {
                                title: "Marketing Agency"
                            }, {
                                title: "Seo Friendly"
                            }, {
                                title: "Application Manage"
                            }],
                            btn: {
                                text: "Purchase Now",
                                link: "/"
                            }
                        }],
                        pricingThreeData: [{
                            title: "Free",
                            currency: "$",
                            price: "29",
                            subtitle: "USD Per Month",
                            features: [{
                                title: "5 PPC Campaigns"
                            }, {
                                title: "Digital Marketing"
                            }, {
                                title: "Marketing Agency"
                            }, {
                                title: "Seo Friendly"
                            }, {
                                title: "UI/UX designs"
                            }],
                            btn: {
                                text: "Purchase Now",
                                link: "/"
                            }
                        }, {
                            title: "Business",
                            currency: "$",
                            price: "50",
                            subtitle: "USD Per Month",
                            features: [{
                                title: "5 PPC Campaigns"
                            }, {
                                title: "Keep 100% Royalties"
                            }, {
                                title: "App Development"
                            }, {
                                title: "Seo Friendly"
                            }, {
                                title: "UI/UX designs"
                            }],
                            btn: {
                                text: "Purchase Now",
                                link: "/"
                            },
                            isActive: true
                        }],
                        pricingFourData: [{
                            title: "Free",
                            currency: "$",
                            price: "29",
                            subtitle: "USD Per Month",
                            features: [{
                                title: "5 PPC Campaigns"
                            }, {
                                title: "Digital Marketing"
                            }, {
                                title: "Marketing Agency"
                            }, {
                                title: "Seo Friendly"
                            }, {
                                title: "UI/UX designs"
                            }],
                            btn: {
                                text: "Purchase Now",
                                link: "/"
                            }
                        }, {
                            title: "Business",
                            currency: "$",
                            price: "50",
                            subtitle: "USD Per Month",
                            features: [{
                                title: "5 PPC Campaigns"
                            }, {
                                title: "Keep 100% Royalties"
                            }, {
                                title: "App Development"
                            }, {
                                title: "Seo Friendly"
                            }, {
                                title: "UI/UX designs"
                            }],
                            btn: {
                                text: "Purchase Now",
                                link: "/"
                            },
                            isActive: true
                        }, {
                            title: "Advanced",
                            currency: "$",
                            price: "100",
                            subtitle: "USD Per Month",
                            features: [{
                                title: "50 PPC Campaigns"
                            }, {
                                title: "SEO Marketing"
                            }, {
                                title: "Marketing Agency"
                            }, {
                                title: "Seo Friendly"
                            }, {
                                title: "Application Manage"
                            }],
                            btn: {
                                text: "Purchase Now",
                                link: "/"
                            }
                        }, {
                            title: "Premium",
                            currency: "$",
                            price: "500",
                            subtitle: "USD Per Month",
                            features: [{
                                title: "100 PPC Campaigns"
                            }, {
                                title: "SEO Marketing"
                            }, {
                                title: "Marketing Agency"
                            }, {
                                title: "Seo Friendly"
                            }, {
                                title: "Application Manage"
                            }],
                            btn: {
                                text: "Purchase Now",
                                link: "/"
                            }
                        }],
                        pricingFiveData: [{
                            title: "Basic Plan",
                            currency: "$",
                            price: "29",
                            subtitle: "USD Per Month",
                            features: [{
                                title: "5 PPC Campaigns"
                            }, {
                                title: "Digital Marketing"
                            }, {
                                title: "Marketing Agency"
                            }, {
                                title: "Seo Friendly"
                            }, {
                                title: "UI/UX designs"
                            }],
                            btn: {
                                text: "Purchase Now",
                                link: "/"
                            }
                        }, {
                            title: "Standard Plan",
                            currency: "$",
                            price: "50",
                            subtitle: "USD Per Month",
                            features: [{
                                title: "5 PPC Campaigns"
                            }, {
                                title: "Keep 100% Royalties"
                            }, {
                                title: "App Development"
                            }, {
                                title: "Seo Friendly"
                            }, {
                                title: "UI/UX designs"
                            }],
                            btn: {
                                text: "Purchase Now",
                                link: "/"
                            },
                            isActive: true
                        }, {
                            title: "Advanced Plan",
                            currency: "$",
                            price: "500",
                            subtitle: "USD Per Month",
                            features: [{
                                title: "5 PPC Campaigns"
                            }, {
                                title: "SEO Marketing"
                            }, {
                                title: "Marketing Agency"
                            }, {
                                title: "Seo Friendly"
                            }, {
                                title: "Application Manage"
                            }],
                            btn: {
                                text: "Purchase Now",
                                link: "/"
                            }
                        }]
                    };
                }
            },
            zn = qn,
            Yn = Object(l.a)(zn, jn, Wn, false, null, null, null),
            Jn = Yn.exports,
            Gn = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("div", {
                    staticClass: "rwt-split-area rn-section-gap"
                }, [e("div", {
                    staticClass: "wrapper"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mb--40"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Split",
                        title: "Split Style One",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("Split", {
                    attrs: {
                        "split-data": t.splitOneData
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rwt-split-area rn-section-gap"
                }, [e("div", {
                    staticClass: "wrapper"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mb--40"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Split",
                        title: "Split Style Two",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("Split", {
                    attrs: {
                        "split-data": t.splitTwoData,
                        "split-style": 2
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rwt-split-area rn-section-gap"
                }, [e("div", {
                    staticClass: "wrapper"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mb--40"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Split",
                        title: "Split Style Three",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("Split", {
                    attrs: {
                        "split-data": t.splitThreeData,
                        "split-style": 3
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rwt-split-area rn-section-gap"
                }, [e("div", {
                    staticClass: "wrapper"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mb--40"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Split",
                        title: "Split Style Four",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("Split", {
                    attrs: {
                        "split-data": t.splitThreeData,
                        "split-style": 4
                    }
                })], 1)])], 1);
            },
            Xn = [],
            Zn = function () {
                var t = this,
                    e = t._self._c;
                return 1 === t.splitStyle ? e("div", {
                    staticClass: "rn-splite-style"
                }, [e("div", {
                    staticClass: "split-wrapper"
                }, [e("div", {
                    staticClass: "row no-gutters radius-10 align-items-center"
                }, [e("div", {
                    staticClass: "col-lg-12 col-xl-6 col-12"
                }, [e("div", {
                    staticClass: "thumbnail image-left-content"
                }, [e("img", {
                    attrs: {
                        src: a("e185")("./" + t.splitData.image),
                        alt: "Split Image"
                    }
                })])]), e("div", {
                    staticClass: "col-lg-12 col-xl-6 col-12"
                }, [e("div", {
                    staticClass: "split-inner"
                }, [e("h4", {
                    staticClass: "title"
                }, [t._v(t._s(t.splitData.title))]), e("p", {
                    staticClass: "description"
                }, [t._v(t._s(t.splitData.description))]), e("ul", {
                    staticClass: "split-list"
                }, t._l(t.splitData.list, function (a) {
                    return e("li", [t._v(t._s(a))]);
                }), 0), e("div", {
                    staticClass: "view-more-button mt--35"
                }, [e("Button", {
                    attrs: {
                        title: t.splitData.btn.text,
                        url: t.splitData.btn.link
                    }
                })], 1)])])])])]) : 2 === t.splitStyle || 3 === t.splitStyle || 4 === t.splitStyle ? e("div", {
                    class: ["rn-splite-style", {
                        "bg-color-blackest": 3 === t.splitStyle || 4 === t.splitStyle
                    }]
                }, [e("div", {
                    staticClass: "split-wrapper"
                }, [e("div", {
                    staticClass: "row no-gutters radius-10 align-items-center"
                }, [e("div", {
                    class: ["col-lg-12 col-xl-6 col-12", {
                        "order-2": 4 === t.splitStyle
                    }]
                }, [e("div", {
                    staticClass: "thumbnail"
                }, [e("img", {
                    attrs: {
                        src: a("e185")("./" + t.splitData.image),
                        alt: "Split Image"
                    }
                })])]), e("div", {
                    class: ["col-lg-12 col-xl-6 col-12", {
                        "order-1": 4 === t.splitStyle
                    }]
                }, [e("div", {
                    staticClass: "split-inner"
                }, [e("h4", {
                    staticClass: "title"
                }, [t._v(t._s(t.splitData.title))]), e("p", {
                    staticClass: "description"
                }, [t._v(t._s(t.splitData.description))]), e("Counter", {
                    attrs: {
                        "counter-style": 5,
                        "text-align": "left",
                        "counter-data": t.splitData.counterData,
                        column: "col-lg-6 col-md-6 col-sm-6 col-12"
                    }
                })], 1)])])])]) : t._e();
            },
            $n = [],
            tr = {
                name: "Split",
                components: {
                    Counter: Je,
                    Button: lt
                },
                props: {
                    splitStyle: {
                        type: Number,
                        default: 1
                    },
                    splitData: {}
                }
            },
            er = tr,
            ar = Object(l.a)(er, Zn, $n, false, null, null, null),
            ir = ar.exports,
            sr = {
                name: "SplitSectionPage",
                components: {
                    Split: ir,
                    Separator: se,
                    SectionTitle: de,
                    Layout: Zt,
                    Breadcrumb: Aa
                },
                data() {
                    return {
                        splitOneData: {
                            image: "split-01.jpg",
                            title: "What is DOOB?",
                            description: "Randomised words which don't look even slightly believable. If you are to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. in some form, by injectedeed bedhumour, or randomised even .",
                            list: ["- Doug DeMarco, Design Prototyping Manager", "- 108 million paying subscribers", "- Over 1.7 billion hours of music played monthly", "- 4,000+ employees working across 16 offices"],
                            btn: {
                                text: "Contact With Us",
                                link: "/contact"
                            }
                        },
                        splitTwoData: {
                            image: "split-02.jpg",
                            title: "Continue Your Business With Us.",
                            description: "Randomised words which don't look even slightly believable. If you are to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. in some form, by injectedeed bedhumour, or randomised even .",
                            counterData: [{
                                number: 199,
                                title: "Happy Clients"
                            }, {
                                number: 575,
                                title: "Employees"
                            }, {
                                number: 69,
                                title: "Useful Programs"
                            }, {
                                number: 500,
                                title: "Useful Programs"
                            }]
                        },
                        splitThreeData: {
                            image: "split-03.jpg",
                            title: "Continue Your Business With Us.",
                            description: "Randomised words which don't look even slightly believable. If you are to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. in some form, by injectedeed bedhumour, or randomised even .",
                            counterData: [{
                                number: 199,
                                title: "Happy Clients"
                            }, {
                                number: 575,
                                title: "Employees"
                            }, {
                                number: 69,
                                title: "Useful Programs"
                            }, {
                                number: 500,
                                title: "Useful Programs"
                            }]
                        }
                    };
                }
            },
            or = sr,
            nr = Object(l.a)(or, Gn, Xn, false, null, null, null),
            rr = nr.exports,
            lr = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("div", {
                    staticClass: "rwt-callto-action-area rn-section-gap"
                }, [e("div", {
                    staticClass: "wrapper"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mb--40"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Call To Action",
                        title: "Style One",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("CallToAction", {
                    attrs: {
                        title: "Ready to start creating a standard website?",
                        subtitle: "We help our clients succeed by creating brand identities, digital experiences, and print materials that communicate clearly.",
                        "btn-text": "Purchase Doob",
                        "background-image": a("06b0")
                    }
                })], 1)]), e("div", {
                    staticClass: "rwt-callto-action-area rn-section-gapBottom"
                }, [e("div", {
                    staticClass: "wrapper"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mb--40"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Call To Action",
                        title: "Style Two",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("CallToAction", {
                    attrs: {
                        "style-type": 2,
                        title: "Ready to start creating a standard website?",
                        subtitle: "Finest choice for your home & office",
                        "btn-text": "Purchase Doob",
                        "background-image": a("06b0")
                    }
                })], 1)]), e("div", {
                    staticClass: "rwt-callto-action-area rn-section-gapBottom"
                }, [e("div", {
                    staticClass: "wrapper"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mb--40"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Call To Action",
                        title: "Style Three",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("CallToAction", {
                    attrs: {
                        "style-type": 3,
                        title: "Ready to start creating a standard website?",
                        subtitle: "Finest choice for your home & office",
                        "btn-text": "Purchase Doob",
                        "background-image": a("376b")
                    }
                })], 1)]), e("div", {
                    staticClass: "rwt-callto-action-area rn-section-gapBottom"
                }, [e("div", {
                    staticClass: "wrapper"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mb--40"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Call To Action",
                        title: "Style Four",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("CallToAction", {
                    attrs: {
                        "style-type": 4,
                        title: "Ready to start creating a standard website?",
                        subtitle: "Finest choice for your home & office",
                        "btn-text": "Purchase Doob"
                    }
                })], 1)]), e("div", {
                    staticClass: "rwt-callto-action-area rn-section-gapBottom"
                }, [e("div", {
                    staticClass: "wrapper"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mb--40"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Call To Action",
                        title: "Style Five",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("CallToAction", {
                    attrs: {
                        "style-type": 5,
                        title: "Ready to start creating a standard website?",
                        subtitle: "Finest choice for your home & office",
                        "btn-text": "Purchase Doob"
                    }
                })], 1)]), e("div", {
                    staticClass: "rwt-callto-action-area rn-section-gapBottom"
                }, [e("div", {
                    staticClass: "wrapper"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mb--40"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Call To Action",
                        title: "Style Six",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("CallToAction", {
                    attrs: {
                        "style-type": 6,
                        title: "Ready to start creating a standard website?",
                        "btn-text": "Purchase Doob"
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rwt-callto-action-area rn-section-gap"
                }, [e("div", {
                    staticClass: "wrapper"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mb--40"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Call To Action",
                        title: "Style Seven",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("CallToAction", {
                    attrs: {
                        "style-type": 7,
                        subtitle: "If you want to create a corporate template you can purchase now our doob template.",
                        "btn-text": "Purchase Doob"
                    }
                })], 1)]), e("div", {
                    staticClass: "rwt-callto-action-area"
                }, [e("div", {
                    staticClass: "wrapper"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mb--40"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Call To Action",
                        title: "Style Eight",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)]), e("CallToAction", {
                    attrs: {
                        "style-type": 8,
                        title: "Ready to start creating a standard website?",
                        subtitle: "Finest choice for your home & office",
                        "btn-text": "Purchase Doob"
                    }
                })], 1)])], 1);
            },
            cr = [],
            dr = {
                name: "CallToActionPage",
                components: {
                    Icon: x,
                    CallToAction: jt,
                    SectionTitle: de,
                    Separator: se,
                    Breadcrumb: Aa,
                    Layout: Zt
                }
            },
            pr = dr,
            ur = Object(l.a)(pr, lr, cr, false, null, null, null),
            mr = ur.exports,
            gr = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("div", {
                    staticClass: "rwt-video-popup-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Popup Video",
                        title: "Video Popup Style"
                    }
                })], 1)]), e("Video", {
                    attrs: {
                        "video-data": t.videoData
                    }
                })], 1)])]);
            },
            br = [],
            vr = {
                name: "VideoPage",
                components: {
                    Video: Ue,
                    SectionTitle: de,
                    Layout: Zt,
                    Breadcrumb: Aa
                },
                data() {
                    return {
                        videoData: [{
                            thumb: a("0513"),
                            src: "https://www.youtube.com/watch?v=d0tU18Ybcvk"
                        }, {
                            thumb: a("0513"),
                            src: "https://www.youtube.com/watch?v=d0tU18Ybcvk"
                        }]
                    };
                }
            },
            hr = vr,
            fr = Object(l.a)(hr, gr, br, false, null, null, null),
            Ar = fr.exports,
            yr = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("div", {
                    staticClass: "rwt-gallery-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mb--20"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Gallery With Lightbox",
                        title: "Gallery Style One"
                    }
                })], 1)]), e("Gallery", {
                    attrs: {
                        "gallery-data": t.galleryData
                    }
                })], 1)]), e("div", {
                    staticClass: "rwt-gallery-area rn-section-gapBottom"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mb--20"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Gallery With Lightbox",
                        title: "Gallery Style Two"
                    }
                })], 1)]), e("Gallery", {
                    attrs: {
                        "gallery-data": t.galleryData,
                        column: "col-lg-4 col-md-6 col-sm-6 col-12 mt--30"
                    }
                })], 1)]), e("div", {
                    staticClass: "rwt-gallery-area rn-section-gapBottom"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mb--20"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Gallery With Lightbox",
                        title: "Gallery Style Three"
                    }
                })], 1)]), e("Gallery", {
                    attrs: {
                        "gallery-data": t.galleryData3,
                        column: "col-lg-3 col-md-6 col-sm-6 col-12 mt--30"
                    }
                })], 1)])]);
            },
            Cr = [],
            wr = function () {
                var t = this,
                    e = t._self._c;
                return e("div", [e("div", {
                    staticClass: "row mt_dec--30 row--15"
                }, t._l(t.galleryData, function (a, i) {
                    return e("div", {
                        key: i,
                        class: t.column
                    }, [e("div", {
                        staticClass: "rn-gallery icon-center",
                        attrs: {
                            "data-aos": "fade-up"
                        }
                    }, [e("div", {
                        staticClass: "thumbnail"
                    }, [e("img", {
                        staticClass: "radius-small",
                        attrs: {
                            src: a.thumb,
                            alt: "Video Thumbnail"
                        }
                    })]), e("div", {
                        staticClass: "video-icon"
                    }, [e("Button", {
                        attrs: {
                            "variant-button-class": "rounded-player sm-size",
                            "is-link": false
                        },
                        on: {
                            btnClick: function (e) {
                                t.imageIndex = i;
                            }
                        }
                    }, [e("span", [e("Icon", {
                        attrs: {
                            name: "video" === a.type ? "play" : "zoom-in",
                            size: "30"
                        }
                    })], 1)])], 1)])]);
                }), 0), e("CoolLightBox", {
                    attrs: {
                        items: t.galleryData,
                        index: t.imageIndex
                    },
                    on: {
                        close: function (e) {
                            t.imageIndex = null;
                        }
                    }
                })], 1);
            },
            Fr = [],
            Ur = {
                name: "Gallery",
                components: {
                    Button: lt,
                    Icon: x
                },
                props: {
                    galleryData: {},
                    column: {
                        type: String,
                        default: "col-lg-6 col-md-6 col-12 mt--30"
                    }
                },
                data() {
                    return {
                        imageIndex: null
                    };
                }
            },
            xr = Ur,
            Kr = Object(l.a)(xr, wr, Fr, false, null, null, null),
            Rr = Kr.exports,
            kr = {
                name: "GalleryPage",
                components: {
                    Gallery: Rr,
                    SectionTitle: de,
                    Breadcrumb: Aa,
                    Layout: Zt
                },
                data() {
                    return {
                        galleryData: [{
                            id: 1,
                            thumb: a("4eac"),
                            src: a("4eac"),
                            type: "image"
                        }, {
                            id: 2,
                            thumb: a("605d"),
                            src: "https://www.youtube.com/watch?v=d0tU18Ybcvk",
                            type: "video"
                        }, {
                            id: 3,
                            thumb: a("0edc"),
                            src: a("0edc"),
                            type: "image"
                        }, {
                            id: 4,
                            thumb: a("0513"),
                            src: a("0513"),
                            type: "image"
                        }, {
                            id: 5,
                            thumb: a("c827"),
                            src: a("c827"),
                            type: "image"
                        }, {
                            id: 6,
                            thumb: a("3150"),
                            src: a("3150"),
                            type: "image"
                        }],
                        galleryData3: [{
                            id: 1,
                            thumb: a("4eac"),
                            src: a("4eac"),
                            type: "image"
                        }, {
                            id: 2,
                            thumb: a("605d"),
                            src: "https://www.youtube.com/watch?v=d0tU18Ybcvk",
                            type: "video"
                        }, {
                            id: 3,
                            thumb: a("0edc"),
                            src: a("0edc"),
                            type: "image"
                        }, {
                            id: 4,
                            thumb: a("0513"),
                            src: a("0513"),
                            type: "image"
                        }, {
                            id: 5,
                            thumb: a("0513"),
                            src: a("0513"),
                            type: "image"
                        }, {
                            id: 6,
                            thumb: a("c827"),
                            src: a("c827"),
                            type: "image"
                        }, {
                            id: 7,
                            thumb: a("3150"),
                            src: a("3150"),
                            type: "image"
                        }, {
                            id: 8,
                            thumb: a("4eac"),
                            src: a("4eac"),
                            type: "image"
                        }]
                    };
                }
            },
            Br = kr,
            Sr = Object(l.a)(Br, yr, Cr, false, null, null, null),
            _r = Sr.exports,
            Dr = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("div", {
                    staticClass: "rwt-contact-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mb--40"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Contact Form",
                        title: "Our Contact Address Here"
                    }
                })], 1)]), e("div", {
                    staticClass: "row row--15"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("div", {
                    staticClass: "rn-contact-address mt_dec--30"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-4 col-md-6 col-12"
                }, [e("div", {
                    staticClass: "rn-address"
                }, [e("div", {
                    staticClass: "icon"
                }, [e("Icon", {
                    attrs: {
                        name: "headphones",
                        size: 40
                    }
                })], 1), e("div", {
                    staticClass: "inner"
                }, [e("h4", {
                    staticClass: "title"
                }, [t._v("Contact Phone Number")]), e("p", [e("a", {
                    attrs: {
                        href: "tel:+444 555 666 777"
                    }
                }, [t._v("+444 555 666 777")])]), e("p", [e("a", {
                    attrs: {
                        href: "tel:+222 222 222 333"
                    }
                }, [t._v("+222 222 222 333")])])])])]), e("div", {
                    staticClass: "col-lg-4 col-md-6 col-12"
                }, [e("div", {
                    staticClass: "rn-address"
                }, [e("div", {
                    staticClass: "icon"
                }, [e("Icon", {
                    attrs: {
                        name: "mail",
                        size: 40
                    }
                })], 1), e("div", {
                    staticClass: "inner"
                }, [e("h4", {
                    staticClass: "title"
                }, [t._v("Our Email Address")]), e("p", [e("a", {
                    attrs: {
                        href: "mailto:admin@gmail.com"
                    }
                }, [t._v("admin@gmail.com")])]), e("p", [e("a", {
                    attrs: {
                        href: "mailto:example@gmail.com"
                    }
                }, [t._v("example@gmail.com")])])])])]), e("div", {
                    staticClass: "col-lg-4 col-md-6 col-12"
                }, [e("div", {
                    staticClass: "rn-address"
                }, [e("div", {
                    staticClass: "icon"
                }, [e("Icon", {
                    attrs: {
                        name: "map-pin",
                        size: 40
                    }
                })], 1), e("div", {
                    staticClass: "inner"
                }, [e("h4", {
                    staticClass: "title"
                }, [t._v("Our Location")]), e("p", [t._v("5678 Bangla Main Road, cities 580 "), e("br"), t._v(" GBnagla, example 54786")])])])])])])])]), e("div", {
                    staticClass: "row mt--40 row--15"
                }, [e("div", {
                    staticClass: "col-lg-7"
                }, [e("ContactForm")], 1), e("div", {
                    staticClass: "col-lg-5 mt_md--30 mt_sm--30"
                }, [e("GoogleMap")], 1)])])])]);
            },
            Tr = [],
            Ir = function () {
                var t = this;
                t._self._c;
                return t._m(0);
            },
            Pr = [function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "google-map-style-1"
                }, [e("iframe", {
                    staticStyle: {
                        border: "0"
                    },
                    attrs: {
                        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14554259.179133086!2d-105.54385245388013!3d37.49334218664659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1630777307491!5m2!1sen!2sbd",
                        width: "600",
                        height: "550",
                        allowfullscreen: "",
                        loading: "lazy"
                    }
                })]);
            }],
            Lr = {
                name: "GoogleMap"
            },
            Qr = Lr,
            jr = Object(l.a)(Qr, Ir, Pr, false, null, null, null),
            Wr = jr.exports,
            Mr = function () {
                var t = this,
                    e = t._self._c;
                return e("form", {
                    staticClass: "contact-form-1",
                    attrs: {
                        action: ""
                    },
                    on: {
                        submit: t.sendEmail
                    }
                }, [t._m(0), t._m(1), t._m(2), t._m(3), t._m(4), t._m(5), e("div", {
                    staticClass: "form-group",
                    domProps: {
                        innerHTML: t._s(t.showResult ? t.result : null)
                    }
                })]);
            },
            Or = [function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "form-group"
                }, [e("input", {
                    attrs: {
                        type: "text",
                        name: "fullname",
                        placeholder: "Your Name",
                        required: ""
                    }
                })]);
            }, function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "form-group"
                }, [e("input", {
                    attrs: {
                        type: "email",
                        name: "email",
                        placeholder: "Email Address",
                        required: ""
                    }
                })]);
            }, function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "form-group"
                }, [e("input", {
                    attrs: {
                        type: "text",
                        name: "phone",
                        placeholder: "Phone Number",
                        required: ""
                    }
                })]);
            }, function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "form-group"
                }, [e("input", {
                    attrs: {
                        type: "text",
                        name: "subject",
                        placeholder: "Subject",
                        required: ""
                    }
                })]);
            }, function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "form-group"
                }, [e("textarea", {
                    attrs: {
                        name: "message",
                        placeholder: "Your Message",
                        required: ""
                    }
                })]);
            }, function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "form-group"
                }, [e("button", {
                    staticClass: "btn-default btn-large"
                }, [t._v("Submit Now")])]);
            }],
            Er = {
                name: "ContactForm",
                data() {
                    return {
                        showResult: false,
                        result: '<p class="success-message">Your Message has been successfully sent. I will contact you soon.</p>'
                    };
                },
                methods: {
                    sendEmail() {
                        this.showResult = true;
                    }
                }
            },
            Vr = Er,
            Nr = Object(l.a)(Vr, Mr, Or, false, null, null, null),
            Hr = Nr.exports,
            qr = {
                name: "ContactPage",
                components: {
                    ContactForm: Hr,
                    GoogleMap: Wr,
                    Icon: x,
                    SectionTitle: de,
                    Breadcrumb: Aa,
                    Layout: Zt
                }
            },
            zr = qr,
            Yr = Object(l.a)(zr, Dr, Tr, false, null, null, null),
            Jr = Yr.exports,
            Gr = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("div", {
                    staticClass: "rwt-brand-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Our Awesome Client",
                        title: "Brand Style One",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mt--40"
                }, [e("Brand", {
                    attrs: {
                        "brand-list": t.brandList1
                    }
                })], 1)])])]), e("Separator"), e("div", {
                    staticClass: "rwt-brand-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Our Awesome Client",
                        title: "Brand Style Two",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mt--10"
                }, [e("Brand", {
                    attrs: {
                        "brand-list": t.brandList2,
                        "brand-style": 2
                    }
                })], 1)])])]), e("Separator"), e("div", {
                    staticClass: "rwt-brand-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Our Awesome Client",
                        title: "Brand Style Three",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mt--10"
                }, [e("Brand", {
                    attrs: {
                        "brand-list": t.brandList3,
                        "brand-style": 3
                    }
                })], 1)])])]), e("Separator"), e("div", {
                    staticClass: "rwt-brand-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Our Awesome Client",
                        title: "Brand Style Four",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mt--10"
                }, [e("Brand", {
                    attrs: {
                        "brand-list": t.brandList4,
                        "brand-style": 4
                    }
                })], 1)])])])], 1);
            },
            Xr = [],
            Zr = {
                name: "BrandPage",
                components: {
                    Brand: ea,
                    Separator: se,
                    SectionTitle: de,
                    Breadcrumb: Aa,
                    Layout: Zt
                },
                data() {
                    return {
                        brandList1: [{
                            image: a("704a")
                        }, {
                            image: a("e69f")
                        }, {
                            image: a("99d3")
                        }, {
                            image: a("42f7")
                        }, {
                            image: a("a5f5")
                        }, {
                            image: a("e47b")
                        }, {
                            image: a("d2f2")
                        }, {
                            image: a("66be")
                        }],
                        brandList2: [{
                            image: a("704a")
                        }, {
                            image: a("e69f")
                        }, {
                            image: a("99d3")
                        }, {
                            image: a("42f7")
                        }, {
                            image: a("a5f5")
                        }, {
                            image: a("e47b")
                        }, {
                            image: a("d2f2")
                        }, {
                            image: a("66be")
                        }, {
                            image: a("704a")
                        }, {
                            image: a("e69f")
                        }, {
                            image: a("99d3")
                        }, {
                            image: a("42f7")
                        }, {
                            image: a("a5f5")
                        }, {
                            image: a("e47b")
                        }, {
                            image: a("d2f2")
                        }, {
                            image: a("66be")
                        }, {
                            image: a("d2f2")
                        }, {
                            image: a("66be")
                        }],
                        brandList3: [{
                            image: a("704a")
                        }, {
                            image: a("e69f")
                        }, {
                            image: a("99d3")
                        }, {
                            image: a("42f7")
                        }, {
                            image: a("a5f5")
                        }, {
                            image: a("e47b")
                        }, {
                            image: a("d2f2")
                        }, {
                            image: a("66be")
                        }, {
                            image: a("704a")
                        }],
                        brandList4: [{
                            image: a("704a")
                        }, {
                            image: a("e69f")
                        }, {
                            image: a("99d3")
                        }, {
                            image: a("42f7")
                        }, {
                            image: a("a5f5")
                        }, {
                            image: a("e47b")
                        }, {
                            image: a("d2f2")
                        }]
                    };
                }
            },
            $r = Zr,
            tl = Object(l.a)($r, Gr, Xr, false, null, null, null),
            el = tl.exports,
            al = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("div", {
                    staticClass: "error-area ptb--200 ptb_sm--60 ptb_md--80"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row align-item-center"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("div", {
                    staticClass: "error-inner"
                }, [e("h1", [t._v("404")]), e("h2", {
                    staticClass: "title"
                }, [t._v("Something’s not right.")]), e("p", {
                    staticClass: "description"
                }, [t._v(" By injectedeed eedhumour, or randomised words which don't look even .")]), e("form", {
                    staticClass: "blog-search",
                    attrs: {
                        action: "#"
                    }
                }, [e("input", {
                    attrs: {
                        type: "text",
                        placeholder: "Search Here..."
                    }
                }), e("button", {
                    staticClass: "search-button"
                }, [e("Icon", {
                    attrs: {
                        name: "search",
                        size: "20"
                    }
                })], 1)]), e("div", {
                    staticClass: "view-more-button"
                }, [e("a", {
                    staticClass: "btn-default",
                    attrs: {
                        href: "/"
                    }
                }, [t._v("Go Back Home")])])])])])])])]);
            },
            il = [],
            sl = {
                name: "404",
                components: {
                    Icon: x,
                    Layout: Zt
                }
            },
            ol = sl,
            nl = Object(l.a)(ol, al, il, false, null, null, null),
            rl = nl.exports,
            ll = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("div", {
                    staticClass: "rwt-advance-tab-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row mb--40"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        textAlign: "center",
                        subtitle: "You can Customize All",
                        title: "Advance Tab Style One",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("AdvancedTab", {
                    attrs: {
                        "tab-data": t.tabData
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rwt-advance-tab-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row mb--40"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        textAlign: "center",
                        subtitle: "You can Customize All",
                        title: "Advance Tab Style Two",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("AdvancedTab", {
                    attrs: {
                        "tab-data": t.tabData2,
                        "tab-style": 2
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rwt-advance-tab-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row mb--40"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        textAlign: "center",
                        subtitle: "You can Customize All",
                        title: "Advance Tab Style Three",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("AdvancedTab", {
                    attrs: {
                        "tab-data": t.tabData3,
                        "tab-style": 3
                    }
                })], 1)])], 1);
            },
            cl = [],
            dl = function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    class: ["row row--30 align-items-center", {
                        "flex-row-reverse": 2 === t.tabStyle
                    }, {
                        "flex-column-reverse": 3 === t.tabStyle
                    }]
                }, [e("div", {
                    class: [{
                        "col-lg-4 col-md-12 col-sm-12 col-12 mt_md--30 mt_sm--30": 1 === t.tabStyle || 2 === t.tabStyle
                    }, {
                        "col-lg-10 offset-lg-1 mt--40": 3 === t.tabStyle
                    }]
                }, [e("div", {
                    class: ["advance-tab-button advance-tab-button-1", {
                        "right-align": 2 === t.tabStyle
                    }, {
                        "right-top": 3 === t.tabStyle
                    }]
                }, [e("ul", {
                    class: ["nav nav-tabs tab-button-list", {
                        row: 3 === t.tabStyle
                    }],
                    attrs: {
                        role: "tablist"
                    }
                }, t._l(t.tabData.tabContent, function (a, i) {
                    return e("li", {
                        key: i,
                        class: ["nav-item", {
                            "col-lg-4": 3 === t.tabStyle
                        }],
                        attrs: {
                            role: "presentation"
                        }
                    }, [e("button", {
                        staticClass: "nav-link tab-button",
                        class: {
                            active: 0 === i
                        },
                        attrs: {
                            id: a.menu + "-tab",
                            "data-bs-toggle": "tab",
                            "data-bs-target": "#" + a.menu,
                            type: "button",
                            role: "tab",
                            "aria-controls": a.menu,
                            "aria-selected": i === t.activeTab ? "true" : "false"
                        },
                        on: {
                            click: function (e) {
                                t.activeTab = i;
                            }
                        }
                    }, [e("div", {
                        staticClass: "tab"
                    }, [e("h4", {
                        staticClass: "title"
                    }, [t._v(t._s(a.title))]), e("p", {
                        staticClass: "description"
                    }, [t._v(" " + t._s(a.description) + " ")])])])]);
                }), 0)])]), e("div", {
                    class: [{
                        "col-lg-8 col-md-12 col-sm-12 col-12": 1 === t.tabStyle || 2 === t.tabStyle
                    }, {
                        "col-lg-10 offset-lg-1": 3 === t.tabStyle
                    }]
                }, [e("div", {
                    staticClass: "tab-content"
                }, t._l(t.tabData.tabContent, function (a, i) {
                    return e("div", {
                        key: i,
                        staticClass: "tab-pane fade advance-tab-content-1",
                        class: {
                            "show active": 0 === i
                        },
                        attrs: {
                            id: a.menu,
                            role: "tabpanel",
                            "aria-labelledby": a.menu + "-tab"
                        }
                    }, [e("div", {
                        class: ["thumbnail", {
                            "text-center": 3 === t.tabStyle
                        }]
                    }, [e("img", {
                        attrs: {
                            src: a.image,
                            alt: "Advance tab image"
                        }
                    })])]);
                }), 0)])]);
            },
            pl = [],
            ul = {
                name: "AdvancedTab",
                props: {
                    tabData: {},
                    tabStyle: {
                        type: Number,
                        default: 1
                    }
                },
                data() {
                    return {
                        activeTab: 0
                    };
                }
            },
            ml = ul,
            gl = Object(l.a)(ml, dl, pl, false, null, null, null),
            bl = gl.exports,
            vl = {
                name: "AdvanceTabPage",
                components: {
                    AdvancedTab: bl,
                    Separator: se,
                    SectionTitle: de,
                    Breadcrumb: Aa,
                    Layout: Zt
                },
                data() {
                    return {
                        tabData: {
                            tabContent: [{
                                id: 1,
                                menu: "market-research",
                                title: "Market Research.",
                                description: "Use Doob template you can build a corporate website a short time.",
                                image: a("9ff7")
                            }, {
                                id: 2,
                                menu: "corporate-report",
                                title: "Corporate Report.",
                                description: "Use Doob template you can build a corporate website a short time.",
                                image: a("9f4e")
                            }, {
                                id: 3,
                                menu: "app-development",
                                title: "App Development.",
                                description: "Use Doob template you can build a corporate website a short time.",
                                image: a("bc96")
                            }]
                        },
                        tabData2: {
                            tabContent: [{
                                id: 1,
                                menu: "market-research-2",
                                title: "Market Research.",
                                description: "Use Doob template you can build a corporate website a short time.",
                                image: a("9ff7")
                            }, {
                                id: 2,
                                menu: "corporate-report-2",
                                title: "Corporate Report.",
                                description: "Use Doob template you can build a corporate website a short time.",
                                image: a("9f4e")
                            }, {
                                id: 3,
                                menu: "app-development-2",
                                title: "App Development.",
                                description: "Use Doob template you can build a corporate website a short time.",
                                image: a("bc96")
                            }]
                        },
                        tabData3: {
                            tabContent: [{
                                id: 1,
                                menu: "market-research-3",
                                title: "Market Research.",
                                description: "Use Doob template you can build a corporate website a short time.",
                                image: a("9ff7")
                            }, {
                                id: 2,
                                menu: "corporate-report-3",
                                title: "Corporate Report.",
                                description: "Use Doob template you can build a corporate website a short time.",
                                image: a("9f4e")
                            }, {
                                id: 3,
                                menu: "app-development-3",
                                title: "App Development.",
                                description: "Use Doob template you can build a corporate website a short time.",
                                image: a("bc96")
                            }]
                        }
                    };
                }
            },
            hl = vl,
            fl = Object(l.a)(hl, ll, cl, false, null, null, null),
            Al = fl.exports,
            yl = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("Breadcrumb", {
                    attrs: {
                        "current-url": "Accordion"
                    }
                })], 1);
            },
            Cl = [],
            wl = {
                name: "BrandCarouselPage"
            },
            Fl = wl,
            Ul = Object(l.a)(Fl, yl, Cl, false, null, null, null),
            xl = Ul.exports,
            Kl = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("div", {
                    staticClass: "rwt-pricingtable-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Our Pricing Table",
                        title: "Advance Pricing Table",
                        description: "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row mt--30"
                }, [e("div", {
                    staticClass: "col-lg-8 offset-lg-2"
                }, [e("AdvancePricing")], 1)])])])]);
            },
            Rl = [],
            kl = function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "advance-pricing",
                    attrs: {
                        "data-aos": "fade-up"
                    }
                }, [e("div", {
                    staticClass: "inner"
                }, [e("div", {
                    staticClass: "row row--0"
                }, [e("div", {
                    staticClass: "col-lg-6"
                }, [e("div", {
                    staticClass: "pricing-left"
                }, [e("h3", {
                    staticClass: "main-title"
                }, [t._v("Active Plan Mode.")]), e("p", {
                    staticClass: "description"
                }, [t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quisquam.")]), t._m(0), t._m(1), e("div", {
                    staticClass: "rating"
                }, [e("a", {
                    attrs: {
                        href: "#rating"
                    }
                }, [e("Icon", {
                    attrs: {
                        name: "star"
                    }
                })], 1), e("a", {
                    attrs: {
                        href: "#rating"
                    }
                }, [e("Icon", {
                    attrs: {
                        name: "star"
                    }
                })], 1), e("a", {
                    attrs: {
                        href: "#rating"
                    }
                }, [e("Icon", {
                    attrs: {
                        name: "star"
                    }
                })], 1), e("a", {
                    attrs: {
                        href: "#rating"
                    }
                }, [e("Icon", {
                    attrs: {
                        name: "star"
                    }
                })], 1), e("a", {
                    attrs: {
                        href: "#rating"
                    }
                }, [e("Icon", {
                    attrs: {
                        name: "star"
                    }
                })], 1)]), e("span", {
                    staticClass: "subtitle"
                }, [t._v("rated 4.5/5 Stars in 1000+ reviews.")])])]), e("div", {
                    staticClass: "col-lg-6"
                }, [e("div", {
                    staticClass: "pricing-right"
                }, [e("div", {
                    staticClass: "pricing-offer"
                }, [e("div", {
                    staticClass: "single-list"
                }, [e("h4", {
                    staticClass: "price-title"
                }, [t._v("Advance Plans You can Get.")]), e("ul", {
                    staticClass: "plan-offer-list"
                }, [e("li", [e("Icon", {
                    attrs: {
                        name: "check",
                        size: "18"
                    }
                }), t._v(" 5 PPC Campaigns ")], 1), e("li", [e("Icon", {
                    attrs: {
                        name: "check",
                        size: "18"
                    }
                }), t._v(" Digital Marketing ")], 1), e("li", [e("Icon", {
                    attrs: {
                        name: "check",
                        size: "18"
                    }
                }), t._v(" Marketing Agency ")], 1), e("li", [e("Icon", {
                    attrs: {
                        name: "check",
                        size: "18"
                    }
                }), t._v(" Seo Friendly ")], 1)])]), e("div", {
                    staticClass: "single-list mt--40"
                }, [e("h4", {
                    staticClass: "price-title"
                }, [t._v("Basic Plans Uou can Get.")]), e("ul", {
                    staticClass: "plan-offer-list"
                }, [e("li", [e("Icon", {
                    attrs: {
                        name: "check",
                        size: "18"
                    }
                }), t._v(" 5 PPC Campaigns ")], 1), e("li", [e("Icon", {
                    attrs: {
                        name: "check",
                        size: "18"
                    }
                }), t._v(" Digital Marketing ")], 1), e("li", [e("Icon", {
                    attrs: {
                        name: "check",
                        size: "18"
                    }
                }), t._v(" Marketing Agency ")], 1), e("li", [e("Icon", {
                    attrs: {
                        name: "check",
                        size: "18"
                    }
                }), t._v(" Seo Friendly ")], 1), e("li", [e("Icon", {
                    attrs: {
                        name: "check",
                        size: "18"
                    }
                }), t._v(" App Development ")], 1), e("li", [e("Icon", {
                    attrs: {
                        name: "check",
                        size: "18"
                    }
                }), t._v(" Social Development ")], 1)])])])])])])])]);
            },
            Bl = [function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "price-wrapper"
                }, [e("span", {
                    staticClass: "price-amount"
                }, [t._v("$129 "), e("sup", [t._v("/mo")])])]);
            }, function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "pricing-btn-group"
                }, [e("a", {
                    staticClass: "btn-default",
                    attrs: {
                        href: "#"
                    }
                }, [t._v("Purchase Now")]), e("a", {
                    staticClass: "btn-default btn-border",
                    attrs: {
                        href: "#"
                    }
                }, [t._v("Upgrade")])]);
            }],
            Sl = {
                name: "AdvancePricing",
                components: {
                    Icon: x
                }
            },
            _l = Sl,
            Dl = Object(l.a)(_l, kl, Bl, false, null, null, null),
            Tl = Dl.exports,
            Il = {
                name: "AdvancePricingPage",
                components: {
                    AdvancePricing: Tl,
                    SectionTitle: de,
                    Breadcrumb: Aa,
                    Layout: Zt
                }
            },
            Pl = Il,
            Ll = Object(l.a)(Pl, Kl, Rl, false, null, null, null),
            Ql = Ll.exports,
            jl = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", {
                    attrs: {
                        "header-class": "header-transparent",
                        "footer-style": 3
                    }
                }, [e("div", {
                    staticClass: "slider-area slider-style-1 variation-default height-850 bg_image",
                    style: {
                        "background-image": `url(${a("1449")})`
                    },
                    attrs: {
                        "data-black-overlay": "7"
                    }
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("div", {
                    staticClass: "inner text-center"
                }, [e("span", {
                    staticClass: "subtitle",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "100"
                    }
                }, [t._v(" DIGITAL CONSULTING AGENCY ")]), e("h1", {
                    staticClass: "title display-one",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "150"
                    }
                }, [t._v("Unique Business "), e("span", [t._v("Consulting")]), t._v(".")]), e("p", {
                    staticClass: "description",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "200"
                    }
                }, [t._v(" We help our clients succeed by creating brand identities, digital experiences, and print materials. ")]), e("div", {
                    staticClass: "button-group",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "250"
                    }
                }, [e("a", {
                    staticClass: "btn-default btn-medium round btn-icon",
                    attrs: {
                        href: "#"
                    }
                }, [t._v(" Purchase Now "), e("Icon", {
                    attrs: {
                        name: "arrow-right",
                        size: "20",
                        "icon-class": "icon"
                    }
                })], 1), e("router-link", {
                    staticClass: "btn-default btn-medium btn-border round btn-icon",
                    attrs: {
                        to: "/contact"
                    }
                }, [t._v(" Contact Us "), e("Icon", {
                    attrs: {
                        name: "arrow-right",
                        size: "20",
                        "icon-class": "icon"
                    }
                })], 1)], 1)])])])])]), e("div", {
                    staticClass: "rn-service-area rn-section-gapBottom pt--100"
                }, [e("div", {
                    staticClass: "container"
                }, [e("ServiceOne", {
                    attrs: {
                        "service-style": "service__style--1 icon-circle-style",
                        "text-align": "center",
                        "icon-size": "39"
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rwt-portfolio-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Business Projects",
                        title: "Business Case Studies.!",
                        description: "We provide company and finance service for <br /> startups and company business.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("Portfolio", {
                    attrs: {
                        column: "col-lg-4 col-md-6 col-12 mt--30",
                        "portfolio-data": t.portfolioData
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rwt-timeline-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Working Process",
                        title: "Business Working Process.",
                        description: "We provide company and finance service for <br /> startups and company business."
                    }
                })], 1)]), e("div", {
                    staticClass: "row mt_dec--20"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("Timeline", {
                    attrs: {
                        "timeline-data": t.timelineData
                    }
                })], 1)])])]), e("div", {
                    staticClass: "rwt-video-area rn-section-gapBottom"
                }, [e("div", {
                    staticClass: "container"
                }, [e("Video", {
                    attrs: {
                        "video-data": t.videoData,
                        "video-style": 2,
                        column: "col-lg-12",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rwt-testimonial-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row mb--20"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Client Feedback",
                        title: "Our Clients Feedback.",
                        description: "We provide company and finance service for <br /> startups and company business.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("Testimonial", {
                    attrs: {
                        testimonial: t.testimonialData5,
                        "testimonial-style": 5,
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "blog-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Latest News",
                        title: "Our Latest News.",
                        description: "We provide company and finance service for <br /> startups and company business.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row row--15"
                }, t._l(t.posts, function (a, i) {
                    return i < 3 ? e("div", {
                        key: i,
                        staticClass: "col-lg-4 col-md-6 col-sm-12 col-12 mt--30",
                        attrs: {
                            "data-aos": "slide-up",
                            "data-aos-duration": "800",
                            "data-aos-delay": 100 + i
                        }
                    }, [e("BlogPost", {
                        attrs: {
                            blog: a
                        }
                    })], 1) : t._e();
                }), 0)])]), e("div", {
                    staticClass: "rwt-callto-action-area rn-section-gapBottom"
                }, [e("div", {
                    staticClass: "wrapper"
                }, [e("CallToAction", {
                    attrs: {
                        "style-type": 5,
                        title: "Ready to start creating a standard website?",
                        subtitle: "Finest choice for your home & office",
                        "btn-text": "Purchase Doob"
                    }
                })], 1)])], 1);
            },
            Wl = [],
            Ml = {
                name: "BusinessConsulting",
                components: {
                    ServiceOne: Ie,
                    CallToAction: jt,
                    BlogPost: Xi,
                    Testimonial: bn,
                    Video: Ue,
                    Timeline: Me,
                    Portfolio: Fo,
                    SectionTitle: de,
                    Separator: se,
                    Icon: x,
                    Layout: Zt
                },
                mixins: [Zi],
                data() {
                    return {
                        timelineData: [{
                            id: "1",
                            date: "Step-1",
                            title: "Your working process you can present.",
                            description: "Lorem ipsum dolor sit amet at — consectetur adipisicing elit. Hic, expedita. Incidunt laboriosam.",
                            image: "timeline-01",
                            workingStep: [{
                                stepTitle: "Gain your works",
                                stepDescription: "Lorem ipsum dolor sit amet at consectetur adipisicing"
                            }, {
                                stepTitle: "Working process",
                                stepDescription: "Lorem ipsum dolor sit amet at consectetur adipisicing"
                            }]
                        }, {
                            id: "2",
                            date: "Step-2",
                            title: "Our compnay working process to present.",
                            description: "Lorem ipsum dolor sit amet at — consectetur adipisicing elit. Hic, expedita. Incidunt laboriosam.",
                            image: "timeline-02",
                            workingStep: [{
                                stepTitle: "Follow this process",
                                stepDescription: "Lorem ipsum dolor sit amet at consectetur adipisicing"
                            }, {
                                stepTitle: "Working experience",
                                stepDescription: "Lorem ipsum dolor sit amet at consectetur adipisicing"
                            }]
                        }],
                        videoData: [{
                            thumb: a("54ea"),
                            src: "https://www.youtube.com/watch?v=d0tU18Ybcvk",
                            title: "Watch the creative process behind <br/> the digital marketing."
                        }],
                        testimonialData5: [{
                            form: "Poland",
                            description: "What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client.",
                            name: "John Due",
                            subtitle: "App Developer",
                            image: "testimonial-dark-01"
                        }, {
                            form: "Germany",
                            description: "What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client.",
                            name: "John Due",
                            subtitle: "App Developer",
                            image: "testimonial-dark-02"
                        }, {
                            form: "USA",
                            description: "What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client.",
                            name: "Janen",
                            subtitle: "App Developer",
                            image: "testimonial-dark-03"
                        }],
                        portfolioData: [{
                            id: 1,
                            portfolioImage: a("4eac"),
                            image: a("4eac"),
                            title: "App Development",
                            subtitle: "Branded client",
                            date: "30 May 2021",
                            client: "Rainbow Themes",
                            category: "development",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("4eac"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0edc")
                            }
                        }, {
                            id: 2,
                            portfolioImage: a("605d"),
                            image: a("605d"),
                            title: "Business Development",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2021",
                            client: "Rainbow Themes",
                            category: "design",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("605d"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0edc")
                            }
                        }, {
                            id: 3,
                            portfolioImage: a("0edc"),
                            image: a("0edc"),
                            title: "Photoshop Design",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2021",
                            client: "Rainbow Themes",
                            category: "art",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("0edc"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0edc")
                            }
                        }, {
                            id: 4,
                            portfolioImage: a("0513"),
                            image: a("0513"),
                            title: "Native Application",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2021",
                            client: "Rainbow Themes",
                            category: "development",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("0513"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0513")
                            }
                        }, {
                            id: 5,
                            portfolioImage: a("c827"),
                            image: a("c827"),
                            title: "Vue Development",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2021",
                            client: "Rainbow Themes",
                            category: "design",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("c827"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0edc")
                            }
                        }, {
                            id: 6,
                            portfolioImage: a("3150"),
                            image: a("3150"),
                            title: "App Installment",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2021",
                            client: "Rainbow Themes",
                            category: "design",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("3150"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("3150")
                            }
                        }]
                    };
                }
            },
            Ol = Ml,
            El = Object(l.a)(Ol, jl, Wl, false, null, null, null),
            Vl = El.exports,
            Nl = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", {
                    attrs: {
                        "header-class": "header-left-align",
                        "nav-alignment": "left"
                    }
                }, [e("div", {
                    staticClass: "slider-area slider-style-1 bg-transparent height-850"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("div", {
                    staticClass: "inner text-center"
                }, [e("span", {
                    staticClass: "subtitle",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "100"
                    }
                }, [t._v("DIGITAL CONSULTING AGENCY")]), e("h1", {
                    staticClass: "title theme-gradient display-two",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "150"
                    }
                }, [t._v(" Unique Business "), e("br"), e("vue-typed-js", {
                    staticClass: "justify-content-center",
                    attrs: {
                        strings: ["Finance.", "Consulting.", "Agency."],
                        loop: true,
                        "type-speed": 80,
                        "start-delay": 1e3,
                        "back-speed": 50
                    }
                }, [e("b", {
                    staticClass: "is-visible theme-gradient typing"
                }, [t._v("Finance.")])])], 1), e("p", {
                    staticClass: "description",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "200"
                    }
                }, [t._v(" We help our clients succeed by creating brand identities, digital experiences, and print materials. ")]), e("div", {
                    staticClass: "button-group",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "250"
                    }
                }, [e("router-link", {
                    staticClass: "btn-default btn-medium round btn-icon",
                    attrs: {
                        to: "#"
                    }
                }, [t._v(" Purchase Now "), e("Icon", {
                    attrs: {
                        name: "arrow-right",
                        size: "20",
                        "icon-class": "icon"
                    }
                })], 1), e("router-link", {
                    staticClass: "btn-default btn-medium btn-border round btn-icon",
                    attrs: {
                        to: "/contact"
                    }
                }, [t._v(" Contact Us "), e("Icon", {
                    attrs: {
                        name: "arrow-right",
                        size: "20",
                        "icon-class": "icon"
                    }
                })], 1)], 1)])])])])]), e("Separator"), e("div", {
                    staticClass: "rwt-about-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row row--30 align-items-center"
                }, [e("div", {
                    staticClass: "col-lg-5"
                }, [e("div", {
                    staticClass: "thumbnail",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "250"
                    }
                }, [e("img", {
                    staticClass: "w-100",
                    attrs: {
                        src: a("c543"),
                        alt: "About Images"
                    }
                })])]), e("div", {
                    staticClass: "col-lg-7 mt_md--40 mt_sm--40"
                }, [e("div", {
                    staticClass: "content"
                }, [e("div", {
                    staticClass: "section-title"
                }, [e("h2", {
                    staticClass: "title theme-gradient",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "280"
                    }
                }, [t._v(" Unique Business "), e("br"), e("vue-typed-js", {
                    attrs: {
                        strings: ["Finance.", "Consulting.", "Agency."],
                        loop: true,
                        "type-speed": 80,
                        "start-delay": 1e3,
                        "back-speed": 50
                    }
                }, [e("b", {
                    staticClass: "is-visible theme-gradient typing"
                }, [t._v("Finance.")])])], 1), e("p", {
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "310"
                    }
                }, [t._v(" Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. They live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ")]), e("p", {
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "340"
                    }
                }, [t._v(" A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences ")]), e("div", {
                    staticClass: "read-more-btn mt--40",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "370"
                    }
                }, [e("router-link", {
                    staticClass: "btn-default",
                    attrs: {
                        to: "/about"
                    }
                }, [e("span", [t._v("More About Us")])])], 1)])])])])])]), e("Separator"), e("div", {
                    staticClass: "rn-service-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "What we can do for you",
                        title: "Services provide for you.",
                        description: "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("ServiceFive", {
                    attrs: {
                        "service-style": "gallery-style",
                        "text-align": "left"
                    }
                })], 1)]), e("div", {
                    staticClass: "rwt-callto-action-area"
                }, [e("div", {
                    staticClass: "wrapper"
                }, [e("CallToAction", {
                    attrs: {
                        "style-type": 5,
                        title: "Ready to start creating a standard website?",
                        subtitle: "Finest choice for your home & office",
                        "btn-text": "Purchase Doob"
                    }
                })], 1)]), e("div", {
                    staticClass: "rwt-team-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Our Experts.",
                        title: "Our Company Experts.",
                        description: "We provide company and finance service for <br /> startups and company business.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row row--15"
                }, t._l(t.teamData, function (t, a) {
                    return e("div", {
                        key: a,
                        staticClass: "col-lg-4 col-md-6 col-12"
                    }, [e("Team", {
                        attrs: {
                            "team-member": t,
                            "team-style": 2
                        }
                    })], 1);
                }), 0)])]), e("Separator"), e("div", {
                    staticClass: "rn-company-mission-are rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row row--30"
                }, [e("div", {
                    staticClass: "col-lg-6"
                }, [e("div", {
                    staticClass: "mission-title"
                }, [e("h2", {
                    staticClass: "title theme-gradient",
                    attrs: {
                        "data-aos": "fade-up"
                    }
                }, [t._v(" Unique Mission "), e("br"), e("vue-typed-js", {
                    attrs: {
                        strings: ["Finance.", "Consulting.", "Agency."],
                        loop: true,
                        "type-speed": 80,
                        "start-delay": 1e3,
                        "back-speed": 50
                    }
                }, [e("b", {
                    staticClass: "is-visible typing"
                }, [t._v("Finance.")])])], 1), e("p", {
                    attrs: {
                        "data-aos": "fade-up"
                    }
                }, [t._v(" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia quaerat dolore laboriosam ea minus dignissimos, laudantium odit officia soluta, et deleniti fugit deserunt saepe, velit sapiente obcaecati? Vitae, iusto delectus? ")]), e("p", {
                    attrs: {
                        "data-aos": "fade-up"
                    }
                }, [t._v(" Consectetur adipisicing elit. Quia quaerat dolore laboriosam ea minus dignissimos, laudantium odit officia soluta, et deleniti fugit deserunt saepe, velit sapiente obcaecati? Vitae, iusto delectus? ")]), e("div", {
                    staticClass: "read-more-btn mt--50",
                    attrs: {
                        "data-aos": "fade-up"
                    }
                }, [e("router-link", {
                    staticClass: "btn-default btn-icon",
                    attrs: {
                        to: "#"
                    }
                }, [t._v(" Learn More "), e("Icon", {
                    attrs: {
                        name: "arrow-right",
                        size: "20",
                        "icon-class": "icon"
                    }
                })], 1)], 1)])]), e("div", {
                    staticClass: "col-lg-6 mt_md--30 mt_sm--30"
                }, [e("Accordion", {
                    attrs: {
                        id: "accordionExampleOne",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)])])]), e("Separator"), e("div", {
                    staticClass: "rwt-testimonial-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Client Feedback",
                        title: "Our Awesome Client.",
                        description: "We provide company and finance service for <br /> startups and company business.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("Testimonial", {
                    attrs: {
                        testimonial: t.testimonialData5,
                        "testimonial-style": 5,
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "blog-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Latest News",
                        title: "Our Latest News.",
                        description: "We provide company and finance service for <br /> startups and company business.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row row--15"
                }, t._l(t.posts, function (a, i) {
                    return i < 3 ? e("div", {
                        key: i,
                        staticClass: "col-lg-4 col-md-6 col-sm-12 col-12 mt--30",
                        attrs: {
                            "data-aos": "slide-up",
                            "data-aos-duration": "800",
                            "data-aos-delay": 100 + i
                        }
                    }, [e("BlogPost", {
                        attrs: {
                            blog: a
                        }
                    })], 1) : t._e();
                }), 0)])])], 1);
            },
            Hl = [],
            ql = {
                name: "BusinessConsulting2",
                components: {
                    Accordion: Ti,
                    Testimonial: bn,
                    CallToAction: jt,
                    BlogPost: Xi,
                    Team: ra,
                    ServiceFive: Ja,
                    SectionTitle: de,
                    Icon: x,
                    Separator: se,
                    Layout: Zt
                },
                mixins: [Zi],
                data() {
                    return {
                        teamData: [{
                            image: "team-01",
                            name: "Sr Janen Sara",
                            designation: "Sr Product Designer",
                            location: "CO Miego, AD, USA",
                            description: "Yes, I am a product designer. I have a passion for product design.",
                            socialNetwork: [{
                                icon: "facebook",
                                url: "#"
                            }, {
                                icon: "twitter",
                                url: "#"
                            }, {
                                icon: "instagram",
                                url: "#"
                            }]
                        }, {
                            image: "team-02",
                            name: "Afsana Nila",
                            designation: "App Developer",
                            location: "Bangladesh",
                            description: "Yes, I am a product designer. I have a passion for product design.",
                            socialNetwork: [{
                                icon: "facebook",
                                url: "#"
                            }, {
                                icon: "twitter",
                                url: "#"
                            }, {
                                icon: "instagram",
                                url: "#"
                            }]
                        }, {
                            image: "team-03",
                            name: "Afanan Sifa",
                            designation: "Accounts Manager",
                            location: "Poland",
                            description: "Yes, I am a product designer. I have a passion for product design.",
                            socialNetwork: [{
                                icon: "facebook",
                                url: "#"
                            }, {
                                icon: "twitter",
                                url: "#"
                            }, {
                                icon: "instagram",
                                url: "#"
                            }]
                        }],
                        testimonialData5: [{
                            form: "Poland",
                            description: "What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client.",
                            name: "John Due",
                            subtitle: "App Developer",
                            image: "testimonial-dark-01"
                        }, {
                            form: "Germany",
                            description: "What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client.",
                            name: "John Due",
                            subtitle: "App Developer",
                            image: "testimonial-dark-02"
                        }, {
                            form: "USA",
                            description: "What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client.",
                            name: "Janen",
                            subtitle: "App Developer",
                            image: "testimonial-dark-03"
                        }]
                    };
                }
            },
            zl = ql,
            Yl = Object(l.a)(zl, Nl, Hl, false, null, null, null),
            Jl = Yl.exports,
            Gl = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", {
                    attrs: {
                        "header-transparency": true,
                        "topbar-style": 2,
                        "footer-style": 3,
                        "buy-button-class": "btn-default btn-small"
                    }
                }, [e("div", {
                    staticClass: "slider-area slider-style-2 height-950 bg_image",
                    style: {
                        "background-image": `url(${a("5f80")})`
                    },
                    attrs: {
                        "data-black-overlay": "2"
                    }
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("div", {
                    staticClass: "inner text-left"
                }, [e("h4", {
                    staticClass: "subtitle",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "100"
                    }
                }, [e("span", {
                    staticClass: "theme-gradient"
                }, [t._v("DIGITAL CONSULTING AGENCY")])]), e("h1", {
                    staticClass: "title display-one",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "130"
                    }
                }, [t._v("Join Corporate Meeting.")]), e("ul", {
                    staticClass: "list-icon",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "160"
                    }
                }, [e("li", [e("Icon", {
                    attrs: {
                        name: "check",
                        size: "20",
                        "icon-class": "icon"
                    }
                }), t._v(" Track your teams progress with mobile app. ")], 1), e("li", [e("Icon", {
                    attrs: {
                        name: "check",
                        size: "20",
                        "icon-class": "icon"
                    }
                }), t._v(" Lorem ipsum dolor sit amet consectetur adipisicing. ")], 1), e("li", [e("Icon", {
                    attrs: {
                        name: "check",
                        size: "20",
                        "icon-class": "icon"
                    }
                }), t._v(" Your teams progress with mobile app. ")], 1)]), e("div", {
                    staticClass: "button-group mt--40 mt_sm--20",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "190"
                    }
                }, [e("a", {
                    staticClass: "btn-default btn-icon",
                    attrs: {
                        href: "#"
                    }
                }, [t._v(" Purchase Now "), e("Icon", {
                    attrs: {
                        name: "arrow-right",
                        size: "20",
                        "icon-class": "icon"
                    }
                })], 1)])])])])])]), e("div", {
                    staticClass: "rn-service-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "What we can do for you",
                        title: "Services provide for you.",
                        description: "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("ServiceTwo", {
                    attrs: {
                        "card-style": "card-style-1",
                        "text-align": "left"
                    }
                })], 1)]), e("Separator"), e("about-two"), e("Separator"), e("div", {
                    staticClass: "rwt-counterup-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Clients Feedback",
                        title: "Global Clients Around the World",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("Counter", {
                    attrs: {
                        "counter-style": 2,
                        "text-align": "center",
                        "counter-data": t.counterData,
                        column: "col-lg-4 col-md-6 col-sm-6 col-12"
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rwt-team-area rn-section-gap"
                }, [e("div", {
                    staticClass: "wrapper plr--65 plr_md--15 plr_sm--15"
                }, [e("div", {
                    staticClass: "row mb--20"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Our Experts",
                        title: "Our Experts Team",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row row--15"
                }, t._l(t.teamData, function (t, a) {
                    return e("div", {
                        key: a,
                        staticClass: "col-lg-6 col-xl-3 col-md-6 col-12 mt--30"
                    }, [e("Team", {
                        attrs: {
                            "team-member": t,
                            "team-style": 4
                        }
                    })], 1);
                }), 0)])]), e("Separator"), e("div", {
                    staticClass: "rwt-pricing-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row mb--35"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Pricing",
                        title: "Our Pricing Plan",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("Pricing", {
                    attrs: {
                        "pricing-data": t.pricingData
                    }
                })], 1)]), e("div", {
                    staticClass: "rwt-callto-action-area rn-section-gapBottom"
                }, [e("div", {
                    staticClass: "wrapper"
                }, [e("CallToAction", {
                    attrs: {
                        "style-type": 5,
                        title: "Ready to start creating a standard website?",
                        subtitle: "Finest choice for your home & office",
                        "btn-text": "Purchase Doob"
                    }
                })], 1)])], 1);
            },
            Xl = [],
            Zl = function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "rwt-about-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row row--30 align-items-center"
                }, [t._m(0), e("div", {
                    staticClass: "col-lg-7 mt_md--40 mt_sm--40"
                }, [e("div", {
                    staticClass: "content"
                }, [e("div", {
                    staticClass: "section-title"
                }, [t._m(1), e("h2", {
                    staticClass: "title mt--10",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "310"
                    }
                }, [t._v("About Our Business.")]), e("p", {
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "310"
                    }
                }, [t._v(" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quod autem sequi reprehenderit labore consequuntur excepturi voluptatibus omnis similique qui unde eligendi tempora, ea at, laudantium nostrum minus pariatur quasi! ")]), e("ul", {
                    staticClass: "list-icon",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "340"
                    }
                }, [e("li", [e("Icon", {
                    attrs: {
                        name: "check",
                        size: "20",
                        "icon-class": "icon d-inline-flex align-items-center justify-content-center"
                    }
                }), t._v(" Track your teams progress with mobile app. ")], 1), e("li", [e("Icon", {
                    attrs: {
                        name: "check",
                        size: "20",
                        "icon-class": "icon d-inline-flex align-items-center justify-content-center"
                    }
                }), t._v(" Lorem ipsum dolor sit amet consectetur adipisicing. ")], 1), e("li", [e("Icon", {
                    attrs: {
                        name: "check",
                        size: "20",
                        "icon-class": "icon d-inline-flex align-items-center justify-content-center"
                    }
                }), t._v(" Ipsum dolor sit amet consectetur adipisicing. ")], 1), e("li", [e("Icon", {
                    attrs: {
                        name: "check",
                        size: "20",
                        "icon-class": "icon d-inline-flex align-items-center justify-content-center"
                    }
                }), t._v(" Your teams progress with mobile app. ")], 1)]), e("div", {
                    staticClass: "read-more-btn mt--40",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "370"
                    }
                }, [e("router-link", {
                    staticClass: "btn-default btn-icon",
                    attrs: {
                        to: "/about"
                    }
                }, [t._v(" More About Us "), e("Icon", {
                    attrs: {
                        name: "arrow-right",
                        size: "20",
                        "icon-class": "icon"
                    }
                })], 1)], 1)])])])])])]);
            },
            $l = [function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "col-lg-5"
                }, [e("div", {
                    staticClass: "thumbnail",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "250"
                    }
                }, [e("img", {
                    staticClass: "w-100",
                    attrs: {
                        src: a("c543"),
                        alt: "About Images"
                    }
                })])]);
            }, function () {
                var t = this,
                    e = t._self._c;
                return e("h4", {
                    staticClass: "subtitle",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "280"
                    }
                }, [e("span", {
                    staticClass: "theme-gradient"
                }, [t._v("Corporate About.")])]);
            }],
            tc = {
                name: "AboutTwo",
                components: {
                    Icon: x
                }
            },
            ec = tc,
            ac = Object(l.a)(ec, Zl, $l, false, null, null, null),
            ic = ac.exports,
            sc = {
                name: "Corporate",
                components: {
                    ServiceTwo: _a,
                    AboutTwo: ic,
                    CallToAction: jt,
                    Pricing: Hn,
                    Team: ra,
                    Counter: Je,
                    Separator: se,
                    ServiceThree: Qa,
                    SectionTitle: de,
                    Icon: x,
                    Layout: Zt
                },
                data() {
                    return {
                        counterData: [{
                            number: 199,
                            title: "Happy Clients",
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                        }, {
                            number: 575,
                            title: "Employees",
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                        }, {
                            number: 69,
                            title: "Useful Programs",
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                        }],
                        teamData: [{
                            image: "team-dark-01",
                            name: "Sr Janen Sara",
                            designation: "Sr Product Designer",
                            location: "CO Miego, AD, USA",
                            description: "Yes, I am a product designer. I have a passion for product design."
                        }, {
                            image: "team-dark-02",
                            name: "Corporate Jane",
                            designation: "Manager",
                            location: "Bangladesh",
                            description: "Yes, I am a product designer. I have a passion for product design."
                        }, {
                            image: "team-dark-03",
                            name: "Jara Saraif",
                            designation: "Software Developer",
                            location: "Poland",
                            description: "Yes, I am a product designer. I have a passion for product design."
                        }, {
                            image: "team-dark-04",
                            name: "Afanan Sifa",
                            designation: "Accounts Manager",
                            location: "Poland",
                            description: "Yes, I am a product designer. I have a passion for product design."
                        }],
                        pricingData: [{
                            title: "Free",
                            currency: "$",
                            price: "29",
                            subtitle: "USD Per Month",
                            features: [{
                                title: "5 PPC Campaigns"
                            }, {
                                title: "Digital Marketing"
                            }, {
                                title: "Marketing Agency"
                            }, {
                                title: "Seo Friendly"
                            }, {
                                title: "UI/UX designs"
                            }],
                            btn: {
                                text: "Purchase Now",
                                link: "#"
                            }
                        }, {
                            title: "Business",
                            currency: "$",
                            price: "50",
                            subtitle: "USD Per Month",
                            features: [{
                                title: "5 PPC Campaigns"
                            }, {
                                title: "Keep 100% Royalties"
                            }, {
                                title: "App Development"
                            }, {
                                title: "Seo Friendly"
                            }, {
                                title: "UI/UX designs"
                            }],
                            btn: {
                                text: "Purchase Now",
                                link: "#"
                            },
                            isActive: true
                        }, {
                            title: "Advanced",
                            currency: "$",
                            price: "100",
                            subtitle: "USD Per Month",
                            features: [{
                                title: "5 PPC Campaigns"
                            }, {
                                title: "SEO Marketing"
                            }, {
                                title: "Marketing Agency"
                            }, {
                                title: "Seo Friendly"
                            }, {
                                title: "Application Manage"
                            }],
                            btn: {
                                text: "Purchase Now",
                                link: "#"
                            }
                        }]
                    };
                }
            },
            oc = sc,
            nc = Object(l.a)(oc, Gl, Xl, false, null, null, null),
            rc = nc.exports,
            lc = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", {
                    attrs: {
                        "header-class": "header-left-align",
                        "nav-alignment": "left",
                        "footer-style": 2,
                        "buy-button-class": "btn-default btn-small"
                    }
                }, [e("div", {
                    staticClass: "slider-area slider-style-3 height-850"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row row--30 align-items-center"
                }, [e("div", {
                    staticClass: "order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30"
                }, [e("div", {
                    staticClass: "inner text-left"
                }, [e("h1", {
                    staticClass: "title theme-gradient",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "100"
                    }
                }, [t._v("Trending "), e("br"), t._v("Business ")]), e("p", {
                    staticClass: "description",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "130"
                    }
                }, [t._v(" We help our clients succeed by creating brand identities, digital experiences, and print materials. ")]), e("div", {
                    staticClass: "button-group mt--30 mt_sm--20",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "160"
                    }
                }, [e("a", {
                    staticClass: "btn-default btn-medium btn-icon",
                    attrs: {
                        href: "#"
                    }
                }, [t._v(" Purchase Now "), e("Icon", {
                    attrs: {
                        name: "arrow-right",
                        size: "20",
                        "icon-class": "icon"
                    }
                })], 1)])])]), e("div", {
                    staticClass: "order-1 order-lg-2 col-lg-5",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "100"
                    }
                }, [e("div", {
                    staticClass: "thumbnail"
                }, [e("img", {
                    attrs: {
                        src: a("b099"),
                        alt: "Banner Images"
                    }
                })])])])])]), e("Separator"), e("div", {
                    staticClass: "rwt-tab-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row mb--40"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Companies About",
                        title: "What About Our Companies",
                        description: "We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("Tab", {
                    attrs: {
                        "tab-data": t.tabData
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rwt-timeline-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Timeline",
                        title: "Working Process",
                        description: "We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-10 offset-lg-1 mt--50"
                }, [e("Timeline", {
                    attrs: {
                        "timeline-data": t.timelineData,
                        "timeline-style": 4
                    }
                })], 1)])])]), e("Separator"), e("div", {
                    staticClass: "rwt-about-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row row--30"
                }, [e("div", {
                    staticClass: "col-lg-5"
                }, [e("div", {
                    staticClass: "thumbnail",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "250"
                    }
                }, [e("img", {
                    staticClass: "w-100",
                    attrs: {
                        src: a("c543"),
                        alt: "About Images"
                    }
                })])]), e("div", {
                    staticClass: "col-lg-7 mt_md--40 mt_sm--40"
                }, [e("div", {
                    staticClass: "content"
                }, [e("SectionTitle", {
                    attrs: {
                        subtitle: "WORKFLOW INTEGRATION",
                        title: "Companies Platform.",
                        "data-aos": "fade-up"
                    }
                }), e("accordion", {
                    attrs: {
                        id: "accordionExampleOne",
                        "data-aos": "fade-up",
                        "data-aos-delay": "60"
                    }
                })], 1)])])])]), e("Separator"), e("div", {
                    staticClass: "rwt-pricing-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row mb--35"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Our Pricing Plan",
                        title: "Business Pricing Plan",
                        description: "We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("Pricing", {
                    attrs: {
                        "pricing-data": t.pricingData,
                        "pricing-style": 3
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "blog-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Latest News",
                        title: "Our Latest News",
                        description: "We provide company and finance service for <br /> startups and company business",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row row--15"
                }, t._l(t.posts, function (a, i) {
                    return i < 3 ? e("div", {
                        key: i,
                        staticClass: "col-lg-4 col-md-6 col-sm-12 col-12 mt--30",
                        attrs: {
                            "data-aos": "slide-up",
                            "data-aos-duration": "800",
                            "data-aos-delay": 100 + i
                        }
                    }, [e("BlogPost", {
                        attrs: {
                            blog: a
                        }
                    })], 1) : t._e();
                }), 0)])])], 1);
            },
            cc = [],
            dc = {
                name: "Business",
                components: {
                    BlogPost: Xi,
                    Pricing: Hn,
                    Accordion: Ti,
                    Timeline: Me,
                    Tab: Tn,
                    SectionTitle: de,
                    Separator: se,
                    Icon: x,
                    Layout: Zt
                },
                mixins: [Zi],
                data() {
                    return {
                        tabData: {
                            tabImage: "tabs-01.jpg",
                            tabContent: [{
                                id: 1,
                                menu: "strategy",
                                content: "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p><p>Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p>"
                            }, {
                                id: 2,
                                menu: "reporting",
                                content: "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p><p>Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p>"
                            }, {
                                id: 3,
                                menu: "development",
                                content: "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p><p>Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p>"
                            }]
                        },
                        timelineData: [{
                            id: "1",
                            title: "Knowledge",
                            description: "Present all available features in Essentials."
                        }, {
                            id: "2",
                            title: "Working",
                            description: "All Feature available features in Essentials."
                        }, {
                            id: "3",
                            title: "Solution",
                            description: "Popular Feature available features in Essentials."
                        }, {
                            id: "4",
                            title: "Process",
                            description: "Latest Feature available features in Essentials."
                        }],
                        pricingData: [{
                            title: "Free",
                            currency: "$",
                            price: "29",
                            subtitle: "USD Per Month",
                            features: [{
                                title: "5 PPC Campaigns"
                            }, {
                                title: "Digital Marketing"
                            }, {
                                title: "Marketing Agency"
                            }, {
                                title: "Seo Friendly"
                            }, {
                                title: "UI/UX designs"
                            }],
                            btn: {
                                text: "Purchase Now",
                                link: "#"
                            }
                        }, {
                            title: "Business",
                            currency: "$",
                            price: "50",
                            subtitle: "USD Per Month",
                            features: [{
                                title: "5 PPC Campaigns"
                            }, {
                                title: "Keep 100% Royalties"
                            }, {
                                title: "App Development"
                            }, {
                                title: "Seo Friendly"
                            }, {
                                title: "UI/UX designs"
                            }],
                            btn: {
                                text: "Purchase Now",
                                link: "#"
                            },
                            isActive: true
                        }]
                    };
                }
            },
            pc = dc,
            uc = Object(l.a)(pc, lc, cc, false, null, null, null),
            mc = uc.exports,
            gc = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", {
                    attrs: {
                        "header-class": "header-left-align",
                        "nav-alignment": "left",
                        "header-transparency": true,
                        "show-top-header": false,
                        "buy-button-class": "btn-default btn-small"
                    }
                }, [e("div", {
                    staticClass: "slider-area slider-style-4 slider-dot rn-slick-dot rn-slick-arrow"
                }, [e("VueSlickCarousel", t._b({}, "VueSlickCarousel", t.sliderSetting, false), t._l(t.sliderData, function (i, s) {
                    return e("div", {
                        key: s,
                        staticClass: "single-slide"
                    }, [e("div", {
                        staticClass: "height-950 bg-overlay bg_image",
                        style: {
                            "background-image": `url(${a("90d3")(`./${i.image}.jpg`)})`
                        }
                    }, [e("div", {
                        staticClass: "container"
                    }, [e("div", {
                        staticClass: "row row--30 align-items-center"
                    }, [e("div", {
                        staticClass: "order-2 order-lg-1 col-lg-7"
                    }, [e("div", {
                        staticClass: "inner text-start"
                    }, [e("h1", {
                        staticClass: "title",
                        domProps: {
                            innerHTML: t._s(i.title)
                        }
                    }), e("p", {
                        staticClass: "description",
                        domProps: {
                            innerHTML: t._s(i.description)
                        }
                    }), e("div", {
                        staticClass: "button-group mt--30"
                    }, [e("a", {
                        staticClass: "btn-default",
                        attrs: {
                            href: "#"
                        }
                    }, [t._v(" PURCHASE NOW ")])])])])])])])]);
                }), 0)], 1), e("div", {
                    staticClass: "rn-service-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "About Our Company.",
                        title: "Services provide for you.",
                        description: "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("ServiceFive", {
                    attrs: {
                        "service-style": "gallery-style",
                        "text-align": "left"
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rwt-portfolio-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Why Choose Us",
                        title: "Companies Choose us!",
                        description: "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("Portfolio", {
                    attrs: {
                        "portfolio-data": t.portfolioData
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rwt-progressbar-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row mb--25"
                }, [e("div", {
                    staticClass: "col-lg-10 offset-lg-1"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Our Expertise",
                        title: "Companies Expertise",
                        description: "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-10 offset-lg-1"
                }, [e("Progressbar", {
                    attrs: {
                        "progress-data": t.progressCircleData,
                        "progress-style": 5,
                        column: "col-lg-3 col-md-6 col-sm-6 mt--30 col-12"
                    }
                })], 1)])])]), e("Separator"), e("div", {
                    staticClass: "rwt-testimonial-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Client Feedback",
                        title: "What People Are Saying",
                        description: "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row row--15"
                }, t._l(t.testimonialData, function (t, a) {
                    return e("div", {
                        key: a,
                        staticClass: "col-lg-4 col-md-6 col-12"
                    }, [e("Testimonial", {
                        attrs: {
                            testimonial: t,
                            "testimonial-style": 2
                        }
                    })], 1);
                }), 0)])]), e("Separator"), e("div", {
                    staticClass: "blog-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Get The Latest News",
                        title: "What Our Trending News",
                        description: "We provide company and finance service for <br /> startups and company business",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row row--15"
                }, t._l(t.posts, function (a, i) {
                    return i < 3 ? e("div", {
                        key: i,
                        staticClass: "col-lg-4 col-md-6 col-sm-12 col-12 mt--30",
                        attrs: {
                            "data-aos": "slide-up",
                            "data-aos-duration": "800",
                            "data-aos-delay": 100 + i
                        }
                    }, [e("BlogPost", {
                        attrs: {
                            blog: a
                        }
                    })], 1) : t._e();
                }), 0)])])], 1);
            },
            bc = [],
            vc = {
                name: "DigitalAgency",
                components: {
                    Progressbar: Ci,
                    ServiceFive: Ja,
                    Portfolio: Fo,
                    Testimonial: bn,
                    BlogPost: Xi,
                    Separator: se,
                    SectionTitle: de,
                    Layout: Zt,
                    VueSlickCarousel: pn.a
                },
                mixins: [Zi],
                data() {
                    return {
                        sliderSetting: {
                            infinite: true,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                            arrows: true,
                            responsive: [{
                                breakpoint: 800,
                                settings: {
                                    slidesToShow: 1
                                }
                            }, {
                                breakpoint: 993,
                                settings: {
                                    slidesToShow: 1
                                }
                            }, {
                                breakpoint: 580,
                                settings: {
                                    slidesToShow: 1
                                }
                            }, {
                                breakpoint: 481,
                                settings: {
                                    slidesToShow: 1
                                }
                            }]
                        },
                        sliderData: [{
                            image: "bg-image-6",
                            title: "Digital Agency.",
                            description: "We help our clients succeed by creating brand identities, digital experiences, and print materials."
                        }, {
                            image: "bg-image-14",
                            title: "Creative Agency.",
                            description: "We help our clients succeed by creating brand identities, digital experiences, and print materials."
                        }, {
                            image: "bg-image-15",
                            title: "Startup Agency.",
                            description: "We help our clients succeed by creating brand identities, digital experiences, and print materials."
                        }],
                        testimonialData: [{
                            image: "testimonial-01",
                            name: "Sr Janen Sara",
                            designation: "Sr Product Designer",
                            location: "CO Miego, AD, USA",
                            description: "“Proin libero vel lorem dui lupus est aliquet luctus purus justo eget libero sed lorem.„"
                        }, {
                            image: "testimonial-02",
                            name: "Afsana Nila",
                            designation: "App Developer",
                            location: "Bangladesh",
                            description: "“Proin libero vel lorem dui lupus est aliquet luctus purus justo eget libero sed lorem.„"
                        }, {
                            image: "testimonial-03",
                            name: "Afanan Sifa",
                            designation: "Accounts Manager",
                            location: "Poland",
                            description: "“Proin libero vel lorem dui lupus est aliquet luctus purus justo eget libero sed lorem.„"
                        }],
                        progressCircleData: [{
                            id: 1,
                            title: "Design",
                            percentage: 85,
                            subtitle: "Presentation your skill",
                            strokeColor: "#0f0f11",
                            strokePath: "#059DFF"
                        }, {
                            id: 2,
                            title: "Photoshop",
                            percentage: 60,
                            subtitle: "Presentation your skill",
                            strokeColor: "#0f0f11",
                            strokePath: "#059DFF"
                        }, {
                            id: 3,
                            title: "Application",
                            percentage: 70,
                            subtitle: "Presentation your skill",
                            strokeColor: "#0f0f11",
                            strokePath: "#059DFF"
                        }, {
                            id: 4,
                            title: "Development",
                            percentage: 95,
                            subtitle: "Presentation your skill",
                            strokeColor: "#0f0f11",
                            strokePath: "#059DFF"
                        }],
                        portfolioData: [{
                            id: 1,
                            portfolioImage: a("4eac"),
                            image: a("4eac"),
                            title: "App Development",
                            subtitle: "Branded client",
                            date: "30 May 2021",
                            client: "Rainbow Themes",
                            category: "development",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("4eac"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0edc")
                            }
                        }, {
                            id: 2,
                            portfolioImage: a("605d"),
                            image: a("605d"),
                            title: "Business Development",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2021",
                            client: "Rainbow Themes",
                            category: "design",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("605d"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0edc")
                            }
                        }, {
                            id: 3,
                            portfolioImage: a("0edc"),
                            image: a("0edc"),
                            title: "Photoshop Design",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2021",
                            client: "Rainbow Themes",
                            category: "art",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("0edc"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0edc")
                            }
                        }, {
                            id: 4,
                            portfolioImage: a("0513"),
                            image: a("0513"),
                            title: "Native Application",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2021",
                            client: "Rainbow Themes",
                            category: "development",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("0513"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0513")
                            }
                        }, {
                            id: 5,
                            portfolioImage: a("c827"),
                            image: a("c827"),
                            title: "Vue Development",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2021",
                            client: "Rainbow Themes",
                            category: "design",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("c827"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0edc")
                            }
                        }, {
                            id: 6,
                            portfolioImage: a("3150"),
                            image: a("3150"),
                            title: "App Installment",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2021",
                            client: "Rainbow Themes",
                            category: "design",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("3150"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("3150")
                            }
                        }]
                    };
                }
            },
            hc = vc,
            fc = Object(l.a)(hc, gc, bc, false, null, null, null),
            Ac = fc.exports,
            yc = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", {
                    attrs: {
                        "header-class": "header-left-align",
                        "nav-alignment": "left",
                        "buy-button-class": "btn-default btn-small"
                    }
                }, [e("div", {
                    staticClass: "slider-area slider-style-5 bg-overlay-solid height-850 bg_image",
                    style: {
                        "background-image": `url(${a("a445")})`
                    },
                    attrs: {
                        "data-black-overlay": "3"
                    }
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("div", {
                    staticClass: "inner text-left"
                }, [e("h4", {
                    staticClass: "subtitle",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "100"
                    }
                }, [t._v("MEET CONSULTING")]), e("h1", {
                    staticClass: "title display-one",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "150"
                    }
                }, [t._v("Financial Analysis "), e("br"), t._v("Developing Meeting.")]), e("div", {
                    staticClass: "button-group mt--40 mt_sm--20",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "200"
                    }
                }, [e("a", {
                    staticClass: "btn-default",
                    attrs: {
                        href: "#"
                    }
                }, [t._v(" BUY DOOB NOW ")])])])])])])]), e("CallToAction", {
                    attrs: {
                        "style-type": 6,
                        title: "Ready to start creating a standard website?",
                        "btn-text": "Purchase Doob"
                    }
                }), e("Separator"), e("div", {
                    staticClass: "rn-service-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "What we can do for you",
                        title: "Services provide for you",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("ServiceOne", {
                    attrs: {
                        "service-style": "service__style--1 bg-color-blackest radius mt--25 rbt-border",
                        "icon-size": "62",
                        "text-align": "left"
                    }
                })], 1)]), e("Separator"), e("about-two"), e("div", {
                    staticClass: "rwt-split-area"
                }, [e("div", {
                    staticClass: "wrapper"
                }, [e("Split", {
                    attrs: {
                        "split-data": t.splitData,
                        "split-style": 3
                    }
                })], 1)]), e("div", {
                    staticClass: "rwt-elements-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mb--10"
                }, [e("SectionTitle", {
                    attrs: {
                        textAlign: "center",
                        subtitle: "Client Feedback",
                        title: "What People Say About Us",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row row--15"
                }, t._l(t.testimonialData, function (t, a) {
                    return e("div", {
                        key: a,
                        staticClass: "col-lg-4 col-md-6 col-12"
                    }, [e("Testimonial", {
                        attrs: {
                            testimonial: t,
                            "testimonial-style": 3
                        }
                    })], 1);
                }), 0)])]), e("Separator"), e("div", {
                    staticClass: "blog-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Latest News",
                        title: "Our Latest News",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row row--15"
                }, t._l(t.posts, function (a, i) {
                    return i < 3 ? e("div", {
                        key: i,
                        staticClass: "col-lg-4 col-md-6 col-sm-12 col-12 mt--30",
                        attrs: {
                            "data-aos": "slide-up",
                            "data-aos-duration": "800",
                            "data-aos-delay": 100 + i
                        }
                    }, [e("BlogPost", {
                        attrs: {
                            blog: a
                        }
                    })], 1) : t._e();
                }), 0)])])], 1);
            },
            Cc = [],
            wc = {
                name: "Finance",
                components: {
                    Testimonial: bn,
                    Split: ir,
                    AboutTwo: ic,
                    ServiceOne: Ie,
                    CallToAction: jt,
                    BlogPost: Xi,
                    SectionTitle: de,
                    Separator: se,
                    Layout: Zt
                },
                mixins: [Zi],
                data() {
                    return {
                        splitData: {
                            image: "split-03.jpg",
                            title: "Continue Your Business With Us.",
                            description: "Randomised words which don't look even slightly believable. If you are to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. in some form, by injectedeed bedhumour, or randomised even .",
                            counterData: [{
                                number: 199,
                                title: "Happy Clients"
                            }, {
                                number: 575,
                                title: "Employees"
                            }, {
                                number: 69,
                                title: "Useful Programs"
                            }, {
                                number: 500,
                                title: "Useful Programs"
                            }]
                        },
                        testimonialData: [{
                            image: "testimonial-01",
                            name: "Sr Janen Sara",
                            designation: "Sr Product Designer",
                            location: "CO Miego, AD, USA",
                            description: "“Proin libero vel lorem dui lupus est aliquet luctus purus justo eget libero sed lorem.„"
                        }, {
                            image: "testimonial-02",
                            name: "Afsana Nila",
                            designation: "App Developer",
                            location: "Bangladesh",
                            description: "“Proin libero vel lorem dui lupus est aliquet luctus purus justo eget libero sed lorem.„"
                        }, {
                            image: "testimonial-03",
                            name: "Afanan Sifa",
                            designation: "Accounts Manager",
                            location: "Poland",
                            description: "“Proin libero vel lorem dui lupus est aliquet luctus purus justo eget libero sed lorem.„"
                        }]
                    };
                }
            },
            Fc = wc,
            Uc = Object(l.a)(Fc, yc, Cc, false, null, null, null),
            xc = Uc.exports,
            Kc = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", [e("div", {
                    staticClass: "slider-area slider-style-1 bg-transparent height-750"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row align-items-center"
                }, [e("div", {
                    staticClass: "col-lg-7 col-xl-6 order-2 order-lg-1 mt_md--40 mt_sm--40"
                }, [e("div", {
                    staticClass: "inner text-left"
                }, [e("span", {
                    staticClass: "subtitle",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "100"
                    }
                }, [t._v(" DIGITAL CONSULTING AGENCY ")]), e("h1", {
                    staticClass: "title theme-gradient display-one",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "150"
                    }
                }, [t._v(" Doob Company. ")]), e("ul", {
                    staticClass: "list-icon",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "200"
                    }
                }, [e("li", [e("Icon", {
                    attrs: {
                        name: "check",
                        size: "20",
                        "icon-class": "icon d-inline-flex align-items-center justify-content-center"
                    }
                }), t._v(" Track your teams progress with mobile app. ")], 1), e("li", [e("Icon", {
                    attrs: {
                        name: "check",
                        size: "20",
                        "icon-class": "icon d-inline-flex align-items-center justify-content-center"
                    }
                }), t._v(" Lorem ipsum dolor sit amet consectetur adipisicing. ")], 1), e("li", [e("Icon", {
                    attrs: {
                        name: "check",
                        size: "20",
                        "icon-class": "icon d-inline-flex align-items-center justify-content-center"
                    }
                }), t._v(" Your teams progress with mobile app. ")], 1)]), e("div", {
                    staticClass: "button-group mt--40",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "250"
                    }
                }, [e("a", {
                    staticClass: "btn-default btn-medium round btn-icon",
                    attrs: {
                        href: "#"
                    }
                }, [t._v(" Purchase Now "), e("Icon", {
                    attrs: {
                        name: "arrow-right",
                        size: "20",
                        "icon-class": "icon"
                    }
                })], 1), e("router-link", {
                    staticClass: "btn-default btn-medium btn-border round btn-icon",
                    attrs: {
                        to: "/contact"
                    }
                }, [t._v(" Contact Us "), e("Icon", {
                    attrs: {
                        name: "arrow-right",
                        size: "20",
                        "icon-class": "icon"
                    }
                })], 1)], 1)])]), e("div", {
                    staticClass: "col-lg-5 col-xl-6 order-1 order-lg-2"
                }, [e("div", {
                    staticClass: "frame-image",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "100"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("4093"),
                        alt: "Banner Images"
                    }
                })])])])])]), e("div", {
                    staticClass: "service-area rn-section-gapBottom"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row align-items-center"
                }, [e("div", {
                    staticClass: "col-lg-6"
                }, [e("div", {
                    staticClass: "content"
                }, [e("h3", {
                    staticClass: "title"
                }, [t._v("We are creative digital agency working for our company brands.")])])]), e("div", {
                    staticClass: "col-lg-6"
                }, [e("p", {
                    staticClass: "mb--10"
                }, [t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quis. Ullam accusantium dignissimos repellendus nemo fugiat numquam, nisi odio adipisci. Veniam neque itaque expedita officiis rem ipsa! Ratione, rem reiciendis? ")]), e("div", {
                    staticClass: "readmore-btn"
                }, [e("router-link", {
                    staticClass: "btn-read-more",
                    attrs: {
                        to: "#"
                    }
                }, [e("span", [t._v("View More")])])], 1)])])])]), e("Separator"), e("div", {
                    staticClass: "rn-service-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "What we can do for you",
                        title: "Services provide for you",
                        description: "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("ServiceOne", {
                    attrs: {
                        "service-style": "service__style--1 icon-circle-style",
                        "text-align": "center",
                        "icon-size": "39"
                    }
                })], 1)]), e("Split", {
                    attrs: {
                        "split-data": t.splitData
                    }
                }), e("div", {
                    staticClass: "rwt-portfolio-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Our Project",
                        title: "Why People Choose Us!",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("Portfolio", {
                    attrs: {
                        "portfolio-data": t.portfolioData
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rwt-team-area rn-section-gap"
                }, [e("div", {
                    staticClass: "wrapper plr--65"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Our Experts",
                        title: "Companies Team",
                        description: "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row row--15"
                }, t._l(t.teamData, function (t, a) {
                    return e("div", {
                        key: a,
                        staticClass: "col-lg-6 col-xl-3 col-md-6 col-12 mt--30"
                    }, [e("Team", {
                        attrs: {
                            "team-member": t,
                            "team-style": 4
                        }
                    })], 1);
                }), 0)])]), e("div", {
                    staticClass: "rwt-brand-area pb--80"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("div", {
                    staticClass: "section-title text-center",
                    attrs: {
                        "data-aos": "fade-up"
                    }
                }, [e("h3", {
                    staticClass: "title"
                }, [t._v("Our Awesome Customer Relation Build a "), e("br"), t._v(" Long Term Relationship.")])])])]), e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mt--10"
                }, [e("Brand", {
                    attrs: {
                        "brand-list": t.brandList2,
                        "brand-style": 2
                    }
                })], 1)])])])], 1);
            },
            Rc = [],
            kc = {
                name: "Company",
                components: {
                    Brand: ea,
                    Team: ra,
                    Portfolio: Fo,
                    Split: ir,
                    ServiceOne: Ie,
                    SectionTitle: de,
                    Icon: x,
                    Separator: se,
                    Layout: Zt
                },
                data() {
                    return {
                        splitData: {
                            image: "split-01.jpg",
                            title: "What is DOOB?",
                            description: "Randomised words which don't look even slightly believable. If you are to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. in some form, by injectedeed bedhumour, or randomised even .",
                            list: ["- Doug DeMarco, Design Prototyping Manager", "- 108 million paying subscribers", "- Over 1.7 billion hours of music played monthly", "- 4,000+ employees working across 16 offices"],
                            btn: {
                                text: "Contact With Us",
                                link: "/contact"
                            }
                        },
                        teamData: [{
                            image: "team-dark-01",
                            name: "Sr Janen Sara",
                            designation: "Sr Product Designer",
                            location: "CO Miego, AD, USA",
                            description: "Yes, I am a product designer. I have a passion for product design."
                        }, {
                            image: "team-dark-02",
                            name: "Corporate Jane",
                            designation: "Manager",
                            location: "Bangladesh",
                            description: "Yes, I am a product designer. I have a passion for product design."
                        }, {
                            image: "team-dark-03",
                            name: "Jara Saraif",
                            designation: "Software Developer",
                            location: "Poland",
                            description: "Yes, I am a product designer. I have a passion for product design."
                        }, {
                            image: "team-dark-04",
                            name: "Afanan Sifa",
                            designation: "Accounts Manager",
                            location: "Poland",
                            description: "Yes, I am a product designer. I have a passion for product design."
                        }],
                        brandList2: [{
                            image: a("704a")
                        }, {
                            image: a("e69f")
                        }, {
                            image: a("99d3")
                        }, {
                            image: a("42f7")
                        }, {
                            image: a("a5f5")
                        }, {
                            image: a("e47b")
                        }, {
                            image: a("d2f2")
                        }, {
                            image: a("66be")
                        }, {
                            image: a("704a")
                        }, {
                            image: a("e69f")
                        }, {
                            image: a("99d3")
                        }, {
                            image: a("42f7")
                        }, {
                            image: a("a5f5")
                        }, {
                            image: a("e47b")
                        }, {
                            image: a("d2f2")
                        }, {
                            image: a("66be")
                        }, {
                            image: a("d2f2")
                        }, {
                            image: a("66be")
                        }],
                        portfolioData: [{
                            id: 1,
                            portfolioImage: a("4eac"),
                            image: a("4eac"),
                            title: "App Development",
                            subtitle: "Branded client",
                            date: "30 May 2021",
                            client: "Rainbow Themes",
                            category: "development",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("4eac"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0edc")
                            }
                        }, {
                            id: 2,
                            portfolioImage: a("605d"),
                            image: a("605d"),
                            title: "Business Development",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2021",
                            client: "Rainbow Themes",
                            category: "design",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("605d"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0edc")
                            }
                        }, {
                            id: 3,
                            portfolioImage: a("0edc"),
                            image: a("0edc"),
                            title: "Photoshop Design",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2021",
                            client: "Rainbow Themes",
                            category: "art",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("0edc"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0edc")
                            }
                        }, {
                            id: 4,
                            portfolioImage: a("0513"),
                            image: a("0513"),
                            title: "Native Application",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2021",
                            client: "Rainbow Themes",
                            category: "development",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("0513"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0513")
                            }
                        }, {
                            id: 5,
                            portfolioImage: a("c827"),
                            image: a("c827"),
                            title: "Vue.js Development",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2021",
                            client: "Rainbow Themes",
                            category: "design",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("c827"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0edc")
                            }
                        }, {
                            id: 6,
                            portfolioImage: a("3150"),
                            image: a("3150"),
                            title: "App Installment",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2021",
                            client: "Rainbow Themes",
                            category: "design",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("3150"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("3150")
                            }
                        }]
                    };
                }
            },
            Bc = kc,
            Sc = Object(l.a)(Bc, Kc, Rc, false, null, null, null),
            _c = Sc.exports,
            Dc = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", {
                    attrs: {
                        "topbar-style": 2,
                        "footer-style": 2
                    }
                }, [e("div", {
                    staticClass: "slider-area slider-style-1 bg-transparent variation-2 height-750"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-8 order-2 order-lg-1 mt_md--40 mt_sm--40"
                }, [e("div", {
                    staticClass: "inner text-left"
                }, [e("h1", {
                    staticClass: "title theme-gradient display-two",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "100"
                    }
                }, [t._v(" Marketing Agency "), e("br"), t._v("For "), e("vue-typed-js", {
                    staticClass: "d-inline-block",
                    attrs: {
                        strings: ["Freelancer.", "Developer.", "Startup."],
                        loop: true,
                        "type-speed": 80,
                        "start-delay": 1e3,
                        "back-speed": 50
                    }
                }, [e("span", {
                    staticClass: "typing"
                })])], 1), e("p", {
                    staticClass: "description",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "150"
                    }
                }, [t._v(" We help our clients succeed by creating brand identities, digital experiences, and print materials. ")]), e("div", {
                    staticClass: "button-group",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "200"
                    }
                }, [e("router-link", {
                    staticClass: "btn-default btn-medium round btn-icon",
                    attrs: {
                        to: "#"
                    }
                }, [t._v(" New Customer "), e("Icon", {
                    attrs: {
                        name: "arrow-right",
                        size: "20",
                        "icon-class": "icon"
                    }
                })], 1), e("router-link", {
                    staticClass: "btn-default btn-medium btn-border round btn-icon",
                    attrs: {
                        to: "/contact"
                    }
                }, [t._v(" Contact Us "), e("Icon", {
                    attrs: {
                        name: "arrow-right",
                        size: "20",
                        "icon-class": "icon"
                    }
                })], 1)], 1)])]), e("div", {
                    staticClass: "col-lg-4 order-1 order-lg-2"
                }, [e("div", {
                    staticClass: "thumbnail",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "250"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("96a7"),
                        alt: "Banner Images"
                    }
                })])])])])]), e("Separator"), e("div", {
                    staticClass: "rn-service-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "What we can do for you",
                        title: "Services provide for you",
                        description: "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("ServiceFour", {
                    attrs: {
                        "service-style": "service__style--1 icon-circle-style with-working-process",
                        "text-align": "center"
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rwt-advance-tab-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row mb--40"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "You can acquire all",
                        title: "Acquire new customers with Doob",
                        description: "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("AdvancedTab", {
                    attrs: {
                        "tab-data": t.tabData
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rwt-pricingtable-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Our Pricing Table",
                        title: "Advance Pricing Table",
                        description: "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row mt--30"
                }, [e("div", {
                    staticClass: "col-lg-8 offset-lg-2"
                }, [e("AdvancePricing")], 1)])])]), e("div", {
                    staticClass: "rwt-brand-area rn-section-gapBottom"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Awesome Clients",
                        title: "Join over +10,000 happy clients!",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mt--10"
                }, [e("Brand", {
                    attrs: {
                        "brand-list": t.brandList,
                        "brand-style": 2
                    }
                })], 1)])])])], 1);
            },
            Tc = [],
            Ic = {
                name: "MarketAgency",
                components: {
                    Brand: ea,
                    AdvancePricing: Tl,
                    AdvancedTab: bl,
                    ServiceFour: Va,
                    Icon: x,
                    SectionTitle: de,
                    Separator: se,
                    Layout: Zt
                },
                data() {
                    return {
                        tabData: {
                            tabContent: [{
                                id: 1,
                                menu: "market-research",
                                title: "Market Research.",
                                description: "Use Doob template you can build a corporate website a short time.",
                                image: a("9ff7")
                            }, {
                                id: 2,
                                menu: "corporate-report",
                                title: "Corporate Report.",
                                description: "Use Doob template you can build a corporate website a short time.",
                                image: a("9f4e")
                            }, {
                                id: 3,
                                menu: "app-development",
                                title: "App Development.",
                                description: "Use Doob template you can build a corporate website a short time.",
                                image: a("bc96")
                            }]
                        },
                        brandList: [{
                            image: a("704a")
                        }, {
                            image: a("e69f")
                        }, {
                            image: a("99d3")
                        }, {
                            image: a("42f7")
                        }, {
                            image: a("a5f5")
                        }, {
                            image: a("e47b")
                        }, {
                            image: a("d2f2")
                        }, {
                            image: a("66be")
                        }, {
                            image: a("704a")
                        }, {
                            image: a("e69f")
                        }, {
                            image: a("99d3")
                        }, {
                            image: a("42f7")
                        }, {
                            image: a("a5f5")
                        }, {
                            image: a("e47b")
                        }, {
                            image: a("d2f2")
                        }, {
                            image: a("66be")
                        }, {
                            image: a("d2f2")
                        }, {
                            image: a("66be")
                        }]
                    };
                }
            },
            Pc = Ic,
            Lc = Object(l.a)(Pc, Dc, Tc, false, null, null, null),
            Qc = Lc.exports,
            jc = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", {
                    attrs: {
                        "header-class": "header-left-align header-transparent",
                        "nav-alignment": "left",
                        "buy-button-class": "btn-default btn-small"
                    }
                }, [e("div", {
                    staticClass: "slider-area slider-style-4 slider-dot rn-slick-dot rn-slick-arrow"
                }, [e("VueSlickCarousel", t._b({}, "VueSlickCarousel", t.sliderSetting, false), t._l(t.sliderData, function (i, s) {
                    return e("div", {
                        key: s,
                        staticClass: "single-slide"
                    }, [e("div", {
                        staticClass: "height-950 bg-overlay bg_image",
                        style: {
                            "background-image": `url(${a("90d3")(`./${i.image}.jpg`)})`
                        }
                    }, [e("div", {
                        staticClass: "container"
                    }, [e("div", {
                        staticClass: "row row--30 align-items-center"
                    }, [e("div", {
                        staticClass: "col-12"
                    }, [e("div", {
                        staticClass: "inner text-center"
                    }, [e("h1", {
                        staticClass: "title",
                        domProps: {
                            innerHTML: t._s(i.title)
                        }
                    }), e("p", {
                        staticClass: "description",
                        domProps: {
                            innerHTML: t._s(i.description)
                        }
                    }), e("div", {
                        staticClass: "button-group mt--30"
                    }, [e("a", {
                        staticClass: "btn-default",
                        attrs: {
                            href: "#"
                        }
                    }, [t._v(" PURCHASE NOW ")])])])])])])])]);
                }), 0)], 1), e("div", {
                    staticClass: "rn-service-area rn-section-gapBottom pt--100"
                }, [e("div", {
                    staticClass: "container"
                }, [e("ServiceOne", {
                    attrs: {
                        "service-style": "service__style--1 icon-circle-style",
                        "text-align": "center",
                        "icon-size": "39"
                    }
                })], 1)]), e("Separator"), e("AboutFour", {
                    attrs: {
                        image: a("66d6")
                    }
                }), e("div", {
                    staticClass: "rwt-gallery-area rn-section-gapBottom"
                }, [e("div", {
                    staticClass: "container"
                }, [e("Gallery", {
                    attrs: {
                        "gallery-data": t.galleryData,
                        column: "col-lg-4 col-md-6 col-sm-6 col-12 mt--30"
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rwt-testimonial-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row mb--20"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        textAlign: "center",
                        subtitle: "Client Feedback",
                        title: "Our Clients Feedback.",
                        description: "We provide company and finance service for <br /> startups and company business.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("Testimonial", {
                    attrs: {
                        testimonial: t.testimonialData,
                        "testimonial-style": 5
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "blog-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Latest News",
                        title: "Blogs On Travellings.",
                        description: "We provide company and finance service for <br /> startups and company business.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row row--15"
                }, t._l(t.posts, function (a, i) {
                    return i < 3 ? e("div", {
                        key: i,
                        staticClass: "col-lg-4 col-md-6 col-sm-12 col-12 mt--30",
                        attrs: {
                            "data-aos": "slide-up",
                            "data-aos-duration": "800",
                            "data-aos-delay": 100 + i
                        }
                    }, [e("BlogPost", {
                        attrs: {
                            blog: a
                        }
                    })], 1) : t._e();
                }), 0)])])], 1);
            },
            Wc = [],
            Mc = {
                name: "TravelAgency",
                components: {
                    Testimonial: bn,
                    Gallery: Rr,
                    BlogPost: Xi,
                    AboutFour: ke,
                    ServiceOne: Ie,
                    SectionTitle: de,
                    Separator: se,
                    Layout: Zt,
                    VueSlickCarousel: pn.a
                },
                mixins: [Zi],
                data() {
                    return {
                        sliderSetting: {
                            infinite: true,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                            arrows: true,
                            responsive: [{
                                breakpoint: 800,
                                settings: {
                                    slidesToShow: 1
                                }
                            }, {
                                breakpoint: 993,
                                settings: {
                                    slidesToShow: 1
                                }
                            }, {
                                breakpoint: 580,
                                settings: {
                                    slidesToShow: 1
                                }
                            }, {
                                breakpoint: 481,
                                settings: {
                                    slidesToShow: 1
                                }
                            }]
                        },
                        sliderData: [{
                            image: "bg-image-7",
                            title: "Summer Season.",
                            description: "We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials."
                        }, {
                            image: "bg-image-8",
                            title: "Winter Season.",
                            description: "We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials."
                        }, {
                            image: "bg-image-9",
                            title: "Startup Agency.",
                            description: "We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials."
                        }],
                        galleryData: [{
                            id: 1,
                            thumb: a("4eac"),
                            src: a("4eac"),
                            type: "image"
                        }, {
                            id: 2,
                            thumb: a("605d"),
                            src: "https://www.youtube.com/watch?v=d0tU18Ybcvk",
                            type: "video"
                        }, {
                            id: 3,
                            thumb: a("0edc"),
                            src: a("0edc"),
                            type: "image"
                        }, {
                            id: 4,
                            thumb: a("0513"),
                            src: a("0513"),
                            type: "image"
                        }, {
                            id: 5,
                            thumb: a("c827"),
                            src: a("c827"),
                            type: "image"
                        }, {
                            id: 6,
                            thumb: a("3150"),
                            src: a("3150"),
                            type: "image"
                        }],
                        testimonialData: [{
                            form: "Poland",
                            description: "What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client.",
                            name: "John Due",
                            subtitle: "App Developer",
                            image: "testimonial-dark-01"
                        }, {
                            form: "Germany",
                            description: "What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client.",
                            name: "John Due",
                            subtitle: "App Developer",
                            image: "testimonial-dark-02"
                        }, {
                            form: "USA",
                            description: "What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client.",
                            name: "Janen",
                            subtitle: "App Developer",
                            image: "testimonial-dark-03"
                        }]
                    };
                }
            },
            Oc = Mc,
            Ec = Object(l.a)(Oc, jc, Wc, false, null, null, null),
            Vc = Ec.exports,
            Nc = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", {
                    attrs: {
                        "header-class": "header-left-align header-transparent",
                        "nav-alignment": "left",
                        "topbar-style": 2,
                        "buy-button-class": "btn-default btn-small"
                    }
                }, [e("div", {
                    staticClass: "slider-area slider-style-2 variation-2 height-850 bg_image",
                    style: {
                        "background-image": `url(${a("c764")})`
                    }
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-8 col-xl-6"
                }, [e("div", {
                    staticClass: "inner text-start"
                }, [e("h1", {
                    staticClass: "title display-one",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "100"
                    }
                }, [t._v(" We provide "), e("br"), t._v("reliable business "), e("br"), t._v(" consulting help. ")]), e("h6", {
                    staticClass: "tag-title",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "150"
                    }
                }, [t._v(" SOLUTION FOR YOUR BUSINESS ")])])])])])]), e("AboutFour", {
                    attrs: {
                        image: a("66d6")
                    }
                }), e("div", {
                    staticClass: "rwt-counterup-area rn-section-gapBottom mt_dec--30"
                }, [e("div", {
                    staticClass: "container"
                }, [e("Counter", {
                    attrs: {
                        "counter-style": 5,
                        "text-align": "center",
                        "counter-data": t.counterData,
                        column: "col-lg-3 col-md-6 col-sm-6 col-12"
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rwt-advance-tab-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row mb--40"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Consulting Report",
                        title: "Report Our Consulting Business.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("AdvancedTab", {
                    attrs: {
                        "tab-data": t.tabData,
                        "tab-style": 2
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rwt-team-area rn-section-gap"
                }, [e("div", {
                    staticClass: "wrapper plr--65 plr_sm--15"
                }, [e("div", {
                    staticClass: "row mb--20"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Our Experts.",
                        title: "Our Experts",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row row--15"
                }, t._l(t.teamData, function (t, a) {
                    return e("div", {
                        key: a,
                        staticClass: "col-lg-6 col-xl-3 col-md-6 col-12 mt--30"
                    }, [e("Team", {
                        attrs: {
                            "team-member": t,
                            "team-style": 4
                        }
                    })], 1);
                }), 0)])]), e("div", {
                    staticClass: "rwt-callto-action-area rn-section-gapBottom"
                }, [e("div", {
                    staticClass: "wrapper"
                }, [e("CallToAction", {
                    attrs: {
                        "style-type": 5,
                        title: "Ready to start creating a standard website?",
                        subtitle: "Finest choice for your home & office",
                        "btn-text": "Purchase Doob"
                    }
                })], 1)])], 1);
            },
            Hc = [],
            qc = {
                name: "Consulting",
                components: {
                    CallToAction: jt,
                    Team: ra,
                    AdvancedTab: bl,
                    Counter: Je,
                    AboutFour: ke,
                    SectionTitle: de,
                    Separator: se,
                    Layout: Zt
                },
                data() {
                    return {
                        counterData: [{
                            number: 199,
                            title: "Happy Clients"
                        }, {
                            number: 575,
                            title: "Employees"
                        }, {
                            number: 69,
                            title: "Useful Programs"
                        }, {
                            number: 500,
                            title: "Useful Programs"
                        }],
                        tabData: {
                            tabContent: [{
                                id: 1,
                                menu: "market-research",
                                title: "Market Research.",
                                description: "Use Doob template you can build a corporate website a short time.",
                                image: a("9ff7")
                            }, {
                                id: 2,
                                menu: "corporate-report",
                                title: "Corporate Report.",
                                description: "Use Doob template you can build a corporate website a short time.",
                                image: a("9f4e")
                            }, {
                                id: 3,
                                menu: "app-development",
                                title: "App Development.",
                                description: "Use Doob template you can build a corporate website a short time.",
                                image: a("bc96")
                            }]
                        },
                        teamData: [{
                            image: "team-dark-01",
                            name: "Sr Janen Sara",
                            designation: "Sr Product Designer",
                            location: "CO Miego, AD, USA",
                            description: "Yes, I am a product designer. I have a passion for product design."
                        }, {
                            image: "team-dark-02",
                            name: "Corporate Jane",
                            designation: "Manager",
                            location: "Bangladesh",
                            description: "Yes, I am a product designer. I have a passion for product design."
                        }, {
                            image: "team-dark-03",
                            name: "Jara Saraif",
                            designation: "Software Developer",
                            location: "Poland",
                            description: "Yes, I am a product designer. I have a passion for product design."
                        }, {
                            image: "team-dark-04",
                            name: "Afanan Sifa",
                            designation: "Accounts Manager",
                            location: "Poland",
                            description: "Yes, I am a product designer. I have a passion for product design."
                        }]
                    };
                }
            },
            zc = qc,
            Yc = Object(l.a)(zc, Nc, Hc, false, null, null, null),
            Jc = Yc.exports,
            Gc = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", {
                    attrs: {
                        "header-class": "header-transparent",
                        "buy-button-class": "btn-default btn-small"
                    }
                }, [e("div", {
                    staticClass: "slider-area slider-style-6 shape-right height-750"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row row--30 align-items-center"
                }, [e("div", {
                    staticClass: "order-2 order-lg-1 col-lg-6 mt_md--50 mt_sm--50 mt_lg--30"
                }, [e("div", {
                    staticClass: "inner text-start"
                }, [e("h1", {
                    staticClass: "title color-white",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "100"
                    }
                }, [t._v(" Trending "), e("br"), t._v("Business ")]), e("p", {
                    staticClass: "description color-white",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "150"
                    }
                }, [t._v(" We help our clients succeed by creating brand identities, digital experiences, and print materials. ")]), e("div", {
                    staticClass: "button-group mt--30 mt_sm--20",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "200"
                    }
                }, [e("a", {
                    staticClass: "btn-default btn-medium btn-icon btn-border",
                    attrs: {
                        href: "#"
                    }
                }, [t._v(" Purchase Now "), e("Icon", {
                    attrs: {
                        name: "arrow-right",
                        size: "20",
                        "icon-class": "icon"
                    }
                })], 1)])])]), e("div", {
                    staticClass: "col-lg-6 order-1 order-lg-2"
                }, [e("div", {
                    staticClass: "thumbnail",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "100"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("c5b0"),
                        alt: "Banner Images"
                    }
                })])]), e("div", {
                    staticClass: "shape-image w-auto"
                }, [e("img", {
                    attrs: {
                        src: a("d514"),
                        alt: "Banner Images"
                    }
                })])])])]), e("CallToAction", {
                    attrs: {
                        "style-type": 6,
                        title: "Ready to start creating a standard website?",
                        "btn-text": "Purchase Doob"
                    }
                }), e("Separator"), e("div", {
                    staticClass: "rwt-timeline-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        textAlign: "center",
                        subtitle: "Timeline",
                        title: "Working Process",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-10 offset-lg-1 mt--50"
                }, [e("Timeline", {
                    attrs: {
                        "timeline-data": t.timelineData,
                        "timeline-style": 2
                    }
                })], 1)])])]), e("Separator"), e("AboutTwo"), e("Separator"), e("div", {
                    staticClass: "rwt-pricing-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Take a Pricing",
                        title: "Our Pricing Plan",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("Pricing", {
                    attrs: {
                        "pricing-data": t.pricingData,
                        "pricing-style": 5
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rwt-brand-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Our Awesome Client",
                        title: "Our Awesome Clients",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mt--40"
                }, [e("Brand", {
                    attrs: {
                        "brand-list": t.brandList
                    }
                })], 1)])])])], 1);
            },
            Xc = [],
            Zc = {
                name: "SeoAgency",
                components: {
                    Brand: ea,
                    Pricing: Hn,
                    Timeline: Me,
                    CallToAction: jt,
                    Icon: x,
                    AboutTwo: ic,
                    SectionTitle: de,
                    Separator: se,
                    Layout: Zt
                },
                data() {
                    return {
                        timelineData: [{
                            id: "1",
                            title: "Knowledge",
                            description: "Present all available features in Essentials."
                        }, {
                            id: "2",
                            title: "Working",
                            description: "All Feature available features in Essentials."
                        }, {
                            id: "3",
                            title: "Solution",
                            description: "Popular Feature available features in Essentials."
                        }, {
                            id: "4",
                            title: "Process",
                            description: "Latest Feature available features in Essentials."
                        }],
                        pricingData: [{
                            title: "Basic Plan",
                            currency: "$",
                            price: "29",
                            subtitle: "USD Per Month",
                            features: [{
                                title: "5 PPC Campaigns"
                            }, {
                                title: "Digital Marketing"
                            }, {
                                title: "Marketing Agency"
                            }, {
                                title: "Seo Friendly"
                            }, {
                                title: "UI/UX designs"
                            }],
                            btn: {
                                text: "Purchase Now",
                                link: "#"
                            }
                        }, {
                            title: "Standard Plan",
                            currency: "$",
                            price: "50",
                            subtitle: "USD Per Month",
                            features: [{
                                title: "5 PPC Campaigns"
                            }, {
                                title: "Keep 100% Royalties"
                            }, {
                                title: "App Development"
                            }, {
                                title: "Seo Friendly"
                            }, {
                                title: "UI/UX designs"
                            }],
                            btn: {
                                text: "Purchase Now",
                                link: "#"
                            },
                            isActive: true
                        }, {
                            title: "Advanced Plan",
                            currency: "$",
                            price: "500",
                            subtitle: "USD Per Month",
                            features: [{
                                title: "5 PPC Campaigns"
                            }, {
                                title: "SEO Marketing"
                            }, {
                                title: "Marketing Agency"
                            }, {
                                title: "Seo Friendly"
                            }, {
                                title: "Application Manage"
                            }],
                            btn: {
                                text: "Purchase Now",
                                link: "#"
                            }
                        }],
                        brandList: [{
                            image: a("704a")
                        }, {
                            image: a("e69f")
                        }, {
                            image: a("99d3")
                        }, {
                            image: a("42f7")
                        }, {
                            image: a("a5f5")
                        }, {
                            image: a("e47b")
                        }, {
                            image: a("d2f2")
                        }, {
                            image: a("66be")
                        }]
                    };
                }
            },
            $c = Zc,
            td = Object(l.a)($c, Gc, Xc, false, null, null, null),
            ed = td.exports,
            ad = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", {
                    attrs: {
                        "header-transparency": true,
                        "show-top-header": false
                    }
                }, [e("div", {
                    staticClass: "slider-perosonal-portfolio height-750 bg_image",
                    style: {
                        "background-image": `url(${a("4098")})`
                    },
                    attrs: {
                        "data-black-overlay": "1"
                    }
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row row--30 align-items-center"
                }, [e("div", {
                    staticClass: "col-12"
                }, [e("div", {
                    staticClass: "inner text-center"
                }, [e("h1", {
                    staticClass: "title",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "100"
                    }
                }, [t._v(" Hey! I'm "), e("br"), t._v(" "), e("span", {
                    staticClass: "theme-gradient"
                }, [t._v("Jonnin Arra")])]), e("div", {
                    staticClass: "button-group mt--30",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "150"
                    }
                }, [e("router-link", {
                    staticClass: "btn-default round btn-border btn-large",
                    attrs: {
                        to: "/contact"
                    }
                }, [t._v(" Contact Me ")])], 1)])])])])]), e("AboutFive"), e("div", {
                    staticClass: "rwt-brand-area pb--90 mt_dec--30"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-10 offset-lg-1"
                }, [e("Brand", {
                    attrs: {
                        "brand-list": t.brandList,
                        "brand-style": 4
                    }
                })], 1)])])]), e("div", {
                    staticClass: "rwt-portfolio-area rn-section-gapBottom"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Project",
                        title: "Check My Recent Works!",
                        description: "We provide company and finance service for <br /> startups and company business.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("Portfolio", {
                    attrs: {
                        column: "col-lg-4 col-md-6 col-12 mt--30",
                        "portfolio-data": t.portfolioData,
                        "button-class": "btn btn-default btn-large btn-icon round"
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rwt-about-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row align-items-center"
                }, [e("div", {
                    staticClass: "col-lg-6"
                }, [e("SectionTitle", {
                    attrs: {
                        subtitle: "See my All Skill.",
                        title: "My Working Skill",
                        description: "We provide company and finance service for <br /> startups and company business.",
                        "data-aos": "fade-up"
                    }
                })], 1), e("div", {
                    staticClass: "col-lg-6"
                }, [e("div", {
                    staticClass: "rbt-progress-style-1"
                }, [e("Progressbar", {
                    attrs: {
                        "progress-data": t.progressData,
                        "progress-style": 2
                    }
                })], 1)])])])]), e("Separator"), e("div", {
                    staticClass: "rwt-testimonial-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mb--10"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Client Feedback",
                        title: "Awesome Clients Feedback.",
                        description: "We provide company and finance service for <br /> startups and company business.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row row--15"
                }, t._l(t.testimonialData, function (t, a) {
                    return e("div", {
                        key: a,
                        staticClass: "col-lg-4 col-md-6 col-12 mt--30"
                    }, [e("Testimonial", {
                        attrs: {
                            testimonial: t
                        }
                    })], 1);
                }), 0)])]), e("Separator"), e("div", {
                    staticClass: "blog-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Latest News",
                        title: "Read from the Blog.",
                        description: "We provide company and finance service for <br /> startups and company business.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row row--15"
                }, t._l(t.posts, function (a, i) {
                    return i < 3 ? e("div", {
                        key: i,
                        staticClass: "col-lg-4 col-md-6 col-sm-12 col-12 mt--30",
                        attrs: {
                            "data-aos": "slide-up",
                            "data-aos-duration": "800",
                            "data-aos-delay": 100 + i
                        }
                    }, [e("BlogPost", {
                        attrs: {
                            blog: a
                        }
                    })], 1) : t._e();
                }), 0)])])], 1);
            },
            id = [],
            sd = function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "about-style-5 rn-section-gapBottom"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-10 offset-lg-1"
                }, [e("div", {
                    staticClass: "row row--0 about-wrapper align-items-center theme-shape"
                }, [t._m(0), e("div", {
                    staticClass: "col-lg-6 mt_md--30 mt_sm--30"
                }, [e("div", {
                    staticClass: "content"
                }, [e("div", {
                    staticClass: "inner"
                }, [e("h4", {
                    staticClass: "title"
                }, [t._v("I'm Web Dedeloper")]), e("p", [t._v("Web designer and developer working for envato.com in Paris, France.")]), e("ul", {
                    staticClass: "contact-address"
                }, [e("li", [e("Icon", {
                    attrs: {
                        name: "file"
                    }
                }), t._v(" Web designer & developer ")], 1), e("li", [e("Icon", {
                    attrs: {
                        name: "phone"
                    }
                }), t._v(" +01916395965 ")], 1), e("li", [e("Icon", {
                    attrs: {
                        name: "map-pin"
                    }
                }), t._v(" Dhaka, Bangladesh ")], 1)]), t._m(1)])])])])])])])]);
            },
            od = [function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "col-lg-6"
                }, [e("div", {
                    staticClass: "thumbnail"
                }, [e("img", {
                    attrs: {
                        src: a("eade"),
                        alt: "About Images"
                    }
                })])]);
            }, function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "download-button mt--20"
                }, [e("a", {
                    staticClass: "btn-read-more",
                    attrs: {
                        href: "#"
                    }
                }, [e("span", [t._v("Download My CV")])])]);
            }],
            nd = {
                name: "AboutFive",
                components: {
                    Icon: x
                }
            },
            rd = nd,
            ld = Object(l.a)(rd, sd, od, false, null, null, null),
            cd = ld.exports,
            dd = {
                name: "PersonalPortfolio",
                components: {
                    Testimonial: bn,
                    BlogPost: Xi,
                    Progressbar: Ci,
                    Portfolio: Fo,
                    Brand: ea,
                    AboutFive: cd,
                    SectionTitle: de,
                    Separator: se,
                    Layout: Zt
                },
                mixins: [Zi],
                data() {
                    return {
                        brandList: [{
                            image: a("704a")
                        }, {
                            image: a("e69f")
                        }, {
                            image: a("99d3")
                        }, {
                            image: a("42f7")
                        }, {
                            image: a("a5f5")
                        }, {
                            image: a("e47b")
                        }, {
                            image: a("d2f2")
                        }],
                        progressData: [{
                            id: 1,
                            title: "Web Development",
                            percentage: 90,
                            progressClass: "bar-color-1"
                        }, {
                            id: 2,
                            title: "Photoshop Design",
                            percentage: 75,
                            progressClass: "bar-color-2"
                        }, {
                            id: 3,
                            title: "App Development",
                            percentage: 70,
                            progressClass: "bar-color-3"
                        }, {
                            id: 4,
                            title: "Application Development",
                            percentage: 95,
                            progressClass: "bar-color-4"
                        }],
                        testimonialData: [{
                            image: "testimonial-01",
                            name: "Sr Janen Sara",
                            designation: "Sr Product Designer",
                            location: "CO Miego, AD, USA",
                            description: "“Proin libero vel lorem dui lupus est aliquet luctus purus justo eget libero sed lorem.„"
                        }, {
                            image: "testimonial-02",
                            name: "Afsana Nila",
                            designation: "App Developer",
                            location: "Bangladesh",
                            description: "“Proin libero vel lorem dui lupus est aliquet luctus purus justo eget libero sed lorem.„"
                        }, {
                            image: "testimonial-03",
                            name: "Afanan Sifa",
                            designation: "Accounts Manager",
                            location: "Poland",
                            description: "“Proin libero vel lorem dui lupus est aliquet luctus purus justo eget libero sed lorem.„"
                        }],
                        portfolioData: [{
                            id: 1,
                            portfolioImage: a("4eac"),
                            image: a("4eac"),
                            title: "App Development",
                            subtitle: "Branded client",
                            date: "30 May 2022",
                            client: "Rainbow Themes",
                            category: "development",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("4eac"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0edc")
                            }
                        }, {
                            id: 2,
                            portfolioImage: a("605d"),
                            image: a("605d"),
                            title: "Business Development",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2022",
                            client: "Rainbow Themes",
                            category: "design",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("605d"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0edc")
                            }
                        }, {
                            id: 3,
                            portfolioImage: a("0edc"),
                            image: a("0edc"),
                            title: "Photoshop Design",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2022",
                            client: "Rainbow Themes",
                            category: "art",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("0edc"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0edc")
                            }
                        }, {
                            id: 4,
                            portfolioImage: a("0513"),
                            image: a("0513"),
                            title: "Native Application",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2022",
                            client: "Rainbow Themes",
                            category: "development",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("0513"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0513")
                            }
                        }, {
                            id: 5,
                            portfolioImage: a("c827"),
                            image: a("c827"),
                            title: "Vue.js Development",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2022",
                            client: "Rainbow Themes",
                            category: "design",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("c827"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0edc")
                            }
                        }, {
                            id: 6,
                            portfolioImage: a("3150"),
                            image: a("3150"),
                            title: "App Installment",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2022",
                            client: "Rainbow Themes",
                            category: "design",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("3150"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("3150")
                            }
                        }]
                    };
                }
            },
            pd = dd,
            ud = Object(l.a)(pd, ad, id, false, null, null, null),
            md = ud.exports,
            gd = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", {
                    attrs: {
                        "buy-button-class": "btn-default btn-small"
                    }
                }, [e("div", {
                    staticClass: "slider-area slider-style-6 shape-left inheader-not-transparent height-750"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row row--30 align-items-center"
                }, [e("div", {
                    staticClass: "order-2 order-lg-1 col-lg-6 mt_md--50 mt_sm--50 mt_lg--30"
                }, [e("div", {
                    staticClass: "inner text-left"
                }, [e("h1", {
                    staticClass: "title color-white",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "100"
                    }
                }, [t._v(" Doob event conference. ")]), e("p", {
                    staticClass: "description color-white",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "150"
                    }
                }, [t._v(" We help our clients succeed by creating brand identities, digital experiences, and print materials. ")]), e("div", {
                    staticClass: "button-group mt--30 mt_sm--20",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "200"
                    }
                }, [e("a", {
                    staticClass: "btn-default btn-medium btn-icon btn-border",
                    attrs: {
                        href: "#"
                    }
                }, [t._v(" Purchase Now "), e("Icon", {
                    attrs: {
                        name: "arrow-right",
                        size: "20",
                        "icon-class": "icon"
                    }
                })], 1)])])]), e("div", {
                    staticClass: "col-lg-6 order-1 order-lg-2"
                }, [e("Video", {
                    attrs: {
                        "video-data": t.videoData,
                        column: "col-12"
                    }
                })], 1), e("div", {
                    staticClass: "shape-image w-auto"
                }, [e("img", {
                    attrs: {
                        src: a("d514"),
                        alt: "Banner Images"
                    }
                })])])])]), e("div", {
                    staticClass: "rn-service-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "What we can do for you",
                        title: "Main Goal Our Event Conference.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("ServiceThree", {
                    attrs: {
                        "service-style": "service__style--2",
                        "text-align": "center"
                    }
                })], 1)]), e("Separator"), e("AboutFour", {
                    attrs: {
                        image: a("0edf")
                    }
                }), e("div", {
                    staticClass: "rwt-split-area"
                }, [e("div", {
                    staticClass: "wrapper"
                }, [e("Split", {
                    attrs: {
                        "split-data": t.splitData,
                        "split-style": 3
                    }
                })], 1)]), e("div", {
                    staticClass: "rwt-brand-area ptb--90"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("Brand", {
                    attrs: {
                        "brand-list": t.brandList,
                        "brand-style": 3
                    }
                })], 1)])])]), e("Separator"), e("div", {
                    staticClass: "rwt-team-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mb--15"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Our Experts.",
                        title: "Our Experts Team.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row row--15"
                }, t._l(t.teamData, function (t, a) {
                    return e("div", {
                        key: a,
                        staticClass: "col-lg-3 col-md-6 col-12 mt--30"
                    }, [e("Team", {
                        attrs: {
                            "team-member": t,
                            "team-style": 3
                        }
                    })], 1);
                }), 0)])]), e("Separator"), e("div", {
                    staticClass: "rwt-pricing-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row mb--40 mb_sm--0"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Pricing",
                        title: "Our Pricing Plan.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("Pricing", {
                    attrs: {
                        "pricing-data": t.pricingData
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "blog-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Latest News",
                        title: "Our Event News.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row row--15"
                }, t._l(t.posts, function (a, i) {
                    return i < 3 ? e("div", {
                        key: i,
                        staticClass: "col-lg-4 col-md-6 col-sm-12 col-12 mt--30",
                        attrs: {
                            "data-aos": "slide-up",
                            "data-aos-duration": "800",
                            "data-aos-delay": 100 + i
                        }
                    }, [e("BlogPost", {
                        attrs: {
                            blog: a
                        }
                    })], 1) : t._e();
                }), 0)])])], 1);
            },
            bd = [],
            vd = {
                name: "EventConference",
                components: {
                    Video: Ue,
                    BlogPost: Xi,
                    Pricing: Hn,
                    Team: ra,
                    Brand: ea,
                    Split: ir,
                    AboutFour: ke,
                    ServiceThree: Qa,
                    Separator: se,
                    SectionTitle: de,
                    Icon: x,
                    Layout: Zt
                },
                mixins: [Zi],
                data() {
                    return {
                        splitData: {
                            image: "split-03.jpg",
                            title: "Continue Your Business With Us.",
                            description: "Randomised words which don't look even slightly believable. If you are to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. in some form, by injectedeed bedhumour, or randomised even .",
                            counterData: [{
                                number: 199,
                                title: "Happy Clients"
                            }, {
                                number: 575,
                                title: "Employees"
                            }, {
                                number: 69,
                                title: "Useful Programs"
                            }, {
                                number: 500,
                                title: "Useful Programs"
                            }]
                        },
                        brandList: [{
                            image: a("704a")
                        }, {
                            image: a("e69f")
                        }, {
                            image: a("99d3")
                        }, {
                            image: a("42f7")
                        }, {
                            image: a("a5f5")
                        }, {
                            image: a("e47b")
                        }, {
                            image: a("d2f2")
                        }, {
                            image: a("66be")
                        }, {
                            image: a("704a")
                        }],
                        teamData: [{
                            image: "team-04",
                            name: "Sr Janen Sara",
                            designation: "Sr Product Designer"
                        }, {
                            image: "team-05",
                            name: "Afsana Nila",
                            designation: "App Developer"
                        }, {
                            image: "team-06",
                            name: "Afanan Sifa",
                            designation: "Accounts Manager"
                        }, {
                            image: "team-07",
                            name: "Afanan Sifa",
                            designation: "Accounts Manager"
                        }],
                        pricingData: [{
                            title: "Free",
                            currency: "$",
                            price: "29",
                            subtitle: "USD Per Month",
                            features: [{
                                title: "5 PPC Campaigns"
                            }, {
                                title: "Digital Marketing"
                            }, {
                                title: "Marketing Agency"
                            }, {
                                title: "Seo Friendly"
                            }, {
                                title: "UI/UX designs"
                            }],
                            btn: {
                                text: "Purchase Now",
                                link: "#"
                            }
                        }, {
                            title: "Business",
                            currency: "$",
                            price: "50",
                            subtitle: "USD Per Month",
                            features: [{
                                title: "5 PPC Campaigns"
                            }, {
                                title: "Keep 100% Royalties"
                            }, {
                                title: "App Development"
                            }, {
                                title: "Seo Friendly"
                            }, {
                                title: "UI/UX designs"
                            }],
                            btn: {
                                text: "Purchase Now",
                                link: "#"
                            },
                            isActive: true
                        }, {
                            title: "Advanced",
                            currency: "$",
                            price: "100",
                            subtitle: "USD Per Month",
                            features: [{
                                title: "5 PPC Campaigns"
                            }, {
                                title: "SEO Marketing"
                            }, {
                                title: "Marketing Agency"
                            }, {
                                title: "Seo Friendly"
                            }, {
                                title: "Application Manage"
                            }],
                            btn: {
                                text: "Purchase Now",
                                link: "#"
                            }
                        }],
                        videoData: [{
                            thumb: a("1c99"),
                            src: "https://www.youtube.com/watch?v=d0tU18Ybcvk"
                        }]
                    };
                }
            },
            hd = vd,
            fd = Object(l.a)(hd, gd, bd, false, null, null, null),
            Ad = fd.exports,
            yd = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", {
                    attrs: {
                        "topbar-style": 2,
                        "show-footer": false
                    }
                }, [e("div", {
                    staticClass: "slider-area slider-style-7 height-750"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("div", {
                    staticClass: "inner text-center"
                }, [e("h4", {
                    staticClass: "subtitle rn-sub-badge",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "100"
                    }
                }, [e("span", {
                    staticClass: "theme-gradient"
                }, [t._v("Portfolio Box Layout")])]), e("h1", {
                    staticClass: "title",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "150"
                    }
                }, [t._v(" Doob Creative Portfolio "), e("br"), t._v(" For Build Website. ")]), e("div", {
                    staticClass: "button-group mt--40 mt_sm--20",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "200"
                    }
                }, [e("a", {
                    staticClass: "btn-default btn-icon round btn-large",
                    attrs: {
                        href: "#"
                    }
                }, [t._v(" Purchase Now "), e("Icon", {
                    attrs: {
                        name: "arrow-right",
                        size: "20",
                        "icon-class": "icon"
                    }
                })], 1)])])])])])]), e("Separator"), e("div", {
                    staticClass: "rwt-portfolio-area rn-section-gapTop"
                }, [e("div", {
                    staticClass: "container-fluid plr--60 plr_md--15 plr_sm--15"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Portfolio Box Layout",
                        title: "You can customize everything!",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("Portfolio", {
                    attrs: {
                        "portfolio-data": t.portfolioData,
                        column: "col-lg-4 col-md-6 mt--30 box-grid-layout no-overlay"
                    }
                })], 1)]), e("div", {
                    staticClass: "rwt-brand-area ptb--90"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mt--10"
                }, [e("Brand", {
                    attrs: {
                        "brand-list": t.brandList,
                        "brand-style": 3
                    }
                })], 1)])])])], 1);
            },
            Cd = [],
            wd = {
                name: "CreativePortfolio",
                components: {
                    Brand: ea,
                    Portfolio: Fo,
                    SectionTitle: de,
                    Separator: se,
                    Icon: x,
                    Layout: Zt
                },
                data() {
                    return {
                        portfolioData: [{
                            id: 1,
                            portfolioImage: a("4eac"),
                            image: a("4eac"),
                            title: "App Development",
                            subtitle: "Branded client",
                            date: "30 May 2022",
                            client: "Rainbow Themes",
                            category: "development",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("4eac"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0edc")
                            }
                        }, {
                            id: 2,
                            portfolioImage: a("605d"),
                            image: a("605d"),
                            title: "Business Development",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2022",
                            client: "Rainbow Themes",
                            category: "design",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("605d"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0edc")
                            }
                        }, {
                            id: 3,
                            portfolioImage: a("0edc"),
                            image: a("0edc"),
                            title: "Photoshop Design",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2022",
                            client: "Rainbow Themes",
                            category: "art",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("0edc"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0edc")
                            }
                        }, {
                            id: 4,
                            portfolioImage: a("0513"),
                            image: a("0513"),
                            title: "Native Application",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2022",
                            client: "Rainbow Themes",
                            category: "development",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("0513"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0513")
                            }
                        }, {
                            id: 5,
                            portfolioImage: a("c827"),
                            image: a("c827"),
                            title: "Vue.js Development",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2022",
                            client: "Rainbow Themes",
                            category: "design",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("c827"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0edc")
                            }
                        }, {
                            id: 6,
                            portfolioImage: a("3150"),
                            image: a("3150"),
                            title: "App Installment",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2022",
                            client: "Rainbow Themes",
                            category: "design",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("3150"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("3150")
                            }
                        }],
                        brandList: [{
                            image: a("704a")
                        }, {
                            image: a("e69f")
                        }, {
                            image: a("99d3")
                        }, {
                            image: a("42f7")
                        }, {
                            image: a("a5f5")
                        }, {
                            image: a("e47b")
                        }, {
                            image: a("d2f2")
                        }, {
                            image: a("66be")
                        }, {
                            image: a("704a")
                        }]
                    };
                }
            },
            Fd = wd,
            Ud = Object(l.a)(Fd, yd, Cd, false, null, null, null),
            xd = Ud.exports,
            Kd = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", {
                    attrs: {
                        "header-class": "header-left-align header-transparent",
                        "nav-alignment": "left",
                        "buy-button-class": "btn-default btn-small",
                        "show-top-header": false,
                        "footer-style": 2,
                        "show-footer": false
                    }
                }, [e("div", {
                    staticClass: "slider-area slider-style-2 variation-3 height-850 bg_image bg_image_fixed theme-shape",
                    style: {
                        "background-image": `url(${a("16c7")})`
                    }
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-6"
                }, [e("div", {
                    staticClass: "inner text-left"
                }, [e("h1", {
                    staticClass: "title",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "100"
                    }
                }, [t._v(" Hi there, I am‍ "), e("br"), e("span", {
                    staticClass: "theme-gradient"
                }, [t._v("Liam Noah!")])]), e("p", {
                    staticClass: "description",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "150"
                    }
                }, [t._v(" I am an outstanding Product Designer from Lagos, Fatima. You will find me smiling almost every time while designing thoughtful products, and experiences that people love and businesses value.")]), e("div", {
                    staticClass: "button-group mt--40 mt_sm--20",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "200"
                    }
                }, [e("router-link", {
                    staticClass: "btn-default btn-border",
                    attrs: {
                        to: "#"
                    }
                }, [t._v(" Click For Hire Me ")]), e("router-link", {
                    staticClass: "btn-default btn-icon",
                    attrs: {
                        to: "/about"
                    }
                }, [t._v(" About Me "), e("Icon", {
                    attrs: {
                        name: "arrow-right",
                        size: "20",
                        "icon-class": "icon"
                    }
                })], 1)], 1)])])])])]), e("AboutSix"), e("div", {
                    staticClass: "rwt-timeline-area rn-section-gapBottom"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("Timeline", {
                    attrs: {
                        "timeline-data": t.timelineData,
                        "timeline-style": 4
                    }
                })], 1)])])]), e("div", {
                    staticClass: "rwt-portfolio-area rn-section-gapBottom"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mb--10"
                }, [e("SectionTitle", {
                    attrs: {
                        title: "My Recent Works.",
                        "section-title-style": 2,
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("ServiceFive", {
                    attrs: {
                        "service-style": "gallery-style",
                        "text-align": "left"
                    }
                })], 1)]), e("div", {
                    staticClass: "rwt-portfolio-area rn-section-gapBottom"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mb--40"
                }, [e("SectionTitle", {
                    attrs: {
                        title: "My Pricing Plan.",
                        "section-title-style": 2,
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("Pricing", {
                    attrs: {
                        "pricing-data": t.pricingData
                    }
                })], 1)]), e("div", {
                    staticClass: "rwt-brand-area pb--90"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("Brand", {
                    attrs: {
                        "brand-list": t.brandList,
                        "brand-style": 3
                    }
                })], 1)])])]), e("div", {
                    staticClass: "rwt-testimonial-area rn-section-gapBottom"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row mb--20"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        title: "My Clients Review.",
                        "section-title-style": 2,
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row row--15"
                }, t._l(t.testimonialData, function (t, a) {
                    return e("div", {
                        key: a,
                        staticClass: "col-lg-4 col-md-6 col-12"
                    }, [e("Testimonial", {
                        attrs: {
                            testimonial: t,
                            "testimonial-style": 3
                        }
                    })], 1);
                }), 0)])]), e("div", {
                    staticClass: "contact-area rn-section-gapBottom"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row mb--20"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        title: "Contact With Me.",
                        "section-title-style": 2,
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row row--30 mt--40"
                }, [e("div", {
                    staticClass: "col-lg-6 order-2 oder-lg-1 mt_md--30 mt_sm--30"
                }, [e("ContactForm")], 1), e("div", {
                    staticClass: "col-lg-6 order-1 oder-lg-2"
                }, [e("div", {
                    staticClass: "thumbnail"
                }, [e("img", {
                    staticClass: "radius w-100",
                    attrs: {
                        src: a("66d6"),
                        alt: "Corporate"
                    }
                })])])])])])], 1);
            },
            Rd = [],
            kd = function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "about-style-6 rn-section-gap"
                }, [e("div", {
                    staticClass: "plr_md--30 plr_sm--30"
                }, [e("div", {
                    staticClass: "wrapper theme-shape"
                }, [e("div", {
                    staticClass: "row align-items-center"
                }, [t._m(0), e("div", {
                    staticClass: "col-lg-8 col-md-6 col-12 mt_sm--30"
                }, [e("div", {
                    staticClass: "inner"
                }, [e("span", {
                    staticClass: "theme-gradient subtitle",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "100"
                    }
                }, [t._v("I have completed 50+ project.")]), e("h4", {
                    staticClass: "color-white maintitle",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "150"
                    }
                }, [t._v("Have More Projects Complete in My Carreer Life.")]), e("div", {
                    staticClass: "read-more-btn",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "200"
                    }
                }, [e("router-link", {
                    staticClass: "btn-default btn-border",
                    attrs: {
                        to: "#"
                    }
                }, [t._v(" View More Projects ")])], 1)])])])]), e("div", {
                    staticClass: "row row--15"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("div", {
                    staticClass: "rbt-progress-style-1 mt--60"
                }, [e("SectionTitle", {
                    staticClass: "mb--40",
                    attrs: {
                        title: "My Working Experience.",
                        "section-title-style": 2,
                        "data-aos": "fade-up"
                    }
                }), e("Progressbar", {
                    attrs: {
                        "progress-data": t.progressData,
                        "custom-column": "col-12"
                    }
                })], 1)])])])]);
            },
            Bd = [function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "col-lg-4 col-md-6 col-12"
                }, [e("div", {
                    staticClass: "thumbnail text-start text-lg-center",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "100"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("db2b"),
                        alt: "About images"
                    }
                })])]);
            }],
            Sd = {
                name: "AboutSix",
                components: {
                    Progressbar: Ci,
                    SectionTitle: de
                },
                data() {
                    return {
                        progressData: [{
                            id: 1,
                            title: "Web Development",
                            percentage: 90,
                            progressClass: "bar-color-1"
                        }, {
                            id: 2,
                            title: "Photoshop Design",
                            percentage: 75,
                            progressClass: "bar-color-2"
                        }, {
                            id: 3,
                            title: "App Development",
                            percentage: 70,
                            progressClass: "bar-color-3"
                        }, {
                            id: 4,
                            title: "Application Development",
                            percentage: 95,
                            progressClass: "bar-color-4"
                        }]
                    };
                }
            },
            _d = Sd,
            Dd = Object(l.a)(_d, kd, Bd, false, null, null, null),
            Td = Dd.exports,
            Id = {
                name: "Freelancer",
                components: {
                    ContactForm: Hr,
                    Testimonial: bn,
                    Brand: ea,
                    Pricing: Hn,
                    SectionTitle: de,
                    ServiceFive: Ja,
                    Timeline: Me,
                    AboutSix: Td,
                    Icon: x,
                    Layout: Zt
                },
                data() {
                    return {
                        timelineData: [{
                            id: "1",
                            title: "Knowledge",
                            description: "Present all available features in Essentials."
                        }, {
                            id: "2",
                            title: "Working",
                            description: "All Feature available features in Essentials."
                        }, {
                            id: "3",
                            title: "Solution",
                            description: "Popular Feature available features in Essentials."
                        }, {
                            id: "4",
                            title: "Process",
                            description: "Latest Feature available features in Essentials."
                        }],
                        pricingData: [{
                            title: "Free",
                            currency: "$",
                            price: "29",
                            subtitle: "USD Per Month",
                            features: [{
                                title: "5 PPC Campaigns"
                            }, {
                                title: "Digital Marketing"
                            }, {
                                title: "Marketing Agency"
                            }, {
                                title: "Seo Friendly"
                            }, {
                                title: "UI/UX designs"
                            }],
                            btn: {
                                text: "Purchase Now",
                                link: "#"
                            }
                        }, {
                            title: "Business",
                            currency: "$",
                            price: "50",
                            subtitle: "USD Per Month",
                            features: [{
                                title: "5 PPC Campaigns"
                            }, {
                                title: "Keep 100% Royalties"
                            }, {
                                title: "App Development"
                            }, {
                                title: "Seo Friendly"
                            }, {
                                title: "UI/UX designs"
                            }],
                            btn: {
                                text: "Purchase Now",
                                link: "#"
                            },
                            isActive: true
                        }, {
                            title: "Advanced",
                            currency: "$",
                            price: "100",
                            subtitle: "USD Per Month",
                            features: [{
                                title: "5 PPC Campaigns"
                            }, {
                                title: "SEO Marketing"
                            }, {
                                title: "Marketing Agency"
                            }, {
                                title: "Seo Friendly"
                            }, {
                                title: "Application Manage"
                            }],
                            btn: {
                                text: "Purchase Now",
                                link: "#"
                            }
                        }],
                        brandList: [{
                            image: a("704a")
                        }, {
                            image: a("e69f")
                        }, {
                            image: a("99d3")
                        }, {
                            image: a("42f7")
                        }, {
                            image: a("a5f5")
                        }, {
                            image: a("e47b")
                        }, {
                            image: a("d2f2")
                        }, {
                            image: a("66be")
                        }, {
                            image: a("704a")
                        }],
                        testimonialData: [{
                            image: "testimonial-01",
                            name: "Sr Janen Sara",
                            designation: "Sr Product Designer",
                            location: "CO Miego, AD, USA",
                            description: "“Proin libero vel lorem dui lupus est aliquet luctus purus justo eget libero sed lorem.„"
                        }, {
                            image: "testimonial-02",
                            name: "Afsana Nila",
                            designation: "App Developer",
                            location: "Bangladesh",
                            description: "“Proin libero vel lorem dui lupus est aliquet luctus purus justo eget libero sed lorem.„"
                        }, {
                            image: "testimonial-03",
                            name: "Afanan Sifa",
                            designation: "Accounts Manager",
                            location: "Poland",
                            description: "“Proin libero vel lorem dui lupus est aliquet luctus purus justo eget libero sed lorem.„"
                        }]
                    };
                }
            },
            Pd = Id,
            Ld = Object(l.a)(Pd, Kd, Rd, false, null, null, null),
            Qd = Ld.exports,
            jd = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", {
                    attrs: {
                        "header-class": "header-left-align",
                        "nav-alignment": "left",
                        "header-transparency": true,
                        "show-top-header": false,
                        "buy-button-class": "btn-default btn-small"
                    }
                }, [e("div", {
                    staticClass: "slider-area slider-style-1 variation-default height-850 bg_image",
                    style: {
                        "background-image": `url(${a("5d07")})`
                    },
                    attrs: {
                        "data-black-overlay": "7"
                    }
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("div", {
                    staticClass: "inner text-center"
                }, [e("h1", {
                    staticClass: "title display-one",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "100"
                    }
                }, [t._v(" International "), e("br"), e("span", {
                    staticClass: "theme-gradient"
                }, [t._v("Business")]), t._v(" & "), e("span", {
                    staticClass: "theme-gradient"
                }, [t._v("Consulting")]), t._v(". ")]), e("p", {
                    staticClass: "description",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "150"
                    }
                }, [t._v(" We help our clients succeed by creating brand identities, digital experiences, and print materials. ")]), e("div", {
                    staticClass: "button-group",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "200"
                    }
                }, [e("router-link", {
                    staticClass: "btn-default btn-medium btn-icon",
                    attrs: {
                        to: "#"
                    }
                }, [t._v(" Purchase Now "), e("Icon", {
                    attrs: {
                        name: "arrow-right",
                        size: "20",
                        "icon-class": "icon"
                    }
                })], 1), e("router-link", {
                    staticClass: "btn-default btn-medium btn-border btn-icon",
                    attrs: {
                        to: "/contact"
                    }
                }, [t._v(" Contact Us "), e("Icon", {
                    attrs: {
                        name: "arrow-right",
                        size: "20",
                        "icon-class": "icon"
                    }
                })], 1)], 1)])])])])]), e("div", {
                    staticClass: "rwt-tab-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row mb--40"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Business Strategy",
                        title: "Our Business Strategy Here.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("Tab", {
                    attrs: {
                        "tab-data": t.tabData,
                        "tab-style": 3
                    }
                })], 1)]), e("div", {
                    staticClass: "rwt-split-area no-radius"
                }, [e("div", {
                    staticClass: "wrapper"
                }, [e("Split", {
                    attrs: {
                        "split-data": t.splitOneData
                    }
                })], 1)]), e("div", {
                    staticClass: "rwt-split-area"
                }, [e("div", {
                    staticClass: "wrapper"
                }, [e("Split", {
                    attrs: {
                        "split-data": t.splitTwoData,
                        "split-style": 4
                    }
                })], 1)]), e("div", {
                    staticClass: "main-content"
                }, [e("div", {
                    staticClass: "rwt-elements-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container-fluid plr--30"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Portfolio Box Layout",
                        title: "Happily Clients Complete <br /> Our Business Project!",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("Portfolio", {
                    attrs: {
                        "portfolio-data": t.portfolioData,
                        column: "col-lg-4 col-md-6 mt--30 box-grid-layout no-overlay"
                    }
                })], 1)])]), e("Separator"), e("div", {
                    staticClass: "rwt-pricingtable-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Our Pricing Table",
                        title: "Business Pricing Plan.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row mt--40"
                }, [e("div", {
                    staticClass: "col-lg-8 offset-lg-2"
                }, [e("AdvancePricing")], 1)])])]), e("Separator"), e("div", {
                    staticClass: "blog-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Latest News",
                        title: "Latest News From The Digital World.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row row--15"
                }, t._l(t.posts, function (a, i) {
                    return i < 3 ? e("div", {
                        key: i,
                        staticClass: "col-lg-4 col-md-6 col-sm-12 col-12 mt--30",
                        attrs: {
                            "data-aos": "slide-up",
                            "data-aos-duration": "800",
                            "data-aos-delay": 100 + i
                        }
                    }, [e("BlogPost", {
                        attrs: {
                            blog: a
                        }
                    })], 1) : t._e();
                }), 0)])])], 1);
            },
            Wd = [],
            Md = {
                name: "InternationalConsulting",
                components: {
                    Tab: Tn,
                    Split: ir,
                    Portfolio: Fo,
                    BlogPost: Xi,
                    AdvancePricing: Tl,
                    Separator: se,
                    SectionTitle: de,
                    Icon: x,
                    Layout: Zt
                },
                mixins: [Zi],
                data() {
                    return {
                        splitOneData: {
                            image: "split-01.jpg",
                            title: "What is DOOB?",
                            description: "Randomised words which don't look even slightly believable. If you are to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. in some form, by injectedeed bedhumour, or randomised even .",
                            list: ["- Doug DeMarco, Design Prototyping Manager", "- 108 million paying subscribers", "- Over 1.7 billion hours of music played monthly", "- 4,000+ employees working across 16 offices"],
                            btn: {
                                text: "Contact With Us",
                                link: "/contact"
                            }
                        },
                        splitTwoData: {
                            image: "split-03.jpg",
                            title: "Continue Your Business With Us.",
                            description: "Randomised words which don't look even slightly believable. If you are to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. in some form, by injectedeed bedhumour, or randomised even .",
                            counterData: [{
                                number: 199,
                                title: "Happy Clients"
                            }, {
                                number: 575,
                                title: "Employees"
                            }, {
                                number: 69,
                                title: "Useful Programs"
                            }, {
                                number: 500,
                                title: "Useful Programs"
                            }]
                        },
                        portfolioData: [{
                            id: 1,
                            portfolioImage: a("4eac"),
                            image: a("4eac"),
                            title: "App Development",
                            subtitle: "Branded client",
                            date: "30 May 2021",
                            client: "Rainbow Themes",
                            category: "development",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("4eac"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0edc")
                            }
                        }, {
                            id: 2,
                            portfolioImage: a("605d"),
                            image: a("605d"),
                            title: "Business Development",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2021",
                            client: "Rainbow Themes",
                            category: "design",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("605d"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0edc")
                            }
                        }, {
                            id: 3,
                            portfolioImage: a("0edc"),
                            image: a("0edc"),
                            title: "Photoshop Design",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2021",
                            client: "Rainbow Themes",
                            category: "art",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("0edc"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0edc")
                            }
                        }, {
                            id: 4,
                            portfolioImage: a("0513"),
                            image: a("0513"),
                            title: "Native Application",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2021",
                            client: "Rainbow Themes",
                            category: "development",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("0513"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0513")
                            }
                        }, {
                            id: 5,
                            portfolioImage: a("c827"),
                            image: a("c827"),
                            title: "Vue.js Development",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2021",
                            client: "Rainbow Themes",
                            category: "design",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("c827"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0edc")
                            }
                        }, {
                            id: 6,
                            portfolioImage: a("3150"),
                            image: a("3150"),
                            title: "App Installment",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2021",
                            client: "Rainbow Themes",
                            category: "design",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("3150"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("3150")
                            }
                        }],
                        tabData: [{
                            id: "strategy-menu",
                            text: "Strategy",
                            dataList: [{
                                image: "service-01.jpg",
                                title: "Awarded Design",
                                description: "There are many variations variats  of passages of Lorem Ipsum available."
                            }, {
                                image: "service-02.jpg",
                                title: "Design & Creative",
                                description: "Passages there are many variatin Lorem Ipsum available have suffered."
                            }]
                        }, {
                            id: "development-menu",
                            text: "Development",
                            dataList: [{
                                image: "service-03.jpg",
                                title: "App Development",
                                description: "There are many variations variats  of passages of Lorem Ipsum available."
                            }, {
                                image: "service-04.jpg",
                                title: "Business Design",
                                description: "Passages there are many variatin Lorem Ipsum available have suffered."
                            }]
                        }, {
                            id: "reporting-menu",
                            text: "Reporting",
                            dataList: [{
                                image: "service-03.jpg",
                                title: "App Development",
                                description: "There are many variations variats  of passages of Lorem Ipsum available."
                            }, {
                                image: "service-04.jpg",
                                title: "Business Design",
                                description: "Passages there are many variatin Lorem Ipsum available have suffered."
                            }, {
                                image: "service-04.jpg",
                                title: "Business Design",
                                description: "Passages there are many variatin Lorem Ipsum available have suffered."
                            }]
                        }]
                    };
                }
            },
            Od = Md,
            Ed = Object(l.a)(Od, jd, Wd, false, null, null, null),
            Vd = Ed.exports,
            Nd = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", {
                    attrs: {
                        "header-transparency": true,
                        "show-top-header": false
                    }
                }, [e("div", {
                    staticClass: "slider-area slider-style-4 variation-2 slider-dot rn-slick-dot rn-slick-arrow"
                }, [e("VueSlickCarousel", t._b({}, "VueSlickCarousel", t.sliderSetting, false), t._l(t.sliderData, function (i, s) {
                    return e("div", {
                        key: s,
                        staticClass: "single-slide"
                    }, [e("div", {
                        staticClass: "height-950 bg-overlay bg_image",
                        style: {
                            "background-image": `url(${a("90d3")(`./${i.image}.jpg`)})`
                        }
                    }, [e("div", {
                        staticClass: "container"
                    }, [e("div", {
                        staticClass: "row row--30 align-items-center"
                    }, [e("div", {
                        staticClass: "col-lg-12"
                    }, [e("div", {
                        staticClass: "inner text-center"
                    }, [e("h1", {
                        staticClass: "title",
                        domProps: {
                            innerHTML: t._s(i.title)
                        }
                    }), e("p", {
                        staticClass: "description",
                        domProps: {
                            innerHTML: t._s(i.description)
                        }
                    }), e("div", {
                        staticClass: "button-group mt--30"
                    }, [e("a", {
                        staticClass: "btn-default btn-large round",
                        attrs: {
                            href: "#"
                        }
                    }, [t._v(" Get started now ")])])])])])])])]);
                }), 0)], 1), e("Separator"), e("div", {
                    staticClass: "rwt-elements-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row mb--25"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Our Experience",
                        title: "25+ years work Experience",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "col-lg-10 offset-lg-1 mt--10"
                }, [e("Progressbar", {
                    attrs: {
                        "progress-data": t.progressData,
                        "progress-style": 5,
                        column: "col-lg-3 col-md-6 col-sm-6 mt--30 col-12"
                    }
                })], 1)])]), e("Separator"), e("div", {
                    staticClass: "rwt-timeline-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Working Process",
                        title: "Our Working Process.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-10 offset-lg-1 mt--50"
                }, [e("Timeline", {
                    attrs: {
                        "timeline-data": t.timelineData,
                        "timeline-style": 3
                    }
                })], 1)])])]), e("Separator"), e("div", {
                    staticClass: "rwt-elements-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container-fluid plr--30"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Portfolio",
                        title: "Our Completed Project!",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("Portfolio", {
                    attrs: {
                        "portfolio-data": t.portfolioData,
                        column: "col-lg-4 col-md-6 mt--30 box-grid-layout no-overlay"
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "rn-service-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        radiusRounded: "",
                        subtitle: "What we can do for you",
                        title: "Services provide for you.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("ServiceFour", {
                    attrs: {
                        "service-style": "service__style--1 icon-circle-style with-working-process",
                        "text-align": "center"
                    }
                })], 1)]), e("Separator"), e("div", {
                    staticClass: "blog-area rn-section-gap"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Latest News",
                        title: "Our Latest News.",
                        description: "We provide company and finance service for <br /> startups and company business.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row row--15"
                }, t._l(t.posts, function (a, i) {
                    return i < 3 ? e("div", {
                        key: i,
                        staticClass: "col-lg-4 col-md-6 col-sm-12 col-12 mt--30",
                        attrs: {
                            "data-aos": "slide-up",
                            "data-aos-duration": "800",
                            "data-aos-delay": 100 + i
                        }
                    }, [e("BlogPost", {
                        attrs: {
                            blog: a
                        }
                    })], 1) : t._e();
                }), 0)])])], 1);
            },
            Hd = [],
            qd = {
                name: "Startup",
                components: {
                    ServiceFour: Va,
                    Timeline: Me,
                    Progressbar: Ci,
                    Portfolio: Fo,
                    BlogPost: Xi,
                    SectionTitle: de,
                    Separator: se,
                    Layout: Zt,
                    VueSlickCarousel: pn.a
                },
                mixins: [Zi],
                data() {
                    return {
                        sliderSetting: {
                            infinite: true,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                            arrows: true,
                            responsive: [{
                                breakpoint: 800,
                                settings: {
                                    slidesToShow: 1
                                }
                            }, {
                                breakpoint: 993,
                                settings: {
                                    slidesToShow: 1
                                }
                            }, {
                                breakpoint: 580,
                                settings: {
                                    slidesToShow: 1
                                }
                            }, {
                                breakpoint: 481,
                                settings: {
                                    slidesToShow: 1
                                }
                            }]
                        },
                        sliderData: [{
                            image: "bg-image-12",
                            title: "Startup Your <br/> Business Agency.",
                            description: "We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials."
                        }, {
                            image: "bg-image-18",
                            title: "Startup Your <br/> Creative Agency.",
                            description: "We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials."
                        }],
                        portfolioData: [{
                            id: 1,
                            portfolioImage: a("4eac"),
                            image: a("4eac"),
                            title: "App Development",
                            subtitle: "Branded client",
                            date: "30 May 2021",
                            client: "Rainbow Themes",
                            category: "development",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("4eac"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0edc")
                            }
                        }, {
                            id: 2,
                            portfolioImage: a("605d"),
                            image: a("605d"),
                            title: "Business Development",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2021",
                            client: "Rainbow Themes",
                            category: "design",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("605d"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0edc")
                            }
                        }, {
                            id: 3,
                            portfolioImage: a("0edc"),
                            image: a("0edc"),
                            title: "Photoshop Design",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2021",
                            client: "Rainbow Themes",
                            category: "art",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("0edc"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0edc")
                            }
                        }, {
                            id: 4,
                            portfolioImage: a("0513"),
                            image: a("0513"),
                            title: "Native Application",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2021",
                            client: "Rainbow Themes",
                            category: "development",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("0513"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0513")
                            }
                        }, {
                            id: 5,
                            portfolioImage: a("c827"),
                            image: a("c827"),
                            title: "Vue.js Development",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2021",
                            client: "Rainbow Themes",
                            category: "design",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("c827"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("0edc")
                            }
                        }, {
                            id: 6,
                            portfolioImage: a("3150"),
                            image: a("3150"),
                            title: "App Installment",
                            subtitle: "Awesome portfolio",
                            date: "01 March 2021",
                            client: "Rainbow Themes",
                            category: "design",
                            awards: ["2020 Design beautiful apps Finale Awards"],
                            excerpt: "Design beautiful apps.",
                            body: "<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>",
                            btn: {
                                buttonText: "View Projects",
                                link: "/"
                            },
                            largeImage: a("3150"),
                            subContent: {
                                title: "Digital Marketing.",
                                subtext: "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent2: {
                                title: "App Development.",
                                subtext: "We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            subContent3: {
                                title: "Solution.",
                                subtext: "We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities."
                            },
                            gallery: {
                                imageOne: a("4eac"),
                                imageTwo: a("605d"),
                                imageThree: a("3150")
                            }
                        }],
                        progressData: [{
                            id: 1,
                            title: "Design",
                            percentage: 85,
                            subtitle: "Presentation your skill",
                            strokeColor: "#0f0f11",
                            strokePath: "#059DFF"
                        }, {
                            id: 2,
                            title: "Photoshop",
                            percentage: 60,
                            subtitle: "Presentation your skill",
                            strokeColor: "#0f0f11",
                            strokePath: "#059DFF"
                        }, {
                            id: 3,
                            title: "Application",
                            percentage: 70,
                            subtitle: "Presentation your skill",
                            strokeColor: "#0f0f11",
                            strokePath: "#059DFF"
                        }, {
                            id: 4,
                            title: "Development",
                            percentage: 95,
                            subtitle: "Presentation your skill",
                            strokeColor: "#0f0f11",
                            strokePath: "#059DFF"
                        }],
                        timelineData: [{
                            id: "1",
                            title: "Knowledge",
                            description: "Present all available features in Essentials."
                        }, {
                            id: "2",
                            title: "Working",
                            description: "All Feature available features in Essentials."
                        }, {
                            id: "3",
                            title: "Solution",
                            description: "Popular Feature available features in Essentials."
                        }, {
                            id: "4",
                            title: "Process",
                            description: "Latest Feature available features in Essentials."
                        }]
                    };
                }
            },
            zd = qd,
            Yd = Object(l.a)(zd, Nd, Hd, false, null, null, null),
            Jd = Yd.exports,
            Gd = function () {
                var t = this,
                    e = t._self._c;
                return e("Layout", {
                    attrs: {
                        "buy-button-class": "btn-default btn-small"
                    }
                }, [e("div", {
                    staticClass: "slider-area slider-style-8 height-650"
                }, [e("div", {
                    staticClass: "single-slide"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row align-items-center"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("div", {
                    staticClass: "inner text-center"
                }, [e("span", {
                    staticClass: "subtitle theme-gradient",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "100"
                    }
                }, [t._v("Hello! This is WebAgency")]), e("h1", {
                    staticClass: "title",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "150"
                    }
                }, [t._v(" Our Web "), e("br"), t._v(" Agecny Plan. ")]), e("p", {
                    staticClass: "description",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "200"
                    }
                }, [t._v(" We help our clients succeed by creating brand identities, "), e("br"), t._v(" digital experiences, and print materials. ")]), e("div", {
                    staticClass: "button-group mt--30",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "250"
                    }
                }, [e("router-link", {
                    staticClass: "btn-default btn-large round",
                    attrs: {
                        to: "#"
                    }
                }, [t._v(" Explore Now ")]), e("router-link", {
                    staticClass: "btn-default btn-border btn-large round",
                    attrs: {
                        to: "/contact"
                    }
                }, [t._v(" Contact Us ")])], 1)])])])])])]), e("div", {
                    staticClass: "our-counterup-area"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("div", {
                    staticClass: "thumbnail",
                    attrs: {
                        "data-aos": "fade-up"
                    }
                }, [e("img", {
                    staticClass: "radius w-100",
                    attrs: {
                        src: a("c8e8"),
                        alt: "Images"
                    }
                })]), e("div", {
                    staticClass: "rwt-counterup-area ptb--60"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("Counter", {
                    attrs: {
                        "counter-style": 5,
                        "text-align": "center",
                        "counter-data": t.counterData,
                        column: "col-lg-3 col-md-6 col-sm-6 col-12"
                    }
                })], 1)])])])])]), e("Separator"), e("div", {
                    staticClass: "service-area rn-section-gapTop"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row align-items-center"
                }, [e("div", {
                    staticClass: "col-lg-6"
                }, [e("div", {
                    staticClass: "content",
                    attrs: {
                        "data-aos": "fade-up"
                    }
                }, [e("h3", {
                    staticClass: "title"
                }, [t._v("We are creative digital agency working for our company brands.")])])]), e("div", {
                    staticClass: "col-lg-6"
                }, [e("p", {
                    staticClass: "mb--10",
                    attrs: {
                        "data-aos": "fade-up"
                    }
                }, [t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quis. Ullam accusantium dignissimos repellendus nemo fugiat numquam, nisi odio adipisci. Veniam neque itaque expedita officiis rem ipsa! Ratione, rem reiciendis? ")]), e("div", {
                    staticClass: "readmore-btn",
                    attrs: {
                        "data-aos": "fade-up"
                    }
                }, [e("router-link", {
                    staticClass: "btn-read-more",
                    attrs: {
                        to: "#"
                    }
                }, [e("span", [t._v("View More")])])], 1)])])])]), e("div", {
                    staticClass: "rn-service-area rn-section-gapTop"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "What we can do for you",
                        title: "Services provide for you.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("ServiceOne", {
                    attrs: {
                        "service-style": "service__style--1 icon-circle-style",
                        "text-align": "center",
                        "icon-size": "39"
                    }
                })], 1)]), e("AboutFour", {
                    attrs: {
                        image: a("66d6")
                    }
                }), e("div", {
                    staticClass: "rwt-pricingtable-area rn-section-gapBottom"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Our Pricing Plan",
                        title: "Web Pricing Plan.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row mt--30"
                }, [e("div", {
                    staticClass: "col-lg-8 offset-lg-2"
                }, [e("AdvancePricing")], 1)])])]), e("div", {
                    staticClass: "rwt-brand-area rn-section-gapBottom"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12"
                }, [e("SectionTitle", {
                    attrs: {
                        "text-align": "center",
                        subtitle: "Our Awesome Client",
                        title: "Our Awesome Client.",
                        "data-aos": "fade-up"
                    }
                })], 1)]), e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-12 mt--40"
                }, [e("Brand", {
                    attrs: {
                        "brand-list": t.brandList
                    }
                })], 1)])])])], 1);
            },
            Xd = [],
            Zd = {
                name: "WebAgency",
                components: {
                    ServiceOne: Ie,
                    Counter: Je,
                    Brand: ea,
                    AdvancePricing: Tl,
                    AboutFour: ke,
                    SectionTitle: de,
                    Separator: se,
                    Layout: Zt
                },
                data() {
                    return {
                        brandList: [{
                            image: a("704a")
                        }, {
                            image: a("e69f")
                        }, {
                            image: a("99d3")
                        }, {
                            image: a("42f7")
                        }, {
                            image: a("a5f5")
                        }, {
                            image: a("e47b")
                        }, {
                            image: a("d2f2")
                        }, {
                            image: a("66be")
                        }],
                        counterData: [{
                            number: 199,
                            title: "Happy Clients"
                        }, {
                            number: 575,
                            title: "Employees"
                        }, {
                            number: 69,
                            title: "Useful Programs"
                        }, {
                            number: 500,
                            title: "Useful Programs"
                        }]
                    };
                }
            },
            $d = Zd,
            tp = Object(l.a)($d, Gd, Xd, false, null, null, null),
            ep = tp.exports;
        i.a.use(p.a);
        const ap = [{
                path: "/",
                name: "Demo",
                component: ge,
                meta: {
                    title: "Doob || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/button",
                name: "Button",
                component: Fa,
                meta: {
                    title: "Button || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/about",
                name: "About",
                component: pa,
                meta: {
                    title: "About || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/service",
                name: "Service",
                component: $a,
                meta: {
                    title: "Service || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/service-details",
                name: "Service Details",
                component: oi,
                meta: {
                    title: "Service Details || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/counter",
                name: "Counter",
                component: pi,
                meta: {
                    title: "Counter || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/progressbar",
                name: "Progressbar",
                component: xi,
                meta: {
                    title: "Progressbar || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/accordion",
                name: "Accordion",
                component: Qi,
                meta: {
                    title: "Accordion || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/social-share",
                name: "Social share",
                component: Vi,
                meta: {
                    title: "Social Share || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/blog-grid",
                name: "Blog grid",
                component: as,
                meta: {
                    title: "Blog Grid || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/blog-grid-sidebar",
                name: "Blog grid sidebar",
                component: js,
                meta: {
                    title: "Blog Grid Sidebar || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/blog-list",
                name: "Blog list",
                component: Ns,
                meta: {
                    title: "Blog List || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/blog-list-sidebar",
                name: "Blog list sidebar",
                component: Gs,
                meta: {
                    title: "Blog List Sidebar || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/blog-details/:id",
                name: "Blog details",
                component: ao,
                meta: {
                    title: "Blog Details || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/category/:slug",
                name: "Blog Category List",
                component: lo,
                meta: {
                    title: "Blog Category List || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/team",
                name: "Team",
                component: bo,
                meta: {
                    title: "Team || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/portfolio",
                name: "Portfolio",
                component: ko,
                meta: {
                    title: "Portfolio || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/portfolio-three-column",
                name: "Portfolio three column",
                component: Io,
                meta: {
                    title: "Portfolio Three Column || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/portfolio-full-width",
                name: "Portfolio full width",
                component: Mo,
                meta: {
                    title: "Portfolio Full Width || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/portfolio-grid-layout",
                name: "Portfolio grid layout",
                component: qo,
                meta: {
                    title: "Portfolio Grid Layout || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/portfolio-box-layout",
                name: "Portfolio box layout",
                component: Zo,
                meta: {
                    title: "Portfolio Box Layout || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/portfolio-details/:id",
                name: "Portfolio details",
                component: on,
                meta: {
                    title: "Portfolio Details || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/testimonial",
                name: "Testimonial",
                component: An,
                meta: {
                    title: "Testimonial || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/timeline",
                name: "Timeline",
                component: xn,
                meta: {
                    title: "Timeline || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/tab",
                name: "Tab",
                component: Qn,
                meta: {
                    title: "Tab || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/pricing",
                name: "Pricing",
                component: Jn,
                meta: {
                    title: "Pricing || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/spit-section",
                name: "Split section",
                component: rr,
                meta: {
                    title: "Split Section || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/call-to-action",
                name: "Call to action",
                component: mr,
                meta: {
                    title: "Call to Action || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/video",
                name: "Video",
                component: Ar,
                meta: {
                    title: "Video || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/gallery",
                name: "Gallery",
                component: _r,
                meta: {
                    title: "Gallery || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/contact",
                name: "Contact",
                component: Jr,
                meta: {
                    title: "Contact || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/brand",
                name: "Brand",
                component: el,
                meta: {
                    title: "Brand || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/error",
                name: "Error",
                component: rl,
                meta: {
                    title: "404 || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/advance-tab",
                name: "Advance tab",
                component: Al,
                meta: {
                    title: "Advance Tab || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/brand-carousel",
                name: "Brand carousel",
                component: xl,
                meta: {
                    title: "Brand Carousel || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/advance-pricing",
                name: "Advance pricing",
                component: Ql,
                meta: {
                    title: "Advance Pricing || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/portfolio-details",
                name: "Portfolio details",
                component: on,
                meta: {
                    title: "Portfolio Details || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/blog-details",
                name: "Blog details",
                component: ao,
                meta: {
                    title: "Blog Details || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/business-consulting",
                name: "Business Consulting",
                component: Vl,
                meta: {
                    title: "Business Consulting || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/business-consulting-2",
                name: "Business Consulting 2",
                component: Jl,
                meta: {
                    title: "Business Consulting 2 || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/corporate",
                name: "Corporate",
                component: rc,
                meta: {
                    title: "Corporate || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/business",
                name: "Business",
                component: mc,
                meta: {
                    title: "Business || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/digital-agency",
                name: "Digital Agency",
                component: Ac,
                meta: {
                    title: "Digital Agency || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/finance",
                name: "Finance",
                component: xc,
                meta: {
                    title: "Finance || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/company",
                name: "Company",
                component: _c,
                meta: {
                    title: "Company || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/marketing-agency",
                name: "Marketing Agency",
                component: Qc,
                meta: {
                    title: "Marketing Agency || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/travel-agency",
                name: "Travel Agency",
                component: Vc,
                meta: {
                    title: "Travel Agency || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/consulting",
                name: "Consulting",
                component: Jc,
                meta: {
                    title: "Consulting || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/seo-agency",
                name: "SEO Agency",
                component: ed,
                meta: {
                    title: "SEO Agency || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/personal-portfolio",
                name: "Personal Portfolio",
                component: md,
                meta: {
                    title: "Personal Portfolio || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/event-conference",
                name: "Event Conference",
                component: Ad,
                meta: {
                    title: "Event Conference || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/creative-portfolio",
                name: "Creative Portfolio",
                component: xd,
                meta: {
                    title: "Creative Portfolio || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/freelancer",
                name: "Freelancer",
                component: Qd,
                meta: {
                    title: "Freelancer || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/international-consulting",
                name: "International Consulting",
                component: Vd,
                meta: {
                    title: "International Consulting || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/startup",
                name: "Startup",
                component: Jd,
                meta: {
                    title: "Startup || Doob Business and Consulting Bootstrap5 Template"
                }
            }, {
                path: "/web-agency",
                name: "Web Agency",
                component: ep,
                meta: {
                    title: "Web Agency || Doob Business and Consulting Bootstrap5 Template"
                }
            }],
            ip = new p.a({
                base: "",
                routes: ap
            });
        ip.beforeEach((t, e, a) => {
            document.title = t.meta.title, a(), window.scrollTo(0, 0);
        });
        var sp = ip,
            op = (a("21b6"), a("77ed"), a("7b8d"), a("6a2c"), a("2223"), a("78a7"), a("7b17"), a("5547")),
            np = a("e057"),
            rp = a.n(np),
            lp = a("f5af"),
            cp = a.n(lp),
            dp = (a("e829"), a("8cb8"));
        i.a.config.productionTip = false, i.a.use(op.a), i.a.use(rp.a), i.a.use(dp.default), new i.a({
            router: sp,
            created() {
                cp.a.init({
                    duration: 800,
                    once: true
                });
            },
            render: t => t(d)
        }).$mount("#app");
    },
    5805: function (t, e, a) {
        t.exports = a.p + "img/split-04.1dba12e3.jpg";
    },
    "5afc": function (t, e) {
        t.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCADwAYYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD6gooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA82+Osvj5vDEFn8P7My6jcylbi6WaKNoIgP4fMYDLE4yM4APQ4NeKprPj/4FfFjwno+seLbjxXY640STwXLvJs3yeWwXeSQVJBBBGcYIr6U8XeMtC8J28Ueta1a6M14rpbyXEgTcQBkr9Nw/OvlXXPDWofA744+DNQ8Rau3j0XzLHHdah5nnQfOE3KGkbld+VySOvAOCADvvjh468UeIfi1ofw08LatJoJuUWS6v4CVkyQzkAjBAVFzgEZJxmpvgF4+8Saf8R/Efw48Vam+tXGnBpbW/lJMjBSuQSeSGV1YZyRgjJ4qb41fCPxbcfEzRvH/AIGW3udVtUWOa0uJFTJXIDfMQCpVipGQeOOvHC/s9prPiT9pPxNrGrSW097bW832yax5gWQsiBEPcDBAPOdhOT1IA+78Q+Pvjn4+8Zp4d8UXPh3SvDqv9mgtZHjE5VmVA20gkvsYknOOBivQvgX8eE1n4SXuueL7wxyaNcC2u71YGcujbfLdljUnPzbSQO2T1riP2WJF03xV8V4blhFJE2XDHGAjzhj+GRT/ANjvRrTV/ht42t9URW0q7mFvOXOF2eUd/PbAYHPagD2zUfjp4G0nw3pev3WvJHpWps6Wk4t5mMpQ4cbAhYYPByB29a83+LWs+P8Axz8S9L8HeFJdT8OaHJEslxrkdtLGpYoZDmTAIwuF25BLEg+3z18FbbT9f+LvhnQ9U1F7jw/aX80lksq4SR/vIMHpvZEyO/TvX2N8bfi9Y/CLwm96+yfVrnMdhZk/6x8feb/YXIJ/AdTQB5j+z7438V6f8VvEnw+8R6vL4gisI5JIrydi8isjqPvHnDB+hJwQMd60P2s/ivfeEdDs/Dug3c9prV//AKTNPaSMksFshzkMuCu5hjI7Kw71o/s2fC2/8K6fqPjHxIXl8T6+DPKsg+eGJjvwR/eY4YjthRwQa+a9a+LmleKr74haxrFveyazrcC2elKiI0NrAHU4YlgQdqIPlB/i/vUAfS3wj8f3uk/syp4q1W6uNWvbS3vJzLeTNI8rLNIEVnYk44VfYV4n/wAJH8Uh8PP+Fr/8JpdeV9v8v+y9x8jZv2bvLzsxv+Xbt6c5ro/h54mt/EP7I3irQrWGcXmi20huGdQEYPM8oKEEk4UHOQPxqobqL/hhxY/MXf8Aa/Lxn+L7bux/3zzQB9S+BPE6+NPBui66qCL7faxztGDkIxX5l/A5H4Vu159+z9A9v8GPCSyAqxslcA+jEkfoRXoNABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAHEfFr4TaT8XvDqaZqbyW0sEnm213BjfC+MHg9VI6j6dCAa8/wDBP7KtpoPimw1zxD4nvvFdxpxU2cVzGUSMqcpnLuSFPIAIGfyr3eigDhvi58Nrn4oaDa6Zb+ILnw+kdx5s0lqpYzJtZTGcMvHzZ5z06VP8L/hTofwm0JtO0ZJHeZg9zdzkGWdgOCSAAAOcAcDJ7kk9lRQB4Z8Qv2WbPxb4q1DXNH8R3nhmbU1Zb+G3j3pPu+/0dcBsZIOQTziunj+Cdvo3wiu/Avh3VH0hbtSs+pSQ+dJJvI8wlQyjLKNvXgV6ZRQB4Bf/ALJVk/hLwxpuneIG0zV9FnkuDq6WW5p2dg2SnmDaVKpj5jgD3qf4q/syXvxR8Ww69N4ybT54reKFI0sC4RkHLIfOG3LZbHbPU9a94ooA8e+HPwP8S+CfFdtq2pfEnVfEdpEjq2n3SSiNyykAndOw4Jz07V3XxE8DxePfBWq6As6aeb6IR/aRCJPLwwOduRnp6iunooA4r4bfDG38B/Di38I3Vyms2ypPHNK0HlCZJHdipXc3GHI615P/AMMY6d9v8j/hLdT/AOEZ+0faP7H2fxdPv7sZxxu2ZxX0bRQBBY2MGmWNvZ2sSwWtvGsUUSdERRhQPYAAVPRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//2Q==";
    },
    "5bc1": function (t, e, a) {
        t.exports = a.p + "img/team-02.886c5b36.jpg";
    },
    "5c77": function (t, e, a) {
        t.exports = a.p + "img/service-light.5f00a95c.png";
    },
    "5d07": function (t, e, a) {
        t.exports = a.p + "img/bg-image-18.0d2d668d.jpg";
    },
    "5e43": function (t, e, a) {
        t.exports = a.p + "img/company.e8179dd0.png";
    },
    "5f80": function (t, e, a) {
        t.exports = a.p + "img/bg-image-5.0d2d668d.jpg";
    },
    "605d": function (t, e, a) {
        t.exports = a.p + "img/portfolio-02.5dee8713.jpg";
    },
    6105: function (t, e, a) {
        t.exports = a.p + "img/business.b4c1a567.png";
    },
    6114: function (t, e, a) {
        t.exports = a.p + "img/business-consulting-light.72dc580e.png";
    },
    "624a": function (t, e, a) {
        t.exports = a.p + "img/service-05.89925d87.jpg";
    },
    6254: function (t, e, a) {
        t.exports = a.p + "img/portfolio-full-width.24fbf3c3.png";
    },
    "649c": function (t, e, a) {
        t.exports = a.p + "img/progressbar-light.a8568564.png";
    },
    "65dd": function (t, e, a) {
        t.exports = a.p + "img/timeline-02.c3bfb8db.jpg";
    },
    "66be": function (t, e, a) {
        t.exports = a.p + "img/brand-08.cddf7ae6.png";
    },
    "66d6": function (t, e, a) {
        t.exports = a.p + "img/contact-image.d9e9d79e.jpg";
    },
    "68fe": function (t, e, a) {
        t.exports = a.p + "img/pricing.a603e255.png";
    },
    6996: function (t, e, a) {
        t.exports = a.p + "img/logo-dark.2b54f458.png";
    },
    "69d1": function (t, e, a) {
        t.exports = a.p + "img/blog-grid-sidebar-light.b60a884e.png";
    },
    "6a75": function (t, e, a) {
        t.exports = a.p + "img/freelancer.5cfb4121.png";
    },
    "6a78": function (t, e, a) {
        t.exports = a.p + "img/tabs-01.f16c1f08.jpg";
    },
    "6b2e": function (t, e, a) {
        t.exports = a.p + "img/contact-light.8965247b.png";
    },
    "6db0": function (t, e, a) {
        t.exports = a.p + "img/icon-03---Copy---Copy.7f2e13dd.png";
    },
    "6e95": function (t, e, a) {
        t.exports = a.p + "img/digital-agency-light.a92da0ec.png";
    },
    "702a": function (t, e) {
        t.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCADwAYYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD6gooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA82+Osvj5vDEFn8P7My6jcylbi6WaKNoIgP4fMYDLE4yM4APQ4NeKprPj/4FfFjwno+seLbjxXY640STwXLvJs3yeWwXeSQVJBBBGcYIr6U8XeMtC8J28Ueta1a6M14rpbyXEgTcQBkr9Nw/OvlXXPDWofA744+DNQ8Rau3j0XzLHHdah5nnQfOE3KGkbld+VySOvAOCADvvjh468UeIfi1ofw08LatJoJuUWS6v4CVkyQzkAjBAVFzgEZJxmpvgF4+8Saf8R/Efw48Vam+tXGnBpbW/lJMjBSuQSeSGV1YZyRgjJ4qb41fCPxbcfEzRvH/AIGW3udVtUWOa0uJFTJXIDfMQCpVipGQeOOvHC/s9prPiT9pPxNrGrSW097bW832yax5gWQsiBEPcDBAPOdhOT1IA+78Q+Pvjn4+8Zp4d8UXPh3SvDqv9mgtZHjE5VmVA20gkvsYknOOBivQvgX8eE1n4SXuueL7wxyaNcC2u71YGcujbfLdljUnPzbSQO2T1riP2WJF03xV8V4blhFJE2XDHGAjzhj+GRT/ANjvRrTV/ht42t9URW0q7mFvOXOF2eUd/PbAYHPagD2zUfjp4G0nw3pev3WvJHpWps6Wk4t5mMpQ4cbAhYYPByB29a83+LWs+P8Axz8S9L8HeFJdT8OaHJEslxrkdtLGpYoZDmTAIwuF25BLEg+3z18FbbT9f+LvhnQ9U1F7jw/aX80lksq4SR/vIMHpvZEyO/TvX2N8bfi9Y/CLwm96+yfVrnMdhZk/6x8feb/YXIJ/AdTQB5j+z7438V6f8VvEnw+8R6vL4gisI5JIrydi8isjqPvHnDB+hJwQMd60P2s/ivfeEdDs/Dug3c9prV//AKTNPaSMksFshzkMuCu5hjI7Kw71o/s2fC2/8K6fqPjHxIXl8T6+DPKsg+eGJjvwR/eY4YjthRwQa+a9a+LmleKr74haxrFveyazrcC2elKiI0NrAHU4YlgQdqIPlB/i/vUAfS3wj8f3uk/syp4q1W6uNWvbS3vJzLeTNI8rLNIEVnYk44VfYV4n/wAJH8Uh8PP+Fr/8JpdeV9v8v+y9x8jZv2bvLzsxv+Xbt6c5ro/h54mt/EP7I3irQrWGcXmi20huGdQEYPM8oKEEk4UHOQPxqobqL/hhxY/MXf8Aa/Lxn+L7bux/3zzQB9S+BPE6+NPBui66qCL7faxztGDkIxX5l/A5H4Vu159+z9A9v8GPCSyAqxslcA+jEkfoRXoNABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAHEfFr4TaT8XvDqaZqbyW0sEnm213BjfC+MHg9VI6j6dCAa8/wDBP7KtpoPimw1zxD4nvvFdxpxU2cVzGUSMqcpnLuSFPIAIGfyr3eigDhvi58Nrn4oaDa6Zb+ILnw+kdx5s0lqpYzJtZTGcMvHzZ5z06VP8L/hTofwm0JtO0ZJHeZg9zdzkGWdgOCSAAAOcAcDJ7kk9lRQB4Z8Qv2WbPxb4q1DXNH8R3nhmbU1Zb+G3j3pPu+/0dcBsZIOQTziunj+Cdvo3wiu/Avh3VH0hbtSs+pSQ+dJJvI8wlQyjLKNvXgV6ZRQB4Bf/ALJVk/hLwxpuneIG0zV9FnkuDq6WW5p2dg2SnmDaVKpj5jgD3qf4q/syXvxR8Ww69N4ybT54reKFI0sC4RkHLIfOG3LZbHbPU9a94ooA8e+HPwP8S+CfFdtq2pfEnVfEdpEjq2n3SSiNyykAndOw4Jz07V3XxE8DxePfBWq6As6aeb6IR/aRCJPLwwOduRnp6iunooA4r4bfDG38B/Di38I3Vyms2ypPHNK0HlCZJHdipXc3GHI615P/AMMY6d9v8j/hLdT/AOEZ+0faP7H2fxdPv7sZxxu2ZxX0bRQBBY2MGmWNvZ2sSwWtvGsUUSdERRhQPYAAVPRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//2Q==";
    },
    "704a": function (t, e, a) {
        t.exports = a.p + "img/brand-01.1a105c78.png";
    },
    7205: function (t, e, a) {
        var i = {
            "./New folder/New folder/service-01.jpg": "a148",
            "./New folder/New folder/service-02.jpg": "07bb",
            "./New folder/New folder/service-03.jpg": "e60d",
            "./New folder/New folder/service-04.jpg": "d970",
            "./New folder/New folder/service-05.jpg": "624a",
            "./New folder/New folder/service-06.jpg": "1053",
            "./New folder/service-01.jpg": "03ed",
            "./New folder/service-02.jpg": "77d8",
            "./New folder/service-03.jpg": "b761",
            "./New folder/service-04.jpg": "03c3",
            "./New folder/service-05.jpg": "2a15",
            "./New folder/service-06.jpg": "d895",
            "./dashed-line.svg": "bedf",
            "./gallery-image-01.png": "89cd",
            "./gallery-image-02.png": "b8be",
            "./gallery-image-03.png": "c422",
            "./icon-01.png": "0a35",
            "./icon-02.png": "7a74",
            "./icon-03 - Copy.png": "368e",
            "./icon-03---Copy---Copy.png": "6db0",
            "./icon-03---Copy.png": "79be",
            "./icon-03.png": "ee85",
            "./icon-04.png": "079c",
            "./service-01.jpg": "19bd",
            "./service-02.jpg": "e545",
            "./service-03.jpg": "f749",
            "./service-04.jpg": "7321",
            "./service-05.jpg": "f1ba",
            "./service-06.jpg": "072f"
        };

        function s(t) {
            var e = o(t);
            return a(e);
        }

        function o(t) {
            if (!a.o(i, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e;
            }
            return i[t];
        }
        s.keys = function () {
            return Object.keys(i);
        }, s.resolve = o, t.exports = s, s.id = "7205";
    },
    7321: function (t, e, a) {
        t.exports = a.p + "img/service-04.89925d87.jpg";
    },
    "73c8": function (t, e, a) {
        t.exports = a.p + "img/marketing.39f2d764.png";
    },
    7481: function (t, e, a) {
        t.exports = a.p + "img/video-popup-light.61c54092.png";
    },
    "77d8": function (t, e, a) {
        t.exports = a.p + "img/service-02.89925d87.jpg";
    },
    "78a7": function (t, e, a) {},
    "78e4": function (t, e, a) {
        t.exports = a.p + "img/portfolio-three-column-light.1f330d6f.png";
    },
    "79be": function (t, e, a) {
        t.exports = a.p + "img/icon-03---Copy.7186026f.png";
    },
    "7a5d": function (t, e, a) {
        t.exports = a.p + "img/bg-image-7.0d2d668d.jpg";
    },
    "7a74": function (t, e, a) {
        t.exports = a.p + "img/icon-02.5e657457.png";
    },
    "7aa8": function (t, e, a) {
        t.exports = a.p + "img/coming-soon.669a260f.png";
    },
    "7b97": function (t, e, a) {
        t.exports = a.p + "img/call-to-action.6b905fff.png";
    },
    "7c11": function (t, e, a) {
        t.exports = a.p + "img/portfolio-details-light.2717c0d8.png";
    },
    "7dae": function (t, e, a) {
        t.exports = a.p + "img/marketing-light.f33fc06c.png";
    },
    "7ecc": function (t, e, a) {
        t.exports = a.p + "img/split-02.1dba12e3.jpg";
    },
    "7fce": function (t, e, a) {
        t.exports = a.p + "img/bg-image-15.0d2d668d.jpg";
    },
    "807b": function (t, e, a) {
        t.exports = a.p + "img/freelancer-light.4b79a114.png";
    },
    "83a7": function (t, e, a) {
        t.exports = a.p + "img/seo-agency-light.65a2412b.png";
    },
    "89cd": function (t, e, a) {
        t.exports = a.p + "img/gallery-image-01.4a3fc800.png";
    },
    "908b": function (t, e, a) {
        t.exports = a.p + "img/international-consulting.5f83f87c.png";
    },
    "90d3": function (t, e, a) {
        var i = {
            "./bg-image-1.jpg": "06b0",
            "./bg-image-10.jpg": "c764",
            "./bg-image-11.jpg": "4098",
            "./bg-image-12.jpg": "ec1b",
            "./bg-image-13.jpg": "a445",
            "./bg-image-14.jpg": "cd52",
            "./bg-image-15.jpg": "7fce",
            "./bg-image-17.jpg": "2727",
            "./bg-image-18.jpg": "5d07",
            "./bg-image-19.jpg": "a134",
            "./bg-image-2.jpg": "376b",
            "./bg-image-20.jpg": "d9c1",
            "./bg-image-21.jpg": "c8e8",
            "./bg-image-3.jpg": "1449",
            "./bg-image-4.jpg": "54ea",
            "./bg-image-5.jpg": "5f80",
            "./bg-image-6.jpg": "4896",
            "./bg-image-7.jpg": "7a5d",
            "./bg-image-8.jpg": "52a6",
            "./bg-image-9.jpg": "103c"
        };

        function s(t) {
            var e = o(t);
            return a(e);
        }

        function o(t) {
            if (!a.o(i, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e;
            }
            return i[t];
        }
        s.keys = function () {
            return Object.keys(i);
        }, s.resolve = o, t.exports = s, s.id = "90d3";
    },
    "928f": function (t, e, a) {
        t.exports = a.p + "img/corporate-light.ee7a323d.png";
    },
    9686: function (t, e, a) {
        t.exports = a.p + "img/blog-list-sidebar-light.87e47855.png";
    },
    "96a7": function (t, e, a) {
        t.exports = a.p + "img/bg-image-16.0f451b50.png";
    },
    9747: function (t, e, a) {
        t.exports = a.p + "img/portfolio-light.bbf83e7a.png";
    },
    "99d3": function (t, e, a) {
        t.exports = a.p + "img/brand-03.db75478b.png";
    },
    "9a59": function (t, e, a) {
        t.exports = a.p + "img/business-consulting.6814b1c3.png";
    },
    "9a591": function (t, e, a) {
        t.exports = a.p + "img/contact.e35f6ba9.png";
    },
    "9e69": function (t, e, a) {
        t.exports = a.p + "img/testimonial-dark-03.886c5b36.jpg";
    },
    "9f4e": function (t, e, a) {
        t.exports = a.p + "img/tabs-03.f16c1f08.jpg";
    },
    "9ff7": function (t, e, a) {
        t.exports = a.p + "img/tabs-02.f16c1f08.jpg";
    },
    a09b: function (t, e, a) {
        t.exports = a.p + "img/seo-agency.80f7cadf.png";
    },
    a134: function (t, e, a) {
        t.exports = a.p + "img/bg-image-19.0d2d668d.jpg";
    },
    a148: function (t, e, a) {
        t.exports = a.p + "img/service-01.89925d87.jpg";
    },
    a162: function (t, e, a) {
        t.exports = a.p + "img/portfolio-box-layout-light.2f1a52a8.png";
    },
    a389: function (t, e, a) {
        t.exports = a.p + "img/portfolio-grid-layout.b5e7afc4.png";
    },
    a445: function (t, e, a) {
        t.exports = a.p + "img/bg-image-13.0d2d668d.jpg";
    },
    a4ef: function (t, e, a) {
        t.exports = a.p + "img/logo.a52a714d.png";
    },
    a5f5: function (t, e, a) {
        t.exports = a.p + "img/brand-05.41d12230.png";
    },
    a630: function (t, e, a) {
        t.exports = a.p + "img/team-08.1512b183.jpg";
    },
    a6af: function (t, e, a) {
        t.exports = a.p + "img/pricing-light.639a98cd.png";
    },
    a768: function (t, e, a) {
        t.exports = a.p + "img/advance-tab.cda7cbac.png";
    },
    a831: function (t, e, a) {
        t.exports = a.p + "img/team-06.1512b183.jpg";
    },
    a907: function (t, e, a) {
        t.exports = a.p + "img/consulting.c36af526.png";
    },
    a93b: function (t, e, a) {
        t.exports = a.p + "img/team-dark-01.8f312446.jpg";
    },
    aa45: function (t, e, a) {
        t.exports = a.p + "img/button-light.16a298cc.png";
    },
    ab1a: function (t, e) {
        t.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCADwAYYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD6gooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA82+Osvj5vDEFn8P7My6jcylbi6WaKNoIgP4fMYDLE4yM4APQ4NeKprPj/4FfFjwno+seLbjxXY640STwXLvJs3yeWwXeSQVJBBBGcYIr6U8XeMtC8J28Ueta1a6M14rpbyXEgTcQBkr9Nw/OvlXXPDWofA744+DNQ8Rau3j0XzLHHdah5nnQfOE3KGkbld+VySOvAOCADvvjh468UeIfi1ofw08LatJoJuUWS6v4CVkyQzkAjBAVFzgEZJxmpvgF4+8Saf8R/Efw48Vam+tXGnBpbW/lJMjBSuQSeSGV1YZyRgjJ4qb41fCPxbcfEzRvH/AIGW3udVtUWOa0uJFTJXIDfMQCpVipGQeOOvHC/s9prPiT9pPxNrGrSW097bW832yax5gWQsiBEPcDBAPOdhOT1IA+78Q+Pvjn4+8Zp4d8UXPh3SvDqv9mgtZHjE5VmVA20gkvsYknOOBivQvgX8eE1n4SXuueL7wxyaNcC2u71YGcujbfLdljUnPzbSQO2T1riP2WJF03xV8V4blhFJE2XDHGAjzhj+GRT/ANjvRrTV/ht42t9URW0q7mFvOXOF2eUd/PbAYHPagD2zUfjp4G0nw3pev3WvJHpWps6Wk4t5mMpQ4cbAhYYPByB29a83+LWs+P8Axz8S9L8HeFJdT8OaHJEslxrkdtLGpYoZDmTAIwuF25BLEg+3z18FbbT9f+LvhnQ9U1F7jw/aX80lksq4SR/vIMHpvZEyO/TvX2N8bfi9Y/CLwm96+yfVrnMdhZk/6x8feb/YXIJ/AdTQB5j+z7438V6f8VvEnw+8R6vL4gisI5JIrydi8isjqPvHnDB+hJwQMd60P2s/ivfeEdDs/Dug3c9prV//AKTNPaSMksFshzkMuCu5hjI7Kw71o/s2fC2/8K6fqPjHxIXl8T6+DPKsg+eGJjvwR/eY4YjthRwQa+a9a+LmleKr74haxrFveyazrcC2elKiI0NrAHU4YlgQdqIPlB/i/vUAfS3wj8f3uk/syp4q1W6uNWvbS3vJzLeTNI8rLNIEVnYk44VfYV4n/wAJH8Uh8PP+Fr/8JpdeV9v8v+y9x8jZv2bvLzsxv+Xbt6c5ro/h54mt/EP7I3irQrWGcXmi20huGdQEYPM8oKEEk4UHOQPxqobqL/hhxY/MXf8Aa/Lxn+L7bux/3zzQB9S+BPE6+NPBui66qCL7faxztGDkIxX5l/A5H4Vu159+z9A9v8GPCSyAqxslcA+jEkfoRXoNABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAHEfFr4TaT8XvDqaZqbyW0sEnm213BjfC+MHg9VI6j6dCAa8/wDBP7KtpoPimw1zxD4nvvFdxpxU2cVzGUSMqcpnLuSFPIAIGfyr3eigDhvi58Nrn4oaDa6Zb+ILnw+kdx5s0lqpYzJtZTGcMvHzZ5z06VP8L/hTofwm0JtO0ZJHeZg9zdzkGWdgOCSAAAOcAcDJ7kk9lRQB4Z8Qv2WbPxb4q1DXNH8R3nhmbU1Zb+G3j3pPu+/0dcBsZIOQTziunj+Cdvo3wiu/Avh3VH0hbtSs+pSQ+dJJvI8wlQyjLKNvXgV6ZRQB4Bf/ALJVk/hLwxpuneIG0zV9FnkuDq6WW5p2dg2SnmDaVKpj5jgD3qf4q/syXvxR8Ww69N4ybT54reKFI0sC4RkHLIfOG3LZbHbPU9a94ooA8e+HPwP8S+CfFdtq2pfEnVfEdpEjq2n3SSiNyykAndOw4Jz07V3XxE8DxePfBWq6As6aeb6IR/aRCJPLwwOduRnp6iunooA4r4bfDG38B/Di38I3Vyms2ypPHNK0HlCZJHdipXc3GHI615P/AMMY6d9v8j/hLdT/AOEZ+0faP7H2fxdPv7sZxxu2ZxX0bRQBBY2MGmWNvZ2sSwWtvGsUUSdERRhQPYAAVPRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//2Q==";
    },
    abc4: function (t, e, a) {
        t.exports = a.p + "img/social-share.60ca7811.png";
    },
    abe8: function (t, e, a) {
        t.exports = a.p + "img/corporate.b0fb3790.png";
    },
    b099: function (t, e, a) {
        t.exports = a.p + "img/about-2.e2fb3cf8.png";
    },
    b0b6: function (t, e, a) {
        var i = {
            "./timeline-01.jpg": "4d23",
            "./timeline-02.jpg": "65dd"
        };

        function s(t) {
            var e = o(t);
            return a(e);
        }

        function o(t) {
            if (!a.o(i, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e;
            }
            return i[t];
        }
        s.keys = function () {
            return Object.keys(i);
        }, s.resolve = o, t.exports = s, s.id = "b0b6";
    },
    b697: function (t, e, a) {
        var i = {
            "./team-01.jpg": "bf62",
            "./team-02.jpg": "5bc1",
            "./team-03.jpg": "0a93",
            "./team-04.jpg": "e964",
            "./team-05.jpg": "36e2",
            "./team-06.jpg": "a831",
            "./team-07.jpg": "e1e7",
            "./team-08.jpg": "a630",
            "./team-dark-01.jpg": "a93b",
            "./team-dark-02.jpg": "5543",
            "./team-dark-03.jpg": "dfe5",
            "./team-dark-04.jpg": "d86a",
            "./team-dark-05.jpg": "475a"
        };

        function s(t) {
            var e = o(t);
            return a(e);
        }

        function o(t) {
            if (!a.o(i, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e;
            }
            return i[t];
        }
        s.keys = function () {
            return Object.keys(i);
        }, s.resolve = o, t.exports = s, s.id = "b697";
    },
    b707: function (t, e, a) {
        t.exports = a.p + "img/startup.3dd13f22.png";
    },
    b761: function (t, e, a) {
        t.exports = a.p + "img/service-03.89925d87.jpg";
    },
    b8be: function (t, e, a) {
        t.exports = a.p + "img/gallery-image-02.4a3fc800.png";
    },
    b9f6: function (t, e, a) {
        t.exports = a.p + "img/international-consulting-light.64e3d81e.png";
    },
    bb66: function (t, e, a) {
        t.exports = a.p + "img/blog-grid-light.b2ac831a.png";
    },
    bc7d: function (t, e, a) {
        t.exports = a.p + "img/video-popup.6a813524.png";
    },
    bc96: function (t, e, a) {
        t.exports = a.p + "img/tabs-04.f16c1f08.jpg";
    },
    bedf: function (t, e, a) {
        t.exports = a.p + "img/dashed-line.545fc620.svg";
    },
    bf62: function (t, e, a) {
        t.exports = a.p + "img/team-01.886c5b36.jpg";
    },
    c422: function (t, e, a) {
        t.exports = a.p + "img/gallery-image-03.4a3fc800.png";
    },
    c543: function (t, e, a) {
        t.exports = a.p + "img/about-1.a201b2f9.png";
    },
    c5b0: function (t, e, a) {
        t.exports = a.p + "img/banenr-image-02.38800a76.png";
    },
    c764: function (t, e, a) {
        t.exports = a.p + "img/bg-image-10.0d2d668d.jpg";
    },
    c76f: function (t, e, a) {
        t.exports = a.p + "img/service.77687c6c.png";
    },
    c827: function (t, e, a) {
        t.exports = a.p + "img/portfolio-05.5dee8713.jpg";
    },
    c8e8: function (t, e, a) {
        t.exports = a.p + "img/bg-image-21.cffe9588.jpg";
    },
    cc7b: function (t, e, a) {
        t.exports = a.p + "img/location.24bcfeac.svg";
    },
    cd52: function (t, e, a) {
        t.exports = a.p + "img/bg-image-14.0d2d668d.jpg";
    },
    d1a4: function (t, e, a) {
        t.exports = a.p + "img/company-light.41be471b.png";
    },
    d2ea: function (t, e) {
        t.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCADwAYYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD6gooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA82+Osvj5vDEFn8P7My6jcylbi6WaKNoIgP4fMYDLE4yM4APQ4NeKprPj/4FfFjwno+seLbjxXY640STwXLvJs3yeWwXeSQVJBBBGcYIr6U8XeMtC8J28Ueta1a6M14rpbyXEgTcQBkr9Nw/OvlXXPDWofA744+DNQ8Rau3j0XzLHHdah5nnQfOE3KGkbld+VySOvAOCADvvjh468UeIfi1ofw08LatJoJuUWS6v4CVkyQzkAjBAVFzgEZJxmpvgF4+8Saf8R/Efw48Vam+tXGnBpbW/lJMjBSuQSeSGV1YZyRgjJ4qb41fCPxbcfEzRvH/AIGW3udVtUWOa0uJFTJXIDfMQCpVipGQeOOvHC/s9prPiT9pPxNrGrSW097bW832yax5gWQsiBEPcDBAPOdhOT1IA+78Q+Pvjn4+8Zp4d8UXPh3SvDqv9mgtZHjE5VmVA20gkvsYknOOBivQvgX8eE1n4SXuueL7wxyaNcC2u71YGcujbfLdljUnPzbSQO2T1riP2WJF03xV8V4blhFJE2XDHGAjzhj+GRT/ANjvRrTV/ht42t9URW0q7mFvOXOF2eUd/PbAYHPagD2zUfjp4G0nw3pev3WvJHpWps6Wk4t5mMpQ4cbAhYYPByB29a83+LWs+P8Axz8S9L8HeFJdT8OaHJEslxrkdtLGpYoZDmTAIwuF25BLEg+3z18FbbT9f+LvhnQ9U1F7jw/aX80lksq4SR/vIMHpvZEyO/TvX2N8bfi9Y/CLwm96+yfVrnMdhZk/6x8feb/YXIJ/AdTQB5j+z7438V6f8VvEnw+8R6vL4gisI5JIrydi8isjqPvHnDB+hJwQMd60P2s/ivfeEdDs/Dug3c9prV//AKTNPaSMksFshzkMuCu5hjI7Kw71o/s2fC2/8K6fqPjHxIXl8T6+DPKsg+eGJjvwR/eY4YjthRwQa+a9a+LmleKr74haxrFveyazrcC2elKiI0NrAHU4YlgQdqIPlB/i/vUAfS3wj8f3uk/syp4q1W6uNWvbS3vJzLeTNI8rLNIEVnYk44VfYV4n/wAJH8Uh8PP+Fr/8JpdeV9v8v+y9x8jZv2bvLzsxv+Xbt6c5ro/h54mt/EP7I3irQrWGcXmi20huGdQEYPM8oKEEk4UHOQPxqobqL/hhxY/MXf8Aa/Lxn+L7bux/3zzQB9S+BPE6+NPBui66qCL7faxztGDkIxX5l/A5H4Vu159+z9A9v8GPCSyAqxslcA+jEkfoRXoNABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAHEfFr4TaT8XvDqaZqbyW0sEnm213BjfC+MHg9VI6j6dCAa8/wDBP7KtpoPimw1zxD4nvvFdxpxU2cVzGUSMqcpnLuSFPIAIGfyr3eigDhvi58Nrn4oaDa6Zb+ILnw+kdx5s0lqpYzJtZTGcMvHzZ5z06VP8L/hTofwm0JtO0ZJHeZg9zdzkGWdgOCSAAAOcAcDJ7kk9lRQB4Z8Qv2WbPxb4q1DXNH8R3nhmbU1Zb+G3j3pPu+/0dcBsZIOQTziunj+Cdvo3wiu/Avh3VH0hbtSs+pSQ+dJJvI8wlQyjLKNvXgV6ZRQB4Bf/ALJVk/hLwxpuneIG0zV9FnkuDq6WW5p2dg2SnmDaVKpj5jgD3qf4q/syXvxR8Ww69N4ybT54reKFI0sC4RkHLIfOG3LZbHbPU9a94ooA8e+HPwP8S+CfFdtq2pfEnVfEdpEjq2n3SSiNyykAndOw4Jz07V3XxE8DxePfBWq6As6aeb6IR/aRCJPLwwOduRnp6iunooA4r4bfDG38B/Di38I3Vyms2ypPHNK0HlCZJHdipXc3GHI615P/AMMY6d9v8j/hLdT/AOEZ+0faP7H2fxdPv7sZxxu2ZxX0bRQBBY2MGmWNvZ2sSwWtvGsUUSdERRhQPYAAVPRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//2Q==";
    },
    d2f2: function (t, e, a) {
        t.exports = a.p + "img/brand-07.c1029b45.png";
    },
    d41f: function (t, e, a) {
        t.exports = a.p + "img/testimonial-dark-02.886c5b36.jpg";
    },
    d514: function (t, e, a) {
        t.exports = a.p + "img/white-shape.442405c9.svg";
    },
    d86a: function (t, e, a) {
        t.exports = a.p + "img/team-dark-04.8f312446.jpg";
    },
    d882: function (t, e, a) {
        t.exports = a.p + "img/tab.a3034f5b.png";
    },
    d895: function (t, e, a) {
        t.exports = a.p + "img/service-06.89925d87.jpg";
    },
    d902: function (t, e, a) {
        t.exports = a.p + "img/business-consulting-2.746eafa9.png";
    },
    d970: function (t, e, a) {
        t.exports = a.p + "img/service-04.89925d87.jpg";
    },
    d9a1: function (t, e, a) {
        t.exports = a.p + "img/sun-01.ebd4806d.svg";
    },
    d9c1: function (t, e, a) {
        t.exports = a.p + "img/bg-image-20.88c5a855.jpg";
    },
    db2b: function (t, e, a) {
        t.exports = a.p + "img/about-logo.d78a7f5b.png";
    },
    de88: function (t, e, a) {
        t.exports = a.p + "img/advance-tab-light.a3194a39.png";
    },
    dfe5: function (t, e, a) {
        t.exports = a.p + "img/team-dark-03.8f312446.jpg";
    },
    e125: function (t, e, a) {
        t.exports = a.p + "img/creative-portfolio-light.7f4d2249.png";
    },
    e185: function (t, e, a) {
        var i = {
            "./split-01.jpg": "4739",
            "./split-02.jpg": "7ecc",
            "./split-03.jpg": "1add",
            "./split-04.jpg": "5805"
        };

        function s(t) {
            var e = o(t);
            return a(e);
        }

        function o(t) {
            if (!a.o(i, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e;
            }
            return i[t];
        }
        s.keys = function () {
            return Object.keys(i);
        }, s.resolve = o, t.exports = s, s.id = "e185";
    },
    e1b1: function (t, e, a) {
        t.exports = a.p + "img/event-conference-light.c81c3923.png";
    },
    e1e7: function (t, e, a) {
        t.exports = a.p + "img/team-07.1512b183.jpg";
    },
    e1fd: function (t, e, a) {
        t.exports = a.p + "img/counter-light.94c711a8.png";
    },
    e352: function (t, e, a) {
        t.exports = a.p + "img/testimonial-01.886c5b36.jpg";
    },
    e47b: function (t, e, a) {
        t.exports = a.p + "img/brand-06.c2151425.png";
    },
    e545: function (t, e, a) {
        t.exports = a.p + "img/service-02.89925d87.jpg";
    },
    e60d: function (t, e, a) {
        t.exports = a.p + "img/service-03.89925d87.jpg";
    },
    e69f: function (t, e, a) {
        t.exports = a.p + "img/brand-02.271af565.png";
    },
    e94a: function (t, e, a) {
        t.exports = a.p + "img/portfolio-three-column.6a54796a.png";
    },
    e964: function (t, e, a) {
        t.exports = a.p + "img/team-04.1512b183.jpg";
    },
    eade: function (t, e, a) {
        t.exports = a.p + "img/about-5.3c4773bb.png";
    },
    eb91: function (t, e, a) {
        t.exports = a.p + "img/testimonial-03.886c5b36.jpg";
    },
    ec1b: function (t, e, a) {
        t.exports = a.p + "img/bg-image-12.0d2d668d.jpg";
    },
    ee05: function (t, e, a) {
        t.exports = a.p + "img/tab-light.f728c45d.png";
    },
    ee85: function (t, e, a) {
        t.exports = a.p + "img/icon-03.2ca3aa05.png";
    },
    eff1: function (t, e, a) {
        t.exports = a.p + "img/finance-light.1ce26f97.png";
    },
    f1ba: function (t, e, a) {
        t.exports = a.p + "img/service-05.89925d87.jpg";
    },
    f54c: function (t, e, a) {
        t.exports = a.p + "img/web-agency-light.3b0ea0bf.png";
    },
    f749: function (t, e, a) {
        t.exports = a.p + "img/service-03.89925d87.jpg";
    },
    f8e7: function (t, e, a) {
        t.exports = a.p + "img/error.e5ef2e06.png";
    },
    fe44: function (t, e, a) {
        t.exports = a.p + "img/blog-list-view-light.4b8c45f4.png";
    },
    ff44: function (t, e, a) {
        t.exports = a.p + "img/finance.e034c6c8.png";
    },
    ffe2: function (t, e, a) {
        t.exports = a.p + "img/vector.6d35d16d.svg";
    }
}));
