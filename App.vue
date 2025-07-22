<script>
	import config from './config'
	import {
		getToken
	} from '@/utils/auth'

	export default {
		onLaunch: function() {
			this.initApp()
		},
		methods: {
			// 初始化应用
			initApp() {
				// 初始化应用配置
				this.initConfig()
				// 检查用户登录状态
				//#ifdef H5
				this.checkLogin()
				//#endif
			},
			initConfig() {
				this.globalData.config = config
			},
			checkLogin() {
				if (!getToken()) {
					this.$tab.reLaunch('/pages/login')
				}
			}
		}
	}
</script>

<style lang="scss">
	@import '@/static/scss/index.scss';

	/* 修改未选中样式 - 灰色圆圈 */
	checkbox .wx-checkbox-input, 
	checkbox .uni-checkbox-input {
	  border-radius: 50%;        /* 圆形 */
	  width: 32rpx !important;
	  height: 32rpx !important;
	  border: 3rpx solid #ccc !important;
	  background-color: #fff !important; /* 确保背景为白色 */
	}
	
	/* 修改选中样式 - 均匀红色圆圈 */
	checkbox .uni-checkbox-input-checked {
	  background: #ff0000 !important;  /* 纯红色背景 */
	  border-color: #ff0000 !important; /* 红色边框 */
	}
	 
</style>