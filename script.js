document.getElementById("regForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const dob = document.getElementById("dob").value;
  const gender = document.getElementById("gender").value;
  const mode = document.getElementById("mode").value;

  // Add new row to table
  const table = document.getElementById("participantsTable");
  const newRow = table.insertRow();

  newRow.insertCell(0).innerText = name;
  newRow.insertCell(1).innerText = email;
  newRow.insertCell(2).innerText = phone;
  newRow.insertCell(3).innerText = mode;

  // Clear form
  document.getElementById("regForm").reset();
});
