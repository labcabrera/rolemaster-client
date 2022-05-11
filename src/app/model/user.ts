export class User {
    id: string;
    friends: string[];
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;

    constructor(username: string, email: string, firstName: string, lastName: string, password: string) {
        this.id = username;
        this.friends = [];
        this.username = username;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
    }

}