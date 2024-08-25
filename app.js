document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('conversionForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita el envío del formulario

        // Obtener valores del formulario
        const inputValue = parseFloat(document.getElementById('inputValue').value);
        const conversionType = document.getElementById('conversionType').value;

        // Validar el input
        if (isNaN(inputValue) || inputValue <= 0) {
            resultDiv.innerHTML = `<div class="alert alert-danger">Por favor, ingrese un valor válido mayor que cero.</div>`;
            return;
        }

        // Realizar la conversión
        let result;
        switch (conversionType) {
            case 'km-m':
                result = inputValue * 1000;
                resultDiv.innerHTML = `<div class="alert alert-success">${inputValue} km son ${result} m.</div>`;
                break;
            case 'm-cm':
                result = inputValue * 100;
                resultDiv.innerHTML = `<div class="alert alert-success">${inputValue} m son ${result} cm.</div>`;
                break;
            case 'ft-in':
                result = inputValue * 12;
                resultDiv.innerHTML = `<div class="alert alert-success">${inputValue} ft son ${result} pulgadas.</div>`;
                break;
            case 'yd-in':
                result = inputValue * 36;
                resultDiv.innerHTML = `<div class="alert alert-success">${inputValue} yardas son ${result} pulgadas.</div>`;
                break;
            default:
                resultDiv.innerHTML = `<div class="alert alert-danger">Seleccione un tipo de conversión válido.</div>`;
                break;
        }
    });
});
