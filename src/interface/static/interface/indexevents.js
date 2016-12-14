function onParameterNameChange(event) {
    var block = workspace.getBlockById(event.blockId)
    if (block && block.type == 'component_create' && event.type == Blockly.Events.CHANGE && event.element == 'field') {
        if(event.name.substring(0, 3) == "INP") {
            Blockly.Blocks['input' + event.name.substring(10)] = {
                // mutator blocks for component
                init: function() {
                    this.appendDummyInput()
                        .appendField("Input " + event.newValue);
                    this.setOutput(true, null);
                    this.setColour(180);
                    this.setTooltip('');
                    this.setHelpUrl('http://www.example.com/');
                }
            };
            Blockly.Arduino['input' + event.name.substring(10)] = function(){
                this.codeName = event.newValue.trim();
                return ["<<"+event.newValue.trim()+mangler+">>", Blockly.Arduino.ORDER_ATOMIC];
            }
        } else if (event.name.substring(0, 8) == "PAR_NAME"){
            console.log(event.name.substring(8));
            Blockly.Blocks['parameter' + event.name.substring(8)] = {
                // mutator blocks for component
                init: function() {
                    this.appendDummyInput()
                        .appendField("Parameter " + event.newValue);
                    this.setOutput(true, null);
                    this.setColour(180);
                    this.setTooltip('');
                    this.setHelpUrl('http://www.example.com/');
                }
            };
            Blockly.Arduino['parameter' + event.name.substring(8)] = function(){
                this.codeName = event.newValue.trim();
                return ["<<"+event.newValue.trim()+mangler+">>", Blockly.Arduino.ORDER_ATOMIC];
            }
        }
    }
}

// whenever a new input block is added to component_create through its mutator,
// add a corresponding input block in the componnents category in the toolbar.
function onComponentModify(event) {
    var block = workspace.getBlockById(event.blockId)
    if (block && block.type == 'component_create' && event.type == Blockly.Events.CHANGE && event.element == 'mutation') {

        // Delete all input blocks
        for (var i = 0; Blockly.Blocks["input" + i]; i++) {
            Blockly.Blocks["input" + i] = null;
            delete Blockly.Blocks["input" + i];

            Toolbox.deleteBlock("input" + i, Toolbox.componentCategory);
        }
        for (var i = 0; Blockly.Blocks["parameter" + i]; i++) {
            Blockly.Blocks["parameter" + i] = null;
            delete Blockly.Blocks["parameter" + i];

            Toolbox.deleteBlock("parameter" + i, Toolbox.componentCategory);
        }

        var clauseBlock = rootBlock.nextConnection.targetBlock();
        var inputCount = 0;
        var parameterCount = 0;
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case 'component_input':
                    // add input block to toolbox
                    if (!Blockly.Blocks['input' + inputCount]) {
                        Toolbox.addBlock('<block type="' + 'input' + inputCount + '"></block>', Toolbox.componentCategory);
                        workspace.updateToolbox(Toolbox.xmlTree);
                    }

                    // create input block definition
                    Blockly.Blocks['input' + inputCount] = {
                        // mutator blocks for component
                        init: function() {
                            this.appendDummyInput()
                                .appendField("Input name");
                            this.setOutput(true, null);
                            this.setColour(180);
                            this.setTooltip('');
                            this.setHelpUrl('http://www.example.com/');
                        }
                    };
                    Blockly.Arduino['input' + inputCount] = function(){
                        // return "bfsfbjdhbjdhfbgjkdhb";
                        this.codeName = "name" + inputCount;
                        return ["<<name"+mangler+">>" + inputCount, Blockly.Arduino.ORDER_ATOMIC];
                    }
                    inputCount++;
                    break;
                case 'component_parameter':
                    // add input block to toolbox
                    if (!Blockly.Blocks['parameter' + parameterCount]) {
                        Toolbox.addBlock('<block type="' + 'parameter' + parameterCount + '"></block>', Toolbox.componentCategory);
                        workspace.updateToolbox(Toolbox.xmlTree);
                    }

                    // create parameter block definition
                    Blockly.Blocks['parameter' + parameterCount] = {
                        // mutator blocks for component
                        init: function() {
                            this.appendDummyInput()
                                .appendField("parameter name");
                            this.setOutput(true, null);
                            this.setColour(180);
                            this.setTooltip('');
                            this.setHelpUrl('http://www.example.com/');
                        }
                    };
                    Blockly.Arduino['parameter' + parameterCount] = function(){
                        // return "bfsfbjdhbjdhfbgjkdhb";
                        this.codeName = "name" + parameterCount;
                        return ["<<name"+mangler+">>" + parameterCount, Blockly.Arduino.ORDER_ATOMIC];
                    }
                    parameterCount++;
                    break;
                default:
                    break;
            }
            clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock();
        }

        Toolbox.updateToolbox();
    }
}

function onInputOutputDelete(event) {
    if (event.type == Blockly.Events.DELETE) {
        var tree = event.oldXml;

        var block = tree.getAttribute('type');
        if (tree.childNodes[0])
            var name = tree.childNodes[0].innerText;
    }
}

workspace.addChangeListener(onInputOutputDelete);
workspace.addChangeListener(onParameterNameChange);
workspace.addChangeListener(onComponentModify);