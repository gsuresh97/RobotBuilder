var BlockList = new Map();

//DrivenMicrophone
function makeDrivenMicrophone(count, name){
	var ans = name;
	if (name === undefined){
		ans="DrivenMicrophone"+(count);
	}
	Blockly.Blocks['DrivenMicrophone|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("DrivenMicrophone ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code, electrical',
		inputs:[],
		outputs:['outInt', 'aOut', ],
	};

	//outInt- DrivenMicrophone
	Blockly.Blocks['DrivenMicrophone|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->outInt");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'outInt',
		name:'DrivenMicrophone',
	};

	//aOut- DrivenMicrophone
	Blockly.Blocks['DrivenMicrophone|' + count + '\\1'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->aOut");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'AnalogOutputPort',
		outputName:'aOut',
		name:'DrivenMicrophone',
	};
}

//DrivenPot
function makeDrivenPot(count, name){
	var ans = name;
	if (name === undefined){
		ans="DrivenPot"+(count);
	}
	Blockly.Blocks['DrivenPot|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("DrivenPot ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code, electrical',
		inputs:[],
		outputs:['outInt', 'aOut', ],
	};

	//outInt- DrivenPot
	Blockly.Blocks['DrivenPot|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->outInt");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'outInt',
		name:'DrivenPot',
	};

	//aOut- DrivenPot
	Blockly.Blocks['DrivenPot|' + count + '\\1'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->aOut");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'AnalogOutputPort',
		outputName:'aOut',
		name:'DrivenPot',
	};
}

//DrivenLED
function makeDrivenLED(count, name){
	var ans = name;
	if (name === undefined){
		ans="DrivenLED"+(count);
	}
	Blockly.Blocks['DrivenLED|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("DrivenLED ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("Din").setCheck("DigitalInputPort").appendField("Din");
			this.appendValueInput("inInt").setCheck("InIntPort").appendField("inInt");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code, electrical',
		inputs:['Din', 'inInt', ],
	};
}

//MotorDriver
function makeMotorDriver(count, name){
	var ans = name;
	if (name === undefined){
		ans="MotorDriver"+(count);
	}
	Blockly.Blocks['MotorDriver|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("MotorDriver ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("PWMin").setCheck("PWMInputPort").appendField("PWMin");
			this.appendValueInput("inInt").setCheck("InIntPort").appendField("inInt");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code, electrical',
		inputs:['PWMin', 'inInt', ],
		outputs:['eOut', ],
	};

	//eOut- MotorDriver
	Blockly.Blocks['MotorDriver|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->eOut");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'ElectricalPort',
		outputName:'eOut',
		name:'MotorDriver',
	};
}

//SortString
function makeSortString(count, name){
	var ans = name;
	if (name === undefined){
		ans="SortString"+(count);
	}
	Blockly.Blocks['SortString|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("SortString ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("inStr").setCheck("InStringPort").appendField("inStr");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code',
		inputs:['inStr', ],
		outputs:['outStr', ],
	};

	//outStr- SortString
	Blockly.Blocks['SortString|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->outStr");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutStringPort',
		outputName:'outStr',
		name:'SortString',
	};
}

//Servo
function makeServo(count, name){
	var ans = name;
	if (name === undefined){
		ans="Servo"+(count);
	}
	Blockly.Blocks['Servo|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("Servo ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("eIn").setCheck("ElectricalPort").appendField("eIn");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'electrical',
		inputs:['eIn', ],
	};
}

//SplitThree
function makeSplitThree(count, name){
	var ans = name;
	if (name === undefined){
		ans="SplitThree"+(count);
	}
	Blockly.Blocks['SplitThree|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("SplitThree ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("in").setCheck("InPort").appendField("in");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code',
		inputs:['in', ],
		outputs:['out1', 'out2', 'out3', ],
	};

	//out1- SplitThree
	Blockly.Blocks['SplitThree|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->out1");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutPort',
		outputName:'out1',
		name:'SplitThree',
	};

	//out2- SplitThree
	Blockly.Blocks['SplitThree|' + count + '\\1'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->out2");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutPort',
		outputName:'out2',
		name:'SplitThree',
	};

	//out3- SplitThree
	Blockly.Blocks['SplitThree|' + count + '\\2'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->out3");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutPort',
		outputName:'out3',
		name:'SplitThree',
	};
}

//DrivenServo
function makeDrivenServo(count, name){
	var ans = name;
	if (name === undefined){
		ans="DrivenServo"+(count);
	}
	Blockly.Blocks['DrivenServo|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("DrivenServo ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("PWMin").setCheck("PWMInputPort").appendField("PWMin");
			this.appendValueInput("inInt").setCheck("InIntPort").appendField("inInt");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code, electrical',
		inputs:['PWMin', 'inInt', ],
	};
}

//user_Toggle
function makeuser_Toggle(count, name){
	var ans = name;
	if (name === undefined){
		ans="user_Toggle"+(count);
	}
	Blockly.Blocks['user_Toggle|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("user_Toggle ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code',
		inputs:[],
		outputs:['ledLevel', ],
	};

	//ledLevel- user_Toggle
	Blockly.Blocks['user_Toggle|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->ledLevel");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'ledLevel',
		name:'user_Toggle',
	};
}

//DrivenRGBLED
function makeDrivenRGBLED(count, name){
	var ans = name;
	if (name === undefined){
		ans="DrivenRGBLED"+(count);
	}
	Blockly.Blocks['DrivenRGBLED|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("DrivenRGBLED ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("gPWM").setCheck("PWMInputPort").appendField("gPWM");
			this.appendValueInput("inGreen").setCheck("InIntPort").appendField("inGreen");
			this.appendValueInput("rPWM").setCheck("PWMInputPort").appendField("rPWM");
			this.appendValueInput("inRed").setCheck("InIntPort").appendField("inRed");
			this.appendValueInput("inBlue").setCheck("InIntPort").appendField("inBlue");
			this.appendValueInput("bPWM").setCheck("PWMInputPort").appendField("bPWM");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code, electrical',
		inputs:['gPWM', 'inGreen', 'rPWM', 'inRed', 'inBlue', 'bPWM', ],
	};
}

