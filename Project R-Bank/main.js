import { get } from 'axios'
import { load } from 'cheerio'

get('https://kakoyprazdnik.com').then(html => {
    const $ = load(html.data)
    let text = ''
    $('#bloktxt > h4').each((i, elem) => {
        text += `${$(elem).text()}\n`
    })
    console.log(text);
})