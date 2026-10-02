(function () {
  var NS = 'MextasDesignSystem_ce1b9d';
  var files = ['brand/Wordmark', 'brand/Icon', 'actions/Button', 'actions/IconButton', 'forms/Input', 'forms/Select', 'forms/Textarea', 'forms/ChoiceChip', 'navigation/Tabs', 'navigation/NavLink', 'content/SectionHeader', 'content/DishCard', 'content/Stat', 'content/ValueProp', 'feedback/Modal', 'feedback/Toast', 'feedback/StatusBadge'];
  async function fallback() {
    var ns = {};
    for (var i = 0; i < files.length; i++) {
      var src = await (await fetch('../../components/' + files[i] + '.jsx')).text();
      src = src.replace(/^import .*$/mg, '').replace(/export function (\w+)/g, 'ns.$1 = function $1');
      var out = Babel.transform(src, { presets: ['react'] }).code;
      new Function('React', 'ns', out)(React, ns);
    }
    return ns;
  }
  window.MX_DS_READY = new Promise(function (res) {
    var s = document.createElement('script');
    s.src = '../../_ds_bundle.js';
    var done = function (ns) { window[NS] = ns; window.MX = ns; res(ns); };
    s.onload = function () { window[NS] && window[NS].Button ? done(window[NS]) : fallback().then(done); };
    s.onerror = function () { fallback().then(done); };
    document.head.appendChild(s);
  });
})();
