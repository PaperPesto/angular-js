window.addEventListener('hashchange', function(){
    var hash = window.location.hash;
    
    this.console.log('Hash changed!: ', hash);

    if(hash==='#/test/pag1'){
        this.console.log('Page1');
    }
    if(hash==='#/test/pag2'){
        this.console.log('Page2');
    }
    if(hash==='#/test/pag3'){
        this.console.log('Page3');
    }


});