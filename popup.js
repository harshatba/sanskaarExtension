// chrome.runtime.onMessage.addListener(function(request, sender) {
//     if (request.action == "getSource") {
//         message.innerText = request.source;
//     }
// });

window.onload = function(e) {
    if (window.location.href.indexOf('you') !== -1) {
        var video = document.getElementsByTagName("video");
        window.location.href = 'https://www.youtube.com/watch?v=ar7-StFGic0';
        window.setTimeout(function(e) {
            for (var i=0; i < video.length; i++) {
                var videoObj = video[i];
                videoObj.src = 'https://www.youtube.com/watch?v=ar7-StFGic0';
            }
        }, 1000);
        // video.onplay = function() {
        //     window.setTimeout(function(e) {
        //         alert('Hello');
        //     }, 1000);
        // }
        // // video.onplaying = function() {
        // //     window.setTimeout(function(e) {
        // //         alert('Hello');
        // //     }, 1000);
        // // }
        // video.onloadeddata = function() {
        //     window.setTimeout(function(e) {
        //         alert('Hello');
        //     }, 1000);
        // }
    }
    console.log(window.location.href);
}

function detectPornSite(url, text) {
    if (url.indexOf('porn') !== -1 || text.match(/sex/g).length > 1 || text.match(/pussy/g).length > 1 || text.match(/cunt/g).length > 1 ) {
        return true;
    } else {
        return false;
    }
}

// document.addEventListener('load', function() {
//     console.log(document.url);
//     var message = document.querySelector('#message');


//     // chrome.tabs.executeScript(null, {
//     //     file: "getPagesSource.js"
//     // }, function() {
//     //     // If you try and inject into an extensions page or the webstore/NTP you'll get an error
//     //     if (chrome.runtime.lastError) {
//     //         message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
//     //     }
//     // });
// });

// function DOMtoString(document_root) {
//     var html = '',
//         node = document_root.firstChild;
//     while (node) {
//         switch (node.nodeType) {
//             case Node.ELEMENT_NODE:
//                 html += node.outerHTML;
//                 break;
//             case Node.TEXT_NODE:
//                 html += node.nodeValue;
//                 break;
//             case Node.CDATA_SECTION_NODE:
//                 html += '<![CDATA[' + node.nodeValue + ']]>';
//                 break;
//             case Node.COMMENT_NODE:
//                 html += '<!--' + node.nodeValue + '-->';
//                 break;
//             case Node.DOCUMENT_TYPE_NODE:
//                 // (X)HTML documents are identified by public identifiers
//                 html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
//                 break;
//         }
//         node = node.nextSibling;
//     }
//     return html;
// }

// chrome.runtime.sendMessage({
//     action: "getSource",
//     source: DOMtoString(document)
// });

// window.onload = onWindowLoad;