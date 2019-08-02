var signup = [];
                $(document).on("click", ":submit", function(e) {
                    var email = ($($email).val())
                    email = [JSON.stringify(email)];

                    localStorage.setItem('EmailsStuff', JSON.stringify(email));
            });