//DrivenPot
function makeDrivenPot(count){
	Blockly.Blocks['DrivenPot|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("DrivenPot ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
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
			this.appendDummyInput().appendField("Block Name 0->outInt");
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
			this.appendDummyInput().appendField("Block Name 0->aOut");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'AnalogOutputPort',
		outputName:'aOut',
		name:'Block Name 0',
	};
}

//SortString
function makeSortString(count){
	Blockly.Blocks['SortString|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("SortString ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
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
			this.appendDummyInput().appendField("Block Name 0->outStr");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutStringPort',
		outputName:'outStr',
		name:'Block Name 0',
	};
}

//Multiply
function makeMultiply(count){
	Blockly.Blocks['Multiply|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("Multiply ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
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
			this.appendDummyInput().appendField("Block Name 0->product");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'product',
		name:'Block Name 0',
	};
}

//DrivenRGBLED
function makeDrivenRGBLED(count){
	Blockly.Blocks['DrivenRGBLED|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("DrivenRGBLED ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
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
function makeArduinoUno(count){
	Blockly.Blocks['ArduinoUno|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("ArduinoUno ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
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
			this.appendDummyInput().appendField("Block Name 0->do18");
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
			this.appendDummyInput().appendField("Block Name 0->do14");
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
			this.appendDummyInput().appendField("Block Name 0->do15");
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
			this.appendDummyInput().appendField("Block Name 0->do16");
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
			this.appendDummyInput().appendField("Block Name 0->do17");
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
			this.appendDummyInput().appendField("Block Name 0->do10");
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
			this.appendDummyInput().appendField("Block Name 0->do11");
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
			this.appendDummyInput().appendField("Block Name 0->do12");
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
			this.appendDummyInput().appendField("Block Name 0->do13");
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
			this.appendDummyInput().appendField("Block Name 0->do8");
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
			this.appendDummyInput().appendField("Block Name 0->do9");
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
			this.appendDummyInput().appendField("Block Name 0->do2");
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
			this.appendDummyInput().appendField("Block Name 0->do3");
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
			this.appendDummyInput().appendField("Block Name 0->pwm6");
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
			this.appendDummyInput().appendField("Block Name 0->do1");
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
			this.appendDummyInput().appendField("Block Name 0->do6");
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
			this.appendDummyInput().appendField("Block Name 0->pwm1");
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
			this.appendDummyInput().appendField("Block Name 0->do4");
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
			this.appendDummyInput().appendField("Block Name 0->do5");
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
			this.appendDummyInput().appendField("Block Name 0->pwm4");
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
			this.appendDummyInput().appendField("Block Name 0->pwm5");
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
			this.appendDummyInput().appendField("Block Name 0->do7");
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
			this.appendDummyInput().appendField("Block Name 0->pwm2");
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
			this.appendDummyInput().appendField("Block Name 0->pwm3");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'PWMOutputPort',
		outputName:'pwm3',
		name:'Block Name 0',
	};
}

//LiveDemo0
function makeLiveDemo0(count){
	Blockly.Blocks['LiveDemo0|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("LiveDemo0 ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
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
function makeLiveDemo1(count){
	Blockly.Blocks['LiveDemo1|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("LiveDemo1 ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
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
function makeLiveDemo2(count){
	Blockly.Blocks['LiveDemo2|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("LiveDemo2 ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
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

//name
function makename(count){
	Blockly.Blocks['name|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("name ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name:'name',
		params:[],
		category:'code, electrical',
		inputs:[],
	};
}

//RGBLED
function makeRGBLED(count){
	Blockly.Blocks['RGBLED|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("RGBLED ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
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
function makeLinearInterpolate(count){
	Blockly.Blocks['LinearInterpolate|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("LinearInterpolate ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
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
			this.appendDummyInput().appendField("Block Name 0->outInt");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'outInt',
		name:'Block Name 0',
	};
}

//ReverseString
function makeReverseString(count){
	Blockly.Blocks['ReverseString|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("ReverseString ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
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
			this.appendDummyInput().appendField("Block Name 0->outStr");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutStringPort',
		outputName:'outStr',
		name:'Block Name 0',
	};
}

//PrintString
function makePrintString(count){
	Blockly.Blocks['PrintString|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("PrintString ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
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
function makeReverseSort(count){
	Blockly.Blocks['ReverseSort|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("ReverseSort ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
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
			this.appendDummyInput().appendField("Block Name 0->outStr");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutStringPort',
		outputName:'outStr',
		name:'Block Name 0',
	};
}

//SixSplitter
function makeSixSplitter(count){
	Blockly.Blocks['SixSplitter|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("SixSplitter ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("in").setCheck("InPort").appendField("in");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name:'SixSplitter',
		params:[],
		category:'code',
		inputs:['in', ],
		outputs:['out1', 'out2', 'out3', 'out4', 'out5', 'out6', ],
	};

	//out1- SixSplitter
	Blockly.Blocks['SixSplitter|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput().appendField("Block Name 0->out1");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutPort',
		outputName:'out1',
		name:'Block Name 0',
	};

	//out2- SixSplitter
	Blockly.Blocks['SixSplitter|' + count + '\\1'] = {
		init: function(){
			this.appendDummyInput().appendField("Block Name 0->out2");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutPort',
		outputName:'out2',
		name:'Block Name 0',
	};

	//out3- SixSplitter
	Blockly.Blocks['SixSplitter|' + count + '\\2'] = {
		init: function(){
			this.appendDummyInput().appendField("Block Name 0->out3");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutPort',
		outputName:'out3',
		name:'Block Name 0',
	};

	//out4- SixSplitter
	Blockly.Blocks['SixSplitter|' + count + '\\3'] = {
		init: function(){
			this.appendDummyInput().appendField("Block Name 0->out4");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutPort',
		outputName:'out4',
		name:'Block Name 0',
	};

	//out5- SixSplitter
	Blockly.Blocks['SixSplitter|' + count + '\\4'] = {
		init: function(){
			this.appendDummyInput().appendField("Block Name 0->out5");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutPort',
		outputName:'out5',
		name:'Block Name 0',
	};

	//out6- SixSplitter
	Blockly.Blocks['SixSplitter|' + count + '\\5'] = {
		init: function(){
			this.appendDummyInput().appendField("Block Name 0->out6");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutPort',
		outputName:'out6',
		name:'Block Name 0',
	};
}

//SortHello
function makeSortHello(count){
	Blockly.Blocks['SortHello|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("SortHello ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
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
function makeSplitFour(count){
	Blockly.Blocks['SplitFour|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("SplitFour ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
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
			this.appendDummyInput().appendField("Block Name 0->out1");
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
			this.appendDummyInput().appendField("Block Name 0->out2");
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
			this.appendDummyInput().appendField("Block Name 0->out3");
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
			this.appendDummyInput().appendField("Block Name 0->out4");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutPort',
		outputName:'out4',
		name:'Block Name 0',
	};
}

//add1
function makeadd1(count){
	Blockly.Blocks['add1|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("add1 ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("in1").setCheck("InIntPort").appendField("in1");
			this.appendValueInput("in2").setCheck("InIntPort").appendField("in2");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name:'add1',
		params:[],
		category:'code',
		inputs:['in1', 'in2', ],
		outputs:['sum', ],
	};

	//sum- add1
	Blockly.Blocks['add1|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput().appendField("Block Name 0->sum");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'sum',
		name:'Block Name 0',
	};
}

//ReverseHello
function makeReverseHello(count){
	Blockly.Blocks['ReverseHello|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("ReverseHello ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
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

//demo1
function makedemo1(count){
	Blockly.Blocks['demo1|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("demo1 ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name:'demo1',
		params:[],
		category:'code, electrical',
		inputs:[],
	};
}

//times3
function maketimes3(count){
	Blockly.Blocks['times3|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("times3 ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
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
			this.appendDummyInput().appendField("Block Name 0->outInt");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'outInt',
		name:'Block Name 0',
	};
}

//StringSource
function makeStringSource(count){
	Blockly.Blocks['StringSource|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("StringSource ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
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
			this.appendDummyInput().appendField("Block Name 0->outStr");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutStringPort',
		outputName:'outStr',
		name:'Block Name 0',
	};
}

//Add
function makeAdd(count){
	Blockly.Blocks['Add|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("Add ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
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
			this.appendDummyInput().appendField("Block Name 0->outInt");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'outInt',
		name:'Block Name 0',
	};
}

//potColor
function makepotColor(count){
	Blockly.Blocks['potColor|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("potColor ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("in").setCheck("InPort").appendField("in");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name:'potColor',
		params:[],
		category:'code',
		inputs:['in', ],
		outputs:['r', 'b', 'g', ],
	};

	//r- potColor
	Blockly.Blocks['potColor|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput().appendField("Block Name 0->r");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'r',
		name:'Block Name 0',
	};

	//b- potColor
	Blockly.Blocks['potColor|' + count + '\\1'] = {
		init: function(){
			this.appendDummyInput().appendField("Block Name 0->b");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'b',
		name:'Block Name 0',
	};

	//g- potColor
	Blockly.Blocks['potColor|' + count + '\\2'] = {
		init: function(){
			this.appendDummyInput().appendField("Block Name 0->g");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'g',
		name:'Block Name 0',
	};
}

//SplitTwo
function makeSplitTwo(count){
	Blockly.Blocks['SplitTwo|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("SplitTwo ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
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
			this.appendDummyInput().appendField("Block Name 0->out1");
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
			this.appendDummyInput().appendField("Block Name 0->out2");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutPort',
		outputName:'out2',
		name:'Block Name 0',
	};
}

//revLen
function makerevLen(count){
	Blockly.Blocks['revLen|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("revLen ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
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
			this.appendDummyInput().appendField("Block Name 0->out");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutStringPort',
		outputName:'out',
		name:'Block Name 0',
	};
}

//RGBLEDDriver
function makeRGBLEDDriver(count){
	Blockly.Blocks['RGBLEDDriver|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("RGBLEDDriver ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
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
			this.appendDummyInput().appendField("Block Name 0->gOut");
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
			this.appendDummyInput().appendField("Block Name 0->rOut");
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
			this.appendDummyInput().appendField("Block Name 0->bOut");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'ElectricalPort',
		outputName:'bOut',
		name:'Block Name 0',
	};
}

//GetColor
function makeGetColor(count){
	Blockly.Blocks['GetColor|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("GetColor ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
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
			this.appendDummyInput().appendField("Block Name 0->blue");
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
			this.appendDummyInput().appendField("Block Name 0->green");
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
			this.appendDummyInput().appendField("Block Name 0->red");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'red',
		name:'Block Name 0',
	};
}

//Pot
function makePot(count){
	Blockly.Blocks['Pot|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("Pot ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
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
			this.appendDummyInput().appendField("Block Name 0->vOut");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'ElectricalPort',
		outputName:'vOut',
		name:'Block Name 0',
	};
}

//PutString
function makePutString(count){
	Blockly.Blocks['PutString|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("PutString ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
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

//LinearScale
function makeLinearScale(count){
	Blockly.Blocks['LinearScale|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("LinearScale ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("in").setCheck("InIntPort").appendField("in");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name:'LinearScale',
		params:[["inStart", "0"], ["inEnd", 1023], ["outStart", "0"], ["outEnd", 255], ],
		category:'code',
		inputs:['in', ],
		outputs:['scaled', ],
	};

	//scaled- LinearScale
	Blockly.Blocks['LinearScale|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput().appendField("Block Name 0->scaled");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'scaled',
		name:'Block Name 0',
	};
}

//DuplicateNumber
function makeDuplicateNumber(count){
	Blockly.Blocks['DuplicateNumber|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("DuplicateNumber ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
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
			this.appendDummyInput().appendField("Block Name 0->copy1");
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
			this.appendDummyInput().appendField("Block Name 0->copy2");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'copy2',
		name:'Block Name 0',
	};
}

//addIntFloat
function makeaddIntFloat(count){
	Blockly.Blocks['addIntFloat|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("addIntFloat ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("intNum").setCheck("InIntPort").appendField("intNum");
			this.appendValueInput("floatNum").setCheck("InFloatPort").appendField("floatNum");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name:'addIntFloat',
		params:[],
		category:'code',
		inputs:['intNum', 'floatNum', ],
		outputs:['name', ],
	};

	//name- addIntFloat
	Blockly.Blocks['addIntFloat|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput().appendField("Block Name 0->name");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutFloatPort',
		outputName:'name',
		name:'Block Name 0',
	};
}

//SplitThree
function makeSplitThree(count){
	Blockly.Blocks['SplitThree|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("SplitThree ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
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
			this.appendDummyInput().appendField("Block Name 0->out1");
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
			this.appendDummyInput().appendField("Block Name 0->out2");
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
			this.appendDummyInput().appendField("Block Name 0->out3");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutPort',
		outputName:'out3',
		name:'Block Name 0',
	};
}

//PutReverseSort
function makePutReverseSort(count){
	Blockly.Blocks['PutReverseSort|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("PutReverseSort ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
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
function makelive_demo_test1(count){
	Blockly.Blocks['live_demo_test1|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("live_demo_test1 ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
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

//addProds
function makeaddProds(count){
	Blockly.Blocks['addProds|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("addProds ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.appendValueInput("in4").setCheck("InIntPort").appendField("in4");
			this.appendValueInput("in1").setCheck("InIntPort").appendField("in1");
			this.appendValueInput("in2").setCheck("InIntPort").appendField("in2");
			this.appendValueInput("in3").setCheck("InIntPort").appendField("in3");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name:'addProds',
		params:[],
		category:'code',
		inputs:['in4', 'in1', 'in2', 'in3', ],
		outputs:['sumProds', ],
	};

	//sumProds- addProds
	Blockly.Blocks['addProds|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput().appendField("Block Name 0->sumProds");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'OutIntPort',
		outputName:'sumProds',
		name:'Block Name 0',
	};
}

//PotDriver
function makePotDriver(count){
	Blockly.Blocks['PotDriver|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("PotDriver ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
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
			this.appendDummyInput().appendField("Block Name 0->outInt");
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
			this.appendDummyInput().appendField("Block Name 0->aOut");
			this.setOutput(true, null);
			this.setColour(180);
		},
		outputType:'AnalogOutputPort',
		outputName:'aOut',
		name:'Block Name 0',
	};
}

//Demo
function makeDemo(count){
	Blockly.Blocks['Demo|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("Demo ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
			for(var i = 0; i < this.params.length; i++){
				this.appendDummyInput().appendField("Parameter " + this.params[i][0]).appendField(new Blockly.FieldTextInput(this.params[i][1]), "PARAM" + i);
			}
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name:'Demo',
		params:[],
		category:'code, electrical',
		inputs:[],
	};
}

makeDrivenPot(0);
makeSortString(0);
makeMultiply(0);
makeArduinoUno(0);
makeLinearInterpolate(0);
makeReverseString(0);
makeReverseSort(0);
makeSixSplitter(0);
makeSplitFour(0);
makeadd1(0);
maketimes3(0);
makeStringSource(0);
makeAdd(0);
makepotColor(0);
makeSplitTwo(0);
makerevLen(0);
makeRGBLEDDriver(0);
makeGetColor(0);
makePot(0);
makeLinearScale(0);
makeDuplicateNumber(0);
makeaddIntFloat(0);
makeSplitThree(0);
makeaddProds(0);
makePotDriver(0);
makeDrivenRGBLED(0);
makeLiveDemo0(0);
makeLiveDemo1(0);
makeLiveDemo2(0);
makename(0);
makeRGBLED(0);
makePrintString(0);
makeSortHello(0);
makeReverseHello(0);
makedemo1(0);
makePutString(0);
makePutReverseSort(0);
makelive_demo_test1(0);
makeDemo(0);
