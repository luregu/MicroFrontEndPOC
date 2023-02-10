let microFrontEndDemo = {
    refreshEvent: new Event('refresh-data'),

    createRequestHeader: () => {
        // If all apps are under one domain, you can use this code to read from web storage
        const headers = new Headers();
        const token = window.localStorage.getItem('access_token');
        headers.append('Authorization', `Bearer ${token}`);
        return headers;
    },

    loadApp: (url, headers, insertDivId) => {
        console.log(url);
        console.log(headers);
        console.log(insertDivId);
        window.fetch(url, { method: 'GET', mode: 'cors', headers: headers })
            .then((response) => {
                return response.text();
            })
            .then((html) => {
                let appContainer = document.getElementById(insertDivId);
                appContainer.innerHTML = html;
                console.log(appContainer);
                console.log(html);
                // script will not execute unless the script is added into a script tag
                Array.from(appContainer.querySelectorAll("script")).forEach(scriptTag =>
                {
                    console.log(scriptTag);
                    const realScriptTag = document.createElement("script");
                    Array.from(scriptTag.attributes).forEach(attr => {
                        realScriptTag.setAttribute(attr.name, attr.value);
                    });
                    console.log(realScriptTag);
                    realScriptTag.appendChild(document.createTextNode(scriptTag.innerHTML));
                    scriptTag.parentNode.replaceChild(realScriptTag, scriptTag);
                });
            });
    }
};

//(function startup() {
//    let headers = microFrontEndDemo.createRequestHeader();
//    window.fetch('config/config.json', { method: 'GET' })
//        .then((response) => {
//            return response.json();
//        })
//        .then((config) => {
//            microFrontEndDemo.loadApp(config.app1Location, headers, 'app1Location');

//        });
//})();



function ejecutar(caso) {
    let headers = microFrontEndDemo.createRequestHeader();
    window.fetch('config/config.json', { method: 'GET' })
        .then((response) => {
            return response.json();
        })
        .then((config) => {
            let el = document.getElementById("app-container");
            console.log("el: ", el);
            console.log(el.hasChildNodes());
            if (el.hasChildNodes()) {
                let children = el.childNodes;
                for (node of children) {
                    console.log("node: ", node);
                    node.remove();
                }
            }
            let newEl = document.createElement("div");

            switch (caso) {
                case '1':
                    console.log("ejecutar 1");
                    newEl.id = "app1Location";
                    newEl.className = "app-tile";
                    el.appendChild(newEl);

                    //console.log('1');
                    //document.getElementById("app1Location").style.display = "block";
                    //document.getElementById("app2Location").style.display = "none";
                    //document.getElementById("app3Location").style.display = "none";
                    //document.getElementById("app4Location").style.display = "none";
                    //document.getElementById("app5Location").style.display = "none";
                    microFrontEndDemo.loadApp(config.app1Location, headers, 'app1Location');
                    break;
                case '2':
                    console.log("ejecutar 2");
                    console.log(el);
                    newEl.id = "app2Location";
                    newEl.className = "app-tile";
                    el.appendChild(newEl);


                    //console.log('2');
                    //document.getElementById("app1Location").style.display = "none";
                    //document.getElementById("app2Location").style.display = "block";
                    //document.getElementById("app3Location").style.display = "none";
                    //document.getElementById("app4Location").style.display = "none";
                    //document.getElementById("app5Location").style.display = "none";
                    microFrontEndDemo.loadApp(config.app2Location, headers, 'app2Location');
                    break;
                case '3':

                    newEl.id = "app3Location";
                    newEl.className = "app-tile";
                    el.appendChild(newEl);
                    //console.log('3');
                    //document.getElementById("app1Location").style.display = "none";
                    //document.getElementById("app2Location").style.display = "none";
                    //document.getElementById("app3Location").style.display = "block";
                    //document.getElementById("app4Location").style.display = "none";
                    //document.getElementById("app5Location").style.display = "none";

                    microFrontEndDemo.loadApp(config.app3Location, headers, 'app3Location');
                    break;
                case '4':
                    newEl.id = "app4Location";
                    newEl.className = "app-tile";
                    el.appendChild(newEl);

                    //console.log('4');
                    //document.getElementById("app1Location").style.display = "none";
                    //document.getElementById("app2Location").style.display = "none";
                    //document.getElementById("app3Location").style.display = "none";
                    //document.getElementById("app4Location").style.display = "block";
                    //document.getElementById("app5Location").style.display = "none";
                    microFrontEndDemo.loadApp(config.app4Location, headers, 'app4Location');
                    break;
                case '5':
                    newEl.id = "app5Location";
                    newEl.className = "app-tile";
                    el.appendChild(newEl);

                    //console.log('5');
                    //document.getElementById("app1Location").style.display = "none";
                    //document.getElementById("app2Location").style.display = "none";
                    //document.getElementById("app3Location").style.display = "none";
                    //document.getElementById("app4Location").style.display = "none";
                    //document.getElementById("app5Location").style.display = "block";
                    microFrontEndDemo.loadApp(config.app5Location, headers, 'app5Location');
                    break;
            }

            

        });
};