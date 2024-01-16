export default {
	myFun1() {
		if(TicketType.selectedOptionValue == "week") {
			TicketDuration.setVisibility(true);
		} else {
			TicketDuration.setVisibility(false);
		}
	},
	myFun2() {
		switch(TicketType.selectedOptionValue){
			case("day"):
				PriceValue.setText("5.00€");
				break;
			case("week"):
				if(TicketDuration.selectedOptionValue == "three"){
					PriceValue.setText("10.00€");
				} else if(TicketDuration.selectedOptionValue == "five"){
					PriceValue.setText("15.00€")
				}
				break;
			case("month"):
				PriceValue.setText("30.00€");
				break;
			case("year"):
				PriceValue.setText("100.00€");
				break;
		}
	}
}