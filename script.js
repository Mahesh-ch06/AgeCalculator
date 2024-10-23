function processInput() {
    const input = document.getElementById('inputValue').value.trim();
    const refDate = document.getElementById('refDate').value.trim();
    const delimiter = "-";

    // Validate input and refDate formats
    if (!input || !refDate || !refDate.match(/^\d{2}-\d{2}-\d{4}$/)) {
        document.getElementById('result').textContent = "Please enter valid input and reference date in DD-MM-YYYY format.";
        return;
    }

    if (input.startsWith("DOB=")) {
        const dobString = input.split("=")[1];
        if (dobString.match(/^\d{2}-\d{2}-\d{4}$/)) {
            calculateAge(dobString, refDate, delimiter);
        } else {
            document.getElementById('result').textContent = "Invalid DOB format. Use DD-MM-YYYY.";
        }
    } else if (input.startsWith("AGE=")) {
        const ageString = input.split("=")[1];
        if (ageString.match(/^\d{2}-\d{2}-\d{4}$/)) {
            calculateDOB(ageString, refDate, delimiter);
        } else {
            document.getElementById('result').textContent = "Invalid AGE format. Use DD-MM-YYYY.";
        }
    } else {
        document.getElementById('result').textContent = "Invalid input. Please start with 'DOB=' or 'AGE='.";
    }
}

function calculateAge(dobString, refDate, delimiter) {
    const dobParts = dobString.split(delimiter);
    const refDateParts = refDate.split(delimiter);

    const dobDay = parseInt(dobParts[0], 10);
    const dobMonth = parseInt(dobParts[1], 10);
    const dobYear = parseInt(dobParts[2], 10);

    const refDay = parseInt(refDateParts[0], 10);
    const refMonth = parseInt(refDateParts[1], 10);
    const refYear = parseInt(refDateParts[2], 10);

    let ageYears = refYear - dobYear;
    let ageMonths = refMonth - dobMonth;
    let ageDays = refDay - dobDay;

    if (ageDays < 0) {
        ageDays += 30;
        ageMonths--;
    }
    if (ageMonths < 0) {
        ageMonths += 12;
        ageYears--;
    }

    document.getElementById('result').textContent = 
        `Age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`;
}

function calculateDOB(ageString, refDate, delimiter) {
    const ageParts = ageString.split(delimiter);
    const refDateParts = refDate.split(delimiter);

    let ageYears = parseInt(ageParts[2], 10);
    let ageMonths = parseInt(ageParts[1], 10);
    let ageDays = parseInt(ageParts[0], 10);

    const refDay = parseInt(refDateParts[0], 10);
    const refMonth = parseInt(refDateParts[1], 10);
    const refYear = parseInt(refDateParts[2], 10);

    let dobYear = refYear - ageYears;
    let dobMonth = refMonth - ageMonths;
    let dobDay = refDay - ageDays;

    if (dobDay < 0) {
        dobDay += 30;
        dobMonth--;
    }

    if (dobMonth <= 0) {
        dobMonth += 12;
        dobYear--;
    }

    document.getElementById('result').textContent = 
        `DOB is ${('0' + dobDay).slice(-2)}-${('0' + dobMonth).slice(-2)}-${dobYear}`;
}
