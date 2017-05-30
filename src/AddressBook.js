function AddressBook() {
	var self = this;
	this.contacts = [];
	this.initialComplete = false;
	this.addContact = function(contact) {
		self.contacts.push(contact);
	};
	this.getContact = function(index) {
		return self.contacts[index];
	}
}
AddressBook.prototype.getContactNumber = function() {
	return this.contacts.length;
}
AddressBook.prototype.deleteContact = function(index) {
	this.contacts.splice(index, 1);
}
AddressBook.prototype.getInitialContacts = function(cb) {
	var self = this;
	setTimeout(function() {
		self.initialComplete = true;
		if(cb) {
			return cb();
		}
	}, 3);
}
