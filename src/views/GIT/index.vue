<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      Git 是一个开源的分布式版本控制系统，是目前世界上最先进、最流行的版本控制系统。可以快速高效地处理从很小到非常大的项目版本管理。
      特点：项目越大越复杂，协同开发者越多，越能体现出 Git 的**高性能**和**高可用性**！
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <h3 style="margin: 20px 0;">1. Git配置</h3>
    <pre class="pre">
      <code class="code">
        /* 配置用户名 */
        `git config --global user.name 'XXX'`
        /* 配置邮箱 */
        `git config --global user.email 'XXX@XX.COM'`
        /* 会被写入到C:users/用户文件夹/.gitconfig 文件中 是 `Git` 的全局配置文件，配置一次即可永久生效 */

        /* 查看所有的全局配置项 */
        git config --list --global

        /* 查看指定的全局配置项 */
        git config user.name
        git config user.email

        /* 打开 git config 命令的帮助手册 */
        git help config

        /* 获取 git config 命令的快速参考 */
        git config -h

        /* 远程仓库配置SSH key */
        ssh-keygen -t rsa -b 4096 -C "远程仓库注册时的邮箱"
        /* 连续敲击 3 次回车，即可在 `C:\Users\用户文件夹\.ssh` 目录中生成 `id_rsa` 和 `id_rsa.pub` 两个文件 使用记事本打开 `id_rsa.pub` 文件，复制里面的文本内容到远程仓库的配置key里 */

      </code>
    </pre>

    <h3 style="margin: 20px 0;">2. Git命令</h3>
    <pre class="pre">
      <code class="code">
        /* 创建本地仓库 */
        git init

        /* 检查文件状态 */
        git status  或  git status -s

        /* 将指定的文件添加到暂存区 */
        git add 文件名

        /* 将指定的目录添加到暂存区 */
        git add 文件夹名/

        /* 将当前目录所有内容(文件和文件夹)添加到暂存区 */
        git add .  或  git add --all

        /* 取消暂存 */
        git reset HEAD 文件名
        git reset HEAD .     /* 取消全部暂存 */

        /* 将暂存区的内容提交到本地仓库 */
        git commit -m "这里写本次的提交信息"
        git commit --no-verify -m "这里写本次的提交信息"   /* 提交时取消检验 */

        /* 撤销对文件的修改，还原文件 */
        git checkout -- 文件名

        /* 暂存并提交 */
        git commit -a -m "日志信息"

        /* 移除文件，Git仓库和工作区中同时移除 */
        git rm -f 文件名

        /* Git仓库中移除指定的文件，但保留工作区中对应的文件 */
        git rm --cached 文件名

        /* 查看提交历史 */
        git log     /* 按时间先后顺序列出所有的提交历史，最近的提交在最上面 */
        git log -2  /* 只展示最新的两条提交历史，数字可以按需进行填写 */
        git log -2 --pretty=oneline    /* 在一行上展示最近两条提交历史的信息 */

        /* 回退到指定的版本 */
        git log --pretty=oneline    /* 在一行上展示所有的提交历史 */
        git reset --hard <code><</code>ID>   /* 根据指定的提交 ID 回退到指定版本 */
        git reflog --pretty=oneline   /* 在旧版本中查看命令操作的历史 */
        git reset --hard <code><</code>ID>   /* 再次根据最新的提交 ID，跳转到最新的版本 */

        /* 远程仓库克隆到本地 */
        git clone 远程仓库的地址
      </code>
    </pre>

    <h3 style="margin: 20px 0;">3. Git分支</h3>
    <pre class="pre">
      <code class="code">
        /* 查看分支列表 */
        git branch

        /* 创建新分支 */
        git branch 分支名称

        /* 切换分支 */
        git checkout 分支名称

        /* 分支的快速创建和切换 */
        git checkout -b 分支名称

        /* 合并分支 */
        git checkout master    /* 切换到 master 分支（主分支 也可能是main） */
        git merge 分支名称    /* 在主分支上运行命令，将 某个分支 的代码合并到 主分支 */

        /* 删除分支 */
        git branch -d 分支名称

        /* 将本地分支推送到远程仓库 */
        git push -u 远程仓库的别名 本地分支名称:远程分支名称
        git push -u origin payment:pay
        git push -u origin payment   /* 远程分支的名称和本地分支名称一致，可以对命令进行简化 */

        /* 查看远程仓库的分支列表 */
        git remote show 远程仓库名称

        /* 拉取远程分支的最新的代码 */
        git pull

        /* 删除远程分支 */
        git push 远程仓库名称 --delete 远程分支名称
        git push origin --delete pay
      </code>
    </pre>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {
    // 注册组件
  },
  data() {
    return {
      // 变量
    }
  },
  computed: {
    // 计算属性
    ...mapState(['theme'])
  },
  created() {
    // 生命周期函数 初始化后
  },
  mounted() {
  },
  methods: {
    // 事件执行函数
  }
}
</script>

<style scoped lang="scss">
.content {
  color: #000;
  .synopsis {
    font-size: 38px;
    font-weight: 700;
    margin: 40px 0;
  }
  .synopsisBox {
    width: 100%;
    padding: 20px;
    background-color:#f9f9f9 ;
    border-radius: 20px;
  }
  .br {
    margin: 50px 0;
    height: 1px;
    background-color: #ccc;
  }
  .pre {
    background-color: #2a2c3e;
    color: #fff;
    overflow-x: auto;
    border-radius: 20px;
    font-size: 24px;
    line-height: 35px;
    .code {
      background: linear-gradient(90deg,  #ffc700 0%, #e91e1e 33%, #ac61ee 66%, #00ff88 100%);
      /*设置字体颜色透明*/
      color: transparent;
      /*背景裁剪为文本形式*/
      -webkit-background-clip: text;
    }
  }
}
// 暗黑主题
.contentTheme {
  color: #fff !important;
  .synopsisBox {
    background-color:#242424;
  }
  .pre {
    background-color: #242424;
  }
}

</style>
