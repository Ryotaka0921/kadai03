var dateObj = new Date();
var text = '';
var aryWeek = ['日', '月', '火', '水', '木', '金', '土'];

$("#tweet").on("click", function () {

    time = dateObj.getFullYear() + "-" +//年の取得
       ('00' + (dateObj.getMonth() + 1)).slice(-2) + "-" +//月の取得 ※0~11で取得になるため+1
       ('00' + dateObj.getDate()).slice(-2) + " " + //日付の取得
       ('00' + dateObj.getHours()).slice(-2) + ":" +//時間の取得
       ('00' + dateObj.getMinutes()).slice(-2); //分の取得

    const key = time
    const memo =  $("#textbox").val(); 
 

    localStorage.setItem(key, memo);

    const html = `
            <tr>
                <th>${key}</th> 
                <td>${memo}</td>
            </tr>
        `;

        $("#list").append(html);
    $("#textbox").empty();

})

$("#clear").on("click" ,function(){ 
    localStorage.clear();
    $("#list").empty(); 
})

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i); 
    const value = localStorage.getItem(key); 

    const html = `
        <tr>
            <th>${key}</th>
            <td>${value}</td>
        </tr>
    `;
    
    $("#list").append(html);
}