export function makeHTML(data,stats){

    const template = `
      <section>
        <p>: min: ${stats.min}</p>
        <p>: max: ${stats.max}</p>
        <p>: sum: ${stats.sum}</p>
        <p>: var: ${stats.variance}</p>
        <p>: med: ${stats.median}</p>
        <p>: mea: ${stats.mean}</p>
        <p>: std: ${stats.stddev}</p>
        ${data}
      </section>
    `;
  
    return template;
}
export function makeIndex(datasets){
    let list = '';
    for (const data of datasets) {
      const { file, fileName } = data;
      const link = `<li><a href="${`${fileName}`}">${file}</a></li>`;
      list += link;
    }
  
    return `<ul>${list}</ul>`;
}
export function statsTemplate(title,data,showBack = false) {
    const back = showBack ? '<p><a href="/">Til baka</a></p>' : '';
    return `
    <!doctype html>
    <html>
      <head>
        <title>${title ?? ''}</title>
        <link rel="stylesheet" href="../public/styles.css">
      </head>
      <body>
        ${data ?? ''}
        ${back}
      </body>
    </html>`;
}