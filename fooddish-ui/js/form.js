$("#myform").dform({
    "action" : "index.html",
    "method" : "get",
    "html" :
        [
            {
                "type" : "p",
                "html" : "You must login"
            },
            {
                "name" : "username",
                "id" : "txt-username",
                "caption" : "Username",
                "type" : "text",
                "placeholder" : "E.g. user@example.com"
            },
            {
                "name" : "password",
                "caption" : "Password",
                "type" : "password"
            },
            {
                "type" : "submit",
                "value" : "Login"
            }
        ]
});