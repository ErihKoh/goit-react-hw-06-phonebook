// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';
// import actions from './actions';

import { combineReducers } from 'redux';

// const contacts = createReducer([], {
//   [actions.addContacts]: (state, { payload }) => [...state, payload],
//   [actions.deleteContacts]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

// const filter = createReducer('', {
//   [actions.changeFilter]: (_, { payload }) => payload,
// });

// export default combineReducers({
//   contacts,
//   filter,
// });

const items = (state = [], { type, payload }) => {
  switch (type) {
    case 'contacts/Add':
      return [...state, payload];

    case 'contacts/Delete':
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case 'contacts/ChangeFilter':
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
