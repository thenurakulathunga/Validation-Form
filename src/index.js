function validateForm() {
	const data = {
	visitorName: document.forms["myForm"]["visitorName"].value,
	visitorNic: document.forms["myForm"]["visitorNic"].value,
	telephoneNumber: document.forms["myForm"]["telephoneNumber"].value,
	visitorType: document.forms["myForm"]["visitorType"].value,
	passValidHoure: document.forms["myForm"]["passValidHoure"].value,
	};
	errorHandler(formInputValidation(data));
}
const formInputValidation = (data) => {
	const error = {};

	if (data.visitorName === "") {
	error.visitorNameError = {
		type: "required",
		message: "Please enter visitor name.",
	};
	}

	if (data.visitorNic === "") {
	error.visitorNicError = {
		type: "required",
		message: "Please Enter visitor nic number.",
	};
	} else if (!data.visitorNic.match(/^([0-9]{9}[x|X|v|V]|[0-9]{12})$/m)) {
	error.visitorNicError = {
		type: "validate",
		message: "Please enter valid nic number.",
	};
	}

	if (data.telephoneNumber === "") {
	error.telephoneNumberError = {
		type: "required",
		message: " Please enter visitor telephone number.",
	};
	} else if (
	!data.telephoneNumber.match(/^[0]{1}[7]{1}[01245678]{1}[0-9]{7}$/gm)
	) {
	error.telephoneNumberError = {
		type: "validate",
		message: "Please enter valid telephone number.",
	};
	}

	if (data.visitorType === "") {
	error.visitorTypeError = {
		type: "required",
		message: "Please select visitor type.",
	};
	}

	if (data.passValidHoure === "") {
	error.passValidHoureError = {
		type: "required",
		message: "Please enter gate pass valid houre.",
	};
	}else if (!data.passValidHoure.match(/[1-8]/)) {
	error.passValidHoureError = {
		type: "validate",
		message: "You can add 1 to 8 range only.",
	};
	}
	
	
	return error;
};

const errorHandler = (error) => {
	const visitorNameError = document.getElementById("visitorNameError");
	const visitorNicError = document.getElementById("visitorNicError");
	const telephoneNumberError = document.getElementById(
	"telephoneNumberError"
	);
	const visitorTypeError = document.getElementById("visitorTypeError");
	const passValidHoureError = document.getElementById(
	"passValidHoureError"
	);

	passValidHoureError.innerHTML = "";
	telephoneNumberError.innerHTML = "";
	visitorNameError.innerHTML = "";
	visitorNicError.innerHTML = "";
	visitorTypeError.innerHTML = "";

	if (
	error.passValidHoureError != undefined && (error.passValidHoureError.type === "required" || error.passValidHoureError.type === "validate")
	) {
	passValidHoureError.innerHTML = error.passValidHoureError.message;
	}
	if (
	error.telephoneNumberError != undefined && ( error.telephoneNumberError.type === "required" || error.telephoneNumberError.type === "validate")
	) {
	telephoneNumberError.innerHTML = error.telephoneNumberError.message;
	}
	if (
	error.visitorNameError != undefined &&
	error.visitorNameError.type === "required"
	) {
	visitorNameError.innerHTML = error.visitorNameError.message;
	}
	if (
	error.visitorNicError != undefined && ( error.visitorNicError.type === "required" || error.visitorNicError.type === "validate" )
	) {
	visitorNicError.innerHTML = error.visitorNicError.message;
	}
	if (
	error.visitorTypeError != undefined &&
	error.visitorTypeError.type === "required"
	) {
	visitorTypeError.innerHTML = error.visitorTypeError.message;
	}
};