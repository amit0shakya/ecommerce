
let _trendTab=document.getElementsByClassName("navtab")[0].childNodes[1];
let _trendItems = document.getElementsByClassName("trendItems")[0].childNodes
let _tt

function trendTab(_who,_tab){

    if(_tt){
        _tt.style.display='none';
    }

    if(_trendTab){
        _trendTab.style.backgroundColor='transparent';
    }

    switch(_tab){
        case 'featured': _tt= _trendItems[1]
                            break;

        case 'seller':   _tt= _trendItems[3]
                            break;
        
        case 'new':     _tt =  _trendItems[5]
                            break;
    }

    _tt.style.display='initial';
    _who.style.backgroundColor="#fcc902";
    _trendTab = _who;
}

trendTab(_trendTab,'featured');