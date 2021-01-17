import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { error, notice } from '@pnotify/core';
import { defaults } from '@pnotify/core';
import { addContacts } from '../../redux/actions';
import s from './ContactForm.module.css';

defaults.delay = 2000;

function ContactForm({ onSubmit, contacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (name === '') {
      return error({
        title: 'Error',
        text: 'Please eneter name!',
      });
    }
    if (number === '') {
      return error({
        title: 'Error',
        text: 'Please eneter number!',
      });
    }

    const findContact = contacts?.find(contact => contact.data.name === name);

    if (!findContact) {
      onSubmit({ name, number });
      reset();
      return;
    }

    if (findContact.data.name === name) {
      reset();
      return notice({
        title: 'Notice',
        text: `${name} is already in contacts.`,
      });
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.name}>Name</label>
      <input
        className={s.inputName}
        type="text"
        name="name"
        value={name}
        autoComplete="off"
        onChange={e => setName(e.target.value)}
      />

      <label className={s.number}>Number</label>
      <input
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

const mapStateToProps = state => ({
  contacts: state.items,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(addContacts(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

// const handleSubmit = data => {
//   if (data.name === '') {
//     return error({
//       title: 'Error',
//       text: 'Please eneter name!',
//     });
//   }
//   if (data.number === '') {
//     return error({
//       title: 'Error',
//       text: 'Please eneter number!',
//     });
//   }

//   const findContact = contacts.find(({ name }) => data.name === name);

//   if (!findContact) {
//     setContacts([data, ...contacts]);
//     return;
//   }

//   if (findContact.name === data.name) {
//     notice({
//       title: 'Notice',
//       text: `${data.name} is already in contacts.`,
//     });
//   }
// };
