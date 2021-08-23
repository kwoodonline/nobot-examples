const args = process.argv.slice(2);

const [names] = args;

if (names === undefined) {

    console.error('Please pass a name, e.g. node hello.js Shaun');

    process.exit(0);

}

console.log(`Good day to you, ${names}`);