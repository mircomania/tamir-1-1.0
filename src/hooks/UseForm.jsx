import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useForm = (initialState) => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const sesiones = ['Tipo de Sesión', 'Newborn', 'Niños', 'Embarazo', 'Familia'];

    const planes = ['Tipo de Plan', 'Básico', 'Full', 'Premium'];

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
        setErrors((prev) => {
            return Object.fromEntries(Object.entries(prev).filter(([key]) => key !== name));
        });
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

            const response = await fetch('http://localhost:5000/api/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formDataToSend),
            });

            if (response.ok) {
                navigate('/formulario-enviado');
                resetForm();
            } else {
                console.error('Error al enviar el formulario');
            }
        } catch (error) {
            console.error('Error de red:', error);
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setFormData(initialState);
        setErrors({});
    };

    return { formData, errors, loading, handleChange, handleSubmit, sesiones, planes };
};
