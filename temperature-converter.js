const temperatureInput = document.getElementById('temperature');
const fromUnitSelect = document.getElementById('fromUnit');
const toUnitSelect = document.getElementById('toUnit');
const convertButton = document.getElementById('convertButton');
const resultElement = document.getElementById('result');


convertButton.addEventListener('click', () => {
  
  convert();
});

function convert() {
  const temperature = parseFloat(temperatureInput.value);
  const fromUnit = fromUnitSelect.value;
  const toUnit = toUnitSelect.value;

  
  let convertedTemperature;
  switch (fromUnit) {
    case 'celsius':
      if (toUnit === 'fahrenheit') {
        convertedTemperature = (temperature * 9 / 5) + 32;
      } else if (toUnit === 'kelvin') {
        convertedTemperature = temperature + 273.15;
      }
      break;
    case 'fahrenheit':
      if (toUnit === 'celsius') {
        convertedTemperature = (temperature - 32) * 5 / 9;
      } else if (toUnit === 'kelvin') {
        convertedTemperature = (temperature + 459.67) * 5 / 9;
      }
      break;
    case 'kelvin':
      if (toUnit === 'celsius') {
        convertedTemperature = temperature - 273.15;
      } else if (toUnit === 'fahrenheit') {
        convertedTemperature = (temperature - 273.15) * 9 / 5 + 32;
      }
      break;
  }

  resultElement.textContent = `${convertedTemperature.toFixed(2)} ${toUnit}`;
}
