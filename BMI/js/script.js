

let button = document.getElementById('btn');
button.addEventListener('click', () => {
    const wight = parseInt(document.getElementById('wight').value);
    const height = parseFloat(document.getElementById('height').value);
    const bmisolution = wight / Math.pow(height, 2);
    if (wight == "" || isNaN(wight) || wight <= 0) { 

        document.getElementById('heighterrer').innerHTML = '';
        
        document.getElementById('wighterrer').innerHTML = 'Please Insert Your correct Wight';
        document.getElementById('wighterrer').style.color = 'red';
        document.getElementById('wighterrer').style.fontSize = '12px';

    } else if (height == "" || isNaN(height) || height <= 0 || height > 2) { 

        document.getElementById('wighterrer').innerHTML = '';
        
        document.getElementById('heighterrer').innerHTML = 'Please Insert Your correct Height';
        document.getElementById('heighterrer').style.color = 'red';
        document.getElementById('heighterrer').style.fontSize = '12px';

    } else if (wight != "" && height != "" && bmisolution < 18) {

        document.getElementById('heighterrer').innerHTML = '';
        document.getElementById('wighterrer').innerHTML = '';

        document.getElementById('bmiSolutions').innerHTML = 'Under Body Wight ';
        document.getElementById('bmiSolutions').style.color = 'red';
        
    } else if (wight != "" && height != "" && bmisolution > 18 && bmisolution < 24) { 

        document.getElementById('heighterrer').innerHTML = '';
        document.getElementById('wighterrer').innerHTML = '';

        document.getElementById('bmiSolutions').innerHTML = 'Normal Body Wight';
        document.getElementById('bmiSolutions').style.color = 'green';
        
    } else {

        document.getElementById('heighterrer').innerHTML = '';
        document.getElementById('wighterrer').innerHTML = '';

        document.getElementById('bmiSolutions').innerHTML = 'Over Body Wight';
        document.getElementById('bmiSolutions').style.color = 'red';
        
    }

});