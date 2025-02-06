function appendValue(value){
    document.getElementById('display').value += value;
}

function clearDisplay(){
    document.getElementById('display').value = '';
}
function calculate(){
    try {
        let display = document.getElementById('display');
        let result = eval(display.value);
        
        if (result === Infinity || result === -Infinity) {
            display.value = 'Tidak dapat dibagi dengan 0';
        } else {
            display.value = result;
        }
    } catch (e) {
        display.value = 'Error';
    }
}

function deleteLast(){
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}