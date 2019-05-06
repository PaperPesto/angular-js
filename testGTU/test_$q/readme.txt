Dimostrazione di come funziona $q.all

getDataAsync doveva implementare il notify di $q ma non ci sono riuscitio. ho dei problemi con la sincronicità di await:
prima mi chiama 3 volte before await e poi tre votle after await...