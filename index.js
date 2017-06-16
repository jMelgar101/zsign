var cryptojs = require("crypto-js");
var _ = require("lodash");

function JSONPolicy(ops, vp) {
	if (!_.isNil(ops)) {
		_.merge(operations, ops);
	}

	if (!_.isNil(vp)) {
		varPrefix = vp;
	}
}

function verify(payload, secret, signature) {
	const toBeHashed = payload + ";" + secret;
	const toBeCompared = cryptojs.SHA1(toBeHashed).toString();

	if (signature === toBeCompared) {
		return true;
	} else {
		return false;
	}
}

function sign(payload, secret) {
	const toBeHashed = payload + ";" + secret;
	const signature = cryptojs.SHA1(toBeHashed).toString();
	const result = {
		payload: payload,
		signature: signature
	};

	return result;
}

ZSign.prototype = _.create(Object.prototype, {

	constructor: ZSign,

	sign: sign,
	verify: verify

});

module.exports = ZSign;