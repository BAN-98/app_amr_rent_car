import Swal from "sweetalert2"

export const showAlert = (tittle, message, type) => {
    Swal.fire({
        title: tittle,
        text: message,
        icon: type
    });
};