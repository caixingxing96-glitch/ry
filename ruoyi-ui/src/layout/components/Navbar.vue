<template>
<<<<<<< HEAD
  <div class="navbar" :class="'nav' + navType">
    <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

    <breadcrumb v-if="navType == 1" id="breadcrumb-container" class="breadcrumb-container" />
    <top-nav v-if="navType == 2" id="topmenu-container" class="topmenu-container" />
    <template v-if="navType == 3">
      <logo v-show="showLogo" :collapse="false"></logo>
      <top-bar id="topbar-container" class="topbar-container" />
    </template>
    <div class="right-menu">
      <template v-if="device!=='mobile'">
        <search id="header-search" class="right-menu-item" />

        <el-tooltip content="源码地址" effect="dark" placement="bottom">
          <ruo-yi-git id="ruoyi-git" class="right-menu-item hover-effect" />
        </el-tooltip>

        <el-tooltip content="文档地址" effect="dark" placement="bottom">
          <ruo-yi-doc id="ruoyi-doc" class="right-menu-item hover-effect" />
=======
  <div class="navbar">
    <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />

    <div class="right-menu">
      <template v-if="device!=='mobile'">
        <search id="header-search" class="right-menu-item" />
        
        <el-tooltip content="下载源码" effect="dark" placement="bottom">
          <ruo-yi id="ruoyi" class="right-menu-item hover-effect" />
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)
        </el-tooltip>

        <screenfull id="screenfull" class="right-menu-item hover-effect" />

        <el-tooltip content="布局大小" effect="dark" placement="bottom">
          <size-select id="size-select" class="right-menu-item hover-effect" />
        </el-tooltip>

<<<<<<< HEAD
        <el-tooltip content="消息通知" effect="dark" placement="bottom">
          <header-notice id="header-notice" class="right-menu-item hover-effect" />
        </el-tooltip>

      </template>

      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="hover">
        <div class="avatar-wrapper">
          <img :src="avatar" class="user-avatar">
          <span class="user-nickname"> {{ nickName }} </span>
=======
      </template>

      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar" class="user-avatar">
          <i class="el-icon-caret-bottom" />
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/user/profile">
            <el-dropdown-item>个人中心</el-dropdown-item>
          </router-link>
<<<<<<< HEAD
          <el-dropdown-item @click.native="setLayout" v-if="setting">
            <span>布局设置</span>
          </el-dropdown-item>
          <el-dropdown-item @click.native="lockScreen">
            <span>锁定屏幕</span>
          </el-dropdown-item>
          <el-dropdown-item divided @click.native="logout">
            <span>退出登录</span>
=======
          <el-dropdown-item>
            <span @click="setting = true">布局设置</span>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <span @click="logout">退出登录</span>
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
<<<<<<< HEAD
import TopNav from './TopNav'
import TopBar from './TopBar'
import Logo from './Sidebar/Logo'
=======
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)
import Hamburger from '@/components/Hamburger'
import Screenfull from '@/components/Screenfull'
import SizeSelect from '@/components/SizeSelect'
import Search from '@/components/HeaderSearch'
<<<<<<< HEAD
import RuoYiGit from '@/components/RuoYi/Git'
import RuoYiDoc from '@/components/RuoYi/Doc'
import HeaderNotice from './HeaderNotice'
=======
import RuoYi from '@/components/RuoYi'
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)

export default {
  components: {
    Breadcrumb,
<<<<<<< HEAD
    Logo,
    TopNav,
    TopBar,
=======
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)
    Hamburger,
    Screenfull,
    SizeSelect,
    Search,
<<<<<<< HEAD
    RuoYiGit,
    RuoYiDoc,
    HeaderNotice
=======
    RuoYi
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
<<<<<<< HEAD
      'device',
      'nickName'
=======
      'device'
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)
    ]),
    setting: {
      get() {
        return this.$store.state.settings.showSettings
<<<<<<< HEAD
      }
    },
    navType: {
      get() {
        return this.$store.state.settings.navType
      }
    },
    showLogo: {
      get() {
        return this.$store.state.settings.sidebarLogo
=======
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'showSettings',
          value: val
        })
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)
      }
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
<<<<<<< HEAD
    setLayout(event) {
      this.$emit('setLayout')
    },
    lockScreen() {
      const currentPath = this.$route.fullPath
      this.$store.dispatch('lock/lockScreen', currentPath).then(() => {
        this.$router.push('/lock')
      })
    },
    logout() {
=======
    async logout() {
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)
      this.$confirm('确定注销并退出系统吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('LogOut').then(() => {
<<<<<<< HEAD
          location.href = '/index'
        })
      }).catch(() => {})
=======
          location.reload()
        })
      })
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)
    }
  }
}
</script>

<style lang="scss" scoped>
<<<<<<< HEAD
.navbar.nav3 {
  .hamburger-container {
    display: none !important;
  }
}

=======
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
<<<<<<< HEAD
  display: flex;
  align-items: center;
  // padding: 0 8px;
  box-sizing: border-box;
=======
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)

  .hamburger-container {
    line-height: 46px;
    height: 100%;
<<<<<<< HEAD
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    margin-right: 8px;
=======
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
<<<<<<< HEAD
    flex-shrink: 0;
  }

  .topmenu-container {
    position: absolute;
    left: 50px;
  }

  .topbar-container {
    flex: 1;
    min-width: 0;
    display: flex;
    align-items: center;
    overflow: hidden;
    margin-left: 8px;
  }

  .right-menu {
    height: 100%;
    line-height: 50px;
    display: flex;
    align-items: center;
    margin-left: auto;
=======
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
<<<<<<< HEAD
      margin-right: 0px;
      padding-right: 0px;

      .avatar-wrapper {
        margin-top: 10px;
        right: 8px;
=======
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)
        position: relative;

        .user-avatar {
          cursor: pointer;
<<<<<<< HEAD
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }

        .user-nickname{
          position: relative;
          bottom: 10px;
          left: 2px;
          font-size: 14px;
          font-weight: bold;
=======
          width: 40px;
          height: 40px;
          border-radius: 10px;
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
