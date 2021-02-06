function setREVStartSize(a) {
    try {
        var b, c = document.getElementById(a.c).parentNode.offsetWidth;
        if (c = 0 === c || isNaN(c) ? window.innerWidth : c, a.tabw = void 0 === a.tabw ? 0 : parseInt(a.tabw), a.thumbw = void 0 === a.thumbw ? 0 : parseInt(a.thumbw), a.tabh = void 0 === a.tabh ? 0 : parseInt(a.tabh), a.thumbh = void 0 === a.thumbh ? 0 : parseInt(a.thumbh), a.tabhide = void 0 === a.tabhide ? 0 : parseInt(a.tabhide), a.thumbhide = void 0 === a.thumbhide ? 0 : parseInt(a.thumbhide), a.mh = void 0 === a.mh || "" == a.mh ? 0 : a.mh, "fullscreen" === a.layout || "fullscreen" === a.l) b = Math.max(a.mh, window.innerHeight); else {
            for (var d in a.gw = Array.isArray(a.gw) ? a.gw : [a.gw], a.rl) (void 0 === a.gw[d] || 0 === a.gw[d]) && (a.gw[d] = a.gw[d - 1]);
            for (var d in a.gh = void 0 === a.el || "" === a.el || Array.isArray(a.el) && 0 == a.el.length ? a.gh : a.el, a.gh = Array.isArray(a.gh) ? a.gh : [a.gh], a.rl) (void 0 === a.gh[d] || 0 === a.gh[d]) && (a.gh[d] = a.gh[d - 1]);
            var e, f = Array(a.rl.length), g = 0;
            for (var d in a.tabw = a.tabhide >= c ? 0 : a.tabw, a.thumbw = a.thumbhide >= c ? 0 : a.thumbw, a.tabh = a.tabhide >= c ? 0 : a.tabh, a.thumbh = a.thumbhide >= c ? 0 : a.thumbh, a.rl) f[d] = a.rl[d] < window.innerWidth ? 0 : a.rl[d];
            for (var d in e = f[0], f) e > f[d] && 0 < f[d] && (e = f[d], g = d);
            var h = c > a.gw[g] + a.tabw + a.thumbw ? 1 : (c - (a.tabw + a.thumbw)) / a.gw[g];
            b = a.gh[g] * h + (a.tabh + a.thumbh)
        }
        void 0 === window.rs_init_css && (window.rs_init_css = document.head.appendChild(document.createElement("style"))), document.getElementById(a.c).height = b, window.rs_init_css.innerHTML += "#" + a.c + "_wrapper { height: " + b + "px }"
    } catch (a) {
        console.log("Failure at Presize of Slider:" + a)
    }
};

var table_row = {
    "even": "rgba(247,247,247,0.01)",
    "odd": "rgba(255,255,255,0.01)"
};
var table_row = {"even": "rgba(247,247,247,0.01)", "odd": "rgba(255,255,255,0.01)"};
var result_table_row = {"even": "", "odd": ""};
var point_table_row = {
    "even": "rgba(255,255,255,0.01)",
    "even_text": "#ffffff",
    "odd_text": "#ffffff",
    "odd": "rgba(255,255,255,0.01)",
    "heading_bg": "rgba(0,0,0,0.01)"
};
var team_item_data = {
    "slidesToShow": "3",
    "nav": "1",
    "autoplay": "1",
    "autoplaySpeed": "4000",
    "pauseOnHover": "1",
    "slider_dots": "",
    "col_lg": "3",
    "col_md": "3",
    "col_sm": "3",
    "col_xs": "2",
    "col_mobile": "1"
};

var wc_cart_fragments_params = {
    "ajax_url": "\/products\/wordpress\/khelo\/wp-admin\/admin-ajax.php",
    "wc_ajax_url": "\/products\/wordpress\/khelo\/?wc-ajax=%%endpoint%%",
    "cart_hash_key": "wc_cart_hash_847526a4f7bfc164402a8dd00fef1666",
    "fragment_name": "wc_fragments_847526a4f7bfc164402a8dd00fef1666",
    "request_timeout": "5000"
};

var woocommerce_params = {
    "ajax_url": "\/products\/wordpress\/khelo\/wp-admin\/admin-ajax.php",
    "wc_ajax_url": "\/products\/wordpress\/khelo\/?wc-ajax=%%endpoint%%"
};

var wpcf7 = {
    "apiSettings": {
        "root": "https:\/\/rstheme.com\/products\/wordpress\/khelo\/wp-json\/contact-form-7\/v1",
        "namespace": "contact-form-7\/v1"
    }
};

(function () {
    var c = document.body.className;
    c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
    document.body.className = c;
})()

(function () {
    function maybePrefixUrlField() {
        if (this.value.trim() !== '' && this.value.indexOf('http') !== 0) {
            this.value = "http://" + this.value;
        }
    }

    var urlFields = document.querySelectorAll('.mc4wp-form input[type="url"]');
    if (urlFields) {
        for (var j = 0; j < urlFields.length; j++) {
            urlFields[j].addEventListener('blur', maybePrefixUrlField);
        }
    }
})();