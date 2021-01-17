import shortid from 'shortid';
// import { createAction } from '@reduxjs/toolkit';

// const addContacts = createAction('pnoneBook/add', data => ({
//   payload: {
//     id: shortid.generate(),
//     data,
//   },
// }));

// const deleteContacts = createAction('pnoneBook/delete');
// const changeFilter = createAction('pnoneBook/changeFilter');

// const actions = { addContacts, deleteContacts, changeFilter };

// export default actions;

export const addContacts = data => ({
  type: 'contacts/Add',
  payload: { id: shortid.generate(), data },
});
export const deleteContacts = id => ({ type: 'contacts/Delete', payload: id });
export const changeFilter = text => ({
  type: 'contacts/ChangeFilter',
  payload: text,
});
