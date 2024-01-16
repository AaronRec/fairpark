export default {
	myVar1: [],
	myVar2: {},
	tryToLogin () {
		if (Vorname.text === '' || Nachname.text === '' || EMail.text === '' || Password.text === '')  {
			InvalidationText.setText("Bitte Eingaben überprüfen und verfollständigen")
			InvalidationText.setVisibility(true)
			return;
		}
		else{
			InvalidationText.setVisibility(false)
			var vorname = Vorname.text
			var nachname = Nachname.text
			var email = EMail.text
			var password = Password.text
			storeValue(vorname, nachname, email, password)
			Registration.run()
		}
	},
		
	myFun1 () {
		console.log("Test")
		console.log(EMail.text)
		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	async myFun2 () {
		//	use async-await or promises
		await storeValue('varName', 'hello world')
	}
}