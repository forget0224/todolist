//指定dom
var list=document.querySelector('.list');
var sendData=document.querySelector('.send');
var data =JSON.parse(localStorage.getItem('listData')) ||[];
//    ||左邊有資料就轉成陣列 沒資料就轉成空陣列


// 監聽與更新

sendData.addEventListener('click', addData);
list.addEventListener('click', toggleDone);   //點擊刪除的時候 就刪除
updateList(data);  //預設都先更新資料


//1) 點擊加入後 下面列表會新增 ，並同時更新網頁與localstorage
function addData(e){
e.preventDefault();
var txt =document.querySelector('.text').value;   //撈出文字裡的資料value
var todo= {content : txt};

data.push(todo);  //push完進去
updateList(data);//要更新一次資料
localStorage.setItem('listData',JSON.stringify(data))

}



//2)更新網頁內容
function updateList(items){

str='';
var len=items.length;
for(i-0;i<len;i++){
    str+='<li><a href="" data-index='+i+'>刪除</a><span>'+items[i].cotent+'</span></li>'

}
list.innerHTML=str;
}



//3)刪除代辦事項 利用a連結去做
function toggleDone(e){
e.preventDefault();
if(e.target.nodeName!=='A'){return};
var index =e.target.dataset.index;
data.splice(index,1);
localStorage.setItem('listData',JSON.stringify(data));
updateList();

}










