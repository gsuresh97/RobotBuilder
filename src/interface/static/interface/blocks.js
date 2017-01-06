var BlockList = new Map();

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
		name:'DrivenPot',
		params:[],
		category:'code, electrical',
		inputs:[],
		outputs:['outInt', 'aOut', ],
	};

	//outInt- DrivenPot
	Blockly.Blocks['DrivenPot|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->outInt");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'outInt',
		name:'Block Name 0',
	};

	//aOut- DrivenPot
	Blockly.Blocks['DrivenPot|' + count + '\\1'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->aOut");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'AnalogOutputPort',
		outputName:'aOut',
		name:'Block Name 0',
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
		name:'SortString',
		params:[],
		category:'code',
		inputs:['inStr', ],
		outputs:['outStr', ],
	};

	//outStr- SortString
	Blockly.Blocks['SortString|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->outStr");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutStringPort',
		outputName:'outStr',
		name:'Block Name 0',
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
		name:'SplitThree',
		params:[],
		category:'code',
		inputs:['in', ],
		outputs:['out1', 'out2', 'out3', ],
	};

	//out1- SplitThree
	Blockly.Blocks['SplitThree|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->out1");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutPort',
		outputName:'out1',
		name:'Block Name 0',
	};

	//out2- SplitThree
	Blockly.Blocks['SplitThree|' + count + '\\1'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->out2");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutPort',
		outputName:'out2',
		name:'Block Name 0',
	};

	//out3- SplitThree
	Blockly.Blocks['SplitThree|' + count + '\\2'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->out3");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutPort',
		outputName:'out3',
		name:'Block Name 0',
	};
}

//Multiply
function makeMultiply(count, name){
	var ans = name;
	if (name === undefined){
		ans="Multiply"+(count);
	}
	Blockly.Blocks['Multiply|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("Multiply ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("num1").setCheck("InIntPort").appendField("num1");
			this.appendValueInput("num2").setCheck("InIntPort").appendField("num2");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name:'Multiply',
		params:[],
		category:'code',
		inputs:['num1', 'num2', ],
		outputs:['product', ],
	};

	//product- Multiply
	Blockly.Blocks['Multiply|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->product");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'product',
		name:'Block Name 0',
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
		name:'DrivenRGBLED',
		params:[],
		category:'code, electrical',
		inputs:['gPWM', 'inGreen', 'rPWM', 'inRed', 'inBlue', 'bPWM', ],
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
		name:'ArduinoUno',
		params:[],
		category:'electrical',
		inputs:['di18', 'di16', 'di17', 'di14', 'di15', 'di12', 'di13', 'di10', 'di11', 'di8', 'di9', 'di4', 'di5', 'di6', 'di7', 'di1', 'di2', 'di3', 'a1', 'a3', 'a2', 'a5', 'a4', 'a6', ],
		outputs:['do18', 'do14', 'do15', 'do16', 'do17', 'do10', 'do11', 'do12', 'do13', 'do8', 'do9', 'do2', 'do3', 'pwm6', 'do1', 'do6', 'pwm1', 'do4', 'do5', 'pwm4', 'pwm5', 'do7', 'pwm2', 'pwm3', ],
	};

	//do18- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->do18");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do18',
		name:'Block Name 0',
	};

	//do14- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\1'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->do14");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do14',
		name:'Block Name 0',
	};

	//do15- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\2'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->do15");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do15',
		name:'Block Name 0',
	};

	//do16- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\3'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->do16");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do16',
		name:'Block Name 0',
	};

	//do17- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\4'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->do17");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do17',
		name:'Block Name 0',
	};

	//do10- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\5'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->do10");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do10',
		name:'Block Name 0',
	};

	//do11- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\6'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->do11");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do11',
		name:'Block Name 0',
	};

	//do12- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\7'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->do12");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do12',
		name:'Block Name 0',
	};

	//do13- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\8'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->do13");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do13',
		name:'Block Name 0',
	};

	//do8- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\9'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->do8");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do8',
		name:'Block Name 0',
	};

	//do9- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\10'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->do9");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do9',
		name:'Block Name 0',
	};

	//do2- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\11'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->do2");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do2',
		name:'Block Name 0',
	};

	//do3- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\12'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->do3");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do3',
		name:'Block Name 0',
	};

	//pwm6- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\13'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->pwm6");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'PWMOutputPort',
		outputName:'pwm6',
		name:'Block Name 0',
	};

	//do1- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\14'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->do1");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do1',
		name:'Block Name 0',
	};

	//do6- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\15'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->do6");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do6',
		name:'Block Name 0',
	};

	//pwm1- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\16'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->pwm1");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'PWMOutputPort',
		outputName:'pwm1',
		name:'Block Name 0',
	};

	//do4- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\17'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->do4");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do4',
		name:'Block Name 0',
	};

	//do5- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\18'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->do5");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do5',
		name:'Block Name 0',
	};

	//pwm4- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\19'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->pwm4");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'PWMOutputPort',
		outputName:'pwm4',
		name:'Block Name 0',
	};

	//pwm5- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\20'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->pwm5");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'PWMOutputPort',
		outputName:'pwm5',
		name:'Block Name 0',
	};

	//do7- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\21'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->do7");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'DigitalOutputPort',
		outputName:'do7',
		name:'Block Name 0',
	};

	//pwm2- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\22'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->pwm2");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'PWMOutputPort',
		outputName:'pwm2',
		name:'Block Name 0',
	};

	//pwm3- ArduinoUno
	Blockly.Blocks['ArduinoUno|' + count + '\\23'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->pwm3");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'PWMOutputPort',
		outputName:'pwm3',
		name:'Block Name 0',
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
		name:'LiveDemo0',
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
		name:'LiveDemo1',
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
		name:'LiveDemo2',
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
		name:'RGBLED',
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
		name:'LinearInterpolate',
		params:[["inStart", "0"], ["inEnd", 1023], ["outStart", "0"], ["outEnd", 255], ],
		category:'code',
		inputs:['inInt', ],
		outputs:['outInt', ],
	};

	//outInt- LinearInterpolate
	Blockly.Blocks['LinearInterpolate|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->outInt");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'outInt',
		name:'Block Name 0',
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
		name:'ReverseString',
		params:[],
		category:'code',
		inputs:['inStr', ],
		outputs:['outStr', ],
	};

	//outStr- ReverseString
	Blockly.Blocks['ReverseString|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->outStr");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutStringPort',
		outputName:'outStr',
		name:'Block Name 0',
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
		name:'PrintString',
		params:[],
		category:'code',
		inputs:['inStr', ],
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
		name:'ReverseSort',
		params:[],
		category:'code',
		inputs:['inStr', ],
		outputs:['outStr', ],
	};

	//outStr- ReverseSort
	Blockly.Blocks['ReverseSort|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->outStr");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutStringPort',
		outputName:'outStr',
		name:'Block Name 0',
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
		name:'SortHello',
		params:[],
		category:'code',
		inputs:[],
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
		name:'SplitFour',
		params:[],
		category:'code',
		inputs:['in', ],
		outputs:['out1', 'out2', 'out3', 'out4', ],
	};

	//out1- SplitFour
	Blockly.Blocks['SplitFour|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->out1");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutPort',
		outputName:'out1',
		name:'Block Name 0',
	};

	//out2- SplitFour
	Blockly.Blocks['SplitFour|' + count + '\\1'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->out2");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutPort',
		outputName:'out2',
		name:'Block Name 0',
	};

	//out3- SplitFour
	Blockly.Blocks['SplitFour|' + count + '\\2'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->out3");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutPort',
		outputName:'out3',
		name:'Block Name 0',
	};

	//out4- SplitFour
	Blockly.Blocks['SplitFour|' + count + '\\3'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->out4");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutPort',
		outputName:'out4',
		name:'Block Name 0',
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
		name:'PutString',
		params:[],
		category:'code',
		inputs:[],
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
		name:'ReverseHello',
		params:[],
		category:'code',
		inputs:[],
	};
}

