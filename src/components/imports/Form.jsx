import styles from '../../styles/modulos/form.module.css';

import { useForm } from '../../hooks/UseForm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export const Form = () => {
    const { formData, errors, loading, handleChange, handleSubmit, sesiones, planes, showAlert } = useForm(
        {
            nombre: '',
            telefono: '+56',
            email: '',
            sesion: '',
            plan: '',
            mensaje: '',
        },
        (success, data) => {
            if (success) {
                showAlert('Excelente', 'Datos enviados correctamente.<br>Pronto nos pondremos en contacto contigo.', 'success', '#9fc750');
            } else {
                showAlert('Ups', 'Hubo un error al enviar los datos.', 'error', '#1497ee');
            }
        }
    );

    return (
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={styles.camposObligatorios}>
                <p className="light-text-montserrat">(*) Campos obligatorios</p>
            </div>

            {/* NOMBRE */}
            <div className={styles.campoPrecalificarForm}>
                <label htmlFor="nombre" className="light-text-montserrat" aria-label="Nombre del usuario">
                    *Nombre Completo:
                </label>
                <input type="text" className={styles.formControl} id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
                {errors.nombre && (
                    <small className={`${styles.textDanger} light-text-montserrat`} aria-live="assertive">
                        {errors.nombre}
                    </small>
                )}
            </div>

            {/* TELEFONO */}
            <div className={styles.campoPrecalificarForm}>
                <label htmlFor="telefono" className="light-text-montserrat" aria-label="Telefono del usuario">
                    *Teléfono:
                </label>
                <input
                    type="text"
                    className={styles.formControl}
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    maxLength="13"
                />
                {errors.telefono && (
                    <small className={`${styles.textDanger} light-text-montserrat`} aria-live="assertive">
                        {errors.telefono}
                    </small>
                )}
            </div>

            {/* EMAIL */}
            <div className={styles.campoPrecalificarForm}>
                <label htmlFor="email" className="light-text-montserrat" aria-label="email del usuario">
                    *Correo Electrónico :
                </label>
                <input type="text" className={styles.formControl} id="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && (
                    <small className={`${styles.textDanger} light-text-montserrat`} aria-live="assertive">
                        {errors.email}
                    </small>
                )}
            </div>

            {/* TIPOS DE SESION */}
            <div className={styles.camposSelect}>
                <div className={styles.campoPrecalificarForm}>
                    <label htmlFor="sesion" className="light-text-montserrat" aria-label="Tipo de sesión de fotos que quiere el usuario">
                        *Tipo de sesión:
                    </label>
                    <select className={styles.formControl} id="sesion" name="sesion" value={formData.sesion} onChange={handleChange}>
                        {sesiones.map((sesion) => (
                            <option key={sesion} value={sesion}>
                                {sesion}
                            </option>
                        ))}
                    </select>
                    {errors.sesion && (
                        <small className={`${styles.textDanger} light-text-montserrat`} aria-live="assertive">
                            {errors.sesion}
                        </small>
                    )}
                </div>

                {/* TIPOS DE PLANES */}
                <div className={styles.campoPrecalificarForm}>
                    <label htmlFor="plan" className="light-text-montserrat" aria-label="Tipo de plan de sesión de fotos">
                        Tipo de plan:
                    </label>
                    <select className={styles.formControl} id="plan" name="plan" value={formData.plan} onChange={handleChange}>
                        {planes.map((plan) => (
                            <option key={plan} value={plan}>
                                {plan}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* MENSAJE */}
            <div className={styles.campoPrecalificarForm}>
                <label htmlFor="mensaje" className="light-text-montserrat" aria-label="Déjanos un mensaje">
                    ¿Que tienes en mente? (opcional):
                </label>
                <textarea className={styles.formControl} name="mensaje" id="mensaje" value={formData.mensaje} onChange={handleChange} rows="5" />
            </div>

            {/* Contenedor para el botón y spinner */}
            <div className={styles.contentEnvio}>
                <button type="submit" className="boton-1 bold-text-montserrat" title="Haz clic para enviarnos tus datos" disabled={loading}>
                    {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : 'ENVIAR'}
                </button>
            </div>
        </form>
    );
};