//Arduino101
function makeArduino101(count, name){
	var ans = name;
	if (name === undefined){
		ans="Arduino101"+(count);
	}
	Blockly.Blocks['Arduino101|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("Arduino101 ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("di18").setCheck("DigitalInputPort").appendField("di18");
			this.appendValueInput("di16").setCheck("DigitalInputPort").appendField("di16");
			this.appendValueInput("di17").setCheck("DigitalInputPort").appendField("di17");
			this.appendValueInput("di14").setCheck("DigitalInputPort").appendField("di14");
			this.appendValueInput("di15").setCheck("DigitalInputPort").appendField("di15");
			this.appendValueInput("di12").setCheck("DigitalInputPort").appendField("di12");
			this.appendValueInput("di13").setCheck("DigitalInputPort").appendField("di13");
			this.appendValueInput("di10").setCheck("DigitalInputPort").appendField("di10");
			this.appendValueInput("di11").setCheck("DigitalInputPort").appendField("di11");
			this.appendValueInput("di8").setCheck("DigitalInputPort").appendField("di8");
			this.appendValueInput("di9").setCheck("DigitalInputPort").appendField("di9");
			this.appendValueInput("di4").setCheck("DigitalInputPort").appendField("di4");
			this.appendValueInput("di5").setCheck("DigitalInputPort").appendField("di5");
			this.appendValueInput("di6").setCheck("DigitalInputPort").appendField("di6");
			this.appendValueInput("di7").setCheck("DigitalInputPort").appendField("di7");
			this.appendValueInput("di1").setCheck("DigitalInputPort").appendField("di1");
			this.appendValueInput("di2").setCheck("DigitalInputPort").appendField("di2");
			this.appendValueInput("di3").setCheck("DigitalInputPort").appendField("di3");
			this.appendValueInput("a1").setCheck("AnalogInputPort").appendField("a1");
			this.appendValueInput("a3").setCheck("AnalogInputPort").appendField("a3");
			this.appendValueInput("a2").setCheck("AnalogInputPort").appendField("a2");
			this.appendValueInput("a5").setCheck("AnalogInputPort").appendField("a5");
			this.appendValueInput("a4").setCheck("AnalogInputPort").appendField("a4");
			this.appendValueInput("a6").setCheck("AnalogInputPort").appendField("a6");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'electrical',
		inputs:['di18', 'di16', 'di17', 'di14', 'di15', 'di12', 'di13', 'di10', 'di11', 'di8', 'di9', 'di4', 'di5', 'di6', 'di7', 'di1', 'di2', 'di3', 'a1', 'a3', 'a2', 'a5', 'a4', 'a6', ],
		outputs:['do18', 'do14', 'do15', 'do16', 'do17', 'do10', 'do11', 'do12', 'do13', 'do8', 'do9', 'do2', 'do3', 'pwm6', 'do1', 'do6', 'pwm1', 'do4', 'do5', 'pwm4', 'pwm5', 'do7', 'pwm2', 'pwm3', ],
	};

	//do18- Arduino101
	Blockly.Blocks['Arduino101|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do18");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do18',
		name:'Arduino101',
	};

	//do14- Arduino101
	Blockly.Blocks['Arduino101|' + count + '\\1'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do14");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do14',
		name:'Arduino101',
	};

	//do15- Arduino101
	Blockly.Blocks['Arduino101|' + count + '\\2'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do15");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do15',
		name:'Arduino101',
	};

	//do16- Arduino101
	Blockly.Blocks['Arduino101|' + count + '\\3'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do16");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do16',
		name:'Arduino101',
	};

	//do17- Arduino101
	Blockly.Blocks['Arduino101|' + count + '\\4'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do17");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do17',
		name:'Arduino101',
	};

	//do10- Arduino101
	Blockly.Blocks['Arduino101|' + count + '\\5'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do10");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do10',
		name:'Arduino101',
	};

	//do11- Arduino101
	Blockly.Blocks['Arduino101|' + count + '\\6'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do11");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do11',
		name:'Arduino101',
	};

	//do12- Arduino101
	Blockly.Blocks['Arduino101|' + count + '\\7'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do12");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do12',
		name:'Arduino101',
	};

	//do13- Arduino101
	Blockly.Blocks['Arduino101|' + count + '\\8'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do13");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do13',
		name:'Arduino101',
	};

	//do8- Arduino101
	Blockly.Blocks['Arduino101|' + count + '\\9'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do8");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do8',
		name:'Arduino101',
	};

	//do9- Arduino101
	Blockly.Blocks['Arduino101|' + count + '\\10'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do9");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do9',
		name:'Arduino101',
	};

	//do2- Arduino101
	Blockly.Blocks['Arduino101|' + count + '\\11'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do2");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do2',
		name:'Arduino101',
	};

	//do3- Arduino101
	Blockly.Blocks['Arduino101|' + count + '\\12'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do3");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do3',
		name:'Arduino101',
	};

	//pwm6- Arduino101
	Blockly.Blocks['Arduino101|' + count + '\\13'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->pwm6");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'PWMOutputPort',
		outputName:'pwm6',
		name:'Arduino101',
	};

	//do1- Arduino101
	Blockly.Blocks['Arduino101|' + count + '\\14'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do1");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do1',
		name:'Arduino101',
	};

	//do6- Arduino101
	Blockly.Blocks['Arduino101|' + count + '\\15'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do6");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do6',
		name:'Arduino101',
	};

	//pwm1- Arduino101
	Blockly.Blocks['Arduino101|' + count + '\\16'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->pwm1");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'PWMOutputPort',
		outputName:'pwm1',
		name:'Arduino101',
	};

	//do4- Arduino101
	Blockly.Blocks['Arduino101|' + count + '\\17'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do4");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do4',
		name:'Arduino101',
	};

	//do5- Arduino101
	Blockly.Blocks['Arduino101|' + count + '\\18'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do5");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do5',
		name:'Arduino101',
	};

	//pwm4- Arduino101
	Blockly.Blocks['Arduino101|' + count + '\\19'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->pwm4");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'PWMOutputPort',
		outputName:'pwm4',
		name:'Arduino101',
	};

	//pwm5- Arduino101
	Blockly.Blocks['Arduino101|' + count + '\\20'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->pwm5");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'PWMOutputPort',
		outputName:'pwm5',
		name:'Arduino101',
	};

	//do7- Arduino101
	Blockly.Blocks['Arduino101|' + count + '\\21'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do7");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do7',
		name:'Arduino101',
	};

	//pwm2- Arduino101
	Blockly.Blocks['Arduino101|' + count + '\\22'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->pwm2");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'PWMOutputPort',
		outputName:'pwm2',
		name:'Arduino101',
	};

	//pwm3- Arduino101
	Blockly.Blocks['Arduino101|' + count + '\\23'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->pwm3");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'PWMOutputPort',
		outputName:'pwm3',
		name:'Arduino101',
	};
}

//ArduinoUno
function makeArduinoUno(count, name){
	var ans = name;
	if (name === undefined){
		ans="ArduinoUno"+(count);
	}
	Blockly.Blocks['ArduinoUno|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("ArduinoUno ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("di16").setCheck("DigitalInputPort").appendField("di16");
			this.appendValueInput("di17").setCheck("DigitalInputPort").appendField("di17");
			this.appendValueInput("di14").setCheck("DigitalInputPort").appendField("di14");
			this.appendValueInput("di15").setCheck("DigitalInputPort").appendField("di15");
			this.appendValueInput("di12").setCheck("DigitalInputPort").appendField("di12");
			this.appendValueInput("di13").setCheck("DigitalInputPort").appendField("di13");
			this.appendValueInput("di10").setCheck("DigitalInputPort").appendField("di10");
			this.appendValueInput("di11").setCheck("DigitalInputPort").appendField("di11");
			this.appendValueInput("di8").setCheck("DigitalInputPort").appendField("di8");
			this.appendValueInput("di9").setCheck("DigitalInputPort").appendField("di9");
			this.appendValueInput("di4").setCheck("DigitalInputPort").appendField("di4");
			this.appendValueInput("di5").setCheck("DigitalInputPort").appendField("di5");
			this.appendValueInput("di6").setCheck("DigitalInputPort").appendField("di6");
			this.appendValueInput("di7").setCheck("DigitalInputPort").appendField("di7");
			this.appendValueInput("di0").setCheck("DigitalInputPort").appendField("di0");
			this.appendValueInput("di1").setCheck("DigitalInputPort").appendField("di1");
			this.appendValueInput("di2").setCheck("DigitalInputPort").appendField("di2");
			this.appendValueInput("di3").setCheck("DigitalInputPort").appendField("di3");
			this.appendValueInput("a1").setCheck("AnalogInputPort").appendField("a1");
			this.appendValueInput("a3").setCheck("AnalogInputPort").appendField("a3");
			this.appendValueInput("a2").setCheck("AnalogInputPort").appendField("a2");
			this.appendValueInput("a5").setCheck("AnalogInputPort").appendField("a5");
			this.appendValueInput("a4").setCheck("AnalogInputPort").appendField("a4");
			this.appendValueInput("a6").setCheck("AnalogInputPort").appendField("a6");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'electrical',
		inputs:['di16', 'di17', 'di14', 'di15', 'di12', 'di13', 'di10', 'di11', 'di8', 'di9', 'di4', 'di5', 'di6', 'di7', 'di0', 'di1', 'di2', 'di3', 'a1', 'a3', 'a2', 'a5', 'a4', 'a6', ],
		outputs:['do14', 'do15', 'do16', 'do17', 'do10', 'do11', 'do12', 'do13', 'do8', 'do9', 'pwm4', 'do3', 'pwm6', 'do1', 'do6', 'pwm1', 'do4', 'do5', 'do2', 'pwm5', 'do0', 'do7', 'pwm2', 'pwm3', ],
	};

	//do14- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do14");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do14',
		name:'ArduinoUno',
	};

	//do15- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\1'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do15");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do15',
		name:'ArduinoUno',
	};

	//do16- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\2'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do16");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do16',
		name:'ArduinoUno',
	};

	//do17- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\3'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do17");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do17',
		name:'ArduinoUno',
	};

	//do10- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\4'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do10");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do10',
		name:'ArduinoUno',
	};

	//do11- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\5'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do11");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do11',
		name:'ArduinoUno',
	};

	//do12- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\6'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do12");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do12',
		name:'ArduinoUno',
	};

	//do13- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\7'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do13");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do13',
		name:'ArduinoUno',
	};

	//do8- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\8'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do8");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do8',
		name:'ArduinoUno',
	};

	//do9- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\9'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do9");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do9',
		name:'ArduinoUno',
	};

	//pwm4- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\10'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->pwm4");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'PWMOutputPort',
		outputName:'pwm4',
		name:'ArduinoUno',
	};

	//do3- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\11'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do3");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do3',
		name:'ArduinoUno',
	};

	//pwm6- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\12'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->pwm6");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'PWMOutputPort',
		outputName:'pwm6',
		name:'ArduinoUno',
	};

	//do1- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\13'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do1");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do1',
		name:'ArduinoUno',
	};

	//do6- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\14'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do6");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do6',
		name:'ArduinoUno',
	};

	//pwm1- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\15'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->pwm1");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'PWMOutputPort',
		outputName:'pwm1',
		name:'ArduinoUno',
	};

	//do4- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\16'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do4");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do4',
		name:'ArduinoUno',
	};

	//do5- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\17'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do5");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do5',
		name:'ArduinoUno',
	};

	//do2- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\18'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do2");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do2',
		name:'ArduinoUno',
	};

	//pwm5- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\19'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->pwm5");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'PWMOutputPort',
		outputName:'pwm5',
		name:'ArduinoUno',
	};

	//do0- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\20'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do0");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do0',
		name:'ArduinoUno',
	};

	//do7- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\21'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do7");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do7',
		name:'ArduinoUno',
	};

	//pwm2- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\22'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->pwm2");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'PWMOutputPort',
		outputName:'pwm2',
		name:'ArduinoUno',
	};

	//pwm3- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\23'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->pwm3");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'PWMOutputPort',
		outputName:'pwm3',
		name:'ArduinoUno',
	};
}

