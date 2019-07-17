
            $(function () {

            $("#syntaxresult").hide(); 


            $("#btnclick").click(function () {

                var num1 = +$("#one").val();
                var num2 = +$("#two").val();
                var num3 = +$("#three").val();
                var num4 = +$("#four").val();
                var num5 = +$("#five").val();

                var min = Math.min(num1, num2, num3, num4, num5);
                $("#minresult").text(min);

                var max = Math.max(num1, num2, num3, num4, num5);
                $("#maxresult").text(max);

                var sum = num1 + num2 + num3 + num4 + num5;
                $("#sumresult").text(sum);

                var mean = sum / 5;
                $("#meanresult").text(mean);

                var product = num1 * num2 * num3 * num4 * num5;
                $("#productresult").text(product);

            });


            $("#checks").click(function () {
                $("#syntaxresult").toggle();
                var text = $(this).text();
                if (text == "Show Code") {
                    $(this).text("Hide Code");
                }
                else {
                    $(this).text("Show Code");
                }
            });

        });

    
      

$(function () {

    $("#here").hide(); 

$("#btnfact").click(function () {

    var number1 = Number($("#num1").val());
    var result = Factorial(number1);
    $("#factResult").text(result);
});

function Factorial(number) {

    for (var loop = number - 1; loop > 1; loop--) {
        number *= loop;
    }
    return number;
    }

    $("#btnfact1").click(function () {
        $("#here").toggle();
        var text = $(this).text();
        if (text == "Show Code") {
            $(this).text("Hide Code");
        }
        else {
            $(this).text("Show Code");
        }
    });
});
        

$(function () {

  $("#Sr").hide(); 

    $("#fb1").click(function () {

        let output = "";
        let val1 = document.getElementById('fizzNum1').value;
        let val2 = document.getElementById('buzzNum1').value;
        output = FizzBuzzA(val1, val2);
        document.getElementById('fbResult1').innerText = output;

        function FizzBuzzA(value1, value2) {
            let returnValue = "";
            for (let i = 1; i <= 100; i++) {
                if (i % value1 == 0 && i % value2 == 0) {
                    returnValue += 'FizzBuzz';
                }
                else if (i % value1 == 0) {
                    returnValue += 'Fizz ';
                }
                else if (i % value2 == 0) {
                    returnValue += 'Buzz ';
                }
                else {
                    returnValue += i + ' ';
                }
            }
            return returnValue;
        }
    });

    $("#fb2").click(function () {
        $("#Sr").toggle();
        var text = $(this).text();
        if (text == "Show Code") {
            $(this).text("Hide Code");
       }
        else {
           $(this).text("Show Code");
       }
    });
});

   
$(function () {

    $("#pp").hide();


    $("#pali1").click(function () {

        revString = ""; // create a variable name revString which stores input string reversely in this varaiable.
        inpString = document.getElementById("text1").value;// creating input variable and storing input value from text field.
        // var input = $("#txtword").val();
        i = inpString.length; // creating a variable i and assigning the input string to it, which number of characters in input string.

        for (var j = i; j >= 0; j--) //looping through input string in reverse order. >= means graeter than equal to 1.
        {
            revString = revString + inpString.charAt(j);
            //  document.write(revString + "<br>"); outputing revString on web page. this helpsu schek if we are getting reverse string or not.
        }

        if (inpString.toLowerCase() === revString.toLowerCase()) {               // === means equal in both value and type.
            alert(inpString + " is a Palindrome.");
        }
        else {
            alert(inpString + " is not a Palindrome.");
        }
    });
    $("#btn1").click(function () {
        $("#pp").toggle();
        var text = $(this).text();
        if (text == "Show Code") {
            $(this).text("Hide Code");
        }
        else {
            $(this).text("Show Code");
        }
    });
});