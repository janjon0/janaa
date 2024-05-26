 function show(){
    var username =document.getElementById('user').value;

    var inputs = document.querySelectorAll('input[type="radio"], input[type="checkbox"]');
    var yes = 0;
    var no = 0;
    inputs.forEach(function(input) {
        if (input.checked) {
            if (input.value === 'yes') {
                yes++;
            } else if (input.value === 'no') {
                no++;
            }
        }
    });
     alert( ` username =${username},Yes=${yes} && NO=${no}`);

 }