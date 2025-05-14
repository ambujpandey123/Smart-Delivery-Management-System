const nameRegex = /^[A-Za-z\s]+$/; // Only alphabets and spaces
const emailRegex = /^[^\s@]+@gmail\.com$/; // Only Gmail addresses

export const ValidateDetails = (email:string, password:string, name:string) => {
    if (!emailRegex.test(email)) {
        return "Invalid email format. Please use a valid Gmail address.";
    }
    if (password.length < 6) {
        return "Password must be at least 6 characters long.";
    }
    if (name && !nameRegex.test(name)) {
        return "Please enter a valid name.";
    }
    return "Valid";
};
 

export const  API_URL = process.env.NEXT_PUBLIC_API_URL;