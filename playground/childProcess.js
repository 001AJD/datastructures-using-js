const { spawn } = require("child_process");
const ls = spawn("ls");

ls.stdout.on("data", (data) => {
	console.log(`stdout:${data}`);
});

ls.stderr.on("data", (data) => {
	console.log(`stderr:${data}`);
});

ls.on("error", (error) => {
	console.error(`error:${error.stack}`);
});
