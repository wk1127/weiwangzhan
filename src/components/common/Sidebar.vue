<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                            {{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import bus from "../common/bus";
export default {
  data() {
    return {
      collapse: false,
      items: [
        {
          icon: "el-icon-setting",
          index: "home",
          title: "首页"
        },
        {
          icon: "el-icon-goods",
          index: "accountManagement",
          title: "账户管理",
          subs: [
            {
              index: "account",
              title: "账户管理"
            },
            {
              index: "user",
              title: "用户管理"
            },
            {
              index: "role",
              title: "角色管理"
            },
            {
              index: "menuvue",
              title: "菜单管理"
            }
          ]
        },
        {
          icon: "el-icon-star-off",
          index: "fansManagement",
          title: "粉丝管理",
          subs: [
            {
              index: "fans",
              title: "粉丝列表"
            },
            {
              index: "fansgroups",
              title: "粉丝分组管理"
            },
            {
              index: "member",
              title: "会员权益"
            },
            {
              index: "register",
              title: "注册参数配置"
            }
          ]
        },
        {
          icon: "el-icon-setting",
          index: "functionalColumn",
          title: "功能栏目",
          subs: [
            {
              index: "banner",
              title: "首页banner广告"
            },
            {
              index: "material",
              title: "素材管理"
            },
            {
              index: "custom",
              title: "自定义菜单"
            }
          ]
        },
        {
          icon: "el-icon-rank",
          index: "activityManagement",
          title: "活动管理",
          subs: [
            {
              index: "draw",
              title: "抽奖活动"
            },
            {
              index: "redpacket",
              title: "抢红包"
            },
            {
              index: "underline",
              title: "线下活动"
            },
            {
              index: "signin",
              title: "签到管理"
            }
          ]
        },
        {
          icon: "el-icon-mobile-phone",
          index: "cashCoupon",
          title: "代金券",
          subs: [
            {
              index: "cash",
              title: "代金券发放"
            }
          ]
        },
        {
          icon: "el-icon-message",
          index: "messageManagement",
          title: "消息管理",
          subs: [
            {
              index: "mass",
              title: "群发消息"
            },
            {
              index: "news",
              title: "新闻动态"
            }
          ]
        },
        {
          icon: "el-icon-service",
          index: "serviceManagement",
          title: "客服管理",
          subs: [
            {
              index: "reply",
              title: "客服回复"
            }
          ]
        }

        // {
        //   icon: "el-icon-tickets",
        //   index: "table",
        //   title: "基础表格"
        // },
        // {
        //   icon: "el-icon-message",
        //   index: "tabs",
        //   title: "tab选项卡"
        // },
        // {
        //   icon: "el-icon-star-on",
        //   index: "charts",
        //   title: "schart图表"
        // },
        // {
        //   icon: "el-icon-rank",
        //   index: "drag",
        //   title: "拖拽列表"
        // },
        // {
        //   icon: "el-icon-warning",
        //   index: "permission",
        //   title: "权限测试"
        // },
        // {
        //   icon: "el-icon-error",
        //   index: "404",
        //   title: "404页面"
        // }
      ]
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    }
  },
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on("collapse", msg => {
      this.collapse = msg;
    });
  }
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>
