export const stringToDate = (dateString: string) => {
    const parts = dateString.split("/");
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);

    return new Date(year, month, day);
}

export const dateToString = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

export const getAuthTokenFromLocalStorage = () => {
    const item = localStorage.getItem(import.meta.env.VITE_LOCAL_STORAGE_TOKEN_KEY);
    if (item) {
        return item
    }

    return ""
}

export const setAuthTokenInTheLocalStorage = (token: string) => {
    localStorage.setItem(import.meta.env.VITE_LOCAL_STORAGE_TOKEN_KEY, token);
}