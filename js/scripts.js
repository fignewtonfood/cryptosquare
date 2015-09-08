var parser = function(phrase, round, start, length) {
    for(start; start < round; start++) {
        if ((start < length) && length > 3) {
            var output = phrase.charAt(start).concat(parser(phrase, round, start+round, length));
        return output;
        } else {
            return phrase;
        }
    }
};

var encrypt = function(message) {
    var noPunctuation = message.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    var noSpace = noPunctuation.replace(/\s/g,"");
    var phrase = noSpace.toLowerCase();


    var length = phrase.length;
    var root = Math.sqrt(length);
    var round = Math.floor(root);
    var start = 0;
    return parser(phrase, round, start, length);

};





// $(document).ready(function() {
//     $("form#factorial").submit(function(event) {
//
//     });
// });
