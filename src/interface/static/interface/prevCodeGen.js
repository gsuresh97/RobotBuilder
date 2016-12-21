Blockly.Arduino.inherit_input = function(){
    return ["inin_" + this.getFieldValue('NAME') + ">", Blockly.Arduino.ORDER_NONE]
}

Blockly.Arduino.component_create = function() {
    var code = '';
    code += (this.getFieldValue("NAME") + "|");
    code += Blockly.Arduino.statementToCode(this, "CODE");


    for(var i =0; i < this.outputCount; i++){
        code += Blockly.Arduino.valueToCode(this, "OUT" + i) + this.getFieldValue("OUTPUT_NAME"+i) + "^";
    }
    return [code, Blockly.Arduino.ORDER_NONE]
}


function exportCodeComp(){
    var xhttp = new XMLHttpRequest();
    xhttp.name = "code";
    xhttp.open("POST", "export_builder/", true);
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            window.alert("Builder file created");
        }
    };
    var c = printYaml();
    console.log(c);
    xhttp.send(c);
}

function printYaml() {
    var code = Blockly.Arduino.workspaceToCode(Blockly.getMainWorkspace());
    console.log(code);
    return code;
}

function getCode(){
    var xhttp = new XMLHttpRequest();
    xhttp.name = "code";
    xhttp.open("POST", "export_builder/", true);
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var c = printYaml().substring(34);
            var send = "get_zip_" + c.substring(0, c.indexOf("|")) + "/"
            window.location.assign(encodeURIComponent(send));
        }
    };
    var c = printYaml();
    console.log(c);
    xhttp.send(c);


}
