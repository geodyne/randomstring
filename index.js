
module.exports  = {
  generate: generate
}

var crypto = require('crypto');

var defaultopts = {
  length: 10,
  charset: 'alnum'
}


function generate(opts){

  var length,
      charset;


  switch (typeof opts) {
    case 'number':
      length = parseInt(opts);
      charset = defaultopts.charset;
      break;

    case 'object' :

      length = opts.length || defaultopts.length;
      charset = opts.charset || defaultopts.charset;
      break;

    case 'undefined':
      length = defaultopts.length;
      charset = defaultopts.charset;
      break;

    default: throw Error("invalid options provided");

  }


  buf = crypto.randomBytes(length);
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var uppercase = lowercase.toUpperCase();
  var numbers = '0123456789';

  var chars = "";

  switch(charset) {
    case 'alphabets': chars = uppercase + lowercase ; break;
    case 'uppercase': chars = uppercase; break;
    case 'lowercase': chars = lowercase; break;
    case 'numbers': chars = numbers; break;
    case 'alnum': chars = uppercase + lowercase + numbers; break;
    default: chars = uppercase + lowercase + numbers; break;
  }


  var n = chars.length;

  var randomstring = "";
  for (var i = 0; i< length; i++){
    randomstring += chars[buf.readUInt8(i)%n];
  }

  return randomstring;

}
