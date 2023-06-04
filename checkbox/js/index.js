const checkboxState = {
	isChecked: false,
	isFocused: false
};

const defaultCheckbox = document.querySelector('#default-checkbox');
const customCheckbox = document.querySelector('#styled-checkbox');
const allCheckboxes = [defaultCheckbox, customCheckbox];

const toggleCheckboxes = () => {
	checkboxState.isChecked = !checkboxState.isChecked;
	allCheckboxes.forEach(checkbox => checkbox.checked = checkboxState.isChecked);
}

const toggleFocusOnCustomCheckbox = () => {
	checkboxState.isFocused = !checkboxState.isFocused;
	customCheckbox.setAttribute('virtual-focus', checkboxState.isFocused);
}