//LiveDemo4
function makeLiveDemo4(count, name){
	var ans = name;
	if (name === undefined){
		ans="LiveDemo4"+(count);
	}
	Blockly.Blocks['LiveDemo4|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("LiveDemo4 ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code, electrical',
		inputs:[],
	};
}

//LiveDemo0
function makeLiveDemo0(count, name){
	var ans = name;
	if (name === undefined){
		ans="LiveDemo0"+(count);
	}
	Blockly.Blocks['LiveDemo0|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("LiveDemo0 ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code, electrical',
		inputs:[],
	};
}

//LiveDemo1
function makeLiveDemo1(count, name){
	var ans = name;
	if (name === undefined){
		ans="LiveDemo1"+(count);
	}
	Blockly.Blocks['LiveDemo1|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("LiveDemo1 ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code, electrical',
		inputs:[],
	};
}

//LiveDemo2
function makeLiveDemo2(count, name){
	var ans = name;
	if (name === undefined){
		ans="LiveDemo2"+(count);
	}
	Blockly.Blocks['LiveDemo2|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("LiveDemo2 ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code, electrical',
		inputs:[],
	};
}

//LiveDemo3
function makeLiveDemo3(count, name){
	var ans = name;
	if (name === undefined){
		ans="LiveDemo3"+(count);
	}
	Blockly.Blocks['LiveDemo3|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("LiveDemo3 ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code, electrical',
		inputs:[],
	};
}

//RGBLED
function makeRGBLED(count, name){
	var ans = name;
	if (name === undefined){
		ans="RGBLED"+(count);
	}
	Blockly.Blocks['RGBLED|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("RGBLED ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'electrical',
		inputs:[],
	};
}

//LinearInterpolate
function makeLinearInterpolate(count, name){
	var ans = name;
	if (name === undefined){
		ans="LinearInterpolate"+(count);
	}
	Blockly.Blocks['LinearInterpolate|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("LinearInterpolate ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("inInt").setCheck("InIntPort").appendField("inInt");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[["inStart", "0"], ["inEnd", 1023], ["outStart", "0"], ["outEnd", 255], ],
		category:'code',
		inputs:['inInt', ],
		outputs:['outInt', ],
	};

	//outInt- LinearInterpolate
	Blockly.Blocks['LinearInterpolate|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->outInt");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'outInt',
		name:'LinearInterpolate',
	};
}

//ReverseString
function makeReverseString(count, name){
	var ans = name;
	if (name === undefined){
		ans="ReverseString"+(count);
	}
	Blockly.Blocks['ReverseString|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("ReverseString ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("inStr").setCheck("InStringPort").appendField("inStr");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code',
		inputs:['inStr', ],
		outputs:['outStr', ],
	};

	//outStr- ReverseString
	Blockly.Blocks['ReverseString|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->outStr");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutStringPort',
		outputName:'outStr',
		name:'ReverseString',
	};
}

//PrintString
function makePrintString(count, name){
	var ans = name;
	if (name === undefined){
		ans="PrintString"+(count);
	}
	Blockly.Blocks['PrintString|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("PrintString ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("inStr").setCheck("InStringPort").appendField("inStr");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code',
		inputs:['inStr', ],
	};
}

//UltrasonicSensor
function makeUltrasonicSensor(count, name){
	var ans = name;
	if (name === undefined){
		ans="UltrasonicSensor"+(count);
	}
	Blockly.Blocks['UltrasonicSensor|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("UltrasonicSensor ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'electrical',
		inputs:[],
	};
}

//MicrophoneDriver
function makeMicrophoneDriver(count, name){
	var ans = name;
	if (name === undefined){
		ans="MicrophoneDriver"+(count);
	}
	Blockly.Blocks['MicrophoneDriver|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("MicrophoneDriver ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("vIn").setCheck("ElectricalPort").appendField("vIn");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code, electrical',
		inputs:['vIn', ],
		outputs:['outInt', 'aOut', ],
	};

	//outInt- MicrophoneDriver
	Blockly.Blocks['MicrophoneDriver|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->outInt");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'outInt',
		name:'MicrophoneDriver',
	};

	//aOut- MicrophoneDriver
	Blockly.Blocks['MicrophoneDriver|' + count + '\\1'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->aOut");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'AnalogOutputPort',
		outputName:'aOut',
		name:'MicrophoneDriver',
	};
}

//DrivenUltrasonicSensor
function makeDrivenUltrasonicSensor(count, name){
	var ans = name;
	if (name === undefined){
		ans="DrivenUltrasonicSensor"+(count);
	}
	Blockly.Blocks['DrivenUltrasonicSensor|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("DrivenUltrasonicSensor ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("echoIn").setCheck("DigitalInputPort").appendField("echoIn");
			this.appendValueInput("triggerIn").setCheck("DigitalInputPort").appendField("triggerIn");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code, electrical',
		inputs:['echoIn', 'triggerIn', ],
		outputs:['outInt', ],
	};

	//outInt- DrivenUltrasonicSensor
	Blockly.Blocks['DrivenUltrasonicSensor|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->outInt");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'outInt',
		name:'DrivenUltrasonicSensor',
	};
}

//DrivenMotor
function makeDrivenMotor(count, name){
	var ans = name;
	if (name === undefined){
		ans="DrivenMotor"+(count);
	}
	Blockly.Blocks['DrivenMotor|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("DrivenMotor ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("PWMin").setCheck("PWMInputPort").appendField("PWMin");
			this.appendValueInput("inInt").setCheck("InIntPort").appendField("inInt");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code, electrical',
		inputs:['PWMin', 'inInt', ],
	};
}

//ReverseSort
function makeReverseSort(count, name){
	var ans = name;
	if (name === undefined){
		ans="ReverseSort"+(count);
	}
	Blockly.Blocks['ReverseSort|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("ReverseSort ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("inStr").setCheck("InStringPort").appendField("inStr");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code',
		inputs:['inStr', ],
		outputs:['outStr', ],
	};

	//outStr- ReverseSort
	Blockly.Blocks['ReverseSort|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->outStr");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutStringPort',
		outputName:'outStr',
		name:'ReverseSort',
	};
}

