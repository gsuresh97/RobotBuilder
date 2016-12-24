function getCode(){
    var code;
    try{
        code = Blockly.Arduino.workspaceToCode(Blockly.getMainWorkspace());
        console.log(code);
        console.log(Blockly.Python.workspaceToCode(Blockly.getMainWorkspace()));
        code += ("\n...---...\n" + Blockly.Python.workspaceToCode(Blockly.getMainWorkspace()));
        return code;
    } catch(err){
        console.log(err);
        window.alert("Please remove all blocks which are not arduino compatible. These are the ones that are disabled in the toolbar.");
    }
}

Blockly.Arduino.delay = function(){
    var code = '';
    code += "delay( " + Blockly.Arduino.valueToCode(this, 'TIME', Blockly.Arduino.ORDER_ATOMIC) + " );\n"
    return code;
}

Blockly.Python.delay = function() {
    var code = 'import time\n';
    code += "time.sleep( " + Blockly.Arduino.valueToCode(this, 'TIME', Blockly.Arduino.ORDER_ATOMIC) + "/1000. )\n"
    return code;
}

Blockly.Arduino.component_create = function() {
    var code = '';
    code += (this.getFieldValue("NAME") + "|");

    var portSet = {};

    for(var i =0; i < this.inputCount; i++){
        var port= Blockly.Arduino.valueToCode(this, "INP_PORT" + i, Blockly.Arduino.ORDER_ATOMIC);
        if(portSet[port]){
            portSet[port]++;
        } else{
            portSet[port] = 1;
        }
    }

    for(var i =0; i < this.outputCount; i++){
        var port= Blockly.Arduino.valueToCode(this, "OUT_PORT" + i, Blockly.Arduino.ORDER_ATOMIC);
        if(portSet[port]){
            portSet[port]++;
        } else{
            portSet[port] = 1;
        }
    }

    var size = 0;
    var p = "";

    for(var port in portSet){
        size++;
        p += (port + "\\" + portSet[port] + "|");
    }

    code += (size + "|");
    code += p;

    code += "##";
    code += Blockly.Arduino.statementToCode(this, "CODE");
    console.log(this.parameterCount);
    code += "##";

    for(var i = 0; i < this.outputCount; i++)
        code += this.getFieldValue("OUTPUT_NAME" + i) + mangler + "|" + Blockly.Arduino.valueToCode(this, "OUT"+i) + '|' + Blockly.Arduino.valueToCode(this, "OUT_PORT" + i, Blockly.Arduino.ORDER_ATOMIC) + "|";
    for(var i = 0; i < this.inputCount; i++)
        code += this.getFieldValue("INPUT_NAME" + i) + mangler + "%" + Blockly.Arduino.valueToCode(this, "INP_PORT" + i, Blockly.Arduino.ORDER_ATOMIC) + "^";
    for(var i = 0; i < this.parameterCount; i++)
        code += this.getFieldValue("PAR_NAME" + i) + mangler + "$" + this.getFieldValue("PAR_VAL" + i) + "$";

    return code;
}

Blockly.Python.component_create = function() {
    var code = '';
    code += (this.getFieldValue("NAME") + "|");

    var portSet = {};

    for(var i =0; i < this.inputCount; i++){
        var port= Blockly.Python.valueToCode(this, "INP_PORT" + i, Blockly.Python.ORDER_ATOMIC);
        if(portSet[port]){
            portSet[port]++;
        } else{
            portSet[port] = 1;
        }
    }

    for(var i =0; i < this.outputCount; i++){
        var port= Blockly.Python.valueToCode(this, "OUT_PORT" + i, Blockly.Python.ORDER_ATOMIC);
        if(portSet[port]){
            portSet[port]++;
        } else{
            portSet[port] = 1;
        }
    }

    var size = 0;
    var p = "";

    for(var port in portSet){
        size++;
        p += (port + "\\" + portSet[port] + "|");
    }

    code += (size + "|");
    code += p;

    code += "##";
    code += Blockly.Python.statementToCode(this, "CODE");
    console.log(this.parameterCount);
    code += "##";

    for(var i = 0; i < this.outputCount; i++)
        code += this.getFieldValue("OUTPUT_NAME" + i) + mangler + "|" + Blockly.Python.valueToCode(this, "OUT"+i) + '|' + Blockly.Python.valueToCode(this, "OUT_PORT" + i, Blockly.Python.ORDER_ATOMIC) + "|";
    for(var i = 0; i < this.inputCount; i++)
        code += this.getFieldValue("INPUT_NAME" + i) + mangler + "%" + Blockly.Python.valueToCode(this, "INP_PORT" + i, Blockly.Python.ORDER_ATOMIC) + "^";
    for(var i = 0; i < this.parameterCount; i++)
        code += this.getFieldValue("PAR_NAME" + i) + mangler + "$" + this.getFieldValue("PAR_VAL" + i) + "$";

    return code;
}


function exportCode(){
    var xhttp = new XMLHttpRequest();
    xhttp.name = "code";
    xhttp.open("POST", "export_code/", true);
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            window.alert("Component Created");
        }
    };
    var c = getCode();
    console.log(c);
    xhttp.send(c);
}
