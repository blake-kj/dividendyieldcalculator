const results = document.querySelector('#results')
document.addEventListener('DOMContentLoaded', hideResults);

function hideResults () {
  results.style.display = 'none';
}

document.querySelector('#yield-form').addEventListener('submit', function(e) {
  calculateYield();
  e.preventDefault();
});

function calculateYield(){
  const sharePrice = parseFloat(document.querySelector('#inputSharePrice').value);
  const dividend = parseFloat(document.querySelector('#inputDividend').value);
  const dividendFrequency = parseFloat(document.querySelector('#inputDividendFrequency').value);
  const dividendYield = ((dividend * dividendFrequency) / sharePrice).toFixed(2);
  const UIdividendYield = document.querySelector('#UIdividendYield');
  if(isFinite(dividendYield)){
    UIdividendYield.value = dividendYield;
    results.style.display = 'block';
  } else {
    showError('Error: Please complete the form before calculating');
  }
};

function showError(error) {
  results.style.display = 'none';
  const errorDiv = document.createElement('div');
  const card = document.querySelector('.card');
  const percent = document.querySelector('.fa-percentage');
  errorDiv.className = 'alert alert-danger text-center';
  errorDiv.appendChild(document.createTextNode(error));
  card.insertBefore(errorDiv, percent);
  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector('.alert').remove();
}