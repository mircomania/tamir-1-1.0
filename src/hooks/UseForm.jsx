import { useState } from 'react';
import Swal from 'sweetalert2';

export const useForm = (initialState, submitCallback) => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const sesiones = ['Tipo de Sesión', 'Newborn', 'Niños', 'Embarazo', 'Familia'];

    const showAlert = (title, message, icon, color) => {
        Swal.fire({
            title,
            html: `<div class="light-text"><p>${message}</p></div>`,
            icon,
            confirmButtonColor: color,
            scrollbarPadding: false,
            customClass: {
                title: 'bold-text',
            },
            willOpen: () => {
                document.body.style.overflow = 'auto';
            },
            willClose: () => {
                document.body.style.overflow = 'auto';
            },
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'telefono') {
            const cleanValue = value.replace(/\D/g, '');
            const formattedValue = cleanValue.startsWith('56') ? '+' + cleanValue : '+56' + cleanValue;
            setFormData((prev) => ({ ...prev, telefono: formattedValue }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }

        setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const validateForm = () => {
        const newErrors = {};

        validateNombre(newErrors);

        validateTelefono(newErrors);

        validateEmail(newErrors);

        validateSesion(newErrors);

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateNombre = (newErrors) => {
        if (!formData.nombre.trim()) {
            newErrors.nombre = 'Completa este campo.';
        }
    };

    const validateTelefono = (newErrors) => {
        if (!formData.telefono.match(/^\+56\d{10}$/)) {
            newErrors.telefono = 'Ingresa un número de teléfono válido.';
        }
    };

    const validateEmail = (newErrors) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            newErrors.email = 'Ingresa un correo electrónico válido.';
        }
    };

    const validateSesion = (newErrors) => {
        if (!formData.sesion.trim() || formData.sesion === 'Tipo de Sesión') {
            newErrors.sesion = 'Selecciona un tipo de Sesión válido.';
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);

        try {
            const formDataToSend = {
                nombre: formData.nombre,
                telefono: formData.telefono,
                email: formData.email,
                sesion: formData.sesion,
                mensaje: formData.mensaje,
            };

            const response = await fetch('/proconsultores/backend/submit.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formDataToSend),
            });

            const data = await response.json();

            if (response.ok) {
                submitCallback(true, data);
                resetForm();
            } else {
                submitCallback(false, data);
            }
        } catch (error) {
            submitCallback(false, error);
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setFormData(initialState);
    };

    return { formData, errors, loading, handleChange, handleSubmit, sesiones, showAlert };
};