//times3
function maketimes3(count, name){
	var ans = name;
	if (name === undefined){
		ans="times3"+(count);
	}
	Blockly.Blocks['times3|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("times3 ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("inInt").setCheck("InIntPort").appendField("inInt");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name:'times3',
		params:[["d", 3], ],
		category:'code',
		inputs:['inInt', ],
		outputs:['outInt', ],
	};

	//outInt- times3
	Blockly.Blocks['times3|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->outInt");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'outInt',
		name:'Block Name 0',
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
		name:'StringSource',
		params:[],
		category:'code',
		inputs:[],
		outputs:['outStr', ],
	};

	//outStr- StringSource
	Blockly.Blocks['StringSource|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->outStr");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutStringPort',
		outputName:'outStr',
		name:'Block Name 0',
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
		name:'Add',
		params:[],
		category:'code',
		inputs:['inInt2', 'inInt1', ],
		outputs:['outInt', ],
	};

	//outInt- Add
	Blockly.Blocks['Add|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->outInt");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'outInt',
		name:'Block Name 0',
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
		name:'SplitTwo',
		params:[],
		category:'code',
		inputs:['in', ],
		outputs:['out1', 'out2', ],
	};

	//out1- SplitTwo
	Blockly.Blocks['SplitTwo|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->out1");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutPort',
		outputName:'out1',
		name:'Block Name 0',
	};

	//out2- SplitTwo
	Blockly.Blocks['SplitTwo|' + count + '\\1'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->out2");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutPort',
		outputName:'out2',
		name:'Block Name 0',
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
		name:'revLen',
		params:[],
		category:'code',
		inputs:['in', ],
		outputs:['out', ],
	};

	//out- revLen
	Blockly.Blocks['revLen|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->out");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutStringPort',
		outputName:'out',
		name:'Block Name 0',
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
		name:'RGBLEDDriver',
		params:[["gPin", ""], ["rPin", ""], ["bPin", ""], ],
		category:'code, electrical',
		inputs:['gPWM', 'inGreen', 'rPWM', 'inRed', 'inBlue', 'bPWM', ],
		outputs:['gOut', 'rOut', 'bOut', ],
	};

	//gOut- RGBLEDDriver
	Blockly.Blocks['RGBLEDDriver|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->gOut");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'ElectricalPort',
		outputName:'gOut',
		name:'Block Name 0',
	};

	//rOut- RGBLEDDriver
	Blockly.Blocks['RGBLEDDriver|' + count + '\\1'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->rOut");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'ElectricalPort',
		outputName:'rOut',
		name:'Block Name 0',
	};

	//bOut- RGBLEDDriver
	Blockly.Blocks['RGBLEDDriver|' + count + '\\2'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->bOut");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'ElectricalPort',
		outputName:'bOut',
		name:'Block Name 0',
	};
}

