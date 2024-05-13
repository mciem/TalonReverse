# Talon Reversing

## Important Stuff
1. "xal" - most important, contains fingerprints
2. they seem to use FingerprintJS to obtain "visitor_id" and "score"


## Xal analysis

``` javascript
return _0xe82f6f['t4'] = _0xe82f6f["sent"], _0xe82f6f['t5'] = (2121 + 26 * -201 + -15 * -207, _0xe82f6f['t2'])(_0xe82f6f['t3'], _0xe82f6f['t4']), _0xe82f6f['t6'] = _0x1640c1, _0xe82f6f['t7'] = (7598 + 2473 * 2 + -32 * 392, _0xe82f6f['t1'])(_0xe82f6f['t5'], _0xe82f6f['t6']), _0xe82f6f['t8'] = {}, _0xe82f6f['t9'] = _0xa36910, _0x5a754d = (-1997 * 4 + 1015 + 19 * 367, _0xe82f6f['t0'])(_0xe82f6f['t7'], _0xe82f6f['t8'], _0xe82f6f['t9']), _0xe82f6f["abrupt"]('return', (_0x5b2e6f(_0x5213b5 = _0x2934f3, "xal", _0x420d7c(_0x5a754d)), _0x5b2e6f(_0x5213b5, "ewa", 'b'), _0x5b2e6f(_0x5213b5, "kid", _0x3a0d25), _0x5213b5));
```

After script deobfuscation we can see that heres the payload for /execute requests being returned. We can see that "_0x5b2e6f" function sets the values in payload and it takes those arguments:<br>
```
 (json pointer (_0x2934f3), key, value)
```
We can tell that thats the pointer bcs of this:
``` javascript
var _0x2934f3 = {};
_0x2934f3['v'] = 1;
```
<br>

### Xal before encryption
``` javascript
_0x5a754d = (0, _0xe82f6f['t0'])(_0xe82f6f['t7'], _0xe82f6f['t8'], _0xe82f6f['t9'])
```

### Encryption function
``` javascript
function _0x420d7c(_0x4a761c) {
    var _0x2ce575;
    var _0x40db03 = unescape(encodeURIComponent(JSON.stringify(_0x4a761c)));
    var _0x16633c = [];
    var _0x446316 = 0;
    var _0x2e8cf0 = '';
    for (var _0x477886 = 0; _0x477886 < 256; _0x477886++) {
        _0x16633c[_0x477886] = _0x477886;
    }
    for (var _0x59729b = 0; _0x59729b < 256; _0x59729b++) {
        _0x446316 = (_0x446316 + _0x16633c[_0x59729b] + "FZMÃ›SÃª/Â·V«xÞhí¢³4<`ô2ª,µ¦YÃ»".charCodeAt(_0x59729b % "FZMÃ›SÃª/Â·V«xÞhí¢³4<`ô2ª,µ¦YÃ»".length)) % 256;
        _0x2ce575 = _0x16633c[_0x59729b];
        _0x16633c[_0x59729b] = _0x16633c[_0x446316];
        _0x16633c[_0x446316] = _0x2ce575;
    }
    var _0x710ce1 = 0;
    _0x446316 = 0;
    for (var _0x16418d = 0; _0x16418d < _0x40db03.length; _0x16418d++) {
        _0x446316 = (_0x446316 + _0x16633c[_0x710ce1 = (_0x710ce1 + 1) % 256]) % 256;
        _0x2ce575 = _0x16633c[_0x710ce1];
        _0x16633c[_0x710ce1] = _0x16633c[_0x446316];
        _0x16633c[_0x446316] = _0x2ce575;
        _0x2e8cf0 += String.fromCharCode(_0x40db03.charCodeAt(_0x16418d) ^ _0x16633c[(_0x16633c[_0x710ce1] + _0x16633c[_0x446316]) % 256]);
    }
    return window.btoa(_0x2e8cf0);
}
```