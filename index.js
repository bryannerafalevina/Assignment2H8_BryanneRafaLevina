const x = document.getElementById("btn-submit")

x.addEventListener("click", () => {
    let inputName = document.getElementById('exampleFormControlInput1').value
    let inputRole = document.getElementById('exampleFormControlInput2').value
    let inputAvailability = document.getElementById('exampleFormControlInput3').value
    let inputAge = document.getElementById('exampleFormControlInput4').value
    let inputLocation = document.getElementById('exampleFormControlInput5').value
    let inputYear = document.getElementById('exampleFormControlInput6').value
    let inputEmail = document.getElementById('exampleFormControlInput7').value

    document.querySelector('form').addEventListener('submit', function(event){
        event.preventDefault()

        document.getElementById('info-name').innerHTML = inputName;
        document.getElementById('info-title').innerHTML = inputRole;
        document.getElementById('info-availability').innerHTML = inputAvailability;
        document.getElementById('info-age').innerHTML = inputAge;
        document.getElementById('info-location').innerHTML = inputLocation;
        document.getElementById('info-exp-years').innerHTML = inputYear;
        document.getElementById('info-email').innerHTML = inputEmail;

        document.querySelector('form').style.display = 'none'
    })
})

