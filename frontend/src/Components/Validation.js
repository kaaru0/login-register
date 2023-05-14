export default function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/

    if(values.email === ""){
        error.email = "E-mail left empty"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Invalid email"
    }else{
        error.email = ""
    }

    if(values.userName === ""){
        error.userName = "Username left empty"
    }else{
        error.userName=""
    }

    if(values.password === "") {
        error.password = "Password left empty"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Invalid Password"
    }


    return error;
}