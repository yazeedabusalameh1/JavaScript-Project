document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll(".square-input");
    inputs[0].focus();

    inputs.forEach((input, index) => {
        input.addEventListener("input", function() {
            if (input.value.length === 1) {
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                } else {
                    inputs[index].blur();
                    document.getElementById("submitButton").focus();
                }
            }
            
        });
    });

    document.getElementById("submitButton").addEventListener("click", function(event) {
        const filled = Array.from(inputs).every(input => input.value.length === 1);
        if (!filled) {
            event.preventDefault();
            alert("Please fill all input fields before submitting.");
        }else{
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
              });
        }
    });
});
