export default {
	myVar1: [],
	myVar2: {},
	tryToLogin () {
		if (EMail.text === '' || Password.text === '') {
			InvalidationText.setText("Email und Passwort benötigt")
			InvalidationText.setVisibility(true)
			return;
		}

		// TODO
		if (EMail.isValid && (EMail.text === 'a@b.de' && Password.text === '1')) {
			LoginLoader.setVisibility(true);
			Query1.run().then(data => {
				storeValue('user', data[0].name);
				navigateTo("MainApp");
				LoginLoader.setVisibility(false);
			});
		} else {
			InvalidationText.setText("Email oder Passwort nicht korrekt")
			InvalidationText.setVisibility(true)
		}
	},
	navigateToRegistration() {
		navigateTo("Register");
	},
	changeVisibilityOfInvalidation() {
		InvalidationText.setText("Email und Passwort benötigt")
		if (EMail.text.length < 1 ||  Password.text.length < 1)
			InvalidationText.setVisibility(true);
		else
			InvalidationText.setVisibility(false);
	}
}