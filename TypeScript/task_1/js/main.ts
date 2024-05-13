interface Teacher{
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
    [key: string]: string | boolean | number | undefined;
};
