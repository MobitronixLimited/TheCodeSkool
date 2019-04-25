import 'jquery-validation'
import 'select2'

var test = $("#test"), commentForm = $("#commentForm");

if(test || commentForm){

    test.validate({
        rules: {
            username: {
                required: true,
                // Using the normalizer to trim the value of the element
                // before validating it.
                //
                // The value of `this` inside the `normalizer` is the corresponding
                // DOMElement. In this example, `this` references the `username` element.
                normalizer: function(value) {
                    return $.trim(value);
                }
            }
        }
    });

    commentForm.validate();
}

$('.dropdownOptions').select2();
