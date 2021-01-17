import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import s from './ContactList.module.css';
import ContactEl from '../ContactEl';
import IconBatton from '../IconButton';
import { deleteContacts } from '../../redux/actions';
import { ReactComponent as DelIcon } from '../../icons/delete.svg';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={s.list}>
      {contacts &&
        contacts.map(contact => (
          <li key={contact.id} className={s.item}>
            <ContactEl contact={contact} />
            <IconBatton
              onClick={() => onDeleteContact(contact.id)}
              aria-label="Add todo"
            >
              <DelIcon width="15" height="15" fill="#fff" />
            </IconBatton>
          </li>
        ))}
    </ul>
  );
}

const getVisibleContacts = (contacts, filter) => {
  const normalizeFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.data.name.toLowerCase().includes(normalizeFilter),
  );
};

const mapStateToProps = ({ items, filter }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.protoTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
