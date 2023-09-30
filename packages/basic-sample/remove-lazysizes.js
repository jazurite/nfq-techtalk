const fs = require('fs');
const cheerio = require('cheerio');

const htmlFilePath = './index.html'; // Replace with the actual path to your HTML file


fs.readFile(htmlFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file: ${err}`);
        return;
    }

    const cheerioInstance = cheerio.load(data);

    const imgs = cheerioInstance(`img`);
    imgs.each((index, element) => {

        const $el = cheerioInstance(element)

        if ($el.attr("loading") !== 'lazy') {
            $el.attr("loading", "lazy")
        }

        if ($el.hasClass('lazyload')) {
            $el.attr('src', $el.attr("data-src"))

            if (!!$el.attr("data-srcset")) {
                $el.attr('srcset', $el.attr('data-srcset'))
            }

            $el.removeClass('lazyload')
            $el.removeAttr('data-src')
            $el.removeAttr('data-srcset')
            $el.removeAttr("data-sizes")
        }
    });

    // return

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
