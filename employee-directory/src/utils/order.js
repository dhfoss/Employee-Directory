export const orderByLastName = data => {
    return data.sort((a, b) => {
        const nameA = (a.name.last).toUpperCase();
        const nameB = (b.name.last).toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
};

export const orderByEmail = data => {
    return data.sort((a, b) => {
        const nameA = (a.email).toUpperCase();
        const nameB = (b.email).toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
};

export const orderByCity = data => {
    return data.sort((a, b) => {
        const nameA = (a.location.city).toUpperCase();
        const nameB = (b.location.city).toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
};

export const orderByCountry = data => {
    return data.sort((a, b) => {
        const nameA = (a.location.country).toUpperCase();
        const nameB = (b.location.country).toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
};