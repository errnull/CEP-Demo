
function helloWorldBtnDidClick() {

    var csInterface = new CSInterface();
    csInterface.evalScript("getProjectInfo()", function (result) {

        alert("资源路径：" + result);

    });
}