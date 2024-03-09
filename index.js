// Exponen Convert
function convertToExponen(){
    const numberInput = document.getElementById("input-number").value;
    const coefficientInput = document.getElementById("coefficient-input").value;
    const exponenResult = document.getElementById("result")

    // Mengkonversi input menjadi tipe numerik
    const coefficient = parseFloat(numberInput);
    const exponent = parseInt(coefficientInput);

    // menghitung eksponan
    const result = Math.pow(coefficient, exponent);

    // Menampilkan hasil
    exponenResult.textContent = result;
}