//IREmitterDriver
function makeIREmitterDriver(count, name){
	var ans = name;
	if (name === undefined){
		ans="IREmitterDriver"+(count);
	}
	Blockly.Blocks['IREmitterDriver|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("IREmitterDriver ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("Din").setCheck("DigitalInputPort").appendField("Din");
			this.appendValueInput("inInt").setCheck("InIntPort").appendField("inInt");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code, electrical',
		inputs:['Din', 'inInt', ],
		outputs:['eOut', ],
	};

	//eOut- IREmitterDriver
	Blockly.Blocks['IREmitterDriver|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->eOut");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'ElectricalPort',
		outputName:'eOut',
		name:'IREmitterDriver',
	};
}

//SortHello
function makeSortHello(count, name){
	var ans = name;
	if (name === undefined){
		ans="SortHello"+(count);
	}
	Blockly.Blocks['SortHello|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("SortHello ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code',
		inputs:[],
	};
}

//user_Counter
function makeuser_Counter(count, name){
	var ans = name;
	if (name === undefined){
		ans="user_Counter"+(count);
	}
	Blockly.Blocks['user_Counter|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("user_Counter ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code',
		inputs:[],
		outputs:['ledLevel', ],
	};

	//ledLevel- user_Counter
	Blockly.Blocks['user_Counter|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->ledLevel");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'ledLevel',
		name:'user_Counter',
	};
}

//SplitFour
function makeSplitFour(count, name){
	var ans = name;
	if (name === undefined){
		ans="SplitFour"+(count);
	}
	Blockly.Blocks['SplitFour|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("SplitFour ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("in").setCheck("InPort").appendField("in");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code',
		inputs:['in', ],
		outputs:['out1', 'out2', 'out3', 'out4', ],
	};

	//out1- SplitFour
	Blockly.Blocks['SplitFour|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->out1");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutPort',
		outputName:'out1',
		name:'SplitFour',
	};

	//out2- SplitFour
	Blockly.Blocks['SplitFour|' + count + '\\1'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->out2");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutPort',
		outputName:'out2',
		name:'SplitFour',
	};

	//out3- SplitFour
	Blockly.Blocks['SplitFour|' + count + '\\2'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->out3");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutPort',
		outputName:'out3',
		name:'SplitFour',
	};

	//out4- SplitFour
	Blockly.Blocks['SplitFour|' + count + '\\3'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->out4");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutPort',
		outputName:'out4',
		name:'SplitFour',
	};
}

//UIButton
function makeUIButton(count, name){
	var ans = name;
	if (name === undefined){
		ans="UIButton"+(count);
	}
	Blockly.Blocks['UIButton|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("UIButton ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[["text", "Button"], ],
		category:'code',
		inputs:[],
		outputs:['outInt', ],
	};

	//outInt- UIButton
	Blockly.Blocks['UIButton|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->outInt");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'outInt',
		name:'UIButton',
	};
}

//PutString
function makePutString(count, name){
	var ans = name;
	if (name === undefined){
		ans="PutString"+(count);
	}
	Blockly.Blocks['PutString|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("PutString ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code',
		inputs:[],
	};
}

//DigitalOutputDriver
function makeDigitalOutputDriver(count, name){
	var ans = name;
	if (name === undefined){
		ans="DigitalOutputDriver"+(count);
	}
	Blockly.Blocks['DigitalOutputDriver|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("DigitalOutputDriver ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("Din").setCheck("DigitalInputPort").appendField("Din");
			this.appendValueInput("inInt").setCheck("InIntPort").appendField("inInt");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code, electrical',
		inputs:['Din', 'inInt', ],
		outputs:['eOut', ],
	};

	//eOut- DigitalOutputDriver
	Blockly.Blocks['DigitalOutputDriver|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->eOut");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'ElectricalPort',
		outputName:'eOut',
		name:'DigitalOutputDriver',
	};
}

//NodeMCU
function makeNodeMCU(count, name){
	var ans = name;
	if (name === undefined){
		ans="NodeMCU"+(count);
	}
	Blockly.Blocks['NodeMCU|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("NodeMCU ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("a1").setCheck("AnalogInputPort").appendField("a1");
			this.appendValueInput("di8").setCheck("DigitalInputPort").appendField("di8");
			this.appendValueInput("di4").setCheck("DigitalInputPort").appendField("di4");
			this.appendValueInput("di5").setCheck("DigitalInputPort").appendField("di5");
			this.appendValueInput("di6").setCheck("DigitalInputPort").appendField("di6");
			this.appendValueInput("di7").setCheck("DigitalInputPort").appendField("di7");
			this.appendValueInput("di0").setCheck("DigitalInputPort").appendField("di0");
			this.appendValueInput("di1").setCheck("DigitalInputPort").appendField("di1");
			this.appendValueInput("di2").setCheck("DigitalInputPort").appendField("di2");
			this.appendValueInput("di3").setCheck("DigitalInputPort").appendField("di3");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'electrical',
		inputs:['a1', 'di8', 'di4', 'di5', 'di6', 'di7', 'di0', 'di1', 'di2', 'di3', ],
		outputs:['do8', 'do2', 'do3', 'do0', 'do1', 'do6', 'do7', 'do4', 'do5', ],
	};

	//do8- NodeMCU
	Blockly.Blocks['NodeMCU|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do8");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do8',
		name:'NodeMCU',
	};

	//do2- NodeMCU
	Blockly.Blocks['NodeMCU|' + count + '\\1'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do2");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do2',
		name:'NodeMCU',
	};

	//do3- NodeMCU
	Blockly.Blocks['NodeMCU|' + count + '\\2'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do3");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do3',
		name:'NodeMCU',
	};

	//do0- NodeMCU
	Blockly.Blocks['NodeMCU|' + count + '\\3'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do0");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do0',
		name:'NodeMCU',
	};

	//do1- NodeMCU
	Blockly.Blocks['NodeMCU|' + count + '\\4'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do1");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do1',
		name:'NodeMCU',
	};

	//do6- NodeMCU
	Blockly.Blocks['NodeMCU|' + count + '\\5'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do6");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do6',
		name:'NodeMCU',
	};

	//do7- NodeMCU
	Blockly.Blocks['NodeMCU|' + count + '\\6'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do7");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do7',
		name:'NodeMCU',
	};

	//do4- NodeMCU
	Blockly.Blocks['NodeMCU|' + count + '\\7'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do4");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do4',
		name:'NodeMCU',
	};

	//do5- NodeMCU
	Blockly.Blocks['NodeMCU|' + count + '\\8'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do5");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do5',
		name:'NodeMCU',
	};
}

//Motor
function makeMotor(count, name){
	var ans = name;
	if (name === undefined){
		ans="Motor"+(count);
	}
	Blockly.Blocks['Motor|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("Motor ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("eIn").setCheck("ElectricalPort").appendField("eIn");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'electrical',
		inputs:['eIn', ],
	};
}

//Microphone
function makeMicrophone(count, name){
	var ans = name;
	if (name === undefined){
		ans="Microphone"+(count);
	}
	Blockly.Blocks['Microphone|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("Microphone ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'electrical',
		inputs:[],
		outputs:['vOut', ],
	};

	//vOut- Microphone
	Blockly.Blocks['Microphone|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->vOut");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'ElectricalPort',
		outputName:'vOut',
		name:'Microphone',
	};
}

//StringSource
function makeStringSource(count, name){
	var ans = name;
	if (name === undefined){
		ans="StringSource"+(count);
	}
	Blockly.Blocks['StringSource|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("StringSource ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code',
		inputs:[],
		outputs:['outStr', ],
	};

	//outStr- StringSource
	Blockly.Blocks['StringSource|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->outStr");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutStringPort',
		outputName:'outStr',
		name:'StringSource',
	};
}

