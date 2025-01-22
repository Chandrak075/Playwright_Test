const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

async function moveMp4Files(sourceFolder, destinationFolder) {
    // Ensure destination folder exists
    if (!fs.existsSync(destinationFolder)) {
        fs.mkdirSync(destinationFolder, { recursive: true });
    }

    // Iterate through all files in the source folder
    fs.readdirSync(sourceFolder).forEach(file => {
        // Check if the file has an mp4 extension
        if (path.extname(file).toLowerCase() === '.mp4') {
            // Construct full file path
            const sourcePath = path.join(sourceFolder, file);
            const destinationPath = path.join(destinationFolder, file);

            // Move the file
            fs.renameSync(sourcePath, destinationPath);
            console.log(`Moved: ${file}`);
        }
    });
}

(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    // Define source and destination folders
    const sourceFolder = 'D:\\World Trip\\Tungnath & Badrinath\\Images';
    const destinationFolder = 'D:\\World Trip\\Tungnath & Badrinath\\Videos';

    // Move mp4 files
    moveMp4Files(sourceFolder, destinationFolder);

    await browser.close();
})();
