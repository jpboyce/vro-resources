// Scriptable task object in workflow
System.log("Starting [Send Slack Message - Init]...");
System.log("\tSlack Message: "  + slackMessage );
System.log("\tCreating content package...");
content = '{"text":"'+slackMessage+'"}';
System.log("\tContent package will be: " + content);
System.log("Finished [Send Slack Message - Init]");
