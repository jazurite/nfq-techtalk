const fs = require('fs');
const cheerio = require('cheerio');

const htmlFilePath = './index.html'; // Replace with the actual path to your HTML file


fs.readFile(htmlFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file: ${err}`);
        return;
    }

    const cheerioInstance = cheerio.load(data);

    const delayScripts = cheerioInstance(`script[is="delay-script"]`);
    delayScripts.each((index, element) => {
        const $el = cheerioInstance(element)

        if($el.attr("phase") === 'interactive') return

        $el.removeAttr('is')
        $el.attr('src', $el.attr('url'))
        $el.removeAttr('url')

        // cheerioInstance(element).attr('defer', true);
        console.log(cheerioInstance.html(element));
    });

    // const delayStylesheets = cheerioInstance(`link[is="delay-stylesheet"]`);

    // delayStylesheets.each((index, element) => {
    //     const $el = cheerioInstance(element)
    //     $el.removeAttr('is')
    //     $el.attr('rel', "stylesheet")
    //
    //     console.log(cheerioInstance.html(element));
    // });

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
