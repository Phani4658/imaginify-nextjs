declare type CreateUserParams = {
    clerkId: string;
    email: string;
    username: string;
    firstName: string | null;
    lastName: string | null;
    photo: string;
}

declare type UpdateUserParams = {
    username: string;
    firstName: string | null;
    lastName: string | null;
    photo: string;
}