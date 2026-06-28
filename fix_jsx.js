const fs = require('fs');
const path = require('path');

const dir = path.join('c:', 'Applications', 'beauty_therapy_spa', 'pages');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');

    // Fix unclosed <img> tags (multiline support)
    content = content.replace(/<img([^>]*)>/g, (match, inner) => {
        if (inner.trim().endsWith('/')) return match;
        return `<img${inner} />`;
    });

    // Fix unclosed <input> tags
    content = content.replace(/<input([^>]*)>/g, (match, inner) => {
        if (inner.trim().endsWith('/')) return match;
        return `<input${inner} />`;
    });

    // Fix <br> tags
    content = content.replace(/<br([^>]*)>/g, (match, inner) => {
        if (inner.trim().endsWith('/')) return match;
        return `<br${inner} />`;
    });

    // Fix <hr> tags
    content = content.replace(/<hr([^>]*)>/g, (match, inner) => {
        if (inner.trim().endsWith('/')) return match;
        return `<hr${inner} />`;
    });

    // Fix React DOM attributes that html-to-jsx might miss
    content = content.replace(/tabindex=/g, 'tabIndex=');
    content = content.replace(/onclick=/g, 'onClick=');
    content = content.replace(/onsubmit=/g, 'onSubmit=');
    content = content.replace(/onchange=/g, 'onChange=');
    content = content.replace(/readonly/g, 'readOnly');
    content = content.replace(/required/g, 'required={true}');
    content = content.replace(/disabled/g, 'disabled={true}');
    // Note: the regex for boolean attributes should match isolated words, but keeping it simple for now, maybe use replace(/\srequired(\s|>)/, ' required={true}$1')

    // Actually html to jsx might have converted required to required="required". Let's handle generic cases:
    content = content.replace(/ stroke-linecap/g, ' strokeLinecap');
    content = content.replace(/ stroke-linejoin/g, ' strokeLinejoin');
    content = content.replace(/ stroke-width/g, ' strokeWidth');
    content = content.replace(/ fill-rule/g, ' fillRule');
    content = content.replace(/ clip-rule/g, ' clipRule');
    content = content.replace(/ viewBox/ig, ' viewBox');
    content = content.replace(/ class=/g, ' className=');

    fs.writeFileSync(path.join(dir, file), content);
    console.log('Fixed', file);
});