//Add
function makeAdd(count, name){
	var ans = name;
	if (name === undefined){
		ans="Add"+(count);
	}
	Blockly.Blocks['Add|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("Add ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("inInt2").setCheck("InIntPort").appendField("inInt2");
			this.appendValueInput("inInt1").setCheck("InIntPort").appendField("inInt1");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code',
		inputs:['inInt2', 'inInt1', ],
		outputs:['outInt', ],
	};

	//outInt- Add
	Blockly.Blocks['Add|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->outInt");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'outInt',
		name:'Add',
	};
}

//user_blink
function makeuser_blink(count, name){
	var ans = name;
	if (name === undefined){
		ans="user_blink"+(count);
	}
	Blockly.Blocks['user_blink|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("user_blink ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code, electrical',
		inputs:[],
	};
}

//SplitTwo
function makeSplitTwo(count, name){
	var ans = name;
	if (name === undefined){
		ans="SplitTwo"+(count);
	}
	Blockly.Blocks['SplitTwo|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("SplitTwo ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("in").setCheck("InPort").appendField("in");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code',
		inputs:['in', ],
		outputs:['out1', 'out2', ],
	};

	//out1- SplitTwo
	Blockly.Blocks['SplitTwo|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->out1");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutPort',
		outputName:'out1',
		name:'SplitTwo',
	};

	//out2- SplitTwo
	Blockly.Blocks['SplitTwo|' + count + '\\1'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->out2");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutPort',
		outputName:'out2',
		name:'SplitTwo',
	};
}

//ArduinoMKR1000
function makeArduinoMKR1000(count, name){
	var ans = name;
	if (name === undefined){
		ans="ArduinoMKR1000"+(count);
	}
	Blockly.Blocks['ArduinoMKR1000|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("ArduinoMKR1000 ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("di18").setCheck("DigitalInputPort").appendField("di18");
			this.appendValueInput("di16").setCheck("DigitalInputPort").appendField("di16");
			this.appendValueInput("di17").setCheck("DigitalInputPort").appendField("di17");
			this.appendValueInput("di14").setCheck("DigitalInputPort").appendField("di14");
			this.appendValueInput("di15").setCheck("DigitalInputPort").appendField("di15");
			this.appendValueInput("di12").setCheck("DigitalInputPort").appendField("di12");
			this.appendValueInput("di13").setCheck("DigitalInputPort").appendField("di13");
			this.appendValueInput("di10").setCheck("DigitalInputPort").appendField("di10");
			this.appendValueInput("di11").setCheck("DigitalInputPort").appendField("di11");
			this.appendValueInput("di8").setCheck("DigitalInputPort").appendField("di8");
			this.appendValueInput("di9").setCheck("DigitalInputPort").appendField("di9");
			this.appendValueInput("di4").setCheck("DigitalInputPort").appendField("di4");
			this.appendValueInput("di5").setCheck("DigitalInputPort").appendField("di5");
			this.appendValueInput("di6").setCheck("DigitalInputPort").appendField("di6");
			this.appendValueInput("di7").setCheck("DigitalInputPort").appendField("di7");
			this.appendValueInput("di1").setCheck("DigitalInputPort").appendField("di1");
			this.appendValueInput("di2").setCheck("DigitalInputPort").appendField("di2");
			this.appendValueInput("di3").setCheck("DigitalInputPort").appendField("di3");
			this.appendValueInput("a1").setCheck("AnalogInputPort").appendField("a1");
			this.appendValueInput("a3").setCheck("AnalogInputPort").appendField("a3");
			this.appendValueInput("a2").setCheck("AnalogInputPort").appendField("a2");
			this.appendValueInput("a5").setCheck("AnalogInputPort").appendField("a5");
			this.appendValueInput("a4").setCheck("AnalogInputPort").appendField("a4");
			this.appendValueInput("a6").setCheck("AnalogInputPort").appendField("a6");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'electrical',
		inputs:['di18', 'di16', 'di17', 'di14', 'di15', 'di12', 'di13', 'di10', 'di11', 'di8', 'di9', 'di4', 'di5', 'di6', 'di7', 'di1', 'di2', 'di3', 'a1', 'a3', 'a2', 'a5', 'a4', 'a6', ],
		outputs:['do18', 'do14', 'do15', 'do16', 'do17', 'do10', 'do11', 'do12', 'do13', 'do8', 'do9', 'pwm4', 'do3', 'do1', 'do6', 'pwm1', 'do4', 'do5', 'do2', 'do7', 'pwm2', 'pwm3', ],
	};

	//do18- ArduinoMKR1000
	Blockly.Blocks['ArduinoMKR1000|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do18");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do18',
		name:'ArduinoMKR1000',
	};

	//do14- ArduinoMKR1000
	Blockly.Blocks['ArduinoMKR1000|' + count + '\\1'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do14");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do14',
		name:'ArduinoMKR1000',
	};

	//do15- ArduinoMKR1000
	Blockly.Blocks['ArduinoMKR1000|' + count + '\\2'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do15");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do15',
		name:'ArduinoMKR1000',
	};

	//do16- ArduinoMKR1000
	Blockly.Blocks['ArduinoMKR1000|' + count + '\\3'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do16");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do16',
		name:'ArduinoMKR1000',
	};

	//do17- ArduinoMKR1000
	Blockly.Blocks['ArduinoMKR1000|' + count + '\\4'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do17");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do17',
		name:'ArduinoMKR1000',
	};

	//do10- ArduinoMKR1000
	Blockly.Blocks['ArduinoMKR1000|' + count + '\\5'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do10");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do10',
		name:'ArduinoMKR1000',
	};

	//do11- ArduinoMKR1000
	Blockly.Blocks['ArduinoMKR1000|' + count + '\\6'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do11");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do11',
		name:'ArduinoMKR1000',
	};

	//do12- ArduinoMKR1000
	Blockly.Blocks['ArduinoMKR1000|' + count + '\\7'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do12");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do12',
		name:'ArduinoMKR1000',
	};

	//do13- ArduinoMKR1000
	Blockly.Blocks['ArduinoMKR1000|' + count + '\\8'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do13");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do13',
		name:'ArduinoMKR1000',
	};

	//do8- ArduinoMKR1000
	Blockly.Blocks['ArduinoMKR1000|' + count + '\\9'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do8");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do8',
		name:'ArduinoMKR1000',
	};

	//do9- ArduinoMKR1000
	Blockly.Blocks['ArduinoMKR1000|' + count + '\\10'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do9");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do9',
		name:'ArduinoMKR1000',
	};

	//pwm4- ArduinoMKR1000
	Blockly.Blocks['ArduinoMKR1000|' + count + '\\11'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->pwm4");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'PWMOutputPort',
		outputName:'pwm4',
		name:'ArduinoMKR1000',
	};

	//do3- ArduinoMKR1000
	Blockly.Blocks['ArduinoMKR1000|' + count + '\\12'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do3");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do3',
		name:'ArduinoMKR1000',
	};

	//do1- ArduinoMKR1000
	Blockly.Blocks['ArduinoMKR1000|' + count + '\\13'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do1");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do1',
		name:'ArduinoMKR1000',
	};

	//do6- ArduinoMKR1000
	Blockly.Blocks['ArduinoMKR1000|' + count + '\\14'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do6");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do6',
		name:'ArduinoMKR1000',
	};

	//pwm1- ArduinoMKR1000
	Blockly.Blocks['ArduinoMKR1000|' + count + '\\15'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->pwm1");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'PWMOutputPort',
		outputName:'pwm1',
		name:'ArduinoMKR1000',
	};

	//do4- ArduinoMKR1000
	Blockly.Blocks['ArduinoMKR1000|' + count + '\\16'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do4");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do4',
		name:'ArduinoMKR1000',
	};

	//do5- ArduinoMKR1000
	Blockly.Blocks['ArduinoMKR1000|' + count + '\\17'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do5");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do5',
		name:'ArduinoMKR1000',
	};

	//do2- ArduinoMKR1000
	Blockly.Blocks['ArduinoMKR1000|' + count + '\\18'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do2");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do2',
		name:'ArduinoMKR1000',
	};

	//do7- ArduinoMKR1000
	Blockly.Blocks['ArduinoMKR1000|' + count + '\\19'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do7");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do7',
		name:'ArduinoMKR1000',
	};

	//pwm2- ArduinoMKR1000
	Blockly.Blocks['ArduinoMKR1000|' + count + '\\20'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->pwm2");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'PWMOutputPort',
		outputName:'pwm2',
		name:'ArduinoMKR1000',
	};

	//pwm3- ArduinoMKR1000
	Blockly.Blocks['ArduinoMKR1000|' + count + '\\21'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->pwm3");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'PWMOutputPort',
		outputName:'pwm3',
		name:'ArduinoMKR1000',
	};
}

