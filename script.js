function tab(numb){
    if (numb ==1){
        document.getElementById('pro1').style.display='block';
        document.getElementById('pro2').style.display='block';
        document.getElementById('pro3').style.display='block';
    }
    else if(numb ==2){
        document.getElementById('pro1').style.display='block';
        document.getElementById('pro2').style.display='none';
        document.getElementById('pro3').style.display='none';
    }
    else if(numb ==3){
        document.getElementById('pro1').style.display='none';
        document.getElementById('pro2').style.display='block';
        document.getElementById('pro3').style.display='none';
    }
    else if(numb ==4){
        document.getElementById('pro1').style.display='none';
        document.getElementById('pro2').style.display='none';
        document.getElementById('pro3').style.display='block';
    }
}
