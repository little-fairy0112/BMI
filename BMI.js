//綁定dom
var sendbtn = document.querySelector('.btn');
var record = document.querySelector('.record');
var Data = JSON.parse(localStorage.getItem('DataList')) || [];  //一進入網頁就讀取localsotage有沒有DataList內容 如果沒有就給予[]


//綁定事件
sendbtn.addEventListener('click',sendData);
updateList(Data);

//送出資料時判斷BMI體態邏輯
function sendData(e){
    e.preventDefault();
    var weight = document.querySelector('.weight').value;
    var height = document.querySelector('.height').value;
    var weightInt = parseInt(weight);  //weight和height格式為string 將其型態轉為數字
    var heightInt = parseInt(height);
    var BMIRaw = weightInt / [(heightInt/100)*(heightInt/100)];  //計算BMI
    var BMIInt = BMIRaw.toFixed(2);  //將BMI四捨五入至小數第二位
    var status = '';
    var color = '';

    if (BMIInt <= 18.5){
        status = '過輕';
        color = '#31BAF9';
        tooLight(BMIInt,status,color);
    }else if(18.5 < BMIInt && BMIInt <= 25){
        status = '理想';
        color = '#86D73F';
        moderate(BMIInt,status,color);
    }else if(25 < BMIInt && BMIInt <= 30){
        status = '過重';
        color = '#FF982D';
        tooHeavy(BMIInt,status,color)
    }else if(30 < BMIInt && BMIInt <= 35){
        status='輕度肥胖';
        color = '#FF6C03';
        lightFat(BMIInt,status,color);
    }else if(35 < BMIInt && BMIInt <= 40){
        status='中度肥胖';
        color = '#FF6C03';
        mediumFat(BMIInt,status,color);
    }else if(40 < BMIInt){
        status='過度肥胖';
        color = '#FF1200';
        veryFat(BMIInt,status,color);
    }else{
        return;
    }

    var newData = {
        status: status,
        color: color,
        BMI: BMIInt,
        weight: weightInt,
        height: heightInt,
    };
    Data.push(newData);  //將新的data存入DataList
    updateList(Data);    //更新網頁上record內容
    localStorage.setItem('DataList',JSON.stringify(Data));   //更新Localstorage的內容
}

//將判斷結果顯示在網頁上
function tooLight(BMI,status,nowcolor){
    var style = '<style> .btn{pointer-events: none; background-color: #424242;border-radius: 100px;border: '+nowcolor+' 5px solid;margin-top: 92px;margin-left: 30px;}.btn p{height:30px; padding-left: 20px;color: '+nowcolor+';font-size: 30px;}#small1{font-size: 10px;} #content1{color: '+nowcolor+';font-size: 32px; width:128px; height: 32px; margin-left: 150px; margin-top: -30px; } </style> <p>'+BMI+'<span id="small1"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BMI</span></p> <div id="content1">'+status+'</div>'
    sendbtn.innerHTML = style;
}

function moderate(BMI,status,nowcolor){
    var style = '<style> .btn{pointer-events: none; background-color: #424242;border-radius: 100px;border: '+nowcolor+' 5px solid;margin-top: 92px;margin-left: 30px;}.btn p{height:30px;  padding-left: 20px;color: '+nowcolor+';font-size: 30px;}.smallbtn{ background-color: '+nowcolor+';} #small2{font-size: 10px;} #content2{color: '+nowcolor+';font-size: 32px; width:128px; height: 32px; margin-left: 150px; margin-top: -30px; } </style> <p>'+BMI+'<span id="small2"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BMI</span></p> <div id="content2">'+status+'</div>'
    sendbtn.innerHTML = style;
}

function tooHeavy(BMI,status,nowcolor){
    var style = '<style> .btn{pointer-events: none; background-color: #424242;border-radius: 100px;border: '+nowcolor+' 5px solid;margin-top: 92px;margin-left: 30px;}.btn p{height:30px; padding-left: 20px;color: '+nowcolor+';font-size: 30px;}.smallbtn{ background-color: '+nowcolor+';} #small3{font-size: 10px;} #content3{color: '+nowcolor+';font-size: 32px; width:128px; height: 32px; margin-left: 150px; margin-top: -30px; } </style> <p>'+BMI+'<span id="small3"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BMI</span></p> <div id="content3">'+status+'</div>'
    sendbtn.innerHTML = style;
}

function lightFat(BMI,status,nowcolor){
    var style = '<style> .btn{pointer-events: none; background-color: #424242;border-radius: 100px;border: '+nowcolor+' 5px solid;margin-top: 92px;margin-left: 30px;}.btn p{height:30px; padding-left: 20px;color: '+nowcolor+';font-size: 30px;}.smallbtn{ background-color: '+nowcolor+';} #small4{font-size: 10px;} #content4{color: '+nowcolor+';font-size: 32px; width:128px; height: 32px; margin-left: 150px; margin-top: -30px; } </style> <p>'+BMI+'<span id="small4"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BMI</span></p> <div id="content4">'+status+'</div>'
    sendbtn.innerHTML = style;
}

function mediumFat(BMI,status,nowcolor){
    var style = '<style> .btn{pointer-events: none; background-color: #424242;border-radius: 100px;border: '+nowcolor+' 5px solid;margin-top: 92px;margin-left: 30px;}.btn p{height:30px; padding-left: 20px;color: '+nowcolor+';font-size: 30px;}.smallbtn{ background-color: '+nowcolor+';} #small5{font-size: 10px;} #content5{color: '+nowcolor+';font-size: 32px; width:128px; height: 32px; margin-left: 150px; margin-top: -30px; } </style> <p>'+BMI+'<span id="small5"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BMI</span></p> <div id="content5">'+status+'</div>'
    sendbtn.innerHTML = style;
}

function veryFat(BMI,status,nowcolor){
    var style = '<style> .btn{pointer-events: none; background-color: #424242;border-radius: 100px;border: '+nowcolor+' 5px solid;margin-top: 92px;margin-left: 30px;}.btn p{height:30px; padding-left: 20px;color: '+nowcolor+';font-size: 30px;}.smallbtn{ background-color: '+nowcolor+'; } #small6{font-size: 10px;} #content6{color: '+nowcolor+';font-size: 32px; width:128px; height: 32px; margin-left: 150px; margin-top: -30px; } </style> <p>'+BMI+'<span id="small6"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BMI</span></p> <div id="content6">'+status+'</div>'
    sendbtn.innerHTML = style;
}


//在網頁上更新record資料
function updateList(data){
    str = '';
    var length = data.length;
    for(i=0; i<length; i++){
        str += '<li data-num = ' + i + ' style = "border-left: 5px solid ' + data[i].color + '"} <div class = "item">'+data[i].status+'</div> <div class="item"><span>BMI</span>'+ data[i].BMI+'</div><div class="item"><span>weight</span>'+ data[i].weight+'kg</div><div class="item"><span>height</span>'+ data[i].height+'cm</div> <div style="padding-top:8px;"></div></li>'
    }
    record.innerHTML = str;
}


