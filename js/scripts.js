var encrypt = function(message) {
    var noPunctuation = message.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    var noSpace = noPunctuation.replace(/\s/g,"");
    var lower = noSpace.toLowerCase();

    var deconstruct = function(lower) {
        var length = lower.length;
        var root = Math.sqrt(length);
        var round = Math.floor(root);
        var start = 0;

        var parser = function(lower, round, start) {
            if (start < length) {
                lower.charAt(start).concat(parser(lower, round, start+round));
            }
        }

        if
    }




    return lower;
};

// $(document).ready(function() {
//     $("form#factorial").submit(function(event) {
//
//     });
// });
