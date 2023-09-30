const fs = require('fs');
const cheerio = require('cheerio');

const htmlFilePath = './index.html'; // Replace with the actual path to your HTML file


fs.readFile(htmlFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file: ${err}`);
        return;
    }

    const cheerioInstance = cheerio.load(data);

    const scripts = cheerioInstance(`script`);
    scripts.each((index, element) => {

        const $el = cheerioInstance(element)

        if($el.attr('is') !== "delay-script") {
            console.log($el.html())
            // $el.attr('defer', true)
        }
    });

    return

    const modifiedHtml = cheerioInstance.html();

    fs.writeFile('backup.html', data, 'utf8', (err) => {
        if (err) {
            console.error(`Error writing to file: ${err}`);
            return;
        }
        console.log('Backup HTML saved to backup.html');
    });

    // Write the modified HTML to a file
    fs.writeFile('index.html', modifiedHtml, 'utf8', (err) => {
        if (err) {
            console.error(`Error writing to file: ${err}`);
            return;
        }
        console.log('Modified HTML saved to index.html');
    });
});
