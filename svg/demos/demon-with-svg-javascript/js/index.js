function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _P = document.querySelector('#m path'),
    NF = 30;

var ends = void 0,
    pts = void 0,
    curr = void 0,
    dir = 1,
    rID = null,
    cf = 0,
    m = void 0;

function getAbsData(el) {
	var d = el.getAttribute('d').split('M').slice(1)[0].split('c').map(function (c) {
		return c.split(' ').map(function (c) {
			return +c;
		});
	}).map(function (b) {
		return b.reduce(function (a, c, i) {
			return i % 2 ? a.concat([[b[i - 1], c]]) : a;
		}, []);
	});

	var _loop = function _loop(i) {
		var lastPrev = d[i - 1].slice(-1)[0];

		d[i] = d[i].map(function (c) {
			return c.map(function (k, j) {
				return lastPrev[j] + k;
			});
		});
	};

	for (var i = 1; i < d.length; i++) {
		_loop(i);
	}

	return d;
};

function stopAni() {
	cancelAnimationFrame(rID);
	rID = null;
};

function tfn(k) {
	return Math.pow(.5 * (Math.sin((k - .5) * Math.PI) + 1), 3);
};

function update() {
	cf += dir;

	var k = tfn(cf / NF);

	curr = ends[0].map(function (c, i) {
		return c.map(function (c, j) {
			return Math.round(k * c + (1 - k) * ends[1][i][j]);
		});
	}).reverse();

	_P.setAttribute('d', 'M' + pts[0][0] + '\n\t\t C' + [[].concat(_toConsumableArray(ends[0]), [pts[1][2]]), [].concat(_toConsumableArray(curr), [pts[0][0]])]);

	if (!(cf % NF)) {
		dir *= -1;
	}

	rID = requestAnimationFrame(update);
};

(function init() {
	pts = getAbsData(_P);

	ends = [].concat(_toConsumableArray(pts)).slice(1).map(function (c) {
		return c.slice(0, -1);
	}).map(function (c, i) {
		return i % 2 ? c.reverse() : c;
	});
	curr = ends[1];

	update();
})();