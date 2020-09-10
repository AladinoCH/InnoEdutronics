/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'home': '&#xe900;',
            'house': '&#xe900;',
            'image': '&#xe90d;',
            'picture': '&#xe90d;',
            'images': '&#xe90e;',
            'pictures': '&#xe90e;',
            'headphones': '&#xe910;',
            'headset': '&#xe910;',
            'music': '&#xe911;',
            'song': '&#xe911;',
            'connection': '&#xe91b;',
            'wifi': '&#xe91b;',
            'mic': '&#xe91e;',
            'microphone': '&#xe91e;',
            'book': '&#xe91f;',
            'read': '&#xe91f;',
            'file-text': '&#xe922;',
            'file': '&#xe922;',
            'profile': '&#xe923;',
            'file2': '&#xe923;',
            'file-empty': '&#xe924;',
            'file3': '&#xe924;',
            'files-empty': '&#xe925;',
            'files': '&#xe925;',
            'file-text2': '&#xe926;',
            'file4': '&#xe926;',
            'file-picture': '&#xe927;',
            'file5': '&#xe927;',
            'file-zip': '&#xe92b;',
            'file9': '&#xe92b;',
            'copy': '&#xe92c;',
            'duplicate': '&#xe92c;',
            'paste': '&#xe92d;',
            'clipboard-file': '&#xe92d;',
            'stack': '&#xe92e;',
            'layers': '&#xe92e;',
            'barcode': '&#xe937;',
            'qrcode': '&#xe938;',
            'credit-card': '&#xe93f;',
            'money5': '&#xe93f;',
            'calculator': '&#xe940;',
            'compute': '&#xe940;',
            'compass': '&#xe949;',
            'direction': '&#xe949;',
            'bubbles3': '&#xe96f;',
            'comments3': '&#xe96f;',
            'bubbles4': '&#xe970;',
            'comments4': '&#xe970;',
            'quotes-left': '&#xe977;',
            'ldquo': '&#xe977;',
            'quotes-right': '&#xe978;',
            'rdquo': '&#xe978;',
            'spinner9': '&#xe982;',
            'loading10': '&#xe982;',
            'spinner10': '&#xe983;',
            'loading11': '&#xe983;',
            'enlarge': '&#xe989;',
            'expand': '&#xe989;',
            'shrink': '&#xe98a;',
            'collapse': '&#xe98a;',
            'enlarge2': '&#xe98b;',
            'expand2': '&#xe98b;',
            'shrink2': '&#xe98c;',
            'collapse2': '&#xe98c;',
            'wrench': '&#xe991;',
            'tool': '&#xe991;',
            'equalizer': '&#xe992;',
            'sliders': '&#xe992;',
            'equalizer2': '&#xe993;',
            'sliders2': '&#xe993;',
            'cog': '&#xe994;',
            'gear': '&#xe994;',
            'cogs': '&#xe995;',
            'gears': '&#xe995;',
            'stats-dots': '&#xe99b;',
            'stats2': '&#xe99b;',
            'trophy': '&#xe99e;',
            'cup': '&#xe99e;',
            'gift': '&#xe99f;',
            'present': '&#xe99f;',
            'bin': '&#xe9ac;',
            'trashcan': '&#xe9ac;',
            'switch': '&#xe9b6;',
            'clipboard': '&#xe9b8;',
            'board': '&#xe9b8;',
            'list2': '&#xe9bb;',
            'todo2': '&#xe9bb;',
            'cloud-download': '&#xe9c2;',
            'cloud2': '&#xe9c2;',
            'cloud-upload': '&#xe9c3;',
            'cloud3': '&#xe9c3;',
            'download2': '&#xe9c5;',
            'save4': '&#xe9c5;',
            'upload2': '&#xe9c6;',
            'load2': '&#xe9c6;',
            'sphere': '&#xe9c9;',
            'globe': '&#xe9c9;',
            'link': '&#xe9cb;',
            'chain': '&#xe9cb;',
            'attachment': '&#xe9cd;',
            'paperclip': '&#xe9cd;',
            'eye': '&#xe9ce;',
            'views': '&#xe9ce;',
            'eye-blocked': '&#xe9d1;',
            'views4': '&#xe9d1;',
            'bookmarks': '&#xe9d3;',
            'ribbons': '&#xe9d3;',
            'star-empty': '&#xe9d7;',
            'rate': '&#xe9d7;',
            'warning': '&#xea07;',
            'sign': '&#xea07;',
            'notification': '&#xea08;',
            'warning2': '&#xea08;',
            'info': '&#xea0c;',
            'information': '&#xea0c;',
            'cancel-circle': '&#xea0d;',
            'close': '&#xea0d;',
            'blocked': '&#xea0e;',
            'forbidden': '&#xea0e;',
            'checkmark2': '&#xea11;',
            'tick2': '&#xea11;',
            'spell-check': '&#xea12;',
            'spelling': '&#xea12;',
            'font': '&#xea5c;',
            'typeface': '&#xea5c;',
            'ligature': '&#xea5d;',
            'typography': '&#xea5d;',
            'ligature2': '&#xea5e;',
            'typography2': '&#xea5e;',
            'share2': '&#xea82;',
            'social': '&#xea82;',
            'whatsapp': '&#xea93;',
            'brand13': '&#xea93;',
            'pinterest2': '&#xead2;',
            'brand73': '&#xead2;',
            'file-pdf': '&#xeadf;',
            'file10': '&#xeadf;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
