import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ contacts, onDeleteContact, search }) {
  const filteredContacts =
    search.trim() === ''
      ? contacts.slice()
      : contacts.filter(contact =>
          contact.name.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
}
