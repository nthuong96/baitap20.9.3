function transfer()    {
    let x= +document.getElementById("nhapvao").value;
    let y= +document.getElementById("from").value;
    let z= +document.getElementById("to").value;
    let a= x*z/y;
    document.write("so tien la:" + a);}

function total() {
    let math= +document.getElementById("math_grade").value;
    let physic= +document.getElementById("physic_grade").value;
    let biology= +document.getElementById("biology_grade").value;
    let tong= math+physic+biology
    document.getElementById("tong").innerHTML="tong diem là"+tong;
}
function average() {
    let math= +document.getElementById("math_grade").value;
    let physic= +document.getElementById("physic_grade").value;
    let biology= +document.getElementById("biology_grade").value;
    let tb= (math+physic+biology)/3
    document.getElementById("tb").innerHTML="diem trung binh là"+ tb;
}

function tong() {
    let number1= +document.getElementById("number1").value;
    let number2= +document.getElementById("number2").value;
    let tong1= number1+number2;
    document.getElementById("1").innerHTML="tong  là"+tong1;

}
function tru() {
    let number1= +document.getElementById("number1").value;
    let number2= +document.getElementById("number2").value;
    let tru1= number1-number2;
    document.getElementById("2").innerHTML="tru  là"+tru1;}
function nhan() {
    let number1= +document.getElementById("number1").value;
    let number2= +document.getElementById("number2").value;
    let nhan1= number1*number2;
    document.getElementById("3").innerHTML="tich  là"+nhan1;}
function chia() {
    let number1= +document.getElementById("number1").value;
    let number2= +document.getElementById("number2").value;
    let chia1= number1/number2;
    document.getElementById("4").innerHTML="chia  là"+chia1;}