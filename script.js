document.getElementById('convert-btn').addEventListener('click', function() {
  const temp = parseFloat(document.getElementById('temperature').value);
  const unit = document.getElementById('unit').value;

  if (isNaN(temp)) {
    alert('Please enter a valid temperature value.');
    return;
  }

  let convertedTemp;
  let convertedUnit;

  if (unit === 'celsius') {
    convertedTemp = `${(temp * 9 / 5 + 32).toFixed(2)} °F (Fahrenheit), ${(temp + 273.15).toFixed(2)} K (Kelvin)`;
  } else if (unit === 'fahrenheit') {
    convertedTemp = `${((temp - 32) * 5 / 9).toFixed(2)} °C (Celsius), ${((temp - 32) * 5 / 9 + 273.15).toFixed(2)} K (Kelvin)`;
  } else if (unit === 'kelvin') {
    convertedTemp = `${(temp - 273.15).toFixed(2)} °C (Celsius), ${((temp - 273.15) * 9 / 5 + 32).toFixed(2)} °F (Fahrenheit)`;
  }

  document.getElementById('output').textContent = convertedTemp;
  document.getElementById('result').classList.remove('hidden');
});
