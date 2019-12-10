function slurp(name, qid) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            ready(this.responseText, qid);
        }
        console.error("Couldn't slurp a test page. :(");
    };
    xhttp.open("GET", name, true);
    xhttp.send();
}

function ready(txt, qid) {
    let page = document.createElement('html');
    page.innerHTML = txt;

    let ids = [];
    page.querySelectorAll('.correct_response_offline').forEach(
        e => ids.push(e.parentElement.getAttribute('for')));
    
    ids = ids.filter(id => id.includes(qid));
    console.log(ids);
    ids.forEach(id => {
        let nid = id.split('_');
        nid = ['choice', nid[2], nid[3]].join('_');
        console.log(nid);
        document.getElementById(nid).click()
    });
}

function main() {
    const url = document.URL.split('/');
    const tid = url[url.length - 2];
    const qid = url[url.length - 1];
    slurp(
        `https://dispace.edu.nstu.ru/ditest/index/offline/html/${tid}?format=only_data&control=add_close&score=show_full`,
        qid
    );
}

main();