//LED
function makeLED(count, name){
	var ans = name;
	if (name === undefined){
		ans="LED"+(count);
	}
	Blockly.Blocks['LED|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("LED ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("eIn").setCheck("ElectricalPort").appendField("eIn");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'electrical',
		inputs:['eIn', ],
	};
}

//user_name
function makeuser_name(count, name){
	var ans = name;
	if (name === undefined){
		ans="user_name"+(count);
	}
	Blockly.Blocks['user_name|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("user_name ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code',
		inputs:[],
	};
}

//LEDDriver
function makeLEDDriver(count, name){
	var ans = name;
	if (name === undefined){
		ans="LEDDriver"+(count);
	}
	Blockly.Blocks['LEDDriver|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("LEDDriver ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("Din").setCheck("DigitalInputPort").appendField("Din");
			this.appendValueInput("inInt").setCheck("InIntPort").appendField("inInt");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code, electrical',
		inputs:['Din', 'inInt', ],
		outputs:['eOut', ],
	};

	//eOut- LEDDriver
	Blockly.Blocks['LEDDriver|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->eOut");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'ElectricalPort',
		outputName:'eOut',
		name:'LEDDriver',
	};
}

//RGBLEDDriver
function makeRGBLEDDriver(count, name){
	var ans = name;
	if (name === undefined){
		ans="RGBLEDDriver"+(count);
	}
	Blockly.Blocks['RGBLEDDriver|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("RGBLEDDriver ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("gPWM").setCheck("PWMInputPort").appendField("gPWM");
			this.appendValueInput("inGreen").setCheck("InIntPort").appendField("inGreen");
			this.appendValueInput("rPWM").setCheck("PWMInputPort").appendField("rPWM");
			this.appendValueInput("inRed").setCheck("InIntPort").appendField("inRed");
			this.appendValueInput("inBlue").setCheck("InIntPort").appendField("inBlue");
			this.appendValueInput("bPWM").setCheck("PWMInputPort").appendField("bPWM");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code, electrical',
		inputs:['gPWM', 'inGreen', 'rPWM', 'inRed', 'inBlue', 'bPWM', ],
		outputs:['gOut', 'rOut', 'bOut', ],
	};

	//gOut- RGBLEDDriver
	Blockly.Blocks['RGBLEDDriver|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->gOut");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'ElectricalPort',
		outputName:'gOut',
		name:'RGBLEDDriver',
	};

	//rOut- RGBLEDDriver
	Blockly.Blocks['RGBLEDDriver|' + count + '\\1'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->rOut");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'ElectricalPort',
		outputName:'rOut',
		name:'RGBLEDDriver',
	};

	//bOut- RGBLEDDriver
	Blockly.Blocks['RGBLEDDriver|' + count + '\\2'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->bOut");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'ElectricalPort',
		outputName:'bOut',
		name:'RGBLEDDriver',
	};
}

//UISlider
function makeUISlider(count, name){
	var ans = name;
	if (name === undefined){
		ans="UISlider"+(count);
	}
	Blockly.Blocks['UISlider|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("UISlider ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[["max", 1023], ["min", "0"], ],
		category:'code',
		inputs:[],
		outputs:['outInt', ],
	};

	//outInt- UISlider
	Blockly.Blocks['UISlider|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->outInt");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'outInt',
		name:'UISlider',
	};
}

//ReverseHello
function makeReverseHello(count, name){
	var ans = name;
	if (name === undefined){
		ans="ReverseHello"+(count);
	}
	Blockly.Blocks['ReverseHello|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("ReverseHello ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code',
		inputs:[],
	};
}

//GetString
function makeGetString(count, name){
	var ans = name;
	if (name === undefined){
		ans="GetString"+(count);
	}
	Blockly.Blocks['GetString|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("GetString ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code',
		inputs:[],
		outputs:['outStr', ],
	};

	//outStr- GetString
	Blockly.Blocks['GetString|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->outStr");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutStringPort',
		outputName:'outStr',
		name:'GetString',
	};
}

//DigitalInputDriver
function makeDigitalInputDriver(count, name){
	var ans = name;
	if (name === undefined){
		ans="DigitalInputDriver"+(count);
	}
	Blockly.Blocks['DigitalInputDriver|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("DigitalInputDriver ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("eIn").setCheck("ElectricalPort").appendField("eIn");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code, electrical',
		inputs:['eIn', ],
		outputs:['outInt', 'Dout', ],
	};

	//outInt- DigitalInputDriver
	Blockly.Blocks['DigitalInputDriver|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->outInt");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'outInt',
		name:'DigitalInputDriver',
	};

	//Dout- DigitalInputDriver
	Blockly.Blocks['DigitalInputDriver|' + count + '\\1'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->Dout");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'Dout',
		name:'DigitalInputDriver',
	};
}

//ServoDriver
function makeServoDriver(count, name){
	var ans = name;
	if (name === undefined){
		ans="ServoDriver"+(count);
	}
	Blockly.Blocks['ServoDriver|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("ServoDriver ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("PWMin").setCheck("PWMInputPort").appendField("PWMin");
			this.appendValueInput("inInt").setCheck("InIntPort").appendField("inInt");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code, electrical',
		inputs:['PWMin', 'inInt', ],
		outputs:['eOut', ],
	};

	//eOut- ServoDriver
	Blockly.Blocks['ServoDriver|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->eOut");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'ElectricalPort',
		outputName:'eOut',
		name:'ServoDriver',
	};
}

//PutReverseSort
function makePutReverseSort(count, name){
	var ans = name;
	if (name === undefined){
		ans="PutReverseSort"+(count);
	}
	Blockly.Blocks['PutReverseSort|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("PutReverseSort ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code',
		inputs:[],
	};
}

//live_demo_test1
function makelive_demo_test1(count, name){
	var ans = name;
	if (name === undefined){
		ans="live_demo_test1"+(count);
	}
	Blockly.Blocks['live_demo_test1|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("live_demo_test1 ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code, electrical',
		inputs:[],
	};
}

//IREmitter
function makeIREmitter(count, name){
	var ans = name;
	if (name === undefined){
		ans="IREmitter"+(count);
	}
	Blockly.Blocks['IREmitter|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("IREmitter ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("eIn").setCheck("ElectricalPort").appendField("eIn");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'electrical',
		inputs:['eIn', ],
	};
}

//UltrasonicSensorDriver
function makeUltrasonicSensorDriver(count, name){
	var ans = name;
	if (name === undefined){
		ans="UltrasonicSensorDriver"+(count);
	}
	Blockly.Blocks['UltrasonicSensorDriver|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("UltrasonicSensorDriver ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("triggerIn").setCheck("DigitalInputPort").appendField("triggerIn");
			this.appendValueInput("echoIn").setCheck("DigitalInputPort").appendField("echoIn");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code, electrical',
		inputs:['triggerIn', 'echoIn', ],
		outputs:['outInt', 'tOut', 'eOut', ],
	};

	//outInt- UltrasonicSensorDriver
	Blockly.Blocks['UltrasonicSensorDriver|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->outInt");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'outInt',
		name:'UltrasonicSensorDriver',
	};

	//tOut- UltrasonicSensorDriver
	Blockly.Blocks['UltrasonicSensorDriver|' + count + '\\1'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->tOut");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'ElectricalPort',
		outputName:'tOut',
		name:'UltrasonicSensorDriver',
	};

	//eOut- UltrasonicSensorDriver
	Blockly.Blocks['UltrasonicSensorDriver|' + count + '\\2'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->eOut");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'ElectricalPort',
		outputName:'eOut',
		name:'UltrasonicSensorDriver',
	};
}

