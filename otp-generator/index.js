let generatedOtp;
let timeoutId;
let currentIntervalId
const otpInputs = document.querySelector('#otp-inputs-id')
const otpExpireElement = document.querySelector('#otp-expires-id')

const expireOtp = () => {
    const totalTime = 15000;
    const interval = 1000;
    let slice = totalTime / interval;

    const intervalId = setInterval(() => {
        otpExpireElement.textContent = `OTP will expires in ${slice} seconds`;
        slice -= 1;
    }, interval)
    
    currentIntervalId = intervalId
    timeoutId = setTimeout(() => {
        otpExpireElement.textContent = "Otp Expired!!"
        generateOtp();
        clearInterval(intervalId)
    }, totalTime)
}

const generateOtp = () => {
    generatedOtp = Math.floor(1000 + Math.random() * 9000)
    const otpElement = document.querySelector('#generate-otp-id')
    otpElement.textContent = `Your OTP: ${generatedOtp}`
    expireOtp()
}

const validateOtp = () => {
    let typedNumber = "";
    [...otpInputs.children].forEach(element => {
        typedNumber += element.value
    })

    const isValidOtp = generatedOtp === parseInt(typedNumber);
    const otpValidateElement = document.querySelector('#otp-validate-id')
    if (isValidOtp) {
        otpValidateElement.textContent = "OTP has been validated successfully!!"
        otpValidateElement.classList.add('success')
        otpValidateElement.classList.remove('fail')
        clearTimeout(timeoutId);
        otpExpireElement.textContent = ""
        clearInterval(currentIntervalId)
    } else {
        otpValidateElement.textContent = "OTP is Invalid!!"
        otpValidateElement.classList.remove('success')
        otpValidateElement.classList.add('fail')
    }
}

const init = () => {
    otpInputs.addEventListener('input', event => {
        const target = event.target
        const value = target.value;
        if (isNaN(value)) {
            target.value = "";
            return;
        }

        const nextSibling = target.nextElementSibling;
        if (nextSibling) {
            nextSibling.focus();
        } 

        validateOtp();
    })

    setTimeout(generateOtp, 2000);
}

init()