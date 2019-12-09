"use strict";

function replace(element: HTMLElement) {
    let urls: NodeListOf<HTMLAnchorElement> = element.querySelectorAll("a[title][href^='https://t.co']")
    for (let i = 0; i < urls.length; i++) {
        urls[i].href = urls[i].title
    }
}

const observerOpts: MutationObserverInit = {
    "childList": true,
    "subtree": true,
    "characterData": false,
    "attributes": false
}

const mo = new MutationObserver(function (mutationList) {
    for (let i = 0; i < mutationList.length; i++) {
        replace(mutationList[i].target.parentElement!);
    }
})

mo.observe(document.body, observerOpts)
