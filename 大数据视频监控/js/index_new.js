/**
 * Created by Administrator on 2017/5/17.
 */

$(function(){
    // index();
    $(".index_nav ul li").each(function(index){
        $(this).click(function(){
            $(this).addClass("nav_active").siblings().removeClass("nav_active");
            $(".index_tabs .inner").eq(index).fadeIn().siblings("div").stop().hide();
            if(index==1){
                yingXiao();
            }else if(index==2){
                shouRu();
            }else if(index==3){
                AnQuan();
            }
            // 删除游客分析(user)和管理员工分析(manage)相关的代码
        })
    });
    $(".tabs ul li").each(function(index){
       $(this).click(function(){
           $(".tabs ul li div .div").removeClass("tabs_active");
           $(this).find("div .div").addClass("tabs_active");
           $(".tabs_map>div").eq(index).fadeIn().siblings("div").stop().hide();
       })
   });
    $(".middle_top_bot ul li").each(function(){
        $(this).click(function(){
            $(".middle_top_bot ul li").removeClass("middle_top_bot_active");
            $(this).addClass("middle_top_bot_active");
        })
    });

});

/*顶部切换*/
$(function () {
    $('.inner')[$('.total_chose_all li').index($('.total_chose_all li.current'))].style.display = 'block';
    $('.total_chose_all li').click(function(){
        $('.total_chose_all li').removeClass('current');
        $(this).addClass('current');
        $('.inner').css('display', 'none');
        $('.inner')[$('.total_chose_all li').index(this)].style.display = 'block';

    });
});

// 删除user和manage函数（游客分析和管理员工分析）

// 营销分析
function yingXiao(){
    // 24小时购买时间分析
    var zhengtian = echarts.init(document.getElementById('zhengtian'));
    var option_zhengtian = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['产品类型1','产品类型2'],
            textStyle: {
                color: '#ffffff'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['0:00','2:00','4:00','6:00','8:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00'],
            axisLine: {
                lineStyle: {
                    color: '#ffffff'
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#ffffff'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#aaaaaa'
                }
            }
        },
        series: [
            {
                name:'产品类型1',
                type:'line',
                data:[20, 16, 12, 13, 38, 33, 55, 40, 33, 46, 68, 39, 10]
            },
            {
                name:'产品类型2',
                type:'line',
                data:[10, 19, 8, 9, 28, 41, 38, 52, 38, 59, 43, 42, 15]
            }
        ]
    };
    zhengtian.setOption(option_zhengtian);

    // 套餐类型分析
    var anquanSense = echarts.init(document.getElementById('taocan'));
    var option_anquan = {
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['套餐一', '套餐二', '套餐三', '套餐四', '套餐五', '套餐六', '套餐七'],
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    lineStyle: {
                        color: '#ffffff'
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLine: {
                    lineStyle: {
                        color: '#ffffff'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#aaaaaa'
                    }
                }
            }
        ],
        series : [
            {
                name:'直接访问',
                type:'bar',
                barWidth: '60%',
                data:[10, 52, 20, 33, 39, 33, 22]
            }
        ]
    };
    anquanSense.setOption(option_anquan);

    // 渠道分析
    var areaSource = echarts.init(document.getElementById('qudao'));
    option_area = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['门店直销','电话销售','网络购买','邮件营销','搜索引擎'],
            textStyle:{
                color:"#e9ebee"
            }
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'门店直销'},
                    {value:310, name:'电话销售'},
                    {value:234, name:'网络购买'},
                    {value:135, name:'邮件营销'},
                    {value:1548, name:'搜索引擎'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    normal:{
                        label:{
                            show: true,
                            formatter: '{b} : {c} ({d}%)',
                            position: 'outer'
                        },
                        labelLine :{show:true}
                    }
                }
            }
        ]
    };
    areaSource.setOption(option_area);

    // 订退分析
    var dingTui = echarts.init(document.getElementById('dingtui'));
    var option_dingTui = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['订单量','退票数'],
            textStyle: {
                color: '#ffffff'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['套餐1','套餐2','套餐3','套餐4','套餐5','套餐6','套餐7'],
                axisLine: {
                    lineStyle: {
                        color: '#ffffff'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '订单量',
                min: 0,
                max: 250,
                interval: 50,
                axisLine: {
                    lineStyle: {
                        color: '#ffffff'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#aaaaaa'
                    }
                },
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                type: 'value',
                name: '退票数',
                min: 0,
                max: 25,
                interval: 5,
                axisLine: {
                    lineStyle: {
                        color: '#ffffff'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#aaaaaa'
                    }
                },
                axisLabel: {
                    formatter: '{value}'
                }
            }
        ],
        series: [
            {
                name:'订单量',
                type:'bar',
                data:[150, 180, 85, 195, 135, 65, 225]
            },
            {
                name:'退票数',
                type:'line',
                yAxisIndex: 1,
                data:[10, 15, 8, 12, 9, 5, 18]
            }
        ]
    };
    dingTui.setOption(option_dingTui);

    // 按月进行趋势分析
    var yueSell = echarts.init(document.getElementById('yuesell'));
    var option_yueSell = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['销售量','退订量'],
            textStyle: {
                color: '#ffffff'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            axisLine: {
                lineStyle: {
                    color: '#ffffff'
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#ffffff'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#aaaaaa'
                }
            }
        },
        series: [
            {
                name:'销售量',
                type:'line',
                data:[120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330]
            },
            {
                name:'退订量',
                type:'line',
                data:[12, 13, 10, 13, 9, 23, 21, 18, 19, 23, 29, 33]
            }
        ]
    };
    yueSell.setOption(option_yueSell);

    // 气候与订单分析
    var qihou = echarts.init(document.getElementById('qihou'));
    var option_qihou = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        legend: {
            data:['订单量','气温'],
            textStyle: {
                color: '#ffffff'
            }
        },
        xAxis: [
            {
                type: 'category',
                data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                axisPointer: {
                    type: 'shadow'
                },
                axisLine: {
                    lineStyle: {
                        color: '#ffffff'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '订单量',
                min: 0,
                max: 250,
                interval: 50,
                axisLine: {
                    lineStyle: {
                        color: '#ffffff'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#aaaaaa'
                    }
                },
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                type: 'value',
                name: '气温',
                min: 0,
                max: 30,
                interval: 5,
                axisLine: {
                    lineStyle: {
                        color: '#ffffff'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#aaaaaa'
                    }
                },
                axisLabel: {
                    formatter: '{value} °C'
                }
            }
        ],
        series: [
            {
                name:'订单量',
                type:'bar',
                data:[180, 195, 170, 205, 185, 228, 215, 198, 182, 176, 190, 210]
            },
            {
                name:'气温',
                type:'line',
                yAxisIndex: 1,
                data:[6, 8, 12, 16, 22, 26, 29, 28, 24, 18, 12, 8]
            }
        ]
    };
    qihou.setOption(option_qihou);

    // 以下部分仍然保留其他功能相关代码
    // ...
}

// 收入支出分析相关函数
function shouRu(){
    // 保留原有代码
    // ...
}

// 安全分析相关函数
function AnQuan(){
    // 保留原有代码
    // ...
} 