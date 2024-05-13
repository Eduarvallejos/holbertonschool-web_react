// Define interface Student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Declare student variables
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
  };
  
  // Store students in an array
  const studentsList: Student[] = [student1, student2];
  
  // Render table
  const renderTable = () => {
    const table = document.createElement("table");
    
    // Create table headers
    const headersRow = table.insertRow();
    const firstNameHeader = headersRow.insertCell(0);
    firstNameHeader.textContent = "First Name";
    const locationHeader = headersRow.insertCell(1);
    locationHeader.textContent = "Location";
  
    // Populate table with student data
    studentsList.forEach(student => {
      const row = table.insertRow();
      const firstNameCell = row.insertCell(0);
      firstNameCell.textContent = student.firstName;
      const locationCell = row.insertCell(1);
      locationCell.textContent = student.location;
    });
  
    document.body.appendChild(table);
  };
  
  // Call renderTable function
  renderTable();
  