var slick = slick || {};
slick.commentEditor = {};

(function() {
    
	(function uploadMediaEvent(){
        var mediaForm = document.querySelector("#comment-form");
        mediaForm.addEventListener("submit", function(event){
            
            event.preventDefault();
            var action = this.action;
            var method = this.method;
            var formData = new FormData(this);
            var callback = addComment;

            sendXhr(action, method, formData, callback);

        });
    }());
    
    /**
     * Send all AJAX Requests
     * @param {string} action - The location of the request.
     * @param {string} method - The method of the request.
     * @param {object} formData - The form contents.
     * @param {function} callback - The function to call when receiving a response.
     */
    function sendXhr(action, method, formData, callback) {
    
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                var json = JSON.parse(xhr.responseText);
                callback(json);
            }
        };
        xhr.open(method, action, true);
        if (formData == null){
            xhr.send();
        } else {
            xhr.send(formData);
        }
    }
    
    /**
     * Add Comment
     * 
     * Adds media to the view.
     * @param {object} json - The object returned from the ajax
     */
    function addComment(json) {
        sendMessage(json);
        //showComment(json.content);
    }
    
    function showComment(content) {
        
        var commentCount = document.querySelectorAll('#comment-list > .comment').length;
        
        content.mediaId = commentCount;

        // Grab the inline template
        var mediaTemplate = document.getElementById('media-list-item').innerHTML;
        
        // Compile the template
        var compiledTemplate = Handlebars.compile(mediaTemplate);
        
        // Render the data into the template (as a string!?)
        var message = compiledTemplate(content);
        
        // Insert the message into the DOM
        document.getElementById('upload-form').insertAdjacentHTML('afterend', message);
    }

}).apply(slick.commentEditor);