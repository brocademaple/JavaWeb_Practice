function show() {
    var showBar = document.getElementById("showYourMessage");

    var userName = document.getElementsByName("userName")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var passwd = document.getElementsByName("passwd")[0].value;
    var receiver = document.getElementsByName("receiver")[0].value;
    var receiveAddress = document.getElementsByName("receiveAddress")[0].value;

    // 使用模板字符串拼接变量值
    showBar.innerHTML = `<pre>用户名: ${userName}\n邮箱: ${email}\n收件人: ${receiver}\n收件地址: ${receiveAddress}</pre>`;
}

/* 
getElementsByName 返回的是一个节点列表（NodeList），因此你需要通过索引 [0] 来访问第一个元素。

value 属性用于获取表单元素的值。

模板字符串允许你轻松地将变量嵌入到字符串中，使用反引号 (``) 包围字符串，并使用 ${} 来插入变量
 */

// function onblurName() {
//     var name = document.getElementsByName("userName");
//     var p1 = document.getElementById("p1");

//     if (name === "") {
//         p1.innerHTML += `<span style="color: red;">请输入用户名！</span>`;
//     } else {
//        p1.innerHTML = `用户名<span style="color:red";>*</span>`;
//     }
// }

var flagOfName = 0;
function onblurName() {
    var name = document.getElementsByName("userName")[0].value; // 获取 input 的值
    var p1 = document.getElementById("p1");

    if (name === "" && flagOfName === 0) { // 检查是否为空
        // 添加红色提示信息
        p1.innerHTML += '<span style="color: red;">请输入用户名！</span>';
        flagOfName = 1;  // 表示已经提示过错误信息，就不要多次打印了
    } else if (name != "" && flagOfName === 1)  {
        // 如果输入了用户名，则清除之前的错误提示
        var errorSpan = p1.querySelector('span');
        if (errorSpan) {
            p1.removeChild(errorSpan);
        }
        flagOfName = 0;
    }
}
// 这个函数有问题，还没修完