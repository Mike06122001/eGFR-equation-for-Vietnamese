// Ensure all necessary files are included in the repository's root directory
// For example, place it alongside index.html and styles.css

const scrInput = document.getElementById('serumCreatinine');
const scysInput = document.getElementById('scylleCreatinine');

const equation = function(scr, scys) {
    return (0.8 * scr * scys) / 156;
};

// Function to handle form submission
function calculateEquation(event) {
    const patientSex = parseInt(document.getElementById('patientSex').value);
    const age = parseInt(document.getElementById('age').value);
    const serumCreatinine = parseFloat(scrInput.value);
    const serumCystatinC = parseFloat(scysInput.value);

    // Input validation and calculations
    let eGFR;
    if (isNaN(serumCreatinine) || isNaN(serumCystatinC)) {
        alert('Please enter valid numerical values for serum creatinine and serum Cystatin C.');
        return;
    }

    try {
        eGFR = equation(serumCreatinine, serumCystatinC);
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during calculation.');
        return;
    }

    // Display result
    const resultsContainer = document.getElementById('resultsContainer');

function calculateEquation(event) {
    // Input validation and calculations...
    let eGFR;
    
    if (isNaN(serumCreatinine) || isNaN(cystatinC)) {
        alert('Please enter valid numerical values for serum creatinine and cystatin C.');
        return;
    }

    try {
        eGFR = equation(serumCreatinine, cystatinC);
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during calculation.');
        return;
    }

    // Display result
    const resultsContainer = document.getElementById('resultsContainer');
    
    if (isNaN(eGFR)) {
        resultsContainer.innerHTML = '<p>Invalid input. Please enter numerical values.</p>';
        alert('Please enter valid numerical values for serum creatinine and cystatin C.');
        return;
    }

    // Show result
    const eGFRResult = document.getElementById('eGFRResult');
    eGFRResult.textContent = `Estimated Glomerular Filtration Rate (eGFR): ${Math.round(eGFR.toFixed(1))} mL/min/1.73m²`;

    // Update notes dynamically
    resultsContainer.innerHTML += `
        <div class="normal-range">
            For Males: <span style="color: #333;">80 - 123</span><br>
            For Females: <span style="color: #333;">85 - 127</span>
        </div>
        <div class="note-list">
            <div class="note-item">
                High eGFR may indicate a well-functioning kidney.
            </div>
            <div class="note-item">
                Low eGFR (below 60) indicates reduced function and may require dialysis.
            </div>
        </div>
    `;
}

// Handle form submission
document.getElementById('calculatorForm').addEventListener('submit', calculateEquation);
document.getElementById('calculatorForm').addEventListener('click', function() {
    alert('Calculation not performed automatically. Please enter all required fields before clicking "Calculate EGF".');
});

console.log('Calculator ready to use.');
