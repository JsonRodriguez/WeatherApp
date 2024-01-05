
export function images ( data ) {

    let icon='';

    switch (data) {
        case 'Clear':
            icon = 'fa-solid fa-sun  weatherIcon';
            break;
        case 'Rain':
            icon = 'fa-solid fa-cloud-rain weatherIcon';
            break;
        case 'Snow':
            icon = 'fa-regular fa-snowflake weatherIcon';
            break;
        case 'Clouds':
            icon = 'fa-solid fa-cloud weatherIcon';
            break;
        default:
            icon = 'fa-solid fa-cloud-sun weatherIcon';
    }

    return icon;
}