//PotDriver
function makePotDriver(count, name){
	var ans = name;
	if (name === undefined){
		ans="PotDriver"+(count);
	}
	Blockly.Blocks['PotDriver|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("PotDriver ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("vIn").setCheck("ElectricalPort").appendField("vIn");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code, electrical',
		inputs:['vIn', ],
		outputs:['outInt', 'aOut', ],
	};

	//outInt- PotDriver
	Blockly.Blocks['PotDriver|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->outInt");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'outInt',
		name:'PotDriver',
	};

	//aOut- PotDriver
	Blockly.Blocks['PotDriver|' + count + '\\1'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->aOut");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'AnalogOutputPort',
		outputName:'aOut',
		name:'PotDriver',
	};
}

//CapacitiveTouchSensorDriver
function makeCapacitiveTouchSensorDriver(count, name){
	var ans = name;
	if (name === undefined){
		ans="CapacitiveTouchSensorDriver"+(count);
	}
	Blockly.Blocks['CapacitiveTouchSensorDriver|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("CapacitiveTouchSensorDriver ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("eIn").setCheck("ElectricalPort").appendField("eIn");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code, electrical',
		inputs:['eIn', ],
		outputs:['outInt', 'Dout', ],
	};

	//outInt- CapacitiveTouchSensorDriver
	Blockly.Blocks['CapacitiveTouchSensorDriver|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->outInt");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'outInt',
		name:'CapacitiveTouchSensorDriver',
	};

	//Dout- CapacitiveTouchSensorDriver
	Blockly.Blocks['CapacitiveTouchSensorDriver|' + count + '\\1'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->Dout");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'Dout',
		name:'CapacitiveTouchSensorDriver',
	};
}

//GetColor
function makeGetColor(count, name){
	var ans = name;
	if (name === undefined){
		ans="GetColor"+(count);
	}
	Blockly.Blocks['GetColor|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("GetColor ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("inInt").setCheck("InPort").appendField("inInt");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code',
		inputs:['inInt', ],
		outputs:['blue', 'green', 'red', ],
	};

	//blue- GetColor
	Blockly.Blocks['GetColor|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->blue");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'blue',
		name:'GetColor',
	};

	//green- GetColor
	Blockly.Blocks['GetColor|' + count + '\\1'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->green");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'green',
		name:'GetColor',
	};

	//red- GetColor
	Blockly.Blocks['GetColor|' + count + '\\2'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->red");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'red',
		name:'GetColor',
	};
}

//Pot
function makePot(count, name){
	var ans = name;
	if (name === undefined){
		ans="Pot"+(count);
	}
	Blockly.Blocks['Pot|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("Pot ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'electrical',
		inputs:[],
		outputs:['vOut', ],
	};

	//vOut- Pot
	Blockly.Blocks['Pot|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->vOut");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'ElectricalPort',
		outputName:'vOut',
		name:'Pot',
	};
}

//TeensyLC
function makeTeensyLC(count, name){
	var ans = name;
	if (name === undefined){
		ans="TeensyLC"+(count);
	}
	Blockly.Blocks['TeensyLC|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("TeensyLC ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("di18").setCheck("DigitalInputPort").appendField("di18");
			this.appendValueInput("di19").setCheck("DigitalInputPort").appendField("di19");
			this.appendValueInput("di16").setCheck("DigitalInputPort").appendField("di16");
			this.appendValueInput("di17").setCheck("DigitalInputPort").appendField("di17");
			this.appendValueInput("di14").setCheck("DigitalInputPort").appendField("di14");
			this.appendValueInput("di15").setCheck("DigitalInputPort").appendField("di15");
			this.appendValueInput("di12").setCheck("DigitalInputPort").appendField("di12");
			this.appendValueInput("di13").setCheck("DigitalInputPort").appendField("di13");
			this.appendValueInput("di10").setCheck("DigitalInputPort").appendField("di10");
			this.appendValueInput("di11").setCheck("DigitalInputPort").appendField("di11");
			this.appendValueInput("di8").setCheck("DigitalInputPort").appendField("di8");
			this.appendValueInput("di9").setCheck("DigitalInputPort").appendField("di9");
			this.appendValueInput("di4").setCheck("DigitalInputPort").appendField("di4");
			this.appendValueInput("di5").setCheck("DigitalInputPort").appendField("di5");
			this.appendValueInput("di6").setCheck("DigitalInputPort").appendField("di6");
			this.appendValueInput("di7").setCheck("DigitalInputPort").appendField("di7");
			this.appendValueInput("di1").setCheck("DigitalInputPort").appendField("di1");
			this.appendValueInput("di2").setCheck("DigitalInputPort").appendField("di2");
			this.appendValueInput("di3").setCheck("DigitalInputPort").appendField("di3");
			this.appendValueInput("di23").setCheck("DigitalInputPort").appendField("di23");
			this.appendValueInput("di22").setCheck("DigitalInputPort").appendField("di22");
			this.appendValueInput("di21").setCheck("DigitalInputPort").appendField("di21");
			this.appendValueInput("di20").setCheck("DigitalInputPort").appendField("di20");
			this.appendValueInput("a10").setCheck("AnalogInputPort").appendField("a10");
			this.appendValueInput("a1").setCheck("AnalogInputPort").appendField("a1");
			this.appendValueInput("a3").setCheck("AnalogInputPort").appendField("a3");
			this.appendValueInput("a2").setCheck("AnalogInputPort").appendField("a2");
			this.appendValueInput("a5").setCheck("AnalogInputPort").appendField("a5");
			this.appendValueInput("a4").setCheck("AnalogInputPort").appendField("a4");
			this.appendValueInput("a7").setCheck("AnalogInputPort").appendField("a7");
			this.appendValueInput("a6").setCheck("AnalogInputPort").appendField("a6");
			this.appendValueInput("a9").setCheck("AnalogInputPort").appendField("a9");
			this.appendValueInput("a8").setCheck("AnalogInputPort").appendField("a8");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'electrical',
		inputs:['di18', 'di19', 'di16', 'di17', 'di14', 'di15', 'di12', 'di13', 'di10', 'di11', 'di8', 'di9', 'di4', 'di5', 'di6', 'di7', 'di1', 'di2', 'di3', 'di23', 'di22', 'di21', 'di20', 'a10', 'a1', 'a3', 'a2', 'a5', 'a4', 'a7', 'a6', 'a9', 'a8', ],
		outputs:['do18', 'do19', 'do14', 'do15', 'do16', 'do17', 'do10', 'do11', 'do12', 'do13', 'do8', 'do9', 'pwm8', 'pwm9', 'do2', 'do3', 'pwm6', 'pwm7', 'do6', 'do7', 'do4', 'do5', 'do21', 'do20', 'do23', 'do22', 'pwm4', 'pwm5', 'pwm10', 'do1', 'pwm1', 'pwm2', 'pwm3', ],
	};

	//do18- TeensyLC
	Blockly.Blocks['TeensyLC|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do18");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do18',
		name:'TeensyLC',
	};

	//do19- TeensyLC
	Blockly.Blocks['TeensyLC|' + count + '\\1'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do19");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do19',
		name:'TeensyLC',
	};

	//do14- TeensyLC
	Blockly.Blocks['TeensyLC|' + count + '\\2'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do14");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do14',
		name:'TeensyLC',
	};

	//do15- TeensyLC
	Blockly.Blocks['TeensyLC|' + count + '\\3'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do15");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do15',
		name:'TeensyLC',
	};

	//do16- TeensyLC
	Blockly.Blocks['TeensyLC|' + count + '\\4'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do16");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do16',
		name:'TeensyLC',
	};

	//do17- TeensyLC
	Blockly.Blocks['TeensyLC|' + count + '\\5'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do17");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do17',
		name:'TeensyLC',
	};

	//do10- TeensyLC
	Blockly.Blocks['TeensyLC|' + count + '\\6'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do10");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do10',
		name:'TeensyLC',
	};

	//do11- TeensyLC
	Blockly.Blocks['TeensyLC|' + count + '\\7'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do11");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do11',
		name:'TeensyLC',
	};

	//do12- TeensyLC
	Blockly.Blocks['TeensyLC|' + count + '\\8'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do12");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do12',
		name:'TeensyLC',
	};

	//do13- TeensyLC
	Blockly.Blocks['TeensyLC|' + count + '\\9'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do13");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do13',
		name:'TeensyLC',
	};

	//do8- TeensyLC
	Blockly.Blocks['TeensyLC|' + count + '\\10'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do8");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do8',
		name:'TeensyLC',
	};

	//do9- TeensyLC
	Blockly.Blocks['TeensyLC|' + count + '\\11'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do9");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do9',
		name:'TeensyLC',
	};

	//pwm8- TeensyLC
	Blockly.Blocks['TeensyLC|' + count + '\\12'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->pwm8");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'PWMOutputPort',
		outputName:'pwm8',
		name:'TeensyLC',
	};

	//pwm9- TeensyLC
	Blockly.Blocks['TeensyLC|' + count + '\\13'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->pwm9");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'PWMOutputPort',
		outputName:'pwm9',
		name:'TeensyLC',
	};

	//do2- TeensyLC
	Blockly.Blocks['TeensyLC|' + count + '\\14'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do2");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do2',
		name:'TeensyLC',
	};

	//do3- TeensyLC
	Blockly.Blocks['TeensyLC|' + count + '\\15'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do3");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do3',
		name:'TeensyLC',
	};

	//pwm6- TeensyLC
	Blockly.Blocks['TeensyLC|' + count + '\\16'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->pwm6");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'PWMOutputPort',
		outputName:'pwm6',
		name:'TeensyLC',
	};

	//pwm7- TeensyLC
	Blockly.Blocks['TeensyLC|' + count + '\\17'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->pwm7");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'PWMOutputPort',
		outputName:'pwm7',
		name:'TeensyLC',
	};

	//do6- TeensyLC
	Blockly.Blocks['TeensyLC|' + count + '\\18'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do6");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do6',
		name:'TeensyLC',
	};

	//do7- TeensyLC
	Blockly.Blocks['TeensyLC|' + count + '\\19'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do7");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do7',
		name:'TeensyLC',
	};

	//do4- TeensyLC
	Blockly.Blocks['TeensyLC|' + count + '\\20'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do4");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do4',
		name:'TeensyLC',
	};

	//do5- TeensyLC
	Blockly.Blocks['TeensyLC|' + count + '\\21'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do5");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do5',
		name:'TeensyLC',
	};

	//do21- TeensyLC
	Blockly.Blocks['TeensyLC|' + count + '\\22'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do21");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do21',
		name:'TeensyLC',
	};

	//do20- TeensyLC
	Blockly.Blocks['TeensyLC|' + count + '\\23'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do20");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do20',
		name:'TeensyLC',
	};

	//do23- TeensyLC
	Blockly.Blocks['TeensyLC|' + count + '\\24'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do23");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do23',
		name:'TeensyLC',
	};

	//do22- TeensyLC
	Blockly.Blocks['TeensyLC|' + count + '\\25'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do22");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do22',
		name:'TeensyLC',
	};

	//pwm4- TeensyLC
	Blockly.Blocks['TeensyLC|' + count + '\\26'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->pwm4");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'PWMOutputPort',
		outputName:'pwm4',
		name:'TeensyLC',
	};

	//pwm5- TeensyLC
	Blockly.Blocks['TeensyLC|' + count + '\\27'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->pwm5");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'PWMOutputPort',
		outputName:'pwm5',
		name:'TeensyLC',
	};

	//pwm10- TeensyLC
	Blockly.Blocks['TeensyLC|' + count + '\\28'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->pwm10");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'PWMOutputPort',
		outputName:'pwm10',
		name:'TeensyLC',
	};

	//do1- TeensyLC
	Blockly.Blocks['TeensyLC|' + count + '\\29'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->do1");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do1',
		name:'TeensyLC',
	};

	//pwm1- TeensyLC
	Blockly.Blocks['TeensyLC|' + count + '\\30'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->pwm1");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'PWMOutputPort',
		outputName:'pwm1',
		name:'TeensyLC',
	};

	//pwm2- TeensyLC
	Blockly.Blocks['TeensyLC|' + count + '\\31'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->pwm2");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'PWMOutputPort',
		outputName:'pwm2',
		name:'TeensyLC',
	};

	//pwm3- TeensyLC
	Blockly.Blocks['TeensyLC|' + count + '\\32'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->pwm3");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'PWMOutputPort',
		outputName:'pwm3',
		name:'TeensyLC',
	};
}

