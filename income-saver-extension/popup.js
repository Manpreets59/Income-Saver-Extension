document.getElementById('calculateBtn').addEventListener('click', function() {
  // Retrieve input values
  const incomeDate = document.getElementById('incomeDate').value;
  const incomeAmount = parseFloat(document.getElementById('incomeAmount').value);
  const savingsRate = parseFloat(document.getElementById('savingsRate').value);

  // Validate the inputs
  if (!incomeDate || isNaN(incomeAmount) || isNaN(savingsRate)) {
    document.getElementById('result').innerText = 'Please enter valid values.';
    return;
  }

  // Calculate savings (income * savingsRate%)
  const savings = (incomeAmount * savingsRate) / 100;

  // Display the result
  document.getElementById('result').innerHTML = `
    <p>Date: ${incomeDate}</p>
    <p>Potential Savings: $${savings.toFixed(2)}</p>
  `;
});
