// class ContactMap
// {
    
//     click_map()
//     {
//         document.querySelector('.spb').onclick = function(){
//             // Сокрытие блоков других карт
//             document.getElementById('msk').style.display = "none";
//             document.getElementById('kaz').style.display = "none";
            
//             //  Визуализация блока конкретной карты
//             document.querySelector('#spb').style.display = "block";
//         }

//         document.querySelector('.msk').onclick = function(){

//             // Сокрытие блоков других карт
//             document.getElementById('spb').style.display = "none";
//             document.getElementById('kaz').style.display = "none";    
//             //  Визуализация блока конкретной карты
//             return document.querySelector('#msk').style.display = "block";
//         }

//         document.querySelector('.kaz').onclick = function(){

//             // Сокрытие блоков других карт
//             document.getElementById('msk').style.display = "none";
//             document.getElementById('spb').style.display = "none";    
//             //  Визуализация блока конкретной карты
//             return document.querySelector('#kaz').style.display = "block";
//         }
//     }

//     app()
//     {

//         document.getElementById('spb').style.display = "none";
//         document.getElementById('msk').style.display = "none";
//         document.getElementById('kaz').style.display = "none";

//         if (document.getElementById('spb').style.display == "none"){
//             document.getElementById('spb').style.display = "block";
//         }

//         return this.click_map();

//     }
// }

// let app = new ContactMap();
// app.app();


class Carousel
{
    app()
    {
        let btn_right = document.getElementById('right');
        let btn_left = document.getElementById('left');

        let x = 0;

        document.getElementById('right').onclick = function(){
            
            return 1;
        }
        console.log(+x);

        document.getElementById('left').onclick = function(){
            return console.log('321');
        }
    }
}

let carousel_app = new Carousel();

carousel_app.app();
