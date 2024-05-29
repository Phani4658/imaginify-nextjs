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

declare type SearchParamProps = {
    params: { id: string; type: TransformationTypeKey };
    searchParams: { [key: string]: string | string[] | undefined };
};
  

declare type Transformations = {
    restore?: boolean;
    removeBackground?: boolean;
    fillBackground?: boolean;
    remove?: {
        prompt: string,
        removeShadow?: boolean,
        multiple?: boolean
    };
    recolor?: {
        prompt: string,
        to: string,
        multiple?: boolean
    };
}

declare type TransformationType = {
    type: string;
    title: string;
    subtitle: string;
    config: Transformations;
    icon: string;
}

declare type TransformationTypeKey =
  | "restore"
  | "fill"
  | "remove"
  | "recolor"
  | "removeBackground";