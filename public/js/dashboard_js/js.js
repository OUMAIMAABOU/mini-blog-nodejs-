

function check_sign_up()
{
    let first = document.getElementById("first");
    let last = document.getElementById("last");
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let birthday = document.getElementById("birthday");
    let gender = document.getElementById("gender");
    let maried = document.getElementById("maried"); 
    let password = document.getElementById("password");
    let c_password = document.getElementById("c_password");
    let warning = document.getElementById("warning");

    if(!(/^[a-zA-Z ]{3,30}$/.test(first.value)))
    {
        first.style.border = "0.13vw solid red";
        warning.innerHTML = "<p class='alert alert-danger my-1 text-center'> Enter a valid first name </p>";
        return false;
    }
    else
    if(!(/^[a-zA-Z ]{3,30}$/.test(last.value)))
    {
        first.style.border = "0.13vw solid green";
        last.style.border = "0.13vw solid red";
        warning.innerHTML = "<p class='alert alert-danger my-1 text-center'> Enter a valid last name </p>";
        return false;
    }
    else
    if(!(/^[a-zA-Z0-9._]{3,30}$/.test(username.value)))
    {
        first.style.border = "0.13vw solid green";
        last.style.border = "0.13vw solid green";
        username.style.border = "0.13vw solid red";
        warning.innerHTML = "<p class='alert alert-danger my-1 text-center'> Enter a valid username </p>";
        return false;
    }
    else
    if(!(email.value.includes("@") && email.value.includes(".")))
    {
        first.style.border = "0.13vw solid green";
        last.style.border = "0.13vw solid green";
        username.style.border = "0.13vw solid green";
        email.style.border = "0.13vw solid red";
        warning.innerHTML = "<p class='alert alert-danger my-1 text-center'> Enter a valid email address </p>";
        return false;
    }
    else
    if(!(/^[0-9]*$/.test(phone.value)) || phone.value == '')
    {
        first.style.border = "0.13vw solid green";
        last.style.border = "0.13vw solid green";
        username.style.border = "0.13vw solid green";
        email.style.border = "0.13vw solid green";
        phone.style.border = "0.13vw solid red";
        warning.innerHTML = "<p class='alert alert-danger my-1 text-center'> Enter a valid phone number </p>";
        return false;
    }
    else
    if(birthday.value == null || birthday.value == '')
    {
        first.style.border = "0.13vw solid green";
        last.style.border = "0.13vw solid green";
        username.style.border = "0.13vw solid green";
        email.style.border = "0.13vw solid green";
        phone.style.border = "0.13vw solid green";
        birthday.style.border = "0.13vw solid red";
        warning.innerHTML = "<p class='alert alert-danger my-1 text-center'> Enter a birthday </p>";
        return false;
    }
    else
    if(gender.value == null || gender.value == '')
    {
        first.style.border = "0.13vw solid green";
        last.style.border = "0.13vw solid green";
        username.style.border = "0.13vw solid green";
        email.style.border = "0.13vw solid green";
        phone.style.border = "0.13vw solid green";
        birthday.style.border = "0.13vw solid green";
        gender.style.border = "0.13vw solid red";
        warning.innerHTML = "<p class='alert alert-danger my-1 text-center'> Gender ? </p>";
        return false;
    }
    else
    if(maried.value == null || maried.value == '')
    {
        first.style.border = "0.13vw solid green";
        last.style.border = "0.13vw solid green";
        username.style.border = "0.13vw solid green";
        email.style.border = "0.13vw solid green";
        phone.style.border = "0.13vw solid green";
        birthday.style.border = "0.13vw solid green";
        gender.style.border = "0.13vw solid green";
        maried.style.border = "0.13vw solid red";
        warning.innerHTML = "<p class='alert alert-danger my-1 text-center'> Married ? </p>";
        return false;
    }
    else
    if(/^[a-zA-Z ]{8,30}$/.test(password.value) || password.value == '')
    {
        first.style.border = "0.13vw solid green";
        last.style.border = "0.13vw solid green";
        username.style.border = "0.13vw solid green";
        email.style.border = "0.13vw solid green";
        phone.style.border = "0.13vw solid green";
        birthday.style.border = "0.13vw solid green";
        gender.style.border = "0.13vw solid green";
        maried.style.border = "0.13vw solid green";
        password.style.border = "0.13vw solid red";
        warning.innerHTML = "<p class='alert alert-danger my-1 text-center'> Enter at least 8 characters </p>";
        return false;
    }
    else
    if(/^[a-zA-Z ]{8,30}$/.test(c_password.value) || c_password.value == '')
    {
        first.style.border = "0.13vw solid green";
        last.style.border = "0.13vw solid green";
        username.style.border = "0.13vw solid green";
        email.style.border = "0.13vw solid green";
        phone.style.border = "0.13vw solid green";
        birthday.style.border = "0.13vw solid green";
        gender.style.border = "0.13vw solid green";
        maried.style.border = "0.13vw solid green";
        password.style.border = "0.13vw solid green";
        c_password.style.border = "0.13vw solid red";
        warning.innerHTML = "<p class='alert alert-danger my-1 text-center'> Enter at least 8 characters </p>";
        return false;
    }
    else
    if(password.value != c_password.value)
    {
        first.style.border = "0.13vw solid green";
        last.style.border = "0.13vw solid green";
        username.style.border = "0.13vw solid green";
        email.style.border = "0.13vw solid green";
        phone.style.border = "0.13vw solid green";
        birthday.style.border = "0.13vw solid green";
        gender.style.border = "0.13vw solid green";
        maried.style.border = "0.13vw solid green";
        password.style.border = "0.13vw solid red";
        c_password.style.border = "0.13vw solid red";
        warning.innerHTML = "<p class='alert alert-danger my-1 text-center'> Password does not match </p>";
        return false;
    }
    else
    {
        first.style.border = "0.13vw solid green";
        last.style.border = "0.13vw solid green";
        username.style.border = "0.13vw solid green";
        email.style.border = "0.13vw solid green";
        phone.style.border = "0.13vw solid green";
        birthday.style.border = "0.13vw solid green";
        gender.style.border = "0.13vw solid green";
        maried.style.border = "0.13vw solid green";
        password.style.border = "0.13vw solid green";
        c_password.style.border = "0.13vw solid green";
        return true;
    }    
}

