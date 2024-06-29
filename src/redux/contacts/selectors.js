export const selectAllContacts = state => state.contacts.items;

export const selectFilteredContacts = state => {
  const filter = state.filters.name.toLowerCase();
  return state.contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
};
