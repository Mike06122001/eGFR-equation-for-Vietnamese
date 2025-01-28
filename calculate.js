// Lấy các input từ DOM
const scrInput = document.getElementById('serumCreatinine');
const scysInput = document.getElementById('serumCystatinC');

// Công thức tính eGFR
const equation = function (sex, age, scr, scys) {
    return (
        100.430 *
        Math.pow(1.080, sex) *
        Math.pow(age, -0.097) *
        Math.pow(scr, -0.524) *
        Math.pow(scys, -0.435)
    );
};

// Hàm xử lý khi submit form
function calculateEquation(event) {
    event.preventDefault(); // Ngăn trang reload

    // Lấy giá trị từ các input
    const patientSex = parseInt(document.getElementById('patientSex').value);
    const age = parseInt(document.getElementById('age').value);
    const serumCreatinine = parseFloat(scrInput.value);
    const serumCystatinC = parseFloat(scysInput.value);

    // Kiểm tra input hợp lệ
    if (isNaN(patientSex) || isNaN(age) || isNaN(serumCreatinine) || isNaN(serumCystatinC)) {
        alert('Please enter valid numerical values for all inputs.');
        return;
    }

    if (serumCreatinine <= 0 || serumCystatinC <= 0 || age <= 0) {
        alert('Inputs must be positive numbers.');
        return;
    }

    // Tính toán eGFR
    let eGFR;
    try {
        eGFR = equation(patientSex, age, serumCreatinine, serumCystatinC);
    } catch (error) {
        console.error('Error in calculation:', error);
        alert('An error occurred during calculation.');
        return;
    }

    // Hiển thị kết quả
    const eGFRResult = document.getElementById('eGFRResult');
    if (eGFR < 15 || eGFR > 200) {
        alert('eGFR value is out of the expected range. Please verify the inputs.');
    }

    eGFRResult.textContent = `${eGFR.toFixed(2)} mL/min/1.73m²`;
}

// Gắn sự kiện cho form
document.getElementById('calculatorForm').addEventListener('submit', calculateEquation);
