export const signup = (formUser: any) => {
    return $.ajax({
        method: "POST",
        url: "/api/users",
        data: { user: formUser },
    });
};

export const login = (formUser: any) => {
    return $.ajax({
        method: "POST",
        url: "/api/session",
        data: { user: formUser },
    });
};

export const logout = () => {
    return $.ajax({
        method: "DELETE",
        url: "/api/session",
    });
};

export const validateAccount = (validation: string) => {
    return $.ajax({
        method: "GET",
        url: `/api/users/email_confirmation/${validation}`,
    });
};