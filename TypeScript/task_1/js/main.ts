interface Teacher{
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
    [key: string]: string | boolean | number | undefined;
};

// Crear un objeto Teacher
const teacher3: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: "New York",
    contract: true // Se agrega una propiedad adicional llamada "contract"
};

console.log(teacher3);