//DuplicateNumber
function makeDuplicateNumber(count, name){
	var ans = name;
	if (name === undefined){
		ans="DuplicateNumber"+(count);
	}
	Blockly.Blocks['DuplicateNumber|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("DuplicateNumber ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("num").setCheck("InIntPort").appendField("num");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name:'DuplicateNumber',
		params:[],
		category:'code',
		inputs:['num', ],
		outputs:['copy1', 'copy2', ],
	};

	//copy1- DuplicateNumber
	Blockly.Blocks['DuplicateNumber|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->copy1");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'copy1',
		name:'Block Name 0',
	};

	//copy2- DuplicateNumber
	Blockly.Blocks['DuplicateNumber|' + count + '\\1'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->copy2");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'copy2',
		name:'Block Name 0',
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
		name:'PutReverseSort',
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
		name:'live_demo_test1',
		params:[],
		category:'code, electrical',
		inputs:[],
	};
}

//user_trial_add
function makeuser_trial_add(count, name){
	var ans = name;
	if (name === undefined){
		ans="user_trial_add"+(count);
	}
	Blockly.Blocks['user_trial_add|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("user_trial_add ").appendField(new Blockly.FieldTextInput(ans), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("in2").setCheck("InIntPort").appendField("in2");
			this.appendValueInput("in").setCheck("InIntPort").appendField("in");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name:'user_trial_add',
		params:[],
		category:'code',
		inputs:['in2', 'in', ],
		outputs:['out', ],
	};

	//out- user_trial_add
	Blockly.Blocks['user_trial_add|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->out");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'out',
		name:'Block Name 0',
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
		name:'PotDriver',
		params:[["pin", ""], ],
		category:'code, electrical',
		inputs:['vIn', ],
		outputs:['outInt', 'aOut', ],
	};

	//outInt- PotDriver
	Blockly.Blocks['PotDriver|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->outInt");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'outInt',
		name:'Block Name 0',
	};

	//aOut- PotDriver
	Blockly.Blocks['PotDriver|' + count + '\\1'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->aOut");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'AnalogOutputPort',
		outputName:'aOut',
		name:'Block Name 0',
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
		name:'GetColor',
		params:[],
		category:'code',
		inputs:['inInt', ],
		outputs:['blue', 'green', 'red', ],
	};

	//blue- GetColor
	Blockly.Blocks['GetColor|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->blue");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'blue',
		name:'Block Name 0',
	};

	//green- GetColor
	Blockly.Blocks['GetColor|' + count + '\\1'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->green");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'green',
		name:'Block Name 0',
	};

	//red- GetColor
	Blockly.Blocks['GetColor|' + count + '\\2'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->red");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'red',
		name:'Block Name 0',
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
		name:'Pot',
		params:[],
		category:'electrical',
		inputs:[],
		outputs:['vOut', ],
	};

	//vOut- Pot
	Blockly.Blocks['Pot|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput().appendField(ans + "->vOut");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'ElectricalPort',
		outputName:'vOut',
		name:'Block Name 0',
	};
}

makeDrivenPot(0);
makeSortString(0);
makeSplitThree(0);
makeMultiply(0);
makeArduinoUno(0);
makeLinearInterpolate(0);
makeReverseString(0);
makeReverseSort(0);
makeSplitFour(0);
maketimes3(0);
makeStringSource(0);
makeAdd(0);
makeSplitTwo(0);
makerevLen(0);
makeRGBLEDDriver(0);
makeDuplicateNumber(0);
makeuser_trial_add(0);
makePotDriver(0);
makeGetColor(0);
makePot(0);
makeDrivenRGBLED(0);
makeLiveDemo0(0);
makeLiveDemo1(0);
makeLiveDemo2(0);
makeRGBLED(0);
makePrintString(0);
makeSortHello(0);
makePutString(0);
makeReverseHello(0);
makePutReverseSort(0);
makelive_demo_test1(0);
