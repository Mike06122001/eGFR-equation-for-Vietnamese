// Lấy các input từ DOM
const scrInput = document.getElementById('serumCreatinine');
const scysInput = document.getElementById('serumCystatinC');

// Công thức tính eGFR
const equation = function (scr, scys) {
    return (0.8 * scr * scys) / 156;
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
    if (isNaN(serumCreatinine) || isNaN(serumCystatinC)) {
        alert('Please enter valid numerical values for serum creatinine and serum Cystatin C.');
        return;
    }

    // Tính toán eGFR
    let eGFR;
    try {
        eGFR = equation(serumCreatinine, serumCystatinC);
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during calculation.');
        return;
    }

    // Hiển thị kết quả
    const eGFRResult = document.getElementById('eGFRResult');
    eGFRResult.textContent = `${eGFR.toFixed(2)} mL/min/1.73m²`;
}

// Gắn sự kiện cho form
document.getElementById('calculatorForm').addEventListener('submit', calculateEquation);
