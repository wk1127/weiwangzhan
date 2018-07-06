import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: {
                title: '自述文件'
            },
            children: [{
                    path: '/home',
                    component: resolve => require(['../components/page/Homepage.vue'], resolve),
                    meta: {
                        title: '首页'
                    }
                },
                //账户管理
                {
                    path: '/account',
                    component: resolve => require(['../components/page/Account.vue'], resolve),
                    meta: {
                        title: '账户管理  /  账户管理'
                    }
                },
                {
                    path: '/user',
                    component: resolve => require(['../components/page/User.vue'], resolve),
                    meta: {
                        title: '账户管理  /  用户管理'
                    }
                },
                {
                    path: '/role',
                    component: resolve => require(['../components/page/Role.vue'], resolve),
                    meta: {
                        title: '账户管理  /  角色管理'
                    }
                },
                {
                    path: '/menuvue',
                    component: resolve => require(['../components/page/Menuvue.vue'], resolve),
                    meta: {
                        title: '账户管理  /  菜单管理'
                    }
                },
                //粉丝管理
                {
                    path: '/fans',
                    component: resolve => require(['../components/page/Fans.vue'], resolve),
                    meta: {
                        title: '粉丝管理  /  粉丝列表'
                    }
                },
                {
                    path: '/fansgroups',
                    component: resolve => require(['../components/page/Fansgroups.vue'], resolve),
                    meta: {
                        title: '粉丝管理  /  粉丝分组管理'
                    }
                },
                {
                    path: '/member',
                    component: resolve => require(['../components/page/Member.vue'], resolve),
                    meta: {
                        title: '粉丝管理  /  会员权益'
                    }
                },
                {
                    path: '/register',
                    component: resolve => require(['../components/page/Register.vue'], resolve),
                    meta: {
                        title: '粉丝管理  /  注册参数配置'
                    }
                },
                //功能栏目
                {
                    path: '/banner',
                    component: resolve => require(['../components/page/Banner.vue'], resolve),
                    meta: {
                        title: '功能栏目  /  首页广告',
                        permission: true
                    }
                },
                {
                    path: '/material',
                    component: resolve => require(['../components/page/Material.vue'], resolve),
                    meta: {
                        title: '功能栏目  /  素材管理'
                    }
                },
                {
                    path: '/custom',
                    component: resolve => require(['../components/page/Custom.vue'], resolve),
                    meta: {
                        title: '功能栏目  /  自定义菜单'
                    }
                },
                //活动管理
                {
                    path: '/draw',
                    component: resolve => require(['../components/page/Draw.vue'], resolve),
                    meta: {
                        title: '活动管理  /  抽奖活动'
                    }
                },
                {
                    path: '/redpacket',
                    component: resolve => require(['../components/page/Redpacket.vue'], resolve),
                    meta: {
                        title: '活动管理  /  抢红包'
                    }
                },
                {
                    path: '/underline',
                    component: resolve => require(['../components/page/Underline.vue'], resolve),
                    meta: {
                        title: '活动管理  /  线下活动'
                    }
                },
                {
                    path: '/signin',
                    component: resolve => require(['../components/page/Signin.vue'], resolve),
                    meta: {
                        title: '活动管理  /  签到管理'
                    }
                },
                //代金券
                {
                    path: '/cash',
                    component: resolve => require(['../components/page/Cash.vue'], resolve),
                    meta: {
                        title: '代金券  /  代金券发放'
                    }
                },
                //消息管理
                {
                    path: '/mass',
                    component: resolve => require(['../components/page/Mass.vue'], resolve),
                    meta: {
                        title: '消息管理  /  群发消息'
                    }
                },
                {
                    path: '/news',
                    component: resolve => require(['../components/page/News.vue'], resolve),
                    meta: {
                        title: '消息管理  /  新闻动态'
                    }
                },
                //客服管理
                {
                    path: '/reply',
                    component: resolve => require(['../components/page/Reply.vue'], resolve),
                    meta: {
                        title: '客服管理  /  客服回复'
                    }
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '/404',
            component: resolve => require(['../components/page/404.vue'], resolve)
        },
        {
            path: '/403',
            component: resolve => require(['../components/page/403.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
