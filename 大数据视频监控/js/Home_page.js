/**
 * Created by Administrator on 2017/10/26.
 */

//    Xabin

// 确保DOM加载完成后执行
$(document).ready(function() {
    // 应急事件处置
    $(".message_scroll").click(function () {
        EventClick();
        eventHandle();
    });

    // 地图切换button-start
    $(".map_change").click(function () {
        $(this).addClass("map_change_chose");
        $(this).siblings().removeClass("map_change_chose");
        $(this).show();
        $(this).siblings().hide();
    });
    
    $(".map_change_box").mouseenter(function () {
        $(".map_change").show();
    }).mouseleave(function () {
        $(".map_change_chose").show();
        $(".map_change_chose").siblings().hide();
    });
    // 地图切换button-end
    
    $(".tab_msg").click(function () {
        $(this).addClass("tab_msg_current");
        $(this).siblings().removeClass("tab_msg_current");
    });
    
    $(".tab_msg01").click(function () {
        $(".table1").show();
        $(".table2").hide();
    });
    
    $(".tab_msg02").click(function () {
        $(".table2").show();
        $(".table1").hide();
    });
    
    $(".video_around").click(function () {
        $(this).siblings().removeClass("video_around_chose");
        $(this).addClass("video_around_chose");
    });
    
    // 确保弹出层可以正常显示和点击
    $(".display_type_funct_sure").click(function () {
        $(".display_box").hide();
    });
    
    $(".display_type_btn").click(function (e) {
        e.stopPropagation(); // 阻止事件冒泡
        $(".display_type_box").show();
        $(".city_chose_box").hide();
    });
    
    $(".city_chose_btn").click(function (e) {
        e.stopPropagation(); // 阻止事件冒泡
        $(".city_chose_box").show();
        $(".display_type_box").hide();
    });
    
    // 点击页面其他区域关闭弹出层
    $(document).click(function(e) {
        if(!$(e.target).closest('.display_box, .map_tool').length) {
            $(".display_box").hide();
        }
    });
    
    // 轮播推送隐藏功能
    $(".scroll_tool_outbox").mouseenter(function(){
        $(".scroll_tool_outbox").addClass("scroll_tool_outbox_current");
    });
    
    $(".scroll_tool_outbox").mouseleave(function(){
        $(".scroll_tool_outbox").removeClass("scroll_tool_outbox_current");
    });
    
    // 轨迹回放功能激活
    $(".search_guiji").click(function () {
        $("#divRouteReview").show();
    });
    
    $(".close_playback").click(function () {
        $(".trajectory_box").hide();
    });
    
    $("#btnBuffer").click(function () {
        $("#divBufferSetting").show();
    });
    
    $(".total_chose_pl").click(function () {
        $(".total_chose_box").show();
    });
    
    $(".total_chose_fr").click(function () {
        $(".total_chose_box").hide();
    });
    
    // 修复地图工具栏按钮事件
    $(".map_tool").each(function() {
        $(this).css("z-index", "1000");
        $(this).css("position", "relative");
    });
    
    // 添加遮罩层移除功能
    // 监控DOM变化，自动移除遮罩层
    setInterval(function() {
        removeMapOverlays();
    }, 300);
    
    // 按钮工具栏始终保持在最上层
    $(".map_tool_outbox").css("z-index", "1500");
});

// 移除所有地图遮罩层
function removeMapOverlays() {
    $(".zTreeMask").remove();
    $('body > div[id*="mask"]').remove();
    $('body > div[class*="mask"]').remove();
    $('body > .overlay').remove();
    
    // 确保按钮可点击
    $(".map_tool").each(function() {
        $(this).css("z-index", "1000");
        $(this).css("position", "relative");
    });
}

// 解决地图遮罩问题
function fixMapOverlay() {
    // 检查DOM中是否有遮罩层，如果有则移除
    $('.map_overlay').remove();
    
    // 移除所有遮罩层
    removeMapOverlays();
}

// 页面加载完成后执行
window.onload = function() {
    fixMapOverlay();
    
    // 确保数据分析显示正常
    setTimeout(function() {
        $('.flow-data-container').css('visibility', 'visible');
        removeMapOverlays();
    }, 500);
    
    // 添加点击事件监听，确保点击任何地方后都检查并移除遮罩
    document.addEventListener('click', function() {
        setTimeout(removeMapOverlays, 100);
    });
};

//    Xabin_end










