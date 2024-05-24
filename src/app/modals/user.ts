export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    telephone: string;
    username: string;
    password: string;
    createdDate: string; // Utilisez Date si vous préférez travailler avec des objets Date en TypeScript
  }