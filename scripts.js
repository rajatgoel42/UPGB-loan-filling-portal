document.getElementById('loanForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;
    const loanAmount = document.getElementById('loanAmount').value;
    const loanTerm = document.getElementById('loanTerm').value;
    const interestRate = document.getElementById('interestRate').value;
    const loanPurpose = document.getElementById('loanPurpose').value;

    // Initialize jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text('Loan Agreement', 20, 20);
    doc.setFontSize(12);

    // Add form details to PDF
    doc.text(`Borrower: ${fullName}`, 20, 30);
    doc.text(`Date of Birth: ${dob}`, 20, 40);
    doc.text(`Address: ${address}`, 20, 50);
    doc.text(`Loan Amount: $${loanAmount}`, 20, 60);
    doc.text(`Loan Term: ${loanTerm} months`, 20, 70);
    doc.text(`Interest Rate: ${interestRate}%`, 20, 80);
    doc.text(`Loan Purpose: ${loanPurpose}`, 20, 90);

    // Add terms
    doc.text('Terms & Conditions:', 20, 110);
    doc.text(`1. The loan amount of $${loanAmount} is provided to the borrower at an interest rate of ${interestRate}%.`, 20, 120);
    doc.text(`2. The borrower agrees to repay the loan in ${loanTerm} months.`, 20, 130);
    doc.text('3. Penalties will be applied for delayed payments.', 20, 140);

    // Save PDF
    doc.save(`${fullName}_Loan_Agreement.pdf`);
});