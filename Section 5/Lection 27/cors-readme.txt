Se lancio la index.html da sola, sulla console da errore perché dice che non riesce a caricare pages/main.html e pages/second.html per via del -classico- errore di CORS.

Ho provato a fare la stessa cosa ma passando da un web-server tirato su al volo con nodejs e funziona!

1 - npm install -g http-server
2 - http-server
3 - da browser navigare sul web-server
4 - richiedere la stessa index.html ma da web-server

Adesso anuglarjs riesce a fare le chiamate correttamente e a farsi dare le pagine statiche.

NB. c'è anche un pacchetto npm specifico per far fare ad un server con express il lavoro sporco di server statico.