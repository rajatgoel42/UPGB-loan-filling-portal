<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $fullName = $_POST['fullName'];
    $dob = $_POST['dob'];
    $address = $_POST['address'];
    $loanAmount = $_POST['loanAmount'];
    $loanTerm = $_POST['loanTerm'];
    $interestRate = $_POST['interestRate'];
    $loanPurpose = $_POST['loanPurpose'];
    
    // Process or store data (you can store it in a database here)
    echo "Loan Agreement successfully submitted for: " . $fullName;
} else {
    echo "Invalid request method.";
}
?>