//GetAndPutString
function makeGetAndPutString(count, name){
	var ans = name;
	if (name === undefined){
		ans="GetAndPutString"+(count);
	}
	Blockly.Blocks['GetAndPutString|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("GetAndPutString ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code',
		inputs:[],
	};
}

//CapacitiveTouchSensor
function makeCapacitiveTouchSensor(count, name){
	var ans = name;
	if (name === undefined){
		ans="CapacitiveTouchSensor"+(count);
	}
	Blockly.Blocks['CapacitiveTouchSensor|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("CapacitiveTouchSensor ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'electrical',
		inputs:[],
	};
}

//revLen
function makerevLen(count, name){
	var ans = name;
	if (name === undefined){
		ans="revLen"+(count);
	}
	Blockly.Blocks['revLen|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("revLen ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("in").setCheck("InStringPort").appendField("in");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code',
		inputs:['in', ],
		outputs:['out', ],
	};

	//out- revLen
	Blockly.Blocks['revLen|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput("NAME").appendField(ans + "->out");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutStringPort',
		outputName:'out',
		name:'revLen',
	};
}

//user_DrivenLED
function makeuser_DrivenLED(count, name){
	var ans = name;
	if (name === undefined){
		ans="user_DrivenLED"+(count);
	}
	Blockly.Blocks['user_DrivenLED|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("user_DrivenLED ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("Din").setCheck("DigitalInputPort").appendField("Din");
			this.appendValueInput("inInt").setCheck("InIntPort").appendField("inInt");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name: ans,
		params:[],
		category:'code, electrical',
		inputs:['Din', 'inInt', ],
	};
}

makeDrivenMicrophone(0);
makeDrivenPot(0);
makeMotorDriver(0);
makeSortString(0);
makeSplitThree(0);
makeuser_Toggle(0);
makeArduino101(0);
makeArduinoUno(0);
makeLinearInterpolate(0);
makeReverseString(0);
makeMicrophoneDriver(0);
makeDrivenUltrasonicSensor(0);
makeReverseSort(0);
makeIREmitterDriver(0);
makeuser_Counter(0);
makeSplitFour(0);
makeUIButton(0);
makeDigitalOutputDriver(0);
makeNodeMCU(0);
makeMicrophone(0);
makeStringSource(0);
makeAdd(0);
makeSplitTwo(0);
makeArduinoMKR1000(0);
makeLEDDriver(0);
makeRGBLEDDriver(0);
makeUISlider(0);
makeGetString(0);
makeDigitalInputDriver(0);
makeServoDriver(0);
makeUltrasonicSensorDriver(0);
makePotDriver(0);
makeCapacitiveTouchSensorDriver(0);
makeGetColor(0);
makePot(0);
makeTeensyLC(0);
makerevLen(0);
makeDrivenLED(0);
makeServo(0);
makeDrivenServo(0);
makeDrivenRGBLED(0);
makeLiveDemo4(0);
makeLiveDemo0(0);
makeLiveDemo1(0);
makeLiveDemo2(0);
makeLiveDemo3(0);
makeRGBLED(0);
makePrintString(0);
makeUltrasonicSensor(0);
makeDrivenMotor(0);
makeSortHello(0);
makePutString(0);
makeMotor(0);
makeuser_blink(0);
makeLED(0);
makeuser_name(0);
makeReverseHello(0);
makePutReverseSort(0);
makelive_demo_test1(0);
makeIREmitter(0);
makeGetAndPutString(0);
makeCapacitiveTouchSensor(0);
makeuser_DrivenLED(0);
