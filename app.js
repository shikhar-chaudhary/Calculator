TAKE_INPUT_1 = true;
        OPERATOR = '';
        function appendValue(a) {
            input1 = document.getElementById("input_one");
            input2 = document.getElementById("input_two");
            if(TAKE_INPUT_1) {
                input1.value = input1.value + a.innerHTML;
            } else {
                input2.value = input2.value + a.innerHTML;
            }
        }
        function updateOperator(a) {
            OPERATOR = a.innerHTML;
            TAKE_INPUT_1 = false;
        }

        function clear1() {
            input1 = document.getElementById("input_one");
            input2 = document.getElementById("input_two");
            if(TAKE_INPUT_1) {
                input1.value = input1.value.substr(0,input1.value.length-1);
            } else {
                input2.value = input2.value.substr(0,input2.value.length-1);
            }
        }

        function sum(a,b){
            return (parseInt(a) + parseInt(b));
        }
        function sub(){
            return (parseInt(a) - parseInt(b));
        }
        function mul(){
            return (parseInt(a) * parseInt(b));
        }
        function divide(){
            return (parseInt(a) / parseInt(b));
        }

        

       function calculateValue() {
            input1 = document.getElementById("input_one");
            input2 = document.getElementById("input_two");
            output = document.getElementById("output");
            switch(OPERATOR) {
                case '+' : output.value = sum(input1.value, input2.value);
                            break;
                case '-' : output.value = sub(input1.value, input2.value);
                            break;
                case '/' : output.value = mul(input1.value, input2.value);
                            break;
                case '*' : output.value = divide(input1.value, input2.value);
                            break;

            }
       }
       function clearall(){
            input1 = document.getElementById("input_one");
            input2 = document.getElementById("input_one");

            
                input1.value='';
                input2.value='';
                output.innerHTML='';
            

            
        }