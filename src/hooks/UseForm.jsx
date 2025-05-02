import { useState } from 'react';
import Swal from 'sweetalert2';

export const useForm = (initialState, submitCallback) => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const sesiones = ['Tipo de Sesión', 'Newborn', 'Niños', 'Embarazo', 'Familia'];

    const planes = ['Tipo de Plan', 'Básico', 'Full', 'Premium'];

    const showAlert = (title, message, icon, color) => {
        Swal.fire({
            title,
            html: `<div class="light-text-montserrat"><p>${message}</p></div>`,
            icon,
            confirmButtonColor: color,
            scrollbarPadding: false,
            customClass: {
                title: 'bold-text-montserrat',
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
        const { name, type, checked, value } = e.target;
        const fieldValue = type === 'checkbox' ? checked : value;

        if (name === 'telefono') {
            const clean = fieldValue.replace(/\D/g, '');
            const formatted = clean.startsWith('56') ? '+' + clean : '+56' + clean;
            setFormData((prev) => ({ ...prev, telefono: formatted }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: fieldValue }));
        }
        setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const validateForm = () => {
        const newErrors = {};

        validateNombre(newErrors);

        validateTelefono(newErrors);

        validateEmail(newErrors);

        validateSesion(newErrors);

        ValidatePolitica(newErrors);

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateNombre = (newErrors) => {
        if (!formData.nombre.trim()) {
            newErrors.nombre = true;
        }
    };

    const validateTelefono = (newErrors) => {
        if (!formData.telefono.match(/^\+56\d{10}$/)) {
            newErrors.telefono = true;
        }
    };

    const validateEmail = (newErrors) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            newErrors.email = true;
        }
    };

    const validateSesion = (newErrors) => {
        if (!formData.sesion.trim() || formData.sesion === 'Tipo de Sesión') {
            newErrors.sesion = true;
        }
    };

    const ValidatePolitica = (newErrors) => {
        if (!formData.politicas) {
            newErrors.politicas = true;
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
                plan: formData.plan,
                mensaje: formData.mensaje,
                novedades: formData.novedades,
            };

            const response = await fetch('http://localhost:5000/submit', {
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
        setErrors({});
    };

    return { formData, errors, loading, handleChange, handleSubmit, sesiones, planes, showAlert };
};
