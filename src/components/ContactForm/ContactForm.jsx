import { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { useForm } from 'react-hook-form';
import s from './ContactForm.module.css';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { register, handleSubmit, reset } = useForm();

  return (
    <form
      onSubmit={handleSubmit(() => {
        onSubmit({ name, number, id: shortid.generate() });
        reset(setName(''), setNumber(''));
      })}
      className={s.form}
    >
      <label className={s.name}>Name</label>
      <input
        ref={register}
        className={s.inputName}
        type="text"
        name="name"
        value={name}
        autoComplete="off"
        onChange={e => setName(e.target.value)}
      />

      <label className={s.number}>Number</label>
      <input
        ref={register}
        className={s.inputNumber}
        type="tel"
        name="number"
        value={number}
        autoComplete="off"
        onChange={e => setNumber(e.target.value)}
      />
      <button type="submit" className={s.btn}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
