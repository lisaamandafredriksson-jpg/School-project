function gtav() { 
    let xhr = new XMLHttpRequest(); // Skapar en XMLHttpRequest

    xhr.open('GET', '/AJAX/gtav.txt', true); // GEt = hämtar data, länk från vart, gör så sidan fortsääter funka vid hämtning
    xhr.onload = function () { // Körs när servern får svar
     
        $('#gtav img').fadeOut('slow', function () { //lerar efter bild med ID och lägger på function "fadeOut"
            // $ är jQuery kommand och förkortar "document.getElementById" 
            $('#gtav').html(xhr.responseText); // ersätter bilden med text från textfilen
        
        });
    };

    xhr.send(); // skickar förfrågan till servern
}
    

function skyrim() { 
    let xhr = new XMLHttpRequest(); 

    xhr.open('GET', '/AJAX/skyrim.txt', true); 
    xhr.onload = function () { 

        $('#skyrim img').fadeOut('slow', function () { 
            
            $('#skyrim').html(xhr.responseText); 
        
        });
    };

    xhr.send();
}
function cyperpunk() { 
    let xhr = new XMLHttpRequest(); 

    xhr.open('GET', '/AJAX/cyperpunk.txt', true); 
    xhr.onload = function () { 

        $('#cyperpunk img').fadeOut('slow', function () { 
            
            $('#cyperpunk').html(xhr.responseText); 
        
        });
    };

    xhr.send();
}

function batman() { 
    let xhr = new XMLHttpRequest(); 

    xhr.open('GET', '/AJAX/batman.txt', true); 
    xhr.onload = function () { 

        $('#batman img').fadeOut('slow', function () { 
            
            $('#batman').html(xhr.responseText); 
        
        });
    };

    xhr.send();
}

function MW2() { 
    let xhr = new XMLHttpRequest(); 

    xhr.open('GET', '/AJAX/MW2.txt', true); 
    xhr.onload = function () { 

        $('#MW2 img').fadeOut('slow', function () { 
            
            $('#MW2').html(xhr.responseText); 
        
        });
    };

    xhr.send();
}

function GoW4() { 
    let xhr = new XMLHttpRequest(); 

    xhr.open('GET', '/AJAX/GoW4.txt', true); 
    xhr.onload = function () { 

        $('#GoW4 img').fadeOut('slow', function () { 
            
            $('#GoW4').html(xhr.responseText); 
        
        });
        
    };

    xhr.send();
}
    


function ME3() { 
    let xhr = new XMLHttpRequest(); 

    xhr.open('GET', '/AJAX/ME3.txt', true); 
    xhr.onload = function () { 

        $('#ME3 img').fadeOut('slow', function () { 
            
            $('#ME3').html(xhr.responseText); 
        
        });
    };

    xhr.send();
}
    
function warframe() { 
    let xhr = new XMLHttpRequest(); 

    xhr.open('GET', '/AJAX/warframe.txt', true); 
    xhr.onload = function () { 

        $('#warframe img').fadeOut('slow', function () { 
            
            $('#warframe').html(xhr.responseText); 
        
        });
    };

    xhr.send();
}
    
function r6() { 
    let xhr = new XMLHttpRequest(); 

    xhr.open('GET', '/AJAX/RainbowSixSiege.txt', true); 
    xhr.onload = function () { 

        $('#r6 img').fadeOut('slow', function () { 
            
            $('#r6').html(xhr.responseText); 
        
        });
    };

    xhr.send();
}
    

function battlefield2042() { 
    let xhr = new XMLHttpRequest(); 

    xhr.open('GET', '/AJAX/battlefield2042.txt', true); 
    xhr.onload = function () { 

        $('#battlefield2042 img').fadeOut('slow', function () { 
            
            $('#battlefield2042').html(xhr.responseText); 
        
        });
    };

    xhr.send();
}

function battlefieldV() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/AJAX/battlefieldV.txt', true);

    xhr.onload = function () {
        $('#battlefieldV img').fadeOut('slow', function () {
            $('#battlefieldV').html(xhr.responseText);
        });
    };

    xhr.send();
}

function battlefield6() { 
    let xhr = new XMLHttpRequest(); 

    xhr.open('GET', '/AJAX/battlefield6.txt', true); 
    xhr.onload = function () { 

        $('#battlefield6 img').fadeOut('slow', function () { 
            
            $('#battlefield6').html(xhr.responseText); 
        
        });
    };

    xhr.send();
}