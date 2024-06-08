// IIFE para gestionar la inserción de URLs en los iframes
export const VideoModule = (function() {
    function insertVideo(url, id) {
        const iframe = document.getElementById(id);
        if (iframe) {
            iframe.setAttribute('src', url);
        }
    }
    
    return {
        play: function(url, id) {
            insertVideo(url, id);
        }
    };
})();
