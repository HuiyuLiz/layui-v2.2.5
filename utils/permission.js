function checkPermission(permissions) {
  console.log('checkPermission')
  layui.use(['jquery'], function () {
      var $ = layui.$
      $(document).ready(function () {       
        $(".auth").each(function () {
          var permission = $(this).attr("has_permission")
          if ($.inArray(+permission, permissions) == -1) {
            $(this).remove()
          }
        })
      });
    });
}

export {checkPermission}