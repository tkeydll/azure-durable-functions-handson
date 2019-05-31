const df = require("durable-functions");

module.exports = df.orchestrator(function* (context) {
    context.log("Starting chain sample");
    const output = [];
    output.push(yield context.df.callActivity("E1_SayHello", "Tokyo"));
    output.push(yield context.df.callActivity("E1_SayHello", "Saitama"));
    output.push(yield context.df.callActivity("E1_SayHello", "Misawa"));

    return output;
});