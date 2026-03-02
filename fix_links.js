const fs = require('fs');
const path = require('path');

const dir = 'c:/Applications/beauty_therapy_spa/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    content = content.replace(/>CONTACT<\/a>/g, '>CONTACT</a>');

    // Replace links with # hrefs
    content = content.replace(/href="#"([^>]*)>CONTACT<\/a>/g, 'href="contact_location.html"$1>CONTACT</a>');
    content = content.replace(/href="#"([^>]*)>BEST OFERS<\/a>/g, 'href="best_offers.html"$1>BEST OFFERS</a>');
    content = content.replace(/href="#"([^>]*)>BEST OFFERS<\/a>/g, 'href="best_offers.html"$1>BEST OFFERS</a>');
    content = content.replace(/href="#"([^>]*)>GALLERY<\/a>/g, 'href="gallery.html"$1>GALLERY</a>');
    content = content.replace(/href="#"([^>]*)>PRODUCTS<\/a>/g, 'href="products.html"$1>PRODUCTS</a>');

    fs.writeFileSync(path.join(dir, file), content);
});
console.log("Links updated!");