function check_sign_in()
{
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let warning = document.getElementById("warning");
    
    if(username.value == "")
    {
        username.style.border = "0.17vw solid red";
        warning.textContent = "Enter username";
        return false;
    }
    else
    if(password.value == "")
    {
        username.style.border = "0.1vw solid #BEBEBE";
        password.style.border = "0.17vw solid red";
        warning.textContent = "Enter password";
        return false;
    }
    else
    {
        return true;
    }    
}

function modal_validation()
{
    let target = document.getElementById("recipient_");
    let amount = document.getElementById("amount_");
    let warning = document.getElementById("warning");

    

    if(target.value == '')
    {
        target.style.border = "0.17vw solid red";
        warning.innerHTML = "<p class='alert alert-danger my-2 w-75 text-center'> choose target </p>";
        return false;
    }
    else
    if(!(/^[0-9]*$/.test(amount.value)) || amount.value == '')
    {
        target.style.border = "0.17vw solid green";
        amount.style.border = "0.17vw solid red";
        warning.innerHTML = "<p class='alert alert-danger my-2 py-2 w-75 text-center'> Enter a valid amount </p>";
        return false;
    }
    else
    {
        target.style.border = "0.17vw solid green";
        amount.style.border = "0.17vw solid green";
        return true;
    }
}

function modal_validation_2()
{
    let target = document.getElementById("recipient__");
    let amount = document.getElementById("amount__");
    let warning = document.getElementById("warning__");

    

    if(target.value == '')
    {
        target.style.border = "0.17vw solid red";
        warning.innerHTML = "<p class='alert alert-danger my-2 w-75 text-center'> choose target </p>";
        return false;
    }
    else
    if(!(/^[0-9]*$/.test(amount.value)) || amount.value == '')
    {
        target.style.border = "0.17vw solid green";
        amount.style.border = "0.17vw solid red";
        warning.innerHTML = "<p class='alert alert-danger my-2 py-2 w-75 text-center'> Enter a valid amount </p>";
        return false;
    }
    else
    {
        target.style.border = "0.17vw solid green";
        amount.style.border = "0.17vw solid green";
        return true;
    }
}