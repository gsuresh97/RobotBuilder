//DrivenMicrophone
function makeOutputDrivenMicrophone(count){
	Blockly.Arduino['DrivenMicrophone|' + count] = function() {
		var code = "DrivenMicrophone" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//outInt- DrivenMicrophone
	Blockly.Arduino['DrivenMicrophone|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'outInt'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//aOut- DrivenMicrophone
	Blockly.Arduino['DrivenMicrophone|' + count + '\\1'] = function() {
		var code = this.name + '_';
		code += 'aOut'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//DrivenPot
function makeOutputDrivenPot(count){
	Blockly.Arduino['DrivenPot|' + count] = function() {
		var code = "DrivenPot" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//outInt- DrivenPot
	Blockly.Arduino['DrivenPot|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'outInt'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//aOut- DrivenPot
	Blockly.Arduino['DrivenPot|' + count + '\\1'] = function() {
		var code = this.name + '_';
		code += 'aOut'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//DrivenLED
function makeOutputDrivenLED(count){
	Blockly.Arduino['DrivenLED|' + count] = function() {
		var code = "DrivenLED" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}
}

//MotorDriver
function makeOutputMotorDriver(count){
	Blockly.Arduino['MotorDriver|' + count] = function() {
		var code = "MotorDriver" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//eOut- MotorDriver
	Blockly.Arduino['MotorDriver|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'eOut'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//SortString
function makeOutputSortString(count){
	Blockly.Arduino['SortString|' + count] = function() {
		var code = "SortString" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//outStr- SortString
	Blockly.Arduino['SortString|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'outStr'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//Servo
function makeOutputServo(count){
	Blockly.Arduino['Servo|' + count] = function() {
		var code = "Servo" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}
}

//SplitThree
function makeOutputSplitThree(count){
	Blockly.Arduino['SplitThree|' + count] = function() {
		var code = "SplitThree" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//out1- SplitThree
	Blockly.Arduino['SplitThree|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'out1'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//out2- SplitThree
	Blockly.Arduino['SplitThree|' + count + '\\1'] = function() {
		var code = this.name + '_';
		code += 'out2'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//out3- SplitThree
	Blockly.Arduino['SplitThree|' + count + '\\2'] = function() {
		var code = this.name + '_';
		code += 'out3'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//DrivenServo
function makeOutputDrivenServo(count){
	Blockly.Arduino['DrivenServo|' + count] = function() {
		var code = "DrivenServo" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}
}

//DrivenRGBLED
function makeOutputDrivenRGBLED(count){
	Blockly.Arduino['DrivenRGBLED|' + count] = function() {
		var code = "DrivenRGBLED" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}
}

//Arduino101
function makeOutputArduino101(count){
	Blockly.Arduino['Arduino101|' + count] = function() {
		var code = "Arduino101" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//do18- Arduino101
	Blockly.Arduino['Arduino101|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'do18'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do14- Arduino101
	Blockly.Arduino['Arduino101|' + count + '\\1'] = function() {
		var code = this.name + '_';
		code += 'do14'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do15- Arduino101
	Blockly.Arduino['Arduino101|' + count + '\\2'] = function() {
		var code = this.name + '_';
		code += 'do15'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do16- Arduino101
	Blockly.Arduino['Arduino101|' + count + '\\3'] = function() {
		var code = this.name + '_';
		code += 'do16'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do17- Arduino101
	Blockly.Arduino['Arduino101|' + count + '\\4'] = function() {
		var code = this.name + '_';
		code += 'do17'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do10- Arduino101
	Blockly.Arduino['Arduino101|' + count + '\\5'] = function() {
		var code = this.name + '_';
		code += 'do10'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do11- Arduino101
	Blockly.Arduino['Arduino101|' + count + '\\6'] = function() {
		var code = this.name + '_';
		code += 'do11'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do12- Arduino101
	Blockly.Arduino['Arduino101|' + count + '\\7'] = function() {
		var code = this.name + '_';
		code += 'do12'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do13- Arduino101
	Blockly.Arduino['Arduino101|' + count + '\\8'] = function() {
		var code = this.name + '_';
		code += 'do13'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do8- Arduino101
	Blockly.Arduino['Arduino101|' + count + '\\9'] = function() {
		var code = this.name + '_';
		code += 'do8'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do9- Arduino101
	Blockly.Arduino['Arduino101|' + count + '\\10'] = function() {
		var code = this.name + '_';
		code += 'do9'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do2- Arduino101
	Blockly.Arduino['Arduino101|' + count + '\\11'] = function() {
		var code = this.name + '_';
		code += 'do2'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do3- Arduino101
	Blockly.Arduino['Arduino101|' + count + '\\12'] = function() {
		var code = this.name + '_';
		code += 'do3'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//pwm6- Arduino101
	Blockly.Arduino['Arduino101|' + count + '\\13'] = function() {
		var code = this.name + '_';
		code += 'pwm6'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do1- Arduino101
	Blockly.Arduino['Arduino101|' + count + '\\14'] = function() {
		var code = this.name + '_';
		code += 'do1'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do6- Arduino101
	Blockly.Arduino['Arduino101|' + count + '\\15'] = function() {
		var code = this.name + '_';
		code += 'do6'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//pwm1- Arduino101
	Blockly.Arduino['Arduino101|' + count + '\\16'] = function() {
		var code = this.name + '_';
		code += 'pwm1'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do4- Arduino101
	Blockly.Arduino['Arduino101|' + count + '\\17'] = function() {
		var code = this.name + '_';
		code += 'do4'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do5- Arduino101
	Blockly.Arduino['Arduino101|' + count + '\\18'] = function() {
		var code = this.name + '_';
		code += 'do5'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//pwm4- Arduino101
	Blockly.Arduino['Arduino101|' + count + '\\19'] = function() {
		var code = this.name + '_';
		code += 'pwm4'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//pwm5- Arduino101
	Blockly.Arduino['Arduino101|' + count + '\\20'] = function() {
		var code = this.name + '_';
		code += 'pwm5'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do7- Arduino101
	Blockly.Arduino['Arduino101|' + count + '\\21'] = function() {
		var code = this.name + '_';
		code += 'do7'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//pwm2- Arduino101
	Blockly.Arduino['Arduino101|' + count + '\\22'] = function() {
		var code = this.name + '_';
		code += 'pwm2'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//pwm3- Arduino101
	Blockly.Arduino['Arduino101|' + count + '\\23'] = function() {
		var code = this.name + '_';
		code += 'pwm3'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//ArduinoUno
function makeOutputArduinoUno(count){
	Blockly.Arduino['ArduinoUno|' + count] = function() {
		var code = "ArduinoUno" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//do14- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'do14'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do15- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\1'] = function() {
		var code = this.name + '_';
		code += 'do15'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do16- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\2'] = function() {
		var code = this.name + '_';
		code += 'do16'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do17- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\3'] = function() {
		var code = this.name + '_';
		code += 'do17'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do10- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\4'] = function() {
		var code = this.name + '_';
		code += 'do10'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do11- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\5'] = function() {
		var code = this.name + '_';
		code += 'do11'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do12- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\6'] = function() {
		var code = this.name + '_';
		code += 'do12'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do13- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\7'] = function() {
		var code = this.name + '_';
		code += 'do13'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do8- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\8'] = function() {
		var code = this.name + '_';
		code += 'do8'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do9- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\9'] = function() {
		var code = this.name + '_';
		code += 'do9'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//pwm4- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\10'] = function() {
		var code = this.name + '_';
		code += 'pwm4'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do3- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\11'] = function() {
		var code = this.name + '_';
		code += 'do3'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//pwm6- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\12'] = function() {
		var code = this.name + '_';
		code += 'pwm6'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do1- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\13'] = function() {
		var code = this.name + '_';
		code += 'do1'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do6- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\14'] = function() {
		var code = this.name + '_';
		code += 'do6'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//pwm1- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\15'] = function() {
		var code = this.name + '_';
		code += 'pwm1'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do4- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\16'] = function() {
		var code = this.name + '_';
		code += 'do4'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do5- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\17'] = function() {
		var code = this.name + '_';
		code += 'do5'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do2- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\18'] = function() {
		var code = this.name + '_';
		code += 'do2'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//pwm5- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\19'] = function() {
		var code = this.name + '_';
		code += 'pwm5'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do0- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\20'] = function() {
		var code = this.name + '_';
		code += 'do0'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do7- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\21'] = function() {
		var code = this.name + '_';
		code += 'do7'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//pwm2- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\22'] = function() {
		var code = this.name + '_';
		code += 'pwm2'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//pwm3- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\23'] = function() {
		var code = this.name + '_';
		code += 'pwm3'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//LiveDemo4
function makeOutputLiveDemo4(count){
	Blockly.Arduino['LiveDemo4|' + count] = function() {
		var code = "LiveDemo4" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}
}

//LiveDemo0
function makeOutputLiveDemo0(count){
	Blockly.Arduino['LiveDemo0|' + count] = function() {
		var code = "LiveDemo0" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}
}

//LiveDemo1
function makeOutputLiveDemo1(count){
	Blockly.Arduino['LiveDemo1|' + count] = function() {
		var code = "LiveDemo1" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}
}

//LiveDemo2
function makeOutputLiveDemo2(count){
	Blockly.Arduino['LiveDemo2|' + count] = function() {
		var code = "LiveDemo2" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}
}

//LiveDemo3
function makeOutputLiveDemo3(count){
	Blockly.Arduino['LiveDemo3|' + count] = function() {
		var code = "LiveDemo3" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}
}

//RGBLED
function makeOutputRGBLED(count){
	Blockly.Arduino['RGBLED|' + count] = function() {
		var code = "RGBLED" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}
}

//LinearInterpolate
function makeOutputLinearInterpolate(count){
	Blockly.Arduino['LinearInterpolate|' + count] = function() {
		var code = "LinearInterpolate" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//outInt- LinearInterpolate
	Blockly.Arduino['LinearInterpolate|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'outInt'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//ReverseString
function makeOutputReverseString(count){
	Blockly.Arduino['ReverseString|' + count] = function() {
		var code = "ReverseString" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//outStr- ReverseString
	Blockly.Arduino['ReverseString|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'outStr'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//PrintString
function makeOutputPrintString(count){
	Blockly.Arduino['PrintString|' + count] = function() {
		var code = "PrintString" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}
}

//UltrasonicSensor
function makeOutputUltrasonicSensor(count){
	Blockly.Arduino['UltrasonicSensor|' + count] = function() {
		var code = "UltrasonicSensor" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}
}

//MicrophoneDriver
function makeOutputMicrophoneDriver(count){
	Blockly.Arduino['MicrophoneDriver|' + count] = function() {
		var code = "MicrophoneDriver" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//outInt- MicrophoneDriver
	Blockly.Arduino['MicrophoneDriver|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'outInt'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//aOut- MicrophoneDriver
	Blockly.Arduino['MicrophoneDriver|' + count + '\\1'] = function() {
		var code = this.name + '_';
		code += 'aOut'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//DrivenUltrasonicSensor
function makeOutputDrivenUltrasonicSensor(count){
	Blockly.Arduino['DrivenUltrasonicSensor|' + count] = function() {
		var code = "DrivenUltrasonicSensor" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//outInt- DrivenUltrasonicSensor
	Blockly.Arduino['DrivenUltrasonicSensor|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'outInt'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//DrivenMotor
function makeOutputDrivenMotor(count){
	Blockly.Arduino['DrivenMotor|' + count] = function() {
		var code = "DrivenMotor" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}
}

//ReverseSort
function makeOutputReverseSort(count){
	Blockly.Arduino['ReverseSort|' + count] = function() {
		var code = "ReverseSort" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//outStr- ReverseSort
	Blockly.Arduino['ReverseSort|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'outStr'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//IREmitterDriver
function makeOutputIREmitterDriver(count){
	Blockly.Arduino['IREmitterDriver|' + count] = function() {
		var code = "IREmitterDriver" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//eOut- IREmitterDriver
	Blockly.Arduino['IREmitterDriver|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'eOut'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//SortHello
function makeOutputSortHello(count){
	Blockly.Arduino['SortHello|' + count] = function() {
		var code = "SortHello" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}
}

//user_Counter
function makeOutputuser_Counter(count){
	Blockly.Arduino['user_Counter|' + count] = function() {
		var code = "user_Counter" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//ledLevel- user_Counter
	Blockly.Arduino['user_Counter|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'ledLevel'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//SplitFour
function makeOutputSplitFour(count){
	Blockly.Arduino['SplitFour|' + count] = function() {
		var code = "SplitFour" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//out1- SplitFour
	Blockly.Arduino['SplitFour|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'out1'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//out2- SplitFour
	Blockly.Arduino['SplitFour|' + count + '\\1'] = function() {
		var code = this.name + '_';
		code += 'out2'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//out3- SplitFour
	Blockly.Arduino['SplitFour|' + count + '\\2'] = function() {
		var code = this.name + '_';
		code += 'out3'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//out4- SplitFour
	Blockly.Arduino['SplitFour|' + count + '\\3'] = function() {
		var code = this.name + '_';
		code += 'out4'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//UIButton
function makeOutputUIButton(count){
	Blockly.Arduino['UIButton|' + count] = function() {
		var code = "UIButton" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//outInt- UIButton
	Blockly.Arduino['UIButton|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'outInt'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//PutString
function makeOutputPutString(count){
	Blockly.Arduino['PutString|' + count] = function() {
		var code = "PutString" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}
}

//DigitalOutputDriver
function makeOutputDigitalOutputDriver(count){
	Blockly.Arduino['DigitalOutputDriver|' + count] = function() {
		var code = "DigitalOutputDriver" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//eOut- DigitalOutputDriver
	Blockly.Arduino['DigitalOutputDriver|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'eOut'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//NodeMCU
function makeOutputNodeMCU(count){
	Blockly.Arduino['NodeMCU|' + count] = function() {
		var code = "NodeMCU" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//do8- NodeMCU
	Blockly.Arduino['NodeMCU|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'do8'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do2- NodeMCU
	Blockly.Arduino['NodeMCU|' + count + '\\1'] = function() {
		var code = this.name + '_';
		code += 'do2'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do3- NodeMCU
	Blockly.Arduino['NodeMCU|' + count + '\\2'] = function() {
		var code = this.name + '_';
		code += 'do3'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do0- NodeMCU
	Blockly.Arduino['NodeMCU|' + count + '\\3'] = function() {
		var code = this.name + '_';
		code += 'do0'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do1- NodeMCU
	Blockly.Arduino['NodeMCU|' + count + '\\4'] = function() {
		var code = this.name + '_';
		code += 'do1'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do6- NodeMCU
	Blockly.Arduino['NodeMCU|' + count + '\\5'] = function() {
		var code = this.name + '_';
		code += 'do6'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do7- NodeMCU
	Blockly.Arduino['NodeMCU|' + count + '\\6'] = function() {
		var code = this.name + '_';
		code += 'do7'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do4- NodeMCU
	Blockly.Arduino['NodeMCU|' + count + '\\7'] = function() {
		var code = this.name + '_';
		code += 'do4'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do5- NodeMCU
	Blockly.Arduino['NodeMCU|' + count + '\\8'] = function() {
		var code = this.name + '_';
		code += 'do5'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//Motor
function makeOutputMotor(count){
	Blockly.Arduino['Motor|' + count] = function() {
		var code = "Motor" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}
}

//Microphone
function makeOutputMicrophone(count){
	Blockly.Arduino['Microphone|' + count] = function() {
		var code = "Microphone" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//vOut- Microphone
	Blockly.Arduino['Microphone|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'vOut'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//StringSource
function makeOutputStringSource(count){
	Blockly.Arduino['StringSource|' + count] = function() {
		var code = "StringSource" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//outStr- StringSource
	Blockly.Arduino['StringSource|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'outStr'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//Add
function makeOutputAdd(count){
	Blockly.Arduino['Add|' + count] = function() {
		var code = "Add" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//outInt- Add
	Blockly.Arduino['Add|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'outInt'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//SplitTwo
function makeOutputSplitTwo(count){
	Blockly.Arduino['SplitTwo|' + count] = function() {
		var code = "SplitTwo" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//out1- SplitTwo
	Blockly.Arduino['SplitTwo|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'out1'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//out2- SplitTwo
	Blockly.Arduino['SplitTwo|' + count + '\\1'] = function() {
		var code = this.name + '_';
		code += 'out2'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//ArduinoMKR1000
function makeOutputArduinoMKR1000(count){
	Blockly.Arduino['ArduinoMKR1000|' + count] = function() {
		var code = "ArduinoMKR1000" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//do18- ArduinoMKR1000
	Blockly.Arduino['ArduinoMKR1000|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'do18'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do14- ArduinoMKR1000
	Blockly.Arduino['ArduinoMKR1000|' + count + '\\1'] = function() {
		var code = this.name + '_';
		code += 'do14'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do15- ArduinoMKR1000
	Blockly.Arduino['ArduinoMKR1000|' + count + '\\2'] = function() {
		var code = this.name + '_';
		code += 'do15'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do16- ArduinoMKR1000
	Blockly.Arduino['ArduinoMKR1000|' + count + '\\3'] = function() {
		var code = this.name + '_';
		code += 'do16'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do17- ArduinoMKR1000
	Blockly.Arduino['ArduinoMKR1000|' + count + '\\4'] = function() {
		var code = this.name + '_';
		code += 'do17'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do10- ArduinoMKR1000
	Blockly.Arduino['ArduinoMKR1000|' + count + '\\5'] = function() {
		var code = this.name + '_';
		code += 'do10'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do11- ArduinoMKR1000
	Blockly.Arduino['ArduinoMKR1000|' + count + '\\6'] = function() {
		var code = this.name + '_';
		code += 'do11'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do12- ArduinoMKR1000
	Blockly.Arduino['ArduinoMKR1000|' + count + '\\7'] = function() {
		var code = this.name + '_';
		code += 'do12'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do13- ArduinoMKR1000
	Blockly.Arduino['ArduinoMKR1000|' + count + '\\8'] = function() {
		var code = this.name + '_';
		code += 'do13'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do8- ArduinoMKR1000
	Blockly.Arduino['ArduinoMKR1000|' + count + '\\9'] = function() {
		var code = this.name + '_';
		code += 'do8'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do9- ArduinoMKR1000
	Blockly.Arduino['ArduinoMKR1000|' + count + '\\10'] = function() {
		var code = this.name + '_';
		code += 'do9'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//pwm4- ArduinoMKR1000
	Blockly.Arduino['ArduinoMKR1000|' + count + '\\11'] = function() {
		var code = this.name + '_';
		code += 'pwm4'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do3- ArduinoMKR1000
	Blockly.Arduino['ArduinoMKR1000|' + count + '\\12'] = function() {
		var code = this.name + '_';
		code += 'do3'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do1- ArduinoMKR1000
	Blockly.Arduino['ArduinoMKR1000|' + count + '\\13'] = function() {
		var code = this.name + '_';
		code += 'do1'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do6- ArduinoMKR1000
	Blockly.Arduino['ArduinoMKR1000|' + count + '\\14'] = function() {
		var code = this.name + '_';
		code += 'do6'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//pwm1- ArduinoMKR1000
	Blockly.Arduino['ArduinoMKR1000|' + count + '\\15'] = function() {
		var code = this.name + '_';
		code += 'pwm1'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do4- ArduinoMKR1000
	Blockly.Arduino['ArduinoMKR1000|' + count + '\\16'] = function() {
		var code = this.name + '_';
		code += 'do4'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do5- ArduinoMKR1000
	Blockly.Arduino['ArduinoMKR1000|' + count + '\\17'] = function() {
		var code = this.name + '_';
		code += 'do5'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do2- ArduinoMKR1000
	Blockly.Arduino['ArduinoMKR1000|' + count + '\\18'] = function() {
		var code = this.name + '_';
		code += 'do2'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do7- ArduinoMKR1000
	Blockly.Arduino['ArduinoMKR1000|' + count + '\\19'] = function() {
		var code = this.name + '_';
		code += 'do7'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//pwm2- ArduinoMKR1000
	Blockly.Arduino['ArduinoMKR1000|' + count + '\\20'] = function() {
		var code = this.name + '_';
		code += 'pwm2'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//pwm3- ArduinoMKR1000
	Blockly.Arduino['ArduinoMKR1000|' + count + '\\21'] = function() {
		var code = this.name + '_';
		code += 'pwm3'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//LED
function makeOutputLED(count){
	Blockly.Arduino['LED|' + count] = function() {
		var code = "LED" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}
}

//LEDDriver
function makeOutputLEDDriver(count){
	Blockly.Arduino['LEDDriver|' + count] = function() {
		var code = "LEDDriver" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//eOut- LEDDriver
	Blockly.Arduino['LEDDriver|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'eOut'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//RGBLEDDriver
function makeOutputRGBLEDDriver(count){
	Blockly.Arduino['RGBLEDDriver|' + count] = function() {
		var code = "RGBLEDDriver" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//gOut- RGBLEDDriver
	Blockly.Arduino['RGBLEDDriver|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'gOut'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//rOut- RGBLEDDriver
	Blockly.Arduino['RGBLEDDriver|' + count + '\\1'] = function() {
		var code = this.name + '_';
		code += 'rOut'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//bOut- RGBLEDDriver
	Blockly.Arduino['RGBLEDDriver|' + count + '\\2'] = function() {
		var code = this.name + '_';
		code += 'bOut'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//UISlider
function makeOutputUISlider(count){
	Blockly.Arduino['UISlider|' + count] = function() {
		var code = "UISlider" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//outInt- UISlider
	Blockly.Arduino['UISlider|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'outInt'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//ReverseHello
function makeOutputReverseHello(count){
	Blockly.Arduino['ReverseHello|' + count] = function() {
		var code = "ReverseHello" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}
}

//GetString
function makeOutputGetString(count){
	Blockly.Arduino['GetString|' + count] = function() {
		var code = "GetString" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//outStr- GetString
	Blockly.Arduino['GetString|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'outStr'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//DigitalInputDriver
function makeOutputDigitalInputDriver(count){
	Blockly.Arduino['DigitalInputDriver|' + count] = function() {
		var code = "DigitalInputDriver" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//outInt- DigitalInputDriver
	Blockly.Arduino['DigitalInputDriver|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'outInt'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//Dout- DigitalInputDriver
	Blockly.Arduino['DigitalInputDriver|' + count + '\\1'] = function() {
		var code = this.name + '_';
		code += 'Dout'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//ServoDriver
function makeOutputServoDriver(count){
	Blockly.Arduino['ServoDriver|' + count] = function() {
		var code = "ServoDriver" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//eOut- ServoDriver
	Blockly.Arduino['ServoDriver|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'eOut'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//PutReverseSort
function makeOutputPutReverseSort(count){
	Blockly.Arduino['PutReverseSort|' + count] = function() {
		var code = "PutReverseSort" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}
}

//live_demo_test1
function makeOutputlive_demo_test1(count){
	Blockly.Arduino['live_demo_test1|' + count] = function() {
		var code = "live_demo_test1" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}
}

//IREmitter
function makeOutputIREmitter(count){
	Blockly.Arduino['IREmitter|' + count] = function() {
		var code = "IREmitter" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}
}

//UltrasonicSensorDriver
function makeOutputUltrasonicSensorDriver(count){
	Blockly.Arduino['UltrasonicSensorDriver|' + count] = function() {
		var code = "UltrasonicSensorDriver" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//outInt- UltrasonicSensorDriver
	Blockly.Arduino['UltrasonicSensorDriver|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'outInt'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//tOut- UltrasonicSensorDriver
	Blockly.Arduino['UltrasonicSensorDriver|' + count + '\\1'] = function() {
		var code = this.name + '_';
		code += 'tOut'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//eOut- UltrasonicSensorDriver
	Blockly.Arduino['UltrasonicSensorDriver|' + count + '\\2'] = function() {
		var code = this.name + '_';
		code += 'eOut'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//PotDriver
function makeOutputPotDriver(count){
	Blockly.Arduino['PotDriver|' + count] = function() {
		var code = "PotDriver" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//outInt- PotDriver
	Blockly.Arduino['PotDriver|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'outInt'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//aOut- PotDriver
	Blockly.Arduino['PotDriver|' + count + '\\1'] = function() {
		var code = this.name + '_';
		code += 'aOut'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//CapacitiveTouchSensorDriver
function makeOutputCapacitiveTouchSensorDriver(count){
	Blockly.Arduino['CapacitiveTouchSensorDriver|' + count] = function() {
		var code = "CapacitiveTouchSensorDriver" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//outInt- CapacitiveTouchSensorDriver
	Blockly.Arduino['CapacitiveTouchSensorDriver|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'outInt'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//Dout- CapacitiveTouchSensorDriver
	Blockly.Arduino['CapacitiveTouchSensorDriver|' + count + '\\1'] = function() {
		var code = this.name + '_';
		code += 'Dout'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//GetColor
function makeOutputGetColor(count){
	Blockly.Arduino['GetColor|' + count] = function() {
		var code = "GetColor" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//blue- GetColor
	Blockly.Arduino['GetColor|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'blue'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//green- GetColor
	Blockly.Arduino['GetColor|' + count + '\\1'] = function() {
		var code = this.name + '_';
		code += 'green'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//red- GetColor
	Blockly.Arduino['GetColor|' + count + '\\2'] = function() {
		var code = this.name + '_';
		code += 'red'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//Pot
function makeOutputPot(count){
	Blockly.Arduino['Pot|' + count] = function() {
		var code = "Pot" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//vOut- Pot
	Blockly.Arduino['Pot|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'vOut'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//TeensyLC
function makeOutputTeensyLC(count){
	Blockly.Arduino['TeensyLC|' + count] = function() {
		var code = "TeensyLC" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//do18- TeensyLC
	Blockly.Arduino['TeensyLC|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'do18'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do19- TeensyLC
	Blockly.Arduino['TeensyLC|' + count + '\\1'] = function() {
		var code = this.name + '_';
		code += 'do19'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do14- TeensyLC
	Blockly.Arduino['TeensyLC|' + count + '\\2'] = function() {
		var code = this.name + '_';
		code += 'do14'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do15- TeensyLC
	Blockly.Arduino['TeensyLC|' + count + '\\3'] = function() {
		var code = this.name + '_';
		code += 'do15'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do16- TeensyLC
	Blockly.Arduino['TeensyLC|' + count + '\\4'] = function() {
		var code = this.name + '_';
		code += 'do16'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do17- TeensyLC
	Blockly.Arduino['TeensyLC|' + count + '\\5'] = function() {
		var code = this.name + '_';
		code += 'do17'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do10- TeensyLC
	Blockly.Arduino['TeensyLC|' + count + '\\6'] = function() {
		var code = this.name + '_';
		code += 'do10'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do11- TeensyLC
	Blockly.Arduino['TeensyLC|' + count + '\\7'] = function() {
		var code = this.name + '_';
		code += 'do11'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do12- TeensyLC
	Blockly.Arduino['TeensyLC|' + count + '\\8'] = function() {
		var code = this.name + '_';
		code += 'do12'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do13- TeensyLC
	Blockly.Arduino['TeensyLC|' + count + '\\9'] = function() {
		var code = this.name + '_';
		code += 'do13'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do8- TeensyLC
	Blockly.Arduino['TeensyLC|' + count + '\\10'] = function() {
		var code = this.name + '_';
		code += 'do8'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do9- TeensyLC
	Blockly.Arduino['TeensyLC|' + count + '\\11'] = function() {
		var code = this.name + '_';
		code += 'do9'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//pwm8- TeensyLC
	Blockly.Arduino['TeensyLC|' + count + '\\12'] = function() {
		var code = this.name + '_';
		code += 'pwm8'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//pwm9- TeensyLC
	Blockly.Arduino['TeensyLC|' + count + '\\13'] = function() {
		var code = this.name + '_';
		code += 'pwm9'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do2- TeensyLC
	Blockly.Arduino['TeensyLC|' + count + '\\14'] = function() {
		var code = this.name + '_';
		code += 'do2'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do3- TeensyLC
	Blockly.Arduino['TeensyLC|' + count + '\\15'] = function() {
		var code = this.name + '_';
		code += 'do3'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//pwm6- TeensyLC
	Blockly.Arduino['TeensyLC|' + count + '\\16'] = function() {
		var code = this.name + '_';
		code += 'pwm6'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//pwm7- TeensyLC
	Blockly.Arduino['TeensyLC|' + count + '\\17'] = function() {
		var code = this.name + '_';
		code += 'pwm7'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do6- TeensyLC
	Blockly.Arduino['TeensyLC|' + count + '\\18'] = function() {
		var code = this.name + '_';
		code += 'do6'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do7- TeensyLC
	Blockly.Arduino['TeensyLC|' + count + '\\19'] = function() {
		var code = this.name + '_';
		code += 'do7'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do4- TeensyLC
	Blockly.Arduino['TeensyLC|' + count + '\\20'] = function() {
		var code = this.name + '_';
		code += 'do4'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do5- TeensyLC
	Blockly.Arduino['TeensyLC|' + count + '\\21'] = function() {
		var code = this.name + '_';
		code += 'do5'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do21- TeensyLC
	Blockly.Arduino['TeensyLC|' + count + '\\22'] = function() {
		var code = this.name + '_';
		code += 'do21'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do20- TeensyLC
	Blockly.Arduino['TeensyLC|' + count + '\\23'] = function() {
		var code = this.name + '_';
		code += 'do20'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do23- TeensyLC
	Blockly.Arduino['TeensyLC|' + count + '\\24'] = function() {
		var code = this.name + '_';
		code += 'do23'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do22- TeensyLC
	Blockly.Arduino['TeensyLC|' + count + '\\25'] = function() {
		var code = this.name + '_';
		code += 'do22'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//pwm4- TeensyLC
	Blockly.Arduino['TeensyLC|' + count + '\\26'] = function() {
		var code = this.name + '_';
		code += 'pwm4'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//pwm5- TeensyLC
	Blockly.Arduino['TeensyLC|' + count + '\\27'] = function() {
		var code = this.name + '_';
		code += 'pwm5'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//pwm10- TeensyLC
	Blockly.Arduino['TeensyLC|' + count + '\\28'] = function() {
		var code = this.name + '_';
		code += 'pwm10'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do1- TeensyLC
	Blockly.Arduino['TeensyLC|' + count + '\\29'] = function() {
		var code = this.name + '_';
		code += 'do1'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//pwm1- TeensyLC
	Blockly.Arduino['TeensyLC|' + count + '\\30'] = function() {
		var code = this.name + '_';
		code += 'pwm1'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//pwm2- TeensyLC
	Blockly.Arduino['TeensyLC|' + count + '\\31'] = function() {
		var code = this.name + '_';
		code += 'pwm2'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//pwm3- TeensyLC
	Blockly.Arduino['TeensyLC|' + count + '\\32'] = function() {
		var code = this.name + '_';
		code += 'pwm3'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//GetAndPutString
function makeOutputGetAndPutString(count){
	Blockly.Arduino['GetAndPutString|' + count] = function() {
		var code = "GetAndPutString" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}
}

//CapacitiveTouchSensor
function makeOutputCapacitiveTouchSensor(count){
	Blockly.Arduino['CapacitiveTouchSensor|' + count] = function() {
		var code = "CapacitiveTouchSensor" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}
}

//revLen
function makeOutputrevLen(count){
	Blockly.Arduino['revLen|' + count] = function() {
		var code = "revLen" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}

	//out- revLen
	Blockly.Arduino['revLen|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'out'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//user_DrivenLED
function makeOutputuser_DrivenLED(count){
	Blockly.Arduino['user_DrivenLED|' + count] = function() {
		var code = "user_DrivenLED" + (count) + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		code += (this.params.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		for(var i = 0; i < this.params.length; i++){
			code += (this.params[i][0] + "|" + this.params[i][1] + "|");
		}

		code += '#';
		return code;
	}
}

makeOutputDrivenMicrophone(0);
makeOutputDrivenPot(0);
makeOutputMotorDriver(0);
makeOutputSortString(0);
makeOutputSplitThree(0);
makeOutputArduino101(0);
makeOutputArduinoUno(0);
makeOutputLinearInterpolate(0);
makeOutputReverseString(0);
makeOutputMicrophoneDriver(0);
makeOutputDrivenUltrasonicSensor(0);
makeOutputReverseSort(0);
makeOutputIREmitterDriver(0);
makeOutputuser_Counter(0);
makeOutputSplitFour(0);
makeOutputUIButton(0);
makeOutputDigitalOutputDriver(0);
makeOutputNodeMCU(0);
makeOutputMicrophone(0);
makeOutputStringSource(0);
makeOutputAdd(0);
makeOutputSplitTwo(0);
makeOutputArduinoMKR1000(0);
makeOutputLEDDriver(0);
makeOutputRGBLEDDriver(0);
makeOutputUISlider(0);
makeOutputGetString(0);
makeOutputDigitalInputDriver(0);
makeOutputServoDriver(0);
makeOutputUltrasonicSensorDriver(0);
makeOutputPotDriver(0);
makeOutputCapacitiveTouchSensorDriver(0);
makeOutputGetColor(0);
makeOutputPot(0);
makeOutputTeensyLC(0);
makeOutputrevLen(0);
makeOutputDrivenLED(0);
makeOutputServo(0);
makeOutputDrivenServo(0);
makeOutputDrivenRGBLED(0);
makeOutputLiveDemo4(0);
makeOutputLiveDemo0(0);
makeOutputLiveDemo1(0);
makeOutputLiveDemo2(0);
makeOutputLiveDemo3(0);
makeOutputRGBLED(0);
makeOutputPrintString(0);
makeOutputUltrasonicSensor(0);
makeOutputDrivenMotor(0);
makeOutputSortHello(0);
makeOutputPutString(0);
makeOutputMotor(0);
makeOutputLED(0);
makeOutputReverseHello(0);
makeOutputPutReverseSort(0);
makeOutputlive_demo_test1(0);
makeOutputIREmitter(0);
makeOutputGetAndPutString(0);
makeOutputCapacitiveTouchSensor(0);
makeOutputuser_DrivenLED(0);
