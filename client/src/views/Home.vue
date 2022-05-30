<template>
  <div>
    <!-- Left sider bar, Header , main -->
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <!-- menu container -->

        <el-menu>
          <!-- group 1 -->
          <el-submenu
            v-for="item in menuList"
            :key="item.id"
            :index="item.id + ''"
          >
            <!--toggle title -->
            <span slot="title">
              <!-- dynamic get the data -->
              <i :class="iconObej[item.id]"></i>

              {{ item.authName }}</span
            >

            <el-menu-item
              v-for="subItem in item.children"
              :key="subItem.id"
              :index="subItem.id + ''"
              ><i class="el-icon-menu"></i
              ><span>{{ subItem.authName }}</span></el-menu-item
            >
          </el-submenu>
        </el-menu>
      </el-aside>

      <!-- header and component menu content -->
      <el-container>
        <!-- header section -->
        <el-header style="text-align: right; font-size: 12px">
          <el-button type="info" @click="logout">退出</el-button>
        </el-header>
        <!-- main content -->
        <el-main>
          <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import menuList from "../config/menuConfig";

export default {
  name: "Home",
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {
      tableData: Array(20).fill(item),
      // fake data generate
      menuList: menuList,
      iconObej: {
        "125": "el-icon-user-solid",
        "103": "el-icon-s-operation",
        "101": "el-icon-s-goods",
        "102": "el-icon-s-order",
        "145": "el-icon-s-data",
      },
    };
  },

  created() {
    console.log(menuList);
  },

  methods: {
    logout() {
      // save the token into the session
      window.sessionStorage.clear();
      // router push to the /home section
      this.$router.push("/");
    },
  },
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
